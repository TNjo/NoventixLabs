// Central place for brand + contact details.
export const site = {
  name: "NoventixLabs",
  url: "https://noventixlabs.com",
  tagline: "Automate | Build | Grow",
  description:
    "NoventixLabs is a Sri Lankan product studio building automation systems, websites, web applications, mobile apps and social media growth engines — with 24/7 support.",
  email: "contact@noventixlabs.com",
  // `display` is the local format shown on the page; `tel` is international for dialling from abroad.
  phones: [
    { display: "076 565 7680", tel: "+94765657680" },
    { display: "070 315 9274", tel: "+94703159274" },
    { display: "076 805 5942", tel: "+94768055942" },
  ],
  // Digits only, international format (wa.me requirement).
  whatsapp: { display: "076 565 7680", number: "94765657680" },
  location: "Sri Lanka · Serving clients worldwide",
  socials: {
    linkedin: "https://www.linkedin.com/company/noventixlabs",
    facebook: "https://www.facebook.com/noventixlabs",
    instagram: "https://www.instagram.com/noventixlabs",
  },
} as const;

export const nav = [
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Process", href: "/#process" },
  { label: "Support", href: "/#support" },
  { label: "FAQ", href: "/#faq" },
] as const;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsapp.number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
