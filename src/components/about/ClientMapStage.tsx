"use client";

import { useCallback, useEffect, useId, useRef, useState, type CSSProperties, type PointerEvent } from "react";
import st from "./ClientMap.module.css";

export type MapPin = {
  id: string;
  /** Plaats-id's achter deze stip (een cluster heeft er meer). */
  members: string[];
  /** viewBox-coördinaten */
  x: number;
  y: number;
  title: string;
  sub: string;
  hq?: boolean;
  /** Nederlandse plaats (licht op via de legenda-chip 'Nederland'). */
  nl?: boolean;
  /** Kleinere plaats: kleinere stip, geen ping. */
  minor?: boolean;
  /** Staat voor alle plaatsen in de close-up (HQ op de wereldkaart). */
  proxy?: boolean;
  /** Vertraging van de reveal (s), loopt op met de afstand tot Nistelrode. */
  delay: number;
  /** Vertraging van de ping-ring (s). */
  ping: number;
};
export type MapArc = { id: string; d: string; x1: number; y1: number; x2: number; y2: number };
export type MapHeat = { x: number; y: number; r: number; a?: number };
export type StageMap = {
  key: "world" | "nl";
  src: string;
  w: number;
  h: number;
  pins: MapPin[];
  arcs: MapArc[];
  heat: MapHeat[];
  hq: { x: number; y: number };
  hqLabel: string;
  /** Waar het HQ-label staat t.o.v. de stip: linksboven of rechtsonder (vrij van andere stippen). */
  hqSide: "ul" | "dr";
};
export type LegendItem = { id: string; label: string; target: string; count?: number; hidden?: string };
export type LegendGroup = { key: string; title: string; items: LegendItem[] };

/** Wat is er 'aan': een plaats (via kaart of legenda) of de groep Nederland. */
type Active = { place: string; pin?: string } | { group: "nl" } | null;

const HIT = 20; // px: hoe dichtbij de cursor bij een stip moet zijn

