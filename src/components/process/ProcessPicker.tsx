"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Icon, type IconKey } from "@/components/ui/Icon";
import { useProcess } from "./ProcessContext";

export interface PickService {
  slug: string;
  title: string;
  short: string;
  color: string;
  icon: IconKey;
  /** Namen in NL en EN (zoeken werkt in beide talen). */
  names: string[];
  /** Termen/keywords van de dienst (Shopify, Hosting, ...). */
  terms: string[];
}

export interface PickApp {
  slug: string;
  service: string;
  title: string;
  names: string[];
}

export interface PickLabels {
  lead: string;
  search: string;
  placeholder: string;
  service: string;
  none: string;
  /** "{n} resultaten" */
  results: string;
  clear: string;
  suggest?: string;
}

type Option =
  | {
      kind: "service";
      id: string;
      s: PickService;
      hint?: string;
      score: number;
    }
  | { kind: "app"; id: string; a: PickApp; s: PickService; score: number };

const norm = (v: string) =>
  v
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

/** 0-100: exact > begint met > woord begint met > bevat. "web shop" vindt ook "webshop". */
function match(q: string, text: string): number {
  const t = norm(text);
  if (!t) return 0;
  const tc = t.replace(/ /g, "");
  const qc = q.replace(/ /g, "");
  if (t === q || tc === qc) return 100;
  if (t.startsWith(q) || tc.startsWith(qc)) return 90;
  if (t.split(" ").some((w) => w.startsWith(q))) return 80;
  if (t.includes(q) || tc.includes(qc)) return 60;
  return 0;
}

export function searchProcess(query: string, services: PickService[], apps: PickApp[]): Option[] {
  const q = norm(query);
  const bySlug = Object.fromEntries(services.map((s) => [s.slug, s]));
  if (!q) return services.map((s) => ({ kind: "service", id: s.slug, s, score: 0 }));
  const out: Option[] = [];
  services.forEach((s) => {
    const name = Math.max(...s.names.map((n) => match(q, n)));
    let term = 0;
    let hint: string | undefined;
    for (const t of s.terms) {
      // termen alleen op (begin van een) woord: "app" mag niet "rapportages" vinden
      const raw = match(q, t);
      const m = raw >= 80 ? raw * 0.7 : 0;
      if (m > term) {
        term = m;
        hint = t;
      }
    }
    const score = Math.max(name, term);
    if (score > 0)
      out.push({
        kind: "service",
        id: s.slug,
        s,
        score,
        hint: term > name ? hint : undefined,
      });
  });
  apps.forEach((a) => {
    const score = Math.max(...a.names.map((n) => match(q, n))) * 0.98;
    if (score > 0)
      out.push({
        kind: "app",
        id: `${a.service}--${a.slug}`,
        a,
        s: bySlug[a.service],
        score,
      });
  });
  // stabiel sorteren: hoogste score eerst, bij gelijkspel diensten voor toepassingen
  return out
    .map((o, i) => ({ o, i }))
    .sort((x, y) => y.o.score - x.o.score || (x.o.kind === y.o.kind ? x.i - y.i : x.o.kind === "service" ? -1 : 1))
    .map((x) => x.o)
    .slice(0, 12);
}

/**
 * "Ontdek ons werkproces voor [Branding ▾]": een knop die een doorzoekbare
 * lijst opent (ARIA: knop met aria-haspopup, daarin een combobox + listbox).
 * Zoekt in diensten, hun termen én toepassingen; een toepassing opent de
 * bijbehorende dienst met die toepassing alvast geselecteerd.
 */
