import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollShowcase } from "@/components/motion/ScrollShowcase";
import { TLink } from "@/components/motion/TLink";
import { LevelUp, LogoMarquee } from "@/components/sections/Home";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Btn } from "@/components/ui/Button";
import { ServiceBento } from "@/components/sector/ServiceBento";
import { SectionHead } from "@/components/ui/Cards";
import { CasesMasonry } from "@/components/ui/CaseCard";
import { Faq } from "@/components/ui/Faq";
import { FaqTabs } from "@/components/ui/FaqTabs";
import { Marquee } from "@/components/ui/Marquee";
import { RichText } from "@/components/ui/RichText";
import { site } from "@/content/site";
import { LOCALES, type Locale } from "@/content/types";
import { allSectors, applicationsBySlugs, casesForSector, getSector, getService } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, faqLd, serviceLd } from "@/lib/seo";

type P = { params: { lang: Locale; sector: string } };

export const dynamicParams = false;
export function generateStaticParams() {
  return LOCALES.flatMap((lang) => allSectors().map((s) => ({ lang, sector: s.slug })));
}

export function generateMetadata({ params }: P): Metadata {
  const s = getSector(params.sector);
  if (!s) return {};
  return buildMetadata({ locale: params.lang, path: paths.sector(s), title: tr(s.metaTitle, params.lang), description: tr(s.metaDescription, params.lang) });
}

export default function SectorPage({ params }: P) {
  const locale = params.lang;
  const s = getSector(params.sector);
  if (!s) notFound();
  const d = getDict(locale);
  const title = tr(s.title, locale);
  const services = s.services.map((x) => getService(x)!).filter(Boolean);
  const apps = applicationsBySlugs(s.applications);
  const cases = casesForSector(s.slug);
  const half = Math.ceil(apps.length / 2);
  const appRows = [apps.slice(0, half), apps.slice(half)].filter((r) => r.length);
  const segments = s.segments ?? [];
  const audiences = s.audiences ?? [];
  const allFaqs = [...s.faqs, ...segments.flatMap((g) => g.faqs)];

  return (
    <article className="sector">
      <PageHero
        locale={locale}
        crumbs={[
          { name: d.nav.home, path: "/" },
          { name: d.nav.sectors, path: paths.sectors },
          { name: title, path: paths.sector(s) },
        ]}
        crumbsLabel={d.misc.breadcrumbs}
        kicker={d.nav.sectors}
        title={title}
        lead={tr(s.intro, locale)}
      >
        <Btn href={site.letsgo}>{d.cta.launch}</Btn>
      </PageHero>

      {/* klantlogo's, zoals op home */}
      <LogoMarquee />

      {s.image ? (
        <section className="sector-showcase" aria-label={title}>
          <ScrollShowcase image={s.image} position={s.imagePosition} alt={title} quote={s.quote ? tr(s.quote, locale) : undefined} />
        </section>
      ) : null}

      <section className="section sector-intro">
        <div className="container container--narrow">
          <RichText text={tr(s.description, locale)} className="body sector-intro__text" locale={locale} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <SectionHead kicker={d.service.challenges} title={locale === "nl" ? "Wat we vaak zien." : "What we often see."} />
          <div className="cards-2" data-stagger="">
            {s.challenges.map((c, i) => (
              <div key={i} className="benefit">
                <span className="benefit__num">0{i + 1}</span>
                <h3>{tr(c.title, locale)}</h3>
                <p>{tr(c.text, locale)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {cases.length ? (
        <section className="section section--tight">
          <div className="container">
            <SectionHead kicker={d.service.projects} title={d.service.projectsTitle} />
            <div className="svc-cases__grid">
              <CasesMasonry list={cases} locale={locale} label={d.cta.viewCase} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="section sector-help">
        <div className="container">
          <SectionHead kicker={d.service.relevantServices} title={d.service.howWeHelp} />
          <ServiceBento sector={s} locale={locale} />
        </div>
        {appRows.length ? (
          <div className="sector-ticker" data-reveal="fade">
            <div className="container">
              <p className="kicker">{d.service.relevantApplications}</p>
            </div>
            <div className="sector-ticker__rows">
              {appRows.map((row, ri) => (
                <Marquee key={ri} speed={Math.max(36, row.length * (12 + ri * 2))} reverse={ri === 1}>
                  {row.map((a) => (
                    <TLink key={a.slug} href={paths.application(a)} className="chip" style={{ ["--accent" as string]: getService(a.service)!.color }}>
                      <span className="chip__dot" />
                      {tr(a.title, locale)}
                    </TLink>
                  ))}
                </Marquee>
              ))}
            </div>
          </div>
        ) : null}
      </section>

      <section className="section svc-faq sector-faq" id="faq">
        <div className="container">
          <div className="sector-faq__head">
            <p className="kicker" data-reveal="fade">
              {d.service.faq}
            </p>
            <h2 className="h2" data-reveal="up">
              {d.service.faqTitle}
            </h2>
          </div>
          {segments.length ? (
            <FaqTabs
              label={d.service.faqBySegment}
              tabs={[
                {
                  id: "algemeen",
                  name: d.service.faqGeneral,
                  count: s.faqs.length,
                  content: <Faq faqs={s.faqs} locale={locale} moreLabel={d.cta.moreAnswers} withLd={false} />,
                },
                ...segments.map((g, i) => ({
                  id: `doelgroep-${i + 1}`,
                  name: tr(g.name, locale),
                  count: g.faqs.length,
                  intro: tr(g.intro, locale),
                  content: <Faq faqs={g.faqs} locale={locale} withLd={false} />,
                })),
              ]}
            />
          ) : (
            <Faq faqs={s.faqs} locale={locale} moreLabel={d.cta.moreAnswers} withLd={false} />
          )}
        </div>
      </section>

      {audiences.length ? (
        <section className="section section--tight sector-aud" aria-labelledby="aud-title">
          <div className="container">
            <SectionHead kicker={d.service.audiences} title={d.service.audiencesTitle} id="aud-title" />
            <ul className="aud" data-stagger="">
              {audiences.map((a, i) => (
                <li key={i}>{tr(a, locale)}</li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <LevelUp locale={locale} />
      <JsonLd
        data={serviceLd({
          name: tr(s.metaTitle, locale).split(" | ")[0],
          description: tr(s.metaDescription, locale),
          path: paths.sector(s),
          locale,
          serviceType: title,
          offers: services.map((x) => tr(x.title, locale)),
        })}
      />
      <JsonLd data={faqLd(allFaqs, locale)} />
    </article>
  );
}
