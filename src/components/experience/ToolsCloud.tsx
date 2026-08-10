"use client";

import { useEffect, useMemo, useState } from "react";
import { TOOLS, TOOL_GROUPS, type Tool } from "@/lib/tools";
import { BRANDS, BrandIcon } from "./BrandIcon";

// Mega-wolk van alle tools waar we mee werken. Klik op een tool → popup met
// het logo groot en wát we ermee doen voor onze klanten.

export function ToolsCloud({ onBack }: { onBack: () => void }) {
  const [group, setGroup] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState<Tool | null>(null);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return TOOLS.filter((t) => {
      if (group && t.group !== group) return false;
      if (!q) return true;
      return (BRANDS[t.key]?.name ?? t.key).toLowerCase().includes(q) || t.what.toLowerCase().includes(q);
    });
  }, [group, query]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Grootte varieert licht per tool zodat het als wolk oogt i.p.v. als raster.
  const sizeFor = (i: number) => ["is-lg", "is-md", "is-sm", "is-md", "is-lg", "is-sm", "is-md"][i % 7];

  return (
    <div className="exp-tools-screen">
      <header className="exp-tools-head">
        <button className="exp-btn exp-btn-ghost exp-btn-sm" onClick={onBack}>
          ← Terug
        </button>
        <span className="exp-eyebrow">Onze toolstack</span>
        <h2 className="exp-step-title">Waar we dagelijks mee werken</h2>
        <p className="exp-step-sub">{TOOLS.length} platforms, tools en diensten — klik er een aan.</p>
        <p className="exp-step-para">
          We kiezen bewust per project welke tools passen bij je vraag, je team en je budget. Hieronder vind je onze
          hele stack met per tool waar wij hem concreet voor inzetten.
        </p>
      </header>

      <div className="exp-tools-filters">
        <div className="exp-tools-search">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Zoek een tool of toepassing…"
            aria-label="Zoek een tool"
          />
        </div>
        <div className="exp-tools-groups">
          <button className={`exp-opt-chip ${group === null ? "is-on" : ""}`} onClick={() => setGroup(null)}>
            Alles
          </button>
          {TOOL_GROUPS.map((g) => (
            <button key={g} className={`exp-opt-chip ${group === g ? "is-on" : ""}`} onClick={() => setGroup(g)}>
              {g}
            </button>
          ))}
        </div>
      </div>

      <div className="exp-tools-cloud">
        {list.map((t, i) => (
          <button
            key={t.key}
            className={`exp-tool-chip ${sizeFor(i)}`}
            onClick={() => setOpen(t)}
            style={{ animationDelay: `${Math.min(i * 18, 700)}ms` }}
          >
            <BrandIcon name={t.key} size={26} />
            <span>{BRANDS[t.key]?.name ?? t.key}</span>
          </button>
        ))}
        {list.length === 0 && <p className="exp-tools-empty">Geen tool gevonden — probeer een andere zoekterm.</p>}
      </div>

      {open && (
        <div className="exp-modal-overlay" onClick={() => setOpen(null)}>
          <div className="exp-modal exp-tool-modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <button className="exp-modal-close" onClick={() => setOpen(null)} aria-label="Sluiten">
              ✕
            </button>
            <div className="exp-tool-modal-mark" style={{ ["--tool" as string]: BRANDS[open.key]?.color }}>
              <BrandIcon name={open.key} size={64} />
            </div>
            <span className="exp-tool-modal-group">{open.group}</span>
            <h3>{BRANDS[open.key]?.name ?? open.key}</h3>
            <p>{open.what}</p>
            <button className="exp-btn exp-btn-ghost exp-btn-sm" onClick={() => setOpen(null)}>
              Sluiten
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
