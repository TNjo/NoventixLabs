"use client";

import { AnimatePresence, motion, useInView } from "motion/react";
import {
  Activity,
  CheckCheck,
  Clock,
  Mail,
  MessageCircle,
  Phone,
  RefreshCw,
  Shield,
  Wrench,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LogoMark } from "@/components/brand/logo";
import { SectionHeading } from "@/components/ui/section-heading";

const features = [
  { icon: Activity, title: "24/7 monitoring", body: "Uptime, errors and performance watched around the clock." },
  { icon: Wrench, title: "Fixes & updates", body: "Bugs squashed fast, dependencies kept current." },
  { icon: Shield, title: "Security & backups", body: "SSL, hardening, and backups you never have to think about." },
  { icon: RefreshCw, title: "Content changes", body: "New prices, photos or pages? Just send us a message." },
];

type Msg = { from: "client" | "agent" | "system"; text: string; time?: string };

const script: Msg[] = [
  { from: "client", text: "Hi! Our booking page is showing an error 😟", time: "2:07 AM" },
  { from: "agent", text: "On it, checking the logs now.", time: "2:08 AM" },
  { from: "agent", text: "Found it: a payment gateway timeout. A fix is deployed and bookings are working ✅", time: "2:13 AM" },
  { from: "client", text: "That was fast, at 2 AM! Thank you 🙏", time: "2:14 AM" },
  { from: "system", text: "Ticket #1042 resolved · 7 minutes" },
];

export function Support() {
  return (
    <section id="support" className="relative overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 h-[30rem] w-[30rem] rounded-full bg-brand-2/10 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[30rem] w-[30rem] rounded-full bg-brand/15 blur-[140px]" />
      </div>
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <SectionHeading
            align="left"
            eyebrow="24/7 customer support"
            title={
              <>
                We don&apos;t disappear <span className="text-gradient">after launch.</span>
              </>
            }
            description="Every NoventixLabs product comes with real people on call, day or night, weekday or Poya. When something needs attention, we're already on it."
          />
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.08 * i }}
                className="rounded-2xl border border-line bg-surface/50 p-5 transition-colors hover:border-line-strong"
              >
                <f.icon className="h-5 w-5 text-brand-2" />
                <h3 className="mt-3 font-medium">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted">{f.body}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span className="text-subtle">Reach us on</span>
            {[
              { icon: MessageCircle, t: "WhatsApp" },
              { icon: Phone, t: "Phone" },
              { icon: Mail, t: "Email" },
            ].map((c) => (
              <span key={c.t} className="inline-flex items-center gap-1.5 rounded-full border border-line-strong bg-surface/60 px-3 py-1.5">
                <c.icon className="h-3.5 w-3.5 text-brand-2" /> {c.t}
              </span>
            ))}
          </div>
        </div>

        <ChatDemo />
      </div>
    </section>
  );
}

function ChatDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { margin: "-120px" });
  const [count, setCount] = useState(0);
  const [typing, setTyping] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const run = (i: number) => {
      if (cancelled) return;
      if (i >= script.length) {
        timers.push(setTimeout(() => { setCount(0); run(0); }, 4000));
        return;
      }
      const next = script[i];
      if (next.from === "agent") {
        setTyping(true);
        timers.push(setTimeout(() => { setTyping(false); setCount(i + 1); run(i + 1); }, 1400));
      } else {
        timers.push(setTimeout(() => { setCount(i + 1); run(i + 1); }, i === 0 ? 400 : 1300));
      }
    };
    run(count >= script.length ? 0 : count);
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <div ref={ref} className="relative">
      <div aria-hidden className="absolute -inset-6 rounded-[2.5rem] bg-linear-to-br from-brand/30 to-brand-2/10 blur-3xl" />
      <div className="glass relative overflow-hidden rounded-[2rem] border border-line-strong shadow-[0_40px_100px_-30px_rgb(0_0_0/0.8)]">
        <div className="flex items-center gap-3 border-b border-line px-5 py-4">
          <span className="relative grid h-10 w-10 place-items-center rounded-full bg-ink-2 ring-1 ring-line-strong">
            <LogoMark className="h-6 w-6" />
            <span className="absolute -right-0.5 -bottom-0.5 h-3 w-3 rounded-full border-2 border-ink-2 bg-emerald-400" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold">NoventixLabs Support</p>
            <p className="text-xs text-emerald-300">Online · replies in minutes</p>
          </div>
          <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-line px-2.5 py-1 font-mono text-[0.65rem] text-muted">
            <Clock className="h-3 w-3" /> 24/7
          </span>
        </div>

        <div className="flex h-[26rem] flex-col justify-end gap-3 overflow-hidden p-5" aria-live="polite">
          <AnimatePresence initial={false}>
            {script.slice(0, count).map((m, i) => (
              <motion.div
                key={`${i}-${m.text}`}
                layout
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className={
                  m.from === "system"
                    ? "mx-auto rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1.5 text-xs text-emerald-300"
                    : m.from === "client"
                      ? "max-w-[80%] self-start rounded-2xl rounded-bl-md border border-line bg-surface-2/90 px-4 py-2.5 text-sm"
                      : "max-w-[80%] self-end rounded-2xl rounded-br-md bg-linear-to-br from-brand to-[#1858d6] px-4 py-2.5 text-sm text-white"
                }
              >
                {m.from === "system" ? (
                  <span className="inline-flex items-center gap-1.5">
                    <CheckCheck className="h-3.5 w-3.5" /> {m.text}
                  </span>
                ) : (
                  <>
                    <p>{m.text}</p>
                    <p className={`mt-1 text-right text-[0.62rem] ${m.from === "agent" ? "text-white/60" : "text-subtle"}`}>{m.time}</p>
                  </>
                )}
              </motion.div>
            ))}
            {typing && (
              <motion.div
                key="typing"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="flex gap-1 self-end rounded-2xl rounded-br-md bg-brand/30 px-4 py-3"
              >
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-white/80"
                    animate={{ y: [0, -4, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, delay: d * 0.15 }}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
