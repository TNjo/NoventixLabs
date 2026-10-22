// Central place for brand + contact details. Update these before going live.
export const site = {
  name: "NoventixLabs",
  url: "https://noventixlabs.com",
  tagline: "Automate | Build | Grow",
  description:
    "NoventixLabs is a Sri Lankan product studio building automation systems, websites, web applications, mobile apps and social media growth engines — with 24/7 support.",
  email: "hello@noventixlabs.com",
  // TODO: replace with the real business number (international format, digits only for WhatsApp).
  phone: "+94 70 000 0000",
  whatsapp: "94700000000",
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
  const base = `https://wa.me/${site.whatsapp}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
