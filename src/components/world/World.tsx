/* ============================================================
   World of M7: een scrollgestuurde reis langs M7's masterpieces, op
   hun mooiste momenten. Elke scène is een vastgepinde sectie
   (ScrollStage) waarvan de beweging in world.css zit (transform en
   opacity uit --p). Tussen de scènes: korte quotes in M7's eigen stem.
   Mobiel en bij reduced motion: rustige, ontworpen varianten zonder pin
   (behalve de opening en de quotes, die zijn licht genoeg).
   Wat er in elke scène staat: data.ts.
   ============================================================ */

import { Fragment } from "react";
import { M7DrawTitle } from "@/components/brand/M7DrawTitle";
import { Aurora } from "@/components/motion/Aurora";
import { SplitText } from "@/components/motion/SplitText";
import { TLink } from "@/components/motion/TLink";
import { IntakeCta } from "@/components/overlay/OverlayButton";
import { DesignersHouseBook } from "@/components/showcase/DesignersHouseBook";
import { showreelLabels } from "@/components/showreel/copy";
import { ShowreelPlayer } from "@/components/showreel/ShowreelPlayer";
import { Btn } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import type { Locale, T } from "@/content/types";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import type { AppScene, Snip, WorldData } from "./data";
import { LazyVideo } from "./LazyVideo";
import { ScrollStage } from "./ScrollStage";
import { WhenNear } from "./WhenNear";
import "@/components/showreel/showreel.css";
import "./world.css";

const COPY = {
  introSub: {
    nl: "Branding, websites, apps, marketing en AI. Scroll om te zien waar wij in uitblinken.",
    en: "Branding, websites, apps, marketing and AI. Scroll to see what we excel at.",
  },
  scroll: { nl: "Scroll", en: "Scroll" },
  appsText: {
    nl: "Interfaces die je wilt gebruiken. Van dashboard tot app, in beweging.",
    en: "Interfaces people want to use. From dashboard to app, in motion.",
  },
  brandText: {
    nl: "Een merk dat je kunt vastpakken. Scroll en blader door het brandbook van {client}.",
    en: "A brand you can hold. Scroll to leaf through the {client} brandbook.",
  },
  brandMore: { nl: "Meer merken in deze wereld", en: "More brands in this world" },
  brandWall: { nl: "Merken die blijven hangen.", en: "Brands that stay with you." },
  filmsKicker: { nl: "UI in beweging", en: "UI in motion" },
  filmsTitle: { nl: "De reis van de klant", en: "The customer journey" },
  filmsText: {
    nl: "Dat is waar sterke merken het verschil maken. Zeker in een wereld waar gebruikers beslissen binnen enkele interacties.",
    en: "That's where strong brands make the difference. Especially in a world where users decide within a few interactions.",
  },
  sitesText: {
    nl: "Websites met karakter, tot in het kleinste detail. Scroll door de stapel.",
    en: "Websites with character, down to the smallest detail. Scroll through the stack.",
  },
  wallTitleA: { nl: "Join the club of", en: "Join the club of" },
  wallTitleB: { nl: "winning brands", en: "winning brands" },
  wallCta: { nl: "Bekijk alle {n} cases", en: "View all {n} cases" },
  ctaKicker: { nl: "Jouw project", en: "Your project" },
  ctaLead: {
    nl: "Een merk, website, app of campagne in gedachten? Vertel ons waar je naartoe wilt, dan denken we mee over de route.",
    en: "A brand, website, app or campaign in mind? Tell us where you want to go and we'll help map out the route.",
  },
} satisfies Record<string, T>;

/** Quotes over merken, in M7's eigen stem (bewust zonder naam erbij). */
export const QUOTES = {
  attention: {
    nl: "In a world full of choices, it's the strong brands that win.",
    en: "In a world full of choices, it's the strong brands that win.",
  },
  feel: {
    nl: "Wat we ook ontwerpen, wij zetten de beleving centraal.",
    en: "Whatever we design, we put the experience first.",
  },
  world: {
    nl: "Elk merk begint als een idee. Wij geven het een wereld om in te leven.",
    en: "Every brand starts as an idea. We give it a world to live in.",
  },
} satisfies Record<string, T>;

const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Plekken voor de zwevende UI in de opening: x/y (% van het scherm), breedte (vw), diepte, draaiing.
 * Renders (3:2) en telefoons (staand) hebben elk hun eigen plekken, rond de kop en onder de navigatie.
 */
