import { useState } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";

const ENTRIES = [
  { name: "Domestication of plants", year: "c. 9000 BCE" },
  { name: "Water wheel", year: "1st c. BCE" },
  { name: "Printing press", year: "c. 1440" },
  { name: "Steam engine", year: "c. 1760" },
  { name: "Electricity", year: "c. 1870" },
  { name: "Internal combustion engine", year: "c. 1885" },
  { name: "The internet", year: "c. 1969" },
  { name: "Artificial intelligence", year: "c. 2020s" },
];

// Era gradient: cream → tan → oxblood
const GRADIENT = [
  { bg: "oklch(0.96 0.022 80)", fg: "var(--ink)" },
  { bg: "oklch(0.92 0.035 75)", fg: "var(--ink)" },
  { bg: "oklch(0.86 0.05 65)", fg: "var(--ink)" },
  { bg: "oklch(0.78 0.07 55)", fg: "var(--ink)" },
  { bg: "oklch(0.66 0.1 40)", fg: "var(--cream)" },
  { bg: "oklch(0.54 0.13 32)", fg: "var(--cream)" },
  { bg: "oklch(0.42 0.14 28)", fg: "var(--cream)" },
  { bg: "oklch(0.3 0.12 25)", fg: "var(--cream)" },
];

export function GptsTimelineSection() {
  const [open, setOpen] = useState(false);

  return (
    <Section
      label="§ 02 — The 24 GPTs in History"
      heading={<span className="sr-only">The 24 GPTs in History</span>}
      lead="Lipsey, Carlaw and Bekar count twenty-four across the full historical record. Below are the eight named explicitly in our analysis, from Neolithic agriculture to the machine-learning stack of the 2020s. The pattern worth noticing: each GPT is separated by decades or centuries, and in the twentieth century most of them emerged from — or were decisively shaped by — state procurement."
      containerClassName="max-w-[1100px]"
    >
      {!open ? (
        <div className="flex flex-col items-center pt-4">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Explore the timeline"
            className="group relative h-[220px] w-[260px] focus:outline-none"
          >
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-md border border-[color:var(--border)] bg-card shadow-[0_2px_10px_-4px_rgba(60,20,15,0.18)] transition-transform duration-500"
                style={{
                  transform: `translate(${i * 6}px, ${i * -4}px) rotate(${
                    (i - 1.5) * 1.6
                  }deg)`,
                  zIndex: 10 - i,
                  background:
                    i === 0
                      ? "linear-gradient(160deg, var(--cream) 0%, var(--cream-deep) 100%)"
                      : undefined,
                }}
              >
                {i === 0 && (
                  <div className="flex h-full flex-col justify-between p-5 text-left">
                    <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--oxblood)]">
                      8 entries
                    </div>
                    <div>
                      <div className="font-display text-2xl leading-tight text-[color:var(--ink)]">
                        The timeline
                      </div>
                      <div className="mt-2 text-sm text-[color:var(--ink)]/60">
                        9000 BCE — 2020s
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </button>
          <div className="mt-8 text-[11px] uppercase tracking-[0.2em] text-[color:var(--oxblood)] italic font-sans">
            click to explore the timeline →
          </div>
        </div>
      ) : (
        <div className="-mx-6 md:-mx-12">
          <div
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-6 pt-2 md:px-12"
            style={{ scrollbarWidth: "thin" }}
          >
            {ENTRIES.map((entry, i) => {
              const c = GRADIENT[i];
              return (
                <article
                  key={entry.name}
                  className={cn(
                    "relative flex aspect-[3/4] w-[230px] shrink-0 snap-start flex-col justify-between rounded-md border border-[color:var(--border)]/40 p-5 shadow-[0_4px_18px_-8px_rgba(60,20,15,0.25)]",
                  )}
                  style={{
                    backgroundColor: c.bg,
                    color: c.fg,
                    animation: `pop-in 0.55s cubic-bezier(0.22,1,0.36,1) ${
                      i * 70
                    }ms both`,
                  }}
                >
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] opacity-70">
                    № {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <h3
                      className="font-display text-2xl leading-[1.05]"
                      style={{ color: c.fg }}
                    >
                      {entry.name}
                    </h3>
                    <span
                      className="mt-4 inline-block rounded-full border px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em]"
                      style={{
                        borderColor:
                          c.fg === "var(--cream)"
                            ? "rgba(245,239,227,0.4)"
                            : "rgba(107,27,27,0.35)",
                      }}
                    >
                      {entry.year}
                    </span>
                  </div>
                </article>
              );
            })}
            <div className="w-2 shrink-0" aria-hidden />
          </div>
          <div className="mt-4 px-6 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-[color:var(--ink)]/40 md:px-12">
            scroll →
          </div>
        </div>
      )}
    </Section>
  );
}
