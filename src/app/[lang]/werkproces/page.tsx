import type { Metadata } from "next";
import { Aurora } from "@/components/motion/Aurora";
import { GlowField } from "@/components/motion/GlowField";
import { PixelGrid } from "@/components/motion/PixelGrid";
import { SplitText } from "@/components/motion/SplitText";
import { Starfield } from "@/components/motion/Starfield";
import { TLink } from "@/components/motion/TLink";
import { DeliverablesTabs } from "@/components/process/DeliverablesTabs";
import { ProcessLink, ProcessPanel, ProcessProvider } from "@/components/process/ProcessContext";
import { ProcessPicker, type PickApp, type PickLabels, type PickService } from "@/components/process/ProcessPicker";
import { StepStage, type StageLabels } from "@/components/process/StepStage";
import { LevelUp } from "@/components/sections/Home";
import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Btn } from "@/components/ui/Button";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import { ToolBadge } from "@/components/ui/ToolBadge";
import { site } from "@/content/site";
import { LOCALES, type FAQ, type Locale, type Service } from "@/content/types";
import { allApplications, allServices, applicationsFor } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { localize, tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { abs, buildMetadata, orgId } from "@/lib/seo";
import "@/styles/process.css";

type P = { params: { lang: Locale } };

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: P): Metadata {
  const nl = params.lang === "nl";
  return buildMetadata({
    locale: params.lang,
    path: paths.process,
    title: nl ? "Ons werkproces per dienst | M7" : "Our process per service | M7",
    description: nl
      ? "Hoe M7 werkt, per dienst: van branding en websites tot apps, marketing en AI. Kies je dienst en zie stap voor stap hoe we samen tot resultaat komen."
      : "How M7 works, per service: from branding and websites to apps, marketing and AI. Pick a service and see step by step how we get to results together.",
  });
}

/** Vragen uit de FAQ van een dienst die over het proces zelf gaan (doorlooptijd, rondes, overdracht...). */
const PROCESS_Q = [
  /hoe lang|duurt|hoe snel/i,
  /samenwerking|na de lancering|na livegang|feedbackrondes|correctierondes|bereid ik me voor|waar begin ik/i,
  /drukklaar|bronbestanden|zelf beheren|zelf aanpassen|bestaande tools|rapporteren|hoe meet/i,
];
function processFaqs(s: Service, max = 3): FAQ[] {
  const out: FAQ[] = [];
  for (const re of PROCESS_Q) for (const f of s.faqs) if (re.test(f.q.nl) && !out.includes(f)) out.push(f);
  return out.slice(0, max);
}

