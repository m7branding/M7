import type { Metadata } from "next";
import { MediaHero } from "@/components/hero/MediaHero";
import { IntakeCta } from "@/components/overlay/OverlayButton";
import { LevelUp } from "@/components/sections/Home";
import { JsonLd } from "@/components/seo/JsonLd";
import { SectorCard } from "@/components/ui/Cards";
import type { Locale } from "@/content/types";
import { allSectors } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, itemListLd } from "@/lib/seo";
import "@/styles/overview.css";

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
      <MediaHero
        locale={locale}
        page="sectors"
        crumbs={[
          { name: d.nav.home, path: "/" },
          { name: d.nav.sectors, path: paths.sectors },
        ]}
        crumbsLabel={d.misc.breadcrumbs}
        meta={[{ icon: "grid", text: `${list.length} ${d.nav.sectors.toLowerCase()}` }]}
        title={[{ t: "We speak " }, { t: "your industry.", c: "g-shop" }]}
        lead={
          locale === "nl"
            ? "Elke branche heeft eigen klanten, regels en kansen. Kies je sector en zie welke diensten, toepassingen en cases bij jou passen."
            : "Every industry has its own customers, rules and opportunities. Pick your sector and see which services, applications and cases fit you."
        }
      >
        <IntakeCta>{d.cta.launch}</IntakeCta>
        <a href="#alle-sectoren" className="link-dash">
          {locale === "nl" ? "Kies je sector" : "Pick your sector"}
        </a>
      </MediaHero>
      <section className="section section--tight ov-body" id="alle-sectoren" aria-label={d.nav.allSectors}>
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
