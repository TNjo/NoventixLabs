import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const styles: Record<Variant, string> = {
  primary:
    "relative overflow-hidden bg-linear-to-b from-[#3d84ff] to-brand text-white shadow-[0_10px_40px_-10px] shadow-brand/70 ring-1 ring-white/20 ring-inset hover:shadow-brand-glow/80 hover:brightness-110",
  secondary:
    "border border-line-strong bg-surface/60 text-fg backdrop-blur hover:border-brand/50 hover:bg-surface-2/80",
  ghost: "text-muted hover:text-fg",
};

export function ButtonLink({
  variant = "primary",
  className,
  children,
  ...props
}: ComponentProps<typeof Link> & { variant?: Variant; children: ReactNode }) {
  return (
    <Link
      className={cn(
        "group/btn inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-[0.95rem] font-medium transition-all duration-300",
        styles[variant],
        className,
      )}
      {...props}
    >
      {variant === "primary" && (
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 animate-shine bg-[linear-gradient(110deg,transparent_35%,rgb(255_255_255/0.35)_50%,transparent_65%)] bg-[length:250%_100%]"
        />
      )}
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </Link>
  );
}
