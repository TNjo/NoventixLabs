import { Clients } from "@/components/sections/clients";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { Process } from "@/components/sections/process";
import { Services } from "@/components/sections/services";
import { Stack } from "@/components/sections/stack";
import { Stats } from "@/components/sections/stats";
import { Support } from "@/components/sections/support";
import { Work } from "@/components/sections/work";
import { site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  logo: `${site.url}/brand/noventix-logo.png`,
  slogan: site.tagline,
  description: site.description,
  email: site.email,
  areaServed: "Worldwide",
  sameAs: Object.values(site.socials),
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Hero />
      <Clients />
      <Services />
      <Stats />
      <Work />
      <Process />
      <Support />
      <Stack />
      <Faq />
      <Contact />
    </>
  );
}