const FLOAT_SLOTS = {
  still: [
    { x: 12, y: 31, w: 15, z: 1.25, r: -6 },
    { x: 88, y: 77, w: 15, z: 1.15, r: -4 },
    { x: 25, y: 85, w: 11, z: 0.8, r: 3 },
    { x: 75, y: 21, w: 9, z: 0.65, r: 5 },
  ],
  phone: [
    { x: 89, y: 35, w: 6.4, z: 1, r: 6 },
    { x: 8, y: 71, w: 6, z: 1.4, r: 5 },
    { x: 65, y: 87, w: 5.4, z: 0.75, r: -7 },
    { x: 37, y: 21, w: 4.8, z: 0.6, r: -4 },
  ],
};

/* ---------------- Opening: "Welcome to the world of M7" ---------------- */
export function WorldHero({ locale, data }: { locale: Locale; data: WorldData }) {
  const L = (t: T) => tr(t, locale);
  return (
    <ScrollStage className="wh" aria-labelledby="wh-title">
      <div className="wh__pin">
        <div className="wh__sky" aria-hidden="true" />
        {data.reel ? (
          <div className="wh__portal">
            <ShowreelPlayer reels={[data.reel]} labels={showreelLabels(locale)} ui="caption" className="wh__player" priority />
          </div>
        ) : null}
        <ul className="wh__floats">
          {data.heroFloats.map((f, i) => {
            const s = FLOAT_SLOTS[f.kind][data.heroFloats.slice(0, i).filter((x) => x.kind === f.kind).length];
            if (!s) return null;
            return (
              <li
                key={f.src}
                className={`wh__float wh__float--${f.kind}`}
                style={{ ["--x" as string]: s.x, ["--y" as string]: s.y, ["--w" as string]: s.w, ["--z" as string]: s.z, ["--r" as string]: `${s.r}deg`, ["--k" as string]: i }}
              >
                <span className="wh__bob">
                  <img src={f.src} alt={f.alt} loading={i < 4 ? "eager" : "lazy"} decoding="async" />
                </span>
              </li>
            );
          })}
        </ul>
        <div className="wh__text">
          <p className="kicker kicker--center wh__kicker" data-reveal="fade">
            World of M7
          </p>
          <M7DrawTitle id="wh-title" className="h-hero wh__title" words="Welcome to the world of" dot delay={0.15} />
          <p className="wh__sub" data-reveal="up" style={{ ["--d" as string]: "0.6s" }}>
            {fill(L(COPY.introSub), { n: data.stats.masterpieces })}
          </p>
        </div>
        <span className="wh__cue" aria-hidden="true">
          <span>{L(COPY.scroll)}</span>
          <i />
        </span>
      </div>
    </ScrollStage>
  );
}

/* ---------------- Quote: woorden lichten op bij het scrollen ---------------- */
export function WorldQuote({ locale, quote, id }: { locale: Locale; quote: T; id: string }) {
  const words = tr(quote, locale).split(" ");
  return (
    <ScrollStage className="wq" aria-label={locale === "nl" ? "Quote van M7" : "Quote by M7"} id={id}>
      <div className="wq__pin">
        <figure className="wq__fig">
          <span className="wq__mark g-pixels" aria-hidden="true">
            “
          </span>
          <blockquote className="wq__text" style={{ ["--n" as string]: words.length }}>
            <p>
              {words.map((w, i) => (
                <span key={i} className="wq__w" style={{ ["--i" as string]: i }}>
                  {w}{" "}
                </span>
              ))}
            </p>
          </blockquote>
        </figure>
      </div>
    </ScrollStage>
  );
}

/** Scènekop: hoofdstuknummer, titel, korte regel. */
function SceneHead({ n, id, title, text, className }: { n: number; id: string; title: React.ReactNode; text?: string; className?: string }) {
  return (
    <header className={`wsh${className ? " " + className : ""}`}>
      <p className="wsh__n">
        <span>{pad(n)}</span>
        <i aria-hidden="true" />
      </p>
      <h2 id={id} className="wsh__title">
        {title}
      </h2>
      {text ? <p className="wsh__text">{text}</p> : null}
    </header>
  );
}

