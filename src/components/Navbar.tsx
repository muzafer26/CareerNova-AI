import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { LogOut, Menu, X } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { signOut } from "@/lib/auth";

/**
 * Bauhaus Top Bar:
 * Distinctive constructivist header with 4px stark black bottom border,
 * geometric primary triad emblem (circle, square, triangle),
 * clean uppercase tracking-wider navigation links, and tactile hard-shadow CTAs.
 */
export function Navbar() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);

  const links = [
    { href: "/tech", label: "Tech Sector (IT)", isSpecial: true },
    { href: "/#features", label: "Features" },
    { href: "/#careers", label: "Careers" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/dashboard", label: "Roadmaps" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F0F0F0] border-b-4 border-[#121212]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Bauhaus Brand Identity (Circle, Square, Triangle Logo) */}
        <Link to="/" className="flex items-center gap-3 shrink-0 group">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            {/* Red Circle */}
            <span className="w-5 h-5 rounded-full bg-[#D02020] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] group-hover:-translate-y-0.5 transition-transform" />
            {/* Blue Square */}
            <span className="w-5 h-5 rounded-none bg-[#1040C0] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] group-hover:-translate-y-0.5 transition-transform" />
            {/* Yellow Triangle */}
            <span className="w-5 h-5 clip-triangle bg-[#F0C020] border-2 border-[#121212] shadow-[2px_2px_0px_0px_#121212] group-hover:-translate-y-0.5 transition-transform" />
          </div>
          <span className="font-display font-black text-xl tracking-tighter uppercase text-[#121212]">
            CAREERNOVA
          </span>
        </Link>

        {/* Zone 2: 4–5 single-line clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-bold uppercase tracking-wider text-[#121212]">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`relative py-1 transition-colors whitespace-nowrap shrink-0 group ${
                l.isSpecial
                  ? "bg-[#D02020] text-white border-2 border-[#121212] px-2.5 py-1 text-xs font-black shadow-[2px_2px_0px_0px_#121212] hover:bg-[#D02020]/90 btn-press"
                  : "hover:text-[#D02020]"
              }`}
            >
              <span>{l.label}</span>
              {!l.isSpecial && (
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-[#D02020] group-hover:w-full transition-all duration-200" />
              )}
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="hidden md:flex items-center gap-3 shrink-0">
          {user ? (
            <>
              <button
                onClick={() => navigate({ to: "/dashboard" })}
                className="bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] px-5 py-2.5 text-xs font-black uppercase tracking-wider btn-press hover:bg-[#F0C020]/90 transition"
              >
                Dashboard
              </button>
              <button
                onClick={async () => {
                  await signOut();
                  navigate({ to: "/" });
                }}
                className="bg-white text-[#121212] border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] p-2.5 btn-press hover:bg-[#E0E0E0] transition"
                aria-label="Sign out"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="bg-white text-[#121212] border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] px-5 py-2.5 text-xs font-black uppercase tracking-wider btn-press hover:bg-[#E0E0E0] transition whitespace-nowrap"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                className="bg-[#D02020] text-white border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] px-6 py-2.5 text-xs font-black uppercase tracking-wider btn-press hover:bg-[#D02020]/90 transition whitespace-nowrap"
              >
                Get Started
              </Link>
            </>
          )}
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden bg-white text-[#121212] border-2 border-[#121212] p-2 shadow-[3px_3px_0px_0px_#121212] btn-press"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden border-t-4 border-[#121212] bg-[#F0F0F0] px-6 py-6 space-y-4">
          <nav className="flex flex-col gap-3 font-bold uppercase tracking-wider">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                className="py-2 text-[#121212] hover:text-[#D02020] border-b-2 border-black/10"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="pt-4 flex flex-col gap-3">
            {user ? (
              <>
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    navigate({ to: "/dashboard" });
                  }}
                  className="w-full bg-[#F0C020] text-[#121212] border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] py-3 text-xs font-black uppercase tracking-wider text-center"
                >
                  Dashboard
                </button>
                <button
                  onClick={async () => {
                    setMobileOpen(false);
                    await signOut();
                    navigate({ to: "/" });
                  }}
                  className="w-full bg-white text-[#121212] border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] py-2.5 text-xs font-black uppercase tracking-wider text-center flex items-center justify-center gap-2"
                >
                  <LogOut className="h-4 w-4" /> Sign Out
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileOpen(false)}
                  className="w-full bg-white text-[#121212] border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] py-3 text-xs font-black uppercase tracking-wider text-center"
                >
                  Sign In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="w-full bg-[#D02020] text-white border-2 border-[#121212] shadow-[4px_4px_0px_0px_#121212] py-3 text-xs font-black uppercase tracking-wider text-center"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
