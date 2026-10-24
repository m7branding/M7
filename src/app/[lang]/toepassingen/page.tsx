import type { Metadata } from "next";
import { TLink } from "@/components/motion/TLink";
import { LevelUp } from "@/components/sections/Home";
import { PageHero } from "@/components/sections/PageHero";
import { ApplicationsExplorer } from "@/components/sections/ApplicationsExplorer";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/content/types";
import { allApplications, allServices } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, itemListLd } from "@/lib/seo";

type P = { params: { lang: Locale } };

export function generateMetadata({ params }: P): Metadata {
  const nl = params.lang === "nl";
  return buildMetadata({
    locale: params.lang,
    path: paths.applications,
    title: nl ? "Alle toepassingen | Wat M7 voor je maakt" : "All applications | What M7 builds for you",
    description: nl
      ? "Van logo ontwerp en Webflow-websites tot klantportalen, AI-agents en productconfigurators: alle toepassingen van M7 op één plek, per dienst."
      : "From logo design and Webflow websites to client portals, AI agents and product configurators: every M7 application in one place, by service.",
  });
}

export default function ApplicationsPage({ params }: P) {
  const locale = params.lang;
  const d = getDict(locale);
  const apps = allApplications();
  const groups = allServices().map((s) => ({
    slug: s.slug,
    title: tr(s.title, locale),
    short: tr(s.short, locale),
    color: s.color,
    href: paths.service(s),
    apps: apps
      .filter((a) => a.service === s.slug)
      .map((a) => ({ slug: a.slug, title: tr(a.title, locale), summary: tr(a.summary, locale), href: paths.application(a) })),
  }));

  return (
    <>
      <PageHero
        locale={locale}
        crumbs={[
          { name: d.nav.home, path: "/" },
          { name: d.nav.applications, path: paths.applications },
        ]}
        crumbsLabel={d.misc.breadcrumbs}
        kicker={`${apps.length} ${d.nav.applications.toLowerCase()}`}
        title={[{ t: "What can we " }, { t: "build", c: "g-stars" }, { t: " for you?" }]}
        lead={
          locale === "nl"
            ? "Elke toepassing hangt onder een dienst en is gekoppeld aan cases, tools en sectoren. Zoek, filter en ontdek."
            : "Every application belongs to a service and is linked to cases, tools and sectors. Search, filter and discover."
        }
      />
      <section className="section section--tight">
        <div className="container">
          <ApplicationsExplorer
            groups={groups}
            labels={{ all: d.cases.filterAll, search: locale === "nl" ? "Zoek een toepassing…" : "Search an application…", none: locale === "nl" ? "Niets gevonden." : "Nothing found." }}
          />
          <p className="center" style={{ marginTop: 56 }}>
            <TLink href={paths.services} className="link-dash">
              {d.nav.allServices}
            </TLink>
          </p>
        </div>
      </section>
      <LevelUp locale={locale} />
      <JsonLd data={itemListLd(apps.map((a) => ({ name: tr(a.title, locale), path: paths.application(a) })), locale)} />
    </>
  );
}
