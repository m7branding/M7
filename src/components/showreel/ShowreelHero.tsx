import { SplitText } from "@/components/motion/SplitText";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Locale } from "@/content/types";
import { showreelLabels } from "./copy";
import { casesReels } from "./reels";
import { ShowreelPlayer } from "./ShowreelPlayer";
import "./showreel.css";

type Seg = string | { t: string; c?: string };

/**
 * Compacte showreel-hero bovenaan /cases: een afgeronde, ingesprongen beeldsectie van
 * ongeveer min(78vh, 780px), zodat de catalogus eronder al in beeld komt. De showreel
 * speelt muted in een lus (eerst de poster); rechtsonder wissel je tussen de reels,
 * met voortgangslijnen. Linksonder over een donker verloop: H1, het aantal cases en een korte regel.
 * Welke reels: zie reels.ts (gerenderde showreels, anders hero-clips van cases).
 */
export function ShowreelHero({
  locale,
  crumbs,
  crumbsLabel,
  title,
  count,
  line,
  children,
}: {
  locale: Locale;
  crumbs: { name: string; path: string }[];
  crumbsLabel: string;
  title: Seg[] | string;
  /** Feitjes naast elkaar, bv. ["86 cases", "16 sectoren"]; het eerste getal krijgt een pill. */
  count: { value: number; label: string }[];
  line?: string;
  children?: React.ReactNode;
}) {
  const reels = casesReels(locale);
  return (
    <section className="srh" aria-labelledby="srh-title">
      <ShowreelPlayer reels={reels} labels={showreelLabels(locale)} className="srh__frame" priority>
        <div className="srh__top">
          <Breadcrumbs items={crumbs} locale={locale} label={crumbsLabel} />
        </div>
        <div className="srh__main">
          <SplitText as="h1" id="srh-title" className="h-hero srh__title" parts={title} delay={0.1} />
          <p className="srh__line" data-reveal="up" style={{ ["--d" as string]: "0.3s" }}>
            <span className="srh__facts">
              {count.map((c, i) => (
                <span key={c.label} className="srh__fact">
                  {i === 0 ? <span className="count-pill srh__pill">{c.value}</span> : <strong>{c.value}</strong>} {c.label}
                </span>
              ))}
            </span>
            {line ? <span className="srh__lead">{line}</span> : null}
          </p>
          {children ? (
            <div className="srh__cta" data-reveal="up" style={{ ["--d" as string]: "0.42s" }}>
              {children}
            </div>
          ) : null}
        </div>
      </ShowreelPlayer>
    </section>
  );
}
