"use client";

import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";
import { displayHost, projectCategories, projects, type Project } from "@/lib/projects";
import { cn } from "@/lib/utils";

export function Work() {
  const [filter, setFilter] = useState<(typeof projectCategories)[number]>("All");
  const visible = filter === "All" ? projects : projects.filter((p) => p.categories.includes(filter));

  return (
    <section id="work" className="relative overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="absolute top-40 left-1/2 -z-10 h-[40rem] w-[60rem] -translate-x-1/2 rounded-full bg-brand/10 blur-[140px]" />
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Products we&apos;ve <span className="text-gradient">shipped</span>, live and in the field.
            </>
          }
          description="Banks in the field, families planning weddings, travellers exploring the island and farmers earning rewards. Here's what we've built for them."
        />

        <div className="mt-12 flex justify-center">
          <div role="tablist" aria-label="Filter projects" className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-line bg-surface/60 p-1 backdrop-blur">
            {projectCategories.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={filter === c}
                onClick={() => setFilter(c)}
                className={cn(
                  "relative shrink-0 rounded-full px-4 py-2 text-sm whitespace-nowrap transition-colors",
                  filter === c ? "text-white" : "text-muted hover:text-fg",
                )}
              >
                {filter === c && (
                  <motion.span
                    layoutId="work-tab"
                    className="absolute inset-0 rounded-full bg-linear-to-r from-brand to-brand-2/80"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                  />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-12 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {visible.map((p, i) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.97 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={cn(i === 0 && filter === "All" && "md:col-span-2")}
              >
                <ProjectCard project={p} featured={i === 0 && filter === "All"} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function ProjectCard({ project: p, featured }: { project: Project; featured?: boolean }) {
  return (
    <Link
      href={`/work/${p.slug}`}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-3xl border border-line bg-linear-to-b from-surface/80 to-ink-2 transition-all duration-500 hover:-translate-y-1 hover:border-line-strong",
        featured && "lg:flex-row",
      )}
      style={{ ["--accent" as string]: p.accent }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 left-1/2 h-48 w-2/3 -translate-x-1/2 rounded-full opacity-0 blur-[80px] transition-opacity duration-700 group-hover:opacity-50"
        style={{ background: p.accent }}
      />

      <div className={cn("relative overflow-hidden p-4 pb-0 sm:p-5 sm:pb-0", featured && "lg:w-[62%] lg:p-6 lg:pr-0")}>
        <ProjectVisual project={p} />
      </div>

      <div className={cn("relative flex flex-1 flex-col p-6 sm:p-7", featured && "lg:justify-center lg:p-10")}>
        <div className="flex flex-wrap items-center gap-2 font-mono text-[0.68rem] tracking-wider text-subtle uppercase">
          <span style={{ color: p.accent }}>{p.industry}</span>
          <span>·</span>
          <span>{p.kind}</span>
        </div>
        <h3 className={cn("mt-3 font-display font-semibold tracking-tight", featured ? "text-3xl lg:text-4xl" : "text-2xl")}>
          {p.name}
        </h3>
        <p className={cn("mt-3 leading-relaxed text-muted", featured ? "text-base" : "line-clamp-3 text-sm")}>{p.summary}</p>

        {featured && (
          <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-line pt-6">
            {p.highlights.map((h) => (
              <div key={h.label}>
                <dt className="text-[0.7rem] text-subtle">{h.label}</dt>
                <dd className="mt-1 font-display text-2xl font-semibold">{h.value}</dd>
              </div>
            ))}
          </dl>
        )}

        <div className="mt-auto flex items-center justify-between pt-6">
          <div className="flex flex-wrap gap-1.5">
            {p.categories.slice(0, 2).map((c) => (
              <span key={c} className="rounded-full border border-line px-2.5 py-1 text-[0.68rem] text-muted">
                {c}
              </span>
            ))}
          </div>
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-line-strong transition-all duration-300 group-hover:border-transparent group-hover:bg-fg group-hover:text-ink">
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export function ProjectVisual({ project: p, large }: { project: Project; large?: boolean }) {
  const host = p.url ? displayHost(p.url) : "private client platform";
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-t-2xl border border-b-0 border-line-strong bg-ink-2">
        <div className="flex items-center gap-2 border-b border-line bg-surface/80 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
          <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
          <span className="h-2 w-2 rounded-full bg-[#28c840]" />
          <span className="mx-auto flex items-center gap-1.5 truncate rounded bg-ink/70 px-2.5 py-0.5 font-mono text-[0.62rem] text-muted">
            {!p.url && <Lock className="h-2.5 w-2.5" />}
            {host}
          </span>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden">
          {p.image ? (
            <Image
              src={p.image}
              alt={`${p.name}: ${p.kind} by NoventixLabs`}
              fill
              sizes={large ? "(min-width: 1024px) 1100px, 100vw" : "(min-width: 1024px) 700px, (min-width: 768px) 50vw, 100vw"}
              className="object-cover object-top transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
            />
          ) : (
            <BrandPlaceholder project={p} />
          )}
        </div>
      </div>
      {p.mobileImage && (
        <div className="absolute right-4 -bottom-0 hidden w-[22%] translate-y-4 rounded-[1.4rem] border border-line-strong bg-[#0f1736] p-1 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 sm:block">
          <div className="relative aspect-[390/844] overflow-hidden rounded-[1.1rem]">
            <Image src={p.mobileImage} alt="" fill sizes="200px" className="object-cover object-top" />
          </div>
        </div>
      )}
    </div>
  );
}

function BrandPlaceholder({ project: p }: { project: Project }) {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-3"
      style={{
        background: `radial-gradient(circle at 30% 20%, ${p.accent}55, transparent 55%), radial-gradient(circle at 80% 90%, #f5d0c5, transparent 50%), linear-gradient(135deg, #2a1a22, #4a2c36)`,
      }}
    >
      <span className="font-mono text-[0.65rem] tracking-[0.5em] text-white/60 uppercase">Beauty · Skincare</span>
      <span className="font-serif text-5xl text-white italic drop-shadow-lg sm:text-6xl">{p.name.split(" ")[0]}</span>
      <span className="h-px w-16 bg-white/40" />
      <span className="font-mono text-[0.65rem] tracking-[0.5em] text-white/60 uppercase">Cosmetics</span>
    </div>
  );
}
