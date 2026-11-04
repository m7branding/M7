"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import "./CasesFilter.css";

/** Rijhoogte (px) van het masonry-raster als het "gepakt" is. */
const ROW = 4;

interface Opt {
  slug: string;
  label: string;
  color?: string;
}

/**
 * Filtert server-gerenderde case-kaarten (data-services / data-sector)
 * zonder ze opnieuw te renderen. Leest ?dienst= en ?sector= uit de URL.
 *
 * - Masonry in leesvolgorde: de kaarten staan in een grid met smalle rijen
 *   en elke kaart krijgt een rij-span naar zijn hoogte (gemeten). Zo staan de
 *   uitgelichte cases bovenaan en verspringt er niets bij "Toon meer".
 *   Zonder JS: een gewoon raster met alle cases.
 * - Eerst `pageSize` kaarten; de rest staat in de HTML (voor crawlers en
 *   zonder JS) en wordt met "Toon meer" zichtbaar. Kaarten vanaf die index
 *   krijgen op de server al `data-more` (zie cases/page.tsx), zodat er geen flits is.
 */
export function CasesFilter({
  services,
  sectors,
  labels,
  pageSize = 12,
  children,
}: {
  services: Opt[];
  sectors: Opt[];
  labels: { all: string; service: string; sector: string; none: string; more?: string; count?: string; reset?: string };
  /** Aantal kaarten per "pagina"; gelijk houden aan de data-more-grens op de server. */
  pageSize?: number;
  children: React.ReactNode;
}) {
  const [svc, setSvc] = useState<string | null>(null);
  const [sec, setSec] = useState<string | null>(null);
  const [limit, setLimit] = useState(pageSize);
  const [count, setCount] = useState<number | null>(null);
  const [rest, setRest] = useState(0);
  const grid = useRef<HTMLDivElement>(null);
  const ready = useRef(false);
  const lastFilter = useRef("");

  /** Rij-span per zichtbare kaart, naar de gemeten hoogte. */
  const pack = useCallback(() => {
    const list = grid.current?.querySelector<HTMLElement>(".masonry--cases");
    if (!list) return;
    const cs = getComputedStyle(list);
    if (cs.display !== "grid") return;
    const unit = ROW; // gelijk aan grid-auto-rows van .is-packed (CasesFilter.css)
    const gap = parseFloat(cs.columnGap) || 0;
    list.querySelectorAll<HTMLElement>(":scope > [data-case]").forEach((el) => {
      if (el.hidden || el.dataset.more !== undefined) return;
      const card = el.firstElementChild as HTMLElement | null;
      const h = (card ?? el).getBoundingClientRect().height;
      el.style.gridRowEnd = `span ${Math.max(1, Math.ceil((h + gap) / unit))}`;
    });
    list.classList.add("is-packed");
  }, []);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setSvc(p.get("dienst") || p.get("service"));
    setSec(p.get("sector"));
  }, []);

  // Bij een ander filter weer bij de eerste pagina beginnen
  useEffect(() => {
    if (ready.current) setLimit(pageSize);
  }, [svc, sec, pageSize]);

  useEffect(() => {
    const items = grid.current?.querySelectorAll<HTMLElement>("[data-case]") || [];
    // Na een filterwissel direct tonen; via "Toon meer" schuiven ze rustig in beeld (RevealObserver)
    const filter = `${svc}|${sec}`;
    const refilter = filter !== lastFilter.current;
    lastFilter.current = filter;
    let n = 0;
    items.forEach((el) => {
      const ok = (!svc || (el.dataset.services || "").split(" ").includes(svc)) && (!sec || el.dataset.sector === sec);
      el.hidden = !ok;
      // de gekozen dienst zichtbaar op de kaart (ook als het de derde of vierde dienst is)
      el.querySelectorAll<HTMLElement>("[data-svc]").forEach((t) => t.classList.toggle("is-match", !!svc && t.dataset.svc === svc));
      if (ok) {
        if (n < limit) {
          delete el.dataset.more;
          if (refilter) el.querySelectorAll("[data-reveal]").forEach((r) => r.classList.add("is-in"));
        } else {
          el.dataset.more = "";
        }
        n++;
      }
    });
    setCount(n);
    setRest(Math.max(0, n - limit));
    pack();
    if (!ready.current) {
      ready.current = true;
      return;
    }
    const url = new URL(window.location.href);
    svc ? url.searchParams.set("dienst", svc) : url.searchParams.delete("dienst");
    sec ? url.searchParams.set("sector", sec) : url.searchParams.delete("sector");
    window.history.replaceState(window.history.state, "", url);
  }, [svc, sec, limit, pack]);

  // Opnieuw meten bij een andere breedte en zodra het lettertype geladen is
  useEffect(() => {
    const el = grid.current;
    if (!el) return;
    let raf = 0;
    const later = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(pack);
    };
    const ro = new ResizeObserver(later);
    ro.observe(el);
    document.fonts?.ready.then(later).catch(() => {});
    return () => {
      ro.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [pack]);

  const more = labels.more ?? "Meer";

  return (
    <div className="cfilter">
      <div className="cfilter__bar">
        <div className="cfilter__row" role="group" aria-label={labels.service}>
          <button type="button" className={`chip${!svc ? " is-on" : ""}`} onClick={() => setSvc(null)}>
            {labels.all}
          </button>
          {services.map((o) => (
            <button
              key={o.slug}
              type="button"
              className={`chip${svc === o.slug ? " is-on" : ""}`}
              style={{ ["--accent" as string]: o.color }}
              onClick={() => setSvc(svc === o.slug ? null : o.slug)}
            >
              <span className="chip__dot" />
              {o.label}
            </button>
          ))}
        </div>
        <label className="cfilter__select">
          <span className="visually-hidden">{labels.sector}</span>
          <select value={sec || ""} onChange={(e) => setSec(e.target.value || null)}>
            <option value="">
              {labels.sector}: {labels.all}
            </option>
            {sectors.map((o) => (
              <option key={o.slug} value={o.slug}>
                {o.label}
              </option>
            ))}
          </select>
        </label>
      </div>
      {svc || sec ? (
        <p className="cfilter__status" aria-live="polite">
          <span>
            {count ?? 0} {labels.count ?? "cases"}
          </span>
          <button
            type="button"
            className="link-dash"
            onClick={() => {
              setSvc(null);
              setSec(null);
            }}
          >
            {labels.reset ?? "Reset"}
          </button>
        </p>
      ) : null}
      <div ref={grid} className="cfilter__grid">
        {children}
      </div>
      {count === 0 ? <p className="muted center cfilter__none">{labels.none}</p> : null}
      {rest > 0 ? (
        <div className="cfilter__more">
          <button type="button" className="cfilter__morebtn" onClick={() => setLimit((l) => l + pageSize)}>
            <span>{more}</span>
            <span className="count-badge">{rest}</span>
          </button>
        </div>
      ) : null}
    </div>
  );
}
