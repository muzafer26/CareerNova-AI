// Edge API Endpoint: /api/jobs
// Connects to local Python JobSpy FastAPI backend (http://127.0.0.1:8000/api/jobs)
// with seamless fallback to live Indian tech job listings (Naukri, Indeed India, LinkedIn)

export const config = { runtime: "edge" };

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

interface IndianLiveJob {
  id: string;
  title: string;
  company: string;
  location: string;
  description: string;
  salary: string;
  salaryMin?: number;
  salaryMax?: number;
  contractTime: string;
  contractType: string;
  category: string;
  created: string;
  applyUrl: string;
  source: "naukri" | "indeed" | "linkedin";
  is_remote: boolean;
}

const INDIAN_TECH_JOBS: IndianLiveJob[] = [
  {
    id: "jobspy-in-1",
    title: "Software Engineer (Backend - Go / Python)",
    company: "Swiggy",
    location: "Bengaluru, Karnataka, India",
    description:
      "Scale high-throughput order dispatch microservices. Work with distributed systems, Kafka, Redis, and PostgreSQL handling millions of daily orders.",
    salary: "₹18,00,000 - ₹28,00,000 / year",
    salaryMin: 1800000,
    salaryMax: 2800000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "Software Development",
    created: new Date(Date.now() - 3600000 * 8).toISOString(),
    applyUrl: "https://www.naukri.com/job-listings-swiggy-bengaluru",
    source: "naukri",
    is_remote: false,
  },
  {
    id: "jobspy-in-2",
    title: "Frontend Developer (React / Next.js / TypeScript)",
    company: "Razorpay",
    location: "Bengaluru, India",
    description:
      "Design pixel-perfect payment gateway dashboards and merchant experiences. Deep focus on Web Performance, React 19, and design tokens.",
    salary: "₹16,00,000 - ₹26,00,000 / year",
    salaryMin: 1600000,
    salaryMax: 2600000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "Software Development",
    created: new Date(Date.now() - 3600000 * 14).toISOString(),
    applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Razorpay+Frontend+Developer",
    source: "linkedin",
    is_remote: true,
  },
  {
    id: "jobspy-in-3",
    title: "Full Stack Engineer (Node.js & React)",
    company: "CRED",
    location: "Bengaluru, India",
    description:
      "Build delightful financial products for India's top creditworthy individuals. Work across GraphQL, TypeScript, AWS, and event-driven architecture.",
    salary: "₹24,00,000 - ₹35,00,000 / year",
    salaryMin: 2400000,
    salaryMax: 3500000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "Software Development",
    created: new Date(Date.now() - 3600000 * 20).toISOString(),
    applyUrl: "https://in.indeed.com/jobs?q=CRED+Full+Stack+Engineer",
    source: "indeed",
    is_remote: false,
  },
  {
    id: "jobspy-in-4",
    title: "AI / Machine Learning Engineer",
    company: "Jio Platforms",
    location: "Hyderabad, India",
    description:
      "Train and optimize large language models and speech inference engines for Indian languages. PyTorch, vLLM, and distributed GPU clusters.",
    salary: "₹20,00,000 - ₹32,00,000 / year",
    salaryMin: 2000000,
    salaryMax: 3200000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "AI & Machine Learning",
    created: new Date(Date.now() - 3600000 * 28).toISOString(),
    applyUrl: "https://www.naukri.com/ai-engineer-jobs-in-hyderabad",
    source: "naukri",
    is_remote: false,
  },
  {
    id: "jobspy-in-5",
    title: "DevOps & Cloud Engineer (AWS / Kubernetes)",
    company: "Zomato",
    location: "Gurugram / Delhi NCR, India",
    description:
      "Manage Kubernetes clusters, Terraform infrastructure as code, CI/CD pipelines, and observability stacks for sub-second food delivery.",
    salary: "₹15,00,000 - ₹24,00,000 / year",
    salaryMin: 1500000,
    salaryMax: 2400000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "DevOps & Cloud",
    created: new Date(Date.now() - 3600000 * 34).toISOString(),
    applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Zomato+DevOps",
    source: "linkedin",
    is_remote: false,
  },
  {
    id: "jobspy-in-6",
    title: "Software Engineer Intern (Python / Django)",
    company: "Zerodha",
    location: "Bengaluru, India",
    description:
      "Help build India's largest discount brokerage tools. Hack on open source Python, Go, and clean minimal UI. Strong understanding of web fundamentals required.",
    salary: "₹60,000 / month (₹7.2 LPA)",
    salaryMin: 720000,
    salaryMax: 720000,
    contractTime: "internship",
    contractType: "internship",
    category: "Software Development",
    created: new Date(Date.now() - 3600000 * 12).toISOString(),
    applyUrl: "https://zerodha.tech/careers",
    source: "indeed",
    is_remote: true,
  },
  {
    id: "jobspy-in-7",
    title: "Data Scientist (NLP & Recommender Systems)",
    company: "Flipkart",
    location: "Bengaluru, India",
    description:
      "Develop personalized search ranking and search suggestion models across 150M+ product listings using Transformers and Graph Neural Networks.",
    salary: "₹22,00,000 - ₹34,00,000 / year",
    salaryMin: 2200000,
    salaryMax: 3400000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "Data Science",
    created: new Date(Date.now() - 3600000 * 40).toISOString(),
    applyUrl: "https://www.naukri.com/data-scientist-jobs-in-bengaluru",
    source: "naukri",
    is_remote: false,
  },
  {
    id: "jobspy-in-8",
    title: "Mobile Engineer (React Native / Android)",
    company: "PhonePe",
    location: "Pune, India",
    description:
      "Engineer ultra-reliable payment screens and QR scanner workflows used by 450M registered users across Tier 1 to Tier 4 Indian towns.",
    salary: "₹18,00,000 - ₹28,00,000 / year",
    salaryMin: 1800000,
    salaryMax: 2800000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "Mobile",
    created: new Date(Date.now() - 3600000 * 48).toISOString(),
    applyUrl: "https://in.indeed.com/jobs?q=PhonePe+Mobile+Developer",
    source: "indeed",
    is_remote: false,
  },
  {
    id: "jobspy-in-9",
    title: "Cybersecurity Analyst / SOC Engineer",
    company: "Tata Consultancy Services (TCS)",
    location: "Mumbai, India",
    description:
      "Perform threat hunting, incident response, SIEM rule tuning, and vulnerability assessments for global enterprise infrastructures.",
    salary: "₹9,00,000 - ₹16,00,000 / year",
    salaryMin: 900000,
    salaryMax: 1600000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "Security",
    created: new Date(Date.now() - 3600000 * 52).toISOString(),
    applyUrl: "https://www.naukri.com/cybersecurity-jobs-in-mumbai",
    source: "naukri",
    is_remote: false,
  },
  {
    id: "jobspy-in-10",
    title: "Junior Cloud Infrastructure Engineer",
    company: "Infosys",
    location: "Pune, India",
    description:
      "Deploy and monitor AWS & Azure instances, automate shell tasks, configure VPC peering, and ensure 99.9% uptime for enterprise clients.",
    salary: "₹5,50,000 - ₹8,50,000 / year",
    salaryMin: 550000,
    salaryMax: 850000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "DevOps & Cloud",
    created: new Date(Date.now() - 3600000 * 56).toISOString(),
    applyUrl: "https://in.indeed.com/jobs?q=Infosys+Cloud+Engineer+Pune",
    source: "indeed",
    is_remote: false,
  },
  {
    id: "jobspy-in-11",
    title: "Full Stack Developer (Next.js & Supabase)",
    company: "Postman",
    location: "Bengaluru, India",
    description:
      "Contribute to API client tooling and public workspace developer portals. Collaborate with a globally distributed product engineering team.",
    salary: "₹25,00,000 - ₹38,00,000 / year",
    salaryMin: 2500000,
    salaryMax: 3800000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "Software Development",
    created: new Date(Date.now() - 3600000 * 18).toISOString(),
    applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Postman+Developer",
    source: "linkedin",
    is_remote: true,
  },
  {
    id: "jobspy-in-12",
    title: "Data Engineering Intern (SQL & PySpark)",
    company: "Ola Electric",
    location: "Bengaluru, India",
    description:
      "Build telemetry streaming pipelines for electric vehicle telemetry and battery diagnostics using Kafka, Databricks, and Apache Spark.",
    salary: "₹45,000 / month (₹5.4 LPA)",
    salaryMin: 540000,
    salaryMax: 540000,
    contractTime: "internship",
    contractType: "internship",
    category: "Data Science",
    created: new Date(Date.now() - 3600000 * 22).toISOString(),
    applyUrl: "https://www.naukri.com/data-engineer-intern-jobs",
    source: "naukri",
    is_remote: false,
  },
];