/* ---------------- 01 Apps & portalen: per app een paneel, vastgepind ---------------- */
export function WorldApps({ locale, data, n }: { locale: Locale; data: WorldData; n: number }) {
  if (!data.apps.length) return null;
  const L = (t: T) => tr(t, locale);
  const d = getDict(locale);
  const count = data.apps.length;
  return (
    <ScrollStage className="wa" steps={count} aria-labelledby="wa-title" style={{ ["--n" as string]: count }}>
      <div className="wa__pin">
        <SceneHead n={n} id="wa-title" title={data.groups.apps} text={L(COPY.appsText)} className="wa__head" />
        <ol className="wa__dots" aria-hidden="true">
          {data.apps.map((a, i) => (
            <li key={a.slug} style={{ ["--i" as string]: i }}>
              <span>{a.client}</span>
            </li>
          ))}
        </ol>
        <div className="wa__panels">
          {data.apps.map((a, i) => (
            <AppPanel key={a.slug} a={a} i={i} count={count} label={d.cta.viewCase} />
          ))}
        </div>
      </div>
    </ScrollStage>
  );
}

function AppPanel({ a, i, count, label }: { a: AppScene; i: number; count: number; label: string }) {
  return (
    <article className="wa__panel" data-i={i} style={{ ["--i" as string]: i, ["--accent" as string]: a.color }} aria-labelledby={`wa-${a.slug}`}>
      <div className="wa__glow" aria-hidden="true" />
      <div className="wa__copy">
        <p className="wa__idx">
          {pad(i + 1)} <span>/ {pad(count)}</span>
        </p>
        <h3 id={`wa-${a.slug}`} className="wa__client">
          {a.client}
        </h3>
        <p className="wa__title">{a.title}</p>
        <p className="wa__moment">
          <i aria-hidden="true" />
          {a.moment}
        </p>
        <TLink href={a.href} className="link-dash wa__link">
          {label}
        </TLink>
      </div>
      <div className="wa__stage">
        <div className="wa__film">
          <img src={a.film.poster} alt={`${a.client}: ${a.moment}`} loading="lazy" decoding="async" />
          <LazyVideo src={a.film.src} className="wa__video" play={0.3} step={i} />
        </div>
        {a.snippets.map((s, k) => (
          <SnipCard key={s.src} s={s} k={k} />
        ))}
      </div>
    </article>
  );
}

/** Zwevend UI-fragment: telefoon of browser met een echte (lange) screenshot die meescrolt, of een render. */
function SnipCard({ s, k }: { s: Snip; k: number }) {
  return (
    <figure className={`wa__snip wa__snip--${s.kind} wa__snip--${s.at}${k > 1 ? " wa__snip--extra" : ""}`} style={{ ["--k" as string]: k }}>
      <span className="wa__snip-in">
        {s.kind === "screen" ? (
          <span className="wa__bar" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
        ) : null}
        <span className="wa__screen">
          <img src={s.src} alt={s.alt} loading="lazy" decoding="async" />
        </span>
      </span>
    </figure>
  );
}

