import { HeroVideo } from "@/components/case/HeroVideo";
import { TLink } from "@/components/motion/TLink";
import { Icon } from "@/components/ui/Icon";
import type { AppVisual } from "@/lib/application-visual";
import { paths } from "@/lib/paths";
import "./app-visual.css";

/**
 * Echt projectbeeld in de hero van een toepassingspagina: de hero-video (3D-render) of een beeld
 * uit de case, in een afgerond kader met een gloed in de dienstkleur en een glazen label naar de case.
 * (De geanimeerde showcase van home staat er niet in; die zet de pagina zelf onderin de hero.)
 */
export function AppHeroVisual({ visual, title, viewCase }: { visual: Exclude<AppVisual, { kind: "show" }>; title: string; viewCase: string }) {
  const c = visual.case;
  const alt = `${c.client} · ${title}`;
  return (
    <figure className={`app-visual app-visual--${visual.kind}`}>
      <span className="app-visual__glow" aria-hidden="true" />
      <div className="app-visual__frame">
        {visual.kind === "video" ? (
          <HeroVideo src={visual.src} poster={visual.poster} label={alt} />
        ) : (
          <img src={visual.src} alt={alt} decoding="async" fetchPriority="high" style={visual.position ? { objectPosition: visual.position } : undefined} />
        )}
      </div>
      <TLink href={paths.case(c)} className="sb-chip app-visual__chip" aria-label={`${viewCase}: ${c.client}`}>
        <span className="sb-chip__k">Project</span>
        {c.client}
        <Icon name="arrowUpRight" size={14} stroke={2} />
      </TLink>
    </figure>
  );
}
