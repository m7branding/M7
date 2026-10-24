import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GlowField } from "@/components/motion/GlowField";
import { SplitText } from "@/components/motion/SplitText";
import { TLink } from "@/components/motion/TLink";
import { LevelUp } from "@/components/sections/Home";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Btn } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/Cards";
import { CaseCard, CaseCover } from "@/components/ui/CaseCard";
import { Icon } from "@/components/ui/Icon";
import { ReviewCard } from "@/components/ui/ReviewCard";
import { ToolBadge } from "@/components/ui/ToolBadge";
import { LOCALES, type Locale } from "@/content/types";
import { allCases, applicationsBySlugs, casesForService, getCase, getReview, getSector, getService, nextCase } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, creativeWorkLd } from "@/lib/seo";

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
    image: c.cover,
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
  const review = getReview(c.review);
  const more = casesForService(c.services[0]).filter((x) => x.slug !== c.slug).slice(0, 3);
  const next = nextCase(c.slug);
  const title = tr(c.title, locale);

  const blocks = [
    { k: d.cases.challenge, v: tr(c.challenge, locale) },
    { k: d.cases.approach, v: tr(c.approach, locale) },
    { k: d.cases.result, v: tr(c.result, locale) },
  ];

  return (
    <article className="case" style={{ ["--cc" as string]: c.color, ["--accent" as string]: services[0]?.color }}>
      <section className="page-hero case-hero">
        <div className="page-hero__bg">
          <GlowField
            blobs={[
              { x: "70%", y: "20%", c: `${c.color}40`, s: "60vmax", dur: 18 },
              { x: "10%", y: "80%", c: "rgba(58,255,255,.05)", s: "50vmax", dur: 22, delay: -6 },
            ]}
          />
        </div>
        <div className="container">
          <Breadcrumbs
            locale={locale}
            label={d.misc.breadcrumbs}
            items={[
              { name: d.nav.home, path: "/" },
              { name: d.nav.cases, path: paths.cases },
              { name: c.client, path: paths.case(c) },
            ]}
          />
          <p className="kicker case-hero__kicker" data-reveal="fade">
            {c.client} · {c.year}
            {c.concept ? <span className="case-hero__concept">{d.cases.concept}</span> : null}
          </p>
          <SplitText as="h1" className="h1 case-hero__title" parts={title} delay={0.1} />
          <p className="lead case-hero__lead" data-reveal="up" style={{ ["--d" as string]: "0.35s" }}>
            {tr(c.summary, locale)}
          </p>
          <div className="chips case-hero__tags" data-reveal="up" style={{ ["--d" as string]: "0.45s" }}>
            {services.map((s) => (
              <TLink key={s.slug} href={paths.service(s)} className="chip" style={{ ["--accent" as string]: s.color }}>
                <span className="chip__dot" />
                {tr(s.short, locale)}
              </TLink>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="case-hero__media" data-reveal="clip" style={{ ["--d" as string]: "0.25s" }}>
            <CaseCover c={c} sizes="100vw" />
          </div>
        </div>
      </section>

      <section className="section section--tight case-facts">
        <div className="container">
          <dl className="facts" data-stagger="">
            <div>
              <dt>{d.cases.client}</dt>
              <dd>{c.client}</dd>
            </div>
            <div>
              <dt>{d.cases.year}</dt>
              <dd>{c.year}</dd>
            </div>
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

      <section className="section case-story">
        <div className="container case-story__grid">
          {blocks.map((b, i) => (
            <div key={i} className="case-story__block" data-reveal="up" style={{ ["--d" as string]: `${i * 0.08}s` }}>
              <span className="case-story__num">0{i + 1}</span>
              <h2 className="h3">{b.k}</h2>
              <p className="body">{b.v}</p>
            </div>
          ))}
        </div>
      </section>

      {c.gallery?.length ? (
        <section className="section section--tight case-gallery">
          <div className="container">
            <div className="case-gallery__grid">
              {c.gallery.map((g, i) => (
                <figure key={g} className="case-gallery__item" data-reveal="clip" style={{ ["--d" as string]: `${i * 0.1}s` }}>
                  <img src={g} alt={`${c.client} ${i + 1}`} loading="lazy" />
                </figure>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {c.results?.length ? (
        <section className="section section--tight">
          <div className="container">
            <dl className="svc-hero__stats case-results" data-stagger="">
              {c.results.map((r) => (
                <div key={r.value}>
                  <dt>{r.value}</dt>
                  <dd>{tr(r.label, locale)}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>
      ) : null}

      {review ? (
        <section className="section section--tight">
          <div className="container container--narrow">
            <ReviewCard r={review} locale={locale} draftLabel={d.misc.showDrafts} />
          </div>
        </section>
      ) : null}

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
