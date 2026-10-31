import type { Metadata } from "next";
import { ClientMap } from "@/components/about/ClientMap";
import { LogoMarquee } from "@/components/sections/Home";
import { JsonLd } from "@/components/seo/JsonLd";
import { worldData } from "@/components/world/data";
import { WorldChapters, WorldCta, WorldIntro, WorldManifest, WorldStrip, WorldWall } from "@/components/world/World";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { getDict } from "@/lib/dict";
import { localize } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { abs, breadcrumbLd, buildMetadata, orgId } from "@/lib/seo";

type P = { params: { lang: Locale } };

function meta(locale: Locale) {
  const s = worldData(locale).stats;
  const nl = locale === "nl";
  return {
    title: nl ? "World of M7 | Showreels en werk in beweging | M7" : "World of M7 | Showreels and work in motion | M7",
    description: nl
      ? `Stap in de wereld van M7: een scrollende reis langs showreels van ${s.cases} cases, van branding en websites tot apps en content, voor klanten in ${s.countries} landen.`
      : `Step into the world of M7: a scrolling journey through showreels of ${s.cases} cases, from branding and websites to apps and content, for clients in ${s.countries} countries.`,
  };
}

export function generateMetadata({ params }: P): Metadata {
  return buildMetadata({ locale: params.lang, path: paths.world, ...meta(params.lang) });
}

/**
 * World of M7: schermvullende, scrollgestuurde ervaring met showreels van het werk.
 * Opening (showreel + "Welcome to the world of M7."), manifest, horizontale reel-strip,
 * hoofdstukken per discipline, projectwand, klantlogo's, de klantenkaart en een afsluitende CTA.
 */
export default function WorldPage({ params }: P) {
  const locale = params.lang;
  const d = getDict(locale);
  const data = worldData(locale);
  const { title, description } = meta(locale);
  const url = abs(localize(paths.world, locale));

  return (
    <>
      <WorldIntro locale={locale} data={data} />
      <WorldManifest locale={locale} data={data} />
      <WorldStrip locale={locale} data={data} />
      <WorldChapters locale={locale} data={data} />
      <WorldWall locale={locale} data={data} />
      <div className="wl">
        <LogoMarquee />
      </div>
      <ClientMap locale={locale} variant="home" />
      <WorldCta locale={locale} />
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "@id": `${url}#webpage`,
            url,
            name: title,
            description,
            inLanguage: locale === "nl" ? "nl-NL" : "en-US",
            isPartOf: { "@id": `${site.url}/#website` },
            about: { "@id": orgId },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: data.shown.length,
              itemListElement: data.shown.map((it, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: it.name,
                url: abs(localize(it.path, locale)),
              })),
            },
          },
          breadcrumbLd(
            [
              { name: d.nav.home, path: "/" },
              { name: d.nav.world, path: paths.world },
            ],
            locale,
          ),
        ]}
      />
    </>
  );
}
