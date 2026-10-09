const items = [
  {
    quote:
      "I went from confused fresher to landing my first frontend role in 4 months. The roadmap was pure architectural clarity.",
    name: "Aarav Mehta",
    role: "Frontend Developer @ Razorpay",
    accent: "border-[#D02020]",
    badge: "bg-[#D02020]",
    number: "01",
  },
  {
    quote:
      "The AI mock interview drills destroyed my anxiety. I aced 3 technical internship rounds back to back.",
    name: "Sara Kim",
    role: "ML Intern @ Cohere",
    accent: "border-[#1040C0]",
    badge: "bg-[#1040C0]",
    number: "02",
  },
  {
    quote:
      "Finally a career platform that doesn't feel like a corporate course catalog. It feels like an engineered blueprint for modern builders.",
    name: "Diego Alvarez",
    role: "CS Senior, NYU",
    accent: "border-[#F0C020]",
    badge: "bg-[#F0C020]",
    number: "03",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#F0C020] text-[#121212] border-2 border-[#121212] px-3.5 py-1 text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#121212] mb-4">
            EVIDENCE · VERIFIED OUTCOMES
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212]">
            TESTED BY <span className="text-[#D02020]">ENGINEERS.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((t) => (
            <div
              key={t.name}
              className="bg-[#F0F0F0] border-4 border-[#121212] shadow-bauhaus p-8 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 border-b-2 border-[#121212] pb-3">
                  <span className="font-mono text-xs font-black uppercase text-[#121212]">
                    FIELD REPORT {t.number}
                  </span>
                  <div className="flex gap-1 text-[#D02020] font-black text-xs">★★★★★</div>
                </div>

                <p className="text-sm font-medium text-[#121212] leading-relaxed mb-6 border-l-3 border-[#121212] pl-3">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t-2 border-[#121212] bg-white p-3 border-2 border-[#121212]">
                <div className="font-display font-black text-base uppercase text-[#121212]">
                  {t.name}
                </div>
                <div className="font-mono text-xs text-[#4A4A4A] font-bold mt-0.5">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
