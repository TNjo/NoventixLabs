"use client";

import { motion } from "motion/react";
import {
  Bell,
  Code2,
  Headphones,
  LayoutDashboard,
  Megaphone,
  Smartphone,
  Workflow,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { SpotlightCard } from "@/components/ui/spotlight-card";
import { AutomationFlow } from "@/components/visuals/automation-flow";
import { services } from "@/lib/services";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  automation: Workflow,
  web: Code2,
  webapps: LayoutDashboard,
  mobile: Smartphone,
  social: Megaphone,
  support: Headphones,
};

const visuals: Record<string, () => React.ReactNode> = {
  automation: () => <AutomationFlow className="mt-6" />,
  web: WebVisual,
  webapps: AppVisual,
  mobile: MobileVisual,
  social: SocialVisual,
  support: SupportVisual,
};

const layout: Record<string, string> = {
  automation: "lg:col-span-4 lg:row-span-2",
  web: "lg:col-span-2",
  webapps: "lg:col-span-2",
  mobile: "lg:col-span-2",
  social: "lg:col-span-2",
  support: "lg:col-span-2",
};

export function Services() {
  return (
    <section id="services" className="relative py-28 sm:py-36">
      <div aria-hidden className="absolute inset-0 -z-10 bg-dots mask-fade-y opacity-50" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              One studio. <span className="text-gradient">Every layer</span> of your digital business.
            </>
          }
          description="From the first pixel to the last automated workflow: strategy, design, engineering, marketing and support, under one roof."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {services.map((s, i) => {
            const Icon = icons[s.id];
            const Visual = visuals[s.id];
            const big = s.id === "automation";
            return (
              <Reveal key={s.id} delay={i * 0.06} className={cn(layout[s.id], big && "sm:col-span-2")}>
                <SpotlightCard className="h-full">
                  <div className={cn("flex h-full flex-col p-6 sm:p-7", big && "lg:p-9")}>
                    <div className="flex items-center gap-3">
                      <span className="grid h-11 w-11 place-items-center rounded-2xl border border-brand/30 bg-linear-to-br from-brand/25 to-transparent text-brand-2">
                        <Icon className="h-5 w-5" />
                      </span>
                      {big && (
                        <span className="rounded-full border border-brand-2/30 bg-brand-2/10 px-2.5 py-1 font-mono text-[0.65rem] tracking-wider text-brand-2 uppercase">
                          Our specialty
                        </span>
                      )}
                    </div>
                    <h3 className={cn("mt-5 font-display font-semibold tracking-tight", big ? "text-3xl" : "text-xl")}>
                      {s.title}
                    </h3>
                    <p className={cn("mt-2.5 leading-relaxed text-muted", big ? "max-w-xl text-base" : "text-sm")}>
                      {s.description}
                    </p>
                    <div className="flex-1">
                      <Visual />
                    </div>
                    <ul className="mt-6 flex flex-wrap gap-1.5">
                      {s.points.map((p) => (
                        <li key={p} className="rounded-full border border-line bg-ink/50 px-2.5 py-1 text-[0.7rem] text-muted">
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WebVisual() {
  const scores = [
    { label: "Perf", v: 100 },
    { label: "A11y", v: 98 },
    { label: "Best", v: 100 },
    { label: "SEO", v: 100 },
  ];
  return (
    <div className="mt-6 grid grid-cols-4 gap-2">
      {scores.map((s, i) => (
        <div key={s.label} className="flex flex-col items-center gap-1.5">
          <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
            <circle cx="18" cy="18" r="15.5" fill="none" stroke="rgb(52 211 153 / 0.15)" strokeWidth="3" />
            <motion.circle
              cx="18"
              cy="18"
              r="15.5"
              fill="none"
              stroke="#34d399"
              strokeWidth="3"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: s.v / 100 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.15 * i, ease: "easeOut" }}
            />
            <text x="18" y="18" transform="rotate(90 18 18)" textAnchor="middle" dominantBaseline="central" className="fill-emerald-300 font-mono text-[9px] font-semibold">
              {s.v}
            </text>
          </svg>
          <span className="font-mono text-[0.6rem] text-subtle uppercase">{s.label}</span>
        </div>
      ))}
    </div>
  );
}

function AppVisual() {
  const bars = [38, 52, 44, 66, 58, 80, 72, 94];
  return (
    <div className="mt-6 rounded-2xl border border-line bg-ink/60 p-4">
      <div className="flex items-baseline justify-between">
        <span className="text-[0.7rem] text-muted">Monthly active users</span>
        <span className="font-mono text-xs text-emerald-300">+38%</span>
      </div>
      <div className="mt-3 flex h-16 items-end gap-1.5">
        {bars.map((h, i) => (
          <motion.span
            key={i}
            className="flex-1 rounded-t-md bg-linear-to-t from-brand to-brand-2"
            initial={{ height: 0 }}
            whileInView={{ height: `${h}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.07 * i, ease: [0.22, 1, 0.36, 1] }}
          />
        ))}
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="relative mt-6 h-28">
      {[
        { t: "Order confirmed", s: "Your package is on its way", d: 0 },
        { t: "Points earned", s: "+25 reward points added", d: 0.15 },
      ].map((n, i) => (
        <motion.div
          key={n.t}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + n.d, duration: 0.5 }}
          className={cn(
            "absolute inset-x-0 flex items-center gap-3 rounded-2xl border border-line-strong bg-surface-2/90 p-3 backdrop-blur",
            i === 0 ? "top-0 z-10" : "top-12 scale-[0.94] opacity-70",
          )}
        >
          <span className="grid h-8 w-8 place-items-center rounded-xl bg-linear-to-br from-brand to-brand-2">
            <Bell className="h-4 w-4 text-white" />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-xs font-semibold">{n.t}</span>
            <span className="block truncate text-[0.68rem] text-muted">{n.s}</span>
          </span>
          <span className="ml-auto font-mono text-[0.6rem] text-subtle">now</span>
        </motion.div>
      ))}
    </div>
  );
}

function SocialVisual() {
  const platforms = [
    { n: "Facebook", c: "#1877f2", v: 82 },
    { n: "Instagram", c: "#e1306c", v: 94 },
    { n: "TikTok", c: "#25f4ee", v: 70 },
    { n: "Google", c: "#fbbc05", v: 58 },
  ];
  return (
    <div className="mt-6 space-y-2.5">
      {platforms.map((p, i) => (
        <div key={p.n} className="flex items-center gap-3">
          <span className="w-16 text-[0.7rem] text-muted">{p.n}</span>
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/5">
            <motion.div
              className="h-full rounded-full"
              style={{ background: p.c, boxShadow: `0 0 12px ${p.c}` }}
              initial={{ width: 0 }}
              whileInView={{ width: `${p.v}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.1, delay: 0.1 * i, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function SupportVisual() {
  return (
    <div className="mt-6 rounded-2xl border border-line bg-ink/60 p-4">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-xs text-fg">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          All systems operational
        </span>
        <span className="font-mono text-[0.65rem] text-subtle">24/7/365</span>
      </div>
      <div className="mt-3 flex gap-[3px]">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.span
            key={i}
            className="h-7 flex-1 rounded-[3px] bg-emerald-400/80"
            initial={{ opacity: 0, scaleY: 0.3 }}
            whileInView={{ opacity: 1, scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.02 }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono text-[0.6rem] text-subtle">
        <span>30 days ago</span>
        <span>Today</span>
      </div>
    </div>
  );
}
