import type { Metadata } from "next";
import { MediaHero } from "@/components/hero/MediaHero";
import { IntakeCta } from "@/components/overlay/OverlayButton";
import { CasesFilter } from "@/components/sections/CasesFilter";
import { LevelUp } from "@/components/sections/Home";
import { LogoWall } from "@/components/sections/LogoWall";
import { JsonLd } from "@/components/seo/JsonLd";
import { CaseCard } from "@/components/ui/CaseCard";
import type { Case, Locale } from "@/content/types";
import { allCases, allSectors, allServices } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, itemListLd } from "@/lib/seo";
import "@/styles/overview.css";

type P = { params: { lang: Locale } };
/** Zoveel cases staan er eerst; de rest komt met "Toon meer" (CasesFilter). */
const PAGE = 12;

export function generateMetadata({ params }: P): Metadata {
  const nl = params.lang === "nl";
  return buildMetadata({
    locale: params.lang,
    path: paths.cases,
    title: nl ? "Cases | Merken, websites, apps & campagnes | M7" : "Cases | Brands, websites, apps & campaigns | M7",
    description: nl
      ? "Bekijk het werk van M7: branding, websites, web-apps, configurators en campagnes voor onder meer TeamTV, Repairlab, Sami, Monvy en Jurgh."
      : "See M7's work: branding, websites, web apps, configurators and campaigns for TeamTV, Repairlab, Sami, Monvy, Jurgh and more.",
  });
}

export default function CasesPage({ params }: P) {
  const locale = params.lang;
  const d = getDict(locale);
  // Volgorde in het overzicht: uitgelicht, dan met beeld, dan zonder beeld (gegenereerde cover)
  const rank = (c: Case) => (c.featured ? 0 : c.cover ? 1 : 2);
  const cases = [...allCases()].sort((a, b) => rank(a) - rank(b));
  const usedServices = allServices().filter((s) => cases.some((c) => c.services.includes(s.slug)));
  const usedSectors = allSectors().filter((s) => cases.some((c) => c.sector === s.slug));

  return (
    <>
      <MediaHero
        locale={locale}
        page="cases"
        crumbs={[
          { name: d.nav.home, path: "/" },
          { name: d.nav.cases, path: paths.cases },
        ]}
        crumbsLabel={d.misc.breadcrumbs}
        meta={[
          { icon: "star", text: `${cases.length} cases` },
          { text: `${usedSectors.length} ${d.nav.sectors.toLowerCase()}` },
        ]}
        title={[{ t: "A grasp of our " }, { t: "masterpieces.", c: "g-stars" }]}
        lead={d.cases.intro}
      >
        <IntakeCta>{d.cta.launch}</IntakeCta>
        <a href="#alle-cases" className="link-dash">
          {locale === "nl" ? "Bekijk het werk" : "See the work"}
        </a>
      </MediaHero>
      <section className="section section--tight ov-body" id="alle-cases" aria-label={d.nav.allCases}>
        <div className="container">
          <CasesFilter
            services={usedServices.map((s) => ({ slug: s.slug, label: tr(s.short, locale), color: s.color }))}
            sectors={usedSectors.map((s) => ({ slug: s.slug, label: tr(s.title, locale) }))}
            labels={{
              all: d.cases.filterAll,
              service: d.cases.filterService,
              sector: d.cases.filterSector,
              none: d.service.noCases,
              more: locale === "nl" ? "Toon meer cases" : "Show more cases",
            }}
            pageSize={PAGE}
          >
            <div className="masonry masonry--cases">
              {cases.map((c, i) => (
                <div
                  key={c.slug}
                  data-case=""
                  data-services={c.services.join(" ")}
                  data-sector={c.sector}
                  data-more={i >= PAGE ? "" : undefined}
                >
                  <CaseCard c={c} locale={locale} label={d.cta.viewCase} index={i} />
                </div>
              ))}
            </div>
          </CasesFilter>
        </div>
      </section>
      <LogoWall locale={locale} />
      <LevelUp locale={locale} />
      <JsonLd data={itemListLd(cases.map((c) => ({ name: `${c.client}: ${tr(c.title, locale)}`, path: paths.case(c) })), locale)} />
    </>
  );
}
