import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function BrowserFrame({
  children,
  url,
  className,
}: {
  children: ReactNode;
  url?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-line-strong bg-ink-2 shadow-[0_30px_80px_-20px_rgb(0_0_0/0.7)]",
        className,
      )}
    >
      <div className="flex items-center gap-3 border-b border-line bg-surface/80 px-4 py-2.5">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        {url && (
          <div className="mx-auto flex max-w-[70%] min-w-0 items-center gap-2 rounded-md bg-ink/70 px-3 py-1 font-mono text-[0.68rem] text-muted">
            <svg viewBox="0 0 16 16" className="h-3 w-3 shrink-0 fill-current opacity-70" aria-hidden>
              <path d="M8 1a3 3 0 0 0-3 3v2H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-1V4a3 3 0 0 0-3-3Zm-1.5 3a1.5 1.5 0 1 1 3 0v2h-3V4Z" />
            </svg>
            <span className="truncate">{url}</span>
          </div>
        )}
        {url && <span className="w-[42px]" />}
      </div>
      <div className="relative">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative rounded-[2.4rem] border border-line-strong bg-linear-to-b from-[#1b2550] to-[#0a0f24] p-2 shadow-[0_40px_80px_-20px_rgb(0_0_0/0.8)]",
        className,
      )}
    >
      <div className="relative overflow-hidden rounded-[1.9rem] bg-ink">
        <div className="absolute top-2 left-1/2 z-10 h-5 w-20 -translate-x-1/2 rounded-full bg-black" />
        {children}
      </div>
    </div>
  );
}
