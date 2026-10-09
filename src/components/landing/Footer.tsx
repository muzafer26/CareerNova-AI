import { Twitter, Github, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="relative border-t-4 border-[#121212] bg-[#F0F0F0] text-[#121212] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b-4 border-[#121212] pb-12 mb-10">
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2 mb-4 group">
              <div className="flex items-center gap-1.5" aria-hidden="true">
                <span className="w-4 h-4 rounded-full bg-[#D02020] border-2 border-[#121212]" />
                <span className="w-4 h-4 bg-[#1040C0] border-2 border-[#121212]" />
                <span className="w-4 h-4 clip-triangle bg-[#F0C020] border-2 border-[#121212]" />
              </div>
              <span className="font-display font-black text-2xl uppercase tracking-tighter text-[#121212]">
                CAREERNOVA
              </span>
            </Link>
            <p className="font-medium text-sm text-[#4A4A4A] max-w-sm leading-relaxed mb-6">
              Constructivist career intelligence for modern engineers. Roadmaps, mock interview
              drills, ATS resume audits, and dedicated IT sector matrices.
            </p>

            <div className="flex gap-2">
              <input
                type="email"
                placeholder="developer@domain.com"
                className="bg-white border-2 border-[#121212] font-mono text-xs px-3 py-2 text-[#121212] placeholder:text-[#4A4A4A] shadow-[2px_2px_0px_0px_#121212] focus:outline-none"
              />
              <button className="bg-[#D02020] text-white border-2 border-[#121212] font-mono text-xs font-black uppercase px-4 py-2 shadow-[2px_2px_0px_0px_#121212] btn-press">
                SUBSCRIBE
              </button>
            </div>
          </div>

          {/* Col 2: IT & Tech Specializations */}
          <div className="md:col-span-3">
            <h4 className="font-mono text-xs font-black uppercase tracking-widest text-[#121212] mb-4 pb-1 border-b-2 border-[#121212]">
              TECH SECTOR (SCHOLARSYNC)
            </h4>
            <ul className="space-y-2 font-mono text-xs font-bold text-[#4A4A4A]">
              <li>
                <Link to="/tech" className="hover:text-[#D02020] transition">
                  → All IT Roles Directory
                </Link>
              </li>
              <li>
                <a href="/tech#compare" className="hover:text-[#D02020] transition">
                  → Head-to-Head Compare
                </a>
              </li>
              <li>
                <a href="/tech#skills" className="hover:text-[#D02020] transition">
                  → Skill Dependency Tree
                </a>
              </li>
              <li>
                <Link to="/tech" className="hover:text-[#D02020] transition">
                  → Portfolio Deliverables
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Modules */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs font-black uppercase tracking-widest text-[#121212] mb-4 pb-1 border-b-2 border-[#121212]">
              PLATFORM
            </h4>
            <ul className="space-y-2 font-mono text-xs font-bold text-[#4A4A4A]">
              <li>
                <Link to="/dashboard/mentor" className="hover:text-[#D02020] transition">
                  AI Mentor
                </Link>
              </li>
              <li>
                <Link to="/dashboard/roadmaps" className="hover:text-[#D02020] transition">
                  Roadmaps
                </Link>
              </li>
              <li>
                <Link to="/dashboard/resume" className="hover:text-[#D02020] transition">
                  Resume Scanner
                </Link>
              </li>
              <li>
                <Link to="/dashboard/jobs" className="hover:text-[#D02020] transition">
                  Live Job Feeds
                </Link>
              </li>
              <li>
                <Link to="/dashboard/quiz" className="hover:text-[#D02020] transition">
                  Career Quiz
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Community */}
          <div className="md:col-span-2">
            <h4 className="font-mono text-xs font-black uppercase tracking-widest text-[#121212] mb-4 pb-1 border-b-2 border-[#121212]">
              DISPATCH
            </h4>
            <ul className="space-y-2 font-mono text-xs font-bold text-[#4A4A4A]">
              <li>
                <a
                  href="https://github.com/muzafer26/CareerNova-AI"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D02020] transition"
                >
                  GitHub Repository
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/muzafer26/ScholarSync"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#D02020] transition"
                >
                  ScholarSync Core
                </a>
              </li>
              <li>
                <Link to="/signup" className="hover:text-[#D02020] transition">
                  Join Free
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs font-bold text-[#4A4A4A]">
          <div>© {new Date().getFullYear()} CAREERNOVA × SCHOLARSYNC. FORM FOLLOWS FUNCTION.</div>
          <div className="flex items-center gap-4">
            <span className="text-[#121212] font-black uppercase">BAUHAUS EDITION</span>
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-[#D02020]" />
              <span className="w-2 h-2 bg-[#1040C0]" />
              <span className="w-2 h-2 clip-triangle bg-[#F0C020]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
