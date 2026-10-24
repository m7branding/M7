import type { Metadata } from "next";
import { M7Badge } from "@/components/brand/M7Logo";
import { Aurora } from "@/components/motion/Aurora";
import { Counter } from "@/components/motion/Counter";
import { TLink } from "@/components/motion/TLink";
import { FolderGrid, Juices, LevelUp, LogoMarquee } from "@/components/sections/Home";
import { PageHero } from "@/components/sections/PageHero";
import { Btn } from "@/components/ui/Button";
import { SectionHead } from "@/components/ui/Cards";
import { Icon } from "@/components/ui/Icon";
import { site, stats } from "@/content/site";
import { team } from "@/content/team";
import type { Locale } from "@/content/types";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata } from "@/lib/seo";

type P = { params: { lang: Locale } };

export function generateMetadata({ params }: P): Metadata {
  const nl = params.lang === "nl";
  return buildMetadata({
    locale: params.lang,
    path: paths.about,
    title: nl ? "Over M7 | Full-service branding & design bureau | Regio Eindhoven" : "About M7 | Full-service branding & design agency | Eindhoven region",
    description: nl
      ? "M7 Branding & Design B.V. is een compact team van creatieve en technische specialisten uit Nistelrode (regio Eindhoven). Webflow Professional Partner, 250+ klanten wereldwijd."
      : "M7 Branding & Design B.V. is a compact team of creative and technical specialists from Nistelrode (Eindhoven region). Webflow Professional Partner, 250+ clients worldwide.",
  });
}

const VALUES = [
  { icon: "sparkle", nl: ["Next level, altijd", "We leggen de lat hoog: in strategie, design, techniek en service."], en: ["Next level, always", "We set the bar high: in strategy, design, technology and service."] },
  { icon: "users", nl: ["Eén team, één aanspreekpunt", "Strategie, design en development aan één tafel. Geen vertaalverlies."], en: ["One team, one contact", "Strategy, design and development at one table. No loss in translation."] },
  { icon: "bolt", nl: ["Snel én zorgvuldig", "Een compact team schakelt snel, zonder concessies aan kwaliteit."], en: ["Fast and careful", "A compact team moves fast, without compromising on quality."] },
  { icon: "shield", nl: ["Partner voor de lange termijn", "Hosting, onderhoud en doorontwikkeling: we blijven betrokken."], en: ["Long-term partner", "Hosting, maintenance and ongoing development: we stay involved."] },
] as const;

export default function AboutPage({ params }: P) {
  const locale = params.lang;
  const d = getDict(locale);
  return (
    <>
      <PageHero
        locale={locale}
        crumbs={[
          { name: d.nav.home, path: "/" },
          { name: d.nav.about, path: paths.about },
        ]}
        crumbsLabel={d.misc.breadcrumbs}
        kicker={d.about.title}
        title={[{ t: "We are " }, { t: "M7.", c: "g-pixels" }]}
        lead={d.home.oneStopText}
      >
        <Btn href={paths.contact}>{d.cta.call}</Btn>
      </PageHero>

      <LogoMarquee />

      <section className="section about-story">
        <div className="container about-story__grid">
          <div className="about-story__badge" data-reveal="scale">
            <div className="about-story__aurora">
              <Aurora palette="brand" />
            </div>
            <M7Badge className="about-story__logo" id="about" />
          </div>
          <div className="stack">
            <p className="kicker" data-reveal="fade">
              {locale === "nl" ? "Ons verhaal" : "Our story"}
            </p>
            <h2 className="h2" data-reveal="up">
              From pixels to stars.
            </h2>
            <p className="body" data-reveal="up">
              {locale === "nl"
                ? `Sinds ${site.foundingYear} bouwt M7 merken en digitale oplossingen voor ambitieuze bedrijven. Vanuit Nistelrode, in de regio Eindhoven, werken we voor klanten in Nederland, België en ver daarbuiten. Wat begon met design groeide uit tot een full-service bureau: van branding en websites tot web-apps, marketing automation, AI en video.`
                : `Since ${site.foundingYear}, M7 has been building brands and digital solutions for ambitious companies. From Nistelrode, in the Eindhoven region, we work for clients in the Netherlands, Belgium and far beyond. What started with design grew into a full-service agency: from branding and websites to web apps, marketing automation, AI and video.`}
            </p>
            <p className="body" data-reveal="up">
              {locale === "nl"
                ? "Als Webflow Professional Partner bouwen we razendsnelle websites die je zelf kunt beheren, en met ons eigen hosting- en supportteam houden we alles in de lucht."
                : "As a Webflow Professional Partner we build lightning-fast websites you can manage yourself, and with our own hosting and support team we keep everything running."}
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight about-stats">
        <div className="container">
          <dl className="about-stats__grid" data-stagger="">
            {stats.map((s) => (
              <div key={s.label.nl}>
                <dt>
                  <Counter value={s.value} suffix={s.suffix} locale={locale} />
                </dt>
                <dd>{s.label[locale]}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="section about-values">
        <div className="container">
          <SectionHead kicker={d.about.values} title="What drives us." />
          <div className="cards-2" data-stagger="">
            {VALUES.map((v) => (
              <div key={v.icon} className="benefit">
                <span className="benefit__icon">
                  <Icon name={v.icon} size={26} stroke={1.5} />
                </span>
                <h3>{v[locale][0]}</h3>
                <p>{v[locale][1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-team" id="team">
        <div className="container">
          <SectionHead kicker={d.about.team} title={d.about.teamTitle} />
          <div className="team-grid" data-stagger="">
            {team.map((m, i) => (
              <figure key={i} className="team-card">
                <span className="team-card__img">
                  <img src={m.photo} alt={m.name} loading="lazy" />
                </span>
                <figcaption>
                  <strong>{m.name}</strong>
                  <span>{tr(m.role, locale)}</span>
                  {m.fun ? <em>{tr(m.fun, locale)}</em> : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <div id="werkwijze">
        <Juices locale={locale} />
      </div>

      <section className="section section--tight">
        <div className="container">
          <SectionHead kicker={d.nav.services} title="Everything under one roof." center />
          <FolderGrid locale={locale} />
        </div>
      </section>

      <section className="section about-location">
        <div className="container about-location__grid">
          <div className="stack">
            <p className="kicker" data-reveal="fade">
              {d.about.location}
            </p>
            <h2 className="h2" data-reveal="up">
              Nistelrode, NL.
            </h2>
            <address className="body about-location__addr" data-reveal="up">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
              <br />
              {site.address.area}, {locale === "nl" ? "Nederland" : "The Netherlands"}
            </address>
            <div className="row" data-reveal="up">
              <Btn href={paths.contact}>{d.cta.call}</Btn>
              <TLink href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.address.street} ${site.address.city}`)}`} className="link-dash">
                Google Maps
              </TLink>
            </div>
          </div>
          <div className="about-location__map" data-reveal="scale" aria-hidden="true">
            <img src="/media/bg/world-dots.webp" alt="" loading="lazy" />
            <span className="experience__ping" style={{ left: "49.6%", top: "31.5%" }} />
          </div>
        </div>
      </section>

      <LevelUp locale={locale} />
    </>
  );
}
