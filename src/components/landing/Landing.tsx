import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Mockup } from "@/components/mockups";
import { ServiceMedia } from "@/components/mockups/ServiceMedia";
import { GlowField } from "@/components/motion/GlowField";
import { PixelGrid } from "@/components/motion/PixelGrid";
import { SplitText } from "@/components/motion/SplitText";
import { TLink } from "@/components/motion/TLink";
import { IntakeCta } from "@/components/overlay/OverlayButton";
import { PathBlock } from "@/components/overlay/PathBlock";
import { ContactForm } from "@/components/sections/ContactForm";
import { LevelUp, LogoMarquee } from "@/components/sections/Home";
import { LogoWall } from "@/components/sections/LogoWall";
import { Testimonials } from "@/components/sections/Testimonials";
import { JsonLd } from "@/components/seo/JsonLd";
import { Showcase, hasShowcase } from "@/components/showcase";
import { TeamLine } from "@/components/support/TeamLine";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Btn } from "@/components/ui/Button";
import { ArrowLink } from "@/components/ui/ArrowLink";
import { SectionHead } from "@/components/ui/Cards";
import { CasesMasonry } from "@/components/ui/CaseCard";
import { ChapterBlock } from "@/components/ui/Chapter";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import { SocialIcon } from "@/components/ui/Social";
import { landings, type LandingSlug } from "@/content/landings";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { allServices, casesForService, getApplication, getService } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, serviceLd } from "@/lib/seo";
import "@/styles/landing.css";

/** Landingspagina's bestaan alleen in het Nederlands. */
const L: Locale = "nl";
/** Anker van het formulier onderaan; de CTA's boven de vouw verwijzen ernaar. */
const FORM_ID = "aanvraag";

const COPY = {
  message: "Stuur een bericht",
  intake: "Korte intake",
  startIntake: "Start de intake",
  ask: "Stel je vraag",
  direct: "Liever direct contact?",
  whatsapp: "WhatsApp ons",
};

export function landingMetadata(slug: LandingSlug, locale: Locale): Metadata {
  if (locale !== L) return {};
  const l = landings[slug];
  return buildMetadata({ locale: L, path: `/${l.slug}`, title: l.metaTitle, description: l.metaDescription, nlOnly: true });
}

/**
 * Landingspagina (alleen NL) met de opbouw van de landingspagina's op de vorige site:
 * hero met belofte en CTA → klantlogo's → waarom M7 (USP's) → de uitdaging + CTA → reviews →
 * cases → werkwijze + CTA → verdieping (platform / rebranding) → FAQ → formulier → afsluitende CTA.
 * Teksten, werkwijze, FAQ, cases en reviews komen uit de dienst; de eigen copy staat in content/landings.ts.
 * De route roept voor `en` zelf notFound() aan.
 */
