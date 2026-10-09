import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

/**
 * Convex Document Schema for Live Indian Job Finder
 * Replaces Supabase PostgreSQL relational tables and RLS policies.
 */
export default defineSchema({
  // Scraped job documents from Naukri, Indeed India, and LinkedIn
  jobs: defineTable({
    title: v.string(),
    company: v.string(),
    location: v.string(),
    source: v.string(), // "naukri" | "indeed" | "linkedin" | custom
    job_url: v.string(),
    salary: v.optional(v.string()),
    salary_min: v.optional(v.number()),
    salary_max: v.optional(v.number()),
    currency: v.optional(v.string()),
    posted_date: v.string(), // YYYY-MM-DD format
    description: v.optional(v.string()),
    is_remote: v.optional(v.boolean()),
    contract_type: v.optional(v.string()), // full_time | internship | contract
    job_hash: v.string(), // SHA-256 or composite hash for unique deduplication
    created_at: v.number(),
    updated_at: v.number(),
  })
    // Unique deduplication index to prevent duplicates across scraper runs
    .index("by_job_hash", ["job_hash"])
    .index("by_job_url", ["job_url"])
    .index("by_posted_date", ["posted_date"])
    .index("by_location", ["location"])
    .index("by_source", ["source"])
    .searchIndex("search_jobs", {
      searchField: "title",
      filterFields: ["location", "source", "is_remote"],
    }),

  // User bookmarked / saved jobs (replaces Supabase public.saved_jobs)
  saved_jobs: defineTable({
    user_id: v.string(),
    job_id: v.string(),
    title: v.string(),
    company: v.string(),
    apply_url: v.string(),
    payload: v.optional(v.any()),
    created_at: v.number(),
  })
    .index("by_user", ["user_id"])
    .index("by_user_job", ["user_id", "job_id"]),

  // Scraping audit logs & sync runs from the Python service
  scraping_runs: defineTable({
    query: v.string(),
    location: v.string(),
    sources: v.array(v.string()),
    jobs_scraped: v.number(),
    jobs_inserted: v.number(),
    jobs_updated: v.number(),
    executed_at: v.number(),
    duration_ms: v.number(),
    status: v.string(), // "success" | "partial" | "failed"
  }).index("by_executed_at", ["executed_at"]),
});
