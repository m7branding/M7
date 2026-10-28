import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutIcon, AMENITY_ICONS } from "@/components/about/AboutIcon";
import { ClientMap } from "@/components/about/ClientMap";
import { Gallery, type GalleryPhoto } from "@/components/about/Gallery";
import { masonryLayout, masonryOrder, masonrySpan } from "@/components/about/masonry";
import { M7Badge } from "@/components/brand/M7Logo";
import { Aurora } from "@/components/motion/Aurora";
import { Counter } from "@/components/motion/Counter";
import { FolderGrid, Juices, LevelUp, LogoMarquee } from "@/components/sections/Home";
import { SectionHead } from "@/components/ui/Cards";
import { Icon } from "@/components/ui/Icon";
import { aboutCopy, fill } from "@/content/about";
import { office, officePhoto, officePhotos } from "@/content/office";
import { site, stats } from "@/content/site";
import { team } from "@/content/team";
import type { Locale } from "@/content/types";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata } from "@/lib/seo";
import "@/styles/about.css";

type P = { params: { lang: Locale } };

export function generateMetadata({ params }: P): Metadata {
  const nl = params.lang === "nl";
  return buildMetadata({
    locale: params.lang,
    path: paths.about,
    title: nl ? "Over M7 | Branding- & designbureau in Nistelrode, Noord-Brabant" : "About M7 | Branding & design agency in Nistelrode, the Netherlands",
    description: nl
      ? "Maak kennis met M7: een full-service branding- en designbureau met een eigen kantoor in het buitengebied van Nistelrode, tussen Oss, Uden, Den Bosch en Eindhoven. Webflow Professional Partner, 250+ klanten wereldwijd."
      : "Meet M7: a full-service branding and design agency with its own office in the countryside of Nistelrode, between Oss, Uden, 's-Hertogenbosch and Eindhoven. Webflow Professional Partner, 250+ clients worldwide.",
  });
}

const VALUES = [
  {
    icon: "sparkle",
    nl: ["Next level, altijd", "We leggen de lat hoog: in strategie, design, techniek en service."],
    en: ["Next level, always", "We set the bar high: in strategy, design, technology and service."],
  },
  {
    icon: "users",
    nl: ["Eén team, één aanspreekpunt", "Strategie, design en development aan één tafel. Geen vertaalverlies."],
    en: ["One team, one contact", "Strategy, design and development at one table. No loss in translation."],
  },
  {
    icon: "bolt",
    nl: ["Snel én zorgvuldig", "Een compact team schakelt snel, zonder concessies aan kwaliteit."],
    en: ["Fast and careful", "A compact team moves fast, without compromising on quality."],
  },
  {
    icon: "shield",
    nl: ["Partner voor de lange termijn", "Hosting, onderhoud en doorontwikkeling: we blijven betrokken."],
    en: ["Long-term partner", "Hosting, maintenance and ongoing development: we stay involved."],
  },
] as const;

/** Masonry-gat onder elke foto, in procenten van de kolombreedte (zie .agal in about.css). */
const GAP = 5;

/** Foto's voor de masonry: gebalanceerde volgorde + vaste plek per breakpoint (4 / 3 / 2 kolommen). */
const photos = (kind: "office" | "culture", locale: Locale): GalleryPhoto[] => {
  const list = masonryOrder(
    officePhotos.filter((p) => p.kind === kind),
    (p) => masonrySpan(p.w, p.h, GAP),
    1,
  );
  const spans = list.map((p) => masonrySpan(p.w, p.h, GAP));
  const [l, m, sm] = [4, 3, 2].map((k) => masonryLayout(spans, k, GAP));
  return list.map((p, i) => {
    const k = 720 / Math.max(p.w, p.h);
    return {
      sm: officePhoto(p, "sm"),
      lg: officePhoto(p, "lg"),
      w: Math.round(p.w * k),
      h: Math.round(p.h * k),
      alt: tr(p.alt, locale),
      at: { l: [l[i].col, l[i].span], m: [m[i].col, m[i].span], s: [sm[i].col, sm[i].span] },
    };
  });
};

