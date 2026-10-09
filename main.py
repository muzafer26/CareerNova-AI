"""
Production-ready, lightweight FastAPI backend for Live Indian Job Finder.
Uses the open-source python-jobspy library to scrape live Indian jobs from
Naukri, Indeed India, and LinkedIn without paid APIs, and persists documents
directly into Convex Cloud (https://blessed-peacock-789.convex.cloud) using
the official Convex Python client.
"""

from __future__ import annotations

import asyncio
from datetime import datetime, timezone
import hashlib
import logging
import math
import os
import threading
import time
from typing import Any, Dict, List, Optional

from cachetools import TTLCache
from fastapi import FastAPI, HTTPException, Query, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import pandas as pd
from pydantic import BaseModel, Field

# Official Convex Python Client
try:
    from convex import ConvexClient
    CONVEX_AVAILABLE = True
except ImportError:
    CONVEX_AVAILABLE = False

# Try to import jobspy scrape_jobs
try:
    from jobspy import scrape_jobs
    JOBSPY_AVAILABLE = True
except ImportError:
    JOBSPY_AVAILABLE = False

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("jobspy_convex_backend")

# Convex Deployment URL
CONVEX_URL = os.environ.get(
    "CONVEX_URL", "https://blessed-peacock-789.convex.cloud"
)
CONVEX_DEPLOY_KEY = os.environ.get("CONVEX_DEPLOY_KEY", None)

app = FastAPI(
    title="Live Indian Job Finder API (Convex Powered)",
    description="Live job scraping backend powered by python-jobspy and persisted in Convex Cloud",
    version="2.0.0",
)

# Enable CORS for frontend web app (React / Vite on port 3000 or custom origins)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory thread-safe cache with 1-hour (3600 seconds) TTL
CACHE_TTL_SECONDS = 3600
cache_lock = threading.Lock()
jobs_cache: TTLCache = TTLCache(maxsize=256, ttl=CACHE_TTL_SECONDS)


def get_convex_client() -> Optional[Any]:
    """Helper to initialize the Convex Python client if available."""
    if not CONVEX_AVAILABLE:
        return None
    try:
        client = ConvexClient(CONVEX_URL)
        if CONVEX_DEPLOY_KEY:
            client.set_auth(CONVEX_DEPLOY_KEY)
        return client
    except Exception as e:
        logger.warning(f"Failed to initialize ConvexClient: {e}")
        return None


class JobItem(BaseModel):
    title: str = Field(..., description="Job role title")
    company: str = Field(..., description="Company name")
    location: str = Field(..., description="Job location")
    job_url: str = Field(..., description="Direct link or apply URL")
    salary: Optional[str] = Field(None, description="Formatted salary or compensation if available")
    posted_date: Optional[str] = Field(None, description="ISO date or string of posting date")
    source: Optional[str] = Field(None, description="Scraping source: naukri, indeed, or linkedin")
    is_remote: Optional[bool] = Field(False, description="Whether the job is remote")
    description: Optional[str] = Field(None, description="Brief description or excerpt if present")


class JobsResponse(BaseModel):
    status: str = "success"
    count: int
    query: str
    location: str
    source_database: str = "convex"
    cached: bool = False
    timestamp: str
    jobs: List[JobItem]


def generate_job_hash(title: str, company: str, location: str, job_url: str) -> str:
    """Generate deterministic SHA-256 deduplication hash."""
    normalized_key = f"{title.lower().strip()}|{company.lower().strip()}|{location.lower().strip()}|{job_url.strip()}"
    return hashlib.sha256(normalized_key.encode("utf-8")).hexdigest()


def format_salary(row: pd.Series) -> Optional[str]:
    """Normalize Indian salaries from diverse job board schemas into a clean string."""
    min_amt = row.get("min_amount")
    max_amt = row.get("max_amount")
    currency = row.get("currency") or "INR"
    interval = row.get("interval") or "year"

    curr_symbol = "₹" if str(currency).upper() in ["INR", "RS", "RUPEES"] else f"{currency} "

    def is_valid_num(val: Any) -> bool:
        if val is None:
            return False
        try:
            f = float(val)
            return not (math.isnan(f) or math.isinf(f))
        except (ValueError, TypeError):
            return False

    has_min = is_valid_num(min_amt)
    has_max = is_valid_num(max_amt)

    if has_min and has_max:
        if min_amt == max_amt:
            return f"{curr_symbol}{int(min_amt):,} / {interval}"
        return f"{curr_symbol}{int(min_amt):,} - {curr_symbol}{int(max_amt):,} / {interval}"
    elif has_min:
        return f"{curr_symbol}{int(min_amt):,}+ / {interval}"
    elif has_max:
        return f"Up to {curr_symbol}{int(max_amt):,} / {interval}"

    raw_comp = row.get("compensation") or row.get("salary_source")
    if raw_comp and not pd.isna(raw_comp) and str(raw_comp).strip():
        return str(raw_comp).strip()

    return None


