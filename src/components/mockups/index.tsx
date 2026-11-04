/* ============================================================
   Unieke geanimeerde mockups per peiler. Pure markup + CSS
   (zie styles/mockups.css): schaalt via container queries,
   pauzeert buiten beeld ([data-play]) en respecteert
   prefers-reduced-motion. Eigen Lottie/video? Zet `media` op de
   dienst; dan wordt <ServiceMedia> gebruikt i.p.v. deze mockup.
   ============================================================ */

import type { MockupKey } from "./keys";

export type { MockupKey };

const Phone = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`dv-phone${className ? " " + className : ""}`}>
    <div className="dv-phone__screen">
      <span className="dv-phone__island" />
      {children}
    </div>
  </div>
);

const Browser = ({ children, className, url = "m7branding.com" }: { children: React.ReactNode; className?: string; url?: string }) => (
  <div className={`dv-browser${className ? " " + className : ""}`}>
    <div className="dv-browser__bar">
      <i />
      <i />
      <i />
      <span className="dv-browser__url">{url}</span>
    </div>
    <div className="dv-browser__body">{children}</div>
  </div>
);

/* 1 — Branding: logo-constructie, palet, typografie, visitekaartje */
function BrandMockup() {
  return (
    <div className="mk-brand">
      <div className="mk-brand__board">
        <svg viewBox="0 0 200 200" className="mk-brand__grid">
          <circle cx="100" cy="100" r="70" pathLength={1} />
          <circle cx="100" cy="100" r="42" pathLength={1} />
          <line x1="10" y1="100" x2="190" y2="100" pathLength={1} />
          <line x1="100" y1="10" x2="100" y2="190" pathLength={1} />
          <line x1="30" y1="30" x2="170" y2="170" pathLength={1} />
          <line x1="170" y1="30" x2="30" y2="170" pathLength={1} />
        </svg>
        <svg viewBox="0 0 200 200" className="mk-brand__mark">
          <defs>
            <linearGradient id="mk-brand-g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--accent)" />
              <stop offset="1" stopColor="#ffb36b" />
            </linearGradient>
          </defs>
          <path d="M100 30c6 46 24 64 70 70-46 6-64 24-70 70-6-46-24-64-70-70 46-6 64-24 70-70Z" fill="url(#mk-brand-g)" />
        </svg>
        <div className="mk-brand__word">
          <span>N</span>
          <span>O</span>
          <span>V</span>
          <span>A</span>
        </div>
      </div>
      <div className="mk-brand__swatches">
        {["var(--accent)", "#ffb36b", "#f5f1ea", "#121216"].map((c, i) => (
          <div key={i} className="mk-brand__swatch" style={{ ["--c" as string]: c, ["--i" as string]: i }}>
            <span />
            <em>{["#FF4D5E", "#FFB36B", "#F5F1EA", "#121216"][i]}</em>
          </div>
        ))}
      </div>
      <div className="mk-brand__type">
        <strong>Aa</strong>
        <span>Montserrat</span>
        <small>Bold · 700</small>
      </div>
      <div className="mk-brand__card">
        <div className="mk-brand__card-front">
          <svg viewBox="0 0 200 200">
            <path d="M100 30c6 46 24 64 70 70-46 6-64 24-70 70-6-46-24-64-70-70 46-6 64-24 70-70Z" fill="var(--accent)" />
          </svg>
          <b>NOVA</b>
        </div>
        <div className="mk-brand__card-back">
          <b>Sanne de Vries</b>
          <small>Creative Director</small>
          <i />
          <i />
        </div>
      </div>
    </div>
  );
}

