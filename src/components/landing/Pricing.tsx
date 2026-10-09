import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

const tiers = [
  {
    name: "FOUNDATION",
    price: "$0",
    desc: "Essential exploration modules",
    features: [
      "AI career diagnostic quiz",
      "5 mentor messages / day",
      "Core engineering roadmaps",
      "1 resume ATS audit / month",
    ],
    cta: "Start Free",
    featured: false,
    color: "bg-white",
  },
  {
    name: "ENGINEER PRO",
    price: "$9",
    desc: "For rigorous career acceleration",
    features: [
      "Unlimited AI mentor feedback",
      "Resume ATS deep scoring & rewrites",
      "Mock interviews (tech & HR drills)",
      "ScholarSync IT deep dive modules",
      "Skill prerequisite tracking",
    ],
    cta: "Go Pro",
    featured: true,
    color: "bg-[#F0C020]",
  },
  {
    name: "LEADERSHIP",
    price: "$19",
    desc: "For senior & staff career pivots",
    features: [
      "Everything in Engineer Pro",
      "Portfolio proof architecture review",
      "Internship & role priority feed",
      "Direct roadmap fork customization",
      "LinkedIn & GitHub profile audit",
    ],
    cta: "Go Premium",
    featured: false,
    color: "bg-white",
  },
];

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-[#F0F0F0]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#D02020] text-white border-2 border-[#121212] px-3.5 py-1 text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#121212] mb-4">
            TARIFFS · HONEST & TRANSPARENT
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212]">
            PREDICTABLE <span className="text-[#1040C0]">PRICING.</span>
          </h2>
          <p className="font-mono text-xs sm:text-sm text-[#4A4A4A] mt-3">
            Zero hidden recurring fees. Cancel anytime with a single click.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`border-4 border-[#121212] p-8 flex flex-col justify-between relative transition ${
                t.featured
                  ? "bg-[#F0C020] shadow-bauhaus-lg -translate-y-2"
                  : "bg-white shadow-bauhaus"
              }`}
            >
              {t.featured && (
                <div className="absolute -top-4 left-6 bg-[#D02020] text-white border-2 border-[#121212] text-[10px] font-mono font-black uppercase tracking-widest px-3 py-1 shadow-[2px_2px_0px_0px_#121212]">
                  ★ MOST POPULAR TIER
                </div>
              )}

              <div>
                <div className="font-mono text-xs font-black uppercase tracking-widest text-[#121212] mb-1">
                  {t.name}
                </div>
                <div className="text-xs font-medium text-[#4A4A4A] mb-6">{t.desc}</div>

                <div className="flex items-baseline gap-1 border-b-2 border-[#121212] pb-6 mb-6">
                  <span className="font-display font-black text-6xl text-[#121212]">{t.price}</span>
                  <span className="font-mono text-xs font-bold text-[#4A4A4A]">/ month</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {t.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-start gap-2.5 text-xs font-bold text-[#121212]"
                    >
                      <span className="w-4 h-4 bg-[#121212] text-white flex items-center justify-center shrink-0 border border-[#121212]">
                        <Check className="h-3 w-3 text-white" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                to="/signup"
                className={`w-full block text-center py-3.5 font-mono text-xs font-black uppercase border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] btn-press transition ${
                  t.featured
                    ? "bg-[#D02020] text-white hover:bg-[#D02020]/90"
                    : "bg-[#121212] text-white hover:bg-[#D02020]"
                }`}
              >
                {t.cta} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