const COPY = {
  nl: {
    crumb: "Werkproces",
    kicker: (n: number) => `${n} diensten, ${n} routes`,
    title: [{ t: "Ons " }, { t: "werkproces", c: "g-pixels" }],
    lead: "Elke dienst heeft z'n eigen route, maar je weet altijd waar je aan toe bent. Kies wat je zoekt en zie stap voor stap hoe we van de eerste kop koffie naar resultaat gaan.",
    picker: {
      lead: "Ontdek ons werkproces voor",
      search: "Zoek een dienst of toepassing",
      placeholder: "Typ bv. webshop, logo, SEO of app",
      service: "Dienst",
      none: "Niks gevonden. Probeer een ander woord, zoals website, logo of app.",
      results: "{n} resultaten",
      clear: "Zoekveld leegmaken",
      suggest: "Of zoek direct op",
    },
    suggestions: ["webshop", "logo", "SEO", "app"],
    switchLead: "Andere dienst?",
    viewLabel: "Werkproces per dienst",
    process: (n: number) => `Werkproces · ${n} stappen`,
    stage: {
      step: "Stap",
      of: "van",
      steps: "Stappen",
      prev: "Vorige stap",
      next: "Volgende stap",
      upNext: "Hierna",
      restart: "Terug naar stap 1",
    },
    get: "Wat je krijgt",
    getLead: "Kies een toepassing en zie wat er concreet op tafel komt.",
    more: "Alles over",
    faq: "Vragen over het proces",
    numbers: "In cijfers",
    tools: "Waar we mee werken",
    service: "Alles over",
    rhythmKicker: "Altijd hetzelfde ritme",
    rhythmText:
      "Of we nu een logo tekenen, een webshop bouwen of een AI-agent inrichten: de basis is steeds hetzelfde. Eerst luisteren, dan pas maken. En na de lancering zijn we niet ineens onbereikbaar.",
    beats: [
      ["Luisteren", "We beginnen bij je doel, je klant en je markt. Niet bij kleurtjes of code."],
      ["Plannen", "Een helder plan met keuzes en scope, zodat niemand halverwege verrast wordt."],
      ["Maken", "Ontwerpen en bouwen in overzichtelijke rondes. Jij kijkt mee en stuurt bij."],
      ["Lanceren", "Testen, livegang en een nette overdracht. Geen losse eindjes."],
      ["Doorgroeien", "Meten, verbeteren en uitbouwen, met één vast aanspreekpunt."],
    ],
    allKicker: "Alle werkprocessen",
    allLead: "Tien diensten, tien routes. Klik er één aan en je ziet meteen hoe we het aanpakken.",
    steps: (n: number) => `${n} stappen`,
    howto: (t: string) => `Werkproces ${t} bij M7`,
  },
  en: {
    crumb: "Process",
    kicker: (n: number) => `${n} services, ${n} routes`,
    title: [{ t: "How we " }, { t: "work", c: "g-pixels" }],
    lead: "Every service has its own route, but you always know where you stand. Pick what you're looking for and see, step by step, how we get from the first coffee to results.",
    picker: {
      lead: "Discover our process for",
      search: "Search a service or application",
      placeholder: "Try web shop, logo, SEO or app",
      service: "Service",
      none: "Nothing found. Try another word, like website, logo or app.",
      results: "{n} results",
      clear: "Clear search",
      suggest: "Or jump straight to",
    },
    suggestions: ["web shop", "logo", "SEO", "app"],
    switchLead: "Another service?",
    viewLabel: "Process per service",
    process: (n: number) => `Process · ${n} steps`,
    stage: {
      step: "Step",
      of: "of",
      steps: "Steps",
      prev: "Previous step",
      next: "Next step",
      upNext: "Up next",
      restart: "Back to step 1",
    },
    get: "What you get",
    getLead: "Pick an application and see exactly what ends up on the table.",
    more: "All about",
    faq: "Questions about the process",
    numbers: "In numbers",
    tools: "What we work with",
    service: "All about",
    rhythmKicker: "Always the same rhythm",
    rhythmText:
      "Whether we're drawing a logo, building a web shop or setting up an AI agent: the basics never change. Listen first, then make. And after launch we don't suddenly go quiet.",
    beats: [
      ["Listen", "We start with your goal, your customer and your market. Not with colours or code."],
      ["Plan", "A clear plan with choices and scope, so nobody gets surprised halfway."],
      ["Make", "Design and build in clear rounds. You look along and steer."],
      ["Launch", "Testing, go-live and a tidy handover. No loose ends."],
      ["Grow", "Measure, improve and expand, with one fixed point of contact."],
    ],
    allKicker: "All processes",
    allLead: "Ten services, ten routes. Click one and see right away how we go about it.",
    steps: (n: number) => `${n} steps`,
    howto: (t: string) => `${t} process at M7`,
  },
};

