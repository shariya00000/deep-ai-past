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
  /** Full writeup. Each string renders as a separate paragraph. */
  body: string[];
}

const CASES: Case[] = [
  {
    dates: "17th–19th c.",
    title: "British & Dutch East India Companies",
    consequence: "The state creates a private actor and loses control of it.",
    body: [
      // TODO: Replace with full writeup. Each array entry is one paragraph.
      "TODO — write the full case study for the British & Dutch East India Companies here. The chartered companies began as instruments of state mercantile policy and ended up wielding sovereign powers — raising armies, governing territories, and dictating foreign policy.",
      "TODO — second paragraph. Add as many paragraphs as you like by appending strings to this array.",
    ],
  },
  {
    dates: "1850s–1945",
    title: "Krupp and the German Military State",
    consequence: "Mutual capture without meaningful accountability.",
    body: [
      // TODO: Replace with full writeup.
      "TODO — write the full case study for Krupp and the German military state here. Krupp and the Prussian-then-German state grew so entwined that neither could discipline the other; the firm shaped procurement while the state shielded the firm.",
      "TODO — second paragraph.",
    ],
  },
  {
    dates: "1870–1911",
    title: "Standard Oil and the United States Government",
    consequence:
      "The state tolerates a private monopoly until strategic dependency threatens security.",
    body: [
      // TODO: Replace with full writeup.
      "TODO — write the full case study for Standard Oil and the United States here. For four decades Washington tolerated Standard Oil's vertical dominance; only when oil became a strategic commodity did antitrust become a national-security project.",
      "TODO — second paragraph.",
    ],
  },
  {
    dates: "1880s–1945",
    title: "Zaibatsu and Imperial Japan",
    consequence:
      "A private actor's commercial interests become the de facto driver of state grand strategy.",
    body: [
      // TODO: Replace with full writeup.
      "TODO — write the full case study for the Zaibatsu and Imperial Japan here. The great industrial-financial combines of Meiji and Showa Japan did not merely serve imperial expansion — their resource needs increasingly defined what expansion was for.",
      "TODO — second paragraph.",
    ],
  },
];

export function TensionsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const active = openIdx === null ? null : CASES[openIdx];

  return (
    <Section
      label="§ 03 / Historical precedents"
      heading="State and private power: four case files."
      standfirst="Throughout history, state-private tensions have manifested in differing ways, leading to different consequences. Four files, four different failure modes."
      fullBleed
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {CASES.map((c, i) => (
          <button
            key={c.title}
            type="button"
            onClick={() => setOpenIdx(i)}
            className="group relative flex flex-col gap-5 border border-[color:var(--rule)] bg-[color:var(--paper-2)] p-8 text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-[color:var(--accent)] focus:outline-none focus:border-[color:var(--accent)] md:p-10"
          >
            <div className="flex items-baseline justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent)]">
                Case 0{i + 1} · {c.dates}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent)]">
                open file →
              </span>
            </div>
            <h3 className="text-2xl leading-[1.1] tracking-[-0.02em] text-[color:var(--ink)] md:text-3xl font-medium">
              {c.title}
            </h3>
            <p className="font-serif text-base italic leading-snug text-[color:var(--ink-2)]">
              {c.consequence}
            </p>
          </button>
        ))}
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent className="max-w-2xl rounded-none border border-[color:var(--rule)] bg-[color:var(--paper-2)] p-0">
          {active && (
            <div className="p-8 md:p-10">
              <div className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent)]">
                <span>§ 03 / Case 0{(openIdx ?? 0) + 1}</span>
                <span className="h-px flex-1 bg-[color:var(--rule)] opacity-40" />
                <span className="text-[color:var(--ink-mute)]">{active.dates}</span>
              </div>
              <DialogHeader className="space-y-3 text-left">
                <DialogTitle className="text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-[color:var(--ink)]">
                  {active.title}
                </DialogTitle>
                <DialogDescription className="font-serif text-base italic leading-snug text-[color:var(--ink-2)]">
                  {active.consequence}
                </DialogDescription>
              </DialogHeader>
              <div className="has-dropcap mt-6">
                <p className="prose-body">{active.body}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
