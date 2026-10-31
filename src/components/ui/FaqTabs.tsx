"use client";

import { useRef, useState } from "react";

export interface FaqTab {
  id: string;
  name: string;
  count: number;
  intro?: string;
  content: React.ReactNode;
}

/**
 * FAQ in tabs (per doelgroep). Alle panelen staan in de HTML (crawlbaar voor zoekmachines en AI),
 * alleen het actieve paneel is zichtbaar. Pijltjestoetsen wisselen van tab.
 */
export function FaqTabs({ tabs, label }: { tabs: FaqTab[]; label: string }) {
  const [active, setActive] = useState(0);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  const go = (i: number) => {
    const n = (i + tabs.length) % tabs.length;
    setActive(n);
    refs.current[n]?.focus();
  };

  return (
    <div className="ftabs">
      <div className="ftabs__bar" role="tablist" aria-label={label}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            ref={(el) => {
              refs.current[i] = el;
            }}
            type="button"
            role="tab"
            id={`ftab-${t.id}`}
            aria-selected={i === active}
            aria-controls={`fpanel-${t.id}`}
            tabIndex={i === active ? 0 : -1}
            className={`ftabs__tab${i === active ? " is-active" : ""}`}
            onClick={() => setActive(i)}
            onKeyDown={(e) => {
              if (e.key === "ArrowRight") go(i + 1);
              else if (e.key === "ArrowLeft") go(i - 1);
            }}
          >
            {t.name}
            <span className="ftabs__count">{t.count}</span>
          </button>
        ))}
      </div>
      {tabs.map((t, i) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`fpanel-${t.id}`}
          aria-labelledby={`ftab-${t.id}`}
          className="ftabs__panel"
          hidden={i !== active}
        >
          {t.intro ? <p className="ftabs__intro">{t.intro}</p> : null}
          {t.content}
        </div>
      ))}
    </div>
  );
}
