"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { Compass, PenTool, Rocket, Sprout, TerminalSquare } from "lucide-react";
import { useRef } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  {
    icon: Compass,
    title: "Discover",
    time: "Week 1",
    body: "We learn how your business really works: your customers, your bottlenecks and your goals. You get a clear scope, timeline and fixed quote.",
  },
  {
    icon: PenTool,
    title: "Design",
    time: "Weeks 1–3",
    body: "Wireframes, then high-fidelity UI in your brand. You click through realistic prototypes before a line of production code is written.",
  },
  {
    icon: TerminalSquare,
    title: "Build",
    time: "Weeks 3–8",
    body: "Engineering in weekly sprints with live preview links. You see progress every week and give feedback as it happens.",
  },
  {
    icon: Rocket,
    title: "Launch",
    time: "Go-live",
    body: "Testing, performance tuning, SEO, analytics and a calm, rehearsed launch. We train your team and hand over everything.",
  },
  {
    icon: Sprout,
    title: "Grow & support",
    time: "Always",
    body: "24/7 monitoring, fixes and improvements, plus marketing and automation that keep compounding results month after month.",
  },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="process" className="relative py-28 sm:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            align="left"
            eyebrow="How we work"
            title={
              <>
                A calm, transparent <span className="text-gradient">process</span>, from idea to impact.
              </>
            }
            description="No black boxes. You'll always know what we're building, why, and when it ships."
          />
        </div>

        <div ref={ref} className="relative">
          <div aria-hidden className="absolute top-2 bottom-2 left-[1.6rem] w-px bg-line-strong" />
          <motion.div
            aria-hidden
            style={{ scaleY }}
            className="absolute top-2 bottom-2 left-[1.6rem] w-px origin-top bg-linear-to-b from-brand-2 via-brand to-brand-2 shadow-[0_0_12px_1px] shadow-brand-2/60"
          />
          <ol className="space-y-6">
            {steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-6"
              >
                <span className="relative z-10 grid h-[3.2rem] w-[3.2rem] shrink-0 place-items-center rounded-2xl border border-brand/40 bg-ink-2 text-brand-2 shadow-[0_0_30px_-8px] shadow-brand">
                  <s.icon className="h-5 w-5" />
                </span>
                <div className="flex-1 rounded-3xl border border-line bg-surface/50 p-6 transition-colors hover:border-line-strong hover:bg-surface/80">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-xl font-semibold">
                      <span className="mr-2 font-mono text-sm text-subtle">0{i + 1}</span>
                      {s.title}
                    </h3>
                    <span className="rounded-full border border-line px-2.5 py-0.5 font-mono text-[0.65rem] text-muted">{s.time}</span>
                  </div>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted">{s.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
