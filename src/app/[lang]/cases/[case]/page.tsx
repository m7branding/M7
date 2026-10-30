import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CaseFacts } from "@/components/case/CaseFacts";
import { CaseHero } from "@/components/case/CaseHero";
import { CaseLightbox } from "@/components/case/CaseLightbox";
import "@/components/case/case.css";
import { TLink } from "@/components/motion/TLink";
import { CaseStory } from "@/components/sections/CaseStory";
import { LevelUp } from "@/components/sections/Home";
import { JsonLd } from "@/components/seo/JsonLd";
import { Btn } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/Cards";
import { CaseCard, CaseCover } from "@/components/ui/CaseCard";
import { Icon } from "@/components/ui/Icon";
import { LOCALES, type Locale } from "@/content/types";
import { allCases, applicationsBySlugs, casesForService, getCase, getSector, getService, nextCase } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, creativeWorkLd } from "@/lib/seo";
import { heroOf, storyFor } from "@/lib/story";

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

  return (
    <article className="case cx" style={{ ["--cc" as string]: c.color, ["--accent" as string]: services[0]?.color }}>
      {/* ---------- Hero: schermvullend (ingesprongen, afgerond), beeld of hero-video full-bleed, titel linksonder ---------- */}
      <CaseHero c={c} locale={locale} media={heroOf(c)} services={services} />

      {/* ---------- Samenvatting + specificaties ---------- */}
      <CaseFacts c={c} locale={locale} sector={sector} apps={apps} />

      {/* ---------- Het verhaal: intro, masonry, hoofdstukken, quotes, beeld ---------- */}
      <CaseStory blocks={story} c={c} locale={locale} />

      {more.length ? (
        <section className="section cx-more">
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
      <CaseLightbox
        labels={
          locale === "nl"
            ? { dialog: `${c.client}: beelden`, close: "Sluiten", prev: "Vorige", next: "Volgende", of: "van" }
            : { dialog: `${c.client}: images`, close: "Close", prev: "Previous", next: "Next", of: "of" }
        }
      />
      <JsonLd data={creativeWorkLd({ name: title, description: tr(c.summary, locale), path: paths.case(c), image: c.cover, locale, client: c.client, year: c.year })} />
    </article>
  );
}
