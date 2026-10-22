"use client";

import { motion } from "motion/react";
import { Bot, FileText, Globe, MessageCircle, PieChart, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type Node = { id: string; x: number; y: number; label: string; sub: string; icon: LucideIcon; main?: boolean };

const W = 600;
const H = 320;

const nodes: Node[] = [
  { id: "wa", x: 78, y: 92, label: "WhatsApp", sub: "New message", icon: MessageCircle },
  { id: "web", x: 78, y: 228, label: "Web form", sub: "Lead captured", icon: Globe },
  { id: "ai", x: 300, y: 160, label: "AI Agent", sub: "Understands & decides", icon: Bot, main: true },
  { id: "crm", x: 522, y: 62, label: "CRM", sub: "Contact synced", icon: Users },
  { id: "inv", x: 522, y: 160, label: "Invoice", sub: "Drafted & sent", icon: FileText },
  { id: "rep", x: 522, y: 258, label: "Report", sub: "Dashboard updated", icon: PieChart },
];

const edges: [string, string][] = [
  ["wa", "ai"],
  ["web", "ai"],
  ["ai", "crm"],
  ["ai", "inv"],
  ["ai", "rep"],
];

function pathFor(a: Node, b: Node) {
  // Edges run centre-to-centre; the opaque nodes hide the ends at any container size.
  const x1 = a.x;
  const x2 = b.x;
  const mx = (x1 + x2) / 2;
  return `M${x1} ${a.y} C${mx} ${a.y} ${mx} ${b.y} ${x2} ${b.y}`;
}

export function AutomationFlow({ className }: { className?: string }) {
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));
  return (
    <div className={cn("relative w-full", className)} style={{ aspectRatio: `${W} / ${H}` }}>
      <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden>
        <defs>
          <linearGradient id="edge" x1="0" x2="1">
            <stop offset="0" stopColor="#1f6bff" stopOpacity="0.2" />
            <stop offset="0.5" stopColor="#22d3ff" stopOpacity="0.7" />
            <stop offset="1" stopColor="#1f6bff" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="packet">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.4" stopColor="#22d3ff" />
            <stop offset="1" stopColor="#22d3ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        {edges.map(([from, to], i) => {
          const d = pathFor(byId[from], byId[to]);
          return (
            <g key={`${from}-${to}`}>
              <path d={d} fill="none" stroke="rgb(148 170 255 / 0.12)" strokeWidth="1.5" />
              <path d={d} fill="none" stroke="url(#edge)" strokeWidth="1.5" strokeDasharray="4 8" className="animate-dash" />
              <circle r="5" fill="url(#packet)">
                <animateMotion dur="2.6s" repeatCount="indefinite" begin={`${i * 0.45}s`} path={d} />
              </circle>
            </g>
          );
        })}
      </svg>

      {nodes.map((n, i) => (
        <motion.div
          key={n.id}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 * i, duration: 0.5 }}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(n.x / W) * 100}%`, top: `${(n.y / H) * 100}%` }}
        >
          <div
            className={cn(
              "flex items-center gap-2 rounded-xl border px-2 py-1.5 backdrop-blur sm:gap-2.5 sm:px-3 sm:py-2",
              n.main
                ? "border-brand/60 bg-linear-to-br from-brand/30 to-brand-deep/40 shadow-[0_0_40px_-5px] shadow-brand/60"
                : "border-line-strong bg-ink-2/90",
            )}
          >
            <span
              className={cn(
                "relative grid h-6 w-6 shrink-0 place-items-center rounded-lg sm:h-8 sm:w-8",
                n.main ? "bg-linear-to-br from-brand to-brand-2 text-white" : "bg-brand/15 text-brand-2",
              )}
            >
              {n.main && <span className="absolute inset-0 animate-pulse-ring rounded-lg bg-brand-2/40" />}
              <n.icon className="relative h-3.5 w-3.5 sm:h-4 sm:w-4" />
            </span>
            <span className="hidden leading-tight sm:block">
              <span className="block text-[0.72rem] font-semibold text-fg">{n.label}</span>
              <span className="block text-[0.62rem] whitespace-nowrap text-muted">{n.sub}</span>
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
