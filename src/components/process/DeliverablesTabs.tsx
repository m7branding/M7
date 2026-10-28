"use client";

import { useEffect, useId, useRef, useState } from "react";
import { TLink } from "@/components/motion/TLink";
import { Icon } from "@/components/ui/Icon";
import { useProcess } from "./ProcessContext";

export interface DeliverApp {
  slug: string;
  title: string;
  summary: string;
  href: string;
  deliverables: string[];
}

/**
 * "Wat je krijgt": per toepassing van de dienst wat er concreet wordt
 * opgeleverd (tabs). Alle lijsten staan in de HTML; wie via de zoeker op een
 * toepassing kwam (bv. "webshop"), ziet die meteen geselecteerd.
 */
export function DeliverablesTabs({ service, apps, label, more }: { service: string; apps: DeliverApp[]; label: string; more: string }) {
  const { pick } = useProcess();
  const [cur, setCur] = useState(apps[0]?.slug);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const uid = useId().replace(/:/g, "");

  useEffect(() => {
    if (pick.service === service && pick.app && apps.some((a) => a.slug === pick.app)) setCur(pick.app);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pick.n]);

  const onKey = (e: React.KeyboardEvent, k: number) => {
    const n = apps.length;
    const map: Record<string, number> = {
      ArrowRight: (k + 1) % n,
      ArrowLeft: (k - 1 + n) % n,
      Home: 0,
      End: n - 1,
    };
    if (!(e.key in map)) return;
    e.preventDefault();
    const next = apps[map[e.key]];
    setCur(next.slug);
    tabs.current[map[e.key]]?.focus();
  };

  if (!apps.length) return null;
  return (
    <div className="pw-get">
      <div className="pw-get__tabs" role="tablist" aria-label={label}>
        {apps.map((a, k) => (
          <button
            key={a.slug}
            ref={(el) => {
              tabs.current[k] = el;
            }}
            type="button"
            role="tab"
            id={`${uid}-t-${a.slug}`}
            aria-selected={a.slug === cur}
            aria-controls={`${uid}-p-${a.slug}`}
            tabIndex={a.slug === cur ? 0 : -1}
            className={`pw-get__tab${a.slug === cur ? " is-on" : ""}`}
            onClick={() => setCur(a.slug)}
            onKeyDown={(e) => onKey(e, k)}
          >
            {a.title}
          </button>
        ))}
      </div>
      {apps.map((a) => (
        <div
          key={a.slug}
          role="tabpanel"
          id={`${uid}-p-${a.slug}`}
          aria-labelledby={`${uid}-t-${a.slug}`}
          hidden={a.slug !== cur}
          className="pw-get__panel"
        >
          <p className="pw-get__summary">{a.summary}</p>
          <ul className="pw-get__list">
            {a.deliverables.map((x) => (
              <li key={x}>
                <span className="pw-get__check" aria-hidden="true">
                  <Icon name="check" size={13} stroke={3} />
                </span>
                {x}
              </li>
            ))}
          </ul>
          <TLink href={a.href} className="link-dash pw-get__more">
            {more} {a.title}
          </TLink>
        </div>
      ))}
    </div>
  );
}
