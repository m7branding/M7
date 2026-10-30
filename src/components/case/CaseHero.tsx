import { SplitText } from "@/components/motion/SplitText";
import { TLink } from "@/components/motion/TLink";
import { HeroScene } from "@/components/sections/HeroScene";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { CaseCover } from "@/components/ui/CaseCard";
import type { Case, Locale, Service } from "@/content/types";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import type { HeroMedia } from "@/lib/story";
import { HeroVideo } from "./HeroVideo";

/**
 * Case-hero: schermvullend, ingesprongen en afgerond (zoals de overige heroes), met het beeld
 * of de gerenderde hero-video full-bleed op de achtergrond. Donker verloop linksonder, daarop
 * de diensten, het jaar en de titel groot; rechtsonder het logo van de klant op glas.
 */
export function CaseHero({ c, locale, media, services }: { c: Case; locale: Locale; media: HeroMedia; services: Service[] }) {
  const d = getDict(locale);
  const title = tr(c.title, locale);
  const label = locale === "nl" ? `3D-mockup van het werk voor ${c.client}` : `3D mockup of the work for ${c.client}`;
  return (
    <section className="cx-hero" aria-labelledby="cx-title">
      <div className="cx-hero__frame">
        <HeroScene>
          <div className={`cx-hero__media cx-hero__media--${media.kind}`}>
            {media.kind === "video" ? (
              <HeroVideo
                src={media.src}
                poster={media.poster}
                srcMobile={media.srcMobile}
                posterMobile={media.posterMobile}
                position={media.position}
                label={label}
              />
            ) : media.kind === "image" ? (
              <img src={media.src} alt={c.client} fetchPriority="high" decoding="async" style={media.position ? { objectPosition: media.position } : undefined} />
            ) : (
              <CaseCover c={c} sizes="100vw" />
            )}
          </div>
        </HeroScene>
        <div className="cx-hero__shade" aria-hidden="true" />

        <div className="cx-hero__inner">
          <div className="cx-hero__top">
            <Breadcrumbs
              locale={locale}
              label={d.misc.breadcrumbs}
              items={[
                { name: d.nav.home, path: "/" },
                { name: d.nav.cases, path: paths.cases },
                { name: c.client, path: paths.case(c) },
              ]}
            />
          </div>

          <div className="cx-hero__bottom">
            <div className="cx-hero__text">
              <ul className="cx-hero__meta" data-reveal="fade" aria-label={d.cases.services}>
                {services.map((s) => (
                  <li key={s.slug}>
                    <TLink href={paths.service(s)} className="cx-hero__tag" style={{ ["--accent" as string]: s.color }}>
                      {tr(s.short, locale)}
                    </TLink>
                  </li>
                ))}
                {c.year ? (
                  <li className="cx-hero__year">
                    <time dateTime={String(c.year)}>{c.year}</time>
                  </li>
                ) : null}
                {c.concept ? <li className="cx-hero__concept">{d.cases.concept}</li> : null}
              </ul>
              <SplitText as="h1" id="cx-title" className="cx-hero__title" parts={title} delay={0.15} />
            </div>
            {c.logo ? (
              <div className="cx-hero__logo" data-reveal="fade" style={{ ["--d" as string]: "0.5s" }}>
                <img src={c.logo} alt={c.client} decoding="async" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
