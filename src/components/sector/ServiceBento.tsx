import { TLink } from "@/components/motion/TLink";
import { Icon } from "@/components/ui/Icon";
import type { Locale, Sector, Service } from "@/content/types";
import { applicationsFor, getService } from "@/lib/content";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { TileMockup } from "./Devices";
import { resolveVisuals } from "./visuals";

/**
 * Tegelmaten in het 12-koloms raster (zie tiles.css):
 * hero = 7 × 2 rijen · side = 5 · wide = 7 · half = 6 · third = 4 · full = 12 (liggend: tekst naast beeld).
 * Patroon voor 6: één grote tegel links met twee ernaast, daaronder drie gelijke.
 */
type Size = "hero" | "side" | "wide" | "half" | "third" | "full";

function layout(n: number): Size[] {
  switch (n) {
    case 0:
      return [];
    case 1:
      return ["full"];
    case 2:
      return ["wide", "side"];
    case 3:
      return ["hero", "side", "side"];
    case 4:
      return ["wide", "side", "side", "wide"];
    case 5:
      return ["hero", "side", "side", "half", "half"];
    default: {
      // 6: hero + 2 + 3 · 7: + een brede tegel · daarna weer rijen van drie (de laatste vult de rij)
      const out: Size[] = ["hero", "side", "side", "third", "third", "third"];
      const rest = n - 6;
      if (rest === 1) out.push("full");
      else if (rest > 1) {
        for (let i = 0; i < rest; i++) out.push("third");
        const r = rest % 3;
        if (r === 1) out[out.length - 1] = "full";
        if (r === 2) out.splice(out.length - 2, 2, "half", "half");
      }
      return out;
    }
  }
}

/** Smal scherm (2 kolommen): hero en full over de volle breedte; een tegel die alleen op een rij zou staan ook. */
function mobileSpans(sizes: Size[]): (1 | 2)[] {
  const out: (1 | 2)[] = [];
  let col = 0;
  sizes.forEach((s, i) => {
    let span: 1 | 2 = s === "hero" || s === "full" ? 2 : 1;
    if (span === 1 && col === 0) {
      const next = sizes[i + 1];
      if (!next || next === "hero" || next === "full") span = 2;
    }
    out.push(span);
    col = (col + span) % 2;
  });
  return out;
}

/** Dienstentegels op een sectorpagina (bento), elk met een strakke mockup van echt werk. */
export function ServiceBento({ sector, locale }: { sector: Sector; locale: Locale }) {
  const services = sector.services.map((s) => getService(s)).filter(Boolean) as Service[];
  const visuals = resolveVisuals(
    sector,
    services.map((s) => s.slug),
  );
  const sizes = layout(services.length);
  const spans = mobileSpans(sizes);
  const nl = locale === "nl";

  return (
    <div className="sbento" data-n={services.length} data-sector={sector.slug} data-stagger="">
      {services.map((s, i) => {
        const visual = visuals.get(s.slug)!;
        const apps = applicationsFor(s.slug).length;
        return (
          <div key={s.slug} className={`sb-cell sb-cell--${sizes[i]}${spans[i] === 2 ? " sb-cell--m2" : ""}`}>
            <TLink
              href={paths.service(s)}
              className={`sb-tile sb-tile--${sizes[i]} sb-kind--${visual.kind}`}
              data-play=""
              style={{ ["--accent" as string]: s.color }}
            >
              <div className="sb-tile__head">
                <span className="sb-tile__meta">
                  <span className="sb-tile__dot" />
                  {apps} {nl ? (apps === 1 ? "toepassing" : "toepassingen") : apps === 1 ? "application" : "applications"}
                </span>
                <h3 className="sb-tile__title">{tr(s.title, locale)}</h3>
                <p className="sb-tile__text">{tr(s.intro, locale)}</p>
                <span className="sb-tile__arrow" aria-hidden="true">
                  <Icon name="arrowUpRight" size={18} stroke={1.8} />
                </span>
              </div>
              <div className="sb-stage" aria-hidden="true">
                <span className="sb-stage__glow" />
                <TileMockup visual={visual} />
                {visual.label ? (
                  <span className="sb-chip">
                    <span className="sb-chip__k">Project</span>
                    {visual.label}
                  </span>
                ) : null}
              </div>
            </TLink>
          </div>
        );
      })}
    </div>
  );
}
