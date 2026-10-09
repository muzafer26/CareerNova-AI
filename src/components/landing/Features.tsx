import { Compass, FileSearch, Mic, Map as MapIcon, Briefcase, MessageCircle } from "lucide-react";

const features = [
  {
    icon: Compass,
    eyebrow: "MODULE 01 · DIRECTION",
    title: "AI CAREER MENTOR",
    desc: "Personalized constructivist advice from an always-on mentor that maps your skills, interests, and salary goals into actionable milestones.",
    cornerShape: "circle",
    cornerColor: "#D02020",
    accentBg: "bg-[#D02020]",
  },
  {
    icon: MapIcon,
    eyebrow: "MODULE 02 · ARCHITECTURE",
    title: "STRUCTURED ROADMAPS",
    desc: "Every roadmap is an engineered blueprint from beginner to senior. Step-by-step milestones, vetted free tutorials, and portfolio projects.",
    cornerShape: "square",
    cornerColor: "#1040C0",
    accentBg: "bg-[#1040C0]",
  },
  {
    icon: FileSearch,
    eyebrow: "MODULE 03 · VERIFICATION",
    title: "ATS RESUME SCANNER",
    desc: "Audit your resume against modern ATS algorithmic filters. Receive an instant score, keyword gaps, and recruiter-grade bullet point rewrites.",
    cornerShape: "triangle",
    cornerColor: "#F0C020",
    accentBg: "bg-[#F0C020]",
  },
  {
    icon: Briefcase,
    eyebrow: "MODULE 04 · OPPORTUNITY",
    title: "LIVE JOBS & INTERNSHIPS",
    desc: "Aggregated, verified listings filtered by remote status, contract type, experience level, and compensation benchmarks.",
    cornerShape: "rot-square",
    cornerColor: "#121212",
    accentBg: "bg-[#121212]",
  },
  {
    icon: Mic,
    eyebrow: "MODULE 05 · REHEARSAL",
    title: "MOCK INTERVIEW DRILLS",
    desc: "Simulate rigorous technical and behavioral interview scenarios with immediate diagnostic scoring and feedback.",
    cornerShape: "circle",
    cornerColor: "#D02020",
    accentBg: "bg-[#D02020]",
  },
  {
    icon: MessageCircle,
    eyebrow: "MODULE 06 · KNOWLEDGE",
    title: "CURATED RESOURCE HUB",
    desc: "Open Library books, comprehensive YouTube masterclasses, and verified community references organized by engineering discipline.",
    cornerShape: "square",
    cornerColor: "#1040C0",
    accentBg: "bg-[#1040C0]",
  },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative py-20 md:py-28 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-[#F0F0F0]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-4 border-[#121212] mb-12">
          <div>
            <div className="inline-block bg-[#1040C0] text-white px-3 py-1 text-xs font-black uppercase tracking-widest mb-3">
              SYSTEM CAPABILITIES
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212] leading-[0.95]">
              SIX ESSENTIAL <br />
              <span className="text-[#D02020]">BUILDING BLOCKS.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-bold text-[#121212] leading-relaxed">
            Eliminating guesswork with mathematically structured career tools engineered for clarity
            and execution.
          </p>
        </div>

        {/* 3-Column Bauhaus Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <article
              key={f.title}
              className="group relative bg-white border-4 border-[#121212] p-7 shadow-[8px_8px_0px_0px_#121212] hover:-translate-y-1.5 transition-transform duration-200 flex flex-col justify-between"
            >
              {/* Corner Geometric Decoration */}
              <div className="absolute top-4 right-4" aria-hidden="true">
                {f.cornerShape === "circle" && (
                  <span
                    className="block w-4 h-4 rounded-full border-2 border-[#121212]"
                    style={{ backgroundColor: f.cornerColor }}
                  />
                )}
                {f.cornerShape === "square" && (
                  <span
                    className="block w-4 h-4 rounded-none border-2 border-[#121212]"
                    style={{ backgroundColor: f.cornerColor }}
                  />
                )}
                {f.cornerShape === "triangle" && (
                  <span
                    className="block w-4 h-4 clip-triangle border-2 border-[#121212]"
                    style={{ backgroundColor: f.cornerColor }}
                  />
                )}
                {f.cornerShape === "rot-square" && (
                  <span
                    className="block w-3.5 h-3.5 rounded-none rotate-45 border-2 border-[#121212]"
                    style={{ backgroundColor: f.cornerColor }}
                  />
                )}
              </div>

              <div>
                {/* Icon in white bordered box with shadow */}
                <div className="w-12 h-12 bg-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
                  <f.icon className="h-6 w-6 text-[#121212]" strokeWidth={2.5} />
                </div>

                {/* Eyebrow Label */}
                <div className="text-[11px] font-black uppercase tracking-widest text-[#4A4A4A] mb-2">
                  {f.eyebrow}
                </div>

                {/* Card Title */}
                <h3 className="font-display font-black text-2xl uppercase tracking-tight text-[#121212]">
                  {f.title}
                </h3>

                {/* Card Description */}
                <p className="mt-3 text-sm font-medium text-[#4A4A4A] leading-relaxed">{f.desc}</p>
              </div>

              {/* Bottom Bauhaus Accent Line */}
              <div className="mt-8 pt-4 border-t-2 border-[#121212] flex items-center justify-between text-xs font-black uppercase tracking-wider text-[#121212]">
                <span>STATUS // FUNCTIONAL</span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#121212] group-hover:bg-[#D02020] transition-colors" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
