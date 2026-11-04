import type { Locale, Sector } from "@/content/types";
import { audienceIndex, audiencesOf, segHash } from "@/lib/audience";
import { tr } from "@/lib/i18n";
import { Audience } from "./Audience";
import { AudiencePanel } from "./AudiencePanel";
import { audCopy, lcFirst } from "./copy";

/**
 * Zoekbalk + doelgroep-modal voor een sectorpagina. Alle panelen
 * (per doelgroep) staan server-side in de HTML, in de gesloten <dialog>.
 */
export function SectorAudience({ sector, locale }: { sector: Sector; locale: Locale }) {
  const c = audCopy(locale);
  const segs = audiencesOf(sector.slug);
  const named = segs.filter((g) => g.index >= 0);
  const examples = named
    .map((g) => g.types[0])
    .filter(Boolean)
    .slice(0, 3)
    .map((t) => lcFirst(tr(t, locale)));
  return (
    <Audience
      index={audienceIndex(locale)}
      locale={locale}
      scope={[sector.slug]}
      current={sector.slug}
      panels={segs.map((g) => ({ key: g.key[locale], node: <AudiencePanel g={g} locale={locale} /> }))}
      quick={named.map((g) => ({ label: tr(g.name, locale), hash: segHash(g, locale) }))}
      placeholder={examples.length >= 2 ? c.placeholderFor(examples) : c.placeholder}
    />
  );
}
