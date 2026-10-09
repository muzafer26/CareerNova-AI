import { createFileRoute, Link, Outlet, useNavigate, useRouterState } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  Brain,
  Sparkles,
  LogOut,
  Compass,
  Map,
  Menu,
  X,
  Briefcase,
  MessageSquare,
  FileText,
  BookOpen,
  Cpu,
} from "lucide-react";
import { useAuth } from "@/lib/auth";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/dashboard")({ component: DashboardLayout });

const navItems = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard, exact: true },
  { to: "/dashboard/tech", label: "Tech Sector (IT)", icon: Cpu, isSpecial: true },
  { to: "/dashboard/mentor", label: "AI Mentor", icon: MessageSquare },
  { to: "/dashboard/careers", label: "Career Library", icon: Compass },
  { to: "/dashboard/roadmaps", label: "Roadmaps", icon: Map },
  { to: "/dashboard/jobs", label: "Jobs & Internships", icon: Briefcase },
  { to: "/dashboard/resume", label: "Resume Analyzer", icon: FileText },
  { to: "/dashboard/resources", label: "Resources", icon: BookOpen },
  { to: "/dashboard/quiz", label: "AI Career Quiz", icon: Brain },
];

function DashboardLayout() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) navigate({ to: "/login" });
  }, [loading, user, navigate]);

  // Close drawer on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [path]);

  if (loading || !user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F0F0F0]">
        <div className="h-10 w-10 border-4 border-[#121212] border-t-[#D02020] animate-spin" />
      </div>
    );
  }

  const SidebarBody = () => (
    <div className="bg-white border-4 border-[#121212] shadow-bauhaus p-5 flex-1 flex flex-col h-full justify-between">
      <div>
        {/* Brand Header */}
        <Link
          to="/"
          className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-[#121212] group"
        >
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-4 h-4 rounded-full bg-[#D02020] border-2 border-[#121212]" />
            <span className="w-4 h-4 bg-[#1040C0] border-2 border-[#121212]" />
            <span className="w-4 h-4 clip-triangle bg-[#F0C020] border-2 border-[#121212]" />
          </div>
          <span className="font-display font-black text-lg tracking-tighter uppercase text-[#121212]">
            CAREERNOVA
          </span>
        </Link>

        <div className="text-[10px] font-mono font-black uppercase tracking-widest text-[#4A4A4A] mb-3 px-1">
          NAVIGATION WORKSPACE
        </div>

        <nav className="space-y-1.5">
          {navItems.map((it) => {
            const active = it.exact ? path === it.to : path.startsWith(it.to);
            return (
              <Link
                key={it.to}
                to={it.to}
                className={`relative flex items-center justify-between px-3 py-2 text-xs font-mono font-black uppercase border-2 transition ${
                  active
                    ? it.isSpecial
                      ? "bg-[#D02020] text-white border-[#121212] shadow-[3px_3px_0px_0px_#121212]"
                      : "bg-[#121212] text-white border-[#121212] shadow-[3px_3px_0px_0px_#D02020]"
                    : it.isSpecial
                      ? "bg-[#F0C020] text-[#121212] border-[#121212] hover:bg-[#F0C020]/90 shadow-[2px_2px_0px_0px_#121212]"
                      : "bg-[#F0F0F0] text-[#121212] border-transparent hover:border-[#121212] hover:bg-white"
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <it.icon
                    className={`h-4 w-4 ${active ? (it.isSpecial ? "text-[#F0C020]" : "text-white") : it.isSpecial ? "text-[#121212]" : "text-[#4A4A4A]"}`}
                  />
                  <span>{it.label}</span>
                </span>
                {it.isSpecial && !active && (
                  <span className="bg-[#D02020] text-white text-[9px] px-1 py-0.2 border border-[#121212]">
                    NEW
                  </span>
                )}
              </Link>
            );
          })}

          {/* Roadmap quick-link if on a roadmap page */}
          {path.startsWith("/dashboard/roadmap") && !path.endsWith("/roadmaps") && (
            <div className="relative flex items-center gap-2.5 px-3 py-2 text-xs font-mono font-black uppercase bg-[#1040C0] text-white border-2 border-[#121212] shadow-[3px_3px_0px_0px_#121212]">
              <Map className="h-4 w-4 text-[#F0C020]" />
              <span>ACTIVE ROADMAP</span>
            </div>
          )}
        </nav>
      </div>

      {/* User Section at bottom */}
      <div className="pt-4 border-t-2 border-[#121212] mt-6">
        <div className="text-[10px] font-mono font-black uppercase text-[#4A4A4A]">
          SIGNED IN AS:
        </div>
        <div className="font-mono text-xs font-bold truncate text-[#121212] mt-0.5">
          {user.email}
        </div>
        <button
          onClick={async () => {
            await supabase.auth.signOut();
            navigate({ to: "/" });
          }}
          className="mt-3 w-full flex items-center justify-center gap-2 bg-white text-[#121212] border-2 border-[#121212] py-2 text-xs font-mono font-black uppercase hover:bg-[#D02020] hover:text-white transition btn-press shadow-[2px_2px_0px_0px_#121212]"
        >
          <LogOut className="h-3.5 w-3.5" /> Sign out
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex bg-[#F0F0F0] text-[#121212]">
      {/* Desktop sidebar */}
      <aside className="hidden md:flex w-68 flex-col p-4 sticky top-0 h-screen shrink-0">
        <SidebarBody />
      </aside>

      {/* Mobile top bar */}
      <header className="md:hidden fixed top-0 inset-x-0 z-30 px-4 py-3 flex items-center justify-between bg-[#F0F0F0] border-b-4 border-[#121212]">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex items-center gap-1" aria-hidden="true">
            <span className="w-3.5 h-3.5 rounded-full bg-[#D02020] border border-[#121212]" />
            <span className="w-3.5 h-3.5 bg-[#1040C0] border border-[#121212]" />
            <span className="w-3.5 h-3.5 clip-triangle bg-[#F0C020] border border-[#121212]" />
          </div>
          <span className="font-display font-black text-base uppercase text-[#121212]">
            CAREERNOVA
          </span>
        </Link>
        <button
          onClick={() => setMobileOpen(true)}
          className="bg-white text-[#121212] border-2 border-[#121212] p-2 shadow-[2px_2px_0px_0px_#121212] btn-press"
          aria-label="Open menu"
        >
          <Menu className="h-4 w-4" />
        </button>
      </header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="md:hidden fixed inset-0 z-40 bg-[#121212]/80 backdrop-blur-xs"
            />
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="md:hidden fixed inset-y-0 left-0 z-50 w-72 p-3"
            >
              <div className="relative h-full">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="absolute top-4 right-4 z-10 bg-white border-2 border-[#121212] p-1.5 btn-press"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
                <SidebarBody />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 pt-20 md:pt-8 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
