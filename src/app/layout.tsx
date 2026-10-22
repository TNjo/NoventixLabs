import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Sora } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { MotionProvider } from "@/components/motion-provider";
import { Navbar } from "@/components/layout/navbar";
import { site } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
const sora = Sora({ variable: "--font-sora", subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "NoventixLabs: Automation, Web & Mobile Development, Social Media Marketing",
    template: "%s · NoventixLabs",
  },
  description: site.description,
  keywords: [
    "NoventixLabs",
    "business automation Sri Lanka",
    "web development Sri Lanka",
    "web application development",
    "mobile app development",
    "social media marketing",
    "AI automation",
    "Next.js agency",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "NoventixLabs: Automate · Build · Grow",
    description: site.description,
    url: site.url,
  },
  twitter: { card: "summary_large_image", title: "NoventixLabs: Automate · Build · Grow", description: site.description },
};

export const viewport: Viewport = {
  themeColor: "#04060f",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${sora.variable} antialiased`}>
      <body className="min-h-screen overflow-x-clip">
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-fg px-4 py-2 text-ink focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          Skip to content
        </a>
        <MotionProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
