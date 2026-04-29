import { Section } from "./Section";

const ENTRIES = [
  { name: "Domestication of plants", year: "c. 9000 BCE", numericYear: -9000 },
  { name: "Water wheel", year: "1st c. BCE", numericYear: -50 },
  { name: "Printing press", year: "c. 1440", numericYear: 1440 },
  { name: "Steam engine", year: "c. 1760", numericYear: 1760 },
  { name: "Electricity", year: "c. 1870", numericYear: 1870 },
  { name: "Internal combustion engine", year: "c. 1885", numericYear: 1885 },
  { name: "The internet", year: "c. 1969", numericYear: 1969 },
  { name: "Artificial intelligence", year: "c. 2020s", numericYear: 2025 },
];

export function GptsTimelineSection() {
  return (
    <Section
      label="§ 02 / The 24 GPTs in History"
      heading="Eight technologies, eleven thousand years."
      standfirst="Lipsey, Carlaw and Bekar count twenty-four general purpose technologies across the historical record. Below are the eight named explicitly in our analysis — from Neolithic agriculture to the machine-learning stack of the 2020s."
      fullBleed
    >
      <div className="grid grid-cols-12 gap-6">
        <p className="prose-body col-span-12 md:col-span-7">
          The pattern worth noticing is not the list itself but the gaps between
          entries. Each GPT is separated by decades or centuries, and in the
          twentieth century most of them emerged from — or were decisively
          shaped by — state procurement.
        </p>
        <aside className="col-span-12 font-sans text-xs leading-[1.4] text-[color:var(--ink-mute)] md:col-span-4 md:col-start-9 md:border-l md:border-l-[color:var(--rule)]/20 md:pl-5">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink)]">
            Source
          </div>
          Lipsey, R., Carlaw, K., &amp; Bekar, C. (2005). <em>Economic
          Transformations: General Purpose Technologies and Long-Term Economic
          Growth.</em> Oxford University Press.
        </aside>
      </div>

      {/* Timeline strip */}
      <div className="mt-16">
        <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-mute)]">
          <span>Timeline · 9000 BCE — 2020s</span>
          <span className="hidden md:inline">scroll →</span>
        </div>

        <div className="-mx-6 overflow-x-auto md:-mx-0">
          <div className="relative min-w-[980px] px-6 pb-2 md:px-0">
            {/* Axis */}
            <div className="relative h-px bg-[color:var(--rule)]" />

            {/* Ticks + labels */}
            <div className="grid grid-cols-8">
              {ENTRIES.map((e, i) => {
                const isAI = i === ENTRIES.length - 1;
                return (
                  <div
                    key={e.name}
                    className="relative flex flex-col items-start pt-0"
                  >
                    {/* Tick */}
                    <div
                      className="absolute left-0 top-[-1px] h-3 w-px"
                      style={{
                        backgroundColor: isAI
                          ? "var(--accent)"
                          : "var(--rule)",
                        height: isAI ? "16px" : "10px",
                      }}
                    />
                    {/* Year above axis - move via negative margin */}
                    <div
                      className="absolute left-0 top-[-26px] font-mono text-[10px] uppercase tracking-[0.12em]"
                      style={{
                        color: isAI ? "var(--accent)" : "var(--ink-mute)",
                      }}
                    >
                      {e.year}
                    </div>
                    {/* Label below */}
                    <div className="mt-5 max-w-[120px] pr-4">
                      <div
                        className="text-sm font-medium leading-tight"
                        style={{
                          color: isAI ? "var(--accent)" : "var(--ink)",
                        }}
                      >
                        {e.name}
                      </div>
                      <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[color:var(--ink-mute)]">
                        № {String(i + 1).padStart(2, "0")}
                        {isAI && (
                          <span className="ml-2 text-[color:var(--accent)]">
                            ◼ here
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
