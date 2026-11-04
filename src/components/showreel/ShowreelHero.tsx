import { M7DrawTitle } from "@/components/brand/M7DrawTitle";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Locale } from "@/content/types";
import { showreelLabels } from "./copy";
import type { Reel } from "./reels";
import { ShowreelPlayer } from "./ShowreelPlayer";
import "./showreel.css";

/**
 * Compacte showreel-hero bovenaan /cases: een afgeronde, ingesprongen beeldsectie van
 * ongeveer min(78vh, 780px), zodat de catalogus eronder al in beeld komt. Bewust eenvoudig:
 * één reel als achtergrond (muted, in een lus, eerst de poster; geen hoofdstukken) met
 * alleen een pauzeknop, en linksonder de kop "<woorden> [M7]" waarin het M7-emblem zich
 * tekent (M7DrawTitle), een korte ondertitel en een kleine glazen knop (children).
 * Welke reel: casesHeroReel (reels.ts). De feiten en de overige reels staan onder de hero.
 */
export function ShowreelHero({
  locale,
  crumbs,
  crumbsLabel,
  reel,
  words,
  sub,
  children,
}: {
  locale: Locale;
  crumbs: { name: string; path: string }[];
  crumbsLabel: string;
  reel: Reel | null;
  /** De woorden vóór het M7-emblem, bv. "Masterpieces by". */
  words: string;
  sub?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="srh" aria-labelledby="srh-title">
      <ShowreelPlayer reels={reel ? [reel] : []} labels={showreelLabels(locale)} ui="mini" className="srh__frame" priority>
        <div className="srh__top">
          <Breadcrumbs items={crumbs} locale={locale} label={crumbsLabel} />
        </div>
        <div className="srh__main">
          <M7DrawTitle id="srh-title" className="h-hero srh__title" words={words} delay={0.1} />
          {sub ? (
            <p className="srh__sub" data-reveal="up" style={{ ["--d" as string]: "0.3s" }}>
              {sub}
            </p>
          ) : null}
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
