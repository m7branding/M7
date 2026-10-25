"use client";

import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

interface Tab {
  key: string;
  label: string;
  color: string;
  steps: { title: string; text: string }[];
}

const useIsoLayoutEffect = typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * "How the juices flow": werkwijze per dienst met tabs en een slider.
 * De slider schuift via een transform (geen native scroll), zodat pijlen,
 * klikken op een stap, swipen en de pijltjestoetsen overal hetzelfde werken.
 */
export function ProcessTabs({ title, tabs, prev, next }: { title: string; tabs: Tab[]; prev: string; next: string }) {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const [x, setX] = useState(0);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const drag = useRef<{ start: number; dx: number; moved: boolean } | null>(null);
  const suppressClick = useRef(false);
  const tab = tabs[active];
  const last = tab.steps.length - 1;

  // positie van de actieve stap; aan het eind niet verder dan nodig (geen lege ruimte rechts)
  const measure = useCallback(() => {
    const vp = viewport.current;
    const tr = track.current;
    const el = tr?.children[step] as HTMLElement | undefined;
    if (!vp || !tr || !el) return;
    const max = Math.max(0, tr.scrollWidth - vp.clientWidth);
    setX(Math.min(el.offsetLeft, max));
  }, [step]);

  useIsoLayoutEffect(measure, [measure, active]);
  useEffect(() => {
    const ro = new ResizeObserver(measure);
    if (viewport.current) ro.observe(viewport.current);
    return () => ro.disconnect();
  }, [measure]);

  const go = (i: number) => setStep(Math.max(0, Math.min(last, i)));

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    drag.current = { start: e.clientX, dx: 0, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const d = drag.current;
    if (!d) return;
    d.dx = e.clientX - d.start;
    if (Math.abs(d.dx) > 6) d.moved = true;
    if (d.moved && track.current) {
      track.current.style.transition = "none";
      track.current.style.transform = `translate3d(${-x + d.dx * 0.9}px,0,0)`;
    }
  };
  const onPointerUp = () => {
    const d = drag.current;
    drag.current = null;
    if (!d || !track.current) return;
    track.current.style.transition = "";
    track.current.style.transform = "";
    if (!d.moved) return;
    suppressClick.current = true;
    window.setTimeout(() => (suppressClick.current = false), 0);
    if (Math.abs(d.dx) > 50) go(step + (d.dx < 0 ? 1 : -1));
  };

  return (
    <div className="ptabs" style={{ ["--accent" as string]: tab.color }}>
      <div className="ptabs__head">
        <h2 className="h2" id="juices-title" data-reveal="up">
          {title}
        </h2>
        <div className="ptabs__tabs" role="tablist" data-reveal="up" style={{ ["--d" as string]: "0.15s" }}>
          {tabs.map((t, i) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`ptabs__tab${i === active ? " is-on" : ""}`}
              onClick={() => {
                setActive(i);
                setStep(0);
              }}
              style={{ ["--accent" as string]: t.color }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="ptabs__viewport"
        ref={viewport}
        role="tabpanel"
        tabIndex={0}
        aria-roledescription="carousel"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(step + 1);
          if (e.key === "ArrowLeft") go(step - 1);
        }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        onPointerLeave={() => drag.current && onPointerUp()}
      >
        <div className="ptabs__track" ref={track} key={tab.key} style={{ transform: `translate3d(${-x}px,0,0)` }}>
          {tab.steps.map((s, i) => (
            <article
              key={i}
              className={`ptabs__step${i === step ? " is-on" : ""}`}
              aria-current={i === step ? "step" : undefined}
              onClick={() => {
                if (!suppressClick.current) go(i);
              }}
            >
              <span className="ptabs__num" aria-hidden="true">
                {i + 1}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="ptabs__nav">
        <span className="ptabs__progress">
          <span style={{ transform: `scaleX(${(step + 1) / tab.steps.length})` }} />
        </span>
        <span className="ptabs__count" aria-live="polite">
          {String(step + 1).padStart(2, "0")} / {String(tab.steps.length).padStart(2, "0")}
        </span>
        <button type="button" onClick={() => go(step - 1)} disabled={step === 0} aria-label={prev}>
          <Icon name="arrowLeft" size={22} stroke={2} />
        </button>
        <button type="button" onClick={() => go(step + 1)} disabled={step === last} aria-label={next}>
          <Icon name="arrowRight" size={22} stroke={2} />
        </button>
      </div>
    </div>
  );
}
