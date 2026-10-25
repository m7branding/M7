"use client";

import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { M7EmblemDraw } from "@/components/brand/M7Logo";
import { PixelLogo } from "@/components/motion/PixelLogo";
import { GlowField } from "@/components/motion/GlowField";
import { useLocale } from "@/components/motion/LocaleProvider";
import { useLenis, useScroll } from "@/components/motion/SmoothScroll";
import { TLink } from "@/components/motion/TLink";
import { Btn } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SocialIcon } from "@/components/ui/Social";
import type { Dict } from "@/lib/dict";
import { localize, parsePublicPath } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import type { NavData } from "./types";

type Panel = "sectors" | "services" | "cases" | null;
type MenuKey = "sectors" | "services" | "cases" | "about" | "contact";

export function SiteChrome({ nav, dict }: { nav: NavData; dict: Dict }) {
  const locale = useLocale();
  const pathname = usePathname();
  const lenis = useLenis();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [panel, setPanel] = useState<Panel>(null);
  const [open, setOpen] = useState(false);
  const [alt, setAlt] = useState<{ nl: string; en: string }>({ nl: "/", en: "/en" });
  const lastY = useRef(0);
  const closeTimer = useRef<number>();

  // Header verbergen bij naar beneden scrollen, tonen bij omhoog
  useScroll((y) => {
    const d = y - lastY.current;
    if (Math.abs(d) > 6) {
      setHidden(d > 0 && y > 240 && !open);
      lastY.current = y;
    }
    setScrolled(y > 30);
  });

  // Taalwissel-URL's voor de huidige pagina
  useEffect(() => {
    const { path } = parsePublicPath(window.location.pathname);
    setAlt({ nl: localize(path, "nl"), en: localize(path, "en") });
    setPanel(null);
  }, [pathname]);

  // Menu: scroll lock + sluiten bij navigatie / ESC
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.classList.toggle("menu-open", open);
  }, [open, lenis]);
  useEffect(() => {
    const close = () => {
      setOpen(false);
      setPanel(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("m7:navigate", close);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("m7:navigate", close);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const openPanel = (p: Panel) => {
    window.clearTimeout(closeTimer.current);
    setPanel(p);
  };
  const scheduleClose = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setPanel(null), 160);
  };

  const navItems: { key: Panel; label: string; href: string; count?: number }[] = [
    { key: "sectors", label: dict.nav.sectors, href: paths.sectors },
    { key: "services", label: dict.nav.services, href: paths.services },
    { key: "cases", label: dict.nav.cases, href: paths.cases, count: nav.caseCount },
  ];

  return (
    <>
      <a href="#main" className="skip-link">
        {dict.nav.skip}
      </a>
      <header
        className={`hdr${hidden ? " is-hidden" : ""}${scrolled || panel ? " is-solid" : ""}${open ? " is-menu" : ""}`}
        onMouseLeave={scheduleClose}
      >
        <div className="hdr__bar container">
          <TLink href="/" className="hdr__logo" aria-label="M7 home">
            <M7EmblemDraw />
          </TLink>

          <nav className="hdr__nav" aria-label="Hoofdmenu">
            {navItems.map((it) => (
              <div key={it.key} className="hdr__item" onMouseEnter={() => openPanel(it.key)}>
                <TLink
                  href={it.href}
                  className={`hdr__link${panel === it.key ? " is-active" : ""}`}
                  aria-expanded={panel === it.key}
                  onFocus={() => openPanel(it.key)}
                >
                  {it.label}
                  {it.count ? <span className="count-pill hdr__count">{it.count}</span> : null}
                  <Icon name="chevronDown" size={15} stroke={2} className="hdr__chev" />
                </TLink>
              </div>
            ))}
            <div className="hdr__item" onMouseEnter={() => openPanel(null)}>
              <TLink href={paths.about} className="hdr__link">
                {dict.nav.about}
              </TLink>
            </div>
          </nav>

          <div className="hdr__actions">
            <div className="lang" aria-label={dict.misc.language}>
              <a href={alt.nl} className={locale === "nl" ? "is-on" : ""} hrefLang="nl" data-no-transition="">
                NL
              </a>
              <a href={alt.en} className={locale === "en" ? "is-on" : ""} hrefLang="en" data-no-transition="">
                EN
              </a>
            </div>
            <Btn href={paths.contact} variant="contact" size="sm" className="hdr__contact">
              {dict.nav.contact}
            </Btn>
            <button
              type="button"
              className={`burger${open ? " is-open" : ""}`}
              aria-label={open ? dict.nav.close : dict.nav.menu}
              aria-expanded={open}
              aria-controls="fullmenu"
              onClick={() => {
                setPanel(null);
                setOpen((o) => !o);
              }}
            >
              <span />
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        <MegaPanels panel={panel} nav={nav} dict={dict} onEnter={() => window.clearTimeout(closeTimer.current)} />
      </header>

      <FullMenu open={open} nav={nav} dict={dict} alt={alt} onClose={() => setOpen(false)} />
    </>
  );
}

/* ------------------------------------------------------------------ */

function MegaPanels({ panel, nav, dict, onEnter }: { panel: Panel; nav: NavData; dict: Dict; onEnter: () => void }) {
  return (
    <div className={`mega${panel ? " is-open" : ""}`} onMouseEnter={onEnter} aria-hidden={!panel}>
      <div className="mega__inner container">
        {panel === "services" && (
          <div className="mega__grid mega__grid--services" key="services">
            <div className="mega__list mega__list--2">
              {nav.services.map((s, i) => (
                <TLink
                  key={s.slug}
                  href={paths.service(s.slug)}
                  className="mega__svc"
                  style={{ ["--accent" as string]: s.color, ["--i" as string]: i }}
                >
                  <span className="mega__icon">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <span>
                    <strong>{s.title}</strong>
                    <small>{s.apps.slice(0, 3).map((a) => a.title).join(" · ")}</small>
                  </span>
                </TLink>
              ))}
            </div>
            <div className="mega__aside">
              <p className="kicker">{dict.nav.applications}</p>
              <p className="mega__big">
                {nav.services.reduce((n, s) => n + s.apps.length, 0)}
                <span>{dict.nav.applications.toLowerCase()}</span>
              </p>
              <TLink href={paths.applications} className="link-dash">
                {dict.nav.allApplications}
              </TLink>
              <div className="mega__cta">
                <Btn href={nav.contact.letsgo} size="sm">
                  {dict.cta.configurator}
                </Btn>
              </div>
            </div>
          </div>
        )}
        {panel === "sectors" && (
          <div className="mega__grid" key="sectors">
            <div className="mega__list mega__list--sectors">
              {nav.sectors.map((s, i) => (
                <TLink key={s.slug} href={paths.sector(s.slug)} className="mega__sector" style={{ ["--i" as string]: i }}>
                  <Icon name={s.icon} size={22} />
                  <span>{s.title}</span>
                </TLink>
              ))}
            </div>
            <div className="mega__aside">
              <TLink href={paths.sectors} className="link-dash">
                {dict.nav.allSectors}
              </TLink>
            </div>
          </div>
        )}
        {panel === "cases" && (
          <div className="mega__grid" key="cases">
            <div className="mega__cases">
              {nav.cases.slice(0, 4).map((c, i) => (
                <TLink key={c.slug} href={paths.case(c.slug)} className="mega__case" style={{ ["--i" as string]: i }}>
                  <span className="mega__case-img" style={{ background: c.color }}>
                    {c.cover ? <img src={c.cover} alt="" loading="lazy" /> : null}
                  </span>
                  <strong>{c.client}</strong>
                </TLink>
              ))}
            </div>
            <div className="mega__aside">
              <TLink href={paths.cases} className="link-dash">
                {dict.nav.allCases} <span className="count-badge">{nav.caseCount}</span>
              </TLink>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */

function FullMenu({
  open,
  nav,
  dict,
  alt,
  onClose,
}: {
  open: boolean;
  nav: NavData;
  dict: Dict;
  alt: { nl: string; en: string };
  onClose: () => void;
}) {
  const locale = useLocale();
  const [active, setActive] = useState<MenuKey>("services");
  const [expanded, setExpanded] = useState<MenuKey | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Focus in het menu houden
  useEffect(() => {
    if (!open) return;
    setActive("services");
    const el = ref.current!;
    const first = el.querySelector<HTMLElement>(".fm__link");
    window.setTimeout(() => first?.focus({ preventScroll: true }), 650);
    const trap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const f = Array.from(el.querySelectorAll<HTMLElement>("a, button")).filter((n) => n.offsetParent);
      if (!f.length) return;
      if (e.shiftKey && document.activeElement === f[0]) {
        e.preventDefault();
        f[f.length - 1].focus();
      } else if (!e.shiftKey && document.activeElement === f[f.length - 1]) {
        e.preventDefault();
        f[0].focus();
      }
    };
    el.addEventListener("keydown", trap);
    return () => el.removeEventListener("keydown", trap);
  }, [open]);

  const items: { key: MenuKey; label: string; href: string; count?: number; sub: boolean }[] = [
    { key: "sectors", label: dict.nav.sectors, href: paths.sectors, sub: true },
    { key: "services", label: dict.nav.services, href: paths.services, sub: true },
    { key: "cases", label: dict.nav.cases, href: paths.cases, count: nav.caseCount, sub: false },
    { key: "about", label: dict.nav.about, href: paths.about, sub: false },
    { key: "contact", label: dict.nav.contact, href: paths.contact, sub: false },
  ];

  const toggleSub = useCallback((k: MenuKey, e: React.MouseEvent) => {
    if (window.matchMedia("(max-width: 900px)").matches) {
      e.preventDefault();
      setExpanded((x) => (x === k ? null : k));
    }
  }, []);

  return (
    <div id="fullmenu" ref={ref} className={`fm${open ? " is-open" : ""}`} aria-hidden={!open} role="dialog" aria-modal="true" aria-label={dict.nav.menu}>
      <div className="fm__curtain fm__curtain--1" />
      <div className="fm__curtain fm__curtain--2" />
      <div className="fm__curtain fm__curtain--3">
        <GlowField
          blobs={[
            { x: "15%", y: "85%", c: "rgba(58,255,255,.16)", s: "70vmax", dur: 18 },
            { x: "90%", y: "10%", c: "rgba(139,61,255,.18)", s: "60vmax", dur: 22, delay: -6 },
            { x: "70%", y: "90%", c: "rgba(0,255,25,.08)", s: "50vmax", dur: 20, delay: -3 },
          ]}
        />
        <PixelLogo active={open} className="fm__watermark" />
      </div>

      <div className="fm__body container" data-lenis-prevent="">
        <ol className="fm__links" onMouseLeave={() => setActive("services")}>
          {items.map((it, i) => (
            <li key={it.key} className={`fm__item${active === it.key ? " is-active" : ""}`} style={{ ["--i" as string]: i }}>
              <TLink
                href={it.href}
                className="fm__link"
                onMouseEnter={() => setActive(it.key)}
                onFocus={() => setActive(it.key)}
                onClick={it.sub ? (e: React.MouseEvent) => toggleSub(it.key, e) : undefined}
                aria-expanded={it.sub ? expanded === it.key : undefined}
                {...(it.sub ? { "data-toggle-sub": "" } : {})}
                tabIndex={open ? 0 : -1}
              >
                <span className="fm__label">
                  <span>{it.label}</span>
                  <span aria-hidden="true">{it.label}</span>
                </span>
                {it.count ? <span className="count-pill fm__count">{it.count}</span> : null}
                <Icon name="arrowUpRight" size={34} stroke={1.6} className="fm__arrow" />
              </TLink>
              {it.sub && (
                <div className={`fm__acc${expanded === it.key ? " is-open" : ""}`}>
                  <div>
                    {(it.key === "services" ? nav.services : nav.sectors).map((s) => (
                      <TLink key={s.slug} href={it.key === "services" ? paths.service(s.slug) : paths.sector(s.slug)} tabIndex={open ? 0 : -1}>
                        {s.title}
                      </TLink>
                    ))}
                    <TLink href={it.href} className="fm__acc-all" tabIndex={open ? 0 : -1}>
                      {it.key === "services" ? dict.nav.allServices : dict.nav.allSectors} →
                    </TLink>
                  </div>
                </div>
              )}
            </li>
          ))}
        </ol>

        <div className="fm__preview" aria-live="polite">
          <div className={`fm__pane${active === "services" ? " is-on" : ""}`}>
            <p className="kicker">{dict.nav.services}</p>
            <ul className="fm__svc">
              {nav.services.map((s, i) => (
                <li key={s.slug} style={{ ["--accent" as string]: s.color, ["--i" as string]: i }}>
                  <TLink href={paths.service(s.slug)} tabIndex={open && active === "services" ? 0 : -1}>
                    <span className="chip__dot" />
                    {s.title}
                    <em>{s.apps.length}</em>
                  </TLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={`fm__pane${active === "sectors" ? " is-on" : ""}`}>
            <p className="kicker">{dict.nav.sectors}</p>
            <ul className="fm__sectors">
              {nav.sectors.map((s, i) => (
                <li key={s.slug} style={{ ["--i" as string]: i }}>
                  <TLink href={paths.sector(s.slug)} tabIndex={open && active === "sectors" ? 0 : -1}>
                    <Icon name={s.icon} size={20} />
                    {s.title}
                  </TLink>
                </li>
              ))}
            </ul>
          </div>
          <div className={`fm__pane${active === "cases" ? " is-on" : ""}`}>
            <p className="kicker">
              {dict.nav.cases} <span className="count-pill fm__kicker-count">{nav.caseCount}</span>
            </p>
            <div className="fm__cases">
              {nav.cases.slice(0, 4).map((c, i) => (
                <TLink key={c.slug} href={paths.case(c.slug)} style={{ ["--i" as string]: i }} tabIndex={open && active === "cases" ? 0 : -1}>
                  <span style={{ background: c.color }}>{c.cover ? <img src={c.cover} alt="" loading="lazy" /> : null}</span>
                  <strong>{c.client}</strong>
                </TLink>
              ))}
            </div>
          </div>
          <div className={`fm__pane${active === "about" ? " is-on" : ""}`}>
            <p className="kicker">{dict.nav.about}</p>
            <div className="fm__team">
              {nav.team.map((m, i) => (
                <img key={i} src={m.photo} alt="" loading="lazy" style={{ ["--i" as string]: i }} />
              ))}
            </div>
            <p className="fm__about">
              {locale === "nl"
                ? "Een compact team van creatieve en technische specialisten. Strategie, design en techniek aan één tafel."
                : "A compact team of creative and technical specialists. Strategy, design and technology at one table."}
            </p>
            <TLink href={nav.contact.answers} className="link-dash" tabIndex={open && active === "about" ? 0 : -1}>
              {dict.nav.answers}
            </TLink>
          </div>
          <div className={`fm__pane${active === "contact" ? " is-on" : ""}`}>
            <p className="kicker">{dict.nav.contact}</p>
            <a className="fm__mail" href={`mailto:${nav.contact.email}`} tabIndex={open && active === "contact" ? 0 : -1}>
              {nav.contact.email}
            </a>
            {nav.contact.phone ? (
              <a className="fm__phone" href={`tel:${nav.contact.phone.replace(/\s/g, "")}`}>
                {nav.contact.phone}
              </a>
            ) : null}
            <p className="fm__addr">{nav.contact.address}</p>
          </div>
        </div>
      </div>

      <div className="fm__foot container">
        <div className="fm__socials">
          {nav.socials.map((s) => (
            <a key={s.key} href={s.url} target="_blank" rel="noopener" aria-label={s.key} tabIndex={open ? 0 : -1}>
              <SocialIcon name={s.key} />
            </a>
          ))}
        </div>
        <div className="lang lang--lg">
          <a href={alt.nl} className={locale === "nl" ? "is-on" : ""} data-no-transition="" tabIndex={open ? 0 : -1}>
            NL
          </a>
          <a href={alt.en} className={locale === "en" ? "is-on" : ""} data-no-transition="" tabIndex={open ? 0 : -1}>
            EN
          </a>
        </div>
        <Btn href={nav.contact.letsgo}>{dict.cta.launch}</Btn>
      </div>
      <button type="button" className="fm__scrim" aria-hidden="true" tabIndex={-1} onClick={onClose} />
    </div>
  );
}
