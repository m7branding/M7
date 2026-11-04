"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type GalleryPhoto = {
  sm: string;
  lg: string;
  w: number;
  h: number;
  alt: string;
  /** Vaste masonry-plek per schermbreedte: [kolom, span] voor groot / middel / klein (zie masonry.ts). */
  at: { l: [number, number]; m: [number, number]; s: [number, number] };
};

type Lenis = { stop: () => void; start: () => void };

/**
 * Masonry-fotogalerij (grid met vaste, vooraf berekende plekken) met een rustige lightbox.
 * Grid: kleine versie (sm, lazy, vaste breedte/hoogte tegen layout shift).
 * Lightbox: grote versie (lg), pijltjes/Escape, swipe op mobiel.
 */
export function Gallery({
  photos,
  label,
  className,
  t,
}: {
  photos: GalleryPhoto[];
  label: string;
  className?: string;
  t: { open: string; close: string; prev: string; next: string };
}) {
  const [open, setOpen] = useState<number | null>(null);
  const opener = useRef<HTMLButtonElement | null>(null);

  return (
    <>
      <div className={`agal-wrap${className ? ` ${className}` : ""}`}>
        <ul className="agal" aria-label={label} data-stagger="">
          {photos.map((p, i) => (
            <li
              key={p.lg}
              className="agal__item"
              style={
                {
                  "--cl": p.at.l[0],
                  "--sl": p.at.l[1],
                  "--cm": p.at.m[0],
                  "--sm": p.at.m[1],
                  "--cs": p.at.s[0],
                  "--ss": p.at.s[1],
                } as React.CSSProperties
              }
            >
              <button
                type="button"
                className="agal__btn"
                onClick={(e) => {
                  opener.current = e.currentTarget;
                  setOpen(i);
                }}
                aria-label={`${t.open}: ${p.alt}`}
              >
                <img src={p.sm} width={p.w} height={p.h} alt={p.alt} loading="lazy" decoding="async" />
                <span className="agal__cap" aria-hidden="true">
                  {p.alt}
                </span>
                <span className="agal__zoom" aria-hidden="true">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M14 4h6v6M10 20H4v-6M20 4l-6.5 6.5M4 20l6.5-6.5" />
                  </svg>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
      {open !== null ? (
        <Lightbox
          photos={photos}
          index={open}
          onIndex={setOpen}
          onClose={() => {
            setOpen(null);
            opener.current?.focus({ preventScroll: true });
          }}
          t={t}
        />
      ) : null}
    </>
  );
}

function Lightbox({
  photos,
  index,
  onIndex,
  onClose,
  t,
}: {
  photos: GalleryPhoto[];
  index: number;
  onIndex: (i: number) => void;
  onClose: () => void;
  t: { close: string; prev: string; next: string };
}) {
  const n = photos.length;
  const p = photos[index];
  const [loaded, setLoaded] = useState<Record<string, true>>({});
  const [shown, setShown] = useState(false);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const box = useRef<HTMLDivElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);

  const step = useCallback((d: number) => onIndex((index + d + n) % n), [index, n, onIndex]);

  const close = useCallback(() => {
    setShown(false);
    window.setTimeout(onClose, 260);
  }, [onClose]);

  useEffect(() => {
    const html = document.documentElement;
    const lenis = (window as unknown as { __lenis?: Lenis }).__lenis;
    lenis?.stop();
    html.classList.add("agal-open");
    closeBtn.current?.focus({ preventScroll: true });
    const r = requestAnimationFrame(() => setShown(true));
    return () => {
      cancelAnimationFrame(r);
      html.classList.remove("agal-open");
      lenis?.start();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") step(1);
      else if (e.key === "ArrowLeft") step(-1);
      else if (e.key === "Tab" && box.current) {
        // focus binnen de lightbox houden
        const f = Array.from(box.current.querySelectorAll<HTMLElement>("button"));
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close, step]);

  // buren alvast laden
  useEffect(() => {
    [1, -1].forEach((d) => {
      const img = new Image();
      img.src = photos[(index + d + n) % n].lg;
    });
  }, [index, n, photos]);

  return createPortal(
    <div
      ref={box}
      className="albox"
      data-shown={shown ? "1" : "0"}
      role="dialog"
      aria-modal="true"
      aria-label={p.alt}
      data-lenis-prevent=""
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
      onTouchStart={(e) => {
        const tt = e.touches[0];
        touch.current = { x: tt.clientX, y: tt.clientY };
      }}
      onTouchEnd={(e) => {
        const s = touch.current;
        touch.current = null;
        if (!s) return;
        const tt = e.changedTouches[0];
        const dx = tt.clientX - s.x;
        const dy = tt.clientY - s.y;
        if (Math.abs(dx) > 48 && Math.abs(dx) > Math.abs(dy) * 1.4) step(dx < 0 ? 1 : -1);
      }}
    >
      <figure className="albox__fig" onClick={(e) => e.target === e.currentTarget && close()}>
        <div
          className="albox__img"
          style={{
            aspectRatio: `${p.w} / ${p.h}`,
            ["--ar" as string]: p.w / p.h,
          }}
          key={p.lg}
        >
          <img className="albox__ph" src={p.sm} alt="" aria-hidden="true" />
          <img
            className="albox__lg"
            src={p.lg}
            alt={p.alt}
            width={p.w}
            height={p.h}
            data-loaded={loaded[p.lg] ? "1" : "0"}
            onLoad={() => setLoaded((o) => ({ ...o, [p.lg]: true }))}
          />
        </div>
        <figcaption className="albox__cap">
          <span className="albox__count">
            {String(index + 1).padStart(2, "0")} / {String(n).padStart(2, "0")}
          </span>
          <span>{p.alt}</span>
        </figcaption>
      </figure>
      <button type="button" ref={closeBtn} className="albox__btn albox__close" onClick={close} aria-label={t.close}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M6 6l12 12M18 6 6 18" />
        </svg>
      </button>
      {n > 1 ? (
        <>
          <button type="button" className="albox__btn albox__nav albox__nav--prev" onClick={() => step(-1)} aria-label={t.prev}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 5l-7 7 7 7" />
            </svg>
          </button>
          <button type="button" className="albox__btn albox__nav albox__nav--next" onClick={() => step(1)} aria-label={t.next}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </>
      ) : null}
    </div>,
    document.body,
  );
}
