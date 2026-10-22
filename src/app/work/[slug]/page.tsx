import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Lock } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/button";
import { PhoneFrame } from "@/components/ui/frames";
import { Reveal } from "@/components/ui/reveal";
import { Eyebrow } from "@/components/ui/section-heading";
import { ProjectVisual } from "@/components/sections/work";
import { displayHost, getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) return {};
  return {
    title: `${p.name}: ${p.kind}`,
    description: p.summary,
    openGraph: { title: `${p.name} · NoventixLabs case study`, description: p.summary, images: p.image ? [p.image] : undefined },
  };
}

export default async function CaseStudy({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const p = getProject(slug);
  if (!p) notFound();

  const index = projects.findIndex((x) => x.slug === p.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="relative">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[50rem] overflow-hidden">
        <div className="absolute inset-0 bg-grid mask-radial opacity-60" />
        <div className="absolute top-[-10rem] left-1/2 h-[36rem] w-[56rem] -translate-x-1/2 rounded-full opacity-30 blur-[140px]" style={{ background: p.accent }} />
        <div className="absolute top-0 right-0 h-[30rem] w-[30rem] rounded-full bg-brand/20 blur-[140px]" />
      </div>

      <header className="mx-auto max-w-6xl px-6 pt-36 sm:pt-44">
        <Link href="/#work" className="group inline-flex items-center gap-2 text-sm text-muted hover:text-fg">
          <ArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" /> All work
        </Link>
        <Reveal className="mt-8">
          <Eyebrow>{p.industry}</Eyebrow>
          <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.02] font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {p.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">{p.summary}</p>
          <div className="mt-9 flex flex-wrap items-center gap-3">
            {p.url ? (
              <ButtonLink href={p.url} target="_blank" rel="noreferrer">
                Visit {displayHost(p.url)} <ArrowUpRight className="h-4 w-4" />
              </ButtonLink>
            ) : (
              <span className="inline-flex h-12 items-center gap-2 rounded-full border border-line-strong bg-surface/60 px-5 text-sm text-muted">
                <Lock className="h-4 w-4 text-brand-2" /> Private client platform, shown with permission
              </span>
            )}
            <ButtonLink href="/#contact" variant="secondary">
              Build something similar
            </ButtonLink>
          </div>
        </Reveal>
      </header>

      <Reveal className="mx-auto mt-16 max-w-6xl px-6" y={40}>
        <div className="group relative">
          <div aria-hidden className="absolute -inset-8 -z-10 rounded-[3rem] opacity-25 blur-[80px]" style={{ background: p.accent }} />
          <div className="overflow-hidden rounded-b-2xl border-b border-line-strong">
            <ProjectVisual project={{ ...p, mobileImage: undefined }} large />
          </div>
          {p.mobileImage && (
            <div className="absolute -right-2 -bottom-10 hidden w-[200px] md:block lg:-right-8 lg:w-[230px]">
              <PhoneFrame>
                <Image src={p.mobileImage} alt={`${p.name} on mobile`} width={390} height={844} className="h-auto w-full" />
              </PhoneFrame>
            </div>
          )}
        </div>
      </Reveal>

      <section className="mx-auto mt-24 max-w-6xl px-6">
        <dl className="grid grid-cols-1 divide-y divide-line rounded-3xl border border-line bg-surface/40 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {p.highlights.map((h) => (
            <div key={h.label} className="p-8">
              <dt className="text-sm text-subtle">{h.label}</dt>
              <dd className="mt-2 font-display text-4xl font-semibold tracking-tight" style={{ color: p.accent }}>
                {h.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto mt-24 grid max-w-6xl gap-14 px-6 lg:grid-cols-[1fr_20rem]">
        <div className="space-y-14">
          <Reveal>
            <h2 className="font-mono text-xs tracking-[0.25em] text-brand-2 uppercase">The challenge</h2>
            <p className="mt-4 font-display text-2xl leading-snug text-balance sm:text-3xl">{p.challenge}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-mono text-xs tracking-[0.25em] text-brand-2 uppercase">Our solution</h2>
            <p className="mt-4 text-lg leading-relaxed text-muted">{p.solution}</p>
          </Reveal>
          <Reveal>
            <h2 className="font-mono text-xs tracking-[0.25em] text-brand-2 uppercase">What we built</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3 rounded-2xl border border-line bg-surface/40 p-4 text-sm leading-relaxed">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full" style={{ background: `${p.accent}33`, color: p.accent }}>
                    <Check className="h-3 w-3" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <aside className="space-y-8 lg:sticky lg:top-32 lg:self-start">
          <div className="rounded-3xl border border-line bg-surface/40 p-6">
            <Meta label="Client" value={p.client} />
            <Meta label="Industry" value={p.industry} />
            <Meta label="Type" value={p.kind} />
            <div className="pt-4">
              <p className="text-xs text-subtle">Services</p>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {p.delivered.map((d) => (
                  <span key={d} className="rounded-full border border-line-strong px-2.5 py-1 text-xs text-muted">
                    {d}
                  </span>
                ))}
              </div>
            </div>
            {p.stack && (
              <div className="pt-5">
                <p className="text-xs text-subtle">Stack</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="rounded-full bg-brand/10 px-2.5 py-1 font-mono text-[0.7rem] text-brand-2">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </aside>
      </section>

      <section className="mx-auto mt-28 max-w-6xl px-6 pb-28">
        <Link
          href={`/work/${next.slug}`}
          className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-[2rem] border border-line bg-linear-to-br from-surface/80 to-ink-2 p-8 transition hover:border-line-strong sm:flex-row sm:items-center sm:p-12"
        >
          <div aria-hidden className="absolute -right-20 -bottom-20 h-72 w-72 rounded-full opacity-20 blur-[80px] transition group-hover:opacity-40" style={{ background: next.accent }} />
          <div className="relative">
            <p className="font-mono text-xs tracking-[0.25em] text-subtle uppercase">Next project</p>
            <p className="mt-3 font-display text-3xl font-semibold tracking-tight sm:text-5xl">{next.name}</p>
            <p className="mt-2 text-muted">{next.kind}</p>
          </div>
          <span className="relative grid h-16 w-16 shrink-0 place-items-center rounded-full border border-line-strong transition group-hover:border-transparent group-hover:bg-fg group-hover:text-ink">
            <ArrowRight className="h-6 w-6 transition group-hover:translate-x-0.5" />
          </span>
        </Link>
      </section>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-line py-4 first:pt-0">
      <span className="text-xs text-subtle">{label}</span>
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}
