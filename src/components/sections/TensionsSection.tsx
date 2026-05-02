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
      "In 1600 and 1602, the British Crown and the Dutch Republic, respectively, chartered the East India Company (EIC) and the Vereenigde Oost-Indische Compagnie (VOC), for the same reason: neither state could justify the exorbitant cost of simultaneously fitting out fleets, maintaining fortresses in Asia, and fighting the Portuguese and Spaniards for trade routes in the Indian Ocean. Rather than build this capacity themselves, both states delegated it to private investors, granting them sovereign powers, including the right to wage war, sign treaties, and administer territory in exchange for commercial returns. The firms accumulated wealth, political influence, and effective governmental authority far beyond what either state had anticipated or intended, with VOC directors sitting in the Dutch States-General by the 17th century and the EIC administering taxation and commanding armies across the Indian subcontinent by the 18th, using their position to protect Company interests over the sovereign’s broader strategic needs. By the mid-18th century, the VOC was corrupt, overextended, and operating according to its own institutional logic rather than Dutch national interest, and the state was forced to dissolve and nationalise it in 1799. The EIC was absorbed into the Crown following the Indian Sepoy Mutiny in 1857, but, notably, in both cases, reassertion only became politically executable once the firms had already collapsed under their own contradictions. For both countries, the problem was not the strategic decisions made by the companies, as the goals were broadly aligned with the states’: expanding and maintaining empire, but rather the overextension of private company action and the subsequent vacuum of accountability.",
    ],
  },
  {
    dates: "1850s–1945",
    title: "Krupp and the German Military State",
    consequence: "Mutual capture without meaningful accountability.",
    body: [
      "Krupp began as a family-owned private steel manufacturing company in the mid-19th century, steadily growing into Europe’s largest private firm by the early 20th century. The firm cultivated a direct relationship with Wilhelm II, King of Prussia, supplying artillery that outperformed anything state arsenals could produce. This led the state-firm relationship to a mutual capture, as the Prussian military could not declare war without Krupp’s backing, but Krupp could not survive without state contracts. This dependency meant that neither party could credibly threaten the other. No German government could discipline Krupp without undermining its own military capacity. Resolution was only delivered externally, at the Nuremberg trials of 1947-1948, wherein allied tribunals treated the firm's directors as war criminals for exercising sovereign authority of directing resource extraction across occupied Europe without ever having been formally part of the state.",
      "Today, a mutual capture between frontier AI labs and defense establishments is already forming (see Palantir’s accumulated influence inside the Pentagon). The Krupp case suggests that once this dependency reaches a certain depth, it will be increasingly difficult for a governance mechanism operating within normal politics to restore accountability.",
    ],
  },
  {
    dates: "1870–1911",
    title: "Standard Oil and the United States Government",
    consequence:
      "The state tolerates a private monopoly until strategic dependency threatens security.",
    body: [
      "Founded in 1870 by John D. Rockefeller, Standard Oil controlled over 90% of US oil refining by the following decade through aggressive private accumulation that the state had not anticipated and consequently had no tools nor the intention to address. For the first two decades of Standard Oil’s dominance, the federal government largely left it alone, as abundant oil was serving the US industrial expansion and there was no pressing strategic reason to intervene. The security dimension became explicit in the 1890s as oil became essential to modernising naval and military competencies, and the US government realised it was strategically dependent on a single private firm for fuel supply. The state acted in 1906, filing the Sherman Antitrust Act, met with aggressive pushback by Standard Oil for five years, with Rockefeller publicly dismissing the proceedings as “government overreach into legitimate business”.",
      "The structural dependence of the US government on its private companies for national security objectives shapes the pattern that is the most direct parallel to the current AI moment: the state tolerates and implicitly benefits from private concentration, until its structured dependency on the private is revealed. The state is then faced with a private actor with enough accumulated power to contest the sovereign’s attempt to reassert control on its own terms and timeline.",
    ],
  },
  {
    dates: "1880s–1945",
    title: "Zaibatsu and Imperial Japan",
    consequence:
      "A private actor's commercial interests become the de facto driver of state grand strategy.",
    body: [
      "In the late 19th century, the government of Japan under the Meiji dynasty sold state-owned enterprises off at below market prices, creating private conglomerates (Zaibatsu). The ‘Big Three’ Zaibatsu: Mitsubishi, Mitsui, Sumitomo, were structurally dependent on state favouritism and institutionally aligned with imperial expansion from the outset (similar to the EIC/VOC). By the 1930s, Zaibatsu banks were financing colonial infrastructure, and Zaibatsu industrial capacity was directing Japanese military expansion into Manchuria. This direction is where the key divergence between the aforementioned Companies lies: the state was not driving military expansion, rather the firms needed new markets and the military followed, rationalising the economic logic the Zaibatsu had already established. The private commercial success of the Zaibatsu had become so politically indispensable that the sovereign’s strategic priorities were quasi-reorganised around the firm’s interests rather than the other way around.",
      "This case serves as a potential trajectory of accumulated dependency on frontier AI, as will be explored below. The inversion does not require dramatic confrontation, it can happen slowly, until private commercial logic has so thoroughly shaped state strategic priorities that the question of policy direction no longer has a clear answer.",
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
        <DialogContent className="max-h-[90vh] max-w-2xl overflow-y-auto rounded-none border border-[color:var(--rule)] bg-[color:var(--paper-2)] p-0">
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
              <div className="mt-8 space-y-5">
                {active.body.map((para, i) => (
                  <p
                    key={i}
                    className={i === 0 ? "prose-body has-dropcap" : "prose-body"}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </Section>
  );
}
