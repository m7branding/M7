"use client";

import { Children, useState } from "react";

/**
 * Lange lijst chips (toepassingen) netjes inkorten: de eerste `max` staan er, de rest
 * klapt open met "+N". Alles staat wel in de HTML (links blijven vindbaar).
 */
export function SpecChips({ max, children, more, less }: { max: number; children: React.ReactNode; more: string; less: string }) {
  const [open, setOpen] = useState(false);
  const items = Children.toArray(children);
  const hidden = items.length - max;
  if (hidden <= 1) return <ul className="cx-chips">{items.map((it, i) => <li key={i}>{it}</li>)}</ul>;
  return (
    <ul className="cx-chips" data-open={open ? "1" : undefined}>
      {items.map((it, i) => (
        <li key={i} className={i >= max ? "is-extra" : undefined}>
          {it}
        </li>
      ))}
      <li className="cx-chips__toggle">
        <button type="button" className="cx-chip cx-chip--more" aria-expanded={open} onClick={() => setOpen((o) => !o)} aria-label={open ? less : `${more} (${hidden})`}>
          {open ? "−" : `+${hidden}`}
        </button>
      </li>
    </ul>
  );
}
