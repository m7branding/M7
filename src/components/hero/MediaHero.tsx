import { SplitText } from "@/components/motion/SplitText";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon, type IconKey } from "@/components/ui/Icon";
import { heroMedia, heroMediaCopy, heroMediaTiming, type HeroMediaPage } from "@/content/hero-media";
import type { Locale } from "@/content/types";
import { tr } from "@/lib/i18n";
import { HeroMedia, type HeroSlide } from "./HeroMedia";

type Seg = string | { t: string; c?: string };

/** Slides voor een pagina: de clips zodra die er zijn, anders de foto's. */
export function heroSlides(page: HeroMediaPage, locale: Locale): HeroSlide[] {
  const m = heroMedia[page];
  if (m.clips.length) {
    return m.clips.map((cl, i) => ({ kind: "video", src: cl.src, poster: cl.poster, label: cl.label ? tr(cl.label, locale) : `${i + 1}` }));
  }
  return m.stills.map((s) => ({ kind: "still", ...s, label: tr(s.label, locale) }));
}

/**
 * Hero van de overzichtspagina's (diensten, toepassingen, sectoren, cases):
 * een afgeronde beeldsectie binnen de viewport (zoals de case- en over-ons-hero)
 * met roulerende clips of projectbeelden, donkere overlay, kruimelpad (+ BreadcrumbList
 * JSON-LD), H1, lead en CTA's. Beelden per pagina staan in src/content/hero-media.ts.
 */
export function MediaHero({
  locale,
  page,
  crumbs,
  crumbsLabel,
  title,
  lead,
  meta,
  children,
}: {
  locale: Locale;
  page: HeroMediaPage;
  crumbs: { name: string; path: string }[];
  crumbsLabel: string;
  title: Seg[] | string;
  lead?: string;
  /** Feitjes rechtsboven, bv. [{ icon: "grid", text: "10 diensten" }]. */
  meta?: { icon?: IconKey; text: string }[];
  /** CTA's onder de lead. */
  children?: React.ReactNode;
}) {
  const id = `mh-title-${page}`;
  return (
    <section className="mh" aria-labelledby={id}>
      <HeroMedia
        b="mh"
        slides={heroSlides(page, locale)}
        seconds={heroMediaTiming.stillSeconds}
        maxSeconds={heroMediaTiming.clipMaxSeconds}
        labels={{
          media: tr(heroMediaCopy.media[page], locale),
          pause: tr(heroMediaCopy.pause, locale),
          play: tr(heroMediaCopy.play, locale),
          show: tr(heroMediaCopy.show, locale),
          of: tr(heroMediaCopy.of, locale),
        }}
      >
        <div className="mh__top">
          <Breadcrumbs items={crumbs} locale={locale} label={crumbsLabel} />
          {meta?.length ? (
            <ul className="mh__meta" data-reveal="fade">
              {meta.map((m) => (
                <li key={m.text}>
                  {m.icon ? <Icon name={m.icon} size={14} stroke={1.9} /> : null}
                  <span>{m.text}</span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="mh__main">
          <SplitText as="h1" id={id} className="h-hero mh__title" parts={title} delay={0.1} />
          {lead ? (
            <p className="lead mh__lead" data-reveal="up" style={{ ["--d" as string]: "0.35s" }}>
              {lead}
            </p>
          ) : null}
          {children ? (
            <div className="mh__cta" data-reveal="up" style={{ ["--d" as string]: "0.5s" }}>
              {children}
            </div>
          ) : null}
        </div>
      </HeroMedia>
    </section>
  );
}