def clean_dataframe(df: pd.DataFrame) -> List[Dict[str, Any]]:
    """Clean pandas DataFrame by handling NaNs, converting types, and standardizing keys."""
    if df is None or df.empty:
        return []

    df_clean = df.copy()
    df_clean = df_clean.where(pd.notnull(df_clean), None)

    cleaned_jobs: List[Dict[str, Any]] = []

    for _, row in df_clean.iterrows():
        title = str(row.get("title") or "Software Engineer").strip()
        company = str(row.get("company") or "Technology Firm").strip()
        location = str(row.get("location") or "Bengaluru, India").strip()
        job_url = str(row.get("job_url_direct") or row.get("job_url") or "").strip()
        if not job_url:
            job_url = f"https://www.google.com/search?q={title}+{company}+jobs"

        job_hash = generate_job_hash(title, company, location, job_url)

        posted_val = row.get("date_posted")
        posted_str: str = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        if posted_val is not None and not pd.isna(posted_val):
            if isinstance(posted_val, (datetime, pd.Timestamp)):
                posted_str = posted_val.strftime("%Y-%m-%d")
            else:
                posted_str = str(posted_val).split("T")[0]

        salary_str = format_salary(row)
        min_amt = row.get("min_amount")
        max_amt = row.get("max_amount")
        salary_min = float(min_amt) if min_amt is not None and not pd.isna(min_amt) else None
        salary_max = float(max_amt) if max_amt is not None and not pd.isna(max_amt) else None

        site_str = str(row.get("site") or "naukri").lower().strip()

        is_rem = bool(row.get("is_remote")) if row.get("is_remote") is not None else False
        if not is_rem and ("remote" in location.lower() or "work from home" in title.lower()):
            is_rem = True

        desc = row.get("description")
        desc_str = str(desc).strip()[:500] if desc and not pd.isna(desc) else None

        cleaned_jobs.append({
            "title": title,
            "company": company,
            "location": location,
            "job_url": job_url,
            "salary": salary_str,
            "salary_min": salary_min,
            "salary_max": salary_max,
            "currency": str(row.get("currency") or "INR"),
            "posted_date": posted_str,
            "source": site_str,
            "is_remote": is_rem,
            "contract_type": "full_time" if "intern" not in title.lower() else "internship",
            "description": desc_str,
            "job_hash": job_hash,
        })

    return cleaned_jobs


def run_jobspy_scrape(query: str, location: str, limit: int) -> List[Dict[str, Any]]:
    """Synchronous scraper invocation executed inside a worker thread."""
    if not JOBSPY_AVAILABLE:
        raise RuntimeError("`python-jobspy` is not installed.")

    logger.info(
        f"Starting JobSpy scrape -> query='{query}', location='{location}', "
        f"limit={limit}, sources=['naukri', 'indeed', 'linkedin'], country='india'"
    )

    df: pd.DataFrame = scrape_jobs(
        site_name=["naukri", "indeed", "linkedin"],
        search_term=query,
        location=location,
        results_wanted=limit,
        hours_old=72,
        country_indeed="india",
        verbose=1,
    )

    return clean_dataframe(df)


@app.get("/", tags=["Health"])
def root() -> Dict[str, Any]:
    """Root health and service status endpoint."""
    return {
        "service": "Live Indian Job Finder API",
        "status": "online",
        "convex_connected": CONVEX_AVAILABLE,
        "convex_url": CONVEX_URL,
        "jobspy_installed": JOBSPY_AVAILABLE,
        "supported_sources": ["naukri", "indeed", "linkedin"],
        "endpoints": {
            "jobs": "/api/jobs?query=Software+Engineer&location=Bengaluru,+India&limit=15",
            "sync": "/api/jobs/sync",
            "health": "/api/health",
        },
    }


@app.get("/api/health", tags=["Health"])
def health_check() -> Dict[str, Any]:
    return {
        "status": "healthy",
        "convex_url": CONVEX_URL,
        "convex_client_available": CONVEX_AVAILABLE,
        "cache_entries": len(jobs_cache),
        "cache_ttl_seconds": CACHE_TTL_SECONDS,
        "timestamp": datetime.now(timezone.utc).isoformat(),
    }


