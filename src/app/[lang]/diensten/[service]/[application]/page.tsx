import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { GlowField } from "@/components/motion/GlowField";
import { PixelGrid } from "@/components/motion/PixelGrid";
import { SplitText } from "@/components/motion/SplitText";
import { TLink } from "@/components/motion/TLink";
import { Mockup } from "@/components/mockups";
import { ServiceMedia } from "@/components/mockups/ServiceMedia";
import { LevelUp } from "@/components/sections/Home";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Btn } from "@/components/ui/Button";
import { AppCard, SectionHead } from "@/components/ui/Cards";
import { CasesMasonry } from "@/components/ui/CaseCard";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import { Marquee } from "@/components/ui/Marquee";
import { RichText } from "@/components/ui/RichText";
import { ToolBadge } from "@/components/ui/ToolBadge";
import { site } from "@/content/site";
import { LOCALES, type Locale } from "@/content/types";
import {
  allApplications,
  casesForApplicationOrService,
  getApplication,
  getService,
  relatedApplications,
  sectorsForApplication,
} from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, serviceLd } from "@/lib/seo";

type P = { params: { lang: Locale; service: string; application: string } };

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.flatMap((lang) => allApplications().map((a) => ({ lang, service: a.service, application: a.slug })));
}

export function generateMetadata({ params }: P): Metadata {
  const a = getApplication(params.application);
  if (!a) return {};
  const s = getService(a.service)!;
  return buildMetadata({
    locale: params.lang,
    path: paths.application(a),
    title: a.metaTitle ? tr(a.metaTitle, params.lang) : `${tr(a.title, params.lang)} | ${tr(s.short, params.lang)} | M7`,
    description: tr(a.metaDescription, params.lang),
  });
}

