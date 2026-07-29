import type { Metadata, Viewport } from "next";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  title: "IndexLink — turn company knowledge into visibility, conversion & action",
  description:
    "IndexLink gives your company a branded SEO/GEO hub on your own subdomain. AI researches opportunities, co-creates evidence-backed content with you, matches it to conversion funnels, and proposes approved outreach.",
  icons: { icon: "/brand/IL-Emblem-Dark.svg" },
};

export const viewport: Viewport = {
  themeColor: "#091225",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
