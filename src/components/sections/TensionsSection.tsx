import { useState } from "react";
import { Section } from "./Section";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface Case {
  dates: string;
  title: string;
  consequence: string;
  body: string;
}

const CASES: Case[] = [
  {
    dates: "17th–19th c.",
    title: "British & Dutch East India Companies",
    consequence: "The state creates a private actor and loses control of it.",
    body:
      "Placeholder body text. The chartered companies began as instruments of state mercantile policy and ended up wielding sovereign powers — raising armies, governing territories, and dictating foreign policy. Replace with full case description.",
  },
  {
    dates: "1850s–1945",
    title: "Krupp and the German Military State",
    consequence: "Mutual capture without meaningful accountability.",
    body:
      "Placeholder body text. Krupp and the Prussian-then-German state grew so entwined that neither could discipline the other; the firm shaped procurement while the state shielded the firm. Replace with full case description.",
  },
  {
    dates: "1870–1911",
    title: "Standard Oil and the United States Government",
    consequence:
      "The state tolerates a private monopoly until strategic dependency threatens security.",
    body:
      "Placeholder body text. For four decades Washington tolerated Standard Oil's vertical dominance; only when oil became a strategic commodity did antitrust become a national-security project. Replace with full case description.",
  },
  {
    dates: "1880s–1945",
    title: "Zaibatsu and Imperial Japan",
    consequence:
      "A private actor's commercial interests become the de facto driver of state grand strategy.",
    body:
      "Placeholder body text. The great industrial-financial combines of Meiji and Showa Japan did not merely serve imperial expansion — their resource needs increasingly defined what expansion was for. Replace with full case description.",
  },
];

export function TensionsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx === null ? null : CASES[openIdx];

  return (
    <Section
      heading="Historical examples of state-private company tensions"
      lead="Throughout history, state-private tensions have manifested in differing ways, leading to different consequences."
      containerClassName="max-w-[960px]"
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {CASES.map((c, i) => (
          <button
            key={c.title}
            type="button"
            onClick={() => setOpenIdx(i)}
            className="group flex flex-col gap-4 rounded-md border border-[color:var(--border)] bg-card p-7 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[color:var(--oxblood)]/50 hover:shadow-[0_10px_30px_-12px_rgba(60,20,15,0.25)] focus:outline-none focus:ring-2 focus:ring-[color:var(--oxblood)]/40"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--oxblood)]">
              {c.dates}
            </div>
            <h3 className="font-display text-2xl leading-tight text-[color:var(--ink)]">
              {c.title}
            </h3>
            <p className="text-sm leading-relaxed text-[color:var(--ink)]/70">
              {c.consequence}
            </p>
            <span className="mt-auto pt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--ink)]/40 transition-colors group-hover:text-[color:var(--oxblood)]">
              read more →
            </span>
          </button>
        ))}
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-2xl border-[color:var(--border)] bg-[color:var(--cream)]">
          {active && (
            <>
              <DialogHeader>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--oxblood)]">
                  {active.dates}
                </div>
                <DialogTitle className="font-display text-3xl leading-tight text-[color:var(--ink)]">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="text-base italic text-[color:var(--ink)]/70">
                  {active.consequence}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-2 text-base leading-relaxed text-[color:var(--ink)]/85">
                {active.body}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
