import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DeviceHero } from "@/components/cases/DeviceHero";
import { heroShowcase } from "@/components/cases/heroShowcase";
import { ShowcaseHero } from "@/components/cases/ShowcaseHero";
import { VideoHero } from "@/components/cases/VideoHero";
import { ScrollShowcase } from "@/components/motion/ScrollShowcase";
import { SplitText } from "@/components/motion/SplitText";
import { TLink } from "@/components/motion/TLink";
import { CaseStory } from "@/components/sections/CaseStory";
import { HeroScene } from "@/components/sections/HeroScene";
import { LevelUp } from "@/components/sections/Home";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Btn } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/Cards";
import { CaseCard, CaseCover } from "@/components/ui/CaseCard";
import { Icon } from "@/components/ui/Icon";
import { ToolBadge } from "@/components/ui/ToolBadge";
import { LOCALES, type Locale } from "@/content/types";
import { allCases, applicationsBySlugs, casesForService, getCase, getSector, getService, nextCase } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, creativeWorkLd } from "@/lib/seo";
import { storyFor } from "@/lib/story";

type P = { params: { lang: Locale; case: string } };

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.flatMap((lang) => allCases().map((c) => ({ lang, case: c.slug })));
}

export function generateMetadata({ params }: P): Metadata {
  const c = getCase(params.case);
  if (!c) return {};
  return buildMetadata({
    locale: params.lang,
    path: paths.case(c),
    title: `${c.client}: ${tr(c.title, params.lang)} | M7`,
    description: tr(c.summary, params.lang).slice(0, 158),
    image: c.hero?.image ?? c.cover,
  });
}

