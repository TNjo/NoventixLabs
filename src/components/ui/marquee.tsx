import type { CSSProperties, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  children,
  className,
  reverse = false,
  duration = 40,
  gap = "3rem",
}: {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  duration?: number;
  gap?: string;
}) {
  return (
    <div
      className={cn("group flex overflow-hidden mask-fade-x", className)}
      style={{ "--duration": `${duration}s`, "--gap": gap } as CSSProperties}
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-(--gap) group-hover:[animation-play-state:paused]",
          reverse ? "animate-marquee-reverse" : "animate-marquee",
        )}
      >
        <div className="flex shrink-0 items-center gap-(--gap)">{children}</div>
        <div className="flex shrink-0 items-center gap-(--gap)" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
