import { createFileRoute } from "@tanstack/react-router";
import { TechSectorHub } from "@/components/tech/TechSectorHub";

export const Route = createFileRoute("/dashboard/tech")({
  component: DashboardTechPage,
});

function DashboardTechPage() {
  return (
    <div className="space-y-6">
      <div className="border-4 border-[#121212] bg-white p-6 shadow-bauhaus">
        <div className="inline-flex items-center gap-2 bg-[#D02020] text-white border-2 border-[#121212] px-3 py-0.5 text-xs font-mono font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#121212] mb-2">
          SCHOLARSYNC IT INTEGRATION
        </div>
        <h1 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[#121212]">
          TECH & IT SECTOR HUB
        </h1>
        <p className="font-mono text-xs sm:text-sm text-[#4A4A4A] mt-2 max-w-2xl">
          Engineered roadmaps, compensation benchmarks, real-world daily engineering logs, and
          project deliverables for high-demand IT careers.
        </p>
      </div>

      <TechSectorHub />
    </div>
  );
}