/* 2 — Websites & Webshops: site bouwt zichzelf op, cart telt, Lighthouse 100 */
function WebMockup() {
  return (
    <div className="mk-web">
      <Browser className="mk-web__browser" url="jouwmerk.nl">
        <div className="mk-web__nav">
          <span className="mk-web__logo" />
          <i />
          <i />
          <i />
          <span className="mk-web__cart">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 4h2.5l2.2 10.5h9.6L20 8H6.4" />
            </svg>
            <b className="mk-web__count">
              <span>0</span>
              <span>1</span>
              <span>2</span>
            </b>
          </span>
        </div>
        <div className="mk-web__hero">
          <div className="mk-web__h1">
            <i />
            <i />
          </div>
          <p className="mk-web__p">
            <i />
            <i />
          </p>
          <span className="mk-web__btn">Shop nu</span>
          <span className="mk-web__art" />
        </div>
        <div className="mk-web__grid">
          {[0, 1, 2].map((i) => (
            <div key={i} className="mk-web__product" style={{ ["--i" as string]: i }}>
              <span className="mk-web__img" />
              <i />
              <b>€ {["49", "79", "129"][i]}</b>
              <span className="mk-web__add">+</span>
            </div>
          ))}
        </div>
        <span className="mk-web__cursor">
          <svg viewBox="0 0 24 24">
            <path d="M5 3l14 8-6 2-2 6L5 3Z" fill="#fff" stroke="#000" strokeWidth="1.2" />
          </svg>
        </span>
      </Browser>
      <div className="mk-web__score">
        <svg viewBox="0 0 40 40">
          <circle cx="20" cy="20" r="16" pathLength={1} />
          <circle cx="20" cy="20" r="16" pathLength={1} className="is-val" />
        </svg>
        <b>100</b>
        <small>Performance</small>
      </div>
      <Phone className="mk-web__phone">
        <div className="mk-web__m">
          <span className="mk-web__m-hero" />
          <i />
          <i />
          <span className="mk-web__m-btn" />
          <span className="mk-web__m-card" />
          <span className="mk-web__m-card" />
        </div>
      </Phone>
    </div>
  );
}

