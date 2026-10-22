export type Service = {
  id: string;
  short: string;
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "automation",
    short: "Automation & AI",
    title: "Business Automation & AI",
    description:
      "We find the repetitive work in your business and hand it to software: workflows, AI agents and integrations that run around the clock.",
    points: ["Workflow automation", "AI agents & chatbots", "WhatsApp & CRM integrations", "Document & data extraction", "Automated reporting"],
  },
  {
    id: "web",
    short: "Websites",
    title: "Website Development",
    description:
      "Fast, beautiful, search-optimised websites that tell your story and turn visitors into enquiries.",
    points: ["Brand-led UI/UX", "Next.js performance", "SEO & analytics", "Multilingual (සිං / த / EN)", "CMS & booking"],
  },
  {
    id: "webapps",
    short: "Web Applications",
    title: "Web Applications",
    description:
      "Custom platforms, dashboards and SaaS products, engineered for real operations, offline use and scale.",
    points: ["SaaS & portals", "Dashboards & reporting", "Role-based access", "Offline-first PWAs", "Payments & integrations"],
  },
  {
    id: "mobile",
    short: "Mobile Apps",
    title: "Mobile App Development",
    description:
      "iOS, Android and installable web apps that customers actually keep on their home screen.",
    points: ["iOS & Android", "Cross-platform builds", "Installable PWAs", "Push notifications", "App Store launch"],
  },
  {
    id: "social",
    short: "Social Media Marketing",
    title: "Social Media Marketing",
    description:
      "Content, campaigns and paid ads across Meta, TikTok and Google, measured on the numbers that matter to you.",
    points: ["Content strategy & creatives", "Meta / TikTok / Google ads", "Community management", "Analytics & reporting", "Landing pages"],
  },
  {
    id: "support",
    short: "24/7 Support",
    title: "24/7 Support & Care",
    description:
      "Launch is the beginning. We monitor, maintain and improve your product every day of the year.",
    points: ["24/7 monitoring", "Bug fixes & updates", "Hosting & security", "Content changes", "Monthly reports"],
  },
];
