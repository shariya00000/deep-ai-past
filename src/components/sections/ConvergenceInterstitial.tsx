import { useEffect, useRef, useState } from "react";

export function ConvergenceInterstitial() {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setActive(true);
            obs.disconnect();
          }
        }
      },
      { threshold: 0.4 },
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="w-full px-6 py-28 md:py-40"
      style={{
        backgroundColor: "var(--oxblood-deep)",
        color: "var(--cream)",
      }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-6 md:gap-12">
          {/* Left track */}
          <div
            className="flex flex-col items-end gap-3"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "translateX(0)" : "translateX(-60px)",
              transition: "opacity 900ms ease-out, transform 900ms cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--cream)]/70">
              GPTs transform economies
            </div>
            <Track direction="right" />
          </div>

          {/* Center */}
          <div
            className="h-3 w-3 rounded-full bg-[color:var(--cream)]"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "scale(1)" : "scale(0.4)",
              transition: "all 700ms 700ms cubic-bezier(0.22,1,0.36,1)",
            }}
          />

          {/* Right track */}
          <div
            className="flex flex-col items-start gap-3"
            style={{
              opacity: active ? 1 : 0,
              transform: active ? "translateX(0)" : "translateX(60px)",
              transition: "opacity 900ms ease-out, transform 900ms cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[color:var(--cream)]/70">
              States compete for security
            </div>
            <Track direction="left" />
          </div>
        </div>

        <div
          className="mx-auto mt-16 max-w-[720px] text-center"
          style={{
            opacity: active ? 1 : 0,
            transform: active ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 800ms 1100ms ease-out, transform 800ms 1100ms ease-out",
          }}
        >
          <h2 className="font-display text-3xl leading-tight md:text-5xl">
            For the first time, these are the same question.
          </h2>
          <p
            className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--cream)]/60"
            style={{
              opacity: active ? 1 : 0,
              transition: "opacity 800ms 1600ms ease-out",
            }}
          >
            AI is the first GPT whose frontier is a security asset.
          </p>
        </div>
      </div>
    </section>
  );
}

function Track({ direction }: { direction: "left" | "right" }) {
  const dots = [0, 1, 2, 3];
  return (
    <div
      className="relative flex w-full max-w-[420px] items-center"
      style={{ flexDirection: direction === "right" ? "row" : "row-reverse" }}
    >
      <div className="h-px flex-1 bg-[color:var(--cream)]/40" />
      <div className="absolute inset-0 flex items-center justify-between px-2">
        {dots.map((d) => (
          <span
            key={d}
            className="h-1.5 w-1.5 rounded-full bg-[color:var(--cream)]/70"
          />
        ))}
      </div>
      <div
        className="h-0 w-0 border-y-[6px] border-y-transparent"
        style={{
          [direction === "right" ? "borderLeft" : "borderRight"]:
            "8px solid var(--cream)",
        }}
      />
    </div>
  );
}