/* 3 — Web-apps & Apps: facturen-app met groeiende grafiek en toast */
export function AppScreen() {
  return (
    <div className="mk-app__screen">
      <div className="mk-app__top">
        <small>Mijn openstaande facturen</small>
        <b>
          €<span className="mk-app__num" />k
        </b>
      </div>
      <div className="mk-app__chart">
        {[62, 80, 48, 92, 70, 100].map((h, i) => (
          <span key={i} style={{ ["--h" as string]: `${h}%`, ["--i" as string]: i }}>
            <i />
          </span>
        ))}
      </div>
      <div className="mk-app__months">
        {["Jan", "Feb", "Mrt", "Apr", "Mei", "Jun"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
      <div className="mk-app__list">
        {[0, 1, 2].map((i) => (
          <div key={i} className="mk-app__row" style={{ ["--i" as string]: i }}>
            <span />
            <i />
            <b>{["€ 1.250", "€ 3.900", "€ 840"][i]}</b>
          </div>
        ))}
      </div>
      <div className="mk-app__tab">
        <span />
        <span />
        <span className="is-on" />
        <span />
      </div>
    </div>
  );
}
function AppMockup() {
  return (
    <div className="mk-app">
      <div className="mk-app__dash">
        <div className="mk-app__dash-side">
          <span />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="mk-app__dash-main">
          <div className="mk-app__kpis">
            <span>
              <small>Offertes</small>
              <b>€35,5k</b>
            </span>
            <span>
              <small>Geaccepteerd</small>
              <b>€21,7k</b>
            </span>
          </div>
          <svg viewBox="0 0 200 70" className="mk-app__line">
            <path d="M0 60 C 20 55, 30 40, 50 44 S 80 20, 100 28 S 140 10, 160 16 S 190 4, 200 6" pathLength={1} />
          </svg>
        </div>
      </div>
      <Phone className="mk-app__phone">
        <AppScreen />
      </Phone>
      <div className="mk-app__toast">
        <span>✓</span>
        <div>
          <b>Offerte geaccepteerd</b>
          <small>Zojuist · € 3.900</small>
        </div>
      </div>
    </div>
  );
}

/* 4 — Marketing automation: workflow-nodes met reizende pulsen + funnel */
function FlowMockup() {
  return (
    <div className="mk-flow">
      <svg viewBox="0 0 400 300" className="mk-flow__wires" preserveAspectRatio="none">
        <path id="w1" d="M70 60 C 140 60, 130 150, 200 150" pathLength={1} />
        <path d="M200 150 C 260 150, 260 70, 330 70" pathLength={1} />
        <path d="M200 150 C 260 150, 260 230, 330 230" pathLength={1} />
        <path className="mk-flow__pulse p1" d="M70 60 C 140 60, 130 150, 200 150" pathLength={1} />
        <path className="mk-flow__pulse p2" d="M200 150 C 260 150, 260 70, 330 70" pathLength={1} />
        <path className="mk-flow__pulse p3" d="M200 150 C 260 150, 260 230, 330 230" pathLength={1} />
      </svg>
      <div className="mk-flow__node n1">
        <span className="mk-flow__ic">⚡</span>
        <div>
          <b>Nieuwe lead</b>
          <small>Formulier · Website</small>
        </div>
      </div>
      <div className="mk-flow__node n2">
        <span className="mk-flow__ic">◆</span>
        <div>
          <b>Score &gt; 50?</b>
          <small>CRM · HubSpot</small>
        </div>
      </div>
      <div className="mk-flow__node n3">
        <span className="mk-flow__ic">#</span>
        <div>
          <b>Sales alert</b>
          <small>Slack · direct</small>
        </div>
      </div>
      <div className="mk-flow__node n4">
        <span className="mk-flow__ic">✉</span>
        <div>
          <b>E-mailflow</b>
          <small>3 mails · 7 dagen</small>
        </div>
      </div>
      <div className="mk-flow__funnel">
        {[
          ["Bezoekers", "12,4k", 100],
          ["Leads", "1,2k", 72],
          ["Klanten", "186", 44],
        ].map(([l, v, w], i) => (
          <div key={i} style={{ ["--w" as string]: `${w}%`, ["--i" as string]: i }}>
            <span>{l}</span>
            <b>{v}</b>
          </div>
        ))}
      </div>
    </div>
  );
}

/* 5 — SEO, AEO & GEO: SERP waarin je naar #1 klimt + AI-antwoord met bronvermelding */
function SeoMockup() {
  return (
    <div className="mk-seo">
      <div className="mk-seo__serp">
        <div className="mk-seo__search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="6" />
            <path d="M20 20l-4.5-4.5" />
          </svg>
          <span className="mk-seo__q">branding bureau eindhoven</span>
        </div>
        <div className="mk-seo__results">
          <div className="mk-seo__res is-you">
            <span className="mk-seo__rank">
              <span>4</span>
              <span>1</span>
            </span>
            <div>
              <small>jouwmerk.nl</small>
              <b>Jouw merk — de specialist</b>
              <i />
            </div>
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="mk-seo__res" style={{ ["--i" as string]: i }}>
              <span className="mk-seo__rank">
                <span>{i + 1}</span>
                <span>{i + 2}</span>
              </span>
              <div>
                <small>concurrent{i + 1}.nl</small>
                <b />
                <i />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mk-seo__ai">
        <div className="mk-seo__ai-head">
          <span className="mk-seo__spark">✦</span>
          <b>AI-antwoord</b>
          <small>ChatGPT · Perplexity · AI Overviews</small>
        </div>
        <div className="mk-seo__ai-lines">
          <i />
          <i />
          <i />
        </div>
        <span className="mk-seo__cite">
          <span>1</span> jouwmerk.nl
        </span>
      </div>
      <svg viewBox="0 0 120 50" className="mk-seo__graph">
        <path d="M2 46 L20 40 L36 42 L52 30 L70 26 L86 14 L104 10 L118 4" pathLength={1} />
      </svg>
    </div>
  );
}

/* 6 — Content & Ads: social feed met likes, reels en campagne-ROAS */
function SocialMockup() {
  return (
    <div className="mk-social">
      <Phone className="mk-social__phone">
        <div className="mk-social__feed">
          <div className="mk-social__stories">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} style={{ ["--i" as string]: i }} />
            ))}
          </div>
          <div className="mk-social__post">
            <div className="mk-social__user">
              <span />
              <b>jouwmerk</b>
              <small>Gesponsord</small>
            </div>
            <div className="mk-social__media">
              <span className="mk-social__blob a" />
              <span className="mk-social__blob b" />
              <span className="mk-social__progress" />
            </div>
            <div className="mk-social__actions">
              <span className="mk-social__heart">♥</span>
              <span>💬</span>
              <span>↗</span>
              <b className="mk-social__likes">
                <span>1.204</span>
                <span>1.205</span>
                <span>1.206</span>
              </b>
            </div>
          </div>
        </div>
        <div className="mk-social__floaters">
          {["♥", "🔥", "♥", "👏", "♥"].map((e, i) => (
            <span key={i} style={{ ["--i" as string]: i }}>
              {e}
            </span>
          ))}
        </div>
      </Phone>
      <div className="mk-social__campaign">
        <small>Campagne · Meta + LinkedIn</small>
        <b>
          ROAS <span>6,2x</span>
        </b>
        <div className="mk-social__bars">
          {[30, 46, 40, 62, 58, 80, 92].map((h, i) => (
            <span key={i} style={{ ["--h" as string]: `${h}%`, ["--i" as string]: i }} />
          ))}
        </div>
      </div>
      <div className="mk-social__chips">
        {["Meta", "LinkedIn", "TikTok", "Google"].map((c, i) => (
          <span key={c} style={{ ["--i" as string]: i }}>
            {c}
          </span>
        ))}
      </div>
    </div>
  );
}

