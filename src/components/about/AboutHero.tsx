import { SplitText } from "@/components/motion/SplitText";
import { OverlayButton } from "@/components/overlay/OverlayButton";
import { Avatars } from "@/components/support/Avatars";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { aboutCopy, heroClipMaxSeconds, heroClips, heroStills, heroStillSeconds } from "@/content/about";
import { officePhoto, officePhotos } from "@/content/office";
import { site } from "@/content/site";
import { team } from "@/content/team";
import type { Locale } from "@/content/types";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { AboutHeroMedia, type HeroSlide } from "./AboutHeroMedia";
import { AboutIcon } from "./AboutIcon";

/** "7 mensen en 1 hond" / "7 people and 1 dog", geteld uit team.ts. */
export function teamCount(locale: Locale) {
  const dogs = team.filter((m) => m.dog).length;
  const ppl = team.length - dogs;
  const nl = locale === "nl";
  const a = `${ppl} ${nl ? (ppl === 1 ? "mens" : "mensen") : ppl === 1 ? "person" : "people"}`;
  if (!dogs) return a;
  return `${a} ${nl ? "en" : "and"} ${dogs} ${nl ? (dogs === 1 ? "hond" : "honden") : dogs === 1 ? "dog" : "dogs"}`;
}

/**
 * Full-screen hero van /over-m7: afgeronde 'kaart' binnen de viewport met
 * roulerende clips (of kantoorfoto's), H1, lead, intake-CTA en het team.
 */
export function AboutHero({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const c = aboutCopy.hero;

  const slides: HeroSlide[] = heroClips.length
    ? heroClips.map((cl, i) => ({ kind: "video", src: cl.src, poster: cl.poster, label: cl.label ? tr(cl.label, locale) : `${i + 1}` }))
    : heroStills.flatMap((s) => {
        const p = officePhotos.find((o) => o.name === s.name);
        if (!p) return [];
        return [
          {
            kind: "still" as const,
            src: officePhoto(p, "lg"),
            srcSm: officePhoto(p, "sm"),
            w: p.w,
            h: p.h,
            label: tr(s.label, locale),
            pos: s.pos,
            posM: s.posM,
          },
        ];
      });

  const geo = site.address.geo;

  return (
    <section className="ah" aria-labelledby="ah-title">
      <AboutHeroMedia
        slides={slides}
        seconds={heroStillSeconds}
        maxSeconds={heroClipMaxSeconds}
        labels={{ media: tr(c.media, locale), pause: tr(c.pause, locale), play: tr(c.play, locale), show: tr(c.show, locale), of: tr(c.of, locale) }}
      >
        <div className="ah__top">
          <Breadcrumbs
            items={[
              { name: d.nav.home, path: "/" },
              { name: d.nav.about, path: paths.about },
            ]}
            locale={locale}
            label={d.misc.breadcrumbs}
          />
          <p className="ah__loc" data-reveal="fade">
            <AboutIcon name="pin" size={15} stroke={1.8} />
            <span>
              {site.address.city}
              <span className="ah__region">, {site.address.region}</span>
            </span>
            <span className="ah__geo" aria-hidden="true">
              {geo.lat.toFixed(2)}° N · {geo.lng.toFixed(2)}° E
            </span>
          </p>
        </div>
        <div className="ah__main">
          <div className="ah__text">
            <SplitText as="h1" id="ah-title" className="h-hero ah__title" parts={[{ t: "We are " }, { t: "M7.", c: "g-pixels" }]} delay={0.1} />
            <p className="lead ah__lead" data-reveal="up" style={{ ["--d" as string]: "0.35s" }}>
              {tr(c.lead, locale)}
            </p>
            <div className="ah__cta" data-reveal="up" style={{ ["--d" as string]: "0.5s" }}>
              <OverlayButton target="intake" look="btn">
                {d.cta.launch}
              </OverlayButton>
              <a href="#kantoor" className="link-dash ah__link">
                {tr(c.secondary, locale)}
              </a>
            </div>
          </div>
          <a
            href="#team"
            className="ah__team"
            data-reveal="up"
            style={{ ["--d" as string]: "0.65s" }}
            aria-label={`${tr(c.meet, locale)}: ${teamCount(locale)}`}
          >
            <Avatars people={team.map((m) => ({ name: m.name, photo: m.avatar }))} size={40} ring="#0e0e10" />
            <span className="ah__team-txt">
              <strong>{teamCount(locale)}</strong>
              <span>{tr(c.under, locale)}</span>
            </span>
          </a>
        </div>
      </AboutHeroMedia>
    </section>
  );
}