export function ClientMapStage({
  world,
  nl,
  legend,
  legendLabel,
  worldHead,
  nlHead,
}: {
  world: StageMap;
  nl: StageMap;
  legend: LegendGroup[];
  legendLabel: string;
  worldHead: { kicker: string; title: string; meta: string };
  nlHead: { kicker: string; title: string; meta: string };
}) {
  const [active, setActive] = useState<Active>(null);

  const allPins = [...world.pins, ...nl.pins];
  const activePin = active && "place" in active && active.pin ? allPins.find((p) => p.id === active.pin) : undefined;

  const isOn = (p: MapPin) => {
    if (!active) return false;
    if ("group" in active) return !!p.nl;
    if (activePin) {
      if (activePin.id === p.id) return true;
      // HQ op de wereldkaart staat voor de hele close-up: die stippen lichten mee op
      return !!activePin.proxy && !p.proxy && activePin.members.includes(p.members[0]);
    }
    return !p.proxy && p.members.includes(active.place);
  };
  const tipFor = (m: StageMap): MapPin | null => {
    if (!active || "group" in active) return null;
    if (activePin) return m.pins.includes(activePin) ? activePin : null;
    return m.pins.find(isOn) ?? null;
  };
  const legendOn = (item: LegendItem) => {
    if (!active) return false;
    if ("group" in active) return item.target === "nl";
    if (activePin) return activePin.proxy ? false : activePin.members.includes(item.target);
    return active.place === item.target;
  };

  const hover = useCallback((pin: MapPin | null) => setActive(pin ? { place: pin.members[0], pin: pin.id } : null), []);

  return (
    <div className={st.grid}>
      <figure className={`${st.card} ${st.cardWorld}`}>
        <div className={st.cardHead}>
          <strong>
            <em>{worldHead.kicker}</em> {worldHead.title}
          </strong>
          <span>{worldHead.meta}</span>
        </div>
        <DotMap map={world} isOn={isOn} tip={tipFor(world)} onHover={hover} />
        <figcaption className={st.legend}>
          <span className="visually-hidden">{legendLabel}</span>
          {legend.map((g) => (
            <div key={g.key} className={st.group} data-region={g.key}>
              <h3 className={st.groupTitle}>{g.title}</h3>
              <ul className={st.chips}>
                {g.items.map((it) => (
                  <li
                    key={it.id}
                    className={`${st.chip}${legendOn(it) ? ` ${st.chipOn}` : ""}`}
                    tabIndex={0}
                    onMouseEnter={() => setActive(it.target === "nl" ? { group: "nl" } : { place: it.target })}
                    onMouseLeave={() => setActive(null)}
                    onFocus={() => setActive(it.target === "nl" ? { group: "nl" } : { place: it.target })}
                    onBlur={() => setActive(null)}
                  >
                    {it.label}
                    {it.count ? <small>{it.count}</small> : null}
                    {it.hidden ? <span className="visually-hidden">{`: ${it.hidden}`}</span> : null}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </figcaption>
      </figure>

      <figure className={`${st.card} ${st.cardNl}`}>
        <div className={st.cardHead}>
          <strong>
            <em>{nlHead.kicker}</em> {nlHead.title}
          </strong>
          <span>{nlHead.meta}</span>
        </div>
        <DotMap map={nl} isOn={isOn} tip={tipFor(nl)} onHover={hover} />
      </figure>
    </div>
  );
}

function DotMap({
  map,
  isOn,
  tip,
  onHover,
}: {
  map: StageMap;
  isOn: (p: MapPin) => boolean;
  tip: MapPin | null;
  onHover: (p: MapPin | null) => void;
}) {
  const stage = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");
  const [inView, setInView] = useState(false);
  const [align, setAlign] = useState<"start" | "center" | "end">("center");
  const last = useRef<MapPin | null>(null);
  const touch = useRef(false);
  if (tip) last.current = tip;
  const shown = tip ?? last.current;

  // reveal per kaart (op mobiel staan ze onder elkaar)
  useEffect(() => {
    const el = stage.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // tooltip binnen het zichtbare deel houden (op mobiel is de wereldkaart bijgesneden)
  useEffect(() => {
    if (!tip || !stage.current || !canvas.current) return;
    const s = stage.current.getBoundingClientRect();
    const c = canvas.current.getBoundingClientRect();
    const rel = (c.left + (tip.x / map.w) * c.width - s.left) / s.width;
    setAlign(rel < 0.16 ? "start" : rel > 0.84 ? "end" : "center");
  }, [tip, map.w]);

  // touch: tooltip blijft staan tot je ergens anders tikt
  useEffect(() => {
    if (!tip || !touch.current) return;
    const off = (e: Event) => {
      if (!stage.current?.contains(e.target as Node)) onHover(null);
    };
    document.addEventListener("pointerdown", off);
    return () => document.removeEventListener("pointerdown", off);
  }, [tip, onHover]);

  const pick = (e: PointerEvent<HTMLDivElement>) => {
    touch.current = e.pointerType !== "mouse";
    const r = canvas.current?.getBoundingClientRect();
    if (!r) return;
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    let best: MapPin | null = null;
    let bd = HIT * HIT;
    for (const p of map.pins) {
      const dx = (p.x / map.w) * r.width - px;
      const dy = (p.y / map.h) * r.height - py;
      const d = dx * dx + dy * dy;
      if (d < bd) {
        bd = d;
        best = p;
      }
    }
    onHover(best);
  };

  const pct = (v: number, of: number) => `${Math.round((v / of) * 10000) / 100}%`;
  const hq = { x: pct(map.hq.x, map.w), y: pct(map.hq.y, map.h) };
  const lit = new Set(map.pins.filter(isOn).map((p) => p.id));

  return (
    <div ref={stage} className={st.stage} data-map={map.key} data-in={inView ? "1" : "0"} aria-hidden="true">
      <div
        ref={canvas}
        className={st.canvas}
        style={
          {
            aspectRatio: `${map.w} / ${map.h}`,
            "--hx": hq.x,
            "--hy": hq.y,
            "--ar": String(Math.round((map.w / map.h) * 1000) / 1000),
          } as CSSProperties
        }
        onPointerMove={pick}
        onPointerDown={pick}
        onPointerLeave={(e) => e.pointerType === "mouse" && onHover(null)}
      >
        <div className={st.land}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={st.dots} src={map.src} width={map.w} height={map.h} alt="" loading="lazy" decoding="async" draggable={false} />
          <div className={st.heat} style={{ WebkitMaskImage: `url(${map.src})`, maskImage: `url(${map.src})` }}>
            <svg viewBox={`0 0 ${map.w} ${map.h}`} preserveAspectRatio="none">
              <defs>
                <radialGradient id={`${uid}h`}>
                  <stop offset="0" stopColor="#7dffd8" stopOpacity="1" />
                  <stop offset="0.35" stopColor="#2bffc0" stopOpacity="0.55" />
                  <stop offset="1" stopColor="#3affff" stopOpacity="0" />
                </radialGradient>
              </defs>
              {map.heat.map((c, i) => (
                <circle key={i} cx={c.x} cy={c.y} r={c.r} fill={`url(#${uid}h)`} opacity={c.a ?? 1} />
              ))}
            </svg>
          </div>
          {map.arcs.length ? (
            <svg className={st.arcs} viewBox={`0 0 ${map.w} ${map.h}`} preserveAspectRatio="none">
              <defs>
                {map.arcs.map((a) => (
                  <linearGradient key={a.id} id={`${uid}${a.id}`} gradientUnits="userSpaceOnUse" x1={a.x1} y1={a.y1} x2={a.x2} y2={a.y2}>
                    <stop offset="0" stopColor="#3affff" stopOpacity="0.06" />
                    <stop offset="1" stopColor="#3affff" stopOpacity="0.55" />
                  </linearGradient>
                ))}
              </defs>
              {map.arcs.map((a) => (
                <path
                  key={a.id}
                  className={lit.has(a.id) ? st.arcOn : undefined}
                  d={a.d}
                  stroke={`url(#${uid}${a.id})`}
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              ))}
            </svg>
          ) : null}
        </div>

        {map.pins.map((p) => (
          <span
            key={p.id}
            className={`${st.pin}${p.hq ? ` ${st.pinHq}` : ""}${p.nl ? ` ${st.pinNl}` : ""}${p.minor ? ` ${st.pinMinor}` : ""}${lit.has(p.id) ? ` ${st.pinOn}` : ""}`}
            style={{ left: pct(p.x, map.w), top: pct(p.y, map.h), ["--d" as string]: `${p.delay}s`, ["--p" as string]: `${p.ping}s` }}
          />
        ))}

        <span className={st.hqLabel} data-side={map.hqSide} style={{ left: hq.x, top: hq.y }}>
          <span>{map.hqLabel}</span>
          <em>HQ</em>
        </span>

        <div
          className={st.tip}
          data-show={tip ? "1" : "0"}
          data-align={align}
          data-below={shown && shown.y / map.h < 0.22 ? "1" : "0"}
          style={shown ? { left: pct(shown.x, map.w), top: pct(shown.y, map.h) } : undefined}
        >
          {shown ? (
            <>
              <strong>{shown.title}</strong>
              <span>{shown.sub}</span>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
}
