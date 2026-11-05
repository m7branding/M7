"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useLenis, useScroll } from "@/components/motion/SmoothScroll";
import { TLink } from "@/components/motion/TLink";
import { Icon } from "@/components/ui/Icon";

interface Group {
  slug: string;
  title: string;
  short: string;
  color: string;
  href: string;
  apps: { slug: string; title: string; summary: string; href: string }[];
}

/** Breedte waaronder de zwevende dienstenbalk werkt (dezelfde grens als in pages.css). */
const JUMP_MQ = "(max-width: 900px)";

/** Zoek- en filterbaar overzicht van alle toepassingen, gegroepeerd per dienst. */
export function ApplicationsExplorer({
  groups,
  labels,
}: {
  groups: Group[];
  labels: { all: string; search: string; none: string; jump: string };
}) {
  const [filter, setFilter] = useState<string | null>(null);
  const [q, setQ] = useState("");

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    return groups
      .filter((g) => !filter || g.slug === filter)
      .map((g) => ({ ...g, apps: g.apps.filter((a) => !term || (a.title + " " + a.summary).toLowerCase().includes(term)) }))
      .filter((g) => g.apps.length);
  }, [groups, filter, q]);

  /* ---------- Mobiel: glazen balk onder de navigatie om tussen diensten te springen ---------- */
  const rootRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const jumpRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const lenis = useLenis();
  const [jumpOn, setJumpOn] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const canJump = shown.length > 1;

  const update = useCallback(() => {
    const root = rootRef.current;
    const bar = barRef.current;
    const jump = jumpRef.current;
    if (!root || !bar || !jump || !canJump || !window.matchMedia(JUMP_MQ).matches) {
      setJumpOn(false);
      return;
    }
    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 68;
    // pas tonen als de filters onder de navigatie zijn verdwenen, en weer weg aan het eind van de lijst
    setJumpOn(bar.getBoundingClientRect().bottom < header && root.getBoundingClientRect().bottom > header + jump.offsetHeight + 120);
    // actieve dienst: de laatste groep waarvan de kop de leeslijn onder de balk is gepasseerd
    const line = header + jump.offsetHeight + 48;
    let cur: string | null = null;
    root.querySelectorAll<HTMLElement>("[data-group]").forEach((g) => {
      if (g.getBoundingClientRect().top <= line) cur = g.dataset.group ?? null;
    });
    setActive(cur ?? shown[0]?.slug ?? null);
  }, [canJump, shown]);

  useScroll(update);
  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [update]);

  // houd de actieve chip in beeld in de horizontaal scrollende balk
  useEffect(() => {
    const track = jumpRef.current?.querySelector<HTMLElement>(".explorer__jump-track");
    const chip = track?.querySelector<HTMLElement>(`[data-k="${active}"]`);
    if (!track || !chip || !jumpOn) return;
    const left = chip.offsetLeft - (track.clientWidth - chip.offsetWidth) / 2;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    track.scrollTo({ left: Math.max(0, left), behavior: reduce ? "auto" : "smooth" });
  }, [active, jumpOn]);

  /** Scroll naar een element, met de kop net onder de navigatie + de balk (omhoog komt de navigatie terug). */
  const scrollToEl = (el: HTMLElement, extra = 16) => {
    const header = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-h")) || 68;
    const jumpH = jumpRef.current?.offsetHeight ?? 0;
    const goingUp = el.getBoundingClientRect().top < 0;
    const offset = -((goingUp ? header : 0) + jumpH + extra);
    // Lenis trekt de scroll-margin-top van het doel er zelf al af (die is er voor ankers zonder JS)
    if (lenis) lenis.scrollTo(el, { offset: offset + (parseFloat(getComputedStyle(el).scrollMarginTop) || 0) });
    else window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY + offset });
  };

  const onJump = (slug: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    const el = document.getElementById(slug);
    if (!el) return;
    // zelf scrollen (Lenis' eigen anker-offset houdt geen rekening met deze balk)
    e.preventDefault();
    e.stopPropagation();
    setActive(slug);
    scrollToEl(el);
    history.replaceState(null, "", `#${slug}`);
  };

  const toSearch = () => {
    const root = rootRef.current;
    if (!root) return;
    scrollToEl(root, 24);
    window.setTimeout(() => searchRef.current?.focus({ preventScroll: true }), 700);
  };

  return (
    <div className="explorer" ref={rootRef}>
      <div className="explorer__bar" ref={barRef}>
        <div className="explorer__filters" role="group">
          <button type="button" className={`chip${!filter ? " is-on" : ""}`} onClick={() => setFilter(null)}>
            {labels.all}
          </button>
          {groups.map((g) => (
            <button
              key={g.slug}
              type="button"
              className={`chip${filter === g.slug ? " is-on" : ""}`}
              style={{ ["--accent" as string]: g.color }}
              onClick={() => setFilter(filter === g.slug ? null : g.slug)}
            >
              <span className="chip__dot" />
              {g.short}
            </button>
          ))}
        </div>
        <label className="explorer__search">
          <Icon name="search" size={18} />
          <input ref={searchRef} type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={labels.search} aria-label={labels.search} />
        </label>
      </div>

      <nav ref={jumpRef} className={`explorer__jump${jumpOn ? " is-on" : ""}`} aria-label={labels.jump} aria-hidden={!jumpOn}>
        <div className="explorer__jump-track">
          <button type="button" className="explorer__jump-search" onClick={toSearch} aria-label={labels.search} tabIndex={jumpOn ? 0 : -1}>
            <Icon name="search" size={16} stroke={2} />
          </button>
          {shown.map((g) => (
            <a
              key={g.slug}
              href={`#${g.slug}`}
              data-k={g.slug}
              className={`chip${active === g.slug ? " is-on" : ""}`}
              style={{ ["--accent" as string]: g.color }}
              aria-current={active === g.slug ? "location" : undefined}
              tabIndex={jumpOn ? 0 : -1}
              onClick={onJump(g.slug)}
            >
              <span className="chip__dot" />
              {g.short}
            </a>
          ))}
        </div>
      </nav>

      {shown.length === 0 ? <p className="muted center">{labels.none}</p> : null}
      {shown.map((g) => (
        <div key={g.slug} id={g.slug} data-group={g.slug} className="explorer__group" style={{ ["--accent" as string]: g.color }}>
          <TLink href={g.href} className="explorer__title">
            <span className="chip__dot" />
            {g.title}
            <Icon name="arrowRight" size={20} />
          </TLink>
          <div className="explorer__grid">
            {g.apps.map((a) => (
              <TLink key={a.slug} href={a.href} className="explorer__item">
                <strong>{a.title}</strong>
                <span>{a.summary}</span>
              </TLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
