"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, Mail, MessageCircle, Phone, Sparkles } from "lucide-react";
import { useState, type FormEvent } from "react";
import { Eyebrow } from "@/components/ui/section-heading";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";
import { cn } from "@/lib/utils";

const timelines = ["ASAP", "Within a month", "1–3 months", "Just exploring"];

export function Contact() {
  const [picked, setPicked] = useState<string[]>([]);
  const [timeline, setTimeline] = useState(timelines[1]);
  const [sent, setSent] = useState(false);

  function compose(form: HTMLFormElement) {
    const data = new FormData(form);
    return [
      `Hi NoventixLabs! 👋`,
      ``,
      `Name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      data.get("company") ? `Company: ${data.get("company")}` : null,
      `Interested in: ${picked.length ? picked.join(", ") : "Not sure yet"}`,
      `Timeline: ${timeline}`,
      ``,
      `${data.get("message")}`,
    ]
      .filter((l) => l !== null)
      .join("\n");
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    window.open(whatsappLink(compose(e.currentTarget)), "_blank", "noopener");
    setSent(true);
  }

  function sendEmail(form: HTMLFormElement | null) {
    if (!form || !form.reportValidity()) return;
    const subject = `New project enquiry: ${new FormData(form).get("name")}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(compose(form))}`;
    setSent(true);
  }

  return (
    <section id="contact" className="relative overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-radial opacity-50" />
        <div className="absolute top-1/4 left-1/2 h-[36rem] w-[56rem] -translate-x-1/2 rounded-full bg-brand/20 blur-[150px]" />
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
        <div className="flex flex-col">
          <Eyebrow>Start a project</Eyebrow>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Let&apos;s build <span className="text-gradient">what&apos;s next.</span>
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-muted">
            Tell us about your idea, your bottleneck or your growth goal. We&apos;ll reply with a free consultation and a clear plan.
          </p>

          <div className="mt-10 space-y-3">
            <ContactRow icon={MessageCircle} label="WhatsApp" value={site.whatsapp.display} href={whatsappLink("Hi NoventixLabs! I'd like to discuss a project.")} />
            <ContactRow icon={Mail} label="Email" value={site.email} href={`mailto:${site.email}`} />
            <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface/40 p-4">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand/15 text-brand-2">
                <Phone className="h-5 w-5" />
              </span>
              <span className="min-w-0 leading-tight">
                <span className="block text-xs text-subtle">Call us · 24/7</span>
                <span className="mt-1.5 flex flex-wrap gap-1.5">
                  {site.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="rounded-full border border-line-strong px-3 py-1 text-sm font-medium transition hover:border-brand hover:bg-brand hover:text-white"
                    >
                      {p.display}
                    </a>
                  ))}
                </span>
              </span>
            </div>
          </div>

          <div className="mt-auto hidden pt-10 lg:block">
            <div className="flex items-center gap-3 rounded-2xl border border-line bg-surface/50 p-4 text-sm text-muted">
              <Sparkles className="h-5 w-5 shrink-0 text-brand-2" />
              Free discovery call · Fixed quotes · You own everything we build
            </div>
          </div>
        </div>

        <div className="relative">
          <div aria-hidden className="absolute -inset-px rounded-[2rem] bg-linear-to-b from-brand/50 via-line to-transparent" />
          <div className="relative rounded-[2rem] bg-ink-2/95 p-6 sm:p-9">
            <AnimatePresence mode="wait">
              {sent ? (
                <motion.div
                  key="sent"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex min-h-[32rem] flex-col items-center justify-center text-center"
                >
                  <span className="relative grid h-16 w-16 place-items-center rounded-full bg-linear-to-br from-brand to-brand-2">
                    <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-2/40" />
                    <Check className="relative h-7 w-7 text-white" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-semibold">Your message is ready to send</h3>
                  <p className="mt-2 max-w-sm text-muted">
                    We&apos;ve opened it in WhatsApp or your email app. Hit send, and our team will get back to you shortly, day or night.
                  </p>
                  <button onClick={() => setSent(false)} className="mt-8 text-sm text-brand-2 hover:underline">
                    Send another enquiry
                  </button>
                </motion.div>
              ) : (
                <motion.form key="form" id="contact-form" onSubmit={onSubmit} exit={{ opacity: 0 }} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field name="name" label="Your name" placeholder="Kasun Perera" required autoComplete="name" />
                    <Field name="email" type="email" label="Email" placeholder="you@company.com" required autoComplete="email" />
                  </div>
                  <Field name="company" label="Company (optional)" placeholder="Your business name" autoComplete="organization" />

                  <fieldset>
                    <legend className="mb-3 text-sm text-muted">What can we help with?</legend>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => {
                        const on = picked.includes(s.short);
                        return (
                          <button
                            key={s.id}
                            type="button"
                            aria-pressed={on}
                            onClick={() => setPicked((p) => (on ? p.filter((x) => x !== s.short) : [...p, s.short]))}
                            className={cn(
                              "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm transition-all",
                              on
                                ? "border-brand bg-brand/20 text-fg shadow-[0_0_20px_-6px] shadow-brand"
                                : "border-line-strong text-muted hover:border-brand/40 hover:text-fg",
                            )}
                          >
                            {on && <Check className="h-3.5 w-3.5 text-brand-2" />}
                            {s.short}
                          </button>
                        );
                      })}
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend className="mb-3 text-sm text-muted">Timeline</legend>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                      {timelines.map((t) => (
                        <button
                          key={t}
                          type="button"
                          aria-pressed={timeline === t}
                          onClick={() => setTimeline(t)}
                          className={cn(
                            "rounded-xl border px-3 py-2.5 text-sm transition-all",
                            timeline === t ? "border-brand bg-brand/20 text-fg" : "border-line-strong text-muted hover:text-fg",
                          )}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </fieldset>

                  <label className="block">
                    <span className="mb-2 block text-sm text-muted">Tell us about your project</span>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="What are you building, and what would success look like?"
                      className="w-full resize-none rounded-2xl border border-line-strong bg-surface/60 px-4 py-3 text-fg placeholder:text-subtle focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none"
                    />
                  </label>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <button
                      type="submit"
                      className="group inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-linear-to-b from-[#3d84ff] to-brand font-medium text-white shadow-[0_10px_40px_-10px] shadow-brand/70 ring-1 ring-white/20 transition hover:brightness-110 ring-inset"
                    >
                      <MessageCircle className="h-4 w-4" /> Send via WhatsApp
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => sendEmail(e.currentTarget.form)}
                      className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line-strong px-6 font-medium text-fg transition hover:border-brand/50"
                    >
                      <Mail className="h-4 w-4" /> Email instead
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, ...props }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-muted">{label}</span>
      <input
        {...props}
        className="h-12 w-full rounded-2xl border border-line-strong bg-surface/60 px-4 text-fg placeholder:text-subtle focus:border-brand focus:ring-2 focus:ring-brand/30 focus:outline-none"
      />
    </label>
  );
}

function ContactRow({ icon: Icon, label, value, href }: { icon: typeof Mail; label: string; value: string; href: string }) {
  return (
    <a
      href={href}
      className="group flex items-center gap-4 rounded-2xl border border-line bg-surface/40 p-4 transition hover:border-brand/40 hover:bg-surface/70"
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand/15 text-brand-2 transition group-hover:bg-brand group-hover:text-white">
        <Icon className="h-5 w-5" />
      </span>
      <span className="leading-tight">
        <span className="block text-xs text-subtle">{label}</span>
        <span className="mt-0.5 block font-medium">{value}</span>
      </span>
      <ArrowRight className="ml-auto h-4 w-4 text-subtle transition group-hover:translate-x-1 group-hover:text-fg" />
    </a>
  );
}
