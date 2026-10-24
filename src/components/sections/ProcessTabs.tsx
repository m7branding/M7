"use client";

import { useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";

interface Tab {
  key: string;
  label: string;
  color: string;
  steps: { title: string; text: string }[];
}

/** "How the juices flow": werkwijze per dienst met tabs en een horizontale slider. */
export function ProcessTabs({ title, tabs, prev, next }: { title: string; tabs: Tab[]; prev: string; next: string }) {
  const [active, setActive] = useState(0);
  const [step, setStep] = useState(0);
  const track = useRef<HTMLDivElement>(null);
  const tab = tabs[active];

  const go = (i: number) => {
    const n = Math.max(0, Math.min(tab.steps.length - 1, i));
    setStep(n);
    const el = track.current?.children[n] as HTMLElement | undefined;
    if (el && track.current) track.current.scrollTo({ left: el.offsetLeft - track.current.offsetLeft, behavior: "smooth" });
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
                track.current?.scrollTo({ left: 0, behavior: "smooth" });
              }}
              style={{ ["--accent" as string]: t.color }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <div
        className="ptabs__track"
        ref={track}
        role="tabpanel"
        key={tab.key}
        onScroll={(e) => {
          const el = e.currentTarget;
          const w = (el.children[0] as HTMLElement)?.offsetWidth || 1;
          setStep(Math.round(el.scrollLeft / w));
        }}
      >
        {tab.steps.map((s, i) => (
          <article key={i} className={`ptabs__step${i === step ? " is-on" : ""}`} style={{ ["--i" as string]: i }} onClick={() => go(i)}>
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

      <div className="ptabs__nav">
        <span className="ptabs__progress">
          <span style={{ transform: `scaleX(${(step + 1) / tab.steps.length})` }} />
        </span>
        <button type="button" onClick={() => go(step - 1)} disabled={step === 0} aria-label={prev}>
          <Icon name="arrowLeft" size={26} stroke={2} />
        </button>
        <button type="button" onClick={() => go(step + 1)} disabled={step === tab.steps.length - 1} aria-label={next}>
          <Icon name="arrowRight" size={26} stroke={2} />
        </button>
      </div>
    </div>
  );
}
