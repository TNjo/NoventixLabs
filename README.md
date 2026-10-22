# NoventixLabs — Company Website

**Automate | Build | Grow.** The marketing site for [NoventixLabs](https://noventixlabs.com): automation & AI, website development, web applications, mobile apps, social media marketing and 24/7 support.

Built with **Next.js 16** (App Router, Cache Components), **React 19**, **Tailwind CSS v4**, **Motion** and **Lucide**.

## Run it

```sh
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start
```

## Where things live

| What | Where |
| --- | --- |
| Contact details, socials, nav | `src/lib/site.ts` |
| Portfolio / case studies | `src/lib/projects.ts` (screenshots in `public/work/`) |
| Services | `src/lib/services.ts` |
| Home page sections | `src/components/sections/` |
| Reusable UI (spotlight cards, marquee, frames…) | `src/components/ui/` |
| Brand mark (SVG) | `src/components/brand/logo.tsx`, `src/app/icon.svg` |
| Design tokens & animations | `src/app/globals.css` (`@theme`) |

Each project in `projects.ts` automatically gets a card in the Work section, a static case-study page at `/work/<slug>`, and an entry in `sitemap.xml`.

## Before going live

- Confirm the social media links in `src/lib/site.ts`.
- Add a screenshot for Ambréa Cosmetics (`image` in `projects.ts`) once the site is reachable.

The contact form needs no backend: it composes the enquiry and opens WhatsApp or the visitor's email app.
