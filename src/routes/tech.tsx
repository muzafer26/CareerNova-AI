import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/landing/Footer";
import { TechSectorHub } from "@/components/tech/TechSectorHub";

export const Route = createFileRoute("/tech")({
  component: TechSectorPage,
});

function TechSectorPage() {
  return (
    <div className="relative min-h-screen bg-[#F0F0F0] text-[#121212]">
      <Navbar />
      <main>
        <TechSectorHub />
      </main>
      <Footer />
    </div>
  );
}
