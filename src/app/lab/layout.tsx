import localFont from "next/font/local";
import "@/styles/tokens.css";
import "@/styles/base.css";
import "@/styles/motion.css";
import "@/styles/chrome.css";
import "@/styles/sections.css";
import "@/styles/mockups.css";
import "@/styles/pages.css";

const montserrat = localFont({
  src: "../../fonts/montserrat-latin-wght-normal.woff2",
  weight: "100 900",
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = { title: "M7 lab", robots: { index: false, follow: false } };

/** Interne werkplaats (alleen in development) om showcases los te bekijken. */
export default function LabLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={montserrat.variable}>
      <body>{children}</body>
    </html>
  );
}
