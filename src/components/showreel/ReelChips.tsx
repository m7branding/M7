"use client";

import { useEffect, useRef, useState } from "react";
import type { Reel } from "./reels";
import { ShowreelPlayer, type ShowreelLabels } from "./ShowreelPlayer";

/**
 * De "hoofdstukken" van de showreel (Websites & platforms, Apps, …) als kleine glazen knoppen
 * onder de cases-hero. Een klik opent die reel schermvullend in een <dialog> (focus, Esc en
 * terugkeer van de focus doet de browser zelf). De speler komt pas in de DOM als hij open is,
 * dus er laadt niets vooraf.
 */
export function ReelChips({
  reels,
  labels,
  title,
  close,
}: {
  reels: Reel[];
  labels: ShowreelLabels;
  /** Label van de groep, bv. "Showreels". */
  title: string;
  close: string;
}) {
  const ref = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open !== null && !d.open) d.showModal();
    if (open === null && d.open) d.close();
    // Lenis mag de pagina niet scrollen zolang de reel open is
    const l = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    if (open !== null) l?.stop();
    else l?.start();
  }, [open]);

  if (!reels.length) return null;
  const reel = open !== null ? reels[open] : null;

  return (
    <div className="rchips" role="group" aria-label={title}>
      <span className="rchips__k" aria-hidden="true">
        {title}
      </span>
      <ul className="rchips__list">
        {reels.map((r, i) => (
          <li key={r.slug}>
            <button type="button" className="rchips__chip" onClick={() => setOpen(i)} aria-haspopup="dialog">
              <svg width="9" height="10" viewBox="0 0 9 10" aria-hidden="true">
                <path d="M1 1.2v7.6L8 5 1 1.2Z" fill="currentColor" />
              </svg>
              <span className="visually-hidden">{labels.show}: </span>
              {r.title}
            </button>
          </li>
        ))}
      </ul>
      <dialog
        ref={ref}
        className="rdlg"
        aria-label={reel ? `${labels.media}: ${reel.title}` : labels.media}
        onClose={() => setOpen(null)}
        onClick={(e) => {
          // klik op het donkere vlak rond de speler sluit
          if (e.target === e.currentTarget) setOpen(null);
        }}
      >
        {reel ? (
          <div className="rdlg__box">
            <ShowreelPlayer key={reel.slug} reels={[reel]} labels={labels} ui="caption" className="rdlg__player" priority />
            <p className="rdlg__title">{reel.title}</p>
            <button type="button" className="rdlg__close" onClick={() => setOpen(null)} aria-label={close}>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 2l10 10M12 2 2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        ) : null}
      </dialog>
    </div>
  );
}
