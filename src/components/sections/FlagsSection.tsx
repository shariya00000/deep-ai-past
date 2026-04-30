import { useState, useRef, useEffect } from "react";
import { Section } from "./Section";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

type FlagCode = "CN" | "US" | "IL" | "EU";

interface Dossier {
  code: FlagCode;
  dossierNum: string;
  country: string;
  kicker: string;
  ecosystem: React.ReactNode;
  tension: React.ReactNode;
  global: React.ReactNode;
}

/* ---------- Flags (inline SVG, viewBox 3:2) ---------- */

function FlagCN({ className }: { className?: string }) {
  // 30x20 grid, canton large star at (5,5), 4 small stars around it
  return (
    <svg viewBox="0 0 30 20" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="30" height="20" fill="#C8242C" />
      <g fill="#F0CE2C">
        <Star cx={5} cy={5} r={3} />
        <Star cx={10} cy={2} r={1} />
        <Star cx={12} cy={4} r={1} />
        <Star cx={12} cy={7} r={1} />
        <Star cx={10} cy={9} r={1} />
      </g>
    </svg>
  );
}

function FlagIL({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 660 480" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="660" height="480" fill="#FFFFFF" />
      <rect x="0" y="55" width="660" height="80" fill="#0038B8" />
      <rect x="0" y="345" width="660" height="80" fill="#0038B8" />
      {/* Star of David */}
      <g fill="none" stroke="#0038B8" strokeWidth="22">
        <polygon points="330,160 410,300 250,300" />
        <polygon points="330,320 410,180 250,180" />
      </g>
    </svg>
  );
}

function FlagUS({ className }: { className?: string }) {
  const stripes = [];
  for (let i = 0; i < 13; i++) {
    stripes.push(
      <rect
        key={i}
        x="0"
        y={i * (260 / 13)}
        width="494"
        height={260 / 13}
        fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"}
      />,
    );
  }
  // Canton: 7 stripes high
  const cantonH = 7 * (260 / 13);
  // 5x6 + 4x5 star grid
  const stars: React.ReactElement[] = [];
  const cantonW = 494 * 0.4;
  const padX = cantonW / 12;
  const padY = cantonH / 10;
  for (let row = 0; row < 9; row++) {
    const isLong = row % 2 === 0;
    const cols = isLong ? 6 : 5;
    const offset = isLong ? 0 : padX;
    for (let c = 0; c < cols; c++) {
      const cx = padX + offset + c * (padX * 2);
      const cy = padY + row * padY;
      stars.push(<Star key={`${row}-${c}`} cx={cx} cy={cy} r={padX * 0.6} fill="#FFFFFF" />);
    }
  }
  return (
    <svg viewBox="0 0 494 260" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      {stripes}
      <rect x="0" y="0" width={cantonW} height={cantonH} fill="#3C3B6E" />
      {stars}
    </svg>
  );
}

function FlagEU({ className }: { className?: string }) {
  const stars: React.ReactElement[] = [];
  const cx = 50;
  const cy = 50;
  const r = 25;
  for (let i = 0; i < 12; i++) {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    stars.push(<Star key={i} cx={x} cy={y} r={3.5} fill="#FFCC00" />);
  }
  return (
    <svg viewBox="0 0 150 100" className={className} preserveAspectRatio="xMidYMid slice" aria-hidden>
      <rect width="150" height="100" fill="#003399" />
      {stars}
    </svg>
  );
}

/* 5-pointed star */
function Star({
  cx,
  cy,
  r,
  fill = "currentColor",
}: {
  cx: number;
  cy: number;
  r: number;
  fill?: string;
}) {
  const points: string[] = [];
  for (let i = 0; i < 10; i++) {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const radius = i % 2 === 0 ? r : r * 0.4;
    points.push(`${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`);
  }
  return <polygon points={points.join(" ")} fill={fill} />;
}

const FLAG_COMPONENTS: Record<FlagCode, (p: { className?: string }) => React.ReactElement> = {
  CN: FlagCN,
  US: FlagUS,
  IL: FlagIL,
  EU: FlagEU,
};

