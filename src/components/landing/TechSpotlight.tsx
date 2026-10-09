import { Link } from "@tanstack/react-router";
import { Cpu, ArrowRight, Scale, GitBranch, Layers, Sparkles } from "lucide-react";
import { TECH_CAREERS } from "@/lib/scholarsync/careers";

export function TechSpotlight() {
  const featured = TECH_CAREERS.slice(0, 4);

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-[#F0F0F0] overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="max-w-7xl mx-auto">
        {/* Banner Announcement */}
        <div className="bg-[#121212] text-white p-6 sm:p-10 border-4 border-[#121212] shadow-bauhaus-lg relative mb-12">
          {/* Top Triad Badge */}
          <div className="flex items-center gap-2 mb-4">
            <span className="w-3.5 h-3.5 rounded-full bg-[#D02020] border border-white" />
            <span className="w-3.5 h-3.5 bg-[#1040C0] border border-white" />
            <span className="w-3.5 h-3.5 clip-triangle bg-[#F0C020] border border-white" />
            <span className="font-mono text-xs font-black uppercase tracking-widest text-[#F0C020] ml-2">
              SCHOLARSYNC INTEGRATION // DEDICATED IT SECTOR
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <h2 className="font-display font-black text-3xl sm:text-5xl lg:text-6xl uppercase tracking-tighter text-white leading-[0.95]">
                DEDICATED <span className="text-[#D02020]">TECH & IT</span> SECTOR MATRIX.
              </h2>
              <p className="mt-4 text-sm sm:text-base font-medium text-[#E0E0E0] max-w-2xl leading-relaxed">
                We engineered a specialized portal for all Information Technology specializations.
                Explore step-by-step technical blueprints, salary compensation bands, realistic
                Monday-to-Friday engineering logs, and interactive role comparisons.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end">
              <Link
                to="/tech"
                className="bg-[#D02020] text-white border-2 border-white font-mono text-xs font-black uppercase px-6 py-4 shadow-[4px_4px_0px_0px_#F0C020] hover:bg-[#D02020]/90 text-center btn-press flex items-center justify-center gap-2"
              >
                <span>EXPLORE TECH SECTOR</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="/tech#compare"
                className="bg-white text-[#121212] border-2 border-[#121212] font-mono text-xs font-black uppercase px-6 py-4 shadow-[4px_4px_0px_0px_#1040C0] hover:bg-[#F0F0F0] text-center btn-press flex items-center justify-center gap-2"
              >
                <Scale className="w-4 h-4 text-[#1040C0]" />
                <span>COMPARE TECH ROLES</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Feature Spec Cards in Bauhaus Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((career, idx) => {
            const accents = [
              { border: "border-[#D02020]", badge: "bg-[#D02020]", text: "text-[#D02020]" },
              { border: "border-[#1040C0]", badge: "bg-[#1040C0]", text: "text-[#1040C0]" },
              { border: "border-[#F0C020]", badge: "bg-[#F0C020]", text: "text-[#121212]" },
              { border: "border-[#121212]", badge: "bg-[#121212]", text: "text-[#121212]" },
            ][idx % 4];

            return (
              <div
                key={career.id}
                className="bg-white border-4 border-[#121212] shadow-bauhaus p-5 flex flex-col justify-between hover:-translate-y-1 transition duration-150"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 border-b-2 border-[#121212] pb-2">
                    <span className="font-mono text-[10px] font-black uppercase text-[#4A4A4A]">
                      0{idx + 1} · {career.subfield}
                    </span>
                    <span className="font-mono text-[10px] font-bold bg-[#F0F0F0] border border-[#121212] px-1.5 py-0.2">
                      {career.timeToJobReady}
                    </span>
                  </div>

                  <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#121212] mb-2">
                    {career.title}
                  </h3>

                  <p className="text-xs font-medium text-[#4A4A4A] line-clamp-2 mb-4">
                    {career.shortDescription}
                  </p>

                  <div className="bg-[#F0F0F0] border border-[#121212] p-2 mb-4 font-mono text-[11px] font-bold text-[#121212]">
                    <div>🇮🇳 {career.avgSalaryIndia.split("|")[0]}</div>
                    <div className="text-[#4A4A4A]">{career.avgSalaryIndia.split("|")[1]}</div>
                  </div>
                </div>

                <Link
                  to="/tech"
                  className="w-full bg-[#121212] text-white border-2 border-[#121212] font-mono text-xs font-black uppercase py-2.5 text-center btn-press hover:bg-[#D02020] transition flex items-center justify-center gap-1.5"
                >
                  <span>VIEW BLUEPRINT</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