export default function ApplicationPage({ params }: P) {
  const locale = params.lang;
  const a = getApplication(params.application);
  if (!a || a.service !== params.service) notFound();
  const s = getService(a.service)!;
  const d = getDict(locale);
  const title = tr(a.title, locale);
  const cases = casesForApplicationOrService(a).slice(0, 5);
  const related = relatedApplications(a, 10);
  const sectors = sectorsForApplication(a.slug);

  return (
    <article className="app" style={{ ["--accent" as string]: s.color }}>
      <section className="page-hero app-hero">
        <div className="page-hero__bg">
          <GlowField
            blobs={[
              { x: "80%", y: "30%", c: `${s.color}26`, s: "55vmax", dur: 18 },
              { x: "20%", y: "100%", c: "rgba(58,255,255,.05)", s: "50vmax", dur: 22, delay: -7 },
            ]}
            spot={`${s.color}12`}
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
                { name: tr(s.short, locale), path: paths.service(s) },
                { name: title, path: paths.application(a) },
              ]}
            />
            <TLink href={paths.service(s)} className="app-hero__parent" data-reveal="fade">
              <span className="chip__dot" />
              {tr(s.title, locale)}
            </TLink>
            <SplitText as="h1" className="h1" parts={title} delay={0.1} />
            <p className="lead" data-reveal="up" style={{ ["--d" as string]: "0.3s" }}>
              {tr(a.intro, locale)}
            </p>
            <div className="row svc-hero__cta" data-reveal="up" style={{ ["--d" as string]: "0.5s" }}>
              <Btn href={site.letsgo}>{d.cta.launch}</Btn>
              <TLink href={paths.contact} className="link-dash">
                {d.cta.call}
              </TLink>
            </div>
          </div>
          <div className="svc-hero__visual" data-reveal="scale" style={{ ["--d" as string]: "0.2s" }}>
            {a.media ? <ServiceMedia media={a.media} alt={title} placement="hero" /> : s.media ? <ServiceMedia media={s.media} alt={title} placement="hero" /> : <Mockup kind={s.mockup} accent={s.color} />}
          </div>
        </div>
      </section>

      {/* ---------- Inhoud + wat je krijgt ---------- */}
      <section className="section app-body">
        <div className="container app-body__grid">
          <div className="app-body__text">
            {a.body.map((sec, i) => (
              <div key={i} className="seo-block" data-reveal="up">
                <h2 className="h3">{tr(sec.h, locale)}</h2>
                <RichText text={tr(sec.body, locale)} className="body" locale={locale} />
              </div>
            ))}
          </div>
          <aside className="app-body__aside">
            <div className="deliver" data-reveal="up">
              <p className="kicker">{d.service.deliverables}</p>
              <ul>
                {a.deliverables[locale].map((x) => (
                  <li key={x}>
                    <img src="/brand/check.svg" alt="" width={16} height={13} />
                    {x}
                  </li>
                ))}
              </ul>
              <Btn href={site.letsgo} size="sm">
                {d.cta.configurator}
              </Btn>
            </div>
          </aside>
        </div>
      </section>

      {/* ---------- Waarom het werkt ---------- */}
      <section className="section section--tight app-benefits">
        <div className="container">
          <SectionHead kicker={d.service.benefits} title={locale === "nl" ? "Why it works." : "Why it works."} />
          <div className="cards-3" data-stagger="">
            {a.benefits.map((b, i) => (
              <div key={i} className="benefit">
                <span className="benefit__num">0{i + 1}</span>
                <h3>{tr(b.title, locale)}</h3>
                <p>{tr(b.text, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Tools ---------- */}
      <section className="section section--tight app-tools">
        <div className="container">
          <p className="kicker" data-reveal="fade">
            {d.service.tools}
          </p>
          <div className="tool-group__list app-tools__list" data-stagger="">
            {a.tools.map((t) => (
              <ToolBadge key={t} slug={t} />
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Cases ---------- */}
      {cases.length ? (
        <section className="section app-cases">
          <div className="container">
            <SectionHead kicker={d.service.projects} title={d.service.projectsTitle}>
              <TLink href={`${paths.cases}?dienst=${s.slug}`} className="link-dash">
                {d.nav.allCases}
              </TLink>
            </SectionHead>
            <div className="svc-cases__grid">
              <CasesMasonry list={cases} locale={locale} label={d.cta.viewCase} />
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------- Gerelateerde toepassingen (sliding) ---------- */}
      <section className="section app-related">
        <div className="container">
          <SectionHead kicker={d.service.otherApplications} title={locale === "nl" ? "Combineer slim." : "Combine smartly."}>
            <TLink href={paths.service(s)} className="link-dash">
              {d.service.allApplicationsOf} {tr(s.short, locale)}
            </TLink>
          </SectionHead>
        </div>
        <div className="svc-apps__slider" data-reveal="fade">
          <Marquee speed={related.length * 12}>
            {related.map((r, i) => (
              <AppCard key={r.slug} a={r} locale={locale} index={i} showService />
            ))}
          </Marquee>
        </div>
        {sectors.length ? (
          <div className="container app-related__sectors" data-reveal="up">
            <p className="kicker">{d.service.sectorsTitle}</p>
            <div className="chips">
              {sectors.map((x) => (
                <TLink key={x.slug} href={paths.sector(x)} className="chip">
                  <Icon name={x.icon} size={18} />
                  {tr(x.title, locale)}
                </TLink>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="section svc-faq" id="faq">
        <div className="container faq-layout">
          <div className="faq-layout__head">
            <p className="kicker" data-reveal="fade">
              {d.service.faq}
            </p>
            <h2 className="h2" data-reveal="up">
              {d.service.faqTitle}
            </h2>
            <TLink href={paths.service(s) + "#faq"} className="link-dash" data-reveal="up">
              {locale === "nl" ? `Alle vragen over ${tr(s.short, locale)}` : `All questions about ${tr(s.short, locale)}`}
            </TLink>
          </div>
          <Faq faqs={a.faqs} locale={locale} moreLabel={d.cta.moreAnswers} answersPath={s.answersPath} />
        </div>
      </section>

      <LevelUp locale={locale} />

      <JsonLd
        data={{
          ...serviceLd({ name: title, description: tr(a.metaDescription, locale), path: paths.application(a), locale, serviceType: tr(s.title, locale) }),
          isRelatedTo: { "@type": "Service", name: tr(s.title, locale) },
        }}
      />
    </article>
  );
}
