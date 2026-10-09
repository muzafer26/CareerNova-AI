// Vercel Edge Function — Adzuna live jobs feed
export const config = { runtime: "edge" };

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "content-type",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
};

const COUNTRY_MAP: Record<string, string> = {
  india: "in",
  in: "in",
  bangalore: "in",
  mumbai: "in",
  pune: "in",
  hyderabad: "in",
  delhi: "in",
  chennai: "in",
  kolkata: "in",
  uk: "gb",
  london: "gb",
  gb: "gb",
  us: "us",
  usa: "us",
  "usa remote": "us",
  "new york": "us",
  "san francisco": "us",
  singapore: "sg",
  sg: "sg",
  remote: "in",
  all: "in",
};

function pickCountry(loc: string) {
  const k = loc.trim().toLowerCase();
  if (COUNTRY_MAP[k]) return COUNTRY_MAP[k];
  for (const key in COUNTRY_MAP) if (k.includes(key)) return COUNTRY_MAP[key];
  return "in";
}

const FALLBACK_JOBS = [
  {
    id: "fb-1",
    title: "Frontend Engineer (React / TypeScript)",
    company: "Vercel",
    location: "Remote",
    description:
      "Build the future of the web at Vercel. Work on developer-facing tools used by millions of engineers worldwide with Next.js, React, and TypeScript.",
    salaryMin: 120000,
    salaryMax: 160000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "Software Development",
    created: new Date(Date.now() - 86400000).toISOString(),
    applyUrl: "https://www.linkedin.com/jobs/search/?keywords=Frontend+Engineer+Vercel",
  },
  {
    id: "fb-2",
    title: "AI Engineer (LLMs & RAG)",
    company: "OpenAI",
    location: "USA Remote",
    description:
      "Push the frontier of AI. Build, evaluate, and scale production inference pipelines, fine-tuning infrastructure, and agent workflows using Python and PyTorch.",
    salaryMin: 220000,
    salaryMax: 320000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "AI & Machine Learning",
    created: new Date(Date.now() - 172800000).toISOString(),
    applyUrl: "https://www.linkedin.com/jobs/search/?keywords=AI+Engineer+OpenAI",
  },
  {
    id: "fb-3",
    title: "Full Stack Developer",
    company: "Razorpay",
    location: "Bangalore",
    description:
      "Power India's payments infrastructure. Design scalable microservices with Node.js, React, PostgreSQL, and AWS moving billions in transaction volume.",
    salaryMin: 90000,
    salaryMax: 140000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "Software Development",
    created: new Date(Date.now() - 259200000).toISOString(),
    applyUrl: "https://www.naukri.com/full-stack-developer-jobs",
  },
  {
    id: "fb-4",
    title: "Frontend Developer Intern",
    company: "Zomato",
    location: "Remote",
    description:
      "Work alongside senior engineers shipping high-impact consumer features in React and TypeScript for millions of daily active users.",
    salaryMin: 35000,
    salaryMax: 45000,
    contractTime: "internship",
    contractType: "internship",
    category: "Software Development",
    created: new Date(Date.now() - 86400000).toISOString(),
    applyUrl: "https://internshala.com/internships/keywords-frontend-developer",
  },
  {
    id: "fb-5",
    title: "Machine Learning Intern",
    company: "Microsoft Research",
    location: "Bangalore",
    description:
      "Conduct cutting-edge experiments in NLP, multimodal reasoning, and generative AI under the guidance of world-class scientists.",
    salaryMin: 80000,
    salaryMax: 100000,
    contractTime: "internship",
    contractType: "internship",
    category: "AI & Machine Learning",
    created: new Date(Date.now() - 172800000).toISOString(),
    applyUrl: "https://www.linkedin.com/jobs/search/?keywords=ML+Intern+Microsoft",
  },
  {
    id: "fb-6",
    title: "Product Designer (UI / UX)",
    company: "Linear",
    location: "Remote",
    description:
      "Design the tool the best software teams use to build products. Obsess over micro-interactions, dark mode craft, and design systems in Figma.",
    salaryMin: 140000,
    salaryMax: 190000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "Design",
    created: new Date(Date.now() - 345600000).toISOString(),
    applyUrl: "https://wellfound.com/jobs?q=Product+Designer",
  },
  {
    id: "fb-7",
    title: "DevOps & Cloud Engineer",
    company: "Cloudflare",
    location: "London",
    description:
      "Operate one of the fastest global networks. Write Terraform, manage Kubernetes clusters, and automate zero-downtime deployments.",
    salaryMin: 100000,
    salaryMax: 140000,
    contractTime: "full_time",
    contractType: "permanent",
    category: "DevOps & Cloud",
    created: new Date(Date.now() - 432000000).toISOString(),
    applyUrl: "https://www.glassdoor.com/Job/jobs.htm?sc.keyword=DevOps+Cloudflare",
  },
  {
    id: "fb-8",
    title: "Data Analyst Intern",
    company: "Flipkart",
    location: "Bangalore",
    description:
      "Transform petabytes of e-commerce user behavior data into actionable merchandising and supply chain insights using SQL, Python, and Tableau.",
    salaryMin: 50000,
    salaryMax: 65000,
    contractTime: "internship",
    contractType: "internship",
    category: "Data Science",
    created: new Date(Date.now() - 259200000).toISOString(),
    applyUrl: "https://internshala.com/internships/keywords-data-analyst",
  },
];

