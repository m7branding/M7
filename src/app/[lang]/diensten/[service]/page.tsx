import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GlowField } from "@/components/motion/GlowField";
import { PixelGrid } from "@/components/motion/PixelGrid";
import { SplitText } from "@/components/motion/SplitText";
import { TLink } from "@/components/motion/TLink";
import { Mockup } from "@/components/mockups";
import { Showcase, hasShowcase } from "@/components/showcase";
import { ServiceMedia } from "@/components/mockups/ServiceMedia";
import { ServiceSectors } from "@/components/audience/ServiceSectors";
import { LevelUp } from "@/components/sections/Home";
import { RelatedServices } from "@/components/sections/RelatedServices";
import { Testimonials } from "@/components/sections/Testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Btn } from "@/components/ui/Button";
import { AppCard, SectionHead } from "@/components/ui/Cards";
import { CasesMasonry } from "@/components/ui/CaseCard";
import { ChapterBlock } from "@/components/ui/Chapter";
import { Collapse } from "@/components/ui/Collapse";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import { Marquee } from "@/components/ui/Marquee";
import { RichText } from "@/components/ui/RichText";
import { ToolGroups } from "@/components/ui/ToolBadge";
import { site } from "@/content/site";
import { LOCALES, type Locale } from "@/content/types";
import { allServices, applicationsFor, casesForService, getService, sectorsForService } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, serviceLd } from "@/lib/seo";

type P = { params: { lang: Locale; service: string } };

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.flatMap((lang) => allServices().map((s) => ({ lang, service: s.slug })));
}

export function generateMetadata({ params }: P): Metadata {
  const s = getService(params.service);
  if (!s) return {};
  return buildMetadata({
    locale: params.lang,
    path: paths.service(s),
    title: tr(s.metaTitle, params.lang),
    description: tr(s.metaDescription, params.lang),
  });
}

