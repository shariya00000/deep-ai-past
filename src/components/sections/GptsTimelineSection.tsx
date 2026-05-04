import { useState } from "react";
import { Section } from "./Section";

const ENTRIES = [
  { name: "Domestication of plants", year: "c. 9000 BCE", numericYear: -9000, marker: "c. 9000 BC" },
  { name: "Water wheel", year: "1st c. BCE", numericYear: -50, marker: "1st c. BCE" },
  { name: "Printing press", year: "c. 1440", numericYear: 1440, marker: "1440s" },
  { name: "Steam engine", year: "c. 1760", numericYear: 1760, marker: "1769" },
  { name: "Electricity", year: "c. 1870", numericYear: 1870, marker: "c. 1880" },
  { name: "Internal combustion engine", year: "c. 1885", numericYear: 1885, marker: "1885" },
  { name: "The internet", year: "c. 1969", numericYear: 1969, marker: "1969" },
  { name: "Artificial intelligence", year: "c. 2020s", numericYear: 2025, marker: "TODAY" },
];

export function GptsTimelineSection() {
  return (
    <Section
      label="§ 02 / The 24 GPTs in History"
      heading="24 technologies, eleven thousand years."
      standfirst={
        <>
          Lipsey, Carlaw and Bekar count twenty-four general purpose
          technologies across the historical record. Below are the eight named
          explicitly in our analysis — from Neolithic agriculture to the
          machine-learning stack of the 2020s.
          <span className="mt-3 block not-italic font-sans text-sm text-[color:var(--ink-mute)]">
            The eight shown here are those most relevant to the state–private
            security argument developed in this project.
          </span>
        </>
      }
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
                        {e.marker}
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

      <GptExplainer />
    </Section>
  );
}

const PANELS = [
  {
    kicker: "Panel 01 / Definition",
    headline: "GPTs are rare technologies that reorganise the economy around themselves.",
    body: (
      <>
        General Purpose Technologies (GPTs) are the kinds of technological
        advancements that occasionally transform society's economic, social,
        and political structure (Lipsey, Carlaw and Bekar, 2005). They are
        characterized by their pervasiveness across sectors, their continuous
        scope for technical improvement, and their innovative complementarities
        that raise R&amp;D productivity in downstream industries (Bresnahan and
        Trajtenberg, 1995). Lipsey, Carlaw and Bekar (2005) identify
        twenty-four GPTs across history, among them the domestication of
        plants, the water wheel, the printing press, the steam engine,
        electricity, the internal combustion engine, the computer, and the
        internet. GPTs must reorganize the economy around themselves, not just
        adding to it. This makes them rare by essence and it's the reason why
        many economists treat them as the principal engines behind long-term
        growth.
      </>
    ),
    sources: "Lipsey, Carlaw & Bekar (2005); Bresnahan & Trajtenberg (1995).",
  },
  {
    kicker: "Panel 02 / Spin-off & Spin-on",
    headline: "Most twentieth-century GPTs were spin-offs from state procurement.",
    body: (
      <>
        When describing the origin and effects of technologies, particularly
        those developed following the rise of nation-states, and by extension
        the divide of public–private, the terms <em>spin-on</em> and{" "}
        <em>spin-off</em> appeared in the defense-innovation literature
        (Molas-Gallart, 1997; Ruttan, 2006). A spin-off, in this sense, is a
        technology developed under military or public-mission R&amp;D that
        later migrates to civilian use (i.e.: semiconductors, GPS, jet engines,
        the internet). A spin-on, on the other hand, is a commercially
        developed technology absorbed into defense. Most twentieth century
        GPTs are predominantly spin-offs. Ruttan identifies six whose
        development was decisively shaped by US military procurement:
        interchangeable parts, aircraft, nuclear energy, computers, the
        internet and space.
      </>
    ),
    sources: "Molas-Gallart (1997); Ruttan (2006).",
  },
  {
    kicker: "Panel 03 / AI as a GPT",
    headline: "AI is a GPT — and an invention of a method of invention.",
    body: (
      <>
        Artificial Intelligence (AI), specifically machine learning, and now
        foundation models, is widely regarded today as a GPT. It satisfies the
        three criteria and, according to Cockburn et al., it adds a feature
        none of its predecessors had. He describes it as an{" "}
        <em>invention of a method of invention</em> (IMI), raising productivity
        in the production of ideas themselves. Agrawal, Gans and Goldfarb
        (2018) frame the underlying mechanism as a fall in the cost of
        prediction, which pervades by that route rather than through a new
        power source or communications medium.
      </>
    ),
    sources: "Cockburn, Henderson & Stern (2018); Agrawal, Gans & Goldfarb (2018).",
  },
];

function GptExplainer() {
  const [i, setI] = useState(0);
  const panel = PANELS[i];
  return (
    <div className="mt-24 border-t border-[color:var(--rule)] pt-12">
      <div className="mb-6 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink-mute)]">
        <span>What is a GPT? · {i + 1} / {PANELS.length}</span>
        <div className="flex items-center gap-2">
          {PANELS.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              aria-label={`Go to panel ${idx + 1}`}
              className="h-1.5 w-6 transition-colors"
              style={{
                backgroundColor:
                  idx === i ? "var(--accent)" : "var(--rule)",
              }}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        <div className="col-span-12 md:col-span-8">
          <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent)]">
            {panel.kicker}
          </div>
          <h3 className="font-display text-2xl font-semibold leading-[1.15] tracking-[-0.01em] text-[color:var(--ink)] md:text-3xl">
            {panel.headline}
          </h3>
          <p className="prose-body mt-6 text-[1.0625rem] leading-[1.6]">
            {panel.body}
          </p>
        </div>
        <aside className="col-span-12 font-sans text-xs leading-[1.4] text-[color:var(--ink-mute)] md:col-span-3 md:col-start-10 md:border-l md:border-l-[color:var(--rule)]/20 md:pl-5">
          <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink)]">
            Sources
          </div>
          {panel.sources}
        </aside>
      </div>

      <div className="mt-10 flex items-center justify-between border-t border-[color:var(--rule)]/40 pt-5">
        <button
          onClick={() => setI((p) => Math.max(0, p - 1))}
          disabled={i === 0}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink)] transition-opacity disabled:opacity-30"
        >
          ← Previous
        </button>
        <button
          onClick={() => setI((p) => Math.min(PANELS.length - 1, p + 1))}
          disabled={i === PANELS.length - 1}
          className="font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--accent)] transition-opacity disabled:opacity-30"
        >
          {i === PANELS.length - 1 ? "End" : "Next →"}
        </button>
      </div>
    </div>
  );
}
