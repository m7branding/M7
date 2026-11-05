"use client";

import { useId, useState } from "react";

/**
 * Specificatierij die op mobiel ingeklapt begint (toepassingen, tools): alleen het label
 * met het aantal, de inhoud klapt open. Breder staat alles gewoon open; de knop is daar
 * verborgen (display: none, dus ook niet voor schermlezers) en het label staat er als tekst.
 */
export function SpecFold({ label, count, children }: { label: string; count: number; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const id = useId();
  return (
    <div className="cx-specs__row is-wide cx-fold" data-open={open ? "" : undefined}>
      <dt>
        <span className="cx-fold__k">{label}</span>
        <button type="button" className="cx-fold__btn" aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
          <span>{label}</span>
          <span className="cx-fold__n">{count}</span>
          <svg width="12" height="8" viewBox="0 0 12 8" aria-hidden="true">
            <path d="M1.5 1.75 6 6.25l4.5-4.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </dt>
      <dd id={id}>{children}</dd>
    </div>
  );
}
