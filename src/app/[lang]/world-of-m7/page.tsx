import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/JsonLd";
import { worldData } from "@/components/world/data";
import { WorldScenes } from "@/components/world/World";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { getDict } from "@/lib/dict";
import { localize } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { abs, breadcrumbLd, buildMetadata, orgId } from "@/lib/seo";

type P = { params: { lang: Locale } };

function meta(locale: Locale) {
  const n = worldData(locale).stats.masterpieces;
  const nl = locale === "nl";
  return {
    title: nl ? "World of M7 | Onze masterpieces in beweging | M7" : "World of M7 | Our masterpieces in motion | M7",
    description: nl
      ? `Stap in de wereld van M7: onze ${n} masterpieces op hun mooiste momenten, van apps en een brandbook dat openslaat tot interacties en websites.`
      : `Step into the world of M7: our ${n} masterpieces at their finest moments, from apps and a brandbook that opens to interactions and websites.`,
  };
}

export function generateMetadata({ params }: P): Metadata {
  return buildMetadata({ locale: params.lang, path: paths.world, ...meta(params.lang) });
}

/**
 * World of M7: een scrollgestuurde reis langs M7's masterpieces (content/masterpieces.ts).
 * Opening ("Welcome to the world of M7", het emblem tekent zich), quotes in M7's eigen stem,
 * en per hoofdstuk het mooiste moment: apps, het brandbook, Eredivisietoppers, interactiefilms
 * en websites; dan alle masterpieces en een afsluitende CTA. Wat erin staat: components/world/data.ts.
 */
export default function WorldPage({ params }: P) {
  const locale = params.lang;
  const d = getDict(locale);
  const data = worldData(locale);
  const { title, description } = meta(locale);
  const url = abs(localize(paths.world, locale));

  return (
    <>
      <WorldScenes locale={locale} data={data} />
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
