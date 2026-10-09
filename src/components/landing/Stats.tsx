import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) =>
    to >= 1000 ? Math.round(v).toLocaleString() : Math.round(v).toString(),
  );

  useEffect(() => {
    if (inView) {
      const c = animate(count, to, { duration: 1.8, ease: "easeOut" });
      return c.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span>{suffix}</span>
    </span>
  );
}

const stats = [
  {
    value: 10000,
    suffix: "+",
    label: "STUDENTS GUIDED",
    shape: "circle",
    note: "Across 40+ countries globally",
  },
  {
    value: 500,
    suffix: "+",
    label: "CAREER ROADMAPS",
    shape: "square",
    note: "Engineered from beginner to senior",
  },
  {
    value: 95,
    suffix: "%",
    label: "SUCCESS RATE",
    shape: "triangle",
    note: "Reported career clarity in 30 days",
  },
  {
    value: 24,
    suffix: "/7",
    label: "ACTIVE MENTOR",
    shape: "rot-square",
    note: "Zero downtime AI guidance",
  },
];

export function Stats() {
  return (
    <section className="relative bg-[#F0C020] border-b-4 border-[#121212] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b-4 border-[#121212]">
          <div>
            <div className="inline-block bg-[#121212] text-white px-3 py-1 text-xs font-black uppercase tracking-widest mb-3">
              QUANTITATIVE PROOF
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212] leading-[0.95]">
              METRICS OF <br />
              <span className="bg-white px-3 py-0.5 border-4 border-[#121212] inline-block mt-1 shadow-[4px_4px_0px_0px_#121212]">
                ARCHITECTURAL IMPACT.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm sm:text-base font-bold text-[#121212] leading-relaxed">
            Every feature is mathematically calibrated to reduce uncertainty and accelerate career
            mastery.
          </p>
        </div>

        {/* 4-Column Bauhaus Geometric Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className="bg-white border-4 border-[#121212] p-6 shadow-[8px_8px_0px_0px_#121212] flex flex-col justify-between hover:-translate-y-1 transition-transform"
            >
              {/* Geometric Header Shape */}
              <div className="flex items-center justify-between pb-4 border-b-2 border-[#121212]">
                <span className="font-mono text-xs font-black uppercase tracking-wider text-[#121212]">
                  0{idx + 1} // METRIC
                </span>
                {s.shape === "circle" && (
                  <span className="w-5 h-5 rounded-full bg-[#D02020] border-2 border-black" />
                )}
                {s.shape === "square" && (
                  <span className="w-5 h-5 rounded-none bg-[#1040C0] border-2 border-black" />
                )}
                {s.shape === "triangle" && (
                  <span className="w-5 h-5 clip-triangle bg-[#F0C020] border-2 border-black" />
                )}
                {s.shape === "rot-square" && (
                  <span className="w-4 h-4 rounded-none bg-[#121212] rotate-45 border border-black" />
                )}
              </div>

              {/* Bold Primary Metric */}
              <div className="my-6">
                <div className="font-display font-black text-5xl sm:text-6xl text-[#121212] tracking-tighter">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="font-black text-sm uppercase tracking-wider text-[#D02020] mt-2">
                  {s.label}
                </div>
              </div>

              {/* Footer Note */}
              <div className="pt-4 border-t-2 border-[#121212] text-xs font-medium text-[#4A4A4A]">
                {s.note}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
