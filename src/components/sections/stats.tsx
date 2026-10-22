import { NumberTicker } from "@/components/ui/number-ticker";
import { Reveal } from "@/components/ui/reveal";

const stats = [
  { value: 10, suffix: "+", label: "Products launched", sub: "Websites, platforms & apps" },
  { value: 9, suffix: "", label: "Industries served", sub: "Finance to hospitality" },
  { value: 3, suffix: "", label: "Languages shipped", sub: "Sinhala · Tamil · English" },
  { value: 24, suffix: "/7", label: "Support coverage", sub: "Every day of the year" },
];

export function Stats() {
  return (
    <section aria-label="NoventixLabs in numbers" className="relative py-10">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] border border-line-strong bg-linear-to-br from-surface-2/90 via-surface/80 to-ink-2 p-px">
            <div aria-hidden className="absolute inset-0 bg-grid opacity-40" />
            <div aria-hidden className="absolute -top-20 left-1/4 h-60 w-1/2 rounded-full bg-brand/30 blur-[100px]" />
            <dl className="relative grid grid-cols-2 lg:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex flex-col gap-1 p-7 sm:p-10 ${i % 2 === 1 ? "border-l border-line" : ""} ${i > 1 ? "border-t border-line lg:border-t-0" : ""} ${i === 2 ? "lg:border-l" : ""}`}
                >
                  <dd className="order-1 font-display text-5xl font-semibold tracking-tight sm:text-6xl">
                    <NumberTicker value={s.value} suffix={s.suffix} className="text-gradient-soft" />
                  </dd>
                  <dt className="order-2 mt-2 text-sm font-medium text-fg">{s.label}</dt>
                  <span className="order-3 text-xs text-subtle">{s.sub}</span>
                </div>
              ))}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
