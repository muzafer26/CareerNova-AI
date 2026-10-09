import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  Cpu,
  Layers,
  Sparkles,
  Scale,
  GitBranch,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { TECH_CAREERS, CATEGORY_LABELS } from "@/lib/scholarsync/careers";
import { TECH_TO_CAREER } from "@/lib/scholarsync/tech-mapping";
import { TechCareerCard } from "./TechCareerCard";
import { TechCompareSection } from "./TechCompareSection";
import { TechSkillGraphSection } from "./TechSkillGraphSection";
import { TechRoleDetailModal } from "./TechRoleDetailModal";
import type { TechCareer } from "@/lib/scholarsync/types";

export function TechSectorHub() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [modalCareer, setModalCareer] = useState<TechCareer | null>(null);
  const [modalInitialTab, setModalInitialTab] = useState<
    "blueprint" | "reality" | "action" | "growth" | "portfolio"
  >("blueprint");

  // Comparative state
  const [compareA, setCompareA] = useState<TechCareer>(TECH_CAREERS[0]);
  const [compareB, setCompareB] = useState<TechCareer>(TECH_CAREERS[1]);
  const [showCompareSection, setShowCompareSection] = useState(false);

  // Filter careers based on search query and category
  const filteredCareers = useMemo(() => {
    return TECH_CAREERS.filter((career) => {
      // Category match
      if (selectedCategory !== "all" && career.category !== selectedCategory) {
        return false;
      }

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();

      // Check direct title, subfield, or tag match
      const titleMatch = career.title.toLowerCase().includes(q);
      const subfieldMatch = career.subfield.toLowerCase().includes(q);
      const tagMatch = career.tags.some((t) => t.toLowerCase().includes(q));
      const aliasMatch = career.aliases.some((a) => a.toLowerCase().includes(q));
      const skillMatch = career.skillsRequired.some((s) => s.toLowerCase().includes(q));

      // Check tech mapping (e.g. searching "docker" returns devops and backend)
      const mapped = TECH_TO_CAREER[q];
      const techMappingMatch = mapped ? mapped.careers.includes(career.slug) : false;

      return (
        titleMatch || subfieldMatch || tagMatch || aliasMatch || skillMatch || techMappingMatch
      );
    });
  }, [searchQuery, selectedCategory]);

  const handleOpenModal = (
    career: TechCareer,
    tab: "blueprint" | "reality" | "action" | "growth" | "portfolio" = "blueprint",
  ) => {
    setModalCareer(career);
    setModalInitialTab(tab);
  };

  const handleCompareSelect = (career: TechCareer) => {
    if (compareA.slug === career.slug) {
      // already A, do nothing
      return;
    }
    // shift B to A, set new as B
    setCompareA(compareB);
    setCompareB(career);
    setShowCompareSection(true);

    // Scroll to compare section smoothly
    const elem = document.getElementById("compare");
    if (elem) elem.scrollIntoView({ behavior: "smooth" });
  };

  const quickTechKeywords = [
    "React",
    "Python",
    "Docker",
    "AWS",
    "Kubernetes",
    "PostgreSQL",
    "Gemini",
    "Playwright",
    "Wireshark",
  ];

  return (
    <div className="w-full">
      {/* ── HERO BANNER // BAUHAUS CONSTRUCTIVIST ── */}
      <section className="border-b-4 border-[#121212] bg-[#F0F0F0] relative overflow-hidden">
        {/* Geometric Accent shapes in corner */}
        <div
          className="absolute top-6 right-6 hidden lg:flex items-center gap-3 pointer-events-none"
          aria-hidden="true"
        >
          <span className="w-12 h-12 rounded-full bg-[#D02020] border-4 border-[#121212] shadow-bauhaus-sm" />
          <span className="w-12 h-12 bg-[#1040C0] border-4 border-[#121212] shadow-bauhaus-sm" />
          <span className="w-12 h-12 clip-triangle bg-[#F0C020] border-4 border-[#121212] shadow-bauhaus-sm" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="max-w-4xl">
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#D02020] text-white border-2 border-[#121212] px-3.5 py-1 text-xs font-mono font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_#121212] mb-6">
              <Cpu className="w-3.5 h-3.5 text-[#F0C020]" />
              SCHOLARSYNC × CAREERNOVA // IT & TECH SECTOR COMMAND CENTER
            </div>

            {/* Display Title */}
            <h1 className="font-display font-black text-4xl sm:text-6xl lg:text-7xl leading-[0.92] tracking-tighter uppercase text-[#121212]">
              THE ARCHITECTURE <br />
              OF{" "}
              <span className="bg-[#1040C0] text-white px-2 py-0.5 border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212]">
                TECH ROLES.
              </span>
            </h1>

            <p className="mt-6 text-base sm:text-lg font-medium text-[#121212] max-w-2xl leading-relaxed border-l-4 border-[#D02020] pl-4">
              Integrated from ScholarSync: Explore 10+ core IT specializations, compare software
              engineering disciplines head-to-head, audit technical prerequisite trees, and view
              verified portfolio deliverables.
            </p>

            {/* Jump Navigation Quick Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-xs font-black uppercase">
              <a
                href="#roles"
                className="bg-white text-[#121212] border-2 border-[#121212] px-4 py-2 shadow-[3px_3px_0px_0px_#121212] hover:bg-[#F0C020] btn-press transition"
              >
                01. ROLES DIRECTORY ({TECH_CAREERS.length})
              </a>
              <a
                href="#compare"
                onClick={() => setShowCompareSection(true)}
                className="bg-white text-[#121212] border-2 border-[#121212] px-4 py-2 shadow-[3px_3px_0px_0px_#121212] hover:bg-[#1040C0] hover:text-white btn-press transition flex items-center gap-1.5"
              >
                <Scale className="w-3.5 h-3.5" />
                02. HEAD-TO-HEAD BATTLE
              </a>
              <a
                href="#skills"
                className="bg-white text-[#121212] border-2 border-[#121212] px-4 py-2 shadow-[3px_3px_0px_0px_#121212] hover:bg-[#D02020] hover:text-white btn-press transition flex items-center gap-1.5"
              >
                <GitBranch className="w-3.5 h-3.5" />
                03. SKILL DEPENDENCY GRAPH
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── SEARCH & CATEGORY FILTER CONTROL BAR ── */}
      <section
        id="roles"
        className="bg-white border-b-4 border-[#121212] sticky top-20 z-30 shadow-[0_4px_0_0_#121212]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input Box */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#121212]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search IT roles, skills (e.g. React, Docker, Python)..."
                className="w-full bg-[#F0F0F0] border-2 border-[#121212] font-mono text-xs font-bold pl-10 pr-10 py-2.5 text-[#121212] placeholder:text-[#4A4A4A] shadow-[3px_3px_0px_0px_#121212] focus:outline-none focus:bg-white"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold font-mono text-[#121212] hover:text-[#D02020]"
                >
                  ✕
                </button>
              )}
            </div>

            {/* Quick Tech Tag Filters */}
            <div className="hidden xl:flex items-center gap-1.5 font-mono text-[11px] font-bold">
              <span className="text-[#4A4A4A] mr-1 uppercase">QUICK TECH:</span>
              {quickTechKeywords.slice(0, 6).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSearchQuery(tech)}
                  className={`border border-[#121212] px-2 py-1 transition ${
                    searchQuery.toLowerCase() === tech.toLowerCase()
                      ? "bg-[#D02020] text-white"
                      : "bg-[#F0F0F0] hover:bg-white text-[#121212]"
                  }`}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pt-3 mt-2 border-t-2 border-[#121212]">
            <span className="font-mono text-xs font-black uppercase text-[#121212] shrink-0 mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> DOMAINS:
            </span>
            <button
              onClick={() => setSelectedCategory("all")}
              className={`font-mono text-xs font-black uppercase px-3 py-1.5 border-2 border-[#121212] whitespace-nowrap transition ${
                selectedCategory === "all"
                  ? "bg-[#121212] text-white shadow-[2px_2px_0px_0px_#121212]"
                  : "bg-white text-[#121212] hover:bg-[#F0F0F0]"
              }`}
            >
              ALL IT ROLES ({TECH_CAREERS.length})
            </button>
            {Object.entries(CATEGORY_LABELS).map(([catKey, catLabel]) => {
              const count = TECH_CAREERS.filter((c) => c.category === catKey).length;
              return (
                <button
                  key={catKey}
                  onClick={() => setSelectedCategory(catKey)}
                  className={`font-mono text-xs font-black uppercase px-3 py-1.5 border-2 border-[#121212] whitespace-nowrap transition ${
                    selectedCategory === catKey
                      ? "bg-[#D02020] text-white shadow-[2px_2px_0px_0px_#121212]"
                      : "bg-white text-[#121212] hover:bg-[#F0F0F0]"
                  }`}
                >
                  {catLabel} ({count})
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CAREER CARDS GRID ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="font-display font-black text-2xl sm:text-3xl uppercase tracking-tight text-[#121212]">
              {selectedCategory === "all"
                ? "EXPLORE ALL IT SPECIALIZATIONS"
                : CATEGORY_LABELS[selectedCategory as keyof typeof CATEGORY_LABELS]}
            </h2>
            <p className="font-mono text-xs text-[#4A4A4A] mt-1">
              Showing {filteredCareers.length} of {TECH_CAREERS.length} engineered career profiles.
            </p>
          </div>

          {searchQuery && (
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="font-mono text-xs font-bold text-[#D02020] underline uppercase"
            >
              Clear filters ({filteredCareers.length} found)
            </button>
          )}
        </div>

        {filteredCareers.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCareers.map((career) => (
              <TechCareerCard
                key={career.id}
                career={career}
                onSelect={(c, tab) => handleOpenModal(c, tab || "blueprint")}
                onCompareSelect={handleCompareSelect}
                isCompareSelected={compareA.slug === career.slug || compareB.slug === career.slug}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white border-4 border-[#121212] p-12 text-center shadow-bauhaus">
            <h3 className="font-display font-black text-2xl uppercase text-[#121212] mb-2">
              NO MATCHING IT ROLES FOUND
            </h3>
            <p className="font-mono text-xs text-[#4A4A4A] max-w-md mx-auto mb-6">
              We couldn't find any career matching "{searchQuery}". Try searching for generic skills
              like "React", "Python", "Docker", or clear your filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="bg-[#D02020] text-white border-2 border-[#121212] font-mono text-xs font-black uppercase px-5 py-2.5 shadow-[3px_3px_0px_0px_#121212] btn-press"
            >
              RESET SEARCH FILTERS
            </button>
          </div>
        )}

        {/* ── HEAD-TO-HEAD BATTLE SECTION ── */}
        <TechCompareSection
          initialRoleA={compareA.slug}
          initialRoleB={compareB.slug}
          onExploreRole={(c) => handleOpenModal(c, "blueprint")}
        />

        {/* ── SKILL PREREQUISITE GRAPH SECTION ── */}
        <TechSkillGraphSection
          onSelectCareerName={(careerTitle) => {
            const found = TECH_CAREERS.find(
              (c) => c.title.toLowerCase() === careerTitle.toLowerCase(),
            );
            if (found) handleOpenModal(found, "blueprint");
          }}
        />
      </section>

      {/* ── ROLE DETAIL MODAL ── */}
      <TechRoleDetailModal
        career={modalCareer}
        initialTab={modalInitialTab}
        onClose={() => setModalCareer(null)}
      />
    </div>
  );
}
