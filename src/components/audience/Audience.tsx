"use client";

import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLenis } from "@/components/motion/SmoothScroll";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/content/types";
import type { AudIndex } from "@/lib/audience";
import { audCopy, lcFirst } from "./copy";
import { haystack, highlight, norm, scoreQuery, slugify, type Haystack } from "./match";
import "./audience.css";

/* ============================================================
   Doelgroep-zoeker ("prompt bar") + modal.
   - Zoekbalk: ARIA-combobox met live suggesties (soorten bedrijven,
     doelgroepen, sectoren), typfout-tolerant, NL/EN.
   - Modal: native <dialog> (focus, inert achtergrond, Esc) met
     blur, scroll lock (Lenis) en een deep link via de URL-hash
     (#voor-makelaars). Terug-knop sluit.
   - Inhoud: server-gerenderde panelen (sectorpagina; crawlbaar) of,
     op de dienstpagina, het paneel van de sectorpagina (lazy, geen
     dubbele content) met de dienst-specifieke use cases bovenaan.
   ============================================================ */

type Kind = "type" | "seg" | "sector";
interface Entry {
  kind: Kind;
  label: string;
  sub: string;
  seg: number;
  sector: number;
  h: Haystack;
}
interface Target {
  seg: number;
  type?: string;
}

export interface AudiencePanelNode {
  key: string;
  node: React.ReactNode;
}

const MAX = 8;
const reduceMotion = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- Lazy panelen van een sectorpagina (dienstpagina) ---------- */
const docs = new Map<string, Promise<Document>>();
function loadDoc(href: string) {
  let p = docs.get(href);
  if (!p) {
    p = fetch(href, { credentials: "same-origin" })
      .then((r) => {
        if (!r.ok) throw new Error(String(r.status));
        return r.text();
      })
      .then((t) => new DOMParser().parseFromString(t, "text/html"));
    docs.set(href, p);
    p.catch(() => docs.delete(href));
  }
  return p;
}
async function loadPanel(href: string, key: string) {
  const doc = await loadDoc(href);
  const src = doc.querySelector(`[data-aud-panel="${CSS.escape(key)}"]`);
  if (!src) throw new Error("panel");
  const pane = document.createElement("div");
  pane.className = "aud-dlg__pane";
  pane.append(...Array.from(src.childNodes).map((n) => document.importNode(n, true)));
  return pane;
}

/** Klik op een (verborgen) link, zodat de page transition het overneemt. */
function navigate(href: string) {
  const a = document.createElement("a");
  a.href = href;
  a.hidden = true;
  document.body.appendChild(a);
  a.click();
  a.remove();
}