export function ProcessPicker({
  services,
  apps,
  labels,
  variant = "hero",
  suggestions = [],
  hints = true,
}: {
  services: PickService[];
  apps: PickApp[];
  labels: PickLabels;
  variant?: "hero" | "compact";
  suggestions?: string[];
  /** Toon de gevonden term (bv. "Shopify") bij een dienst; de termen zijn Nederlandstalig. */
  hints?: boolean;
}) {
  const { active, select } = useProcess();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const [cursor, setCursor] = useState(0);
  const root = useRef<HTMLDivElement>(null);
  const btn = useRef<HTMLButtonElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const list = useRef<HTMLDivElement>(null);
  const uid = useId().replace(/:/g, "");
  const cur = services.find((s) => s.slug === active) ?? services[0];

  const options = useMemo(() => searchProcess(q, services, apps), [q, services, apps]);
  const optId = (o: Option) => `${uid}-o-${o.id}`;

  const close = useCallback((refocus = true) => {
    setOpen(false);
    setQ("");
    if (refocus) btn.current?.focus({ preventScroll: true });
  }, []);

  const openWith = (seed = "") => {
    setQ(seed);
    setOpen(true);
  };

  const choose = (o: Option, viaKeyboard = false) => {
    close(!viaKeyboard);
    if (o.kind === "app") select(o.a.service, { app: o.a.slug, focus: viaKeyboard });
    else select(o.s.slug, { focus: viaKeyboard });
  };

  // cursor: bij openen op de huidige dienst, bij zoeken op het beste resultaat
  useEffect(() => {
    if (!open) return;
    if (!q)
      setCursor(
        Math.max(
          0,
          options.findIndex((o) => o.kind === "service" && o.s.slug === active),
        ),
      );
    else setCursor(0);
  }, [open, q, options, active]);

  // focus + zorgen dat de lijst in beeld is
  useEffect(() => {
    if (!open) return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    if (!coarse || q) input.current?.focus({ preventScroll: true });
    const t = window.setTimeout(() => {
      const pop = root.current?.querySelector<HTMLElement>(".pw-pop");
      if (!pop) return;
      const over = pop.getBoundingClientRect().bottom - (window.innerHeight - 16);
      if (over <= 0) return;
      const lenis = (
        window as unknown as {
          __lenis?: { scrollTo: (n: number, o?: object) => void };
        }
      ).__lenis;
      if (lenis) lenis.scrollTo(window.scrollY + over, { duration: 0.9 });
      else window.scrollBy({ top: over, behavior: "smooth" });
    }, 60);
    return () => window.clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  // klik buiten de kiezer sluit hem
  useEffect(() => {
    if (!open) return;
    const onDown = (e: PointerEvent) => {
      if (!root.current?.contains(e.target as Node)) close(false);
    };
    document.addEventListener("pointerdown", onDown);
    return () => document.removeEventListener("pointerdown", onDown);
  }, [open, close]);

  // actieve optie binnen de lijst in beeld houden (zonder de pagina te scrollen)
  useEffect(() => {
    const l = list.current;
    const o = options[cursor];
    if (!l || !o) return;
    const el = l.querySelector<HTMLElement>(`#${CSS.escape(optId(o))}`);
    if (!el) return;
    if (el.offsetTop < l.scrollTop) l.scrollTop = el.offsetTop - 8;
    else if (el.offsetTop + el.offsetHeight > l.scrollTop + l.clientHeight)
      l.scrollTop = el.offsetTop + el.offsetHeight - l.clientHeight + 8;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cursor, options]);

  const onInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const n = options.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (n) setCursor((c) => (c + 1) % n);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (n) setCursor((c) => (c - 1 + n) % n);
    } else if (e.key === "PageDown") {
      e.preventDefault();
      if (n) setCursor((c) => Math.min(n - 1, c + 5));
    } else if (e.key === "PageUp") {
      e.preventDefault();
      if (n) setCursor((c) => Math.max(0, c - 5));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (options[cursor]) choose(options[cursor], true);
    } else if (e.key === "Escape") {
      e.preventDefault();
      e.stopPropagation();
      if (q) setQ("");
      else close();
    } else if (e.key === "Tab") {
      close(false);
    }
  };

  const onBtnKey = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      openWith();
    } else if (e.key.length === 1 && e.key !== " " && !e.metaKey && !e.ctrlKey && !e.altKey) {
      // gewoon beginnen met typen op de knop opent de zoeklijst
      e.preventDefault();
      openWith(e.key);
    }
  };

  const listId = `${uid}-list`;
  const popId = `${uid}-pop`;
  const activeOpt = options[cursor];

  return (
    <div ref={root} className={`pw-pick pw-pick--${variant}${open ? " is-open" : ""}`} style={{ ["--pick" as string]: cur.color }}>
      <div className="pw-pick__anchor">
        <button
          ref={btn}
          type="button"
          className="pw-pick__btn"
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? popId : undefined}
          onClick={() => (open ? close() : openWith())}
          onKeyDown={onBtnKey}
        >
          <span className="pw-pick__lead">{labels.lead}</span>
          <span className="pw-pick__value">
            <span className="pw-pick__icon" aria-hidden="true">
              <Icon name={cur.icon} size={variant === "hero" ? 20 : 17} stroke={1.8} />
            </span>
            <span className="pw-pick__name">{variant === "hero" ? cur.title : cur.short}</span>
          </span>
          <span className="pw-pick__dot" aria-hidden="true">
            <Icon name="chevronDown" size={variant === "hero" ? 20 : 16} stroke={2.4} />
          </span>
        </button>

        {open ? (
          <div className="pw-pop" id={popId}>
            <label className="pw-pop__search">
              <Icon name="search" size={18} />
              <input
                ref={input}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls={listId}
                aria-autocomplete="list"
                aria-activedescendant={activeOpt ? optId(activeOpt) : undefined}
                aria-label={labels.search}
                placeholder={labels.placeholder}
                autoComplete="off"
                spellCheck={false}
                enterKeyHint="go"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={onInputKey}
              />
              {q ? (
                <button
                  type="button"
                  className="pw-pop__clear"
                  aria-label={labels.clear}
                  tabIndex={-1}
                  onClick={() => (setQ(""), input.current?.focus())}
                >
                  <Icon name="close" size={14} stroke={2.2} />
                </button>
              ) : null}
            </label>
            <div ref={list} className="pw-pop__list" id={listId} role="listbox" aria-label={labels.search} data-lenis-prevent="">
              {options.map((o, i) => {
                const isCur = o.kind === "service" && o.s.slug === active && !q;
                return (
                  <div
                    key={o.id}
                    id={optId(o)}
                    role="option"
                    aria-selected={i === cursor}
                    className={`pw-opt${i === cursor ? " is-active" : ""}${isCur ? " is-current" : ""}`}
                    style={{ ["--accent" as string]: o.s.color }}
                    onMouseDown={(e) => e.preventDefault()}
                    onMouseMove={() => i !== cursor && setCursor(i)}
                    onClick={() => choose(o)}
                  >
                    <span className="pw-opt__icon" aria-hidden="true">
                      {o.kind === "service" ? <Icon name={o.s.icon} size={18} stroke={1.7} /> : <span className="chip__dot" />}
                    </span>
                    <span className="pw-opt__text">
                      <span className="pw-opt__title">{o.kind === "service" ? o.s.title : o.a.title}</span>
                      {hints && o.kind === "service" && o.hint ? <span className="pw-opt__hint">{o.hint}</span> : null}
                    </span>
                    {q ? <span className="pw-opt__meta">{o.kind === "app" ? o.s.short : labels.service}</span> : null}
                    {isCur ? (
                      <span className="pw-opt__check" aria-hidden="true">
                        <Icon name="check" size={16} stroke={2.4} />
                      </span>
                    ) : null}
                  </div>
                );
              })}
              {options.length === 0 ? <p className="pw-pop__none">{labels.none}</p> : null}
            </div>
            <p className="visually-hidden" aria-live="polite">
              {q ? labels.results.replace("{n}", String(options.length)) : ""}
            </p>
          </div>
        ) : null}
      </div>

      {variant === "hero" && suggestions.length ? (
        <div className="pw-pick__suggest">
          {labels.suggest ? <span>{labels.suggest}</span> : null}
          {suggestions.map((sug) => (
            <button
              key={sug}
              type="button"
              className="pw-pick__chip"
              onClick={() => {
                const best = searchProcess(sug, services, apps)[0];
                if (best) choose(best);
              }}
            >
              {sug}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
