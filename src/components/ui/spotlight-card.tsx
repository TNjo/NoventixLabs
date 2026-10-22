"use client";

import { motion, useMotionTemplate, useMotionValue } from "motion/react";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

/** Card with a cursor-following glow on both the fill and the border. */
export function SpotlightCard({
  children,
  className,
  color = "31 107 255",
}: {
  children: ReactNode;
  className?: string;
  /** Space-separated RGB channels. */
  color?: string;
}) {
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left);
    y.set(e.clientY - r.top);
  }

  const fill = useMotionTemplate`radial-gradient(420px circle at ${x}px ${y}px, rgb(${color} / 0.14), transparent 65%)`;
  const border = useMotionTemplate`radial-gradient(260px circle at ${x}px ${y}px, rgb(${color} / 0.7), transparent 70%)`;

  return (
    <div
      onMouseMove={onMove}
      onMouseLeave={() => {
        x.set(-400);
        y.set(-400);
      }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border border-line bg-linear-to-b from-surface/80 to-ink-2/80 hairline",
        className,
      )}
    >
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] p-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: border,
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: fill }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  );
}
