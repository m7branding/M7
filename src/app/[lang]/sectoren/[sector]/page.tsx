import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ScrollShowcase } from "@/components/motion/ScrollShowcase";
import { TLink } from "@/components/motion/TLink";
import { LevelUp } from "@/components/sections/Home";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Btn } from "@/components/ui/Button";
import { SectionHead, ServiceCard } from "@/components/ui/Cards";
import { CasesMasonry } from "@/components/ui/CaseCard";
import { Faq } from "@/components/ui/Faq";
import { RichText } from "@/components/ui/RichText";
import { site } from "@/content/site";
import { LOCALES, type Locale } from "@/content/types";
import { allSectors, applicationsBySlugs, casesForSector, getSector, getService } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, serviceLd } from "@/lib/seo";

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

      <section className="section">
        <div className="container">
          <SectionHead kicker={d.service.relevantServices} title={d.service.howWeHelp} />
          <div className="cards-3" data-stagger="">
            {services.map((x, i) => (
              <ServiceCard key={x.slug} s={x} locale={locale} index={i} />
            ))}
          </div>
          <div className="sector-apps" data-reveal="up">
            <p className="kicker">{d.service.relevantApplications}</p>
            <div className="chips">
              {apps.map((a) => (
                <TLink key={a.slug} href={paths.application(a)} className="chip chip--lg" style={{ ["--accent" as string]: getService(a.service)!.color }}>
                  <span className="chip__dot" />
                  {tr(a.title, locale)}
                </TLink>
              ))}
            </div>
          </div>
        </div>
      </section>

      {cases.length ? (
        <section className="section">
          <div className="container">
            <SectionHead kicker={d.service.projects} title={d.service.projectsTitle} />
            <div className="svc-cases__grid">
              <CasesMasonry list={cases} locale={locale} label={d.cta.viewCase} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="section svc-faq" id="faq">
        <div className="container faq-layout">
          <div className="faq-layout__head">
            <p className="kicker" data-reveal="fade">
              {d.service.faq}
            </p>
            <h2 className="h2" data-reveal="up">
              {d.service.faqTitle}
            </h2>
          </div>
          <Faq faqs={s.faqs} locale={locale} moreLabel={d.cta.moreAnswers} />
        </div>
      </section>

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
    </article>
  );
}