/* 7 — Foto, Video, 3D: viewfinder met REC, roterende 3D-kubus en tijdlijn */
function VideoMockup() {
  return (
    <div className="mk-video">
      <div className="mk-video__frame">
        <span className="mk-video__corner tl" />
        <span className="mk-video__corner tr" />
        <span className="mk-video__corner bl" />
        <span className="mk-video__corner br" />
        <div className="mk-video__hud">
          <span className="mk-video__rec">REC</span>
          <span className="mk-video__tc">
            00:00:<span className="mk-video__sec" />
          </span>
          <span>4K · 25fps</span>
        </div>
        <div className="mk-video__stage">
          <div className="mk-video__cube">
            {["f", "b", "l", "r", "t", "d"].map((s) => (
              <span key={s} className={`s-${s}`} />
            ))}
          </div>
          <span className="mk-video__focus" />
        </div>
        <div className="mk-video__wave">
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} style={{ ["--i" as string]: i }} />
          ))}
        </div>
      </div>
      <div className="mk-video__timeline">
        <div className="mk-video__track">
          <span style={{ ["--w" as string]: "28%" }} />
          <span style={{ ["--w" as string]: "18%" }} />
          <span style={{ ["--w" as string]: "34%" }} />
          <span style={{ ["--w" as string]: "14%" }} />
        </div>
        <div className="mk-video__track is-audio">
          <span style={{ ["--w" as string]: "62%" }} />
          <span style={{ ["--w" as string]: "30%" }} />
        </div>
        <span className="mk-video__head" />
      </div>
    </div>
  );
}

/* 8 — Grafisch & Print: brochure die openvouwt, visitekaartjes, pantone-waaier */
function PrintMockup() {
  return (
    <div className="mk-print">
      <div className="mk-print__stage">
        <div className="mk-print__brochure">
          <span className="mk-print__panel p1">
            <i />
            <i />
          </span>
          <span className="mk-print__panel p2">
            <b />
            <i />
            <i />
          </span>
          <span className="mk-print__panel p3">
            <i />
            <i />
            <i />
          </span>
        </div>
        <div className="mk-print__cards">
          <span />
          <span />
        </div>
        <div className="mk-print__fan">
          {["#FF3DF2", "#FFC23D", "#3DF5FF", "#3DFF8F", "#ffffff"].map((c, i) => (
            <span key={i} style={{ ["--c" as string]: c, ["--i" as string]: i }}>
              <em>{["PMS 239", "PMS 123", "PMS 311", "PMS 802", "WHITE"][i]}</em>
            </span>
          ))}
        </div>
      </div>
      <span className="mk-print__crop tl" />
      <span className="mk-print__crop tr" />
      <span className="mk-print__crop bl" />
      <span className="mk-print__crop br" />
      <div className="mk-print__cmyk">
        {["#00d7ff", "#ff2bd6", "#ffe600", "#111"].map((c) => (
          <span key={c} style={{ background: c }} />
        ))}
      </div>
    </div>
  );
}