function filterFallbackJobs(
  what: string,
  where: string,
  contractTime: string,
  contractType: string,
) {
  const w = what.toLowerCase();
  const loc = where.toLowerCase();
  return FALLBACK_JOBS.filter((j) => {
    if (w && !`${j.title} ${j.description} ${j.category}`.toLowerCase().includes(w)) {
      const parts = w.split(/\s+/).filter(Boolean);
      const matchesAny = parts.some((p) => `${j.title} ${j.description}`.toLowerCase().includes(p));
      if (!matchesAny) return false;
    }
    if (loc && loc !== "all" && loc !== "in") {
      if (!j.location.toLowerCase().includes(loc) && loc !== "remote") return false;
    }
    if (contractTime === "internship" || contractType === "internship") {
      if (j.contractTime !== "internship") return false;
    }
    return true;
  });
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method === "OPTIONS") return new Response(null, { status: 204, headers: cors });

  const url = new URL(request.url);
  const what = (url.searchParams.get("what") || "").slice(0, 120).trim();
  const where = (url.searchParams.get("where") || "").slice(0, 80).trim();
  const country = pickCountry(where || "in");
  const page = Math.max(1, Math.min(20, Number(url.searchParams.get("page") || 1)));
  const remoteOnly = url.searchParams.get("remote") === "1";
  const contractType = url.searchParams.get("contract_type") || "";
  const contractTime = url.searchParams.get("contract_time") || "";
  const category = url.searchParams.get("category") || "";
  const salaryMin = url.searchParams.get("salary_min") || "";
  const resultsPerPage = Math.min(
    50,
    Math.max(1, Number(url.searchParams.get("results_per_page") || 25)),
  );

  const APP_ID = process.env.ADZUNA_APP_ID;
  const APP_KEY = process.env.ADZUNA_APP_KEY;
  if (!APP_ID || !APP_KEY) {
    const fallbackResults = filterFallbackJobs(what, where, contractTime, contractType);
    return new Response(
      JSON.stringify({
        results: fallbackResults.length ? fallbackResults : FALLBACK_JOBS,
        count: fallbackResults.length || FALLBACK_JOBS.length,
        country,
        fallback: true,
      }),
      { headers: { ...cors, "Content-Type": "application/json" } },
    );
  }

  const adz = new URL(`https://api.adzuna.com/v1/api/jobs/${country}/search/${page}`);
  adz.searchParams.set("app_id", APP_ID);
  adz.searchParams.set("app_key", APP_KEY);
  adz.searchParams.set("results_per_page", String(resultsPerPage));
  if (what) adz.searchParams.set("what", what);
  if (where && !remoteOnly && where.toLowerCase() !== "all" && where.toLowerCase() !== "remote") {
    adz.searchParams.set("where", where);
  }
  if (contractType) adz.searchParams.set("contract_type", contractType);
  if (contractTime) adz.searchParams.set("contract_time", contractTime);
  if (category) adz.searchParams.set("category", category);
  if (salaryMin) adz.searchParams.set("salary_min", salaryMin);
  adz.searchParams.set("content-type", "application/json");

  let r: Response;
  try {
    r = await fetch(adz.toString());
  } catch (e) {
    console.error("[adzuna] network", e);
    const fallbackResults = filterFallbackJobs(what, where, contractTime, contractType);
    return new Response(
      JSON.stringify({
        results: fallbackResults.length ? fallbackResults : FALLBACK_JOBS,
        count: fallbackResults.length || FALLBACK_JOBS.length,
        country,
        fallback: true,
      }),
      { headers: { ...cors, "Content-Type": "application/json" } },
    );
  }
  if (!r.ok) {
    const text = await r.text().catch(() => "");
    console.error("[adzuna] error", r.status, text.slice(0, 300));
    const fallbackResults = filterFallbackJobs(what, where, contractTime, contractType);
    return new Response(
      JSON.stringify({
        results: fallbackResults.length ? fallbackResults : FALLBACK_JOBS,
        count: fallbackResults.length || FALLBACK_JOBS.length,
        country,
        fallback: true,
      }),
      { headers: { ...cors, "Content-Type": "application/json" } },
    );
  }
  const j = (await r.json()) as { results?: Array<Record<string, unknown>>; count?: number };
  const results = (j.results ?? []).map((it) => ({
    id: String((it as { id?: unknown }).id ?? ""),
    title: String((it as { title?: unknown }).title ?? "Job"),
    company: String(
      (it as { company?: { display_name?: unknown } }).company?.display_name ?? "Company",
    ),
    location: String(
      (it as { location?: { display_name?: unknown } }).location?.display_name ?? where ?? "",
    ),
    description: String((it as { description?: unknown }).description ?? "").slice(0, 800),
    salaryMin: (it as { salary_min?: number }).salary_min ?? null,
    salaryMax: (it as { salary_max?: number }).salary_max ?? null,
    contractTime: String((it as { contract_time?: unknown }).contract_time ?? ""),
    contractType: String((it as { contract_type?: unknown }).contract_type ?? ""),
    category: String((it as { category?: { label?: unknown } }).category?.label ?? ""),
    created: String((it as { created?: unknown }).created ?? ""),
    applyUrl: String((it as { redirect_url?: unknown }).redirect_url ?? ""),
  }));
  return new Response(JSON.stringify({ results, count: j.count ?? results.length, country }), {
    headers: { ...cors, "Content-Type": "application/json" },
  });
}