export default function CasePage({ params }: P) {
  const locale = params.lang;
  const c = getCase(params.case);
  if (!c) notFound();
  const d = getDict(locale);
  const services = c.services.map((s) => getService(s)!).filter(Boolean);
  const sector = getSector(c.sector);
  const apps = applicationsBySlugs(c.applications);
  const more = casesForService(c.services[0]).filter((x) => x.slug !== c.slug).slice(0, 3);
  const next = nextCase(c.slug);
  const title = tr(c.title, locale);

  const story = storyFor(c);
  const heroImg = c.hero?.image ?? c.cover;
  // bewegende hero: de bestaande showcase van deze klant, anders de device-hero als er lange
  // screenshots zijn (een eigen hero-beeld/video gaat altijd voor)
  const show = c.hero ? undefined : heroShowcase(c.slug);
  // gerenderde hero-video (realistische 3D-mockup) gaat voor de device-hero
  const video = !c.hero && !show ? c.heroVideo : undefined;
  const screens = !c.hero && !show && !video && (c.screens?.desktop || c.screens?.mobile) ? c.screens : undefined;
  const devices = !!(screens || show || video);

  return (
    <article className="case" style={{ ["--cc" as string]: c.color, ["--accent" as string]: services[0]?.color }}>
      {/* ---------- Hero: schermvullend beeld (ingesprongen, afgerond) met donkere overlay ---------- */}
      <section className={`case-hero${devices ? " case-hero--devices" : ""}${show ? " case-hero--show" : ""}${video ? " case-hero--video" : ""}`}>
        <div className="case-hero__frame">
          {devices ? null : (
            <>
              <HeroScene>
                <div className="case-hero__media">
                  {c.hero?.video ? (
                    <video src={c.hero.video} poster={c.hero.poster} autoPlay muted loop playsInline style={{ objectPosition: c.hero.position }} />
                  ) : heroImg ? (
                    <img src={heroImg} alt={c.client} fetchPriority="high" style={{ objectPosition: c.hero?.position }} />
                  ) : (
                    <CaseCover c={c} sizes="100vw" />
                  )}
                </div>
              </HeroScene>
              <div className="case-hero__shade" aria-hidden="true" />
            </>
          )}
          <div className="container case-hero__content">
            <Breadcrumbs
              locale={locale}
              label={d.misc.breadcrumbs}
              items={[
                { name: d.nav.home, path: "/" },
                { name: d.nav.cases, path: paths.cases },
                { name: c.client, path: paths.case(c) },
              ]}
            />
            <div className="case-hero__text">
              <p className="kicker case-hero__kicker" data-reveal="fade">
                {c.year ? `${c.client} · ${c.year}` : c.client}
                {c.concept ? <span className="case-hero__concept">{d.cases.concept}</span> : null}
              </p>
              <SplitText as="h1" className="h1 case-hero__title" parts={title} delay={0.15} />
              <p className="lead case-hero__lead" data-reveal="up" style={{ ["--d" as string]: "0.4s" }}>
                {tr(c.summary, locale)}
              </p>
              <div className="chips case-hero__tags" data-reveal="up" style={{ ["--d" as string]: "0.5s" }}>
                {services.map((s) => (
                  <TLink key={s.slug} href={paths.service(s)} className="inlink case-hero__tag" style={{ ["--accent" as string]: s.color }}>
                    <span className="inlink__ic" aria-hidden="true">
                      <Icon name={s.icon} size={13} stroke={2} />
                    </span>
                    {tr(s.short, locale)}
                  </TLink>
                ))}
              </div>
            </div>
          </div>
          {show ? (
            <ShowcaseHero slug={show} />
          ) : video ? (
            <VideoHero
              src={video.src}
              poster={video.poster}
              color={c.color}
              label={locale === "nl" ? `3D-mockup van het werk voor ${c.client} op Apple-apparaten` : `3D mockup of the work for ${c.client} on Apple devices`}
            />
          ) : screens ? (
            <DeviceHero
              screens={screens}
              color={c.color}
              label={
                locale === "nl"
                  ? `De website van ${c.client} op ${[screens.desktop && "een MacBook", screens.mobile && "een iPhone"].filter(Boolean).join(" en ")}`
                  : `The ${c.client} website on ${[screens.desktop && "a MacBook", screens.mobile && "an iPhone"].filter(Boolean).join(" and ")}`
              }
            />
          ) : null}
          <span className="case-hero__scroll" aria-hidden="true">
            {d.cases.scroll}
          </span>
        </div>
      </section>

      <section className="section section--tight case-facts">
        <div className="container">
          <dl className="facts" data-stagger="">
            <div>
              <dt>{d.cases.client}</dt>
              <dd>{c.client}</dd>
            </div>
            {c.year ? (
              <div>
                <dt>{d.cases.year}</dt>
                <dd>{c.year}</dd>
              </div>
            ) : null}
            {sector ? (
              <div>
                <dt>{d.cases.sector}</dt>
                <dd>
                  <TLink href={paths.sector(sector)}>{tr(sector.title, locale)}</TLink>
                </dd>
              </div>
            ) : null}
            <div>
              <dt>{d.nav.applications}</dt>
              <dd className="facts__apps">
                {apps.map((a) => (
                  <TLink key={a.slug} href={paths.application(a)}>
                    {tr(a.title, locale)}
                  </TLink>
                ))}
              </dd>
            </div>
            {c.url ? (
              <div>
                <dt>Live</dt>
                <dd>
                  <a href={c.url} target="_blank" rel="noopener">
                    {d.cases.visit} ↗
                  </a>
                </dd>
              </div>
            ) : null}
          </dl>
        </div>
      </section>

      {c.reveal ? (
        <section className="case-reveal">
          <ScrollShowcase video={c.reveal.video} image={c.reveal.image} poster={c.reveal.poster} position={c.reveal.position} alt={c.client} />
        </section>
      ) : null}

      <CaseStory blocks={story} c={c} locale={locale} />

      {c.tools.length ? (
        <section className="section section--tight">
          <div className="container">
            <p className="kicker" data-reveal="fade">
              {d.service.tools}
            </p>
            <div className="tool-group__list app-tools__list" data-stagger="">
              {c.tools.map((t) => (
                <ToolBadge key={t} slug={t} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {more.length ? (
        <section className="section">
          <div className="container">
            <SectionHead kicker={d.service.projects} title={locale === "nl" ? "Meer van dit soort werk." : "More work like this."}>
              <TLink href={`${paths.cases}?dienst=${c.services[0]}`} className="link-dash">
                {d.nav.allCases}
              </TLink>
            </SectionHead>
            <div className="cards-3">
              {more.map((x, i) => (
                <CaseCard key={x.slug} c={x} locale={locale} label={d.cta.viewCase} index={i} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="next-case">
        <TLink href={paths.case(next)} className="next-case__link" data-cursor={d.cta.viewCase}>
          <span className="next-case__media">
            <CaseCover c={next} sizes="100vw" />
          </span>
          <span className="container next-case__inner">
            <span className="kicker">{d.cases.nextCase}</span>
            <span className="next-case__title">
              {next.client}
              <Icon name="arrowRight" size={48} stroke={1.6} />
            </span>
          </span>
        </TLink>
      </section>

      <div className="container center" style={{ paddingBlock: 40 }}>
        <Btn href={paths.contact}>{d.cta.call}</Btn>
      </div>

      <LevelUp locale={locale} />
      <JsonLd data={creativeWorkLd({ name: title, description: tr(c.summary, locale), path: paths.case(c), image: c.cover, locale, client: c.client, year: c.year })} />
    </article>
  );
}
