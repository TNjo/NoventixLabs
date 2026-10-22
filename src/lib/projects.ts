export type ProjectCategory = "Web Apps" | "Websites" | "Mobile & PWA" | "Automation & AI";

export type Project = {
  slug: string;
  name: string;
  client: string;
  industry: string;
  kind: string;
  categories: ProjectCategory[];
  url?: string;
  image?: string;
  mobileImage?: string;
  accent: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  delivered: string[];
  stack?: string[];
  highlights: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "mandakini-connect",
    name: "Mandakini Connect",
    client: "Mandakini Micro Credit (Pvt) Ltd",
    industry: "Microfinance",
    kind: "Loan management platform · PWA",
    categories: ["Web Apps", "Mobile & PWA", "Automation & AI"],
    image: "/work/mandakini.jpg",
    mobileImage: "/work/mandakini-m.jpg",
    accent: "#14b8a6",
    summary:
      "A role-based loan management and offline field-collection system that replaced an entire paper workflow, without losing a single report the branches relied on.",
    challenge:
      "Collections were tracked on paper sheets, weekly summaries and a hand-kept loan master. Field officers often work without signal, and every rupee has to reconcile at day close.",
    solution:
      "We built an installable PWA with seven permission-scoped roles, a 9-step loan application with KYC, automatic repayment schedules, and offline collection that syncs without creating duplicates. The daily sheet, weekly summary, loan master and arrears reports update themselves from transactions.",
    features: [
      "7 roles from Super Admin to Field Collector, with self-approval blocked by policy",
      "6-step customer KYC and 9-step loan applications with guarantors and signatures",
      "Offline collection queue that syncs safely when the connection returns",
      "Receipts as PDF, print or share, straight from the collector's phone",
      "Cash reconciliation, day closing, and manager re-open with an audit reason",
      "Immutable payment records with a full reversal trail",
    ],
    delivered: ["Product strategy", "UX for field staff", "Web application", "PWA / offline", "Reporting automation"],
    stack: ["React 19", "TypeScript", "TanStack Start", "Tailwind CSS v4", "Firebase", "Cloud Functions", "IndexedDB"],
    highlights: [
      { label: "User roles", value: "7" },
      { label: "Paper reports replaced", value: "5+" },
      { label: "Works offline", value: "100%" },
    ],
  },
  {
    slug: "arayum",
    name: "Arayum.lk",
    client: "Arayum",
    industry: "Events & Celebrations",
    kind: "SaaS · Digital invitation platform",
    categories: ["Web Apps", "Websites"],
    url: "https://www.arayum.lk/",
    image: "/work/arayum.jpg",
    accent: "#9f1d4b",
    summary:
      "A Canva-style platform for animated digital invitations: weddings, birthdays, homecomings and more, sent on WhatsApp with RSVPs tracked automatically.",
    challenge:
      "Sri Lankan families still print and hand-deliver invitations. Digital options didn't support Sinhala and Tamil typography, and guests didn't want to install anything.",
    solution:
      "We designed a browser-based editor with animated templates and full Sinhala, Tamil and English font support. Each guest receives a personal link with no app or sign-up, and hosts watch RSVPs arrive in real time. A creator marketplace lets local designers sell their own work.",
    features: [
      "Drag-and-drop canvas editor with animated templates",
      "Trilingual typography: Sinhala, Tamil and English",
      "Personal guest links shared on WhatsApp",
      "Live RSVP tracking dashboard for hosts",
      "Creator marketplace for local designers",
      "Guided product tour for first-time users",
    ],
    delivered: ["Product design", "Web application", "Editor engineering", "Payments & pricing", "Onboarding UX"],
    highlights: [
      { label: "Languages", value: "3" },
      { label: "App installs for guests", value: "0" },
      { label: "Event types", value: "8+" },
    ],
  },
  {
    slug: "twelve10-river-cottages",
    name: "Twelve10 River Cottages",
    client: "Twelve10 Cottage",
    industry: "Hospitality",
    kind: "Booking website",
    categories: ["Websites", "Web Apps"],
    url: "https://www.twelve10rivercottage.com/",
    image: "/work/twelve10.jpg",
    accent: "#d4a72c",
    summary:
      "A cinematic booking experience for a luxury eco-retreat on the banks of the Kirindi Oya, with private-pool cottages, packages and a live availability calendar.",
    challenge:
      "The retreat depended on third-party listings and phone calls. It needed a brand-led site that sells the experience and takes direct bookings.",
    solution:
      "We built an immersive, photography-first website with cottage pages, packages, a public availability calendar, guest sign-in and WhatsApp chat. Guests can see what's free and book in a few taps.",
    features: [
      "Direct booking with availability calendar",
      "Cottage and package showcases",
      "Guest accounts and sign-in",
      "Restaurant and amenities storytelling",
      "WhatsApp concierge chat",
      "Mobile-first, image-optimised performance",
    ],
    delivered: ["Brand-led web design", "Booking system", "Content & photography direction", "SEO"],
    highlights: [
      { label: "Luxury cottages", value: "4" },
      { label: "Booking flow", value: "Direct" },
      { label: "River view", value: "100%" },
    ],
  },
  {
    slug: "burjcode",
    name: "Burjcode",
    client: "Burjcode",
    industry: "Smart Business Cards",
    kind: "NFC digital profile platform",
    categories: ["Web Apps", "Websites"],
    url: "https://www.burjcodetech.com/",
    image: "/work/burjcode.jpg",
    accent: "#e0b44c",
    summary:
      "NFC digital profile cards: tap a card on any phone and a professional profile opens instantly. No app, no paper, nothing to reprint.",
    challenge:
      "Paper business cards get lost and go out of date. Burjcode needed a premium brand site and a profile system that works on every phone.",
    solution:
      "We built a luxurious, dark-gold marketing site and the digital profile platform behind the cards. Contacts can be saved with one click, and profiles can be updated at any time without printing a new card.",
    features: [
      "Tap-to-share NFC and QR profile links",
      "Instant browser profile with no app required",
      "One-click save to contacts",
      "Editable profiles with no reprinting",
      "Pricing, demo and ordering flow",
      "Light and dark themes",
    ],
    delivered: ["Brand & UI design", "Marketing website", "Profile platform", "NFC integration"],
    highlights: [
      { label: "Tap to profile", value: "<1s" },
      { label: "Apps needed", value: "0" },
      { label: "Paper saved", value: "∞" },
    ],
  },
  {
    slug: "lions-306-d8",
    name: "Lions International 306 D8",
    client: "Lions International District 306 D8, Sri Lanka",
    industry: "Non-profit",
    kind: "District website & member portal",
    categories: ["Websites", "Web Apps"],
    url: "https://www.lionsinternational306d8.org/",
    image: "/work/lions.jpg",
    accent: "#f5c518",
    summary:
      "The digital home for 69 Lions clubs and nearly 1,500 members, covering leadership, projects, awards, events, downloads, a district contest and a members' portal.",
    challenge:
      "District information was scattered across social posts and documents. Members needed one trustworthy place for events, resources and recognition.",
    solution:
      "We created a bold, ceremonial design system around the Lions identity, with structured sections for governors, projects, awards, galleries and a calendar, plus a Lion Portal and a district contest module.",
    features: [
      "Leadership and governor profiles",
      "Projects, awards and media gallery",
      "District calendar and downloads centre",
      "District contest module",
      "Lion Portal for members",
      "Video storytelling",
    ],
    delivered: ["UI/UX design", "Website development", "Member portal", "Content structure"],
    highlights: [
      { label: "Clubs united", value: "69" },
      { label: "Members served", value: "1,494" },
      { label: "Lionistic year", value: "26/27" },
    ],
  },
  {
    slug: "anvil-lanka-travels",
    name: "Anvil Lanka Travels",
    client: "Anvil Lanka Travels",
    industry: "Travel & Tourism",
    kind: "Tour operator website",
    categories: ["Websites"],
    url: "https://www.anvillankatravels.com/",
    image: "/work/anvil.jpg",
    accent: "#f97316",
    summary:
      "A cinematic, multilingual travel site that turns curious visitors into tailor-made Sri Lanka itineraries through WhatsApp-first trip planning.",
    challenge:
      "International travellers compare dozens of operators. Anvil needed to stand out, earn trust quickly and make enquiries effortless.",
    solution:
      "We built a full-bleed visual story of the island with tour and day-tour catalogues, traveller memories, reviews, a tailor-made trip builder and a language switcher, all leading to WhatsApp or an enquiry form.",
    features: [
      "Tour and day-tour catalogues",
      "Tailor-made trip request flow",
      "Multilingual interface",
      "Traveller memories and reviews",
      "WhatsApp-first enquiries",
      "SEO for destination searches",
    ],
    delivered: ["Web design", "Website development", "Multilingual setup", "SEO"],
    highlights: [
      { label: "Happy travellers", value: "5,000+" },
      { label: "Destinations", value: "50+" },
      { label: "Satisfaction", value: "98%" },
    ],
  },
  {
    slug: "subha-siri-mangala-piyasa",
    name: "Subha Siri Mangala Piyasa",
    client: "Subha Siri",
    industry: "Matrimony",
    kind: "Marriage proposal platform",
    categories: ["Web Apps", "Websites"],
    url: "https://www.subhasiri.lk/",
    image: "/work/subhasiri.jpg",
    accent: "#b91c3c",
    summary:
      "A bilingual Sinhala and English matrimonial platform where families register, browse verified proposals and connect, wrapped in a warm, culturally rooted design.",
    challenge:
      "Traditional proposal services ran through newspapers and brokers. Families wanted something private, trustworthy and easy to use in Sinhala.",
    solution:
      "We designed a culturally rich interface with a Sinhala-first language picker, member registration, proposal listings with privacy controls, subscription packages and member messaging.",
    features: [
      "Sinhala-first bilingual experience",
      "Member registration and profiles",
      "Proposal browsing with privacy controls",
      "Subscription packages",
      "Member messaging",
      "WhatsApp support",
    ],
    delivered: ["UI/UX design", "Web platform", "Membership & payments", "Localisation"],
    highlights: [
      { label: "Languages", value: "2" },
      { label: "Membership", value: "Packages" },
      { label: "Privacy", value: "First" },
    ],
  },
  {
    slug: "nk-rice-daily",
    name: "NK Rice · Daily Prices",
    client: "NK Rice Mill",
    industry: "Agriculture & Market Data",
    kind: "AI-automated price tracker",
    categories: ["Automation & AI", "Web Apps"],
    image: "/work/ricelanka.jpg",
    mobileImage: "/work/ricelanka-m.jpg",
    accent: "#84cc16",
    summary:
      "A bilingual rice price tracker that updates itself. Every evening an AI pipeline reads the Central Bank's market PDFs and publishes fresh prices without anyone touching it.",
    challenge:
      "Daily commodity prices are published as PDFs. Copying them by hand every day was slow, error-prone and easy to forget.",
    solution:
      "We automated the whole loop. A scheduled job downloads the latest CBSL report, Google Gemini extracts every price, and the site redeploys with retail and wholesale prices by market and day-on-day changes, in Sinhala and English.",
    features: [
      "Scheduled daily pipeline (6 PM Sri Lanka time)",
      "Gemini AI extraction from government PDFs",
      "Automatic rebuild and deployment",
      "Prices by market: Pettah, Dambulla, Narahenpita",
      "Day-on-day change indicators",
      "Sinhala and English interface",
    ],
    delivered: ["AI automation", "Data pipeline", "Web application", "CI/CD"],
    stack: ["React", "TypeScript", "Vite", "Google Gemini", "GitHub Actions", "Tailwind CSS"],
    highlights: [
      { label: "Manual work", value: "0 min" },
      { label: "Updates", value: "Daily" },
      { label: "Running cost", value: "Free tier" },
    ],
  },
  {
    slug: "nk-rice-mill-rewards",
    name: "NK Rice Mill Rewards",
    client: "NK Rice Mill",
    industry: "Agriculture",
    kind: "Loyalty PWA",
    categories: ["Mobile & PWA", "Web Apps"],
    image: "/work/nkrice.jpg",
    mobileImage: "/work/nkrice-m.jpg",
    accent: "#16a34a",
    summary:
      "A wallet-style loyalty app for a rural rice mill. Farmers grind paddy, earn points per kilo and redeem rewards, all from their phones.",
    challenge:
      "Loyal customers had no reason to choose the mill over the next one, and the mill had no record of who its best customers were.",
    solution:
      "We built a mobile-first PWA inspired by Apple Wallet and Starbucks Rewards, with separate customer and staff systems, configurable pricing and reward rules, live opening hours and an admin dashboard with analytics.",
    features: [
      "Customer wallet with points balance and history",
      "Points earned automatically per kilo ground",
      "Redemptions from 50 points",
      "Admin-configurable price and reward rules",
      "Live open and closed status with hours",
      "Installable on any phone",
    ],
    delivered: ["Product design", "Mobile PWA", "Admin dashboard", "Firebase backend"],
    stack: ["React", "TypeScript", "TanStack", "Firebase", "Tailwind CSS", "Recharts"],
    highlights: [
      { label: "Per kilo", value: "Rs.4" },
      { label: "Redeem from", value: "50 pts" },
      { label: "Installable", value: "PWA" },
    ],
  },
  {
    slug: "ambrea-cosmetics",
    name: "Ambréa Cosmetics",
    client: "Ambréa",
    industry: "Beauty & Cosmetics",
    kind: "Brand website",
    categories: ["Websites"],
    url: "https://ambréacosmetics.com",
    accent: "#e8a0a8",
    summary:
      "An elegant brand presence for a cosmetics label: product storytelling, collections and a refined visual identity built to convert.",
    challenge:
      "A growing beauty brand needed a digital home that felt as premium as its products and worked well with social campaigns.",
    solution:
      "We designed a soft, editorial website with product collections, brand story and social-ready landing sections, tuned for mobile shoppers arriving from Instagram and Facebook.",
    features: [
      "Editorial product storytelling",
      "Collections and product highlights",
      "Social campaign landing sections",
      "Mobile-first shopping journey",
    ],
    delivered: ["Web design", "Website development", "Social media alignment"],
    highlights: [
      { label: "Mobile-first", value: "Yes" },
      { label: "Social ready", value: "Yes" },
      { label: "Brand feel", value: "Premium" },
    ],
  },
];

export const projectCategories: ("All" | ProjectCategory)[] = [
  "All",
  "Web Apps",
  "Websites",
  "Mobile & PWA",
  "Automation & AI",
];

/** String-based so IDN domains (ambréa…) keep their accents instead of punycode. */
export function displayHost(url: string) {
  return url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