export default function ProcessPage({ params }: P) {
  const locale = params.lang;
  const c = COPY[locale];
  const d = getDict(locale);
  const services = allServices();

  const pickServices: PickService[] = services.map((s) => ({
    slug: s.slug,
    title: tr(s.title, locale),
    short: tr(s.short, locale),
    color: s.color,
    icon: s.icon,
    names: [s.title.nl, s.title.en, s.short.nl, s.short.en],
    terms: s.terms,
  }));
  const pickApps: PickApp[] = allApplications().map((a) => ({
    slug: a.slug,
    service: a.service,
    title: tr(a.title, locale),
    names: [a.title.nl, a.title.en, a.slug.replace(/-/g, " ")],
  }));
  const pickLabels: PickLabels = c.picker;
  const stageLabels: StageLabels = c.stage;
  const pageUrl = abs(localize(paths.process, locale));

  return (
    <ProcessProvider slugs={services.map((s) => s.slug)} colors={Object.fromEntries(services.map((s) => [s.slug, s.color]))}>
      {/* ---------- Hero met de kiezer ---------- */}
      <section className="page-hero page-hero--center pw-hero">
        <div className="page-hero__bg">
          <GlowField
            blobs={[
              {
                x: "50%",
                y: "110%",
                c: "rgba(255,255,255,.07)",
                s: "80vmax",
                o: 0.9,
                dur: 16,
              },
              {
                x: "15%",
                y: "20%",
                c: "rgba(58,255,255,.12)",
                s: "50vmax",
                dur: 18,
                delay: -4,
              },
              {
                x: "88%",
                y: "30%",
                c: "rgba(139,61,255,.14)",
                s: "46vmax",
                dur: 22,
                delay: -9,
              },
            ]}
          />
          <Starfield density={0.5} sparkles={10} />
          <div className="page-hero__pixels">
            <PixelGrid variant="sides" />
          </div>
        </div>
        <div className="container page-hero__inner">
          <Breadcrumbs
            locale={locale}
            label={d.misc.breadcrumbs}
            items={[
              { name: d.nav.home, path: "/" },
              { name: c.crumb, path: paths.process },
            ]}
          />
          <p className="kicker kicker--center" data-reveal="fade">
            {c.kicker(services.length)}
          </p>
          <SplitText as="h1" className="h-hero page-hero__title" parts={c.title} delay={0.1} />
          <p className="lead page-hero__lead" data-reveal="up" style={{ ["--d" as string]: "0.35s" }}>
            {c.lead}
          </p>
          <div className="pw-hero__pick" data-reveal="up" style={{ ["--d" as string]: "0.5s" }}>
            <ProcessPicker services={pickServices} apps={pickApps} labels={pickLabels} suggestions={c.suggestions} />
          </div>
        </div>
      </section>

      {/* ---------- Het proces van de gekozen dienst ---------- */}
      <section className="section pw" aria-label={c.viewLabel}>
        <div className="pw__grid-bg" aria-hidden="true" />
        <div className="pw__glow" aria-hidden="true" />
        <div className="container">
          <div className="pw-bar" id="proces-view">
            <p className="kicker">{c.viewLabel}</p>
            <ProcessPicker services={pickServices} apps={pickApps} labels={{ ...pickLabels, lead: c.switchLead }} variant="compact" />
          </div>

          {services.map((s) => {
            const title = tr(s.title, locale);
            const apps = applicationsFor(s.slug);
            const faqs = processFaqs(s);
            return (
              <ProcessPanel key={s.slug} slug={s.slug} color={s.color}>
                <header className="pw-head">
                  <div className="pw-head__text">
                    <p className="pw-head__kicker">
                      <span className="pw-head__icon" aria-hidden="true">
                        <Icon name={s.icon} size={20} stroke={1.7} />
                      </span>
                      {c.process(s.process.length)}
                    </p>
                    <h2 className="pw-head__title" id={`${s.slug}-title`} tabIndex={-1}>
                      {title}
                    </h2>
                    <p className="pw-head__tagline">{tr(s.tagline, locale)}</p>
                  </div>
                  <p className="lead pw-head__lead">{tr(s.intro, locale)}</p>
                </header>

                <StepStage
                  id={s.slug}
                  steps={s.process.map((p) => ({
                    title: tr(p.title, locale),
                    text: tr(p.text, locale),
                  }))}
                  labels={stageLabels}
                />

                <div className="pw-info">
                  <div className="pw-info__main">
                    <div className="pw-card">
                      <p className="kicker">{c.get}</p>
                      <p className="pw-card__lead">{c.getLead}</p>
                      <DeliverablesTabs
                        service={s.slug}
                        label={c.get}
                        more={c.more}
                        apps={apps.map((a) => ({
                          slug: a.slug,
                          title: tr(a.title, locale),
                          summary: tr(a.summary, locale),
                          href: paths.application(a),
                          deliverables: a.deliverables[locale],
                        }))}
                      />
                    </div>
                    {faqs.length ? (
                      <div className="pw-faq">
                        <p className="kicker">{c.faq}</p>
                        <Faq faqs={faqs} locale={locale} withLd={false} />
                      </div>
                    ) : null}
                  </div>

                  <aside className="pw-info__aside">
                    <div className="pw-card pw-facts">
                      <p className="kicker">{c.numbers}</p>
                      <dl className="pw-facts__stats">
                        {s.highlights.map((h) => (
                          <div key={h.value + h.label.nl}>
                            <dt>{h.value}</dt>
                            <dd>{tr(h.label, locale)}</dd>
                          </div>
                        ))}
                      </dl>
                      <p className="kicker">{c.tools}</p>
                      <div className="pw-facts__tools">
                        {s.tools.slice(0, 8).map((t) => (
                          <ToolBadge key={t} slug={t} />
                        ))}
                      </div>
                      <div className="pw-facts__cta">
                        <Btn href={site.letsgo}>{d.cta.launch}</Btn>
                        <TLink href={paths.service(s)} className="link-dash">
                          {c.service} {title}
                        </TLink>
                      </div>
                    </div>
                  </aside>
                </div>
              </ProcessPanel>
            );
          })}
        </div>
      </section>

      {/* ---------- Altijd hetzelfde ritme ---------- */}
      <section className="section pw-rhythm" aria-labelledby="rhythm-title">
        <div className="container">
          <div className="pw-rhythm__panel" data-reveal="scale">
            <div className="pw-rhythm__aurora" aria-hidden="true">
              <Aurora palette="violet" intensity={0.85} />
            </div>
            <div className="pw-rhythm__grid">
              <div className="pw-rhythm__head">
                <p className="kicker">{c.rhythmKicker}</p>
                <h2 className="h2" id="rhythm-title">
                  Different work, <span className="g-pixels">same rhythm.</span>
                </h2>
                <p className="lead">{c.rhythmText}</p>
              </div>
              <ol className="pw-rhythm__beats" data-stagger="">
                {c.beats.map(([h, t], i) => (
                  <li key={h}>
                    <span className="pw-rhythm__num">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3>{h}</h3>
                      <p>{t}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Alle diensten → hun proces ---------- */}
      <section className="section pw-all" aria-labelledby="all-title">
        <div className="container">
          <div className="section-head section-head--center">
            <div className="stack-sm">
              <p className="kicker kicker--center" data-reveal="fade">
                {c.allKicker}
              </p>
              <h2 className="h2" id="all-title" data-reveal="up">
                Pick your <span className="g-stars">route.</span>
              </h2>
              <p className="lead" data-reveal="up" style={{ ["--d" as string]: "0.1s" }}>
                {c.allLead}
              </p>
            </div>
          </div>
          <ul className="pw-all__grid" data-stagger="">
            {services.map((s) => (
              <li key={s.slug}>
                <ProcessLink slug={s.slug} className="pw-tile" style={{ ["--accent" as string]: s.color }}>
                  <span className="pw-tile__top">
                    <span className="pw-tile__icon" aria-hidden="true">
                      <Icon name={s.icon} size={22} stroke={1.6} />
                    </span>
                    <span className="pw-tile__count">{c.steps(s.process.length)}</span>
                  </span>
                  <span className="pw-tile__title">{tr(s.title, locale)}</span>
                  <span className="pw-tile__route">
                    <span>{tr(s.process[0].title, locale)}</span>
                    <span>{tr(s.process[s.process.length - 1].title, locale)}</span>
                  </span>
                </ProcessLink>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <LevelUp locale={locale} />

      <JsonLd
        data={services.map((s) => ({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "@id": `${pageUrl}#${s.slug}`,
          name: c.howto(tr(s.title, locale)),
          description: tr(s.intro, locale),
          url: `${pageUrl}#${s.slug}`,
          inLanguage: locale === "nl" ? "nl-NL" : "en-US",
          publisher: { "@id": orgId },
          step: s.process.map((p, i) => ({
            "@type": "HowToStep",
            position: i + 1,
            name: tr(p.title, locale),
            text: tr(p.text, locale),
          })),
        }))}
      />
    </ProcessProvider>
  );
}
