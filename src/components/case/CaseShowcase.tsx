import { Showcase } from "@/components/showcase";
import type { ServiceSlug } from "@/content/registry";
import type { Locale } from "@/content/types";
import { getService } from "@/lib/content";
import { tr } from "@/lib/i18n";
import { GrowFrame } from "./GrowFrame";
import { brandTones, neutralTones } from "./tone";

/**
 * De geanimeerde showcase van deze klant (zelfde als op home en de dienstpagina) als eigen,
 * schermvullende sectie in het verhaal: groeit mee op de scroll en speelt zijn animatie af
 * terwijl je erdoorheen scrolt (ShowcaseStage). Achtergrond in de verdiepte merkkleur (of neutraal),
 * links onderin een korte regel met de dienst waar de showcase bij hoort.
 */
export function CaseShowcase({
  slug,
  color,
  field,
  client,
  locale,
}: {
  slug: ServiceSlug;
  color: string;
  /** Vol merkvlak (geverifieerd), of null: dan neutraal. */
  field: string | null;
  client: string;
  locale: Locale;
}) {
  const t = field ? brandTones(field) : neutralTones(color);
  const service = getService(slug);
  return (
    <section className="cx-show" aria-label={locale === "nl" ? `${client}: geanimeerde showcase` : `${client}: animated showcase`}>
      <GrowFrame className="cx-show__grow" style={{ ["--deep" as string]: t.deep, ["--glow" as string]: t.glow }}>
        {service ? (
          <p className="cx-show__cap" data-reveal="fade">
            <span>{locale === "nl" ? "In beweging" : "In motion"}</span>
            <strong>
              {client} · {tr(service.short, locale)}
            </strong>
          </p>
        ) : null}
        <div className="cx-show__stage">
          <Showcase slug={slug} />
        </div>
      </GrowFrame>
    </section>
  );
}