export function LandingPage({ slug }: { slug: LandingSlug }) {
  const l = landings[slug];
  const s = getService(l.service);
  if (!s) notFound();
  const d = getDict(L);
  const path = `/${l.slug}`;
  const cases = casesForService(s.slug);
  const show = hasShowcase(s.slug);
  const story = s.chapters?.[l.story.chapter];
  const deep = s.seo.sections[l.deepDive.section];
  const title = l.hero.title.includes(l.hero.highlight)
    ? (() => {
        const [before, ...rest] = l.hero.title.split(l.hero.highlight);
        return [{ t: before }, { t: l.hero.highlight, c: "g-accent" }, { t: rest.join(l.hero.highlight) }].filter((p) => p.t);
      })()
    : l.hero.title;

  return (
    <article className="svc lp" style={{ ["--accent" as string]: s.color }}>
      {/* ---------- Hero: belofte + CTA boven de vouw ---------- */}
      <section className={`page-hero svc-hero lp-hero${show ? " svc-hero--show" : ""}`} aria-labelledby="lp-title">
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
              locale={L}
              label={d.misc.breadcrumbs}
              items={[
                { name: d.nav.home, path: "/" },
                { name: l.name, path },
              ]}
            />
            <SplitText as="h1" id="lp-title" className="h1" parts={title} delay={0.1} />
            <p className="lead" data-reveal="up" style={{ ["--d" as string]: "0.3s" }}>
              {l.hero.lead}
            </p>
            <div className="row svc-hero__cta" data-reveal="up" style={{ ["--d" as string]: "0.5s" }}>
              <IntakeCta>{d.cta.launch}</IntakeCta>
              <a href={`#${FORM_ID}`} className="link-dash">
                {COPY.message}
              </a>
            </div>
            <dl className="svc-hero__stats" data-stagger="">
              {s.highlights.map((h) => (
                <div key={h.value + h.label.nl}>
                  <dt>{h.value}</dt>
                  <dd>{tr(h.label, L)}</dd>
                </div>
              ))}
            </dl>
          </div>
          {show ? null : (
            <div className="svc-hero__visual" data-reveal="scale" style={{ ["--d" as string]: "0.2s" }}>
              {s.media ? <ServiceMedia media={s.media} alt={tr(s.title, L)} placement="hero" /> : <Mockup kind={s.mockup} accent={s.color} />}
            </div>
          )}
        </div>
        {show ? (
          <div className="svc-hero__show">
            <Showcase slug={s.slug} hero />
          </div>
        ) : null}
      </section>

      {/* ---------- Klantlogo's ---------- */}
      <LogoMarquee />

      {/* ---------- Waarom M7: vier USP's, elk gekoppeld aan een toepassing ---------- */}
      <section className="section lp-why" id="waarom-m7" aria-labelledby="lp-why-title">
        <div className="container">
          <SectionHead kicker={l.why.kicker} title={l.why.title} text={l.why.text} id="lp-why-title" />
          <ul className="lp-why__grid" data-stagger="">
            {l.why.items.map((it, i) => {
              const a = getApplication(it.app);
              return (
                <li key={it.title} className="benefit">
                  <span className="benefit__num">0{i + 1}</span>
                  <h3>{it.title}</h3>
                  <p>{it.text}</p>
                  {a ? (
                    <TLink href={paths.application(a)} className="link-dash lp-why__link">
                      {tr(a.title, L)}
                    </TLink>
                  ) : null}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------- De uitdaging (hoofdstuk uit de dienst) + korte intake ---------- */}
      {story ? <ChapterBlock c={story} locale={L} id="lp-story" /> : null}
      <section className="section section--tight lp-path" aria-label={COPY.intake}>
        <div className="container">
          <PathBlock reveal palette={l.palette} className="pathblk--wide" kicker={COPY.intake} title={l.story.cta.title} text={l.story.cta.text}>
            <IntakeCta>{COPY.startIntake}</IntakeCta>
          </PathBlock>
        </div>
      </section>

      {/* ---------- Reviews: eerst over deze dienst, aangevuld met andere echte reviews ---------- */}
      <section className="section svc-reviews" id="reviews" aria-labelledby="lp-reviews-title">
        <div className="container">
          <SectionHead kicker={l.reviews.kicker} title={l.reviews.title} id="lp-reviews-title" />
        </div>
        <Testimonials locale={L} service={s.slug} />
      </section>

      {/* ---------- Cases van deze dienst ---------- */}
      {cases.length ? (
        <section className="section svc-cases" id="projecten" aria-labelledby="lp-cases-title">
          <div className="container">
            <SectionHead kicker={d.service.projects} title={d.service.projectsTitle} id="lp-cases-title">
              <ArrowLink href={`${paths.cases}?dienst=${s.slug}`}>
                {d.nav.allCases} <span className="count-badge">{cases.length}</span>
              </ArrowLink>
            </SectionHead>
            <div className="svc-cases__grid">
              <CasesMasonry list={cases.slice(0, 7)} locale={L} label={d.cta.viewCase} />
            </div>
          </div>
        </section>
      ) : null}

      {l.logoWall ? <LogoWall locale={L} /> : null}

      {/* ---------- Werkwijze + CTA ---------- */}
      <section className="section svc-process" id="werkwijze" aria-labelledby="lp-process-title">
        <div className="container">
          <SectionHead kicker={d.service.process} title={l.process.title} text={l.process.text} id="lp-process-title" />
          <ol className="steps">
            {s.process.map((p, i) => (
              <li key={i} className="steps__item" data-reveal="up" style={{ ["--d" as string]: `${i * 0.06}s` }}>
                <span className="steps__num">{i + 1}</span>
                <div>
                  <h3>{tr(p.title, L)}</h3>
                  <p>{tr(p.text, L)}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="lp-next" data-reveal="up">
            <p className="lp-next__text">{l.process.cta}</p>
            <div className="row">
              <IntakeCta>{d.cta.launch}</IntakeCta>
              <a href={`#${FORM_ID}`} className="link-dash">
                {COPY.message}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Verdieping uit de SEO-tekst van de dienst (platformkeuze / rebranding) ---------- */}
      {deep ? <ChapterBlock c={{ ...deep, kicker: { nl: l.deepDive.kicker, en: l.deepDive.kicker } }} locale={L} id="lp-deep" /> : null}

      {/* ---------- FAQ (FAQPage-markup staat al op de dienstpagina) ---------- */}
      <section className="section svc-faq" id="faq" aria-labelledby="lp-faq-title">
        <div className="container faq-layout">
          <div className="faq-layout__head">
            <p className="kicker" data-reveal="fade">
              {d.service.faq}
            </p>
            <h2 className="h2" id="lp-faq-title" data-reveal="up">
              {d.service.faqTitle}
            </h2>
            <p className="lead" data-reveal="up">
              {l.faq.lead}
            </p>
            <div data-reveal="up">
              <TeamLine locale={L} kind="ask" show={4} size={36} className="faq-team" />
            </div>
            <div data-reveal="up">
              <Btn href={`#${FORM_ID}`} size="sm">
                {COPY.ask}
              </Btn>
            </div>
          </div>
          <Faq faqs={s.faqs} locale={L} withLd={false} />
        </div>
      </section>

      {/* ---------- Formulier ---------- */}
      <section className="section lp-form" id={FORM_ID} aria-labelledby="lp-form-title">
        <div className="container contact__grid">
          <div className="card card--pad" data-reveal="up">
            <div className="lp-form__head">
              <p className="kicker">{l.contact.kicker}</p>
              <h2 className="h2" id="lp-form-title">
                {l.contact.title}
              </h2>
              <p className="lp-form__text">{l.contact.text}</p>
            </div>
            <ContactForm
              services={allServices().map((x) => ({ value: x.slug, label: tr(x.title, L) }))}
              labels={d.contact}
              form={l.form}
              preset={[s.slug]}
            />
          </div>
          <aside className="contact__aside">
            <div className="contact__card card card--pad" data-reveal="up">
              <TeamLine locale={L} show={3} size={36} />
              <p className="kicker">{COPY.direct}</p>
              <a className="contact__mail" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              {site.phone ? (
                <a className="contact__phone" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  <Icon name="phone" size={18} /> {site.phone}
                </a>
              ) : null}
              {site.whatsapp ? (
                <a className="contact__phone" href={`https://wa.me/${site.whatsapp.replace(/\D/g, "")}`} target="_blank" rel="noopener">
                  <SocialIcon name="whatsapp" size={18} /> {COPY.whatsapp}
                </a>
              ) : null}
            </div>
          </aside>
        </div>
      </section>

      <LevelUp locale={L} />

      <JsonLd
        data={serviceLd({
          name: l.name,
          description: l.metaDescription,
          path,
          locale: L,
          serviceType: tr(s.title, L),
        })}
      />
    </article>
  );
}
