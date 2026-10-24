import type { Metadata } from "next";
import { CasesFilter } from "@/components/sections/CasesFilter";
import { LevelUp } from "@/components/sections/Home";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { CaseCard } from "@/components/ui/CaseCard";
import type { Locale } from "@/content/types";
import { allCases, allSectors, allServices } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, itemListLd } from "@/lib/seo";

type P = { params: { lang: Locale } };

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
  const cases = allCases();
  const usedServices = allServices().filter((s) => cases.some((c) => c.services.includes(s.slug)));
  const usedSectors = allSectors().filter((s) => cases.some((c) => c.sector === s.slug));

  return (
    <>
      <PageHero
        locale={locale}
        crumbs={[
          { name: d.nav.home, path: "/" },
          { name: d.nav.cases, path: paths.cases },
        ]}
        crumbsLabel={d.misc.breadcrumbs}
        kicker={`${d.nav.cases} (${cases.length})`}
        title={[{ t: "A grasp of our " }, { t: "masterpieces.", c: "g-stars" }]}
        lead={d.cases.intro}
      />
      <section className="section section--tight">
        <div className="container">
          <CasesFilter
            services={usedServices.map((s) => ({ slug: s.slug, label: tr(s.short, locale), color: s.color }))}
            sectors={usedSectors.map((s) => ({ slug: s.slug, label: tr(s.title, locale) }))}
            labels={{ all: d.cases.filterAll, service: d.cases.filterService, sector: d.cases.filterSector, none: d.service.noCases }}
          >
            <div className="masonry masonry--cases">
              {cases.map((c, i) => (
                <div key={c.slug} data-case="" data-services={c.services.join(" ")} data-sector={c.sector}>
                  <CaseCard c={c} locale={locale} label={d.cta.viewCase} index={i} />
                </div>
              ))}
            </div>
          </CasesFilter>
        </div>
      </section>
      <LevelUp locale={locale} />
      <JsonLd data={itemListLd(cases.map((c) => ({ name: `${c.client}: ${tr(c.title, locale)}`, path: paths.case(c) })), locale)} />
    </>
  );
}
