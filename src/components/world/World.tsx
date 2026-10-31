/* ============================================================
   World of M7: een schermvullende, scrollgestuurde reis door het
   werk van M7. Elke scène is een vastgepinde sectie (ScrollStage)
   waarvan de beweging in world.css zit (transform/opacity uit --p).
   Mobiel en bij reduced motion: rustige, niet-vastgepinde varianten.
   ============================================================ */

import { Aurora } from "@/components/motion/Aurora";
import { SplitText } from "@/components/motion/SplitText";
import { TLink } from "@/components/motion/TLink";
import { IntakeCta } from "@/components/overlay/OverlayButton";
import { showreelLabels } from "@/components/showreel/copy";
import { ShowreelPlayer } from "@/components/showreel/ShowreelPlayer";
import { Btn } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import type { Locale, T } from "@/content/types";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import type { WorldChapter, WorldData, WorldTile } from "./data";
import { LazyVideo } from "./LazyVideo";
import { ScrollStage } from "./ScrollStage";
import { WhenNear } from "./WhenNear";
import "@/components/showreel/showreel.css";
import "./world.css";

const COPY = {
  introSub: {
    nl: "Een reis door ons werk. Scroll mee langs de merken, websites, apps en content die we bouwden.",
    en: "A journey through our work. Scroll past the brands, websites, apps and content we've built.",
  },
  scroll: { nl: "Scroll", en: "Scroll" },
  sectors: { nl: "sectoren", en: "sectors" },
  services: { nl: "diensten", en: "services" },
  countries: { nl: "landen", en: "countries" },
  manifest: {
    nl: "Elk merk is een eigen wereld. Wij bouwen ze, van logo tot platform en van campagne tot app. {cases} cases in {sectors} sectoren, voor klanten in {countries} landen. Allemaal vanuit Nistelrode.",
    en: "Every brand is a world of its own. We build them, from logo to platform and from campaign to app. {cases} cases in {sectors} sectors, for clients in {countries} countries. All from Nistelrode.",
  },
  stripKicker: { nl: "Op de rol", en: "On the reel" },
  stripText: {
    nl: "{n} projecten uit {s} sectoren, elk met een eigen clip. Klik er een aan voor het hele verhaal.",
    en: "{n} projects from {s} sectors, each with its own clip. Click one for the full story.",
  },
  chapterCases: { nl: "cases", en: "cases" },
  more: { nl: "Meer over", en: "More about" },
  wallTitleA: { nl: "Eén project.", en: "One project." },
  wallTitleB: { nl: "En nog {n}.", en: "And {n} more." },
  wallCta: { nl: "Bekijk alle {n} cases", en: "View all {n} cases" },
  ctaKicker: { nl: "Jouw project", en: "Your project" },
  ctaLead: {
    nl: "Een merk, website, app of campagne in gedachten? Vertel ons waar je naartoe wilt, dan denken we mee over de route.",
    en: "A brand, website, app or campaign in mind? Tell us where you want to go and we'll help map out the route.",
  },
} satisfies Record<string, T>;

const LINES: Record<WorldChapter["key"], T> = {
  branding: { nl: "Logo's, huisstijlen, rebrandings en print.", en: "Logos, identities, rebrands and print." },
  websites: { nl: "Websites, webshops en platforms, van eerste schets tot livegang.", en: "Websites, web shops and platforms, from first sketch to launch." },
  apps: { nl: "Web-apps, portalen, configurators en automations op maat.", en: "Custom web apps, portals, configurators and automations." },
  content: { nl: "Campagnes, fotografie, video en 3D die het verhaal vertellen.", en: "Campaigns, photography, video and 3D that tell the story." },
};

const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
const pad = (n: number) => String(n).padStart(2, "0");

/* ---------------- 1. Opening: schermvullende showreel ---------------- */
export function WorldIntro({ locale, data }: { locale: Locale; data: WorldData }) {
  const L = (t: T) => tr(t, locale);
  const s = data.stats;
  const facts = [
    { v: s.cases, l: "cases" },
    { v: s.sectors, l: L(COPY.sectors) },
    { v: s.services, l: L(COPY.services) },
    { v: s.countries, l: L(COPY.countries) },
  ];
  return (
    <ScrollStage className="wi" aria-labelledby="wi-title">
      <div className="wi__pin">
        <div className="wi__frame">
          <ShowreelPlayer reels={data.intro} labels={showreelLabels(locale)} ui="caption" className="wi__player" priority />
        </div>
        <div className="wi__text">
          <p className="kicker kicker--center wi__kicker" data-reveal="fade">
            World of M7
          </p>
          <SplitText as="h1" id="wi-title" className="h-hero wi__title" parts={[{ t: "Welcome to the world of " }, { t: "M7.", c: "g-pixels" }]} delay={0.15} />
          <p className="wi__sub" data-reveal="up" style={{ ["--d" as string]: "0.6s" }}>
            {L(COPY.introSub)}
          </p>
        </div>
        <ul className="wi__facts" aria-label="M7">
          {facts.map((f) => (
            <li key={f.l}>
              <strong>{f.v}</strong>
              <span>{f.l}</span>
            </li>
          ))}
        </ul>
        <span className="wi__cue" aria-hidden="true">
          <span>{L(COPY.scroll)}</span>
          <i />
        </span>
      </div>
    </ScrollStage>
  );
}

