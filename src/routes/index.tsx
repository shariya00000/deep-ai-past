import { createFileRoute } from "@tanstack/react-router";
import { IntroSection } from "@/components/sections/IntroSection";
import { GptsTimelineSection } from "@/components/sections/GptsTimelineSection";
import { ConvergenceInterstitial } from "@/components/sections/ConvergenceInterstitial";
import { TensionsSection } from "@/components/sections/TensionsSection";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="px-6 pt-10">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between font-mono text-[11px] uppercase tracking-[0.25em] text-[color:var(--oxblood)]">
          <span>Geopolitics of AI</span>
          <span className="text-[color:var(--ink)]/50">an essay · 2026</span>
        </div>
      </header>

      <h1 className="sr-only">Geopolitics of AI</h1>

      <IntroSection />
      <GptsTimelineSection />
      <ConvergenceInterstitial />
      <TensionsSection />

      <footer className="px-6 py-16">
        <div className="mx-auto max-w-[1100px] border-t border-[color:var(--border)] pt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--ink)]/40">
          More sections coming soon
        </div>
      </footer>
    </main>
  );
}