export default function ServicePage({ params }: P) {
  const locale = params.lang;
  const s = getService(params.service);
  if (!s) notFound();
  const d = getDict(locale);
  const apps = applicationsFor(s.slug);
  const cases = casesForService(s.slug);
  const sectors = sectorsForService(s.slug);
  const title = tr(s.title, locale);
  const chapters = s.chapters ?? [];
  const chapter = (i: number) => (chapters[i] ? <ChapterBlock c={chapters[i]} locale={locale} id={`chapter-${i}`} /> : null);

  return (
    <article className="svc" style={{ ["--accent" as string]: s.color }}>
      {/* ---------- Hero ---------- */}
      <section className={`page-hero svc-hero${hasShowcase(s.slug) ? " svc-hero--show" : ""}`}>
        <div className="page-hero__bg">
          <GlowField
            blobs={[
              { x: "78%", y: "40%", c: `${s.color}2e`, s: "60vmax", dur: 16 },
              { x: "10%", y: "90%", c: "rgba(58,255,255,.06)", s: "50vmax", dur: 20, delay: -6 },
            ]}
            spot={`${s.color}14`}
          />
          <div className="page-hero__pixels">
            <PixelGrid variant="bottom" />
          </div>
        </div>
        <div className="container svc-hero__grid">
          <div className="svc-hero__text">
            <Breadcrumbs
              locale={locale}
              label={d.misc.breadcrumbs}
              items={[
                { name: d.nav.home, path: "/" },
                { name: d.nav.services, path: paths.services },
                { name: title, path: paths.service(s) },
              ]}
            />
            <SplitText as="h1" className="h1" parts={title} delay={0.1} />
            <p className="lead" data-reveal="up" style={{ ["--d" as string]: "0.3s" }}>
              {tr(s.intro, locale)}
            </p>
            <div className="row svc-hero__cta" data-reveal="up" style={{ ["--d" as string]: "0.5s" }}>
              <Btn href={site.letsgo}>{d.cta.launch}</Btn>
              {cases.length ? (
                <TLink href="#projecten" className="link-dash">
                  {d.service.projects} <span className="count-badge">{cases.length}</span>
                </TLink>
              ) : null}
            </div>
            <dl className="svc-hero__stats" data-stagger="">
              {s.highlights.map((h) => (
                <div key={h.value + h.label.nl}>
                  <dt>{h.value}</dt>
                  <dd>{tr(h.label, locale)}</dd>
                </div>
              ))}
            </dl>
          </div>
          {hasShowcase(s.slug) ? null : (
            <div className="svc-hero__visual" data-reveal="scale" style={{ ["--d" as string]: "0.2s" }}>
              {s.media ? <ServiceMedia media={s.media} alt={title} placement="hero" /> : <Mockup kind={s.mockup} accent={s.color} />}
            </div>
          )}
        </div>
        {/* dezelfde showcase als op home: komt onderin uit de vouw van de hero omhoog */}
        {hasShowcase(s.slug) ? (
          <div className="svc-hero__show">
            <Showcase slug={s.slug} hero />
          </div>
        ) : null}
      </section>

      {/* ---------- Toepassingen (sliding) + keywords ---------- */}
      <section className="section svc-apps" aria-labelledby="apps-title">
        <div className="container">
          <SectionHead kicker={d.service.applications} title={d.service.applicationsTitle} text={tr(s.description, locale).split("\n\n")[0]} id="apps-title" />
        </div>
        <div className="svc-apps__slider" data-reveal="fade">
          <Marquee speed={Math.max(70, apps.length * 12)} label={d.service.applications}>
            {apps.map((a, i) => (
              <AppCard key={a.slug} a={a} locale={locale} index={i} />
            ))}
          </Marquee>
        </div>
        <div className="container">
          <ul className="svc-apps__list" data-stagger="">
            {apps.map((a) => (
              <li key={a.slug}>
                <TLink href={paths.application(a)}>
                  <span>{tr(a.title, locale)}</span>
                  <Icon name="arrowUpRight" size={18} stroke={2} />
                </TLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="svc-terms" aria-label={d.service.terms}>
          <Marquee speed={95} reverse>
            {s.terms.map((t) => (
              <span key={t} className="svc-terms__item">
                {t}
                <span aria-hidden="true">✦</span>
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {chapter(0)}

      {/* ---------- Tools & platformen ---------- */}
      <section className="section svc-tools" aria-labelledby="tools-title">
        <div className="container">
          <SectionHead kicker={d.service.tools} title={d.service.toolsTitle} id="tools-title" />
          <div className="svc-tools__body">
            <ToolGroups slugs={s.tools} locale={locale} />
            <div className="svc-tools__terms" data-reveal="up">
              <p className="tool-group__label">{d.service.terms}</p>
              <div className="chips">
                {s.terms.map((t) => (
                  <span key={t} className="chip">
                    <span className="chip__dot" />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Werkwijze ---------- */}
      <section className="section svc-process" aria-labelledby="process-title">
        <div className="container">
          <SectionHead kicker={d.service.process} title="How the juices flow" id="process-title" />
          <ol className="steps">
            {s.process.map((p, i) => (
              <li key={i} className="steps__item" data-reveal="up" style={{ ["--d" as string]: `${i * 0.06}s` }}>
                <span className="steps__num">{i + 1}</span>
                <div>
                  <h3>{tr(p.title, locale)}</h3>
                  <p>{tr(p.text, locale)}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {chapter(1)}

      {/* ---------- Projecten ---------- */}
      {cases.length ? (
        <section className="section svc-cases" id="projecten" aria-labelledby="cases-title">
          <div className="container">
            <SectionHead kicker={d.service.projects} title={d.service.projectsTitle} id="cases-title">
              <TLink href={`${paths.cases}?dienst=${s.slug}`} className="link-dash">
                {d.nav.allCases} <span className="count-badge">{cases.length}</span>
              </TLink>
            </SectionHead>
            <div className="svc-cases__grid">
              <CasesMasonry list={cases.slice(0, 7)} locale={locale} label={d.cta.viewCase} />
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------- Reviews: eerst over deze dienst, aangevuld met andere echte reviews ---------- */}
      <section className="section svc-reviews" aria-labelledby="reviews-title">
        <div className="container">
          <SectionHead kicker={d.service.reviews} title={d.service.reviewsTitle} id="reviews-title" />
        </div>
        <Testimonials locale={locale} service={s.slug} />
      </section>

      {chapter(2)}

      {/* ---------- Voor welke sectoren: zoekbalk + sector → doelgroep → wat deze dienst doet ---------- */}
      <ServiceSectors service={s} sectors={sectors} locale={locale} />

      {/* ---------- Combineert goed met: slider met de showcases van de andere diensten ---------- */}
      <RelatedServices service={s} locale={locale} />

      {chapters.slice(3).map((c, i) => (
        <ChapterBlock key={i} c={c} locale={locale} id={`chapter-${i + 3}`} />
      ))}

      {/* ---------- SEO-tekst ---------- */}
      <section className="section svc-seo" aria-labelledby="seo-title">
        <div className="container container--narrow">
          <h2 className="h3" id="seo-title" data-reveal="up">
            {tr(s.seo.title, locale)}
          </h2>
          <Collapse more={d.cta.readMore} less={d.cta.readLess}>
            {s.seo.sections.map((sec, i) => (
              <div key={i} className="seo-block">
                <h3>{tr(sec.h, locale)}</h3>
                <RichText text={tr(sec.body, locale)} className="body" locale={locale} />
              </div>
            ))}
          </Collapse>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section svc-faq" id="faq" aria-labelledby="faq-title">
        <div className="container faq-layout">
          <div className="faq-layout__head">
            <p className="kicker" data-reveal="fade">
              {d.service.faq}
            </p>
            <h2 className="h2" id="faq-title" data-reveal="up">
              {d.service.faqTitle}
            </h2>
            <p className="lead" data-reveal="up">
              {title}: {s.faqs.length} {locale === "nl" ? "antwoorden op de vragen die we het vaakst krijgen." : "answers to the questions we get most."}
            </p>
            <div data-reveal="up">
              <Btn href={paths.contact} size="sm">
                {d.cta.call}
              </Btn>
            </div>
          </div>
          <Faq faqs={s.faqs} locale={locale} moreLabel={d.cta.moreAnswers} answersPath={s.answersPath} />
        </div>
      </section>

      <LevelUp locale={locale} />

      <JsonLd
        data={serviceLd({
          name: title,
          description: tr(s.metaDescription, locale),
          path: paths.service(s),
          locale,
          offers: apps.map((a) => tr(a.title, locale)),
        })}
      />
    </article>
  );
}