/* ---------------- 2. Manifest: woorden lichten op bij het scrollen ---------------- */
export function WorldManifest({ locale, data }: { locale: Locale; data: WorldData }) {
  const s = data.stats;
  const nums = new Set([String(s.cases), String(s.sectors), String(s.countries)]);
  const text = fill(tr(COPY.manifest, locale), { cases: s.cases, sectors: s.sectors, countries: s.countries });
  const words = text.split(" ");
  return (
    <ScrollStage className="wm" aria-label={locale === "nl" ? "Over de wereld van M7" : "About the world of M7"}>
      <div className="wm__pin">
        <p className="wm__text" style={{ ["--n" as string]: words.length }}>
          {words.map((w, i) => (
            <span key={i} className={nums.has(w) ? "wm__w wm__w--num g-pixels" : "wm__w"} style={{ ["--i" as string]: i }}>
              {w}{" "}
            </span>
          ))}
        </p>
      </div>
    </ScrollStage>
  );
}

/* ---------------- 3. Reel strip: horizontaal, scrubt mee met de scroll ---------------- */
export function WorldStrip({ locale, data }: { locale: Locale; data: WorldData }) {
  const L = (t: T) => tr(t, locale);
  const sectors = new Set(data.strip.map((t) => t.sector)).size;
  return (
    <ScrollStage className="ws" track=".ws__track" aria-labelledby="ws-title">
      <div className="ws__pin">
        <div className="ws__track">
          <div className="ws__head">
            <p className="kicker">{L(COPY.stripKicker)}</p>
            <h2 id="ws-title" className="h1 ws__title">
              Work in <span className="g-pixels">motion.</span>
            </h2>
            <p className="ws__text">{fill(L(COPY.stripText), { n: data.strip.length, s: sectors })}</p>
          </div>
          <ul className="ws__list">
            {data.strip.map((t, i) => (
              <li key={t.slug} className="ws__item" style={{ ["--i" as string]: i }}>
                <StripTile t={t} i={i} label={getDict(locale).cta.viewCase} />
              </li>
            ))}
          </ul>
        </div>
        <div className="ws__bar" aria-hidden="true">
          <span />
        </div>
      </div>
    </ScrollStage>
  );
}

function StripTile({ t, i, label }: { t: WorldTile; i: number; label: string }) {
  return (
    <TLink href={t.href} className="ws__tile" data-cursor={label} style={{ ["--accent" as string]: t.color }}>
      <span className="ws__media">
        <img src={t.video?.poster || t.image} alt="" loading="lazy" decoding="async" />
        {t.video ? <LazyVideo src={t.video.src} srcMobile={t.video.srcMobile} className="ws__video" play={0.55} /> : null}
      </span>
      <span className="ws__cap">
        <span className="ws__num">{pad(i + 1)}</span>
        <span className="ws__client">{t.client}</span>
        <span className="ws__sector">{t.sector}</span>
      </span>
      <span className="ws__name">{t.title}</span>
    </TLink>
  );
}

/* ---------------- 4. Hoofdstukken per discipline ---------------- */
export function WorldChapters({ locale, data }: { locale: Locale; data: WorldData }) {
  return (
    <>
      {data.chapters.map((ch, i) => (
        <WorldChapterScene key={ch.key} locale={locale} ch={ch} i={i} n={data.chapters.length} />
      ))}
    </>
  );
}

function WorldChapterScene({ locale, ch, i, n }: { locale: Locale; ch: WorldChapter; i: number; n: number }) {
  const L = (t: T) => tr(t, locale);
  const id = `wc-${ch.key}`;
  return (
    <ScrollStage className="wc" aria-labelledby={id}>
      <div className="wc__pin" style={{ ["--accent" as string]: ch.color }}>
        <div className="wc__win">
          {ch.reel ? <ShowreelPlayer reels={[ch.reel]} labels={showreelLabels(locale)} ui="mini" className="wc__player" /> : null}
        </div>
        <p className="wc__idx" aria-hidden="true">
          <span>{pad(i + 1)}</span> / {pad(n)}
        </p>
        <div className="wc__head">
          <h2 id={id} className="wc__title">
            {ch.title}
          </h2>
        </div>
        <div className="wc__info">
          <p className="wc__line">
            <span className="wc__n">
              <span className="count-pill wc__count">{ch.count}</span> {L(COPY.chapterCases)}
            </span>
            <span className="wc__sep" aria-hidden="true" />
            <span>{L(LINES[ch.key])}</span>
          </p>
          <ul className="wc__cases">
            {ch.cases.map((c) => (
              <li key={c.href}>
                <TLink href={c.href}>
                  {c.client}
                  <Icon name="arrowUpRight" size={13} stroke={2.2} />
                </TLink>
              </li>
            ))}
          </ul>
          <TLink href={ch.service.href} className="link-dash wc__more">
            {L(COPY.more)} {ch.service.title}
          </TLink>
        </div>
      </div>
    </ScrollStage>
  );
}

/* ---------------- 5. Projectwand: van één project naar heel veel ---------------- */
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
  const total = data.stats.cases;
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
                  <img src={t.image} alt="" loading="lazy" decoding="async" />
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
            {L(COPY.wallTitleA)} <span className="g-stars ww__more">{fill(L(COPY.wallTitleB), { n: total - 1 })}</span>
          </h2>
          <Btn href={paths.cases} variant="light" size="sm">
            {fill(L(COPY.wallCta), { n: total })}
          </Btn>
        </div>
      </div>
    </ScrollStage>
  );
}

/* ---------------- 6. Afsluiter: sterke CTA ---------------- */
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
