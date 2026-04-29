export function IntroSection() {
  return (
    <section className="w-full px-6 pb-20 pt-12 md:pb-32 md:pt-20">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--accent)]">
          <span>§ 01 / Introduction</span>
          <span className="h-px flex-1 bg-[color:var(--rule)] opacity-40" />
          <span className="text-[color:var(--ink-mute)]">Essay · 2026</span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <h1 className="col-span-12 text-5xl font-semibold leading-[0.98] tracking-[-0.025em] text-[color:var(--ink)] md:col-span-10 md:text-7xl lg:text-[88px]">
            <span className="text-[color:var(--ink-mute)]/40 italic font-normal">
              [headline coming soon]
            </span>
          </h1>

          <p className="col-span-12 mt-2 font-serif text-xl italic leading-snug text-[color:var(--ink-2)] md:col-span-9 md:text-2xl">
            Standfirst placeholder — the one-paragraph thesis of the essay sits
            here, framed as a sharp claim about artificial intelligence as a
            general purpose technology and the unstable politics around its
            development.
          </p>

          <div className="col-span-12 mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-y border-[color:var(--rule)] py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[color:var(--ink-mute)]">
            <span>By [author]</span>
            <span aria-hidden>·</span>
            <span>~18 min read</span>
            <span aria-hidden>·</span>
            <span>4 sections</span>
            <span aria-hidden>·</span>
            <span>Working draft</span>
          </div>

          <div className="col-span-12 mt-12 grid grid-cols-12 gap-6">
            <div className="col-span-12 has-dropcap md:col-span-7">
              <p className="prose-body">
                Placeholder opening paragraph. The first move of the piece will
                live here — establishing artificial intelligence as the latest
                in a short list of general purpose technologies, then pivoting
                to the political question that follows: who controls a
                technology whose frontier is, by construction, a security
                asset.
              </p>
              <p className="prose-body mt-5">
                A second placeholder paragraph to set rhythm and let you see the
                drop cap, the body measure, and the way marginalia sits beside
                the column on wider screens.
              </p>
            </div>
            <aside className="col-span-12 mt-2 border-t border-[color:var(--rule)]/30 pt-4 font-sans text-xs leading-[1.4] text-[color:var(--ink-mute)] md:col-span-4 md:col-start-9 md:mt-1 md:border-l md:border-t-0 md:border-l-[color:var(--rule)]/20 md:pl-5 md:pt-0">
              <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--ink)]">
                On terms
              </div>
              Placeholder marginalia. Definitions, source notes, and asides
              live in this rail. Replace with the working glossary or first
              footnote.
            </aside>
          </div>
        </div>
      </div>
    </section>
  );
}
