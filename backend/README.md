# Live Indian Job Finder — FastAPI & Python-JobSpy Backend

A production-ready, lightweight **FastAPI** backend that scrapes fresh Indian IT and tech jobs directly from **Naukri**, **Indeed India**, and **LinkedIn** using the open-source [`python-jobspy`](https://github.com/Bunsly/JobSpy) library without paid APIs.

---

## 🚀 Key Features

- **Live Multi-Source Scraping**: Scrapes across **Naukri**, **Indeed India** (`country_indeed='india'`), and **LinkedIn** concurrently.
- **Freshness Filter**: Restricts to jobs posted within the last **72 hours** (`hours_old=72`).
- **In-Memory TTL Caching**: 1-hour in-memory cache (`cachetools.TTLCache`) with thread synchronization to prevent redundant web scraping for identical queries.
- **Automated Data Cleaning**: Cleans Pandas DataFrame `NaN`, `NaT`, and numeric anomalies, converting compensation and dates into clean, frontend-ready JSON.
- **Timeout & Error Resilience**: Non-blocking async thread execution with a 45-second timeout and HTTP 504 / 502 error fallbacks.
- **CORS Enabled**: Out-of-the-box support for React / Vite frontend applications.
- **Interactive OpenAPI Docs**: Auto-generated Swagger docs at `/docs` and ReDoc at `/redoc`.

---

## 📋 Prerequisites

- **Python 3.10+**
- `pip` package manager

---

## 🛠️ Step-by-Step Local Setup

### 1. Navigate to the Backend Directory
```bash
cd backend
# or stay in project root if using root main.py and requirements.txt
```

### 2. Create and Activate a Virtual Environment
```bash
# On macOS / Linux
python3 -m venv venv
source venv/bin/activate

# On Windows (PowerShell)
python -m venv venv
.\venv\Scripts\Activate.ps1

# On Windows (Command Prompt)
.\venv\Scripts\activate.bat
```

### 3. Install Dependencies
```bash
pip install -r requirements.txt
```

### 4. Start the FastAPI Development Server
You can start the server directly using Uvicorn or Python:

```bash
# Option A: Uvicorn with auto-reload on port 8000
uvicorn main:app --host 0.0.0.0 --port 8000 --reload

# Option B: Run via Python entry point
python main.py
```

The server will be running at:
- **API Base URL**: `http://localhost:8000`
- **Interactive Swagger UI**: `http://localhost:8000/docs`
- **ReDoc Documentation**: `http://localhost:8000/redoc`

---

## 🧪 Testing the API

### 1. Test via cURL

#### A. Default Query (Software Engineer in Bengaluru, India)
```bash
curl -X GET "http://localhost:8000/api/jobs" \
     -H "Accept: application/json"
```

#### B. Custom Role, City, and Limit
```bash
curl -X GET "http://localhost:8000/api/jobs?query=Frontend%20Developer&location=Pune,%20India&limit=10" \
     -H "Accept: application/json"
```

#### C. AI / Machine Learning in Hyderabad
```bash
curl -X GET "http://localhost:8000/api/jobs?query=AI%20Engineer&location=Hyderabad,%20India&limit=5" \
     -H "Accept: application/json"
```

#### D. Health Check
```bash
curl -X GET "http://localhost:8000/api/health" \
     -H "Accept: application/json"
```

---

### 2. Test via Postman

1. Open **Postman** and create a new **HTTP Request**.
2. Set the method to **`GET`**.
3. Enter the URL:
   ```text
   http://localhost:8000/api/jobs
   ```
4. Under the **Params** tab, add the query parameters:
   | Key | Value | Description |
   | :--- | :--- | :--- |
   | `query` | `Software Engineer` *(or e.g. React Developer)* | Job role |
   | `location` | `Bengaluru, India` *(or Pune, Mumbai, Hyderabad)* | Indian city |
   | `limit` | `15` | Results count (1-50) |
5. Click **Send**.

---

### 3. Test via Interactive Browser (Swagger UI)

1. Open your browser to:
   ```text
   http://localhost:8000/docs
   ```
2. Click on `GET /api/jobs`.
3. Click **"Try it out"**.
4. Enter your parameters and click **"Execute"**.

---

## 📦 Sample JSON Response

```json
{
  "status": "success",
  "count": 3,
  "query": "Software Engineer",
  "location": "Bengaluru, India",
  "cached": false,
  "timestamp": "2026-10-09T06:15:00.123456+00:00",
  "jobs": [
    {
      "title": "Software Engineer - Backend (Go / Python)",
      "company": "Swiggy",
      "location": "Bengaluru, Karnataka, India",
      "job_url": "https://www.naukri.com/job-listings-swiggy-bengaluru-12345",
      "salary": "₹18,00,000 - ₹28,00,000 / yearly",
      "posted_date": "2026-10-08",
      "source": "naukri",
      "is_remote": false,
      "description": "Swiggy is seeking an experienced Backend Engineer to scale core order routing..."
    },
    {
      "title": "Full Stack Engineer",
      "company": "Razorpay",
      "location": "Bengaluru, India",
      "job_url": "https://www.linkedin.com/jobs/view/9876543210",
      "salary": "₹22,00,000+ / yearly",
      "posted_date": "2026-10-07",
      "source": "linkedin",
      "is_remote": true,
      "description": "Join our payments team building high-throughput payment gateway microservices..."
    },
    {
      "title": "Junior Python Developer",
      "company": "Infosys",
      "location": "Bengaluru, India",
      "job_url": "https://in.indeed.com/viewjob?jk=abcdef12345",
      "salary": "₹6,00,000 - ₹9,50,000 / yearly",
      "posted_date": "2026-10-08",
      "source": "indeed",
      "is_remote": false,
      "description": "Develop automation scripts and data ingestion workflows using Python, Pandas, and SQL..."
    }
  ]
}
```

---

## ⚙️ Configuration & Architecture

| Parameter | Value | Purpose |
| :--- | :--- | :--- |
| **Scrape Sources** | `['naukri', 'indeed', 'linkedin']` | Covers top 3 job boards in India |
| **Country Indeed** | `'india'` | Targets `in.indeed.com` without proxy issues |
| **Freshness** | `hours_old=72` | Fresh jobs posted in the last 3 days |
| **Cache TTL** | `3600 seconds` (1 hour) | Fast repeated lookups, prevents rate-limits |
| **Max Cache Entries** | `256` | Minimal RAM overhead (~5MB) |
| **Scrape Timeout** | `45 seconds` | Graceful gateway timeout handling |