export default function AboutPage({ params }: P) {
  const locale = params.lang;
  const d = getDict(locale);
  const a = aboutCopy;
  const clients = stats.find((s) => s.label.en === "Clients worldwide");
  const clientsTxt = clients ? `${clients.value}${clients.suffix}` : "250+";
  const gt = { open: tr(a.gallery.open, locale), close: tr(a.gallery.close, locale), prev: tr(a.gallery.prev, locale), next: tr(a.gallery.next, locale) };
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${site.legalName}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`)}`;

  return (
    <>
      <AboutHero locale={locale} />

      <LogoMarquee />

      {/* ---------- Ons verhaal + cijfers ---------- */}
      <section className="section about-story" aria-labelledby="about-story-title">
        <div className="container about-story__grid">
          <div className="about-story__badge" data-reveal="scale">
            <div className="about-story__aurora">
              <Aurora palette="brand" />
            </div>
            <M7Badge className="about-story__logo" id="about" />
            <span className="about-story__stamp" aria-hidden="true">
              Est. {site.foundingYear} · Nistelrode
            </span>
          </div>
          <div className="about-story__text">
            <p className="kicker" data-reveal="fade">
              {tr(a.story.kicker, locale)}
            </p>
            <h2 className="h2" id="about-story-title" data-reveal="up">
              From pixels to stars.
            </h2>
            <p className="body" data-reveal="up">
              {fill(tr(a.story.p1, locale), { year: site.foundingYear })}
            </p>
            <p className="body" data-reveal="up">
              {tr(a.story.p2, locale)}
            </p>
            <ul className="about-facts" data-stagger="">
              <li>
                <span className="about-facts__icon">
                  <Icon name="calendar" size={20} stroke={1.6} />
                </span>
                <span>
                  <small>{tr(a.story.since, locale)}</small>
                  <strong>{site.foundingYear}</strong>
                </span>
              </li>
              <li>
                <span className="about-facts__icon">
                  <Icon name="star" size={20} stroke={1.6} />
                </span>
                <a href={site.partner.url} target="_blank" rel="noopener">
                  <small>{site.partner.platform}</small>
                  <strong>{site.partner.label}</strong>
                </a>
              </li>
              <li>
                <span className="about-facts__icon">
                  <Icon name="globe" size={20} stroke={1.6} />
                </span>
                <span>
                  <small>{tr(a.story.clients, locale)}</small>
                  <strong>{clientsTxt}</strong>
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <dl className="about-stats" aria-label={tr(a.story.statsLabel, locale)} data-stagger="">
            {stats.map((s) => (
              <div key={s.label.nl}>
                <dt>{s.label[locale]}</dt>
                <dd>
                  <Counter value={s.value} suffix={s.suffix} locale={locale} />
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ---------- Waarden ---------- */}
      <section className="section section--tight about-values">
        <div className="container">
          <SectionHead kicker={d.about.values} title="What drives us." />
          <div className="about-values__grid" data-stagger="">
            {VALUES.map((v, i) => (
              <div key={v.icon} className="benefit">
                <span className="about-values__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
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

      {/* ---------- Team ---------- */}
      <section className="section about-team" id="team" aria-labelledby="about-team-title">
        <div className="container">
          <SectionHead kicker={d.about.team} title={d.about.teamTitle} id="about-team-title" text={tr(a.team.text, locale)} />
          <ul className="about-team__grid" data-stagger="">
            {team.map((m) => (
              <li key={m.slug} className={`tcard${m.dog ? " tcard--dog" : ""}`}>
                <figure>
                  <span className="tcard__img">
                    <img src={m.photo} alt={m.name} width={800} height={999} loading="lazy" decoding="async" />
                  </span>
                  {m.founder ? <span className="tcard__tag">{tr(a.team.founder, locale)}</span> : null}
                  <figcaption className="tcard__cap">
                    <strong>{m.name}</strong>
                    <span>{tr(m.role, locale)}</span>
                    {m.fun ? <em>{tr(m.fun, locale)}</em> : null}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- Kantoor & werkgebied (SEO) ---------- */}
      <section className="section about-office" id="kantoor" aria-labelledby="about-office-title">
        <div className="container">
          <div className="about-office__head">
            <div className="stack-sm">
              <p className="kicker" data-reveal="fade">
                {tr(a.office.kicker, locale)}
              </p>
              <h2 className="h2" id="about-office-title" data-reveal="up">
                {tr(a.office.title, locale)}
              </h2>
              <p className="lead about-office__intro" data-reveal="up" style={{ ["--d" as string]: "0.1s" }}>
                {tr(a.office.intro, locale)}
              </p>
            </div>
            <div className="visit" data-reveal="up" style={{ ["--d" as string]: "0.2s" }}>
              <span className="visit__icon">
                <AboutIcon name="pin" size={22} />
              </span>
              <div className="visit__body">
                <p className="visit__kicker">{tr(a.office.visit, locale)}</p>
                <address>
                  {site.legalName}
                  <br />
                  {site.address.street}, {site.address.postalCode} {site.address.city}
                  <br />
                  {site.address.region}, {tr(a.office.country, locale)}
                </address>
                <a className="link-dash" href={mapsUrl} target="_blank" rel="noopener">
                  {tr(a.office.route, locale)}
                </a>
              </div>
            </div>
          </div>

          <Gallery photos={photos("office", locale)} label={tr(a.office.gallery, locale)} t={gt} />

          <div className="about-office__info">
            <div className="about-office__block" data-reveal="up">
              <h3>{tr(a.office.regionH, locale)}</h3>
              <p className="body">{tr(a.office.region, locale)}</p>
            </div>
            <div className="about-office__block" data-reveal="up" style={{ ["--d" as string]: "0.08s" }}>
              <h3>{tr(a.office.reachH, locale)}</h3>
              <p className="body">{fill(tr(a.office.reach, locale), { clients: clientsTxt })}</p>
            </div>
            <div className="about-office__block" data-reveal="up" style={{ ["--d" as string]: "0.16s" }}>
              <h3>{tr(a.office.amenitiesH, locale)}</h3>
              <ul className="amen">
                {office.amenities.map((am, i) => (
                  <li key={am.nl}>
                    <span className="amen__icon">
                      <AboutIcon name={AMENITY_ICONS[i] || "check"} size={18} />
                    </span>
                    {tr(am, locale)}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Cultuur ---------- */}
      <section className="section about-culture" id="cultuur" aria-labelledby="about-culture-title">
        <div className="container">
          <div className="about-culture__head">
            <div className="stack-sm">
              <p className="kicker" data-reveal="fade">
                {tr(a.culture.kicker, locale)}
              </p>
              <h2 className="h2" id="about-culture-title" data-reveal="up">
                {tr(a.culture.title, locale)}
              </h2>
            </div>
            <p className="lead" data-reveal="up" style={{ ["--d" as string]: "0.1s" }}>
              {tr(a.culture.intro, locale)}
            </p>
          </div>
          <ul className="rituals" data-stagger="">
            {a.culture.rituals.map((r) => (
              <li key={r.h.nl} className="ritual">
                <span className="ritual__icon">
                  <AboutIcon name={r.icon} size={22} />
                </span>
                <h3>{tr(r.h, locale)}</h3>
                <p>{tr(r.p, locale)}</p>
              </li>
            ))}
          </ul>
          <Gallery photos={photos("culture", locale)} label={tr(a.culture.gallery, locale)} className="about-culture__gallery" t={gt} />
        </div>
      </section>

      {/* ---------- Werkwijze + diensten ---------- */}
      <div id="werkwijze">
        <Juices locale={locale} />
      </div>

      <section className="section section--tight about-services">
        <div className="container">
          <SectionHead kicker={d.nav.services} title="Everything under one roof." center />
          <FolderGrid locale={locale} />
        </div>
      </section>

      <ClientMap locale={locale} />

      <LevelUp locale={locale} />
    </>
  );
}
