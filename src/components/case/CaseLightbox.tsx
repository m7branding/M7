"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLenis } from "@/components/motion/SmoothScroll";

type Item = { src: string; alt: string };

/**
 * Lightbox voor de galerijbeelden op de casepagina. De beelden zijn gewone links (a[data-lb]
 * naar het beeld zelf), dus zonder JS opent het beeld gewoon; met JS vangt dit component de
 * klik af en toont alle galerijbeelden van de pagina in een modale <dialog> (pijltjes, Esc, swipe).
 */
export function CaseLightbox({ labels }: { labels: { close: string; prev: string; next: string; of: string; dialog: string } }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLElement | null>(null);
  const touch = useRef<number | null>(null);
  const [items, setItems] = useState<Item[]>([]);
  const [i, setI] = useState(-1);
  const lenis = useLenis();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>("a[data-lb]");
      if (!a) return;
      e.preventDefault();
      const all = Array.from(document.querySelectorAll<HTMLAnchorElement>("a[data-lb]"));
      trigger.current = a;
      setItems(all.map((x) => ({ src: x.getAttribute("href") || "", alt: x.querySelector("img")?.alt || "" })));
      setI(Math.max(0, all.indexOf(a)));
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    if (i >= 0 && !d.open) {
      d.showModal();
      lenis?.stop();
    }
  }, [i, lenis]);

  const close = useCallback(() => dlg.current?.close(), []);
  const go = useCallback((step: number) => setI((cur) => (items.length ? (cur + step + items.length) % items.length : cur)), [items.length]);

  const onClose = () => {
    setI(-1);
    lenis?.start();
    trigger.current?.focus({ preventScroll: true });
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") go(1);
    else if (e.key === "ArrowLeft") go(-1);
  };

  const cur = i >= 0 ? items[i] : undefined;
  return (
    <dialog
      ref={dlg}
      className="cx-lb"
      aria-label={labels.dialog}
      onClose={onClose}
      onKeyDown={onKey}
      onClick={(e) => {
        // klik naast het beeld (op de achtergrond) sluit
        if (e.target === e.currentTarget || (e.target as HTMLElement).classList.contains("cx-lb__stage")) close();
      }}
      onTouchStart={(e) => (touch.current = e.touches[0].clientX)}
      onTouchEnd={(e) => {
        if (touch.current === null) return;
        const dx = e.changedTouches[0].clientX - touch.current;
        touch.current = null;
        if (Math.abs(dx) > 48) go(dx < 0 ? 1 : -1);
      }}
    >
      {cur ? (
        <>
          <div className="cx-lb__stage">
            <img key={cur.src} src={cur.src} alt={cur.alt} className="cx-lb__img" decoding="async" />
          </div>
          <p className="cx-lb__count" aria-live="polite">
            {i + 1} {labels.of} {items.length}
          </p>
          <button type="button" className="cx-lb__btn cx-lb__close" onClick={close} aria-label={labels.close} autoFocus>
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M3 3l10 10M13 3 3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
          {items.length > 1 ? (
            <>
              <button type="button" className="cx-lb__btn cx-lb__prev" onClick={() => go(-1)} aria-label={labels.prev}>
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                  <path d="M11 3.5 5.5 9l5.5 5.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button type="button" className="cx-lb__btn cx-lb__next" onClick={() => go(1)} aria-label={labels.next}>
                <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
                  <path d="M7 3.5 12.5 9 7 14.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </>
          ) : null}
        </>
      ) : null}
    </dialog>
  );
}
