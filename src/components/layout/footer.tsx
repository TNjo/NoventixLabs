import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/brand/logo";
import { projects } from "@/lib/projects";
import { services } from "@/lib/services";
import { site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-line bg-ink">
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand/60 to-transparent" />
      <div className="mx-auto max-w-6xl px-6 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="flex flex-col gap-5">
            <Logo showTagline />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              We design, build and automate digital products for ambitious businesses, then stay on call 24/7 to keep them running.
            </p>
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-xs text-emerald-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Support online 24/7
            </div>
          </div>

          <FooterCol title="Services">
            {services.map((s) => (
              <FooterLink key={s.id} href={`/#services`}>
                {s.short}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Work">
            {projects.slice(0, 6).map((p) => (
              <FooterLink key={p.slug} href={`/work/${p.slug}`}>
                {p.name}
              </FooterLink>
            ))}
          </FooterCol>

          <FooterCol title="Contact">
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 text-sm text-muted hover:text-fg">
              <Mail className="h-4 w-4 text-brand-2" /> {site.email}
            </a>
            <a href={whatsappLink()} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-muted hover:text-fg">
              <MessageCircle className="h-4 w-4 text-brand-2" /> WhatsApp {site.whatsapp.display}
            </a>
            <div className="flex items-start gap-2 text-sm text-muted">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-2" />
              <span className="flex flex-col gap-1">
                {site.phones.map((p) => (
                  <a key={p.tel} href={`tel:${p.tel}`} className="hover:text-fg">
                    {p.display}
                  </a>
                ))}
              </span>
            </div>
            <span className="flex items-center gap-2 text-sm text-muted">
              <MapPin className="h-4 w-4 text-brand-2" /> {site.location}
            </span>
            <div className="mt-2 flex gap-2">
              {Object.entries(site.socials).map(([name, href]) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-line-strong px-3 py-1.5 text-xs text-muted capitalize transition hover:border-brand/50 hover:text-fg"
                >
                  {name}
                </a>
              ))}
            </div>
          </FooterCol>
        </div>

        <div className="relative mt-20 select-none" aria-hidden>
          <p className="bg-linear-to-b from-white/[0.09] to-transparent bg-clip-text text-center font-display text-[13.5vw] leading-none font-bold tracking-tighter whitespace-nowrap text-transparent lg:text-[10rem]">
            NoventixLabs
          </p>
        </div>

        <div className="mt-6 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 text-xs text-subtle sm:flex-row">
          <p>© {site.name}. All rights reserved.</p>
          <p className="font-mono tracking-[0.3em] uppercase">{site.tagline}</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <h3 className="mb-1 font-mono text-xs tracking-[0.2em] text-subtle uppercase">{title}</h3>
      {children}
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="group inline-flex w-fit items-center gap-1 text-sm text-muted transition hover:text-fg">
      {children}
      <ArrowUpRight className="h-3 w-3 -translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100" />
    </Link>
  );
}