export function Audience({
  index,
  locale,
  scope,
  current,
  service,
  panels,
  quick,
  placeholder,
  variant = "hero",
}: {
  index: AudIndex;
  locale: Locale;
  /** Sectoren waarvan de doelgroepen op déze pagina in de modal openen. */
  scope: string[];
  /** Sectorpagina: deze sector eerst. */
  current?: string;
  /** Dienstpagina: dienst-context in de modal. */
  service?: { slug: string; name: string };
  /** Server-gerenderde panelen; zonder: lazy van de sectorpagina. */
  panels?: AudiencePanelNode[];
  quick?: { label: string; hash: string }[];
  placeholder?: string;
  variant?: "hero" | "section";
}) {
  const c = audCopy(locale);
  const uid = useId().replace(/:/g, "");
  const lenis = useLenis();
  const lenisRef = useRef(lenis);
  lenisRef.current = lenis;
  const remote = !panels;

  /* ---------- index ---------- */
  const scopeSet = useMemo(() => new Set(scope), [scope]);
  const inScope = useCallback((seg: number) => scopeSet.has(index.sectors[index.segs[seg].s].slug), [index, scopeSet]);

  const entries = useMemo(() => {
    const out: Entry[] = [];
    index.sectors.forEach((s, i) => out.push({ kind: "sector", label: s.name, sub: c.sector, seg: -1, sector: i, h: haystack(s.name, s.alt) }));
    index.segs.forEach((g, id) => {
      if (g.i < 0) return;
      out.push({ kind: "seg", label: g.n, sub: index.sectors[g.s].name, seg: id, sector: g.s, h: haystack(g.n, g.an, g.kw) });
    });
    for (const [l, a, id] of index.types) {
      const g = index.segs[id];
      const sn = index.sectors[g.s].name;
      out.push({ kind: "type", label: l, sub: g.i < 0 ? sn : `${g.n} · ${sn}`, seg: id, sector: g.s, h: haystack(l, a) });
    }
    return out;
  }, [index, c.sector]);

  /** Hash-slug (zonder prefix) → doelgroep (+ soort bedrijf), binnen de sectoren in `only`. */
  const resolveSlug = useCallback(
    (slug: string, only: (seg: number) => boolean): Target | null => {
      if (!slug) return null;
      const seg = index.segs.findIndex((g, id) => only(id) && (g.k === slug || g.ak === slug));
      if (seg >= 0) return { seg };
      for (const [l, a, id] of index.types) {
        if (only(id) && (slugify(l) === slug || slugify(a) === slug)) return { seg: id, type: l };
      }
      return null;
    },
    [index],
  );
  const resolveHash = useCallback(
    (hash: string): Target | null => {
      let h = hash.replace(/^#/, "");
      try {
        h = decodeURIComponent(h);
      } catch {}
      const p = [index.p, index.ap].find((x) => h.startsWith(x));
      return p ? resolveSlug(h.slice(p.length), inScope) : null;
    },
    [index, resolveSlug, inScope],
  );

  /* ---------- modal-state (bron van waarheid: de URL-hash) ---------- */
  const [active, setActive] = useState<Target | null>(null);
  const [shown, setShown] = useState<Target | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const activeRef = useRef<Target | null>(null);
  activeRef.current = active;
  const pushed = useRef(false);
  const dlg = useRef<HTMLDialogElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const remoteRef = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const leaving = useRef(false);

  const sync = useCallback(() => {
    if (!started.current) return;
    setActive(resolveHash(window.location.hash));
  }, [resolveHash]);

  const open = useCallback(
    (hash: string) => {
      const url = window.location.pathname + window.location.search + "#" + hash;
      if (window.location.hash.slice(1) !== hash) {
        if (activeRef.current) window.history.replaceState(null, "", url);
        else {
          window.history.pushState(null, "", url);
          pushed.current = true;
        }
      }
      started.current = true;
      setActive(resolveHash(hash));
    },
    [resolveHash],
  );

  const close = useCallback(() => {
    if (!activeRef.current) return;
    if (pushed.current) {
      pushed.current = false;
      window.history.back();
    } else {
      window.history.replaceState(null, "", window.location.pathname + window.location.search);
      setActive(null);
    }
  }, []);

  // Hash bij laden (na de preloader / page transition), terug/vooruit, en links naar #voor-…
  useEffect(() => {
    const start = () => {
      started.current = true;
      sync();
    };
    const html = document.documentElement;
    if (html.dataset.loading === "1") window.addEventListener("m7:ready", start, { once: true });
    else start();

    const onPop = () => {
      // terug-knop: wat er nu in de URL staat is leidend
      if (!window.location.hash) pushed.current = false;
      sync();
    };
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a");
      if (!a || !a.href) return;
      const url = new URL(a.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
      const hash = url.hash.slice(1);
      if (!resolveHash(hash)) return;
      e.preventDefault();
      e.stopPropagation();
      open(decodeURIComponent(hash));
    };
    // navigatie naar een andere pagina: modal direct weg (de page transition ligt anders eronder)
    const onNavigate = () => {
      leaving.current = true;
      const d = dlg.current;
      if (d?.open) {
        d.classList.remove("is-in");
        d.close();
      }
      lock(false);
    };
    window.addEventListener("popstate", onPop);
    window.addEventListener("hashchange", onPop);
    window.addEventListener("m7:navigate", onNavigate);
    document.addEventListener("click", onClick, true);
    return () => {
      window.removeEventListener("m7:ready", start);
      window.removeEventListener("popstate", onPop);
      window.removeEventListener("hashchange", onPop);
      window.removeEventListener("m7:navigate", onNavigate);
      document.removeEventListener("click", onClick, true);
      lock(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sync, open, resolveHash]);

  const lock = (on: boolean) => {
    document.documentElement.classList.toggle("aud-lock", on);
    if (on) lenisRef.current?.stop();
    else lenisRef.current?.start();
  };

  // Openen / sluiten met een rustige overgang
  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    if (active) {
      setShown(active);
      if (!d.open) {
        d.showModal();
        lock(true);
        // focus op de inhoud (bovenaan), niet op de sluitknop: pijltjes/spatie scrollen meteen
        scrollRef.current?.focus({ preventScroll: true });
      }
      const raf = requestAnimationFrame(() => requestAnimationFrame(() => d.classList.add("is-in")));
      return () => cancelAnimationFrame(raf);
    }
    if (d.open) {
      d.classList.remove("is-in");
      const t = window.setTimeout(
        () => {
          d.close();
          lock(false);
          setShown(null);
        },
        reduceMotion() ? 0 : 420,
      );
      return () => window.clearTimeout(t);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  // Ander paneel: naar boven scrollen
  const shownSeg = shown?.seg ?? -1;
  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  }, [shownSeg]);

  // Dienstpagina: paneel van de sectorpagina laden + dienst-context
  useEffect(() => {
    if (!remote || shownSeg < 0) return;
    const g = index.segs[shownSeg];
    const sec = index.sectors[g.s];
    let alive = true;
    setStatus("loading");
    remoteRef.current?.replaceChildren();
    loadPanel(sec.href, g.k)
      .then((pane) => {
        if (!alive) return;
        if (service) contextualize(pane, g.k, g.n);
        remoteRef.current?.replaceChildren(pane);
        setStatus("ready");
      })
      .catch(() => alive && setStatus("error"));
    return () => {
      alive = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remote, shownSeg]);

  /** Zet de use cases van déze dienst (uit de accordeon op de pagina) bovenaan het paneel. */
  const contextualize = (pane: HTMLElement, key: string, segName: string) => {
    const block = document.querySelector<HTMLElement>(`[data-aud-svc="${CSS.escape(key)}"]`);
    const head = pane.querySelector("[data-aud-head]");
    if (!block || !head) return;
    const clone = block.cloneNode(true) as HTMLElement;
    clone.removeAttribute("data-aud-svc");
    clone.classList.add("aud-svc--modal");
    const ids = new Set(Array.from(clone.querySelectorAll<HTMLElement>("[data-uc]")).map((e) => e.dataset.uc));
    const uc = pane.querySelector<HTMLElement>("[data-aud-uc]");
    if (uc) {
      uc.querySelectorAll<HTMLElement>("[data-uc]").forEach((li) => ids.has(li.dataset.uc) && li.remove());
      if (!uc.querySelector("[data-uc]")) uc.remove();
      else {
        const h = uc.querySelector("[data-aud-uc-h]");
        if (h) h.textContent = c.alsoFor(lcFirst(segName));
      }
    }
    head.after(clone);
  };

  // Dienstpagina: sectorpagina alvast ophalen zodra iemand een sector openklapt
  useEffect(() => {
    if (!remote) return;
    const onToggle = (e: Event) => {
      const el = e.target as HTMLDetailsElement;
      if (!el.open || !el.id?.startsWith("aud-sec-")) return;
      const sec = index.sectors.find((x) => x.slug === el.id.slice(8));
      if (sec) loadDoc(sec.href).catch(() => {});
    };
    document.addEventListener("toggle", onToggle, true);
    return () => document.removeEventListener("toggle", onToggle, true);
  }, [remote, index]);

  // Gekozen soort bedrijf oplichten in de chips
  useEffect(() => {
    const root = dlg.current;
    if (!root || !shown) return;
    const slug = shown.type ? slugify(shown.type) : "";
    root.querySelectorAll<HTMLElement>("[data-type]").forEach((el) => el.classList.toggle("is-on", !!slug && el.dataset.type === slug));
  }, [shown, status]);

  // Focus binnen de modal houden
  const onDialogKey = (e: React.KeyboardEvent<HTMLDialogElement>) => {
    if (e.key !== "Tab") return;
    const root = dlg.current;
    if (!root) return;
    const f = Array.from(
      root.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), summary, input, [tabindex]:not([tabindex="-1"])'),
    ).filter((el) => el.getClientRects().length > 0);
    if (!f.length) return;
    const first = f[0];
    const last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  };

  /* ---------- zoekbalk ---------- */
  const [q, setQ] = useState("");
  const [focused, setFocused] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [hi, setHi] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const blurT = useRef<number>();
  const [pos, setPos] = useState<{ top: number; left: number; width: number } | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const nq = norm(q);
  const suggestions = useMemo(() => {
    if (current) return entries.filter((e) => e.kind === "seg" && index.sectors[e.sector].slug === current).slice(0, 6);
    // dienstpagina: van een paar sectoren het eerste soort bedrijf
    const out: Entry[] = [];
    const seen = new Set<number>();
    for (const e of entries) {
      if (e.kind !== "type" || seen.has(e.sector) || !scopeSet.has(index.sectors[e.sector].slug)) continue;
      seen.add(e.sector);
      out.push(e);
      if (out.length >= 6) break;
    }
    return out;
  }, [entries, current, scopeSet, index]);

  const results = useMemo(() => {
    if (nq.length < 2) return suggestions;
    const scored: [number, Entry][] = [];
    for (const e of entries) {
      let s = scoreQuery(nq, e.h);
      if (s < 45) continue;
      const slug = index.sectors[e.sector].slug;
      if (current && slug === current) {
        if (e.kind === "sector") continue;
        s += 14;
      } else if (scopeSet.has(slug)) s += 8;
      if (e.kind === "type") s += 3;
      else if (e.kind === "seg") s += 2;
      s -= e.label.length * 0.04;
      scored.push([s, e]);
    }
    scored.sort((a, b) => b[0] - a[0]);
    const out: Entry[] = [];
    const per = new Map<number, number>();
    const seen = new Set<string>();
    for (const [, e] of scored) {
      const k = `${norm(e.label)}|${e.kind === "sector" ? "s" + e.sector : e.seg}`;
      if (seen.has(k)) continue;
      const n = per.get(e.seg) ?? 0;
      if (e.kind !== "sector" && n >= 3) continue;
      per.set(e.seg, n + 1);
      seen.add(k);
      out.push(e);
      if (out.length >= MAX) break;
    }
    return out;
  }, [nq, entries, suggestions, current, scopeSet, index]);

  const typing = nq.length >= 2;
  const empty = typing && !results.length;
  const popup = focused && !dismissed && (results.length > 0 || empty);
  const listOpen = popup && results.length > 0;

  useEffect(() => setHi(typing && results.length ? 0 : -1), [nq, typing, results.length]);

  // positie van de popup (portal in <body>, zodat de hero hem niet afknipt)
  const place = useCallback(() => {
    const el = barRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    setPos({ top: r.bottom + window.scrollY + 10, left: r.left + window.scrollX, width: r.width });
  }, []);
  useEffect(() => {
    if (!popup) return;
    place();
    window.addEventListener("resize", place);
    const ro = new ResizeObserver(place);
    if (barRef.current) ro.observe(barRef.current);
    return () => {
      window.removeEventListener("resize", place);
      ro.disconnect();
    };
  }, [popup, place]);

  // actieve optie in beeld houden
  useEffect(() => {
    const list = listRef.current;
    const el = hi >= 0 ? list?.querySelector<HTMLElement>(`#${uid}-o${hi}`) : null;
    if (!list || !el) return;
    if (el.offsetTop < list.scrollTop) list.scrollTop = el.offsetTop - 6;
    else if (el.offsetTop + el.offsetHeight > list.scrollTop + list.clientHeight) list.scrollTop = el.offsetTop + el.offsetHeight - list.clientHeight + 6;
  }, [hi, uid]);

  /** Opent de juiste accordeon-items (dienstpagina). */
  const reveal = (sector: number, seg?: number) => {
    const sd = document.getElementById(`aud-sec-${index.sectors[sector].slug}`) as HTMLDetailsElement | null;
    if (sd) sd.open = true;
    const gd = seg != null && seg >= 0 ? (document.getElementById(`aud-seg-${index.segs[seg].k}`) as HTMLDetailsElement | null) : null;
    if (gd) gd.open = true;
    return gd ?? sd;
  };

  const pick = (e: Entry) => {
    setDismissed(true);
    setQ(e.label);
    const sec = index.sectors[e.sector];
    if (e.kind === "sector") {
      const el = scopeSet.has(sec.slug) ? reveal(e.sector) : null;
      if (!el) return navigate(sec.href);
      const l = lenisRef.current;
      if (l) l.scrollTo(el, { offset: -110 });
      else el.scrollIntoView({ behavior: reduceMotion() ? "auto" : "smooth", block: "start" });
      return;
    }
    const g = index.segs[e.seg];
    let hash = index.p + g.k;
    if (e.kind === "type") {
      const slug = slugify(e.label);
      const t = resolveSlug(slug, (id) => index.segs[id].s === e.sector);
      if (t && t.seg === e.seg) hash = index.p + slug;
    }
    if (!inScope(e.seg)) return navigate(`${sec.href}#${hash}`);
    reveal(e.sector, e.seg);
    open(hash);
  };

  const onKey = (ev: React.KeyboardEvent<HTMLInputElement>) => {
    const n = results.length;
    if (ev.key === "ArrowDown") {
      ev.preventDefault();
      setDismissed(false);
      if (n) setHi((i) => (i + 1) % n);
    } else if (ev.key === "ArrowUp") {
      ev.preventDefault();
      setDismissed(false);
      if (n) setHi((i) => (i <= 0 ? n - 1 : i - 1));
    } else if (ev.key === "Enter") {
      if (!popup || !n) return;
      ev.preventDefault();
      const e = results[hi >= 0 ? hi : 0];
      if (e) pick(e);
    } else if (ev.key === "Escape") {
      if (popup) {
        ev.preventDefault();
        setDismissed(true);
      } else if (q) {
        ev.preventDefault();
        setQ("");
      }
    }
  };

  // voorladen (dienstpagina) zodra iemand een resultaat aanwijst
  const prefetch = (e?: Entry) => {
    if (!remote || !e || e.kind === "sector" || !inScope(e.seg)) return;
    loadDoc(index.sectors[e.sector].href).catch(() => {});
  };
  useEffect(() => {
    if (hi >= 0) prefetch(results[hi]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hi, results]);

  const mark = (label: string) => {
    if (!typing) return label;
    const r = highlight(label, q);
    if (!r.length) return label;
    const out: React.ReactNode[] = [];
    let last = 0;
    r.forEach(([a, b], i) => {
      if (a > last) out.push(label.slice(last, a));
      out.push(<mark key={i}>{label.slice(a, b)}</mark>);
      last = b;
    });
    if (last < label.length) out.push(label.slice(last));
    return out;
  };

  const listId = `${uid}-list`;
  const shownG = shown ? index.segs[shown.seg] : null;
  const shownSector = shownG ? index.sectors[shownG.s] : null;

  const popupEl =
    mounted && popup && pos
      ? createPortal(
          <div
            className={`af-pop${variant === "hero" ? " af-pop--hero" : ""}`}
            style={{ top: pos.top, left: pos.left, width: pos.width }}
            onMouseDown={(e) => e.preventDefault()}
          >
            {!typing && results.length ? (
              <p className="af-pop__label" aria-hidden="true">
                {c.suggestions}
              </p>
            ) : null}
            {results.length ? (
              <ul className="af-pop__list" id={listId} role="listbox" aria-label={c.label} ref={listRef} data-lenis-prevent="">
                {results.map((e, i) => {
                  const sec = index.sectors[e.sector];
                  const away = e.kind === "sector" ? !scopeSet.has(sec.slug) : !inScope(e.seg);
                  return (
                    <li
                      key={`${e.kind}-${e.seg}-${e.sector}-${e.label}`}
                      id={`${uid}-o${i}`}
                      role="option"
                      aria-selected={i === hi}
                      className={`af-opt${i === hi ? " is-hi" : ""}`}
                      onMouseMove={() => i !== hi && setHi(i)}
                      onClick={() => pick(e)}
                    >
                      <span className="af-opt__ic" aria-hidden="true">
                        <Icon name={sec.icon} size={18} />
                      </span>
                      <span className="af-opt__txt">
                        <span className="af-opt__label">{mark(e.label)}</span>
                        <span className="af-opt__sub">{e.kind === "seg" ? `${c.segment} · ${e.sub}` : e.sub}</span>
                      </span>
                      <span className="af-opt__go" aria-hidden="true">
                        <Icon name={away ? "arrowUpRight" : "arrowRight"} size={16} stroke={2} />
                      </span>
                    </li>
                  );
                })}
              </ul>
            ) : null}
            {empty ? (
              <div className="af-pop__empty">
                <p className="af-pop__none">{c.none(q.trim())}</p>
                <p>{c.noneText}</p>
                <div className="af-pop__links">
                  <a href={locale === "en" ? "/en/sectors" : "/sectoren"} className="link-dash">
                    {c.allSectors}
                  </a>
                  <a href={locale === "en" ? "/en/contact" : "/contact"} className="link-dash">
                    {c.askUs}
                  </a>
                </div>
              </div>
            ) : null}
          </div>,
          document.body,
        )
      : null;

  return (
    <div className={`af af--${variant}${popup ? " is-open" : ""}`}>
      <div className="af__bar" ref={barRef}>
        <span className="af__glow" aria-hidden="true" />
        <Icon name="search" size={22} stroke={2} className="af__ic" />
        <input
          ref={inputRef}
          id={`${uid}-in`}
          className="af__input"
          type="text"
          role="combobox"
          aria-label={c.label}
          aria-expanded={listOpen}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={listOpen && hi >= 0 ? `${uid}-o${hi}` : undefined}
          autoComplete="off"
          autoCorrect="off"
          spellCheck={false}
          enterKeyHint="search"
          placeholder={placeholder ?? c.placeholder}
          value={q}
          onChange={(e) => {
            setQ(e.target.value);
            setDismissed(false);
          }}
          onFocus={() => {
            window.clearTimeout(blurT.current);
            setFocused(true);
          }}
          onMouseDown={() => setDismissed(false)}
          onBlur={() => {
            blurT.current = window.setTimeout(() => setFocused(false), 120);
          }}
          onKeyDown={onKey}
        />
        {q ? (
          <button
            type="button"
            className="af__clear"
            aria-label={c.clear}
            onClick={() => {
              setQ("");
              setDismissed(false);
              inputRef.current?.focus();
            }}
          >
            <Icon name="close" size={16} stroke={2} />
          </button>
        ) : null}
        <button
          type="button"
          className="af__go"
          aria-label={c.go}
          tabIndex={-1}
          onMouseDown={(e) => e.preventDefault()}
          onClick={() => {
            if (typing && results.length) pick(results[hi >= 0 ? hi : 0]);
            else {
              setDismissed(false);
              inputRef.current?.focus();
            }
          }}
        >
          <Icon name="arrowRight" size={18} stroke={2.2} />
        </button>
      </div>
      <p className="visually-hidden" aria-live="polite">
        {typing && focused ? (results.length ? c.results(results.length) : c.none(q.trim())) : ""}
      </p>
      {quick?.length ? (
        <nav className="af__quick" aria-label={c.quick}>
          <span className="af__quick-l">{c.quick}</span>
          {quick.map((x) => (
            <a key={x.hash} href={`#${x.hash}`} className="af__chip">
              {x.label}
            </a>
          ))}
        </nav>
      ) : null}
      {popupEl}

      <dialog
        ref={dlg}
        className="aud-dlg"
        aria-labelledby={shownG ? `aud-t-${shownG.k}` : undefined}
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClose={() => {
          if (activeRef.current && !leaving.current) close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={onDialogKey}
      >
        <div className="aud-dlg__panel">
          <button type="button" className="aud-dlg__close" onClick={close} aria-label={c.close}>
            <Icon name="close" size={20} stroke={2} />
          </button>
          <div className="aud-dlg__scroll" ref={scrollRef} tabIndex={-1} data-lenis-prevent="">
            {panels?.map((p) => (
              <div key={p.key} className="aud-dlg__pane" data-aud-panel={p.key} hidden={!shownG || shownG.k !== p.key}>
                {p.node}
              </div>
            ))}
            {remote ? (
              <>
                <div ref={remoteRef} className="aud-dlg__remote" />
                {status === "loading" ? (
                  <div className="aud-dlg__skel" aria-busy="true">
                    <p className="aud-p__kicker">{shownSector?.name}</p>
                    <h2 className="aud-p__title" id={shownG ? `aud-t-${shownG.k}` : undefined}>
                      {shownG?.n}
                    </h2>
                    <span className="visually-hidden">{c.loading}</span>
                    <i />
                    <i />
                    <i />
                    <div className="aud-dlg__skel-grid">
                      <i />
                      <i />
                    </div>
                  </div>
                ) : null}
                {status === "error" && shownG && shownSector ? (
                  <div className="aud-dlg__err">
                    <p className="aud-p__kicker">{shownSector.name}</p>
                    <h2 className="aud-p__title" id={`aud-t-${shownG.k}`}>
                      {shownG.n}
                    </h2>
                    <p>{c.failed}</p>
                    <a className="link-dash" href={`${shownSector.href}#${index.p}${shownG.k}`}>
                      {c.failedLink}
                    </a>
                  </div>
                ) : null}
                {status === "ready" && shownG && shownSector ? (
                  <p className="aud-dlg__more">
                    <a className="link-dash" href={`${shownSector.href}#${index.p}${shownG.k}`}>
                      {c.moreSector(shownSector.name)}
                    </a>
                  </p>
                ) : null}
              </>
            ) : null}
          </div>
        </div>
      </dialog>
    </div>
  );
}
