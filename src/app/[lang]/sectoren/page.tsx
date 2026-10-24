import type { Metadata } from "next";
import { LevelUp } from "@/components/sections/Home";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectorCard } from "@/components/ui/Cards";
import type { Locale } from "@/content/types";
import { allSectors } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, itemListLd } from "@/lib/seo";

type P = { params: { lang: Locale } };

export function generateMetadata({ params }: P): Metadata {
  const nl = params.lang === "nl";
  return buildMetadata({
    locale: params.lang,
    path: paths.sectors,
    title: nl ? "Sectoren | Branding, websites & software per branche | M7" : "Sectors | Branding, websites & software by industry | M7",
    description: nl
      ? "M7 kent de digitale uitdagingen van jouw branche: automotive, sport & media, tech, e-commerce, zakelijke dienstverlening, bouw & vastgoed en meer."
      : "M7 knows the digital challenges of your industry: automotive, sports & media, tech, e-commerce, business services, construction & real estate and more.",
  });
}

export default function SectorsPage({ params }: P) {
  const locale = params.lang;
  const d = getDict(locale);
  const list = allSectors();
  return (
    <>
      <PageHero
        locale={locale}
        crumbs={[
          { name: d.nav.home, path: "/" },
          { name: d.nav.sectors, path: paths.sectors },
        ]}
        crumbsLabel={d.misc.breadcrumbs}
        kicker={d.nav.sectors}
        title={[{ t: "We speak " }, { t: "your industry.", c: "g-shop" }]}
        lead={
          locale === "nl"
            ? "Elke branche heeft eigen klanten, regels en kansen. Kies je sector en zie welke diensten, toepassingen en cases bij jou passen."
            : "Every industry has its own customers, rules and opportunities. Pick your sector and see which services, applications and cases fit you."
        }
      />
      <section className="section section--tight">
        <div className="container">
          <div className="sector-grid" data-stagger="">
            {list.map((s, i) => (
              <SectorCard key={s.slug} s={s} locale={locale} index={i} />
            ))}
          </div>
        </div>
      </section>
      <LevelUp locale={locale} />
      <JsonLd data={itemListLd(list.map((s) => ({ name: tr(s.title, locale), path: paths.sector(s) })), locale)} />
    </>
  );
}
