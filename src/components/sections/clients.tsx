import { Marquee } from "@/components/ui/marquee";
import { projects } from "@/lib/projects";

export function Clients() {
  return (
    <section aria-label="Clients" className="relative border-y border-line bg-ink-2/50 py-10">
      <p className="mb-8 text-center font-mono text-xs tracking-[0.25em] text-subtle uppercase">
        Trusted by brands across Sri Lanka &amp; beyond
      </p>
      <Marquee duration={45} gap="3.5rem">
        {projects.map((p) => (
          <span key={p.slug} className="flex items-center gap-3 whitespace-nowrap text-muted/80 transition hover:text-fg">
            <span
              className="h-2.5 w-2.5 rotate-45 rounded-[3px]"
              style={{ background: p.accent, boxShadow: `0 0 14px ${p.accent}` }}
            />
            <span className="font-display text-xl font-semibold tracking-tight">{p.name}</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
