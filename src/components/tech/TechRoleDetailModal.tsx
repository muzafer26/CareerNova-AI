import { useState } from "react";
import {
  X,
  CheckCircle,
  AlertTriangle,
  Layers,
  Calendar,
  Award,
  TrendingUp,
  DollarSign,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import type { TechCareer } from "@/lib/scholarsync/types";
import { TECH_REALITY_DATA } from "@/lib/scholarsync/reality";
import { TECH_GROWTH_DATA } from "@/lib/scholarsync/growth";
import { TECH_PORTFOLIO_PROOFS } from "@/lib/scholarsync/portfolio";
import { TECH_ACTION_PLANS } from "@/lib/scholarsync/action-plans";

interface TechRoleDetailModalProps {
  career: TechCareer | null;
  initialTab?: "blueprint" | "reality" | "action" | "growth" | "portfolio";
  onClose: () => void;
}

export function TechRoleDetailModal({
  career,
  initialTab = "blueprint",
  onClose,
}: TechRoleDetailModalProps) {
  const [activeTab, setActiveTab] = useState<
    "blueprint" | "reality" | "action" | "growth" | "portfolio"
  >(initialTab);

  if (!career) return null;

  const reality = TECH_REALITY_DATA[career.slug] || TECH_REALITY_DATA["frontend-developer"];
  const growth = TECH_GROWTH_DATA[career.slug] || TECH_GROWTH_DATA["frontend-developer"];
  const actionPlan = TECH_ACTION_PLANS[career.slug] || TECH_ACTION_PLANS["frontend-developer"];

  // Find portfolio proof
  const portfolioSkill =
    Object.keys(TECH_PORTFOLIO_PROOFS).find((key) =>
      career.skillsRequired.some((s) => s.toLowerCase().includes(key.toLowerCase().split(" ")[0])),
    ) || "JavaScript & React";
  const portfolio =
    TECH_PORTFOLIO_PROOFS[portfolioSkill] || TECH_PORTFOLIO_PROOFS["JavaScript & React"];

  return (
    <div className="fixed inset-0 z-50 bg-[#121212]/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#F0F0F0] border-4 border-[#121212] shadow-bauhaus-lg w-full max-w-5xl max-h-[92vh] flex flex-col relative my-auto">
        {/* Modal Top Header Bar */}
        <div className="bg-[#121212] text-white p-4 sm:p-6 flex items-start justify-between gap-4 border-b-4 border-[#121212] shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-3 h-3 bg-[#D02020] border border-white" />
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#F0C020]">
                SCHOLARSYNC // IT ROLE SPECIFICATION
              </span>
            </div>
            <h2 className="font-display font-black text-2xl sm:text-4xl uppercase tracking-tight text-white leading-none">
              {career.title}
            </h2>
            <p className="font-mono text-xs text-[#E0E0E0] mt-1">
              {career.subfield} · Expected time to job-ready:{" "}
              <span className="text-[#F0C020] font-black">{career.timeToJobReady}</span>
            </p>
          </div>

          <button
            onClick={onClose}
            className="bg-white text-[#121212] border-2 border-white p-2 hover:bg-[#D02020] hover:text-white transition btn-press shrink-0"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-white border-b-4 border-[#121212] px-4 sm:px-6 flex overflow-x-auto gap-2 py-2 shrink-0">
          {[
            { id: "blueprint", label: "01. BLUEPRINT ROADMAP" },
            { id: "reality", label: "02. REALITY CHECK" },
            { id: "portfolio", label: "03. PORTFOLIO PROOFS" },
            { id: "growth", label: "04. CAREER EVOLUTION" },
            { id: "action", label: "05. 7-DAY ACTION PLAN" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`font-mono text-xs font-black uppercase px-3 py-2 border-2 border-[#121212] whitespace-nowrap transition ${
                activeTab === tab.id
                  ? "bg-[#D02020] text-white shadow-[2px_2px_0px_0px_#121212]"
                  : "bg-[#F0F0F0] text-[#121212] hover:bg-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Scrollable Content Body */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: BLUEPRINT ROADMAP */}
          {activeTab === "blueprint" && (
            <div className="space-y-6">
              <div className="bg-white border-4 border-[#121212] p-5 shadow-[4px_4px_0px_0px_#121212]">
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#121212] mb-2">
                  ARCHITECTURAL ROADMAP ({career.stages.length} SEQUENTIAL STAGES)
                </h3>
                <p className="text-sm font-medium text-[#4A4A4A]">
                  Every stage is constructed with strict prerequisite dependencies, production
                  rationales, milestone checklists, and common pitfalls to avoid.
                </p>
              </div>

              <div className="space-y-5">
                {career.stages.map((stage, idx) => (
                  <div
                    key={stage.id}
                    className="bg-white border-4 border-[#121212] shadow-bauhaus p-5 relative"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b-2 border-[#121212] pb-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="w-8 h-8 bg-[#121212] text-white font-mono font-black text-sm flex items-center justify-center border-2 border-[#121212]">
                          0{stage.order}
                        </span>
                        <div>
                          <h4 className="font-display font-black text-xl uppercase tracking-tight text-[#121212]">
                            {stage.title}
                          </h4>
                          <span className="font-mono text-xs text-[#D02020] font-bold">
                            Duration: {stage.duration}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1">
                        {stage.skills.map((s) => (
                          <span
                            key={s}
                            className="bg-[#F0F0F0] border border-[#121212] font-mono text-[11px] font-bold px-2 py-0.5 text-[#121212]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>

                    <p className="text-sm font-medium text-[#121212] mb-4">{stage.description}</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      {/* Why Exists & Real World */}
                      <div className="bg-[#F0F0F0] border-2 border-[#121212] p-3 space-y-2">
                        <div>
                          <span className="font-mono font-black text-[#1040C0] uppercase">
                            WHY THIS STEP:{" "}
                          </span>
                          <span className="font-medium text-[#121212]">{stage.whyExists}</span>
                        </div>
                        {stage.realWorldUsage && (
                          <div>
                            <span className="font-mono font-black text-[#121212] uppercase">
                              PRODUCTION USAGE:{" "}
                            </span>
                            <span className="font-medium text-[#4A4A4A]">
                              {stage.realWorldUsage}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Suggested Projects */}
                      <div className="bg-[#F0F0F0] border-2 border-[#121212] p-3">
                        <span className="font-mono font-black text-[#D02020] uppercase block mb-1">
                          RECOMMENDED PROJECT PROOFS:
                        </span>
                        <ul className="space-y-1">
                          {stage.suggestedProjects?.map((proj, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-1.5 font-medium text-[#121212]"
                            >
                              <span className="text-[#D02020] font-bold">→</span>
                              <span>{proj}</span>
                            </li>
                          )) || <li>Complete hands-on milestone deliverables</li>}
                        </ul>
                      </div>
                    </div>

                    {/* Common Pitfalls */}
                    {stage.commonMistakes && stage.commonMistakes.length > 0 && (
                      <div className="mt-3 pt-3 border-t-2 border-[#121212] text-xs">
                        <span className="font-mono font-black text-[#D02020] uppercase">
                          CRITICAL PITFALLS:{" "}
                        </span>
                        <span className="font-medium text-[#4A4A4A]">
                          {stage.commonMistakes.join(" · ")}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: REALITY CHECK */}
          {activeTab === "reality" && (
            <div className="space-y-6">
              {/* Day-in-the-Life Logs */}
              <div className="bg-white border-4 border-[#121212] p-6 shadow-bauhaus">
                <div className="flex items-center gap-2 mb-4 border-b-2 border-[#121212] pb-3">
                  <Calendar className="w-5 h-5 text-[#1040C0]" />
                  <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#121212]">
                    A REALISTIC WEEK IN THE LIFE (MON–FRI LOGS)
                  </h3>
                </div>

                <div className="space-y-3">
                  {reality.dailyReality.map((day, idx) => (
                    <div
                      key={idx}
                      className="bg-[#F0F0F0] border-2 border-[#121212] p-3 font-mono text-xs font-bold text-[#121212] flex items-start gap-3"
                    >
                      <span className="bg-[#121212] text-white px-2 py-0.5 text-[10px] font-black shrink-0">
                        LOG 0{idx + 1}
                      </span>
                      <span>{day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Traps & Warnings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border-4 border-[#121212] p-6 shadow-[4px_4px_0px_0px_#121212]">
                  <div className="flex items-center gap-2 text-sm font-mono font-black uppercase text-[#1040C0] mb-3">
                    <CheckCircle className="w-4 h-4 text-[#1040C0]" />
                    WHAT BEGINNERS UNDERESTIMATE
                  </div>
                  <ul className="space-y-2.5">
                    {reality.beginnersUnderestimate.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-medium text-[#121212] flex items-start gap-2"
                      >
                        <span className="text-[#1040C0] font-black">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white border-4 border-[#121212] p-6 shadow-[4px_4px_0px_0px_#D02020]">
                  <div className="flex items-center gap-2 text-sm font-mono font-black uppercase text-[#D02020] mb-3">
                    <AlertTriangle className="w-4 h-4 text-[#D02020]" />
                    WHO SHOULD PROBABLY AVOID THIS ROLE
                  </div>
                  <ul className="space-y-2.5">
                    {reality.whoShouldAvoid.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-medium text-[#121212] flex items-start gap-2"
                      >
                        <span className="text-[#D02020] font-black">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: PORTFOLIO PROOFS */}
          {activeTab === "portfolio" && (
            <div className="space-y-6">
              <div className="bg-white border-4 border-[#121212] p-5 shadow-[4px_4px_0px_0px_#121212]">
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#121212] mb-1">
                  REQUIRED PORTFOLIO BENCHMARKS ({portfolio.skillName})
                </h3>
                <p className="text-sm font-medium text-[#4A4A4A]">
                  Generic tutorial clones do not get candidates hired. Recruiters look for verified
                  deliverables and evaluation criteria across 3 distinct skill tiers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* BEGINNER TIER */}
                <div className="bg-white border-4 border-[#121212] shadow-bauhaus p-5 flex flex-col justify-between">
                  <div>
                    <div className="bg-[#F0C020] text-[#121212] border-2 border-[#121212] font-mono text-[10px] font-black uppercase px-2 py-0.5 w-fit mb-3">
                      TIER 1 · FOUNDATIONAL
                    </div>
                    <h4 className="font-display font-black text-xl uppercase text-[#121212] mb-2">
                      {portfolio.beginner.title}
                    </h4>
                    <p className="text-xs font-medium text-[#4A4A4A] mb-4">
                      {portfolio.beginner.description}
                    </p>

                    <div className="mb-4">
                      <span className="font-mono text-[10px] font-black uppercase text-[#121212] block mb-1">
                        DELIVERABLES:
                      </span>
                      <ul className="space-y-1">
                        {portfolio.beginner.deliverables.map((d, i) => (
                          <li
                            key={i}
                            className="text-[11px] font-medium text-[#121212] flex items-start gap-1"
                          >
                            <span className="text-[#121212] font-black">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2.5 text-[10px] font-mono font-bold text-[#121212]">
                    AUDIT: {portfolio.beginner.evaluationCriteria.join(" · ")}
                  </div>
                </div>

                {/* INTERMEDIATE TIER */}
                <div className="bg-white border-4 border-[#121212] shadow-bauhaus p-5 flex flex-col justify-between">
                  <div>
                    <div className="bg-[#1040C0] text-white border-2 border-[#121212] font-mono text-[10px] font-black uppercase px-2 py-0.5 w-fit mb-3">
                      TIER 2 · PRODUCTION READY
                    </div>
                    <h4 className="font-display font-black text-xl uppercase text-[#121212] mb-2">
                      {portfolio.intermediate.title}
                    </h4>
                    <p className="text-xs font-medium text-[#4A4A4A] mb-4">
                      {portfolio.intermediate.description}
                    </p>

                    <div className="mb-4">
                      <span className="font-mono text-[10px] font-black uppercase text-[#121212] block mb-1">
                        DELIVERABLES:
                      </span>
                      <ul className="space-y-1">
                        {portfolio.intermediate.deliverables.map((d, i) => (
                          <li
                            key={i}
                            className="text-[11px] font-medium text-[#121212] flex items-start gap-1"
                          >
                            <span className="text-[#1040C0] font-black">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2.5 text-[10px] font-mono font-bold text-[#121212]">
                    AUDIT: {portfolio.intermediate.evaluationCriteria.join(" · ")}
                  </div>
                </div>

                {/* ADVANCED TIER */}
                <div className="bg-white border-4 border-[#121212] shadow-bauhaus p-5 flex flex-col justify-between">
                  <div>
                    <div className="bg-[#D02020] text-white border-2 border-[#121212] font-mono text-[10px] font-black uppercase px-2 py-0.5 w-fit mb-3">
                      TIER 3 · ENTERPRISE SCALE
                    </div>
                    <h4 className="font-display font-black text-xl uppercase text-[#121212] mb-2">
                      {portfolio.advanced.title}
                    </h4>
                    <p className="text-xs font-medium text-[#4A4A4A] mb-4">
                      {portfolio.advanced.description}
                    </p>

                    <div className="mb-4">
                      <span className="font-mono text-[10px] font-black uppercase text-[#121212] block mb-1">
                        DELIVERABLES:
                      </span>
                      <ul className="space-y-1">
                        {portfolio.advanced.deliverables.map((d, i) => (
                          <li
                            key={i}
                            className="text-[11px] font-medium text-[#121212] flex items-start gap-1"
                          >
                            <span className="text-[#D02020] font-black">•</span>
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="bg-[#F0F0F0] border-2 border-[#121212] p-2.5 text-[10px] font-mono font-bold text-[#121212]">
                    AUDIT: {portfolio.advanced.evaluationCriteria.join(" · ")}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: CAREER EVOLUTION */}
          {activeTab === "growth" && (
            <div className="space-y-6">
              <div className="bg-white border-4 border-[#121212] p-6 shadow-bauhaus">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-[#121212] pb-4 mb-6">
                  <div>
                    <span className="font-mono text-xs font-black uppercase tracking-widest text-[#D02020]">
                      PROMOTION HORIZON: {growth.timeframe}
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#121212]">
                      LONG-TERM CAREER TRANSITIONS
                    </h3>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {/* TYPICAL */}
                  <div className="bg-[#F0F0F0] border-2 border-[#121212] p-4">
                    <span className="font-mono text-xs font-black uppercase text-[#1040C0] block mb-2">
                      01. TYPICAL PROGRESSION
                    </span>
                    <ul className="space-y-1.5 font-mono text-xs font-bold text-[#121212]">
                      {growth.transitions.typical.map((t) => (
                        <li key={t} className="flex items-center gap-1.5">
                          <span className="text-[#1040C0]">→</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* COMMON */}
                  <div className="bg-[#F0F0F0] border-2 border-[#121212] p-4">
                    <span className="font-mono text-xs font-black uppercase text-[#D02020] block mb-2">
                      02. LATERAL EXPANSION
                    </span>
                    <ul className="space-y-1.5 font-mono text-xs font-bold text-[#121212]">
                      {growth.transitions.common.map((t) => (
                        <li key={t} className="flex items-center gap-1.5">
                          <span className="text-[#D02020]">→</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* ADVANCED */}
                  <div className="bg-[#F0F0F0] border-2 border-[#121212] p-4">
                    <span className="font-mono text-xs font-black uppercase text-[#121212] block mb-2">
                      03. LEADERSHIP & ARCHITECTURE
                    </span>
                    <ul className="space-y-1.5 font-mono text-xs font-bold text-[#121212]">
                      {growth.transitions.advanced.map((t) => (
                        <li key={t} className="flex items-center gap-1.5">
                          <span className="text-[#121212]">★</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Upskill Needed */}
                <div className="bg-white border-2 border-[#121212] p-4">
                  <span className="font-mono text-xs font-black uppercase text-[#121212] block mb-2">
                    CRITICAL SKILLS REQUIRED TO BRIDGE TO SENIOR LEVEL:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {growth.upskillNeeded.map((u) => (
                      <span
                        key={u}
                        className="bg-[#F0F0F0] border border-[#121212] font-mono text-xs font-bold px-2.5 py-1 text-[#121212]"
                      >
                        {u}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: 7-DAY ACTION PLAN */}
          {activeTab === "action" && (
            <div className="space-y-6">
              <div className="bg-white border-4 border-[#121212] p-5 shadow-[4px_4px_0px_0px_#121212]">
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#121212] mb-1">
                  7-DAY SPRINT KICKOFF PLAN
                </h3>
                <p className="text-sm font-medium text-[#4A4A4A]">
                  Stop overthinking and start building. Complete one concrete daily deliverable to
                  kick off your career transition.
                </p>
              </div>

              <div className="space-y-3">
                {actionPlan.days.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white border-3 border-[#121212] shadow-[3px_3px_0px_0px_#121212] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                  >
                    <div className="flex items-start sm:items-center gap-3">
                      <span className="bg-[#D02020] text-white border-2 border-[#121212] font-mono text-xs font-black px-2.5 py-1 shrink-0">
                        {item.day}
                      </span>
                      <div>
                        <h4 className="font-display font-black text-base uppercase text-[#121212]">
                          {item.task}
                        </h4>
                        <p className="text-xs font-medium text-[#4A4A4A] mt-0.5">
                          {item.description}
                        </p>
                      </div>
                    </div>

                    <div className="font-mono text-xs font-bold text-[#1040C0] bg-[#F0F0F0] border border-[#121212] px-2 py-1 shrink-0 text-center">
                      EST: 2–3 HRS
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Bottom Footer Actions */}
        <div className="bg-[#F0F0F0] border-t-4 border-[#121212] p-4 sm:px-6 flex flex-wrap items-center justify-between gap-3 shrink-0">
          <div className="font-mono text-xs font-bold text-[#121212]">
            🇮🇳 {career.avgSalaryIndia}
          </div>

          <div className="flex items-center gap-3">
            {career.roadmapShUrl && (
              <a
                href={career.roadmapShUrl}
                target="_blank"
                rel="noreferrer"
                className="bg-white text-[#121212] border-2 border-[#121212] font-mono text-xs font-black px-3 py-2 hover:bg-[#F0F0F0] flex items-center gap-1.5 btn-press shadow-[2px_2px_0px_0px_#121212]"
              >
                <span>OPEN ROADMAP.SH</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            <button
              onClick={onClose}
              className="bg-[#121212] text-white border-2 border-[#121212] font-black text-xs uppercase px-5 py-2 hover:bg-[#D02020] btn-press transition"
            >
              DONE / CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
