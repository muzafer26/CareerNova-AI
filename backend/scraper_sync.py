"""
Standalone Batch Job Scraper & Convex Sync Service
Scrapes fresh Indian IT jobs from Naukri, Indeed India, and LinkedIn using python-jobspy,
cleans DataFrame records (handling NaNs, formatting dates & salaries),
generates deterministic SHA-256 deduplication hashes, and batch-upserts
them directly into Convex Cloud (https://blessed-peacock-789.convex.cloud).
"""

from __future__ import annotations

from datetime import datetime, timezone
import hashlib
import logging
import math
import os
import sys
import time
from typing import Any, Dict, List, Optional

import pandas as pd

# Official Convex Python Client
from convex import ConvexClient

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(name)s: %(message)s",
)
logger = logging.getLogger("convex_scraper_sync")

# Convex Deployment URL
CONVEX_URL = os.environ.get(
    "CONVEX_URL", "https://blessed-peacock-789.convex.cloud"
)

# Optional Convex Deploy Key for authenticated administrative mutations
CONVEX_DEPLOY_KEY = os.environ.get("CONVEX_DEPLOY_KEY", None)

try:
    from jobspy import scrape_jobs
    JOBSPY_AVAILABLE = True
except ImportError:
    JOBSPY_AVAILABLE = False
    logger.warning("`python-jobspy` is not installed. Run `pip install python-jobspy`.")


def get_convex_client() -> ConvexClient:
    """Initialize and return the official Convex Python Client."""
    logger.info(f"Connecting to Convex Cloud: {CONVEX_URL}")
    client = ConvexClient(CONVEX_URL)
    if CONVEX_DEPLOY_KEY:
        client.set_auth(CONVEX_DEPLOY_KEY)
    return client


def generate_job_hash(title: str, company: str, location: str, job_url: str) -> str:
    """
    Generate a deterministic SHA-256 deduplication hash based on immutable role attributes.
    Prevents duplicate entries across repeated scraper runs.
    """
    normalized_key = (
        f"{title.lower().strip()}|"
        f"{company.lower().strip()}|"
        f"{location.lower().strip()}|"
        f"{job_url.strip()}"
    )
    return hashlib.sha256(normalized_key.encode("utf-8")).hexdigest()


def format_salary(row: pd.Series) -> Optional[str]:
    """Normalize Indian salaries from diverse job board schemas into a clean string."""
    min_amt = row.get("min_amount")
    max_amt = row.get("max_amount")
    currency = row.get("currency") or "INR"
    interval = row.get("interval") or "year"

    curr_symbol = "₹" if str(currency).upper() in ["INR", "RS", "RUPEES"] else f"{currency} "

    def is_valid(val: Any) -> bool:
        if val is None:
            return False
        try:
            f = float(val)
            return not (math.isnan(f) or math.isinf(f))
        except (ValueError, TypeError):
            return False

    has_min = is_valid(min_amt)
    has_max = is_valid(max_amt)

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


