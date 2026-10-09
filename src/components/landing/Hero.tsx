import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Send } from "lucide-react";
import { useState } from "react";
import { FloatingParticles } from "@/components/Aurora";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b-4 border-[#121212]">
      <FloatingParticles count={10} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* LEFT: Constructivist Typographic Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Bauhaus Eyebrow Tag */}
            <div className="inline-flex items-center gap-2 bg-[#F0C020] text-[#121212] border-2 border-[#121212] px-3.5 py-1 text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_#121212] w-fit mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#D02020] border border-[#121212]" />
              BAUHAUS EDITION · ISSUE 01
            </div>

            {/* Massive Display Typography */}
            <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl leading-[0.9] tracking-tighter uppercase text-[#121212]">
              FORM <span className="text-[#D02020]">FOLLOWS</span> <br />
              <span className="inline-block bg-[#1040C0] text-white px-3 py-1 mt-2 border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212]">
                FUNCTION.
              </span>
              <br />
              YOUR CAREER <br />
              <span className="text-[#D02020]">REENGINEERED.</span>
            </h1>

            {/* Architectural Subtitle */}
            <p className="mt-8 text-base sm:text-lg font-medium text-[#121212] max-w-xl leading-relaxed border-l-4 border-[#D02020] pl-4">
              CareerNova deconstructs career planning into pure architectural clarity. Get tailored
              roadmaps, real-time mentor feedback, and live opportunity feeds without corporate
              fluff.
            </p>

            {/* Primary & Secondary Bauhaus Action Buttons */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/signup"
                className="bg-[#D02020] text-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] px-8 py-4 text-sm font-black uppercase tracking-wider btn-press hover:bg-[#D02020]/90 transition inline-flex items-center gap-3"
              >
                START YOUR ROADMAP
                <ArrowRight className="h-5 w-5" />
              </Link>

              <a
                href="#features"
                className="bg-white text-[#121212] border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] px-7 py-4 text-sm font-black uppercase tracking-wider btn-press hover:bg-[#F0F0F0] transition inline-flex items-center gap-2"
              >
                EXPLORE MODULES
              </a>
            </div>

            {/* Bauhaus Tri-Metric Bar */}
            <div className="mt-14 pt-8 border-t-4 border-[#121212] grid grid-cols-3 gap-4">
              <div>
                <div className="font-display font-black text-3xl sm:text-4xl text-[#121212]">
                  500+
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#4A4A4A] mt-1">
                  CURATED PATHS
                </div>
              </div>
              <div className="border-l-2 border-[#121212] pl-4">
                <div className="font-display font-black text-3xl sm:text-4xl text-[#1040C0]">
                  100%
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#4A4A4A] mt-1">
                  FREE ACCESS
                </div>
              </div>
              <div className="border-l-2 border-[#121212] pl-4">
                <div className="font-display font-black text-3xl sm:text-4xl text-[#D02020]">
                  24/7
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-[#4A4A4A] mt-1">
                  AI MENTOR
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Color Blocked Constructivist Panel in Bauhaus Blue */}
          <div className="lg:col-span-5 relative bg-[#1040C0] border-4 border-[#121212] shadow-[10px_10px_0px_0px_#121212] p-6 md:p-8 flex flex-col justify-between overflow-hidden">
            {/* Background geometric overlay decorations */}
            <div className="absolute top-4 right-4 w-28 h-28 rounded-full bg-[#D02020] border-4 border-[#121212] shadow-[4px_4px_0px_0px_#121212] opacity-90 pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-36 h-36 rounded-none bg-[#F0C020] border-4 border-[#121212] rotate-45 opacity-85 pointer-events-none" />

            {/* Panel Header */}
            <div className="relative z-10 flex items-center justify-between pb-4 border-b-4 border-[#121212] bg-white px-4 py-2.5 shadow-[4px_4px_0px_0px_#121212]">
              <div className="flex items-center gap-2">
                <span className="w-3.5 h-3.5 rounded-full bg-[#D02020] border-2 border-black" />
                <span className="w-3.5 h-3.5 rounded-none bg-[#F0C020] border-2 border-black" />
                <span className="w-3.5 h-3.5 clip-triangle bg-[#1040C0] border-2 border-black" />
                <span className="font-black text-xs uppercase tracking-widest ml-1 text-[#121212]">
                  TERMINAL // NOVA 01
                </span>
              </div>
              <span className="text-[10px] font-black uppercase px-2 py-0.5 bg-[#F0C020] border border-black">
                ACTIVE
              </span>
            </div>

            {/* Interactive Mentor Preview Card inside Blue Field */}
            <div className="relative z-10 my-8">
              <InteractiveMentorPreview />
            </div>

            {/* Panel Bottom Graphic Banner */}
            <div className="relative z-10 bg-[#F0C020] text-[#121212] border-4 border-[#121212] p-4 shadow-[4px_4px_0px_0px_#121212]">
              <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider">
                <span>SYSTEM ARCHITECTURE</span>
                <span className="bg-[#121212] text-white px-2 py-0.5">V1.0</span>
              </div>
              <p className="mt-2 text-xs font-bold text-[#121212] leading-snug">
                "Simplicity is not the lack of clutter, but the mastery of essential structure."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InteractiveMentorPreview() {
  const [inputVal, setInputVal] = useState("");
  const [messages, setMessages] = useState([
    {
      sender: "nova",
      text: "Welcome to CareerNova. Which industry or discipline are you aiming to master?",
      color: "#FFFFFF",
    },
    {
      sender: "user",
      text: "I want to transition from student to modern Frontend / Full Stack developer.",
      color: "#FFF9C4",
    },
    {
      sender: "nova",
      text: "Architecture blueprint ready: 1. TypeScript & React 19 fundamentals. 2. Build 3 production proof-of-work systems. 3. Deploy full-stack apps with automated CI/CD.",
      color: "#FFFFFF",
    },
  ]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputVal.trim()) return;
    const newMsg = { sender: "user", text: inputVal.trim(), color: "#FFF9C4" };
    setMessages((prev) => [
      ...prev,
      newMsg,
      {
        sender: "nova",
        text: `Target mapped for: "${inputVal.trim()}". Check your personalized 90-day milestone checklist in the dashboard!`,
        color: "#FFFFFF",
      },
    ]);
    setInputVal("");
  };

  return (
    <div className="bg-white border-4 border-[#121212] shadow-[6px_6px_0px_0px_#121212] p-4 space-y-3">
      <div className="space-y-2.5 max-h-64 overflow-y-auto pr-1">
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={`p-3 border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212] text-xs font-medium leading-relaxed ${
              m.sender === "user"
                ? "bg-[#FFF9C4] ml-4 text-[#121212]"
                : "bg-white mr-4 text-[#121212]"
            }`}
          >
            <div className="flex items-center gap-1.5 font-black uppercase text-[10px] mb-1 tracking-wider">
              {m.sender === "nova" ? (
                <>
                  <span className="w-2 h-2 rounded-full bg-[#D02020]" />
                  NOVA MENTOR
                </>
              ) : (
                <>
                  <span className="w-2 h-2 rounded-none bg-[#1040C0]" />
                  EXPLORER
                </>
              )}
            </div>
            {m.text}
          </div>
        ))}
      </div>

      <form onSubmit={handleSend} className="pt-2 flex gap-2">
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Ask Nova anything about your path..."
          className="flex-1 bg-[#F0F0F0] border-2 border-[#121212] px-3 py-2 text-xs font-bold text-[#121212] placeholder:text-[#4A4A4A] focus:outline-none focus:bg-white"
        />
        <button
          type="submit"
          className="bg-[#D02020] text-white border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] px-3.5 py-2 btn-press hover:bg-[#D02020]/90 transition"
          aria-label="Send"
        >
          <Send className="h-3.5 w-3.5" />
        </button>
      </form>
    </div>
  );
}
