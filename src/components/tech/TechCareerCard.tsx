import { ArrowRight, Sparkles, TrendingUp, DollarSign, Clock, Layers } from "lucide-react";
import type { TechCareer } from "@/lib/scholarsync/types";
import { CATEGORY_LABELS } from "@/lib/scholarsync/careers";

interface TechCareerCardProps {
  career: TechCareer;
  onSelect: (career: TechCareer, tab?: "blueprint" | "reality" | "action" | "growth") => void;
  onCompareSelect?: (career: TechCareer) => void;
  isCompareSelected?: boolean;
}

export function TechCareerCard({
  career,
  onSelect,
  onCompareSelect,
  isCompareSelected,
}: TechCareerCardProps) {
  // Category primary theme color
  const categoryColorMap: Record<string, { bg: string; text: string; shadow: string }> = {
    software: {
      bg: "bg-[#D02020]",
      text: "text-white",
      shadow: "shadow-[4px_4px_0px_0px_#D02020]",
    },
    "data-ai": {
      bg: "bg-[#1040C0]",
      text: "text-white",
      shadow: "shadow-[4px_4px_0px_0px_#1040C0]",
    },
    "cloud-devops": {
      bg: "bg-[#F0C020]",
      text: "text-[#121212]",
      shadow: "shadow-[4px_4px_0px_0px_#F0C020]",
    },
    "security-qa": {
      bg: "bg-[#121212]",
      text: "text-white",
      shadow: "shadow-[4px_4px_0px_0px_#121212]",
    },
    "mobile-systems": {
      bg: "bg-[#D02020]",
      text: "text-white",
      shadow: "shadow-[4px_4px_0px_0px_#D02020]",
    },
  };

  const theme = categoryColorMap[career.category] || categoryColorMap.software;

  return (
    <div className="bg-white border-4 border-[#121212] shadow-bauhaus flex flex-col justify-between hover:-translate-y-1 hover:shadow-bauhaus-lg transition-all duration-150 relative">
      {/* Top Banner Stripe */}
      <div className="flex items-center justify-between border-b-4 border-[#121212] px-4 py-2.5 bg-[#F0F0F0]">
        <div className="flex items-center gap-2">
          <span
            className={`w-3.5 h-3.5 border border-[#121212] ${career.category === "software" ? "rounded-full bg-[#D02020]" : career.category === "data-ai" ? "rounded-none bg-[#1040C0]" : "clip-triangle bg-[#F0C020]"}`}
          />
          <span className="font-mono text-xs font-black uppercase tracking-wider text-[#121212]">
            {CATEGORY_LABELS[career.category]}
          </span>
        </div>
        <div className="flex items-center gap-1.5 bg-[#121212] text-white px-2 py-0.5 text-[10px] font-black uppercase font-mono tracking-widest">
          <TrendingUp className="w-3 h-3 text-[#F0C020]" />
          <span>DEMAND: {career.demandTrend.toUpperCase()}</span>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#121212] leading-none">
              {career.title}
            </h3>
            <span className="font-mono text-xs font-bold text-[#121212] bg-[#F0F0F0] border-2 border-[#121212] px-2 py-0.5 whitespace-nowrap">
              {career.timeToJobReady}
            </span>
          </div>

          <p className="text-sm font-medium text-[#4A4A4A] leading-relaxed mb-6">
            {career.shortDescription}
          </p>

          {/* Key Skills Tags */}
          <div className="mb-6">
            <div className="text-[10px] font-black font-mono uppercase text-[#121212] tracking-widest mb-2 flex items-center gap-1">
              <Layers className="w-3 h-3 text-[#D02020]" />
              CORE TECH STACK
            </div>
            <div className="flex flex-wrap gap-1.5">
              {career.skillsRequired.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="font-mono text-xs font-bold bg-[#F0F0F0] border-2 border-[#121212] px-2 py-0.5 text-[#121212]"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Salary Breakdown Block */}
          <div className="bg-[#F0F0F0] border-2 border-[#121212] p-3 mb-6">
            <div className="flex items-center gap-1 text-[10px] font-black font-mono uppercase tracking-widest text-[#121212] mb-1">
              <DollarSign className="w-3.5 h-3.5 text-[#1040C0]" />
              COMPENSATION BENCHMARKS
            </div>
            <div className="font-mono text-xs font-bold text-[#121212] leading-tight">
              <div>🇮🇳 {career.avgSalaryIndia}</div>
              <div className="text-[#4A4A4A] mt-0.5">🌐 {career.avgSalaryGlobal}</div>
            </div>
          </div>
        </div>

        {/* Action Button Row */}
        <div className="pt-4 border-t-2 border-[#121212] flex flex-col gap-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelect(career, "blueprint")}
              className="bg-[#D02020] text-white border-2 border-[#121212] font-black text-xs uppercase px-3 py-2.5 shadow-[3px_3px_0px_0px_#121212] hover:bg-[#D02020]/90 btn-press flex items-center justify-center gap-1.5"
            >
              <span>BLUEPRINT</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => onSelect(career, "reality")}
              className="bg-white text-[#121212] border-2 border-[#121212] font-black text-xs uppercase px-3 py-2.5 shadow-[3px_3px_0px_0px_#121212] hover:bg-[#F0F0F0] btn-press"
            >
              REALITY CHECK
            </button>
          </div>

          <div className="flex items-center justify-between gap-2 mt-1">
            <button
              onClick={() => onSelect(career, "action")}
              className="text-[11px] font-mono font-black uppercase text-[#121212] underline decoration-2 decoration-[#1040C0] underline-offset-4 hover:text-[#1040C0]"
            >
              7-Day Kickoff Plan →
            </button>

            {onCompareSelect && (
              <button
                onClick={() => onCompareSelect(career)}
                className={`text-[11px] font-mono font-black uppercase border-2 border-[#121212] px-2 py-0.5 transition ${
                  isCompareSelected
                    ? "bg-[#F0C020] text-[#121212] shadow-[2px_2px_0px_0px_#121212]"
                    : "bg-white text-[#121212] hover:bg-[#F0F0F0]"
                }`}
              >
                {isCompareSelected ? "✓ SELECTED TO COMPARE" : "+ COMPARE ROLE"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
