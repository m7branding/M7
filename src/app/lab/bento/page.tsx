import { notFound } from "next/navigation";
import { ServiceBento } from "@/components/sector/ServiceBento";
import { SectionHead } from "@/components/ui/Cards";
import type { Locale } from "@/content/types";
import { allSectors, getSector } from "@/lib/content";
import { tr } from "@/lib/i18n";
import "@/styles/tiles.css";

/**
 * Bento-lab (alleen development): /lab/bento?s=<sector-slug>&lang=en
 * Toont de dienstentegels (ServiceBento) van één sector, zoals onder "Hoe we helpen".
 * Zonder s: bouw-vastgoed-architectuur. s=all: alle sectoren onder elkaar.
 */
export default function BentoLab({ searchParams }: { searchParams: { s?: string; lang?: string } }) {
  if (process.env.NODE_ENV === "production") notFound();
  const locale: Locale = searchParams.lang === "en" ? "en" : "nl";
  const list = searchParams.s === "all" ? allSectors() : [getSector(searchParams.s ?? "bouw-vastgoed-architectuur")].filter(Boolean);
  if (!list.length) notFound();

  return (
    <main>
      <nav className="container" style={{ display: "flex", flexWrap: "wrap", gap: 8, paddingBlock: 20, fontSize: 12, opacity: 0.6 }}>
        {allSectors().map((s) => (
          <a key={s.slug} href={`/lab/bento?s=${s.slug}`} style={{ padding: "4px 10px", borderRadius: 99, boxShadow: "inset 0 0 0 1px var(--line-2)" }}>
            {s.slug}
          </a>
        ))}
      </nav>
      {list.map((s) => (
        <section key={s!.slug} className="section" style={{ paddingBlock: 48 }} data-sector={s!.slug}>
          <div className="container">
            <SectionHead kicker={locale === "nl" ? `Relevante diensten · ${tr(s!.short, locale)}` : `Relevant services · ${tr(s!.short, locale)}`} title={locale === "nl" ? "Hoe we helpen." : "How we help."} />
            <ServiceBento sector={s!} locale={locale} />
          </div>
        </section>
      ))}
    </main>
  );
}
