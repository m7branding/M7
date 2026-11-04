"use client";

import { useMemo, useState } from "react";
import { TLink } from "@/components/motion/TLink";
import { Icon } from "@/components/ui/Icon";

interface Group {
  slug: string;
  title: string;
  short: string;
  color: string;
  href: string;
  apps: { slug: string; title: string; summary: string; href: string }[];
}

/** Zoek- en filterbaar overzicht van alle toepassingen, gegroepeerd per dienst. */
export function ApplicationsExplorer({ groups, labels }: { groups: Group[]; labels: { all: string; search: string; none: string } }) {
  const [filter, setFilter] = useState<string | null>(null);
  const [q, setQ] = useState("");

  const shown = useMemo(() => {
    const term = q.trim().toLowerCase();
    return groups
      .filter((g) => !filter || g.slug === filter)
      .map((g) => ({ ...g, apps: g.apps.filter((a) => !term || (a.title + " " + a.summary).toLowerCase().includes(term)) }))
      .filter((g) => g.apps.length);
  }, [groups, filter, q]);

  return (
    <div className="explorer">
      <div className="explorer__bar">
        <div className="explorer__filters" role="group">
          <button type="button" className={`chip${!filter ? " is-on" : ""}`} onClick={() => setFilter(null)}>
            {labels.all}
          </button>
          {groups.map((g) => (
            <button
              key={g.slug}
              type="button"
              className={`chip${filter === g.slug ? " is-on" : ""}`}
              style={{ ["--accent" as string]: g.color }}
              onClick={() => setFilter(filter === g.slug ? null : g.slug)}
            >
              <span className="chip__dot" />
              {g.short}
            </button>
          ))}
        </div>
        <label className="explorer__search">
          <Icon name="search" size={18} />
          <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={labels.search} aria-label={labels.search} />
        </label>
      </div>

      {shown.length === 0 ? <p className="muted center">{labels.none}</p> : null}
      {shown.map((g) => (
        <div key={g.slug} className="explorer__group" style={{ ["--accent" as string]: g.color }}>
          <TLink href={g.href} className="explorer__title">
            <span className="chip__dot" />
            {g.title}
            <Icon name="arrowRight" size={20} />
          </TLink>
          <div className="explorer__grid">
            {g.apps.map((a) => (
              <TLink key={a.slug} href={a.href} className="explorer__item">
                <strong>{a.title}</strong>
                <span>{a.summary}</span>
              </TLink>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
