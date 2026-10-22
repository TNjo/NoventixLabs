"use client";

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { ArrowRight, Bot, CheckCircle2, Headphones, MessageCircle, Sparkles, TrendingUp, Zap } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { BrowserFrame, PhoneFrame } from "@/components/ui/frames";

const words = ["automations", "websites", "web apps", "mobile apps", "growth engines"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  const { scrollYProgress } = useScroll({ target: stageRef, offset: ["start end", "center center"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  const rotateX = useTransform(progress, [0, 1], [24, 0]);
  const scale = useTransform(progress, [0, 1], [0.9, 1]);
  const y = useTransform(progress, [0, 1], [40, 0]);

  return (
    <section className="relative isolate overflow-hidden pt-36 pb-24 sm:pt-44">
      <HeroBackground />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center px-6 text-center">
        <motion.a
          href="#support"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group mb-8 inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/60 py-1 pr-3 pl-1 text-xs text-muted backdrop-blur transition hover:border-brand/50 sm:text-sm"
        >
          <span className="rounded-full bg-linear-to-r from-brand to-brand-2 px-2.5 py-0.5 text-[0.7rem] font-semibold text-white">
            24/7
          </span>
          Round-the-clock support on every project
          <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-0.5" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[2.6rem] leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl lg:text-[5.4rem]"
        >
          <span className="text-gradient-soft">We engineer</span>
          <br />
          <span className="relative inline-grid h-[1.15em] overflow-hidden align-bottom">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={words[index]}
                initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
                animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                exit={{ y: "-100%", opacity: 0, filter: "blur(8px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-gradient col-start-1 row-start-1 pb-[0.08em]"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <br />
          <span className="text-gradient-soft">that move business.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-7 max-w-2xl text-base leading-relaxed text-pretty text-muted sm:text-lg"
        >
          NoventixLabs is a product studio for ambitious brands. We design, build and automate websites, web apps,
          mobile apps and marketing systems, then keep them running with 24/7 support.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-col items-center gap-3 sm:flex-row"
        >
          <ButtonLink href="#contact">
            Start your project <ArrowRight className="h-4 w-4 transition group-hover/btn:translate-x-0.5" />
          </ButtonLink>
          <ButtonLink href="#work" variant="secondary">
            Explore our work
          </ButtonLink>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-subtle"
        >
          {["10+ products launched", "9 industries", "Sinhala · Tamil · English", "24/7 support"].map((t) => (
            <li key={t} className="flex items-center gap-1.5">
              <CheckCircle2 className="h-4 w-4 text-brand-2" /> {t}
            </li>
          ))}
        </motion.ul>
      </div>

      {/* Product stage */}
      <div ref={stageRef} className="relative mx-auto mt-20 max-w-6xl px-6 [perspective:1400px]">
        <motion.div
          // Same style on server and client to avoid hydration mismatches; reduced motion is handled in CSS.
          style={{ rotateX, scale, y }}
          className="relative origin-top transform-3d motion-reduce:transform-none!"
        >
          <div aria-hidden className="absolute -inset-x-10 -top-10 bottom-0 -z-10 rounded-[3rem] bg-brand/25 blur-[90px]" />
          <BrowserFrame url="app.mandakini.lk/dashboard">
            <Image
              src="/work/mandakini.jpg"
              alt="Mandakini Connect loan management dashboard built by NoventixLabs"
              width={1440}
              height={900}
              priority
              className="h-auto w-full"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-ink via-ink/40 to-transparent" />
          </BrowserFrame>

          {/* Floating automation card */}
          <FloatCard className="top-[14%] -left-4 hidden w-72 lg:block xl:-left-14" delay={0.8}>
            <div className="mb-3 flex items-center justify-between">
              <span className="flex items-center gap-2 text-xs font-medium text-fg">
                <Zap className="h-3.5 w-3.5 text-brand-2" /> Workflow · New order
              </span>
              <span className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[0.65rem] text-emerald-300">Live</span>
            </div>
            <ol className="space-y-2">
              {[
                { icon: MessageCircle, label: "WhatsApp message received" },
                { icon: Bot, label: "AI reads & qualifies the lead" },
                { icon: Sparkles, label: "CRM updated · invoice drafted" },
                { icon: CheckCircle2, label: "Customer notified instantly" },
              ].map((s, i) => (
                <motion.li
                  key={s.label}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1 + i * 0.25 }}
                  className="flex items-center gap-2.5 rounded-xl border border-line bg-ink/60 px-2.5 py-2 text-[0.72rem] text-muted"
                >
                  <span className="grid h-6 w-6 place-items-center rounded-lg bg-brand/15 text-brand-2">
                    <s.icon className="h-3.5 w-3.5" />
                  </span>
                  {s.label}
                </motion.li>
              ))}
            </ol>
          </FloatCard>

          {/* Floating phone */}
          <FloatCard className="-right-2 bottom-[-6%] hidden w-[190px] !p-0 !bg-transparent !border-0 !shadow-none lg:block xl:-right-10" delay={1}>
            <PhoneFrame>
              <Image src="/work/nkrice-m.jpg" alt="NK Rice Mill loyalty app on mobile" width={390} height={844} className="h-auto w-full" />
            </PhoneFrame>
          </FloatCard>

          {/* Floating growth card */}
          <FloatCard className="top-[8%] -right-4 hidden w-60 lg:block xl:-right-16" delay={1.2}>
            <div className="flex items-center justify-between text-xs text-muted">
              <span className="flex items-center gap-1.5">
                <TrendingUp className="h-3.5 w-3.5 text-brand-2" /> Campaign reach
              </span>
              <span className="text-emerald-300">▲ trending</span>
            </div>
            <svg viewBox="0 0 200 60" className="mt-3 h-14 w-full" aria-hidden>
              <defs>
                <linearGradient id="spark" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#22d3ff" stopOpacity="0.45" />
                  <stop offset="1" stopColor="#22d3ff" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 52 C20 50 30 44 45 46 S70 30 90 34 S120 20 140 22 S175 6 200 4 L200 60 L0 60 Z" fill="url(#spark)" />
              <motion.path
                d="M0 52 C20 50 30 44 45 46 S70 30 90 34 S120 20 140 22 S175 6 200 4"
                fill="none"
                stroke="#22d3ff"
                strokeWidth="2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.4, ease: "easeInOut" }}
              />
            </svg>
          </FloatCard>

          {/* Floating support toast */}
          <FloatCard className="bottom-[10%] -left-2 hidden w-64 lg:block xl:-left-10" delay={1.4}>
            <div className="flex items-start gap-3">
              <span className="relative grid h-9 w-9 shrink-0 place-items-center rounded-full bg-linear-to-br from-brand to-brand-2">
                <Headphones className="h-4 w-4 text-white" />
                <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-surface bg-emerald-400" />
              </span>
              <div className="text-left">
                <p className="text-xs font-medium text-fg">Support · 2:14 AM</p>
                <p className="mt-0.5 text-[0.72rem] leading-snug text-muted">Issue resolved and deployed. Your site is back to 100% uptime ✓</p>
              </div>
            </div>
          </FloatCard>
        </motion.div>
      </div>
    </section>
  );
}

function FloatCard({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`absolute z-10 ${className}`}
    >
      <div className="glass animate-float rounded-2xl border border-line-strong p-4 shadow-[0_20px_60px_-15px_rgb(0_0_0/0.7)] [animation-delay:var(--d)]" style={{ ["--d" as string]: `${delay}s` }}>
        {children}
      </div>
    </motion.div>
  );
}

function HeroBackground() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-grid mask-radial opacity-70" />
      <div className="absolute top-[-20%] left-1/2 h-[60rem] w-[60rem] -translate-x-1/2">
        <div className="absolute top-[10%] left-[15%] h-[28rem] w-[28rem] animate-aurora rounded-full bg-brand/40 blur-[120px]" />
        <div className="absolute top-[20%] right-[10%] h-[24rem] w-[24rem] animate-aurora rounded-full bg-brand-2/25 blur-[120px] [animation-delay:-6s]" />
        <div className="absolute top-[35%] left-[35%] h-[20rem] w-[26rem] animate-aurora rounded-full bg-indigo-600/30 blur-[120px] [animation-delay:-12s]" />
      </div>
      {/* top light beam */}
      <div className="absolute top-0 left-1/2 h-[36rem] w-[70rem] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_0%,transparent_42%,rgb(34_211_255/0.18)_50%,transparent_58%)]" />
      <div className="noise absolute inset-0 opacity-[0.035] mix-blend-overlay" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-b from-transparent to-ink" />
    </div>
  );
}
