import { Link } from "@tanstack/react-router";
import {
  Code2,
  Brain,
  ShieldCheck,
  Palette,
  Gamepad2,
  Cloud,
  BarChart3,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const careers = [
  {
    icon: Code2,
    title: "Web Development",
    tag: "Full-Stack & React",
    color: "bg-[#D02020]",
    text: "text-white",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    tag: "RAG & Foundation Models",
    color: "bg-[#1040C0]",
    text: "text-white",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity",
    tag: "Defensive & Incident Response",
    color: "bg-[#121212]",
    text: "text-white",
  },
  {
    icon: Palette,
    title: "UI / UX Design",
    tag: "Constructivist Systems",
    color: "bg-[#F0C020]",
    text: "text-[#121212]",
  },
  {
    icon: Gamepad2,
    title: "Game Development",
    tag: "3D Physics & Engines",
    color: "bg-[#D02020]",
    text: "text-white",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    tag: "AWS, Azure & Terraform",
    color: "bg-[#1040C0]",
    text: "text-white",
  },
  {
    icon: BarChart3,
    title: "Data Science",
    tag: "Statistical Mining & Python",
    color: "bg-[#F0C020]",
    text: "text-[#121212]",
  },
  {
    icon: Megaphone,
    title: "DevOps & Platform",
    tag: "CI/CD & Kubernetes",
    color: "bg-[#121212]",
    text: "text-white",
  },
];

export function Careers() {
  return (
    <section
      id="careers"
      className="relative py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 border-b-4 border-[#121212] pb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-[#F0C020] text-[#121212] border-2 border-[#121212] px-3.5 py-1 text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#121212] mb-4">
              INDEX 02 · SPECIALIZATIONS
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212]">
              CORE CAREER <span className="text-[#D02020]">ORBITS.</span>
            </h2>
          </div>
          <p className="font-mono text-xs sm:text-sm font-bold text-[#4A4A4A] max-w-md">
            Explore vetted high-growth tracks engineered for modern software builders and engineers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {careers.map((c, i) => (
            <Link
              key={c.title}
              to="/tech"
              className="group bg-[#F0F0F0] border-4 border-[#121212] shadow-bauhaus p-6 flex flex-col justify-between hover:-translate-y-1 hover:shadow-bauhaus-lg transition cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`${c.color} ${c.text} border-2 border-[#121212] p-3 shadow-[2px_2px_0px_0px_#121212]`}
                  >
                    <c.icon className="h-6 w-6" />
                  </div>
                  <span className="font-mono text-xs font-black text-[#121212]">0{i + 1}</span>
                </div>
                <h3 className="font-display font-black text-xl uppercase tracking-tight text-[#121212] group-hover:text-[#D02020] transition">
                  {c.title}
                </h3>
                <p className="font-mono text-xs text-[#4A4A4A] font-bold mt-1.5">{c.tag}</p>
              </div>

              <div className="mt-6 pt-3 border-t-2 border-[#121212] flex items-center justify-between text-xs font-mono font-black uppercase text-[#121212] group-hover:text-[#D02020]">
                <span>VIEW ROADMAP</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
