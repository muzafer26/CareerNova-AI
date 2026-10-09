import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Convex Functions for Indian Tech Jobs
 * Replaces Supabase SQL queries, stored procedures (RPC), and RLS triggers.
 */

// ── 1. Query: Fetch and Filter Jobs ──────────────────────────────────────────
export const getJobs = query({
  args: {
    search: v.optional(v.string()),
    location: v.optional(v.string()),
    source: v.optional(v.string()), // "naukri" | "indeed" | "linkedin"
    isRemote: v.optional(v.boolean()),
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const limit = args.limit ?? 25;

    // Use search index if search term is provided
    let results;
    if (args.search && args.search.trim().length > 0) {
      results = await ctx.db
        .query("jobs")
        .withSearchIndex("search_jobs", (q) => {
          let searchQ = q.search("title", args.search!.trim());
          if (args.source) searchQ = searchQ.eq("source", args.source);
          if (args.isRemote !== undefined) searchQ = searchQ.eq("is_remote", args.isRemote);
          return searchQ;
        })
        .take(limit);
    } else if (args.source) {
      results = await ctx.db
        .query("jobs")
        .withIndex("by_source", (q) => q.eq("source", args.source!))
        .order("desc")
        .take(limit);
    } else {
      results = await ctx.db.query("jobs").withIndex("by_posted_date").order("desc").take(limit);
    }

    // Apply secondary filters (like partial location match)
    if (
      args.location &&
      args.location.toLowerCase() !== "all" &&
      args.location.toLowerCase() !== "india"
    ) {
      const locTarget = args.location.toLowerCase();
      results = results.filter(
        (job) =>
          job.location.toLowerCase().includes(locTarget) ||
          (locTarget.includes("remote") && job.is_remote),
      );
    }

    return results;
  },
});

// ── 2. Query: Get Single Job Details ──────────────────────────────────────────
export const getJobById = query({
  args: {
    id: v.id("jobs"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

// ── 3. Mutation: Batch Upsert Scraped Jobs (With Hash Deduplication) ─────────
export const batchUpsertJobs = mutation({
  args: {
    jobs: v.array(
      v.object({
        title: v.string(),
        company: v.string(),
        location: v.string(),
        source: v.string(),
        job_url: v.string(),
        salary: v.optional(v.string()),
        salary_min: v.optional(v.number()),
        salary_max: v.optional(v.number()),
        currency: v.optional(v.string()),
        posted_date: v.string(),
        description: v.optional(v.string()),
        is_remote: v.optional(v.boolean()),
        contract_type: v.optional(v.string()),
        job_hash: v.string(),
      }),
    ),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    let inserted = 0;
    let updated = 0;

    for (const job of args.jobs) {
      // Check if job exists by unique deduplication hash
      const existing = await ctx.db
        .query("jobs")
        .withIndex("by_job_hash", (q) => q.eq("job_hash", job.job_hash))
        .first();

      if (existing) {
        // Update existing listing with fresh metadata
        await ctx.db.patch(existing._id, {
          title: job.title,
          company: job.company,
          location: job.location,
          salary: job.salary,
          salary_min: job.salary_min,
          salary_max: job.salary_max,
          posted_date: job.posted_date,
          description: job.description,
          is_remote: job.is_remote,
          contract_type: job.contract_type,
          updated_at: now,
        });
        updated++;
      } else {
        // Insert new listing
        await ctx.db.insert("jobs", {
          ...job,
          created_at: now,
          updated_at: now,
        });
        inserted++;
      }
    }

    return {
      success: true,
      total_received: args.jobs.length,
      inserted,
      updated,
    };
  },
});

// ── 4. Mutation: Save / Bookmark Job for User ────────────────────────────────
export const saveJob = mutation({
  args: {
    userId: v.string(),
    jobId: v.string(),
    title: v.string(),
    company: v.string(),
    applyUrl: v.string(),
    payload: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("saved_jobs")
      .withIndex("by_user_job", (q) => q.eq("user_id", args.userId).eq("job_id", args.jobId))
      .first();

    if (existing) {
      return { success: true, savedId: existing._id, alreadySaved: true };
    }

    const id = await ctx.db.insert("saved_jobs", {
      user_id: args.userId,
      job_id: args.jobId,
      title: args.title,
      company: args.company,
      apply_url: args.applyUrl,
      payload: args.payload,
      created_at: Date.now(),
    });

    return { success: true, savedId: id, alreadySaved: false };
  },
});

// ── 5. Mutation: Unsave / Remove Bookmark ────────────────────────────────────
export const unsaveJob = mutation({
  args: {
    userId: v.string(),
    jobId: v.string(),
  },
  handler: async (ctx, args) => {
    const record = await ctx.db
      .query("saved_jobs")
      .withIndex("by_user_job", (q) => q.eq("user_id", args.userId).eq("job_id", args.jobId))
      .first();

    if (record) {
      await ctx.db.delete(record._id);
      return { success: true, deleted: true };
    }

    return { success: true, deleted: false };
  },
});

// ── 6. Query: Get User's Saved Jobs ──────────────────────────────────────────
export const getSavedJobs = query({
  args: {
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("saved_jobs")
      .withIndex("by_user", (q) => q.eq("user_id", args.userId))
      .order("desc")
      .collect();
  },
});

// ── 7. Mutation: Log Scraping Sync Runs ──────────────────────────────────────
export const recordScrapeRun = mutation({
  args: {
    query: v.string(),
    location: v.string(),
    sources: v.array(v.string()),
    jobs_scraped: v.number(),
    jobs_inserted: v.number(),
    jobs_updated: v.number(),
    duration_ms: v.number(),
    status: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("scraping_runs", {
      ...args,
      executed_at: Date.now(),
    });
  },
});
