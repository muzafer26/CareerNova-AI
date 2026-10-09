import { Sparkles, Bot, Send } from "lucide-react";
import { Link } from "@tanstack/react-router";

const messages = [
  { role: "user", content: "How do I transition from fresher to Frontend Engineer in 6 months?" },
  {
    role: "ai",
    content: `Engineered roadmap:\n\n1. Foundations (Weeks 1–4): Semantic HTML5, CSS Grid, Modern Tailwind\n2. Core Runtime (Weeks 5–10): Deep JavaScript ES6+, Event Loop, Async/Await\n3. Framework (Weeks 11–18): React 19, TypeScript generics, TanStack Router/Query\n4. Verified Deliverable: Deploy 2 production apps meeting Lighthouse 95+ scores\n\nCompensation: Entry ₹4–7 LPA | Global $60K–$75K`,
  },
];

export function ChatbotDemo() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-b-4 border-[#121212] bg-[#F0F0F0]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left Side */}
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 bg-[#1040C0] text-white border-2 border-[#121212] px-3.5 py-1 text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#121212] mb-4">
            INTELLIGENCE · 24/7 MENTOR
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tighter text-[#121212] leading-[0.95]">
            ZERO FLUFF. <br />
            <span className="text-[#D02020]">ARCHITECTURAL</span> ADVICE.
          </h2>
          <p className="font-medium text-sm sm:text-base text-[#121212] mt-6 leading-relaxed border-l-4 border-[#1040C0] pl-4">
            Ask complex engineering questions. Receive structured plans, vetted free tutorial paths,
            and compensation benchmarks in seconds.
          </p>

          <div className="mt-8">
            <Link
              to="/dashboard/mentor"
              className="bg-[#D02020] text-white border-4 border-[#121212] font-mono text-xs font-black uppercase px-6 py-4 shadow-bauhaus hover:bg-[#D02020]/90 btn-press inline-flex items-center gap-2"
            >
              <span>LAUNCH AI MENTOR WORKSPACE</span>
              <span>→</span>
            </Link>
          </div>
        </div>

        {/* Right Side: Simulated Bauhaus Terminal */}
        <div className="lg:col-span-7 bg-white border-4 border-[#121212] shadow-bauhaus-lg">
          {/* Header */}
          <div className="bg-[#121212] text-white px-4 py-3 flex items-center justify-between border-b-4 border-[#121212]">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#D02020] border border-white" />
              <span className="w-3 h-3 bg-[#1040C0] border border-white" />
              <span className="w-3 h-3 clip-triangle bg-[#F0C020] border border-white" />
              <span className="font-mono text-xs font-black uppercase tracking-widest text-[#F0C020] ml-2">
                TERMINAL // CAREERNOVA AI ENGINE
              </span>
            </div>
            <span className="font-mono text-[10px] text-white/70">STATUS: READY</span>
          </div>

          {/* Messages */}
          <div className="p-6 space-y-4 font-mono text-xs">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`p-4 border-2 border-[#121212] ${
                  m.role === "user"
                    ? "bg-[#F0C020] text-[#121212] font-black shadow-[3px_3px_0px_0px_#121212] max-w-lg ml-auto"
                    : "bg-[#F0F0F0] text-[#121212] font-bold shadow-[3px_3px_0px_0px_#121212]"
                }`}
              >
                <div className="text-[10px] font-black uppercase tracking-widest text-[#4A4A4A] mb-1">
                  {m.role === "user" ? "USER PROMPT" : "MENTOR DIAGNOSTIC RESPONSE"}
                </div>
                <div className="whitespace-pre-line leading-relaxed">{m.content}</div>
              </div>
            ))}
          </div>

          {/* Input simulation */}
          <div className="p-4 border-t-4 border-[#121212] bg-[#F0F0F0] flex gap-2">
            <input
              type="text"
              readOnly
              value="What skills are required for an AI Engineer in 2026?"
              className="flex-1 bg-white border-2 border-[#121212] font-mono text-xs px-3 py-2 text-[#4A4A4A] focus:outline-none"
            />
            <Link
              to="/dashboard/mentor"
              className="bg-[#121212] text-white border-2 border-[#121212] px-4 py-2 font-mono text-xs font-black uppercase hover:bg-[#D02020] btn-press"
            >
              SEND →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
