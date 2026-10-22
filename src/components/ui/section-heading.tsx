import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./reveal";

export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex w-fit items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-3 py-1 font-mono text-[0.7rem] tracking-[0.2em] text-brand-2 uppercase",
        className,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-2 shadow-[0_0_10px_2px] shadow-brand-2/60" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "mx-auto max-w-3xl items-center text-center" : "max-w-2xl items-start",
        className,
      )}
    >
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-[3.4rem]">
        {title}
      </h2>
      {description && <p className="text-lg leading-relaxed text-pretty text-muted">{description}</p>}
    </Reveal>
  );
}
