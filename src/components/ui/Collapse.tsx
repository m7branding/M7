"use client";

import { useState } from "react";

/** Inklapbare tekst (SEO-tekst): volledige inhoud staat in de DOM, dus crawlbaar. */
export function Collapse({ children, more, less, height = 420 }: { children: React.ReactNode; more: string; less: string; height?: number }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`collapse${open ? " is-open" : ""}`} style={{ ["--ch" as string]: `${height}px` }}>
      <div className="collapse__body">{children}</div>
      <button type="button" className="link-dash collapse__btn" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        {open ? less : more}
      </button>
    </div>
  );
}
