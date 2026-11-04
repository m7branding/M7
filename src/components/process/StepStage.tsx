"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

export interface StageLabels {
  step: string;
  of: string;
  steps: string;
  prev: string;
  next: string;
  upNext: string;
  restart: string;
}

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Het werkproces van één dienst, groot en rustig: een tijdlijn met
 * genummerde stappen bovenin, daaronder de actieve stap (crossfade).
 * Pijltjestoetsen, vorige/volgende en swipen (touch) werken overal.
 * Op mobiel wordt het een verticale tijdlijn met alle stappen onder elkaar.
 * Alle stappen staan altijd in de HTML.
 */
export function StepStage({ id, steps, labels }: { id: string; steps: { title: string; text: string }[]; labels: StageLabels }) {
  const [i, setI] = useState(0);
  const n = steps.length;
  const rail = useRef<(HTMLButtonElement | null)[]>([]);
  const swipe = useRef<{ x: number; y: number } | null>(null);

  const go = (k: number, focus = false) => {
    const next = Math.max(0, Math.min(n - 1, k));
    setI(next);
    if (focus) rail.current[next]?.focus();
  };

  const onRailKey = (e: React.KeyboardEvent, k: number) => {
    const map: Record<string, number> = {
      ArrowRight: k + 1,
      ArrowLeft: k - 1,
      Home: 0,
      End: n - 1,
    };
    if (e.key in map) {
      e.preventDefault();
      e.stopPropagation();
      go(map[e.key], true);
    }
  };

  return (
    <div
      className="pw-stage"
      style={{
        ["--n" as string]: n,
        ["--p" as string]: n > 1 ? i / (n - 1) : 1,
      }}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(i + 1);
        if (e.key === "ArrowLeft") go(i - 1);
      }}
    >
      <div className="pw-rail" role="group" aria-label={labels.steps}>
        <span className="pw-rail__line" aria-hidden="true">
          <span />
        </span>
        {steps.map((s, k) => (
          <button
            key={k}
            ref={(el) => {
              rail.current[k] = el;
            }}
            type="button"
            className={`pw-rail__btn${k === i ? " is-on" : ""}${k < i ? " is-done" : ""}`}
            aria-current={k === i ? "step" : undefined}
            aria-controls={`${id}-s${k}`}
            tabIndex={k === i ? 0 : -1}
            onClick={() => go(k)}
            onKeyDown={(e) => onRailKey(e, k)}
          >
            <span className="pw-rail__node">{k < i ? <Icon name="check" size={16} stroke={2.6} /> : pad(k + 1)}</span>
            <span className="pw-rail__label">{s.title}</span>
          </button>
        ))}
      </div>

      <ol
        className="pw-steps"
        onPointerDown={(e) => {
          if (e.pointerType !== "mouse") swipe.current = { x: e.clientX, y: e.clientY };
        }}
        onPointerUp={(e) => {
          const s = swipe.current;
          swipe.current = null;
          if (!s) return;
          const dx = e.clientX - s.x;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(e.clientY - s.y)) go(i + (dx < 0 ? 1 : -1));
        }}
        onPointerCancel={() => (swipe.current = null)}
      >
        {steps.map((s, k) => (
          <li key={k} id={`${id}-s${k}`} className={`pw-step${k === i ? " is-on" : k < i ? " is-before" : ""}`}>
            <span className="pw-step__num" aria-hidden="true">
              {pad(k + 1)}
            </span>
            <div className="pw-step__body">
              <p className="pw-step__meta">
                {labels.step} {k + 1} {labels.of} {n}
              </p>
              <h3 className="pw-step__title">{s.title}</h3>
              <p className="pw-step__text">{s.text}</p>
              {k < n - 1 ? (
                <button type="button" className="pw-step__next" tabIndex={k === i ? 0 : -1} onClick={() => go(k + 1)}>
                  <span>{labels.upNext}</span>
                  {steps[k + 1].title}
                  <Icon name="arrowRight" size={16} stroke={2} />
                </button>
              ) : (
                <button type="button" className="pw-step__next" tabIndex={k === i ? 0 : -1} onClick={() => go(0, true)}>
                  <Icon name="arrowLeft" size={16} stroke={2} />
                  {labels.restart}
                </button>
              )}
            </div>
          </li>
        ))}
      </ol>

      <div className="pw-stage__nav">
        <span className="pw-stage__count" aria-hidden="true">
          <b>{pad(i + 1)}</b> / {pad(n)}
        </span>
        <button type="button" onClick={() => go(i - 1)} disabled={i === 0} aria-label={labels.prev}>
          <Icon name="arrowLeft" size={20} stroke={2} />
        </button>
        <button type="button" onClick={() => go(i + 1)} disabled={i === n - 1} aria-label={labels.next}>
          <Icon name="arrowRight" size={20} stroke={2} />
        </button>
      </div>
      <p className="visually-hidden" aria-live="polite">
        {labels.step} {i + 1} {labels.of} {n}: {steps[i].title}
      </p>
    </div>
  );
}
