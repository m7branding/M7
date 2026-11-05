"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { useScroll } from "@/components/motion/SmoothScroll";
import type { TocItem } from "./toc";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * "In dit project": een klein glazen knopje linksonder (tegenover de dock rechtsonder) dat
 * verschijnt zodra je voorbij de hero bent en weer weggaat bij "Meer van dit soort werk".
 * Het toont waar je bent (02/05, breder ook de kop) en klapt open tot de inhoud als ankers;
 * het scrollen zelf doet Lenis (anchors) of de browser (scroll-margin).
 */
export function CaseToc({ items, title }: { items: TocItem[]; title: string }) {
  const [shown, setShown] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const targets = useRef<(HTMLElement | null)[]>([]);
  const id = useId();

  const update = useCallback(() => {
    const vh = window.innerHeight;
    const hero = document.querySelector(".cx-hero");
    const end = document.querySelector(".cx-more, .cx-next");
    const past = hero ? hero.getBoundingClientRect().bottom < vh * 0.3 : window.scrollY > vh;
    const before = end ? end.getBoundingClientRect().top > vh * 0.75 : true;
    setShown(past && before);
    // actief: het laatste hoofdstuk waarvan het anker boven 40% van het scherm staat
    let a = 0;
    targets.current.forEach((el, i) => {
      if (el && el.getBoundingClientRect().top < vh * 0.4) a = i;
    });
    setActive(a);
  }, []);
  useScroll(update);

  useEffect(() => {
    targets.current = items.map((it) => document.getElementById(it.id));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [items, update]);

  // weg uit beeld = dicht
  useEffect(() => {
    if (!shown) setOpen(false);
  }, [shown]);

  // dicht bij Escape of een klik/tik ernaast
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setOpen(false);
      btn.current?.focus();
    };
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onDown);
    };
  }, [open]);

  const now = items[active];
  return (
    <div ref={root} className="cx-toc" data-shown={shown ? "" : undefined} data-open={open ? "" : undefined}>
      <nav id={id} className="cx-toc__panel" aria-label={title} data-lenis-prevent="">
        <p className="cx-toc__title" aria-hidden="true">
          {title}
        </p>
        <ol className="cx-toc__list">
          {items.map((it, i) => (
            <li key={it.id} className={it.part ? "is-part" : undefined}>
              <a href={`#${it.id}`} className="cx-toc__link" aria-current={i === active ? "location" : undefined} onClick={() => setOpen(false)}>
                <span className="cx-toc__n">{pad(i + 1)}</span>
                <span className="cx-toc__label">{it.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <button ref={btn} type="button" className="cx-toc__btn" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        <svg className="cx-toc__ic" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M5.5 4h8M5.5 8h8M5.5 12h8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <circle cx="2.4" cy="4" r="1.1" fill="currentColor" />
          <circle cx="2.4" cy="8" r="1.1" fill="currentColor" />
          <circle cx="2.4" cy="12" r="1.1" fill="currentColor" />
        </svg>
        <span className="cx-toc__k">{title}</span>
        {now ? (
          <span className="cx-toc__now" aria-hidden="true">
            {now.label}
          </span>
        ) : null}
        <span className="cx-toc__count" aria-hidden="true">
          {pad(active + 1)}/{pad(items.length)}
        </span>
        <svg className="cx-toc__chev" width="12" height="8" viewBox="0 0 12 8" aria-hidden="true">
          <path d="M1.5 6.25 6 1.75l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
