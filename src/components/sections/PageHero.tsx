import { GlowField } from "@/components/motion/GlowField";
import { PixelGrid } from "@/components/motion/PixelGrid";
import { SplitText } from "@/components/motion/SplitText";
import { Starfield } from "@/components/motion/Starfield";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import type { Locale } from "@/content/types";

type Seg = string | { t: string; c?: string };

/** Hero voor overzichtspagina's: kicker, (Engelse) H1, lead en ademende achtergrond. */
export function PageHero({
  locale,
  crumbs,
  crumbsLabel,
  kicker,
  title,
  lead,
  children,
  accent = "#3affff",
}: {
  locale: Locale;
  crumbs: { name: string; path: string }[];
  crumbsLabel: string;
  kicker: string;
  title: Seg[] | string;
  lead?: string;
  children?: React.ReactNode;
  accent?: string;
}) {
  return (
    <section className="page-hero page-hero--center" style={{ ["--accent" as string]: accent }}>
      <div className="page-hero__bg">
        <GlowField
          blobs={[
            { x: "50%", y: "110%", c: "rgba(255,255,255,.07)", s: "80vmax", o: 0.9, dur: 16 },
            { x: "15%", y: "20%", c: `${accent}1f`, s: "50vmax", dur: 18, delay: -4 },
            { x: "88%", y: "30%", c: "rgba(139,61,255,.12)", s: "46vmax", dur: 22, delay: -9 },
          ]}
        />
        <Starfield density={0.5} sparkles={10} />
        <div className="page-hero__pixels">
          <PixelGrid variant="sides" />
        </div>
      </div>
      <div className="container page-hero__inner">
        <Breadcrumbs items={crumbs} locale={locale} label={crumbsLabel} />
        <p className="kicker kicker--center" data-reveal="fade">
          {kicker}
        </p>
        <SplitText as="h1" className="h-hero page-hero__title" parts={title} delay={0.1} />
        {lead ? (
          <p className="lead page-hero__lead" data-reveal="up" style={{ ["--d" as string]: "0.35s" }}>
            {lead}
          </p>
        ) : null}
        {children ? (
          <div className="page-hero__extra" data-reveal="up" style={{ ["--d" as string]: "0.5s" }}>
            {children}
          </div>
        ) : null}
      </div>
    </section>
  );
}
