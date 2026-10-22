import { useId } from "react";
import { cn } from "@/lib/utils";

/** Vector redraw of the NoventixLabs ribbon "N" mark. */
export function LogoMark({ className }: { className?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg viewBox="0 0 100 100" className={cn("h-8 w-8", className)} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-l`} x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#020717" />
          <stop offset="0.55" stopColor="#06235e" />
          <stop offset="1" stopColor="#0f6fe8" />
        </linearGradient>
        <linearGradient id={`${id}-r`} x1="0.6" y1="0" x2="0.2" y2="1">
          <stop offset="0" stopColor="#1a4fd6" />
          <stop offset="0.6" stopColor="#0a1f63" />
          <stop offset="1" stopColor="#020717" />
        </linearGradient>
        <linearGradient id={`${id}-b`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0.18" stopColor="#2af0ff" />
          <stop offset="0.42" stopColor="#1f8bff" />
          <stop offset="1" stopColor="#0b3fd4" />
        </linearGradient>
        <linearGradient id={`${id}-s`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0b2a9e" stopOpacity="0" />
          <stop offset="1" stopColor="#06144d" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path d="M2 24 L31 24 L31 84 Q31 88.5 27 90.6 L2 103 Z" fill={`url(#${id}-l)`} transform="translate(0 -4)" />
      <path d="M69 20 Q69 15.5 73 13.4 L98 0 L98 76 L69 76 Z" fill={`url(#${id}-r)`} />
      <path
        d="M2 18 Q2 3 17 3 L33 3 Q41 3 46.5 9.5 L95.5 69 Q98 72.5 98 78 L98 82 Q98 97 83 97 L67 97 Q59 97 53.5 90.5 L5 31 Q2 27 2 18 Z"
        fill={`url(#${id}-b)`}
      />
      <path
        d="M2 18 Q2 3 17 3 L33 3 Q41 3 46.5 9.5 L95.5 69 Q98 72.5 98 78 L98 82 Q98 97 83 97 L67 97 Q59 97 53.5 90.5 L5 31 Q2 27 2 18 Z"
        fill={`url(#${id}-s)`}
      />
    </svg>
  );
}

export function Logo({ className, showTagline = false }: { className?: string; showTagline?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark className="h-8 w-8 shrink-0" />
      <span className="flex flex-col leading-none">
        <span className="font-display text-[1.15rem] font-bold tracking-tight">
          <span className="text-fg">Noventix</span>
          <span className="bg-linear-to-r from-brand to-brand-2 bg-clip-text text-transparent">Labs</span>
        </span>
        {showTagline && (
          <span className="mt-1 font-mono text-[0.58rem] tracking-[0.32em] text-muted uppercase">
            Automate · Build · Grow
          </span>
        )}
      </span>
    </span>
  );
}