@app.get(
    "/api/jobs",
    response_model=JobsResponse,
    summary="Scrape live Indian jobs & query from Convex",
    tags=["Jobs"],
)
async def get_jobs(
    query: str = Query(
        default="Software Engineer",
        min_length=2,
        max_length=100,
        description="Job role or search query",
    ),
    location: str = Query(
        default="Bengaluru, India",
        min_length=2,
        max_length=100,
        description="Indian city or location",
    ),
    limit: int = Query(
        default=15,
        ge=1,
        le=50,
        description="Number of jobs to retrieve",
    ),
) -> JSONResponse:
    clean_q = query.strip()
    clean_loc = location.strip()
    cache_key = f"{clean_q.lower()}||{clean_loc.lower()}||{limit}"

    # 1. Fast in-memory cache check
    with cache_lock:
        if cache_key in jobs_cache:
            cached_item = jobs_cache[cache_key]
            logger.info(f"Cache HIT for key='{cache_key}'")
            return JSONResponse(
                content={
                    "status": "success",
                    "count": len(cached_item["jobs"]),
                    "query": clean_q,
                    "location": clean_loc,
                    "source_database": "convex_cache",
                    "cached": True,
                    "timestamp": cached_item["timestamp"],
                    "jobs": cached_item["jobs"],
                }
            )

    # 2. Try fetching from Convex Cloud directly
    convex_client = get_convex_client()
    if convex_client:
        try:
            convex_jobs = convex_client.query(
                "jobs:getJobs",
                {
                    "search": clean_q,
                    "location": clean_loc,
                    "limit": limit,
                },
            )
            if convex_jobs and len(convex_jobs) >= limit:
                logger.info(f"Convex query returned {len(convex_jobs)} existing fresh jobs.")
                now_iso = datetime.now(timezone.utc).isoformat()
                return JSONResponse(
                    content={
                        "status": "success",
                        "count": len(convex_jobs),
                        "query": clean_q,
                        "location": clean_loc,
                        "source_database": "convex_cloud",
                        "cached": False,
                        "timestamp": now_iso,
                        "jobs": convex_jobs,
                    }
                )
        except Exception as ce:
            logger.warning(f"Convex query failed (will trigger scrape): {ce}")

    # 3. Live Scrape via JobSpy
    try:
        start_scrape = time.time()
        cleaned_jobs = await asyncio.wait_for(
            asyncio.to_thread(run_jobspy_scrape, clean_q, clean_loc, limit),
            timeout=45.0,
        )
        scrape_duration_ms = int((time.time() - start_scrape) * 1000)
    except asyncio.TimeoutError:
        raise HTTPException(
            status_code=status.HTTP_504_GATEWAY_TIMEOUT,
            detail="Job search scraping timed out.",
        )
    except Exception as exc:
        raise HTTPException(
            status_code=status.HTTP_502_BAD_GATEWAY,
            detail=f"Failed to scrape jobs: {str(exc)}",
        )

    # 4. Upsert scraped listings into Convex Cloud asynchronously
    if convex_client and cleaned_jobs:
        try:
            upsert_res = convex_client.mutation(
                "jobs:batchUpsertJobs",
                {"jobs": cleaned_jobs},
            )
            logger.info(f"Convex batch upsert: {upsert_res}")

            convex_client.mutation(
                "jobs:recordScrapeRun",
                {
                    "query": clean_q,
                    "location": clean_loc,
                    "sources": ["naukri", "indeed", "linkedin"],
                    "jobs_scraped": len(cleaned_jobs),
                    "jobs_inserted": upsert_res.get("inserted", 0),
                    "jobs_updated": upsert_res.get("updated", 0),
                    "duration_ms": scrape_duration_ms,
                    "status": "success",
                },
            )
        except Exception as up_err:
            logger.error(f"Convex batch mutation error: {up_err}")

    now_iso = datetime.now(timezone.utc).isoformat()

    # 5. Populate in-memory cache
    with cache_lock:
        jobs_cache[cache_key] = {
            "timestamp": now_iso,
            "jobs": cleaned_jobs,
        }

    return JSONResponse(
        content={
            "status": "success",
            "count": len(cleaned_jobs),
            "query": clean_q,
            "location": clean_loc,
            "source_database": "convex_synced",
            "cached": False,
            "timestamp": now_iso,
            "jobs": cleaned_jobs,
        }
    )


@app.post("/api/jobs/sync", tags=["Jobs"])
async def trigger_sync(
    query: str = "Software Engineer",
    location: str = "Bengaluru, India",
    limit: int = 20,
) -> Dict[str, Any]:
    """Trigger an explicit background scrape and batch sync to Convex."""
    cleaned_jobs = await asyncio.to_thread(run_jobspy_scrape, query, location, limit)
    convex_client = get_convex_client()
    if not convex_client:
        return {"status": "error", "message": "ConvexClient unavailable"}

    res = convex_client.mutation("jobs:batchUpsertJobs", {"jobs": cleaned_jobs})
    return {
        "status": "success",
        "scraped": len(cleaned_jobs),
        "convex_result": res,
    }


if __name__ == "__main__":
    import uvicorn

    port = int(os.environ.get("PORT", 8000))
    host = os.environ.get("HOST", "0.0.0.0")
    logger.info(f"Starting Live Indian Job Finder server on http://{host}:{port}")
    uvicorn.run("main:app", host=host, port=port, reload=True)
