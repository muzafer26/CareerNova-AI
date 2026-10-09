import { useState } from "react";
import { GitBranch, Clock, AlertCircle, CheckCircle, ArrowRight } from "lucide-react";
import { TECH_SKILL_GRAPH } from "@/lib/scholarsync/skills";

interface TechSkillGraphSectionProps {
  onSelectCareerName?: (name: string) => void;
}

export function TechSkillGraphSection({ onSelectCareerName }: TechSkillGraphSectionProps) {
  const skillKeys = Object.keys(TECH_SKILL_GRAPH);
  const [selectedSkillKey, setSelectedSkillKey] = useState<string>("JavaScript");

  const skill = TECH_SKILL_GRAPH[selectedSkillKey] || TECH_SKILL_GRAPH["JavaScript"];

  return (
    <section
      id="skills"
      className="my-16 border-4 border-[#121212] bg-[#F0F0F0] shadow-bauhaus p-6 md:p-10"
    >
      {/* Header */}
      <div className="border-b-4 border-[#121212] pb-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 bg-[#1040C0] text-white border-2 border-[#121212] px-3 py-0.5 text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#121212] mb-2">
            <GitBranch className="w-3.5 h-3.5" />
            SCHOLARSYNC IT // SKILL PREREQUISITE GRAPH
          </div>
          <h2 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#121212]">
            TECH STACK <span className="text-[#1040C0]">DEPENDENCY</span> ENGINE
          </h2>
        </div>
        <p className="text-xs font-mono font-bold text-[#4A4A4A] max-w-md">
          Select any technology to audit its foundational prerequisites, unlocked career paths,
          learning duration, and beginner traps.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Skill Selector Matrix (LEFT) */}
        <div className="lg:col-span-5 bg-white border-4 border-[#121212] p-4 shadow-[4px_4px_0px_0px_#121212]">
          <div className="text-xs font-mono font-black uppercase tracking-wider text-[#121212] mb-3 pb-2 border-b-2 border-[#121212]">
            SELECT TECHNOLOGY TO INSPECT:
          </div>

          <div className="grid grid-cols-2 gap-2">
            {skillKeys.map((key) => {
              const item = TECH_SKILL_GRAPH[key];
              const isSelected = selectedSkillKey === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedSkillKey(key)}
                  className={`text-left p-2.5 border-2 border-[#121212] font-mono text-xs font-bold transition flex items-center justify-between ${
                    isSelected
                      ? "bg-[#D02020] text-white shadow-[3px_3px_0px_0px_#121212]"
                      : "bg-[#F0F0F0] text-[#121212] hover:bg-white"
                  }`}
                >
                  <span className="truncate">{item.name}</span>
                  <span
                    className={`text-[9px] px-1 py-0.5 border border-[#121212] font-mono font-black uppercase shrink-0 ml-1 ${
                      item.difficulty === "Beginner"
                        ? "bg-[#F0C020] text-[#121212]"
                        : item.difficulty === "Intermediate"
                          ? "bg-white text-[#121212]"
                          : "bg-[#121212] text-white"
                    }`}
                  >
                    {item.difficulty[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Skill Blueprint Display (RIGHT) */}
        <div className="lg:col-span-7 bg-white border-4 border-[#121212] p-6 shadow-bauhaus">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#121212] pb-4 mb-6">
            <div>
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#D02020]">
                LEVEL: {skill.difficulty.toUpperCase()}
              </span>
              <h3 className="font-display font-black text-3xl sm:text-4xl uppercase tracking-tight text-[#121212]">
                {skill.name}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 bg-[#F0F0F0] border-2 border-[#121212] px-3 py-1.5 font-mono text-xs font-black">
              <Clock className="w-4 h-4 text-[#1040C0]" />
              <span>ESTIMATED: {skill.timeEstimate}</span>
            </div>
          </div>

          {/* Prerequisites and Unlocks Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {/* PREREQUISITES */}
            <div className="bg-[#F0F0F0] border-2 border-[#121212] p-4">
              <div className="text-[10px] font-mono font-black uppercase tracking-widest text-[#121212] mb-2 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#121212] border border-[#121212]" />
                PREREQUISITES REQUIRED
              </div>
              {skill.prerequisites.length > 0 ? (
                <div className="flex flex-wrap gap-1.5">
                  {skill.prerequisites.map((p) => (
                    <span
                      key={p}
                      className="bg-white border-2 border-[#121212] font-mono text-xs font-bold px-2 py-0.5 text-[#121212]"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              ) : (
                <span className="font-mono text-xs font-bold text-[#1040C0]">
                  ✓ Zero prerequisites — Ideal entry point!
                </span>
              )}
            </div>

            {/* UNLOCKS */}
            <div className="bg-[#F0F0F0] border-2 border-[#121212] p-4">
              <div className="text-[10px] font-mono font-black uppercase tracking-widest text-[#121212] mb-2 flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 bg-[#D02020] border border-[#121212]" />
                DIRECTLY UNLOCKS
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skill.unlocks.map((u) => (
                  <span
                    key={u}
                    className="bg-[#D02020] text-white border-2 border-[#121212] font-mono text-xs font-black px-2 py-0.5"
                  >
                    {u}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Used in Tech Roles */}
          <div className="mb-6">
            <div className="text-[10px] font-mono font-black uppercase tracking-widest text-[#121212] mb-2">
              USED IN THESE IT ROLES:
            </div>
            <div className="flex flex-wrap gap-2">
              {skill.usedInCareers.map((c) => (
                <button
                  key={c}
                  onClick={() => onSelectCareerName && onSelectCareerName(c)}
                  className="bg-white hover:bg-[#F0C020] border-2 border-[#121212] font-mono text-xs font-black px-3 py-1 shadow-[2px_2px_0px_0px_#121212] btn-press text-[#121212]"
                >
                  {c} →
                </button>
              ))}
            </div>
          </div>

          {/* Common Mistakes Warning */}
          <div className="bg-[#FFF5F5] border-2 border-[#D02020] p-4">
            <div className="flex items-center gap-1.5 text-xs font-mono font-black uppercase text-[#D02020] mb-2">
              <AlertCircle className="w-4 h-4 text-[#D02020]" />
              BEGINNER PITFALLS TO AVOID
            </div>
            <ul className="space-y-1.5">
              {skill.commonMistakes.map((m, idx) => (
                <li key={idx} className="text-xs font-medium text-[#121212] flex items-start gap-2">
                  <span className="text-[#D02020] font-black">•</span>
                  <span>{m}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