def clean_and_prepare_convex_documents(df: pd.DataFrame) -> List[Dict[str, Any]]:
    """
    Cleans raw Pandas DataFrame output from JobSpy into Convex schema documents:
    - Eliminates NaN and NaT values
    - Assigns deterministic deduplication hashes
    - Standardizes date formats and remote flags
    """
    if df is None or df.empty:
        return []

    # Replace all pandas NaNs and NaTs with None
    df_clean = df.copy()
    df_clean = df_clean.where(pd.notnull(df_clean), None)

    documents: List[Dict[str, Any]] = []

    for _, row in df_clean.iterrows():
        title = str(row.get("title") or "Software Engineer").strip()
        company = str(row.get("company") or "Technology Firm").strip()
        location = str(row.get("location") or "Bengaluru, India").strip()
        job_url = str(row.get("job_url_direct") or row.get("job_url") or "").strip()

        if not job_url:
            # Fallback direct search link if missing
            job_url = f"https://www.google.com/search?q={title}+{company}+jobs"

        # Unique SHA-256 hash for deduplication
        job_hash = generate_job_hash(title, company, location, job_url)

        # Normalized posting date (YYYY-MM-DD)
        posted_val = row.get("date_posted")
        posted_date: str = datetime.now(timezone.utc).strftime("%Y-%m-%d")
        if posted_val is not None and not pd.isna(posted_val):
            if isinstance(posted_val, (datetime, pd.Timestamp)):
                posted_date = posted_val.strftime("%Y-%m-%d")
            else:
                posted_date = str(posted_val).split("T")[0]

        # Salary parsing
        salary_str = format_salary(row)
        min_amt = row.get("min_amount")
        max_amt = row.get("max_amount")
        salary_min = float(min_amt) if min_amt is not None and not pd.isna(min_amt) else None
        salary_max = float(max_amt) if max_amt is not None and not pd.isna(max_amt) else None

        # Source board (naukri, indeed, linkedin)
        source = str(row.get("site") or "naukri").lower().strip()

        # Remote work flag
        is_rem = bool(row.get("is_remote")) if row.get("is_remote") is not None else False
        if not is_rem and ("remote" in location.lower() or "work from home" in title.lower()):
            is_rem = True

        desc = row.get("description")
        desc_str = str(desc).strip()[:1000] if desc and not pd.isna(desc) else None

        contract_type = "full_time"
        if "intern" in title.lower() or "intern" in str(desc).lower():
            contract_type = "internship"

        doc = {
            "title": title,
            "company": company,
            "location": location,
            "source": source,
            "job_url": job_url,
            "salary": salary_str,
            "salary_min": salary_min,
            "salary_max": salary_max,
            "currency": str(row.get("currency") or "INR"),
            "posted_date": posted_date,
            "description": desc_str,
            "is_remote": is_rem,
            "contract_type": contract_type,
            "job_hash": job_hash,
        }
        documents.append(doc)

    return documents


def sync_jobs_to_convex(
    query: str = "Software Engineer",
    location: str = "Bengaluru, India",
    limit: int = 20,
) -> Dict[str, Any]:
    """
    Execute end-to-end scraper run and sync fresh listings to Convex.
    """
    if not JOBSPY_AVAILABLE:
        raise RuntimeError("`python-jobspy` is required for live scraping.")

    start_time = time.time()
    logger.info(
        f"Initiating live scrape: query='{query}', location='{location}', "
        f"limit={limit}, hours_old=72, country_indeed='india'"
    )

    sources = ["naukri", "indeed", "linkedin"]

    try:
        df: pd.DataFrame = scrape_jobs(
            site_name=sources,
            search_term=query,
            location=location,
            results_wanted=limit,
            hours_old=72,
            country_indeed="india",
            verbose=1,
        )
    except Exception as exc:
        logger.error(f"Scraper error: {exc}")
        return {"success": False, "error": str(exc)}

    # Clean and parse into Convex documents
    convex_docs = clean_and_prepare_convex_documents(df)
    logger.info(f"Cleaned {len(convex_docs)} job documents. Connecting to Convex...")

    # Connect to Convex Cloud
    client = get_convex_client()

    # Invoke Convex Mutation: jobs:batchUpsertJobs
    try:
        upsert_res = client.mutation(
            "jobs:batchUpsertJobs",
            {"jobs": convex_docs},
        )
        logger.info(f"Convex batch mutation completed: {upsert_res}")

        duration_ms = int((time.time() - start_time) * 1000)

        # Log scrape run telemetry to Convex
        client.mutation(
            "jobs:recordScrapeRun",
            {
                "query": query,
                "location": location,
                "sources": sources,
                "jobs_scraped": len(convex_docs),
                "jobs_inserted": upsert_res.get("inserted", 0),
                "jobs_updated": upsert_res.get("updated", 0),
                "duration_ms": duration_ms,
                "status": "success",
            },
        )

        return {
            "success": True,
            "query": query,
            "location": location,
            "jobs_scraped": len(convex_docs),
            "convex_result": upsert_res,
            "duration_ms": duration_ms,
        }
    except Exception as exc:
        logger.error(f"Failed to upsert jobs into Convex: {exc}")
        return {"success": False, "error": str(exc)}


if __name__ == "__main__":
    q = sys.argv[1] if len(sys.argv) > 1 else "Software Engineer"
    loc = sys.argv[2] if len(sys.argv) > 2 else "Bengaluru, India"
    lim = int(sys.argv[3]) if len(sys.argv) > 3 else 15

    logger.info(f"Running scraper sync for '{q}' in '{loc}' (limit: {lim})")
    res = sync_jobs_to_convex(query=q, location=loc, limit=lim)
    print(res)