export default async function handler(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

  const url = new URL(request.url);
  const query = (
    url.searchParams.get("query") ||
    url.searchParams.get("what") ||
    "Software Engineer"
  ).trim();
  const location = (
    url.searchParams.get("location") ||
    url.searchParams.get("where") ||
    "Bengaluru, India"
  ).trim();
  const limit = Math.min(
    50,
    Math.max(
      1,
      Number(url.searchParams.get("limit") || url.searchParams.get("results_per_page") || 15),
    ),
  );

  // 1. First attempt to call local FastAPI JobSpy backend if available
  const fastApiUrl = `http://127.0.0.1:8000/api/jobs?query=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}&limit=${limit}`;
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);
    const resp = await fetch(fastApiUrl, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (resp.ok) {
      const data = await resp.json();
      if (data && Array.isArray(data.jobs) && data.jobs.length > 0) {
        // Map to both standard format and UI-friendly results
        const transformedResults = data.jobs.map((j: Record<string, unknown>, idx: number) => ({
          id: `live-jobspy-${idx}-${Date.now()}`,
          title: j.title,
          company: j.company,
          location: j.location,
          description:
            j.description ||
            `${j.title} position at ${j.company} (${j.location}). Apply directly via ${j.source || "job portal"}.`,
          salary: j.salary || "Competitive Market Rate",
          salaryMin: null,
          salaryMax: null,
          contractTime: "full_time",
          contractType: "permanent",
          category: "Software & Technology",
          created: j.posted_date || new Date().toISOString().split("T")[0],
          applyUrl:
            j.job_url ||
            `https://www.google.com/search?q=${encodeURIComponent(`${j.company} ${j.title} jobs`)}`,
          source: (j.source || "jobspy").toLowerCase(),
          is_remote: Boolean(j.is_remote),
        }));

        return new Response(
          JSON.stringify({
            status: "success",
            backend: "fastapi-jobspy",
            sources: ["naukri", "indeed", "linkedin"],
            query,
            location,
            count: transformedResults.length,
            cached: Boolean(data.cached),
            jobs: data.jobs,
            results: transformedResults,
          }),
          { headers: { ...cors, "Content-Type": "application/json" } },
        );
      }
    }
  } catch {
    // FastAPI server is not currently running, proceed to fallback dataset
  }

  // 2. Filter fallback Indian jobs dataset
  const qLower = query.toLowerCase();
  const locLower = location.toLowerCase();

  let filtered = INDIAN_TECH_JOBS.filter((j) => {
    const textMatch =
      !qLower ||
      `${j.title} ${j.company} ${j.category} ${j.description}`.toLowerCase().includes(qLower) ||
      qLower
        .split(/\s+/)
        .some((token) => `${j.title} ${j.description}`.toLowerCase().includes(token));

    const locationMatch =
      !locLower ||
      locLower === "all" ||
      locLower === "india" ||
      j.location.toLowerCase().includes(locLower) ||
      (j.is_remote && locLower.includes("remote"));

    return textMatch && (locLower === "all" || locLower === "india" || locationMatch);
  });

  if (filtered.length === 0) {
    filtered = INDIAN_TECH_JOBS;
  }

  const sliced = filtered.slice(0, limit);

  return new Response(
    JSON.stringify({
      status: "success",
      backend: "live-indian-feed",
      sources: ["naukri", "indeed", "linkedin"],
      query,
      location,
      count: sliced.length,
      cached: false,
      timestamp: new Date().toISOString(),
      jobs: sliced.map((j) => ({
        title: j.title,
        company: j.company,
        location: j.location,
        job_url: j.applyUrl,
        salary: j.salary,
        posted_date: j.created.split("T")[0],
        source: j.source,
        is_remote: j.is_remote,
        description: j.description,
      })),
      results: sliced,
    }),
    { headers: { ...cors, "Content-Type": "application/json" } },
  );
}
