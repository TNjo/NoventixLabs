import { Marquee } from "@/components/ui/marquee";
import { SectionHeading } from "@/components/ui/section-heading";

const rowA = ["Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS", "Firebase", "PostgreSQL", "Supabase", "Vercel", "AWS", "Docker", "PWA"];
const rowB = ["n8n", "Make", "Zapier", "OpenAI", "Google Gemini", "Claude", "WhatsApp Cloud API", "Stripe", "PayHere", "React Native", "Flutter", "Meta Ads", "Google Ads", "TikTok Ads", "Figma"];

function Pill({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-2.5 rounded-2xl border border-line bg-surface/60 px-5 py-3 text-sm whitespace-nowrap text-muted backdrop-blur transition hover:border-brand/40 hover:text-fg">
      <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-brand to-brand-2" />
      {label}
    </span>
  );
}

export function Stack() {
  return (
    <section aria-label="Technology" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Our toolkit"
          title={
            <>
              Modern stack. <span className="text-gradient">Proven tools.</span>
            </>
          }
          description="We pick the right tool for your problem, not the trendiest one, and build on platforms that scale."
        />
      </div>
      <div className="mt-14 flex flex-col gap-4">
        <Marquee duration={50} gap="1rem">
          {rowA.map((t) => (
            <Pill key={t} label={t} />
          ))}
        </Marquee>
        <Marquee duration={55} gap="1rem" reverse>
          {rowB.map((t) => (
            <Pill key={t} label={t} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}
