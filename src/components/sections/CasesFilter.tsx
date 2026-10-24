"use client";

import { useEffect, useRef, useState } from "react";

interface Opt {
  slug: string;
  label: string;
  color?: string;
}

/**
 * Filtert server-gerenderde case-kaarten (data-services / data-sector)
 * zonder ze opnieuw te renderen. Leest ?dienst= en ?sector= uit de URL.
 */
export function CasesFilter({
  services,
  sectors,
  labels,
  children,
}: {
  services: Opt[];
  sectors: Opt[];
  labels: { all: string; service: string; sector: string; none: string };
  children: React.ReactNode;
}) {
  const [svc, setSvc] = useState<string | null>(null);
  const [sec, setSec] = useState<string | null>(null);
  const [count, setCount] = useState<number | null>(null);
  const grid = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    setSvc(p.get("dienst") || p.get("service"));
    setSec(p.get("sector"));
  }, []);

  useEffect(() => {
    const items = grid.current?.querySelectorAll<HTMLElement>("[data-case]") || [];
    let n = 0;
    items.forEach((el) => {
      const ok = (!svc || (el.dataset.services || "").split(" ").includes(svc)) && (!sec || el.dataset.sector === sec);
      el.hidden = !ok;
      if (ok) {
        n++;
        el.querySelectorAll("[data-reveal]").forEach((r) => r.classList.add("is-in"));
      }
    });
    setCount(n);
    const url = new URL(window.location.href);
    svc ? url.searchParams.set("dienst", svc) : url.searchParams.delete("dienst");
    sec ? url.searchParams.set("sector", sec) : url.searchParams.delete("sector");
    window.history.replaceState(window.history.state, "", url);
  }, [svc, sec]);

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
      <div ref={grid}>{children}</div>
      {count === 0 ? <p className="muted center cfilter__none">{labels.none}</p> : null}
    </div>
  );
}
