import { Showcase } from "@/components/showcase";
import type { ServiceSlug } from "@/content/registry";
import { GrowFrame } from "./GrowFrame";
import { brandTones } from "./tone";

/**
 * De geanimeerde showcase van deze klant (zelfde als op home en de dienstpagina) als eigen,
 * schermvullende sectie in het verhaal: groeit mee op de scroll en speelt zijn animatie af
 * terwijl je erdoorheen scrolt (ShowcaseStage). Achtergrond in de verdiepte merkkleur.
 */
export function CaseShowcase({ slug, color, label }: { slug: ServiceSlug; color: string; label: string }) {
  const t = brandTones(color);
  return (
    <section className="cx-show" aria-label={label}>
      <GrowFrame className="cx-show__grow" style={{ ["--deep" as string]: t.deep, ["--glow" as string]: t.glow }}>
        <div className="cx-show__stage">
          <Showcase slug={slug} />
        </div>
      </GrowFrame>
    </section>
  );
}
