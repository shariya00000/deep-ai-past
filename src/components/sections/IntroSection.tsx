import { Section } from "./Section";

export function IntroSection() {
  return (
    <Section
      label="§ 01 — Introduction"
      heading={
        <span className="text-[color:var(--ink)]/30 italic">heading coming soon</span>
      }
      lead={
        <span className="text-[color:var(--ink)]/60 italic">
          Placeholder introduction paragraph. The opening framing of the essay will
          live here — setting up artificial intelligence as a general purpose
          technology and previewing why the geopolitics of its development is
          unlike any prior wave of industrial transformation.
        </span>
      }
    />
  );
}