/* ---------------- 02 Branding: het brandbook slaat open, bladzijde voor bladzijde ---------------- */
export function WorldBrand({ locale, data, n }: { locale: Locale; data: WorldData; n: number }) {
  const b = data.brandbook;
  if (!b) return null;
  const L = (t: T) => tr(t, locale);
  const d = getDict(locale);
  return (
    <ScrollStage className="wb" aria-labelledby="wb-title" style={{ ["--accent" as string]: b.color }}>
      <div className="wb__pin">
        <div className="wb__glow" aria-hidden="true" />
        <div className="wb__copy">
          <SceneHead n={n} id="wb-title" title={data.groups.branding} text={fill(L(COPY.brandText), { client: b.client })} />
          <p className="wb__case">
            <strong>{b.client}</strong>
            <span>{b.title}</span>
          </p>
          <TLink href={b.href} className="link-dash">
            {d.cta.viewCase}
          </TLink>
          {data.brandMembers.length ? (
            <div className="wb__more">
              <p>{L(COPY.brandMore)}</p>
              <ul>
                {data.brandMembers.slice(0, 8).map((m) => (
                  <li key={m.slug}>
                    <TLink href={m.href} style={{ ["--accent" as string]: m.color }}>
                      <span className="wb__dot" aria-hidden="true" />
                      {m.client}
                    </TLink>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
        <div className="wb__book">
          <div className="show" role="img" aria-label={`${b.client}: ${b.label}`}>
            <DesignersHouseBook />
          </div>
        </div>
      </div>
    </ScrollStage>
  );
}

/** Merk-renders en (later) brand sheets van de masterpieces uit de groep Branding, in drie kolommen met parallax. */
export function WorldBrandWall({ locale, data }: { locale: Locale; data: WorldData }) {
  if (data.brandWall.length < 3) return null;
  const L = (t: T) => tr(t, locale);
  const d = getDict(locale);
  const n = data.brandWall.length >= 6 ? 3 : 2;
  const cols = Array.from({ length: n }, (_, c) => data.brandWall.filter((_, i) => i % n === c));
  return (
    <ScrollStage className="wbw" pass aria-labelledby="wbw-title">
      <div className="wbw__in">
        <h2 id="wbw-title" className="wbw__title" data-reveal="up">
          {L(COPY.brandWall)}
        </h2>
        <div className="wbw__cols" style={{ ["--cols" as string]: n }}>
          {cols.map((col, c) => (
            <ul key={c} className="wbw__col" style={{ ["--c" as string]: c - (n - 1) / 2 }}>
              {col.map((t) => (
                <li key={t.image}>
                  <TLink
                    href={t.href}
                    className={`wbw__tile${/brand-sheet/.test(t.image ?? "") ? " wbw__tile--board" : ""}`}
                    data-cursor={d.cta.viewCase}
                    style={{ ["--accent" as string]: t.color }}
                  >
                    <img src={t.image} alt={t.alt} loading="lazy" decoding="async" />
                    <span className="wbw__cap">{t.client}</span>
                  </TLink>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
    </ScrollStage>
  );
}

/* ---------------- 03 Spotlight (Eredivisietoppers): drie animaties waaieren uit ---------------- */
export function WorldSpotlight({ locale, data, n }: { locale: Locale; data: WorldData; n: number }) {
  const s = data.spotlight;
  if (!s) return null;
  const d = getDict(locale);
  return (
    <ScrollStage className="we" aria-labelledby="we-title" style={{ ["--accent" as string]: s.color }}>
      <div className="we__pin">
        <div className="we__glow" aria-hidden="true" />
        <p className="we__word" aria-hidden="true">
          {s.client}
        </p>
        <ul className="we__fan">
          {s.films.map((f, i) => (
            <li key={f.src} className={`we__card we__card--${i}${/social|4x5/i.test(f.src) ? " we__card--tall" : ""}`} style={{ ["--k" as string]: i }}>
              <figure>
                <span className="we__media">
                  <img src={f.poster} alt={`${s.client}: ${f.label}`} loading="lazy" decoding="async" />
                  <LazyVideo src={f.src} className="we__video" play={0.35} />
                </span>
                <figcaption>{f.label}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <div className="we__copy">
          <SceneHead n={n} id="we-title" title={s.client} text={s.title} />
          <TLink href={s.href} className="link-dash">
            {d.cta.viewCase}
          </TLink>
        </div>
      </div>
    </ScrollStage>
  );
}

/* ---------------- 04 Interactie: horizontale rij films, scrubt mee met de scroll ---------------- */
export function WorldFilms({ locale, data, n }: { locale: Locale; data: WorldData; n: number }) {
  if (!data.flows.length) return null;
  const L = (t: T) => tr(t, locale);
  const d = getDict(locale);
  return (
    <ScrollStage className="wf" track=".wf__track" aria-labelledby="wf-title">
      <div className="wf__pin">
        <div className="wf__track">
          <div className="wf__head">
            <SceneHead n={n} id="wf-title" title={L(COPY.filmsTitle)} text={L(COPY.filmsText)} />
            <p className="wf__kicker">
              <span className="wf__rec" aria-hidden="true" />
              {L(COPY.filmsKicker)}
            </p>
          </div>
          <ul className="wf__list">
            {data.flows.map((f, i) => (
              <li key={f.src} className="wf__item" style={{ ["--i" as string]: i, ["--accent" as string]: f.color }}>
                <TLink href={f.href} className="wf__tile" data-cursor={d.cta.viewCase}>
                  <span className="wf__media">
                    <img src={f.poster} alt={`${f.client}: ${f.label}`} loading="lazy" decoding="async" />
                    <LazyVideo src={f.src} className="wf__video" play={0.55} />
                  </span>
                  <span className="wf__cap">
                    <span className="wf__num">{pad(i + 1)}</span>
                    <span className="wf__client">{f.client}</span>
                  </span>
                  <span className="wf__name">{f.label}</span>
                </TLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="wf__bar" aria-hidden="true">
          <span />
        </div>
      </div>
    </ScrollStage>
  );
}

/* ---------------- 05 Websites & platforms: kaarten stapelen zich op (sticky) ---------------- */
export function WorldSites({ locale, data, n }: { locale: Locale; data: WorldData; n: number }) {
  if (!data.sites.length) return null;
  const L = (t: T) => tr(t, locale);
  const d = getDict(locale);
  return (
    <ScrollStage className="wt" pass aria-labelledby="wt-title">
      <div className="wt__in">
        <SceneHead n={n} id="wt-title" title={data.groups.websites} text={L(COPY.sitesText)} className="wt__head" />
        <ol className="wt__stack">
          {data.sites.map((s, i) => (
            <li key={s.slug} className="wt__card" style={{ ["--i" as string]: i, ["--accent" as string]: s.color }}>
              <TLink href={s.href} className="wt__link" data-cursor={d.cta.viewCase}>
                <span className="wt__media">
                  <picture>
                    {s.video!.posterMobile ? <source media="(max-width: 760px)" srcSet={s.video!.posterMobile} /> : null}
                    <img src={s.video!.poster} alt="" loading="lazy" decoding="async" />
                  </picture>
                  <LazyVideo src={s.video!.src} srcMobile={s.video!.srcMobile} className="wt__video" play={0.45} />
                </span>
                <span className="wt__shade" aria-hidden="true" />
                <span className="wt__info">
                  <span className="wt__n">
                    {pad(i + 1)} <span>/ {pad(data.sites.length)}</span>
                  </span>
                  <strong className="wt__client">{s.client}</strong>
                  <span className="wt__title">{s.title}</span>
                  <span className="wt__go">
                    {d.cta.viewCase}
                    <Icon name="arrowUpRight" size={14} stroke={2.2} />
                  </span>
                </span>
                {s.image !== s.video!.poster ? (
                  <span className="wt__float">
                    <img src={s.image} alt={s.alt} loading="lazy" decoding="async" />
                  </span>
                ) : null}
              </TLink>
            </li>
          ))}
        </ol>
      </div>
    </ScrollStage>
  );
}

/* ---------------- Finale: van één masterpiece naar allemaal ---------------- */
/**
 * Plekken rond het middelste project (x, y in % van het scherm, breedte in vw, diepte):
 * een losse collage, ruim buiten het midden (dat is 30–70% breed en hoog).
 */
const SLOTS: { x: number; y: number; w: number; z: number }[] = [
  { x: 14, y: 18, w: 19, z: 1.3 },
  { x: 38, y: 13, w: 15, z: 0.9 },
  { x: 61, y: 14, w: 16, z: 1 },
  { x: 86, y: 19, w: 18, z: 1.25 },
  { x: 15, y: 50, w: 17, z: 0.85 },
  { x: 85, y: 50, w: 17, z: 0.9 },
  { x: 13, y: 82, w: 18, z: 1.2 },
  { x: 40, y: 86, w: 15, z: 0.95 },
  { x: 62, y: 87, w: 16, z: 1.05 },
  { x: 87, y: 81, w: 19, z: 1.35 },
  // net over de rand: er is meer dan wat je ziet
  { x: -1, y: 34, w: 10, z: 0.7 },
  { x: 101, y: 66, w: 10, z: 0.7 },
];

export function WorldWall({ locale, data }: { locale: Locale; data: WorldData }) {
  const L = (t: T) => tr(t, locale);
  const d = getDict(locale);
  const c = data.center;
  return (
    <ScrollStage className="ww" aria-labelledby="ww-title">
      <div className="ww__pin">
        <ul className="ww__tiles">
          {data.wall.slice(0, SLOTS.length).map((t, i) => {
            const s = SLOTS[i];
            return (
              <li
                key={t.slug}
                className="ww__tile"
                style={{ ["--x" as string]: s.x, ["--y" as string]: s.y, ["--w" as string]: s.w, ["--z" as string]: s.z, ["--accent" as string]: t.color }}
              >
                <TLink href={t.href} data-cursor={d.cta.viewCase} aria-label={`${t.client}: ${t.title}`}>
                  <img src={t.image} alt={t.alt} loading="lazy" decoding="async" />
                  <span className="ww__cap" aria-hidden="true">
                    {t.client}
                  </span>
                </TLink>
              </li>
            );
          })}
        </ul>
        {c ? (
          <div className="ww__center">
            <TLink href={c.href} className="ww__hero" data-cursor={d.cta.viewCase} aria-label={`${c.client}: ${c.title}`}>
              <img src={c.video?.poster || c.image} alt="" loading="lazy" decoding="async" />
              {c.video ? <LazyVideo src={c.video.src} srcMobile={c.video.srcMobile} className="ww__video" play={0.3} /> : null}
              <span className="ww__dim" aria-hidden="true" />
              <span className="ww__hero-cap" aria-hidden="true">
                <strong>{c.client}</strong>
                <span>{c.title}</span>
              </span>
            </TLink>
          </div>
        ) : null}
        <div className="ww__end">
          <h2 id="ww-title" className="ww__title">
            {L(COPY.wallTitleA)} <span className="g-stars ww__more">{L(COPY.wallTitleB)}</span>
          </h2>
          <Btn href={paths.cases} variant="light" size="sm">
            {fill(L(COPY.wallCta), { n: data.stats.cases })}
          </Btn>
        </div>
      </div>
    </ScrollStage>
  );
}

/* ---------------- Afsluiter: sterke CTA ---------------- */
export function WorldCta({ locale }: { locale: Locale }) {
  const L = (t: T) => tr(t, locale);
  const d = getDict(locale);
  const still = "/media/bg/ai-waves-brand.webp";
  return (
    <section className="wx" aria-labelledby="wx-title">
      <div className="wx__panel">
        {/* tot de afsluiter in de buurt komt alleen een verloop; Aurora brengt zijn eigen stilstaande beeld mee */}
        <WhenNear className="wx__bg" fallback={<div className="wx__still" />}>
          <Aurora palette="brand" fallback={still} />
        </WhenNear>
        <div className="wx__shade" aria-hidden="true" />
        <div className="wx__inner">
          <p className="kicker kicker--center" data-reveal="fade">
            {L(COPY.ctaKicker)}
          </p>
          <SplitText as="h2" id="wx-title" className="wx__title" parts={[{ t: "Let's build " }, { t: "your world.", c: "g-pixels" }]} />
          <p className="lead wx__lead" data-reveal="up" style={{ ["--d" as string]: "0.2s" }}>
            {L(COPY.ctaLead)}
          </p>
          <div className="wx__cta" data-reveal="up" style={{ ["--d" as string]: "0.3s" }}>
            <IntakeCta>{d.cta.launch}</IntakeCta>
            <Btn href={paths.contact} variant="contact">
              {d.nav.contact}
            </Btn>
          </div>
          <a className="link-dash wx__letsgo" href={site.letsgo} data-reveal="up" style={{ ["--d" as string]: "0.4s" }}>
            {d.cta.configurator}
          </a>
        </div>
      </div>
    </section>
  );
}

/** Alle scènes in volgorde; hoofdstuknummers tellen alleen de scènes die er echt zijn. */
export function WorldScenes({ locale, data }: { locale: Locale; data: WorldData }) {
  const order = [
    data.apps.length ? "apps" : null,
    data.brandbook ? "brand" : null,
    data.spotlight ? "spot" : null,
    data.flows.length ? "films" : null,
    data.sites.length ? "sites" : null,
  ].filter(Boolean) as string[];
  const num = (k: string) => order.indexOf(k) + 1;
  return (
    <Fragment>
      <WorldHero locale={locale} data={data} />
      <WorldQuote locale={locale} quote={QUOTES.attention} id="quote-1" />
      <WorldApps locale={locale} data={data} n={num("apps")} />
      <WorldBrand locale={locale} data={data} n={num("brand")} />
      <WorldBrandWall locale={locale} data={data} />
      <WorldQuote locale={locale} quote={QUOTES.feel} id="quote-2" />
      <WorldSpotlight locale={locale} data={data} n={num("spot")} />
      <WorldFilms locale={locale} data={data} n={num("films")} />
      <WorldQuote locale={locale} quote={QUOTES.world} id="quote-3" />
      <WorldSites locale={locale} data={data} n={num("sites")} />
      <WorldWall locale={locale} data={data} />
      <WorldCta locale={locale} />
    </Fragment>
  );
}