/* 9 — Configurators: kleur kiezen, prijs telt mee, offerte-knop */
function ConfiguratorMockup() {
  return (
    <div className="mk-conf">
      <div className="mk-conf__steps">
        {["Model", "Kleur", "Opties", "Offerte"].map((s, i) => (
          <span key={s} style={{ ["--i" as string]: i }}>
            <b>{i + 1}</b>
            {s}
          </span>
        ))}
      </div>
      <div className="mk-conf__preview">
        <svg viewBox="0 0 320 130" className="mk-conf__car">
          <path
            className="mk-conf__body"
            d="M18 92c0-10 6-16 18-19l46-12c14-14 34-26 64-28 40-3 70 6 96 24l40 6c14 2 22 10 22 22v8c0 5-4 8-9 8h-22a26 26 0 0 0-52 0H108a26 26 0 0 0-52 0H26c-5 0-8-4-8-9Z"
          />
          <path className="mk-conf__glass" d="M98 60c14-12 30-19 52-20 28-1 50 5 70 18Z" />
          <circle cx="82" cy="101" r="19" className="mk-conf__wheel" />
          <circle cx="234" cy="101" r="19" className="mk-conf__wheel" />
          <circle cx="82" cy="101" r="8" className="mk-conf__rim" />
          <circle cx="234" cy="101" r="8" className="mk-conf__rim" />
        </svg>
        <span className="mk-conf__shadow" />
      </div>
      <div className="mk-conf__row">
        <div className="mk-conf__swatches">
          {["#E8262B", "#3D8BFF", "#3DFF8F", "#f2f2f2"].map((c, i) => (
            <span key={c} style={{ ["--c" as string]: c, ["--i" as string]: i }} />
          ))}
        </div>
        <div className="mk-conf__price">
          <small>Totaal</small>
          <b className="mk-conf__amount">
            <span>€ 1.249</span>
            <span>€ 1.389</span>
            <span>€ 1.499</span>
          </b>
        </div>
      </div>
      <span className="mk-conf__cta">Offerte aanvragen →</span>
      <span className="mk-conf__cursor">
        <svg viewBox="0 0 24 24">
          <path d="M5 3l14 8-6 2-2 6L5 3Z" fill="#fff" stroke="#000" strokeWidth="1.2" />
        </svg>
      </span>
    </div>
  );
}

/* 10 — AI: chat + agent-checklist + ademende orb */
function AiMockup() {
  return (
    <div className="mk-ai">
      <span className="mk-ai__orb" />
      <div className="mk-ai__chat">
        <div className="mk-ai__msg is-user">Vat deze offerte samen en plan een follow-up.</div>
        <div className="mk-ai__typing">
          <i />
          <i />
          <i />
        </div>
        <div className="mk-ai__msg is-ai">
          <span className="mk-ai__badge">✦ M7 Assistant</span>
          <i />
          <i />
          <i />
        </div>
      </div>
      <div className="mk-ai__agent">
        <small>Agent · taken</small>
        {["CRM bijgewerkt", "Samenvatting gemaild", "Follow-up gepland"].map((t, i) => (
          <div key={t} style={{ ["--i" as string]: i }}>
            <span className="mk-ai__check">✓</span>
            {t}
          </div>
        ))}
      </div>
      <div className="mk-ai__prompt">
        <span>Vraag het M7 AI…</span>
        <b>↑</b>
      </div>
    </div>
  );
}

const MAP: Record<MockupKey, () => JSX.Element> = {
  brand: BrandMockup,
  web: WebMockup,
  app: AppMockup,
  flow: FlowMockup,
  seo: SeoMockup,
  social: SocialMockup,
  video: VideoMockup,
  print: PrintMockup,
  configurator: ConfiguratorMockup,
  ai: AiMockup,
};

export function Mockup({ kind, accent, className }: { kind: MockupKey; accent: string; className?: string }) {
  const C = MAP[kind];
  return (
    <div
      className={`mk mk--${kind}${className ? " " + className : ""}`}
      style={{ ["--accent" as string]: accent }}
      data-play="1"
      aria-hidden="true"
    >
      <span className="mk__glow" />
      <C />
    </div>
  );
}

/* Hero: twee zwevende 3D-telefoons (website + app) */
export function HeroPhones() {
  return (
    <div className="hero-phones" data-play="1" aria-hidden="true">
      <Phone className="hero-phones__a">
        <div className="hp-site">
          <div className="hp-site__nav">
            <b>REPAIR LAB</b>
            <i />
          </div>
          <h4>
            Wij repareren.
            <br />
            Jij blijft verbonden.
          </h4>
          <ul>
            <li>✓ Apple Authorized Service Provider</li>
            <li>✓ Snelle reparaties</li>
          </ul>
          <div className="hp-site__search">
            <span>⌕</span> <em>Zoek je device</em>
          </div>
          <div className="hp-site__brands">
            <span>Apple</span>
            <span>Samsung</span>
            <span>Windows</span>
          </div>
          <div className="hp-site__card" />
        </div>
      </Phone>
      <Phone className="hero-phones__b">
        <AppScreen />
      </Phone>
    </div>
  );
}