/* ---------- Emphasis helper ---------- */

function E({ children }: { children: React.ReactNode }) {
  return <mark>{children}</mark>;
}

/* ---------- Content ---------- */

const DOSSIERS: Dossier[] = [
  {
    code: "CN",
    dossierNum: "01",
    country: "China",
    kicker: "The state inside the supply chain.",
    ecosystem: (
      <>
        China governs technology through a layered mix of regulation, self-regulation, and state
        intervention. Baidu, Alibaba, Tencent, Huawei and Xiaomi are formally private but
        structurally embedded in the security objectives of the 15th Five-Year Plan.{" "}
        <E>Angela Zhang</E> characterizes the regulatory regime as a combination of hierarchy
        (ultimate state control), volatility (rapid shifts), and fragility (dependence on feedback)
        — a "Frankenstein" political economy sitting between command-and-control and market forces.
      </>
    ),
    tension: (
      <>
        The Party blurs the state–private line. State-owned enterprises hold equity in roughly 35%
        of private firms, and by 2021 Party organizations covered all 500 major companies. Control
        is mostly indirect — subsidies, signals, personnel — but discipline is sudden when needed:
        the 2020 suspension of <E>Ant Group</E>'s IPO and Jack Ma's withdrawal from public life
        mark the ceiling on corporate autonomy. <E>DeepSeek</E>'s 2025 refusal to engage prompts on
        Taiwan or Tiananmen shows that alignment now extends into model behavior itself.
      </>
    ),
    global: (
      <>
        The <E>Belt and Road Initiative</E> — and specifically the <E>Digital Silk Road</E> —
        exports both infrastructure and a surveillance model. At the 19th Party Congress (2017),
        Xi Jinping committed China to becoming a cyber superpower (网络强国, wǎngluò qiángguó).
        The dependency runs the other way too: Chinese surveillance hardware still relies on
        American and European components.
      </>
    ),
  },
  {
    code: "US",
    dossierNum: "02",
    country: "United States",
    kicker: "The negotiated nation-company hybrid.",
    ecosystem: (
      <>
        The ecosystem is privately owned and geographically concentrated in Silicon Valley.
        Frontier capability sits with <E>OpenAI</E>, <E>Anthropic</E>, <E>Google</E>, and{" "}
        <E>Meta</E>; infrastructure is dominated by Microsoft and Amazon. Alignment with the state
        is negotiated, not imposed — via procurement, subsidies, and regulatory incentives. Firms
        accept some interventionism in exchange for contracts, regulatory protection, or
        geopolitical backing (<E>Palantir</E>, <E>SpaceX</E>), producing a nation-company hybrid:
        formal independence, instrumental function.
      </>
    ),
    tension: (
      <>
        America's <E>AI Action Plan</E> treats domestic innovation and technological dominance as
        a national-security imperative. The Department of War's push to become an "AI-first" force
        pulls frontier labs like OpenAI into defense and intelligence contracting — introducing
        capabilities developed largely outside classified environments into national defense.{" "}
        <E>Project Maven</E> and the <E>Defense Innovation Unit</E> formalize the collaboration,
        and personnel circulate between Silicon Valley and the Pentagon. Firms retain a real
        refusal right: Anthropic has resisted DoD demands around surveillance and autonomous
        weapons applications.
      </>
    ),
    global: (
      <>
        Direct private exports — including ISR capability to Ukraine — reshape the state-centered
        model of war. US firms supply the majority of global intelligence, surveillance, and
        reconnaissance capacity. Global user data is routed through US-based platforms, and US
        cloud providers hold roughly two-thirds of the global cloud market.
      </>
    ),
  },
  {
    code: "IL",
    dossierNum: "03",
    country: "Israel",
    kicker: "Start-up nation, live-fire lab.",
    ecosystem: (
      <>
        High-tech makes up roughly 17% of GDP, and the defense-tech sector employs over 100,000
        people. Military, academia, and industry are vertically integrated; operations in Gaza and
        the West Bank function as a continuous testing ground. <E>Unit 8200</E> and the{" "}
        <E>C4I Directorate</E> operate as both training and innovation hubs. National objectives —
        cyber robustness, resilience, capacity — are codified in Israel's National Cybersecurity
        and Cyberdefense Posture.
      </>
    ),
    tension: (
      <>
        Private firms function as extensions of the security apparatus. Universal conscription
        embeds security culture across the population; <E>Ben-Gurion</E>'s doctrine — deterrence,
        decisive victory, early warning, alliances — still structures strategy. Tools built by
        private firms (<E>Lavender</E> for target rating, <E>The Gospel</E> for target-list
        generation, <E>Where's Daddy</E> for location tracking) are integrated directly into IDF
        operations. The <E>Israel Innovation Authority</E> funds start-ups, but the IDF
        preferentially contracts established firms; entrepreneurs report bureaucratic delay,
        restricted data access, and opaque rules.
      </>
    ),
    global: (
      <>
        Israel is structurally dependent on American software, often repurposed for military use
        in violation of vendor terms of service. The January 2025{" "}
        <E>US–Israel Strategic Partnership on AI, Research, and Critical Technologies</E>{" "}
        formalizes that dependency. Israel is not a Wassenaar signatory and exported $14.7bn in
        defense equipment in 2024; cases like <E>NSO Group</E>'s Pegasus illustrate how private
        firms proliferate state-grade capabilities globally.
      </>
    ),
  },
  {
    code: "EU",
    dossierNum: "04",
    country: "European Union",
    kicker: "Regulatory power, commercial weakness.",
    ecosystem: (
      <>
        The ecosystem is fragmented, research-strong, commercially thin. Innovation comes from
        SMEs, research institutions, and a small layer of firms (<E>Mistral AI</E>, <E>SAP</E>);
        private investment remains limited. Public initiatives — <E>AI factories</E>, gigafactories,{" "}
        <E>InvestAI</E> — attempt to substitute for missing "patient capital." The{" "}
        <E>European AI Strategy</E> sets twin goals of leading hubs and human-centric, trustworthy
        systems. Capability is unevenly distributed across member states.
      </>
    ),
    tension: (
      <>
        Responding to criticism of overregulation, the EU is now deregulating to recover
        innovation capacity. <E>Europol</E> is expanding ties with foreign industry — including a
        Microsoft desk at its headquarters. Industrial policy increasingly routes through
        "patriotic billionaires" as intermediaries. AI factories function more as research
        institutions than commercial actors, which limits private-sector application. Member
        states with national AI strategies show higher readiness than those without. The{" "}
        <E>AI Act</E> explicitly exempts dual-use technologies used for military, defense, or
        national security purposes.
      </>
    ),
    global: (
      <>
        The EU remains structurally dependent on non-European infrastructure but exercises
        normative power through the <E>"Brussels Effect,"</E> setting de facto international
        standards for AI governance. European firms — <E>SAP</E>, <E>Siemens</E>, <E>ASML</E> —
        hold critical positions in global AI supply chains, embedded across surveillance,
        industrial, and defense systems.
      </>
    ),
  },
];

/* ---------- Section ---------- */

export function FlagsSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const lastOpenedRef = useRef<number | null>(null);
  const active = openIdx === null ? null : DOSSIERS[openIdx];

  // Return focus to triggering card on close
  useEffect(() => {
    if (openIdx === null && lastOpenedRef.current !== null) {
      const btn = triggerRefs.current[lastOpenedRef.current];
      btn?.focus();
      lastOpenedRef.current = null;
    } else if (openIdx !== null) {
      lastOpenedRef.current = openIdx;
    }
  }, [openIdx]);

  return (
    <Section
      label="§ 04 / Four flags"
      heading="Four flags, four bets."
      standfirst="China, the United States, Israel, and the European Union are each making a different wager on how to govern AI under security pressure. The historical pattern from § 03 repeats — only the failure modes have moved."
      fullBleed
    >
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {DOSSIERS.map((d, i) => {
          const Flag = FLAG_COMPONENTS[d.code];
          return (
            <button
              key={d.code}
              ref={(el) => { triggerRefs.current[i] = el; }}
              type="button"
              aria-label={`Open dossier on ${d.country}`}
              onClick={() => setOpenIdx(i)}
              className="group relative flex flex-col overflow-hidden border border-[color:var(--rule)] bg-[color:var(--paper-2)] text-left transition-all duration-150 hover:-translate-y-0.5 hover:border-[color:var(--accent)]/80 focus:outline-none focus:border-[color:var(--accent)]"
            >
              {/* Flag — top ~55% */}
              <div
                className="relative w-full"
                style={{ aspectRatio: "3 / 2", filter: "saturate(0.85)" }}
              >
                <Flag className="absolute inset-0 h-full w-full" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
                />
              </div>

              {/* Lower content */}
              <div className="flex flex-col gap-4 p-8 md:p-10">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    Dossier {d.dossierNum} · {d.country.toUpperCase()}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent)]">
                    open dossier →
                  </span>
                </div>
                <h3 className="text-2xl leading-[1.1] tracking-[-0.02em] text-[color:var(--ink)] md:text-3xl font-medium">
                  {d.country}
                </h3>
                <p className="font-serif text-base italic leading-snug text-[color:var(--ink-2)]">
                  {d.kicker}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <Dialog open={openIdx !== null} onOpenChange={(o) => !o && setOpenIdx(null)}>
        <DialogContent
          className="max-h-[85vh] w-[85vw] max-w-[1100px] overflow-y-auto rounded-none border border-[color:var(--rule)] bg-[color:var(--paper-2)] p-0"
        >
          {active && <DossierBody dossier={active} onClose={() => setOpenIdx(null)} />}
        </DialogContent>
      </Dialog>
    </Section>
  );
}

function DossierBody({ dossier, onClose }: { dossier: Dossier; onClose: () => void }) {
  const Flag = FLAG_COMPONENTS[dossier.code];
  return (
    <div className="p-8 md:p-12">
      {/* Top bar */}
      <div className="mb-8 flex items-center justify-between gap-4">
        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent)]">
          Dossier {dossier.dossierNum} · {dossier.country.toUpperCase()}
        </span>
        <button
          type="button"
          onClick={onClose}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent)] hover:text-[color:var(--ink)]"
        >
          Close ✕
        </button>
      </div>

      {/* Hero */}
      <div className="mb-10 grid grid-cols-12 gap-6 border-b border-[color:var(--rule)] pb-8">
        <div className="col-span-12 md:col-span-3">
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "3 / 2", maxHeight: "120px", filter: "saturate(0.85)" }}
          >
            <Flag className="absolute inset-0 h-full w-full" />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }}
            />
          </div>
        </div>
        <div className="col-span-12 md:col-span-9">
          <DialogTitle className="text-4xl leading-[1.05] tracking-[-0.025em] text-[color:var(--ink)] md:text-5xl font-medium">
            {dossier.country}
          </DialogTitle>
          <DialogDescription className="mt-3 font-serif text-lg italic leading-snug text-[color:var(--ink-2)] md:text-xl">
            {dossier.kicker}
          </DialogDescription>
        </div>
      </div>

      {/* Body — three subsections */}
      <div className="mx-auto max-w-[640px]">
        <DossierSubsection label="AI ecosystem">{dossier.ecosystem}</DossierSubsection>
        <DossierSubsection label="Private–public tension">{dossier.tension}</DossierSubsection>
        <DossierSubsection label="Global influences" last>
          {dossier.global}
        </DossierSubsection>
      </div>
    </div>
  );
}

function DossierSubsection({
  label,
  children,
  last,
}: {
  label: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={last ? "" : "mb-8 border-b border-[color:var(--accent)]/30 pb-8"}>
      <div className="mb-4 font-mono text-[10px] uppercase tracking-[0.18em] text-[color:var(--accent)]">
        {label}
      </div>
      <p className="prose-body">{children}</p>
    </div>
  );
}
