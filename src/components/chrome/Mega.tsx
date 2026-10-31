"use client";

import { useEffect, useMemo, useState } from "react";
import { Aurora } from "@/components/motion/Aurora";
import { useLocale } from "@/components/motion/LocaleProvider";
import { TLink } from "@/components/motion/TLink";
import { OverlayButton } from "@/components/overlay/OverlayButton";
import { Mockup, visualSources } from "@/components/sector/Frames";
import { Avatars } from "@/components/support/Avatars";
import { Btn } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { ServiceSlug } from "@/content/registry";
import { people } from "@/content/team";
import type { Locale, T, TileVisual } from "@/content/types";
import { DEFAULT_VISUALS } from "@/content/visuals";
import type { Dict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import type { NavData } from "./types";
import "./mega.css";

/* ============================================================
   Mega-dropdowns in de header (desktop). Links de lijst, rechts
   een beeldblok:
   - Diensten: mockups van eigen werk (dezelfde frames als de
     sectortegels), wisselt elke 5 s; hover op een dienst springt erheen.
   - Sectoren: paars Aurora-blok met de korte intake en echte gezichten.
   - Cases: grote cover van de uitgelichte case onder de muis.
   Beelden laden pas als een paneel voor het eerst opengaat; een
   gesloten paneel is `inert` (niets focusbaar).
   ============================================================ */

export type MegaPanel = "sectors" | "services" | "cases";

const COPY = {
  work: { nl: "Uit eigen werk", en: "Our own work" },
  project: { nl: "Project", en: "Project" },
  apps: { nl: "toepassingen", en: "applications" },
  intakeK: { nl: "Korte intake", en: "Quick intake" },
  intakeT: { nl: "Vertel ons waar je staat.", en: "Tell us where you stand." },
  intakeP: {
    nl: "Een paar klikken, dan weten we genoeg om gericht mee te denken. Ook als jouw sector er niet tussen staat.",
    en: "A few clicks and we know enough to think along properly. Even if your sector isn't listed.",
  },
  intakeCta: { nl: "Doe de korte intake", en: "Take the quick intake" },
  think: { nl: "We denken graag mee", en: "Happy to think along" },
  featured: { nl: "Uitgelicht", en: "Featured" },
} satisfies Record<string, T>;

/** Waar de dienstenslider was (blijft staan tussen openen en sluiten). */
let lastSlide = 0;

export function MegaPanels({
  panel,
  nav,
  dict,
  rootRef,
  onEnter,
  onKeyDown,
  onClose,
}: {
  panel: MegaPanel | null;
  nav: NavData;
  dict: Dict;
  rootRef: React.RefObject<HTMLDivElement>;
  onEnter: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLDivElement>) => void;
  onClose: () => void;
}) {
  const locale = useLocale();
  // Het laatste paneel blijft staan tijdens het dichtschuiven en wordt daarna pas opgeruimd
  const [shown, setShown] = useState<MegaPanel | null>(null);
  useEffect(() => {
    if (panel) {
      setShown(panel);
      return;
    }
    const t = window.setTimeout(() => setShown(null), 700);
    return () => window.clearTimeout(t);
  }, [panel]);
  useEffect(() => {
    if (rootRef.current) rootRef.current.inert = !panel;
  }, [panel, rootRef]);

  // Een paneel wordt pas gemaakt (en laadt pas beelden) als het voor het eerst opengaat; daarna blijft
  // het staan maar verborgen (display: none), zodat de slider, de case-covers en de Aurora niet
  // telkens opnieuw opstarten. Verborgen = geen animaties, en de Aurora pauzeert zichzelf.
  const [made, setMade] = useState<Partial<Record<MegaPanel, true>>>({});
  useEffect(() => {
    if (panel) setMade((m) => (m[panel] ? m : { ...m, [panel]: true }));
  }, [panel]);

  const view = panel ?? shown;
  const has = (k: MegaPanel) => made[k] || view === k;
  return (
    <div id="mega" ref={rootRef} className={`mega${panel ? " is-open" : ""}`} onMouseEnter={onEnter} onKeyDown={onKeyDown} aria-hidden={!panel}>
      <div className="mega__inner container">
        {has("sectors") && <SectorsPanel nav={nav} dict={dict} locale={locale} hidden={view !== "sectors"} onClose={onClose} />}
        {has("services") && (
          <ServicesPanel nav={nav} dict={dict} locale={locale} hidden={view !== "services"} live={panel === "services"} />
        )}
        {has("cases") && <CasesPanel nav={nav} dict={dict} locale={locale} hidden={view !== "cases"} />}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Diensten                                                            */
/* ------------------------------------------------------------------ */

type Slide = { slug: string; title: string; color: string; visual: TileVisual };

function ServicesPanel({ nav, dict, locale, hidden, live }: { nav: NavData; dict: Dict; locale: Locale; hidden: boolean; live: boolean }) {
  const slides = useMemo<Slide[]>(
    () =>
      nav.services.flatMap((s) => {
        const visual = DEFAULT_VISUALS[s.slug as ServiceSlug];
        return visual ? [{ slug: s.slug, title: s.title, color: s.color, visual }] : [];
      }),
    [nav.services],
  );
  const [active, setActive] = useState(() => (slides.length ? lastSlide % slides.length : 0));
  const [hold, setHold] = useState(false);
  useEffect(() => {
    lastSlide = active;
  }, [active]);
  const slideOf = (slug: string) => slides.findIndex((x) => x.slug === slug);
  const apps = nav.services.reduce((n, s) => n + s.apps.length, 0);

  return (
    <div className="mega__grid mega__grid--services" hidden={hidden}>
      <div className="mega__main">
        <div className="mega__list mega__list--2" onMouseLeave={() => setHold(false)}>
          {nav.services.map((s, i) => {
            const k = slideOf(s.slug);
            return (
              <TLink
                key={s.slug}
                href={paths.service(s.slug)}
                className={`mega__svc${k >= 0 && k === active ? " is-on" : ""}`}
                style={{ ["--accent" as string]: s.color, ["--i" as string]: i }}
                onMouseEnter={() => {
                  if (k >= 0) setActive(k);
                  setHold(true);
                }}
                onFocus={() => k >= 0 && setActive(k)}
              >
                <span className="mega__icon">
                  <Icon name={s.icon} size={22} />
                </span>
                <span className="mega__svc-txt">
                  <strong>{s.title}</strong>
                  <small>{s.apps.slice(0, 3).map((a) => a.title).join(" · ")}</small>
                </span>
              </TLink>
            );
          })}
        </div>
        <div className="mega__foot">
          <TLink href={paths.services} className="link-dash">
            {dict.nav.allServices}
          </TLink>
          <TLink href={paths.applications} className="mega__more">
            <span className="count-badge">{apps}</span>
            {tr(COPY.apps, locale)}
            <Icon name="arrowRight" size={15} stroke={2} />
          </TLink>
          <span className="mega__foot-cta">
            <Btn href={nav.contact.letsgo} size="sm">
              {dict.cta.configurator}
            </Btn>
          </span>
        </div>
      </div>
      {slides.length ? (
        <Showcase slides={slides} active={active} paused={hold || !live} onPick={setActive} locale={locale} />
      ) : null}
    </div>
  );
}

/* --- voorladen: verhouding per beeld (voor de frames) en klaar-voor-gebruik --- */
const ratios = new Map<string, number>();
const loading = new Map<string, Promise<void>>();
function preload(src: string): Promise<void> {
  let p = loading.get(src);
  if (!p) {
    p = new Promise<void>((resolve) => {
      const img = new Image();
      const done = (r: number) => {
        ratios.set(src, r);
        resolve();
      };
      img.decoding = "async";
      img.src = src;
      img.decode().then(
        () => done(img.naturalHeight ? img.naturalWidth / img.naturalHeight : 0),
        () => done(0),
      );
    });
    loading.set(src, p);
  }
  return p;
}
const loadVisual = (v: TileVisual) => Promise.all(visualSources(v).map(preload));
const isLoaded = (v: TileVisual) => visualSources(v).every((s) => ratios.has(s));
const aspect = (src: string) => ratios.get(src) || null;

/**
 * Rechterblok bij Diensten: één mockup tegelijk, rustige crossfade.
 * Het voortgangsstreepje in de actieve stip loopt 5 s (CSS) en schuift bij `animationend` door,
 * zodat pauzeren (hover, menu dicht) en de animatie altijd gelijk lopen. Bij reduced motion: geen autoplay.
 */
function Showcase({
  slides,
  active,
  paused,
  onPick,
  locale,
}: {
  slides: Slide[];
  active: number;
  paused: boolean;
  onPick: (i: number) => void;
  locale: Locale;
}) {
  const [view, setView] = useState<{ cur: number | null; prev: number | null }>(() => ({
    cur: isLoaded(slides[active].visual) ? active : null,
    prev: null,
  }));
  const [, bump] = useState(0);
  const [hover, setHover] = useState(false);

  // Gevraagde slide laden en pas tonen als hij klaar is (geen half geladen frames)
  useEffect(() => {
    let alive = true;
    loadVisual(slides[active].visual).then(() => {
      if (alive) setView((v) => (v.cur === active ? v : { cur: active, prev: v.cur }));
    });
    return () => {
      alive = false;
    };
  }, [active, slides]);

  // Daarna de rest op de achtergrond, op volgorde vanaf de huidige
  const started = view.cur !== null;
  useEffect(() => {
    if (!started) return;
    let alive = true;
    (async () => {
      for (let k = 1; k < slides.length && alive; k++) {
        const v = slides[(lastSlide + k) % slides.length].visual;
        if (isLoaded(v)) continue;
        await loadVisual(v);
        if (alive) bump((x) => x + 1);
      }
    })();
    return () => {
      alive = false;
    };
  }, [started, slides]);

  const cur = view.cur;
  const s = cur === null ? null : slides[cur];
  const next = () => onPick(((cur ?? active) + 1) % slides.length);

  return (
    <div
      className={`mega-show${cur !== null ? " is-ready" : ""}${paused || hover ? " is-paused" : ""}`}
      style={s ? { ["--accent" as string]: s.color } : undefined}
      aria-hidden="true"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="mega-show__head">
        <p className="mega-show__k">
          <span className="mega-show__dot" />
          {tr(COPY.work, locale)}
        </p>
        <div className="mega-show__dots">
          {slides.map((x, i) => (
            <button
              key={x.slug}
              type="button"
              tabIndex={-1}
              className={i === cur ? "is-on" : undefined}
              style={{ ["--accent" as string]: x.color }}
              onClick={() => onPick(i)}
              onMouseEnter={() => onPick(i)}
            >
              {i === cur ? <i key={`p${cur}`} className="mega-show__prog" onAnimationEnd={next} /> : null}
            </button>
          ))}
        </div>
        {s ? (
          <div className="mega-show__cap" key={cur}>
            <TLink href={paths.service(s.slug)} tabIndex={-1} className="mega-show__title">
              {s.title}
            </TLink>
            {s.visual.label ? (
              <p className="mega-show__meta">
                <span>{tr(COPY.project, locale)}</span>
                {s.visual.label}
              </p>
            ) : null}
          </div>
        ) : (
          <div className="mega-show__cap" />
        )}
      </div>
      <TLink href={s ? paths.service(s.slug) : paths.services} tabIndex={-1} className="mega-show__stage">
        {slides.map((x, i) =>
          i === cur || i === view.prev || isLoaded(x.visual) ? (
            <div
              key={x.slug}
              className={`mega-slide sb-kind--${x.visual.kind}${i === cur ? " is-on" : i === view.prev ? " is-prev" : ""}`}
              style={{ ["--accent" as string]: x.color }}
            >
              <span className="mega-slide__glow" />
              <Mockup visual={x.visual} aspect={aspect} />
            </div>
          ) : null,
        )}
      </TLink>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sectoren                                                            */
/* ------------------------------------------------------------------ */

function SectorsPanel({
  nav,
  dict,
  locale,
  hidden,
  onClose,
}: {
  nav: NavData;
  dict: Dict;
  locale: Locale;
  hidden: boolean;
  onClose: () => void;
}) {
  // Echte gezichten: Martijn en de eerste twee collega's
  const crew = people.slice(0, 3).map((m) => ({ name: m.name, photo: m.avatar }));
  return (
    <div className="mega__grid mega__grid--sectors" hidden={hidden}>
      <div className="mega__main">
        <div className="mega__list mega__list--sectors">
          {nav.sectors.map((s, i) => (
            <TLink key={s.slug} href={paths.sector(s.slug)} className="mega__sector" style={{ ["--i" as string]: i }}>
              <Icon name={s.icon} size={20} />
              <span>{s.title}</span>
            </TLink>
          ))}
        </div>
        <div className="mega__foot">
          <TLink href={paths.sectors} className="link-dash">
            {dict.nav.allSectors} <span className="count-badge">{nav.sectors.length}</span>
          </TLink>
        </div>
      </div>
      <div className="mega-cta">
        <Aurora palette="violet" fallback="/media/bg/ai-waves.webp" />
        <div className="mega-cta__inner">
          <div className="mega-cta__team">
            <Avatars people={crew} size={38} ring="#1a0a4a" />
            <span>{tr(COPY.think, locale)}</span>
          </div>
          <div className="mega-cta__body">
            <p className="mega-cta__k">{tr(COPY.intakeK, locale)}</p>
            <p className="mega-cta__title">{tr(COPY.intakeT, locale)}</p>
            <p className="mega-cta__text">{tr(COPY.intakeP, locale)}</p>
            <span className="mega-cta__btn" onClick={onClose}>
              <OverlayButton target="intake" look="btn" size="sm" variant="light">
                {tr(COPY.intakeCta, locale)}
              </OverlayButton>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Cases                                                               */
/* ------------------------------------------------------------------ */

function CasesPanel({ nav, dict, locale, hidden }: { nav: NavData; dict: Dict; locale: Locale; hidden: boolean }) {
  const list = nav.cases.filter((c) => c.cover).slice(0, 5);
  const [active, setActive] = useState(0);
  const c = list[active];
  return (
    <div className="mega__grid mega__grid--cases" hidden={hidden}>
      <div className="mega__main">
        <div className="mega__cases">
          {list.map((x, i) => (
            <TLink
              key={x.slug}
              href={paths.case(x.slug)}
              className={`mega__case${i === active ? " is-on" : ""}`}
              style={{ ["--i" as string]: i, ["--accent" as string]: x.color }}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
            >
              <span className="mega__case-img" style={{ background: x.color }}>
                <img src={x.cover} alt="" loading="lazy" decoding="async" />
              </span>
              <span className="mega__case-txt">
                <strong>{x.client}</strong>
                <small>{x.title}</small>
              </span>
            </TLink>
          ))}
          <TLink href={paths.cases} className="mega__case mega__case--all" style={{ ["--i" as string]: list.length }}>
            <span className="mega__case-all">
              <span className="count-pill">{nav.caseCount}</span>
              {dict.nav.allCases}
            </span>
            <Icon name="arrowRight" size={18} stroke={2} />
          </TLink>
        </div>
      </div>
      {c ? (
        <TLink href={paths.case(c.slug)} tabIndex={-1} aria-hidden="true" className="mega-feat" style={{ ["--accent" as string]: c.color }}>
          {list.map((x, i) => (
            <span key={x.slug} className={`mega-feat__slide${i === active ? " is-on" : ""}`} style={{ background: x.color }}>
              <img src={x.cover} alt="" loading="lazy" decoding="async" />
            </span>
          ))}
          <span className="mega-feat__cap">
            <span className="mega-feat__txt" key={c.slug}>
              <span className="mega-feat__k">{tr(COPY.featured, locale)}</span>
              <strong>{c.client}</strong>
            </span>
            <span className="mega-feat__btn">
              {dict.cta.viewCase}
              <Icon name="arrowUpRight" size={16} stroke={2.2} />
            </span>
          </span>
        </TLink>
      ) : null}
    </div>
  );
}
