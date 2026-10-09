import { useState } from "react";
import { Scale, Check, AlertTriangle, ArrowRight, X } from "lucide-react";
import { TECH_CAREERS } from "@/lib/scholarsync/careers";
import { TECH_COMPARE_DATA } from "@/lib/scholarsync/compare";
import type { TechCareer } from "@/lib/scholarsync/types";

interface TechCompareSectionProps {
  initialRoleA?: string;
  initialRoleB?: string;
  onExploreRole?: (career: TechCareer) => void;
}

export function TechCompareSection({
  initialRoleA = "frontend-developer",
  initialRoleB = "backend-developer",
  onExploreRole,
}: TechCompareSectionProps) {
  const [roleASlug, setRoleASlug] = useState(initialRoleA);
  const [roleBSlug, setRoleBSlug] = useState(initialRoleB);

  const careerA = TECH_CAREERS.find((c) => c.slug === roleASlug) || TECH_CAREERS[0];
  const careerB = TECH_CAREERS.find((c) => c.slug === roleBSlug) || TECH_CAREERS[1];

  const infoA = TECH_COMPARE_DATA[careerA.slug];
  const infoB = TECH_COMPARE_DATA[careerB.slug];

  return (
    <section
      id="compare"
      className="my-16 border-4 border-[#121212] bg-white shadow-bauhaus p-6 md:p-10"
    >
      {/* Header Block */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b-4 border-[#121212] pb-6 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#F0C020] text-[#121212] border-2 border-[#121212] px-3 py-0.5 text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#121212] mb-2">
            <Scale className="w-3.5 h-3.5" />
            SCHOLARSYNC MATRIX // IT CAREER COMPARATOR
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#121212]">
            HEAD-TO-HEAD <span className="text-[#D02020]">TECH ROLE</span> BATTLE
          </h2>
        </div>

        {/* Quick Selectors */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black uppercase text-[#121212]">ROLE A:</span>
            <select
              value={roleASlug}
              onChange={(e) => setRoleASlug(e.target.value)}
              className="bg-[#F0F0F0] border-2 border-[#121212] font-mono text-xs font-bold px-3 py-2 text-[#121212] shadow-[2px_2px_0px_0px_#121212] focus:outline-none"
            >
              {TECH_CAREERS.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>

          <span className="font-display font-black text-lg text-[#D02020]">VS</span>

          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-black uppercase text-[#121212]">ROLE B:</span>
            <select
              value={roleBSlug}
              onChange={(e) => setRoleBSlug(e.target.value)}
              className="bg-[#F0F0F0] border-2 border-[#121212] font-mono text-xs font-bold px-3 py-2 text-[#121212] shadow-[2px_2px_0px_0px_#121212] focus:outline-none"
            >
              {TECH_CAREERS.map((c) => (
                <option key={c.slug} value={c.slug}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Grid Comparison Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* COLUMN A */}
        <div className="border-4 border-[#121212] bg-[#F0F0F0] shadow-[6px_6px_0px_0px_#121212] p-6 relative">
          <div className="absolute top-0 right-0 bg-[#D02020] text-white border-b-2 border-l-2 border-[#121212] px-3 py-1 font-mono text-xs font-black uppercase">
            SIDE A
          </div>

          <div className="mb-4">
            <span className="font-mono text-xs font-bold uppercase text-[#4A4A4A]">
              {careerA.subfield}
            </span>
            <h3 className="font-display font-black text-3xl uppercase tracking-tight text-[#121212] mt-1">
              {careerA.title}
            </h3>
          </div>

          <p className="text-sm font-medium text-[#4A4A4A] mb-6">{careerA.overview}</p>

          {/* Metric Tiles */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white border-2 border-[#121212] p-3 shadow-[2px_2px_0px_0px_#121212]">
              <div className="text-[10px] font-mono font-black uppercase text-[#4A4A4A]">
                FIRST JOB DIFFICULTY
              </div>
              <div className="font-display font-black text-lg text-[#121212]">
                {infoA?.firstJobDifficulty || "Medium"}
              </div>
            </div>
            <div className="bg-white border-2 border-[#121212] p-3 shadow-[2px_2px_0px_0px_#121212]">
              <div className="text-[10px] font-mono font-black uppercase text-[#4A4A4A]">
                LEARNING CURVE
              </div>
              <div className="font-display font-black text-lg text-[#1040C0]">
                {infoA?.learningCurve || "Moderate"}
              </div>
            </div>
            <div className="bg-white border-2 border-[#121212] p-3 shadow-[2px_2px_0px_0px_#121212]">
              <div className="text-[10px] font-mono font-black uppercase text-[#4A4A4A]">
                REMOTE POTENTIAL
              </div>
              <div className="font-display font-black text-lg text-[#D02020]">
                {infoA?.remoteOpportunities || "High"}
              </div>
            </div>
            <div className="bg-white border-2 border-[#121212] p-3 shadow-[2px_2px_0px_0px_#121212]">
              <div className="text-[10px] font-mono font-black uppercase text-[#4A4A4A]">
                AI IMPACT
              </div>
              <div className="font-display font-black text-lg text-[#121212]">
                {infoA?.aiImpact || "Moderate"}
              </div>
            </div>
          </div>

          {/* Persona Fit Matrix */}
          <div className="space-y-4 mb-6">
            <div className="bg-white border-2 border-[#121212] p-3.5">
              <div className="flex items-center gap-1.5 font-mono text-xs font-black uppercase text-[#1040C0] mb-1">
                <Check className="w-4 h-4 text-[#1040C0]" />
                WHO THRIVES HERE
              </div>
              <p className="text-xs font-medium text-[#121212] leading-relaxed">
                {infoA?.whoThrives}
              </p>
            </div>

            <div className="bg-white border-2 border-[#121212] p-3.5">
              <div className="flex items-center gap-1.5 font-mono text-xs font-black uppercase text-[#D02020] mb-1">
                <AlertTriangle className="w-4 h-4 text-[#D02020]" />
                WHO STRUGGLES HERE
              </div>
              <p className="text-xs font-medium text-[#121212] leading-relaxed">
                {infoA?.whoStruggles}
              </p>
            </div>
          </div>

          {/* Compensation preview */}
          <div className="border-t-2 border-[#121212] pt-4 mb-6 font-mono text-xs font-bold text-[#121212]">
            <div>🇮🇳 {careerA.avgSalaryIndia}</div>
            <div className="text-[#4A4A4A] mt-0.5">🌐 {careerA.avgSalaryGlobal}</div>
          </div>

          {onExploreRole && (
            <button
              onClick={() => onExploreRole(careerA)}
              className="w-full bg-[#121212] text-white border-2 border-[#121212] font-black text-xs uppercase py-3 btn-press shadow-[4px_4px_0px_0px_#D02020] hover:bg-[#D02020] transition"
            >
              EXPLORE {careerA.title.toUpperCase()} BLUEPRINT →
            </button>
          )}
        </div>

        {/* COLUMN B */}
        <div className="border-4 border-[#121212] bg-[#F0F0F0] shadow-[6px_6px_0px_0px_#121212] p-6 relative">
          <div className="absolute top-0 right-0 bg-[#1040C0] text-white border-b-2 border-l-2 border-[#121212] px-3 py-1 font-mono text-xs font-black uppercase">
            SIDE B
          </div>

          <div className="mb-4">
            <span className="font-mono text-xs font-bold uppercase text-[#4A4A4A]">
              {careerB.subfield}
            </span>
            <h3 className="font-display font-black text-3xl uppercase tracking-tight text-[#121212] mt-1">
              {careerB.title}
            </h3>
          </div>

          <p className="text-sm font-medium text-[#4A4A4A] mb-6">{careerB.overview}</p>

          {/* Metric Tiles */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="bg-white border-2 border-[#121212] p-3 shadow-[2px_2px_0px_0px_#121212]">
              <div className="text-[10px] font-mono font-black uppercase text-[#4A4A4A]">
                FIRST JOB DIFFICULTY
              </div>
              <div className="font-display font-black text-lg text-[#121212]">
                {infoB?.firstJobDifficulty || "Medium"}
              </div>
            </div>
            <div className="bg-white border-2 border-[#121212] p-3 shadow-[2px_2px_0px_0px_#121212]">
              <div className="text-[10px] font-mono font-black uppercase text-[#4A4A4A]">
                LEARNING CURVE
              </div>
              <div className="font-display font-black text-lg text-[#1040C0]">
                {infoB?.learningCurve || "Moderate"}
              </div>
            </div>
            <div className="bg-white border-2 border-[#121212] p-3 shadow-[2px_2px_0px_0px_#121212]">
              <div className="text-[10px] font-mono font-black uppercase text-[#4A4A4A]">
                REMOTE POTENTIAL
              </div>
              <div className="font-display font-black text-lg text-[#D02020]">
                {infoB?.remoteOpportunities || "High"}
              </div>
            </div>
            <div className="bg-white border-2 border-[#121212] p-3 shadow-[2px_2px_0px_0px_#121212]">
              <div className="text-[10px] font-mono font-black uppercase text-[#4A4A4A]">
                AI IMPACT
              </div>
              <div className="font-display font-black text-lg text-[#121212]">
                {infoB?.aiImpact || "Moderate"}
              </div>
            </div>
          </div>

          {/* Persona Fit Matrix */}
          <div className="space-y-4 mb-6">
            <div className="bg-white border-2 border-[#121212] p-3.5">
              <div className="flex items-center gap-1.5 font-mono text-xs font-black uppercase text-[#1040C0] mb-1">
                <Check className="w-4 h-4 text-[#1040C0]" />
                WHO THRIVES HERE
              </div>
              <p className="text-xs font-medium text-[#121212] leading-relaxed">
                {infoB?.whoThrives}
              </p>
            </div>

            <div className="bg-white border-2 border-[#121212] p-3.5">
              <div className="flex items-center gap-1.5 font-mono text-xs font-black uppercase text-[#D02020] mb-1">
                <AlertTriangle className="w-4 h-4 text-[#D02020]" />
                WHO STRUGGLES HERE
              </div>
              <p className="text-xs font-medium text-[#121212] leading-relaxed">
                {infoB?.whoStruggles}
              </p>
            </div>
          </div>

          {/* Compensation preview */}
          <div className="border-t-2 border-[#121212] pt-4 mb-6 font-mono text-xs font-bold text-[#121212]">
            <div>🇮🇳 {careerB.avgSalaryIndia}</div>
            <div className="text-[#4A4A4A] mt-0.5">🌐 {careerB.avgSalaryGlobal}</div>
          </div>

          {onExploreRole && (
            <button
              onClick={() => onExploreRole(careerB)}
              className="w-full bg-[#121212] text-white border-2 border-[#121212] font-black text-xs uppercase py-3 btn-press shadow-[4px_4px_0px_0px_#1040C0] hover:bg-[#1040C0] transition"
            >
              EXPLORE {careerB.title.toUpperCase()} BLUEPRINT →
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
