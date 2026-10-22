"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const faqs = [
  {
    q: "How long does a project take?",
    a: "A marketing website typically takes 2–4 weeks. Web and mobile applications usually take 6–12 weeks, depending on scope. You'll get a clear timeline in your proposal and live preview links every week.",
  },
  {
    q: "How much does it cost?",
    a: "Every business is different, so we quote per project after a free discovery call. We offer fixed-price packages for websites and milestone-based pricing for larger platforms, with no surprise invoices.",
  },
  {
    q: "What does 24/7 support actually include?",
    a: "Continuous uptime and error monitoring, priority bug fixes, security updates, backups, hosting management and content changes. You can reach a real person on WhatsApp, phone or email any time, day or night.",
  },
  {
    q: "Can you automate our existing processes?",
    a: "Yes, that's our specialty. We map your current workflow, find the repetitive steps and connect your tools (WhatsApp, email, spreadsheets, CRMs, accounting) with automations and AI agents that run on their own.",
  },
  {
    q: "Do you build in Sinhala and Tamil?",
    a: "Absolutely. We've shipped products with Sinhala, Tamil and English interfaces, including proper typography, so you can reach every customer in their own language.",
  },
  {
    q: "Do we own the code and content?",
    a: "Yes. Once the project is complete, you own your code, designs, domain and content. We hand everything over with documentation.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-3xl px-6">
        <SectionHeading eyebrow="FAQ" title={<>Questions, <span className="text-gradient">answered.</span></>} />
        <div className="mt-14 divide-y divide-line rounded-3xl border border-line bg-surface/40">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-medium transition-colors hover:text-brand-2 sm:px-8 sm:py-6"
                  >
                    {f.q}
                    <span
                      className={cn(
                        "grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line-strong transition-all duration-300",
                        isOpen && "rotate-45 border-transparent bg-brand text-white",
                      )}
                    >
                      <Plus className="h-4 w-4" />
                    </span>
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 leading-relaxed text-muted sm:px-8">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
