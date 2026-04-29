import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  label?: string;
  heading?: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}

export function Section({
  label,
  heading,
  lead,
  children,
  className,
  containerClassName,
  id,
}: SectionProps) {
  return (
    <section id={id} className={cn("w-full px-6 py-24 md:py-32", className)}>
      <div className={cn("mx-auto max-w-[720px]", containerClassName)}>
        {label && (
          <div className="mb-10 font-mono text-[11px] uppercase tracking-[0.2em] text-[color:var(--oxblood)]">
            {label}
          </div>
        )}
        {heading !== undefined && (
          <h2 className="mb-8 text-4xl leading-[1.1] md:text-5xl">{heading}</h2>
        )}
        {lead && (
          <p className="mb-12 text-lg leading-relaxed text-[color:var(--ink)]/85 md:text-xl">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
