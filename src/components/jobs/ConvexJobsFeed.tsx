import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "../../../convex/_generated/api";
import {
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  Zap,
  MapPin,
  Building2,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth";

interface ConvexJobsFeedProps {
  initialSearch?: string;
  initialLocation?: string;
}

export function ConvexJobsFeed({
  initialSearch = "Software Engineer",
  initialLocation = "Bengaluru, India",
}: ConvexJobsFeedProps) {
  const { user } = useAuth();
  const [search, setSearch] = useState(initialSearch);
  const [location, setLocation] = useState(initialLocation);
  const [activeSource, setActiveSource] = useState<string>("all");

  // 1. Reactive Convex Query — automatically updates in real-time when new jobs are synced
  const jobs = useQuery(api.jobs.getJobs, {
    search: search.trim() ? search : undefined,
    location: location !== "all" ? location : undefined,
    source: activeSource !== "all" ? activeSource : undefined,
    limit: 30,
  });

  // 2. Reactive Saved Jobs Query
  const savedList = useQuery(api.jobs.getSavedJobs, user?.id ? { userId: user.id } : "skip");

  const saveJobMutation = useMutation(api.jobs.saveJob);
  const unsaveJobMutation = useMutation(api.jobs.unsaveJob);

  const savedJobIds = new Set(savedList?.map((s) => s.job_id) || []);

  const handleToggleBookmark = async (job: {
    _id: string;
    title: string;
    company: string;
    job_url: string;
    location: string;
  }) => {
    if (!user) {
      toast.error("Please sign in to save jobs");
      return;
    }

    const isSaved = savedJobIds.has(job._id);
    if (isSaved) {
      await unsaveJobMutation({ userId: user.id, jobId: job._id });
      toast.info("Removed from saved jobs");
    } else {
      await saveJobMutation({
        userId: user.id,
        jobId: job._id,
        title: job.title,
        company: job.company,
        applyUrl: job.job_url,
      });
      toast.success("Job bookmarked to Convex");
    }
  };

  return (
    <div className="space-y-6">
      {/* Bauhaus Control Header */}
      <div className="border-4 border-[#121212] bg-white p-4 sm:p-6 shadow-[6px_6px_0px_0px_#121212]">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b-2 border-[#121212]">
          <div className="flex items-center gap-2">
            <div className="h-4 w-4 bg-[#D02020] border border-[#121212]" />
            <h2 className="font-mono text-sm sm:text-base font-black tracking-wider uppercase">
              CONVEX REAL-TIME JOB STREAM (CONVEX.DEV)
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold bg-[#F0C020] text-[#121212] px-3 py-1 border-2 border-[#121212]">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <span>WEBSOCKET REACTIVE</span>
          </div>
        </div>

        {/* Search Inputs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-[10px] font-mono font-bold uppercase mb-1">
              Job Role / Tech Keyword
            </label>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="e.g. Software Engineer, React..."
              className="w-full px-3 py-2 text-xs font-mono border-2 border-[#121212] bg-[#F0F0F0] focus:bg-white focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-[10px] font-mono font-bold uppercase mb-1">
              Indian Hub
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full px-3 py-2 text-xs font-mono border-2 border-[#121212] bg-[#F0F0F0] focus:bg-white focus:outline-none"
            >
              <option value="all">All India (Any Location)</option>
              <option value="Bengaluru, India">Bengaluru, India</option>
              <option value="Pune, India">Pune, India</option>
              <option value="Hyderabad, India">Hyderabad, India</option>
              <option value="Mumbai, India">Mumbai, India</option>
              <option value="Delhi NCR, India">Delhi NCR, India</option>
              <option value="Remote">Remote India</option>
            </select>
          </div>

          <div>
            <label className="block text-[10px] font-mono font-bold uppercase mb-1">
              Scrape Portal Source
            </label>
            <div className="flex gap-1">
              {(["all", "naukri", "indeed", "linkedin"] as const).map((src) => (
                <button
                  key={src}
                  type="button"
                  onClick={() => setActiveSource(src)}
                  className={`flex-1 py-2 text-[10px] font-mono font-bold uppercase border-2 border-[#121212] transition ${
                    activeSource === src
                      ? "bg-[#1040C0] text-white shadow-[2px_2px_0px_0px_#121212]"
                      : "bg-[#F0F0F0] text-[#121212] hover:bg-white"
                  }`}
                >
                  {src === "indeed" ? "Indeed IN" : src}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Listing Grid */}
      {jobs === undefined ? (
        <div className="border-4 border-[#121212] bg-white p-12 text-center shadow-[6px_6px_0px_0px_#121212]">
          <RefreshCw className="h-8 w-8 animate-spin mx-auto text-[#1040C0] mb-3" />
          <p className="font-mono text-xs font-bold uppercase tracking-wider">
            Loading reactive listings from Convex Cloud...
          </p>
        </div>
      ) : jobs.length === 0 ? (
        <div className="border-4 border-[#121212] bg-[#F0F0F0] p-8 text-center shadow-[6px_6px_0px_0px_#121212]">
          <p className="font-mono text-sm font-bold uppercase">
            No listings found in Convex document store for this filter.
          </p>
          <p className="font-mono text-xs text-muted-foreground mt-1">
            Trigger the Python JobSpy sync to populate fresh listings from Naukri, Indeed, or
            LinkedIn!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {jobs.map((job) => {
            const isSaved = savedJobIds.has(job._id);
            return (
              <div
                key={job._id}
                className="border-4 border-[#121212] bg-white p-4 flex flex-col justify-between shadow-[4px_4px_0px_0px_#121212] hover:translate-x-0.5 hover:translate-y-0.5 transition"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <span className="font-mono text-[9px] font-black uppercase px-2 py-0.5 border border-[#121212] bg-[#F0C020]">
                      {job.source}
                    </span>
                    <button
                      onClick={() => handleToggleBookmark(job)}
                      className="p-1 border border-[#121212] bg-[#F0F0F0] hover:bg-white transition"
                      aria-label="Bookmark job"
                    >
                      {isSaved ? (
                        <BookmarkCheck className="h-3.5 w-3.5 text-[#D02020]" />
                      ) : (
                        <Bookmark className="h-3.5 w-3.5 text-[#121212]" />
                      )}
                    </button>
                  </div>

                  <h3 className="font-sans font-bold text-sm text-[#121212] line-clamp-2 mb-1">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-2">
                    <Building2 className="h-3 w-3" />
                    <span className="truncate">{job.company}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-3 text-[10px] font-mono">
                    <span className="flex items-center gap-0.5 px-1.5 py-0.5 border border-[#121212] bg-[#F0F0F0]">
                      <MapPin className="h-2.5 w-2.5" />
                      <span className="truncate max-w-[120px]">{job.location}</span>
                    </span>
                    {job.is_remote && (
                      <span className="flex items-center gap-0.5 px-1.5 py-0.5 border border-[#121212] bg-emerald-100 text-emerald-900 font-bold">
                        <Zap className="h-2.5 w-2.5 text-emerald-600" /> Remote
                      </span>
                    )}
                  </div>

                  {job.salary && (
                    <div className="font-mono text-xs font-black text-[#D02020] mb-2">
                      {job.salary}
                    </div>
                  )}

                  {job.description && (
                    <p className="text-[11px] text-muted-foreground line-clamp-2 mb-4">
                      {job.description}
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t-2 border-[#121212] flex items-center justify-between text-[10px] font-mono">
                  <span className="text-muted-foreground">Posted: {job.posted_date}</span>
                  <a
                    href={job.job_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-bold text-white bg-[#1040C0] px-2.5 py-1 border border-[#121212] hover:bg-[#121212] transition"
                  >
                    Apply <ExternalLink className="h-2.5 w-2.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
