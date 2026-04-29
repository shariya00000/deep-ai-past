## Geopolitics of AI — Page Build (Sections 1–3)

A long-form scrollable essay site. Cream background, serif typography, dark red accents. Built as a single landing route with composed section components so we can keep extending it in later prompts.

### Design system (set up first)

Establish shared tokens so every future section stays consistent:

- **Palette**: cream `#F5EFE3` background, ink `#1A1614` text, oxblood `#6B1B1B` accent, muted tan `#E5D9C3`, deep oxblood `#3A0E0E` for the interstitial.
- **Typography**: serif display (e.g. Cormorant Garamond or Fraunces) for headings; serif body (e.g. EB Garamond) for paragraphs; mono small-caps (e.g. JetBrains Mono) for section labels like `§ 02 — THE 24 GPTS IN HISTORY`.
- **Layout**: centered max-width ~720px reading column for prose; full-bleed wrappers for interstitials and timeline.
- Reusable `<Section>` wrapper component with optional label, heading, and lead paragraph slots.

### Section 1 — Placeholder hero

A scaffolded intro so the page reads top-to-bottom:
- Label: `§ 01 — INTRODUCTION`
- Empty heading slot (placeholder caption: "heading coming soon")
- A short lorem-style placeholder paragraph you'll replace later.

This locks in the visual rhythm before content arrives.

### Section 2 — The 24 GPTs in History

- Label: `§ 02 — THE 24 GPTS IN HISTORY` in oxblood mono small-caps.
- Blank heading slot (reserved space, no visible text).
- Lead paragraph: the Lipsey/Carlaw/Bekar text exactly as provided.
- **Stacked deck**: 3–4 cards visually stacked with slight rotation/offset, centered. A small italic prompt below reads "explore the timeline →". The whole stack is one click target.
- **Reveal animation**: on click, cards slide apart horizontally from the stack into a row (eased translate + de-rotate, ~600ms with slight stagger). The container then becomes a horizontally scrollable strip with snap points and a subtle scroll hint on the right edge.
- **8 cards**, each showing GPT name (serif) and a year badge (small oxblood pill). Cards are not clickable.
- **Era-based gradient** across the 8 cards from cream → warm tan → deep red, so the leftmost (Domestication) is palest and the rightmost (AI) is deepest oxblood. Text color flips to cream on the darker cards for legibility.

Entries (in order): Domestication of plants (c. 9000 BCE), Water wheel (1st c. BCE), Printing press (c. 1440), Steam engine (c. 1760), Electricity (c. 1870), Internal combustion engine (c. 1885), The internet (c. 1969), Artificial intelligence (c. 2020s).

### Interstitial — Convergence diagram

Full-width panel between sections 2 and 3, deep oxblood background with cream text. Triggered via `IntersectionObserver` when scrolled into view.

```text
GPTs transform economies  ●─●──●───▶          ◀───●──●─●  States compete for security
                                       ╲    ╱
                                        ▼
                          For the first time, these are
                                the same question.
                     AI is the first GPT whose frontier
                            is a security asset.
```

- Two horizontal arrow tracks animate in simultaneously from left and right edges, each with 3–4 unlabeled dot markers.
- They meet at center; once converged, the bold serif statement fades + scales in, followed by the smaller sub-label.
- Restrained: no decorative flourishes, just typography and thin lines.
- Animation runs once per page load; gracefully no-ops with reduced motion.

### Section 3 — Historical examples of state-private tensions

- Heading (serif): "Historical examples of state-private company tensions"
- Subheading: "Throughout history, state-private tensions have manifested in differing ways, leading to different consequences."
- **2×2 grid of 4 minimal cards**, each with: date range (small oxblood mono), headline (serif), and the one-line consequence beneath. Hover lifts the card subtly.
- **Click opens a modal**: dimmed cream-tinted backdrop, centered card, close button (×) top-right, ESC + backdrop-click to close, focus trap, body scroll lock.
- Modal body uses **placeholder lorem text** for now — easy to swap when you paste the real descriptions.

The 4 cards: British & Dutch East India Companies (17th–19th c.); Krupp and the German Military State (1850s–1945); Standard Oil and the U.S. Government (1870–1911); Zaibatsu and Imperial Japan (1880s–1945).

### Technical notes

- Single route `src/routes/index.tsx` composing section components from `src/components/sections/`.
- New components: `Section.tsx`, `IntroSection.tsx`, `GptsTimelineSection.tsx` (with `DeckStack` + `TimelineStrip`), `ConvergenceInterstitial.tsx`, `TensionsSection.tsx` (with `CaseCard`), reusing shadcn `Dialog` for the modal.
- Animations: CSS transitions + Tailwind keyframes; `IntersectionObserver` for the interstitial trigger; `prefers-reduced-motion` respected throughout.
- Fonts loaded via Google Fonts `<link>` in `__root.tsx` head; CSS tokens added to `src/styles.css` (cream bg, oxblood, era gradient stops).
- Update `__root.tsx` meta: title "Geopolitics of AI", relevant description.

### Out of scope (next prompts)

Real copy for section 1, real modal body text for section 3, sections 4+, navigation chrome, and any data/backend.
