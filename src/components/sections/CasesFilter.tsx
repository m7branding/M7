"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLenis, useScroll } from "@/components/motion/SmoothScroll";
import { Icon } from "@/components/ui/Icon";
import "./CasesFilter.css";

/** Rijhoogte (px) van het masonry-raster als het "gepakt" is. */
const ROW = 4;

interface Opt {
  slug: string;
  label: string;
  color?: string;
}

/** Volgorde: die van M7 zelf (uitgelicht), nieuwste eerst of op naam van de klant. */
type Sort = "featured" | "new" | "az";
const SORTS: Sort[] = ["featured", "new", "az"];

/**
 * Filtert server-gerenderde case-kaarten (data-services / data-sector)
 * zonder ze opnieuw te renderen. Leest ?dienst=, ?sector= en ?sort= uit de URL.
 *
 * - Filterbalk: één rij (diensten als chips, sector en sortering als select) die
 *   horizontaal scrollt en onder de navigatie blijft plakken (glas zodra hij plakt).
 *   Zo staan de projecten op mobiel direct in beeld.
 * - Masonry in leesvolgorde: de kaarten staan in een grid met smalle rijen
 *   en elke kaart krijgt een rij-span naar zijn hoogte (gemeten). Zo staan de
 *   uitgelichte cases bovenaan en verspringt er niets bij "Toon meer".
 *   Zonder JS: een gewoon raster met alle cases.
 * - Eerst `pageSize` kaarten; de rest staat in de HTML (voor crawlers en
 *   zonder JS) en wordt met "Toon meer" zichtbaar. Kaarten vanaf die index
 *   krijgen op de server al `data-more` (zie cases/page.tsx), zodat er geen flits is.
 * - Sorteren verplaatst de kaarten in de DOM (data-year / data-name), zodat de
 *   tabvolgorde gelijk blijft aan wat je ziet.
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
  labels: {
    all: string;
    service: string;
    sector: string;
    none: string;
    more?: string;
    count?: string;
    reset?: string;
    sort?: string;
    sorts?: Record<Sort, string>;
  };
  /** Aantal kaarten per "pagina"; gelijk houden aan de data-more-grens op de server. */
  pageSize?: number;
  children: React.ReactNode;
}) {
  const [svc, setSvc] = useState<string | null>(null);
  const [sec, setSec] = useState<string | null>(null);
  const [sort, setSort] = useState<Sort>("featured");
  const [limit, setLimit] = useState(pageSize);
  const [count, setCount] = useState<number | null>(null);
  const [rest, setRest] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const scroll = useRef<HTMLDivElement>(null);
  const row = useRef<HTMLDivElement>(null);
  const grid = useRef<HTMLDivElement>(null);
  const ready = useRef(false);
  const lastFilter = useRef("");
  /** De kaarten in de volgorde van de server (uitgelicht). */
  const original = useRef<HTMLElement[] | null>(null);
  const lenis = useLenis();

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

  /** Het element dat nu horizontaal scrollt: de hele rij (mobiel) of alleen de chips (breder). */
  const scroller = useCallback(() => [row.current, scroll.current].find((e) => e && e.scrollWidth > e.clientWidth + 1) ?? null, []);

  /** Randen van de rij: vervagen (en op desktop een pijl) waar er nog meer staat. */
  const edges = useCallback(() => {
    const b = bar.current;
    if (!b) return;
    const sc = scroller();
    const prev = !!sc && sc.scrollLeft > 4;
    const next = !!sc && sc.scrollLeft + sc.clientWidth < sc.scrollWidth - 4;
    b.toggleAttribute("data-prev", prev);
    b.toggleAttribute("data-next", next);
  }, [scroller]);

  /** Glas zodra de balk onder de navigatie plakt. */
  const stick = useCallback(() => {
    const b = bar.current;
    if (!b) return;
    const top = parseFloat(getComputedStyle(b).top) || 0;
    b.toggleAttribute("data-stuck", window.scrollY > 0 && b.getBoundingClientRect().top <= top + 1);
  }, []);
  useScroll(stick);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setSvc(p.get("dienst") || p.get("service"));
    setSec(p.get("sector"));
    const s = p.get("sort") as Sort | null;
    if (s && SORTS.includes(s)) setSort(s);
    stick();
  }, [stick]);

  // Bij een ander filter weer bij de eerste pagina beginnen
  useEffect(() => {
    if (ready.current) setLimit(pageSize);
  }, [svc, sec, sort, pageSize]);

  useEffect(() => {
    const list = grid.current?.querySelector<HTMLElement>(".masonry--cases");
    if (!list) return;
    if (!original.current) original.current = Array.from(list.querySelectorAll<HTMLElement>(":scope > [data-case]"));
    const base = original.current;
    const year = (el: HTMLElement) => Number(el.dataset.year) || 0;
    const ordered =
      sort === "new"
        ? [...base].sort((a, b) => year(b) - year(a))
        : sort === "az"
          ? [...base].sort((a, b) => (a.dataset.name || "").localeCompare(b.dataset.name || "", undefined, { sensitivity: "base" }))
          : base;
    // alleen verplaatsen als de volgorde echt anders is (React raakt deze kinderen verder niet aan)
    if (ordered.some((el, i) => list.children[i] !== el)) ordered.forEach((el) => list.appendChild(el));

    // Na een filterwissel direct tonen; via "Toon meer" schuiven ze rustig in beeld (RevealObserver)
    const filter = `${svc}|${sec}|${sort}`;
    const refilter = filter !== lastFilter.current;
    lastFilter.current = filter;
    let n = 0;
    ordered.forEach((el) => {
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
    sort !== "featured" ? url.searchParams.set("sort", sort) : url.searchParams.delete("sort");
    window.history.replaceState(window.history.state, "", url);
  }, [svc, sec, sort, limit, pack]);

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

  // Randen van de scrollende rij bijhouden
  useEffect(() => {
    const els = [row.current, scroll.current].filter((e): e is HTMLDivElement => !!e);
    const ro = new ResizeObserver(edges);
    els.forEach((e) => {
      e.addEventListener("scroll", edges, { passive: true });
      ro.observe(e);
    });
    document.fonts?.ready.then(edges).catch(() => {});
    edges();
    return () => {
      els.forEach((e) => e.removeEventListener("scroll", edges));
      ro.disconnect();
    };
  }, [edges]);

  // De gekozen dienst in beeld schuiven binnen de rij (bv. na ?dienst= in de URL)
  useEffect(() => {
    const sc = scroller();
    const on = row.current?.querySelector<HTMLElement>(".chip.is-on");
    if (!sc || !on) return;
    const a = on.getBoundingClientRect();
    const b = sc.getBoundingClientRect();
    const pad = 28;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (a.left < b.left + pad || a.right > b.right - pad) {
      sc.scrollTo({
        left: sc.scrollLeft + a.left - b.left - pad,
        behavior: reduce ? "auto" : "smooth",
      });
    }
  }, [svc, scroller]);

  /** Plakt de balk al (je zit verder in de lijst)? Dan terug naar het begin van de resultaten. */
  const toResults = () => {
    const b = bar.current;
    const el = root.current;
    if (!b || !el || !b.hasAttribute("data-stuck")) return;
    const hdr = document.querySelector<HTMLElement>(".hdr");
    const h = hdr ? hdr.getBoundingClientRect().height : 0;
    const y = Math.max(0, window.scrollY + el.getBoundingClientRect().top - h);
    if (lenis) lenis.scrollTo(y, { duration: 0.9 });
    else
      window.scrollTo({
        top: y,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      });
  };
  const pickSvc = (v: string | null) => {
    toResults();
    setSvc(v);
  };

  const nudge = (dir: 1 | -1) => {
    const sc = scroller();
    if (sc) sc.scrollBy({ left: dir * sc.clientWidth * 0.7, behavior: "smooth" });
  };

  const more = labels.more ?? "Meer";
  const sorts = labels.sorts ?? {
    featured: "Featured",
    new: "Newest",
    az: "A–Z",
  };
  const active = (svc ? 1 : 0) + (sec ? 1 : 0);

  return (
    <div className="cfilter" ref={root}>
      <div className="cfilter__bar" ref={bar}>
        <div className="container cfilter__in">
          <div className="cfilter__scroll" ref={scroll}>
            <div className="cfilter__track">
              <div className="cfilter__row" ref={row} role="group" aria-label={labels.service}>
                <button type="button" className={`chip${!svc ? " is-on" : ""}`} aria-pressed={!svc} onClick={() => pickSvc(null)}>
                  {labels.all}
                </button>
                {services.map((o) => (
                  <button
                    key={o.slug}
                    type="button"
                    className={`chip${svc === o.slug ? " is-on" : ""}`}
                    aria-pressed={svc === o.slug}
                    style={{ ["--accent" as string]: o.color }}
                    onClick={() => pickSvc(svc === o.slug ? null : o.slug)}
                  >
                    <span className="chip__dot" />
                    {o.label}
                  </button>
                ))}
              </div>
              <button type="button" className="cfilter__arrow cfilter__arrow--prev" tabIndex={-1} aria-hidden="true" onClick={() => nudge(-1)}>
                <Icon name="arrowLeft" size={16} stroke={2.2} />
              </button>
              <button type="button" className="cfilter__arrow cfilter__arrow--next" tabIndex={-1} aria-hidden="true" onClick={() => nudge(1)}>
                <Icon name="arrowRight" size={16} stroke={2.2} />
              </button>
            </div>
            <div className="cfilter__opts">
              <label className={`cfilter__select${sec ? " is-set" : ""}`}>
                <span className="visually-hidden">{labels.sector}</span>
                <select
                  value={sec || ""}
                  onChange={(e) => {
                    toResults();
                    setSec(e.target.value || null);
                  }}
                >
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
              <label className="cfilter__select cfilter__select--sort">
                <span className="visually-hidden">{labels.sort ?? "Sort"}</span>
                <svg className="cfilter__sorticon" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path
                    d="M4 2.5v9M1.8 9.3 4 11.5l2.2-2.2M10 11.5v-9M7.8 4.7 10 2.5l2.2 2.2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <select
                  value={sort}
                  onChange={(e) => {
                    toResults();
                    setSort(e.target.value as Sort);
                  }}
                >
                  {SORTS.map((s) => (
                    <option key={s} value={s}>
                      {sorts[s]}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="container cfilter__body">
        {active ? (
          <p className="cfilter__status" aria-live="polite">
            <span>
              {count ?? 0} {labels.count ?? "cases"}
            </span>
            <button
              type="button"
              className="link-dash"
              onClick={() => {
                toResults();
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
    </div>
  );
}
