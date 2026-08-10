"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  CATALOG,
  CATEGORY_BY_ID,
  CATEGORY_ORDER,
  GOALS,
  HEADINGS,
  PKG_BY_ID,
  STAGES,
  VAT_NOTE,
  formatEuro,
  journeyFor,
  recommendationsFor,
  type Category,
  type IconKey,
  type Pkg,
} from "@/lib/catalog";
import { detailsFor } from "@/lib/packageDetails";
import { CategoryIcon } from "./CategoryIcon";
import { Starfield } from "./Starfield";
import { M7Logo } from "./Logo";
import { BrandChip, BrandIcon, WebflowPartnerBadge, BRANDS, type BrandKey } from "./BrandIcon";
import { CardArt } from "./CardArt";
import { TechField } from "./TechField";
import { Landscape, type LandscapeData } from "./Landscape";
import { Intake, describeAnswers, type IntakeResult } from "./Intake";
import { ToolsCloud } from "./ToolsCloud";
import { TOOLS } from "@/lib/tools";

const INTRO_MAILTO =
  "mailto:hello@m7branding.com?subject=" +
  encodeURIComponent("Kennismakingsgesprek aanvragen") +
  "&body=" +
  encodeURIComponent(
    "Hoi M7,\n\nIk kom graag vrijblijvend kennismaken en sparren over de mogelijkheden.\n\nNaam:\nBedrijf:\nTelefoon:\nWaar ik mee wil starten:\n"
  );

// ------------------------------------------------------------ kleine icons
function Check() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function ArrowLeft() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  );
}
function Chevron({ up }: { up?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.4} strokeLinecap="round" strokeLinejoin="round" style={{ transform: up ? "rotate(180deg)" : "none", transition: "transform .25s" }}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}
// M7-signatuur: diagonale pijl in een teal cirkel (voor primary CTA's).
function CircleArrow() {
  return (
    <span className="exp-circle-arrow" aria-hidden>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 17L17 7M8 7h9v9" />
      </svg>
    </span>
  );
}
function InfoGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.1} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="9.2" />
      <path d="M12 11v5.5" />
      <circle cx="12" cy="7.6" r="1.15" fill="currentColor" stroke="none" />
    </svg>
  );
}
function Sparkle() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8z" />
    </svg>
  );
}

// ------------------------------------------------------------ hook: count-up
function useAnimatedNumber(value: number) {
  const [display, setDisplay] = useState(value);
  const from = useRef(value);
  const raf = useRef(0);
  useEffect(() => {
    cancelAnimationFrame(raf.current);
    const start = performance.now();
    const a = from.current;
    const b = value;
    const step = (t: number) => {
      const k = Math.min(1, (t - start) / 420);
      const eased = 1 - Math.pow(1 - k, 3);
      setDisplay(Math.round(a + (b - a) * eased));
      if (k < 1) raf.current = requestAnimationFrame(step);
      else from.current = b;
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current);
  }, [value]);
  return display;
}

// ------------------------------------------------------------ price label
// `pre` = "vanaf": alle eenmalige (project)prijzen zijn indicatieve
// vanafprijzen; doorlopende prijzen alleen als price.from is gezet.
function priceLabel(price: Pkg["price"]) {
  const { setup, monthly, yearly, custom, suffix, from } = price;
  const hasMonthly = typeof monthly === "number" && monthly > 0;
  const hasYearly = typeof yearly === "number" && yearly > 0;
  const hasSetup = typeof setup === "number" && setup > 0;
  if (hasYearly) {
    return {
      pre: from ? "vanaf" : "",
      main: formatEuro(yearly!),
      unit: `/jaar${suffix ? ` · p/${suffix}` : " · per domein"}`,
      sub: hasSetup ? `+ vanaf ${formatEuro(setup!)} eenmalig` : "",
    };
  }
  if (!hasMonthly && !hasSetup) {
    return { pre: "", main: "Op aanvraag", unit: "", sub: "" };
  }
  if (hasMonthly) {
    return {
      pre: from || custom ? "vanaf" : "",
      main: `${formatEuro(monthly!)}`,
      unit: `/mnd${suffix ? ` · p/${suffix}` : ""}`,
      sub: hasSetup ? `+ vanaf ${formatEuro(setup!)} eenmalig` : "",
    };
  }
  const unitMap: Record<string, string> = { stuk: "per stuk", "afl.": "per afl.", set: "per set" };
  return {
    pre: "vanaf",
    main: formatEuro(setup!),
    unit: suffix && unitMap[suffix] ? unitMap[suffix] : "eenmalig",
    sub: "",
  };
}

/** Maandbedrag van twee pakketten samen, als "€ 44 /mnd"-label. */
function combinedPrice(a: Pkg, b: Pkg) {
  const monthly = (p: Pkg) => (p.price.monthly ?? 0) + Math.round((p.price.yearly ?? 0) / 12);
  const total = monthly(a) + monthly(b);
  if (total === 0) return "op aanvraag";
  const vanaf = a.price.from || b.price.from || a.price.custom || b.price.custom;
  return `${vanaf ? "v.a. " : ""}${formatEuro(total)} /mnd samen`;
}

// ============================================================ MARQUEE
// Voorbij slidende dienst-/tool-labels. Start op normale snelheid en dempt
// na enkele seconden ease-out uit naar een veel langzamere cruise-snelheid.
function Marquee({
  items,
  direction = "left",
}: {
  items: { key: string; node: React.ReactNode }[];
  direction?: "left" | "right";
}) {
  const doubled = [...items, ...items];
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const dir = direction === "left" ? -1 : 1;
    let half = track.scrollWidth / 2 || 1;
    let x = dir < 0 ? 0 : -half;

    const V_FAST = 85; // px/s bij de start
    const V_SLOW = 12; // px/s cruise-snelheid
    const HOLD = 3200; // ms op snelheid blijven
    const EASE = 4200; // ms uitdempen (ease-out)

    let raf = 0;
    const t0 = performance.now();
    let last = t0;

    const step = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const el = now - t0;
      let speed = V_FAST;
      if (el >= HOLD) {
        const k = Math.min(1, (el - HOLD) / EASE);
        const eased = 1 - Math.pow(1 - k, 3); // easeOutCubic
        speed = V_FAST + (V_SLOW - V_FAST) * eased;
      }
      x += dir * speed * dt;
      if (x <= -half) x += half;
      if (x >= 0) x -= half;
      track.style.transform = `translateX(${x}px)`;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);

    const onResize = () => {
      half = track.scrollWidth / 2 || 1;
    };
    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, [direction, items]);

  return (
    <div className="exp-marquee" aria-hidden>
      <div className="exp-marquee-track is-js" ref={trackRef}>
        {doubled.map((it, i) => (
          <span className="exp-marquee-pill" key={`${it.key}-${i}`}>
            {it.node}
          </span>
        ))}
      </div>
    </div>
  );
}

// ============================================================ CARD
function PkgCard({
  pkg,
  catId,
  selected,
  qty,
  onToggle,
  onQty,
  onInfo,
  plus,
  reveal,
}: {
  pkg: Pkg;
  catId: IconKey;
  selected: boolean;
  qty: number;
  onToggle: () => void;
  onQty: (delta: number) => void;
  onInfo: () => void;
  /** Tweede "erbij"-knop (bv. hosting + tracking) onderaan de kaart. */
  plus?: { label: string; price: string; on: boolean; onClick: () => void };
  reveal: (el: HTMLElement | null) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const p = priceLabel(pkg.price);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${px * 100}%`);
    el.style.transform = `perspective(900px) rotateX(${(0.5 - py) * 5}deg) rotateY(${(px - 0.5) * 6}deg) translateY(-2px)`;
  };
  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = "";
  };

  const isItem = pkg.kind === "item";

  return (
    <div
      ref={(el) => {
        (ref as any).current = el;
        reveal(el);
      }}
      className={`exp-card exp-reveal ${selected ? "is-selected" : ""} ${pkg.highlight ? "is-highlight" : ""}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest(".exp-qty, .exp-card-info")) return;
        if (isItem && qty === 0) onQty(1);
        else if (isItem && qty > 0) return;
        else onToggle();
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          isItem ? onQty(qty > 0 ? -qty : 1) : onToggle();
        }
      }}
    >
      <CardArt cat={catId} id={pkg.id} kind={pkg.kind} />

      <button
        type="button"
        className="exp-card-info"
        onClick={(e) => {
          e.stopPropagation();
          onInfo();
        }}
        aria-label={`Meer informatie over ${pkg.name}`}
        title="Meer informatie"
      >
        <InfoGlyph />
      </button>

      <div className="exp-card-top">
        <div>
          <h3>{pkg.name}</h3>
          <p className="exp-card-tag">{pkg.tagline}</p>
        </div>
        {pkg.badge && <span className="exp-badge">{pkg.badge}</span>}
      </div>

      <div className="exp-price">
        {p.pre && <span className="exp-price-pre">{p.pre}</span>}
        <span className="exp-price-main">{p.main}</span>
        {p.unit && <span className="exp-price-unit">{p.unit}</span>}
      </div>
      <div className="exp-price-sub">
        {p.sub && <span>{p.sub} · </span>}
        <span className="exp-vat">{VAT_NOTE}</span>
      </div>

      <ul className="exp-features">
        {pkg.features.map((f) => (
          <li key={f}>
            <Check />
            {f}
          </li>
        ))}
      </ul>

      <div className="exp-card-foot">
        {isItem && qty > 0 ? (
          <>
            <div className="exp-qty" onClick={(e) => e.stopPropagation()}>
              <button type="button" onClick={() => onQty(-1)} aria-label="minder">
                –
              </button>
              <span>{qty}×</span>
              <button type="button" onClick={() => onQty(1)} aria-label="meer">
                +
              </button>
            </div>
            <button type="button" className="exp-select-btn" onClick={(e) => { e.stopPropagation(); onQty(-qty); }}>
              Verwijderen
            </button>
          </>
        ) : (
          <button type="button" className="exp-select-btn">
            {selected ? "✓ Toegevoegd" : isItem ? "Toevoegen" : pkg.kind === "addon" ? "+ Toevoegen" : "Kies dit plan"}
          </button>
        )}
      </div>

      {plus && (
        <button
          type="button"
          className={`exp-card-plus ${plus.on ? "is-on" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            plus.onClick();
          }}
        >
          <span className="exp-card-plus-sign" aria-hidden>
            {plus.on ? "✓" : "+"}
          </span>
          <span className="exp-card-plus-label">{plus.label}</span>
          <span className="exp-card-plus-price">{plus.price}</span>
        </button>
      )}
    </div>
  );
}

// ============================================================ INFO MODAL
// Uitgebreide toelichting per pakket: wát we doen en waaróm.
function PkgInfoModal({
  pkg,
  cat,
  selected,
  onToggle,
  onClose,
}: {
  pkg: Pkg;
  cat: Category;
  selected: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  const d = detailsFor(pkg, cat);
  const p = priceLabel(pkg.price);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="exp-modal-overlay" onClick={onClose}>
      <div className="exp-modal exp-modal-info" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={pkg.name}>
        <button className="exp-modal-close" onClick={onClose} aria-label="Sluiten">
          ✕
        </button>

        <div className="exp-info-art">
          <CardArt cat={cat.id} id={pkg.id} kind={pkg.kind} />
        </div>

        <div className="exp-info-body">
          <div className="exp-info-head">
            <span className="exp-info-eyebrow">
              <CategoryIcon name={cat.id} />
              {cat.label}
            </span>
            <h3>{pkg.name}</h3>
            <p className="exp-info-tag">{pkg.tagline}</p>
          </div>

          <div className="exp-info-price">
            <div className="exp-price">
              {p.pre && <span className="exp-price-pre">{p.pre}</span>}
              <span className="exp-price-main">{p.main}</span>
              {p.unit && <span className="exp-price-unit">{p.unit}</span>}
            </div>
            <div className="exp-price-sub">
              {p.sub && <span>{p.sub} · </span>}
              <span className="exp-vat">{VAT_NOTE}</span>
            </div>
          </div>

          <section className="exp-info-block">
            <h4>Wat doen we precies?</h4>
            <p>{d.what}</p>
          </section>

          <section className="exp-info-block">
            <h4>Waarom zou je dit doen?</h4>
            <p>{d.why}</p>
          </section>

          {d.includes && d.includes.length > 0 && (
            <section className="exp-info-block">
              <h4>Wat je krijgt</h4>
              <ul className="exp-info-list">
                {d.includes.map((i) => (
                  <li key={i}>
                    <Check />
                    {i}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {d.tech && d.tech.length > 0 && (
            <section className="exp-info-block">
              <h4>Technisch &amp; praktisch</h4>
              <ul className="exp-info-list is-tech">
                {d.tech.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </section>
          )}

          <section className="exp-info-block">
            <h4>Inbegrepen in dit pakket</h4>
            <ul className="exp-info-list">
              {pkg.features.map((f) => (
                <li key={f}>
                  <Check />
                  {f}
                </li>
              ))}
            </ul>
          </section>

          {cat.note && <p className="exp-info-note">{cat.note}</p>}

          <div className="exp-info-actions">
            <button
              type="button"
              className="exp-btn exp-btn-primary exp-btn-lg"
              onClick={() => {
                onToggle();
                onClose();
              }}
            >
              {selected ? "✓ Toegevoegd — verwijderen" : pkg.kind === "plan" ? "Kies dit plan" : "+ Toevoegen"}
              {!selected && <CircleArrow />}
            </button>
            <button type="button" className="exp-btn exp-btn-ghost" onClick={onClose}>
              Sluiten
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================ types
type ConfigState = {
  plans: Partial<Record<IconKey, string>>;
  addons: string[];
  qty: Record<string, number>;
  options: Record<string, string[]>;
  recommendations: Set<IconKey>;
};

// ============================================================ CATEGORY STEP
function CategoryStep({
  cat,
  state,
  stepNumber,
  stepTotal,
  onPlan,
  onAddon,
  onQty,
  onOption,
  onGoTo,
  onInfo,
  reveal,
}: {
  cat: Category;
  state: ConfigState;
  stepNumber: number;
  stepTotal: number;
  onPlan: (catId: IconKey, pkgId: string) => void;
  onAddon: (pkgId: string) => void;
  onQty: (pkgId: string, delta: number) => void;
  onOption: (optId: string, value: string, multi: boolean) => void;
  onGoTo: (catId: IconKey) => void;
  onInfo: (pkgId: string) => void;
  reveal: (el: HTMLElement | null) => void;
}) {
  const recs = state.recommendations;
  const recCats = [...recs].filter((r) => r !== cat.id).map((r) => CATEGORY_BY_ID[r]);
  const hasWebflow = cat.tools?.includes("webflow");

  const heading = HEADINGS[cat.id];
  return (
    <section className="exp-step" key={cat.id}>
      <div className="exp-step-head">
        <div className="exp-step-head-top">
          <div className="exp-section-badge">
            <CategoryIcon name={cat.id} />
          </div>
          <span className="exp-eyebrow">{cat.label}</span>
        </div>
        <h2 className="exp-step-title">{heading?.title ?? cat.label}</h2>
        <p className="exp-step-sub">{heading?.subtitle ?? cat.kicker}</p>
        <p className="exp-step-para">{cat.blurb}</p>
      </div>

      {/* Tools & platforms */}
      {cat.tools && cat.tools.length > 0 && (
        <div className="exp-tools">
          <span className="exp-tools-label">Tools &amp; platforms</span>
          <div className="exp-tools-row">
            {cat.tools.map((t) => (
              <BrandChip key={t} name={t} />
            ))}
          </div>
          {hasWebflow && <WebflowPartnerBadge />}
        </div>
      )}

      {cat.options && cat.options.length > 0 && (
        <div className="exp-options">
          {cat.options.map((opt) => {
            const picked = state.options[opt.id] ?? [];
            return (
              <div key={opt.id}>
                <div className="exp-opt-label">{opt.label}</div>
                {opt.multi ? (
                  <div className="exp-opt-chips">
                    {opt.choices.map((c) => (
                      <button
                        key={c}
                        type="button"
                        className={`exp-opt-chip ${picked.includes(c) ? "is-on" : ""}`}
                        onClick={() => onOption(opt.id, c, true)}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                ) : (
                  <div className="exp-seg">
                    {opt.choices.map((c) => (
                      <button
                        key={c}
                        type="button"
                        className={picked.includes(c) ? "is-on" : ""}
                        onClick={() => onOption(opt.id, c, false)}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {(() => {
        // Platform-afhankelijke pakketten (bv. hosting): alleen tonen wat bij
        // de gekozen toggle hoort. Zolang er niets gekozen is: alles tonen.
        const platformPick = cat.platformOption ? state.options[cat.platformOption] ?? [] : [];
        const visible = cat.packages.filter(
          (p) => !p.platforms || platformPick.length === 0 || p.platforms.some((v) => platformPick.includes(v))
        );
        const plans = visible.filter((p) => p.kind === "plan");
        const addons = visible.filter((p) => p.kind === "addon");
        const items = visible.filter((p) => p.kind === "item");
        // "Erbij"-knop: bv. hosting-plan + Meetbasis in één klik.
        const plusPkg = cat.trackingPlus ? PKG_BY_ID[cat.trackingPlus] : undefined;
        const plusOn = plusPkg ? state.plans[plusPkg.cat.id] === plusPkg.pkg.id : false;

        const renderCard = (pkg: Pkg) => {
          const selected =
            pkg.kind === "plan"
              ? state.plans[cat.id] === pkg.id
              : pkg.kind === "addon"
              ? state.addons.includes(pkg.id)
              : (state.qty[pkg.id] ?? 0) > 0;
          return (
            <PkgCard
              key={pkg.id}
              pkg={pkg}
              catId={cat.id}
              selected={selected}
              qty={state.qty[pkg.id] ?? 0}
              onToggle={() => (pkg.kind === "plan" ? onPlan(cat.id, pkg.id) : onAddon(pkg.id))}
              onQty={(d) => onQty(pkg.id, d)}
              onInfo={() => onInfo(pkg.id)}
              plus={
                plusPkg && pkg.kind === "plan"
                  ? {
                      label: `Meten erbij — ${plusPkg.pkg.name}`,
                      price: combinedPrice(pkg, plusPkg.pkg),
                      on: plusOn,
                      onClick: () => {
                        if (!selected && pkg.kind === "plan") onPlan(cat.id, pkg.id);
                        onPlan(plusPkg.cat.id, plusPkg.pkg.id);
                      },
                    }
                  : undefined
              }
              reveal={reveal}
            />
          );
        };
        // Categorieën met eigen subgroepen (bv. Funnels) bepalen zelf de
        // volgorde en de kopjes; de rest valt terug op plan/add-on/los.
        const custom = cat.groups ?? [];
        const grouped = new Set(custom.map((g) => g.id));
        const inCustom = (p: Pkg) => !!p.group && grouped.has(p.group);
        const addonsRest = addons.filter((p) => !inCustom(p));
        const itemsRest = items.filter((p) => !inCustom(p));
        const groupList = (gid: string) => visible.filter((p) => p.group === gid);

        const hasPlans = plans.length > 0;
        return (
          <>
            {custom.map((g) => {
              const list = groupList(g.id);
              if (list.length === 0) return null;
              return (
                <div className="exp-group is-extras" key={g.id}>
                  <div className="exp-group-label">
                    <span className="exp-group-kicker">{g.kicker}</span>
                    <span className="exp-group-hint">{g.hint}</span>
                  </div>
                  <div className="exp-cards">{list.map(renderCard)}</div>
                </div>
              );
            })}
            {hasPlans && (
              <div className="exp-group is-plans">
                <div className="exp-group-label">
                  <span className="exp-group-kicker">Kies je plan</span>
                  <span className="exp-group-hint">Één hoofdpakket — dit vormt de basis</span>
                </div>
                {/* Brede, horizontaal scrollbare plan-cards (bleeden van het scherm af) */}
                <div className="exp-plan-scroller">
                  <div className="exp-plan-track">{plans.map(renderCard)}</div>
                </div>
              </div>
            )}
            {addonsRest.length > 0 && (
              <div className="exp-group is-extras">
                <div className="exp-group-label">
                  <span className="exp-group-kicker">{hasPlans ? "Add-ons" : "Diensten"}</span>
                  <span className="exp-group-hint">{hasPlans ? "Breid je plan uit met extra's" : "Voeg toe wat je nodig hebt"}</span>
                </div>
                <div className="exp-cards">{addonsRest.map(renderCard)}</div>
              </div>
            )}
            {itemsRest.length > 0 && (
              <div className="exp-group is-extras">
                <div className="exp-group-label">
                  <span className="exp-group-kicker">{hasPlans || addonsRest.length ? "Losse diensten" : "Diensten"}</span>
                  <span className="exp-group-hint">Per stuk bij te bestellen</span>
                </div>
                <div className="exp-cards">{itemsRest.map(renderCard)}</div>
              </div>
            )}
          </>
        );
      })()}

      {cat.requires && (
        <div className="exp-requires">
          <span className="exp-requires-ico" aria-hidden>
            <InfoGlyph />
          </span>
          <div>
            <strong>Vereist bij deze dienst</strong>
            <p>{cat.requires}</p>
          </div>
        </div>
      )}

      {cat.note && (
        <p className="exp-note">
          {cat.note} <span className="exp-vat">· {VAT_NOTE}</span>
        </p>
      )}
      {!cat.note && <p className="exp-note"><span className="exp-vat">{VAT_NOTE}</span></p>}

      {/* Vrijwel altijd samen afgenomen — meting & funnels erbij */}
      {(() => {
        const cross = (cat.crossSell ?? [])
          .map((id) => PKG_BY_ID[id])
          .filter(Boolean) as { pkg: Pkg; cat: Category }[];
        if (cross.length === 0) return null;
        return (
          <div className="exp-cross">
            <div className="exp-cross-head">
              <span className="exp-cross-kicker">
                <Sparkle /> Bijna altijd samen afgenomen
              </span>
              <span className="exp-cross-hint">
                Zonder meten en opvolgen haal je er niet uit wat erin zit — deze pakketten horen er praktisch altijd bij.
              </span>
            </div>
            <div className="exp-cross-row">
              {cross.map(({ pkg, cat: pc }) => {
                const isSel =
                  pkg.kind === "plan"
                    ? state.plans[pc.id] === pkg.id
                    : pkg.kind === "addon"
                    ? state.addons.includes(pkg.id)
                    : (state.qty[pkg.id] ?? 0) > 0;
                const cp = priceLabel(pkg.price);
                return (
                  <div key={pkg.id} className={`exp-cross-card ${isSel ? "is-on" : ""}`}>
                    <span className="exp-cross-cat">
                      <CategoryIcon name={pc.id} />
                      {pc.label}
                    </span>
                    <strong>{pkg.name}</strong>
                    <span className="exp-cross-tag">{pkg.tagline}</span>
                    <span className="exp-cross-price">
                      {cp.pre && <em>{cp.pre} </em>}
                      {cp.main}
                      {cp.unit && <em> {cp.unit}</em>}
                    </span>
                    <div className="exp-cross-actions">
                      <button
                        type="button"
                        className="exp-cross-add"
                        onClick={() => (pkg.kind === "plan" ? onPlan(pc.id, pkg.id) : onAddon(pkg.id))}
                      >
                        {isSel ? "✓ Toegevoegd" : "+ Toevoegen"}
                      </button>
                      <button type="button" className="exp-cross-info" onClick={() => onInfo(pkg.id)} aria-label={`Info over ${pkg.name}`}>
                        <InfoGlyph />
                      </button>
                      <button type="button" className="exp-cross-goto" onClick={() => onGoTo(pc.id)}>
                        Naar {pc.label} <Arrow />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })()}

      {recCats.length > 0 && (
        <div className="exp-recs">
          <strong>
            <Sparkle /> Slim erbij →
          </strong>
          {recCats.map((rc) => (
            <button key={rc.id} type="button" className="exp-rec-btn" onClick={() => onGoTo(rc.id)}>
              <CategoryIcon name={rc.id} />
              {rc.label}
              <Arrow />
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

// ============================================================ MAIN
export function Configurator() {
  const [screen, setScreen] = useState<"intro" | "intake" | "flow" | "review" | "tools">("intro");
  const [infoPkg, setInfoPkg] = useState<string | null>(null);
  const [booted, setBooted] = useState(false);

  const [plans, setPlans] = useState<Partial<Record<IconKey, string>>>({});
  const [addons, setAddons] = useState<string[]>([]);
  const [qty, setQty] = useState<Record<string, number>>({});
  const [options, setOptions] = useState<Record<string, string[]>>({});
  const [modalOpen, setModalOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [panelOpen, setPanelOpen] = useState(false);

  // ---- intake
  const [stage, setStage] = useState<string | null>(null);
  const [goals, setGoals] = useState<string[]>([]);
  const [extraCats, setExtraCats] = useState<IconKey[]>([]);
  const [answers, setAnswers] = useState<Record<string, string[]>>({});
  const journey = useMemo(() => {
    const base = journeyFor(stage, goals);
    const set = new Set<IconKey>([...base, ...extraCats]);
    return CATEGORY_ORDER.filter((c) => set.has(c));
  }, [stage, goals, extraCats]);

  // ---- flow-volgorde: journey eerst, daarna de rest van de catalogus
  const orderedCats = useMemo(() => {
    const rest = CATEGORY_ORDER.filter((c) => !journey.includes(c));
    return [...journey, ...rest];
  }, [journey]);

  // steps: index in orderedCats (één categorie per stap)
  const [step, setStep] = useState(0);
  // richting van de laatste stap-wissel (voor de paginatransitie)
  const prevStepRef = useRef(0);
  const stepDir = step >= prevStepRef.current ? 1 : -1;
  useEffect(() => {
    prevStepRef.current = step;
  }, [step]);
  const stepTop = useRef<HTMLDivElement>(null);

  // ---- load-animatie
  useEffect(() => {
    const t = setTimeout(() => setBooted(true), 60);
    return () => clearTimeout(t);
  }, []);

  // ---- afgeleide selectie
  const selectedIds = useMemo(() => {
    const s = new Set<string>();
    Object.values(plans).forEach((id) => id && s.add(id));
    addons.forEach((id) => s.add(id));
    Object.entries(qty).forEach(([id, n]) => n > 0 && s.add(id));
    return s;
  }, [plans, addons, qty]);

  const recommendations = useMemo(
    () => recommendationsFor(selectedIds, options),
    [selectedIds, options]
  );

  const landscapeData: LandscapeData = { selectedIds, qty, recommendations };

  // ---- totalen
  const totals = useMemo(() => {
    let setup = 0;
    let monthly = 0;
    let custom = false;
    for (const id of selectedIds) {
      const entry = PKG_BY_ID[id];
      if (!entry) continue;
      const { price } = entry.pkg;
      const n = entry.pkg.kind === "item" ? qty[id] ?? 1 : 1;
      if (price.setup) setup += price.setup * n;
      if (price.monthly) monthly += price.monthly * n;
      // Jaarprijzen (bv. domein) tellen we mee als maandbedrag, afgerond.
      if (price.yearly) monthly += Math.round((price.yearly * n) / 12);
      if (price.custom) custom = true;
    }
    return { setup, monthly, custom };
  }, [selectedIds, qty]);

  const animSetup = useAnimatedNumber(totals.setup);
  const animMonthly = useAnimatedNumber(totals.monthly);

  // ---- reveal on scroll (voor kaarten binnen een stap)
  const io = useRef<IntersectionObserver | null>(null);
  const reveal = useCallback((el: HTMLElement | null) => {
    if (!el) return;
    if (!io.current) {
      io.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("is-in");
              io.current?.unobserve(e.target);
            }
          });
        },
        { threshold: 0.08 }
      );
    }
    io.current.observe(el);
  }, []);

  // ---- navigatie
  const scrollToTop = useCallback(() => {
    stepTop.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const gotoStep = useCallback(
    (idx: number) => {
      setStep(Math.max(0, Math.min(orderedCats.length - 1, idx)));
      requestAnimationFrame(() => scrollToTop());
    },
    [orderedCats.length, scrollToTop]
  );

  // spring naar de stap van een categorie (bv. vanuit "slim erbij")
  const goToCat = useCallback(
    (catId: IconKey) => {
      const idx = orderedCats.indexOf(catId);
      if (idx >= 0) {
        setScreen("flow");
        setPanelOpen(false);
        gotoStep(idx);
      }
    },
    [orderedCats, gotoStep]
  );

  const openReview = useCallback(() => {
    setDrawerOpen(false);
    setPanelOpen(false);
    setScreen("review");
    if (typeof window !== "undefined") window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const startIntake = () => {
    setScreen("intake");
  };

  // Direct naar één categorie springen (intro-quicklinks), zonder intake.
  // Vanuit de intro direct naar één categorie. Belangrijk: indexeren op
  // orderedCats (journey eerst), niet op CATEGORY_ORDER — anders landt de
  // knop op een andere stap zodra er een journey actief is.
  const jumpTo = (catId: IconKey) => {
    const idx = orderedCats.indexOf(catId);
    setScreen("flow");
    setStep(Math.max(0, idx));
    requestAnimationFrame(() => scrollToTop());
  };

  const onIntakeDone = (r: IntakeResult) => {
    setStage(r.stage);
    setGoals(r.goals);
    setExtraCats(r.extraCats);
    setAnswers(r.answers);
    setScreen("flow");
    setStep(0);
    requestAnimationFrame(() => scrollToTop());
  };

  // Opnieuw beginnen: wis alle keuzes + intake-antwoorden.
  const resetAll = () => {
    setPlans({});
    setAddons([]);
    setQty({});
    setOptions({});
    setStage(null);
    setGoals([]);
    setExtraCats([]);
    setAnswers({});
    setStep(0);
    setDrawerOpen(false);
    setPanelOpen(false);
    setModalOpen(false);
    setScreen("intro");
    if (typeof window !== "undefined") window.scrollTo({ top: 0 });
  };

  const confirmReset = () => {
    if (selectedIds.size === 0 || (typeof window !== "undefined" && window.confirm("Opnieuw beginnen? Je huidige selectie wordt gewist."))) {
      resetAll();
    }
  };

  // ---- selectie-handlers
  const onPlan = (catId: IconKey, pkgId: string) =>
    setPlans((p) => ({ ...p, [catId]: p[catId] === pkgId ? undefined : pkgId }));
  const onAddon = (pkgId: string) =>
    setAddons((a) => (a.includes(pkgId) ? a.filter((x) => x !== pkgId) : [...a, pkgId]));
  const onQtyChange = (pkgId: string, delta: number) =>
    setQty((q) => {
      const next = Math.max(0, (q[pkgId] ?? 0) + delta);
      const copy = { ...q };
      if (next === 0) delete copy[pkgId];
      else copy[pkgId] = next;
      return copy;
    });
  const onOption = (optId: string, value: string, multi: boolean) =>
    setOptions((o) => {
      const cur = o[optId] ?? [];
      if (multi) {
        return { ...o, [optId]: cur.includes(value) ? cur.filter((v) => v !== value) : [...cur, value] };
      }
      return { ...o, [optId]: cur[0] === value ? [] : [value] };
    });

  const removeSelection = (id: string) => {
    const entry = PKG_BY_ID[id];
    if (!entry) return;
    const { pkg, cat } = entry;
    if (pkg.kind === "plan") setPlans((p) => ({ ...p, [cat.id]: undefined }));
    else if (pkg.kind === "addon") setAddons((a) => a.filter((x) => x !== id));
    else onQtyChange(id, -(qty[id] ?? 1));
  };

  const state: ConfigState = { plans, addons, qty, options, recommendations };

  const countFor = (cat: Category) =>
    cat.packages.filter((pkg) =>
      pkg.kind === "plan"
        ? plans[cat.id] === pkg.id
        : pkg.kind === "addon"
        ? addons.includes(pkg.id)
        : (qty[pkg.id] ?? 0) > 0
    ).length;

  const totalCount = selectedIds.size;
  const stepTotal = orderedCats.length; // één categorie per stap
  const currentCat = CATEGORY_BY_ID[orderedCats[step]] ?? null;

  // ---- deep links: elke stap heeft een eigen URL (?stap=hosting)
  const urlBooted = useRef(false);
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    const stap = p.get("stap");
    const scherm = p.get("scherm");
    if (stap) {
      const idx = orderedCats.indexOf(stap as IconKey);
      if (idx >= 0) {
        setScreen("flow");
        setStep(idx);
      }
    } else if (scherm === "intake") setScreen("intake");
    else if (scherm === "overzicht") setScreen("review");
    else if (scherm === "tools") setScreen("tools");
    urlBooted.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!urlBooted.current) return;
    const p = new URLSearchParams(window.location.search);
    p.delete("stap");
    p.delete("scherm");
    if (screen === "flow" && currentCat) p.set("stap", currentCat.id);
    else if (screen === "intake") p.set("scherm", "intake");
    else if (screen === "review") p.set("scherm", "overzicht");
    else if (screen === "tools") p.set("scherm", "tools");
    const q = p.toString();
    window.history.replaceState(null, "", q ? `?${q}` : window.location.pathname);
  }, [screen, currentCat]);

  // ---- marquee-data (cinematisch intro)
  const marqueeTop = useMemo(
    () =>
      (Object.keys(BRANDS) as BrandKey[]).map((k) => ({
        key: k,
        node: (
          <>
            <BrandIcon name={k} size={16} />
            {BRANDS[k].name}
          </>
        ),
      })),
    []
  );
  const marqueeBottom = useMemo(() => {
    const names: { key: string; node: React.ReactNode }[] = [];
    for (const cat of CATALOG) {
      for (const pkg of cat.packages) {
        names.push({
          key: pkg.id,
          node: (
            <>
              <span className="exp-marquee-dot" />
              {pkg.name}
            </>
          ),
        });
      }
    }
    return names;
  }, []);

  // ============================================================ TOOLS
  if (screen === "tools") {
    return (
      <div className="exp-flow-root">
        <div className="exp-canvas-bg" />
        <TechField />
        <header className="exp-topbar">
          <button className="exp-logo-btn" onClick={() => setScreen("intro")} aria-label="Terug naar start">
            <M7Logo height={24} />
          </button>
          <a className="exp-btn exp-btn-ghost exp-btn-sm" href={INTRO_MAILTO}>
            Kennismaken
          </a>
        </header>
        <div className="exp-shell">
          <ToolsCloud onBack={() => setScreen("intro")} />
        </div>
      </div>
    );
  }

  // ============================================================ INTRO
  if (screen === "intro") {
    return (
      <>
        <Starfield />
        <div className="exp-bg-gradients" />
        <div className="exp-grid-overlay" />
        <div className="exp-cinema-bg" />

        <div className={`exp-intro ${booted ? "is-booted" : ""}`}>
          <header className="exp-topbar exp-intro-top">
            <M7Logo height={26} />
            <a className="exp-btn exp-btn-ghost exp-btn-sm" href={INTRO_MAILTO}>
              Plan een kennismaking
            </a>
          </header>

          <div className="exp-intro-center">
            <span className="exp-eyebrow exp-intro-eyebrow">
              <Sparkle /> M7 — online experience
            </span>
            <h1 className="exp-intro-title">Grow your brand with M7</h1>
            <p className="exp-intro-sub">
              Vergeet tig losse offertes. Stel zelf je dienstverlening samen — van branding,
              websites en webshops tot apps, marketing, SEO/AEO, funnels, tracking en support.
              Wij zetten een logisch pad uit; jij bepaalt de scope.
            </p>
            <div className="exp-intro-cta">
              <button className="exp-btn exp-btn-primary exp-btn-lg" onClick={startIntake}>
                Start je groei met M7
                <CircleArrow />
              </button>
            </div>

            {/* Quick-links naar de kern-abonnementen (echte M7-brandmarks) */}
            <div className="exp-quicklinks">
              {([
                ["hosting", "/brand/m7-webhosting.svg", "M7 Webhosting"],
                ["support", "/brand/m7-webplans.svg", "M7 Webplans"],
                ["organic", "/brand/m7-content.svg", "M7 Content"],
                ["paid", "/brand/m7-growth.svg", "M7 Growth"], // → Paid Ads
              ] as [IconKey, string, string][]).map(([cat, src, label]) => (
                <button key={cat} className="exp-quicklink" onClick={() => jumpTo(cat)}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="exp-quicklink-mark" src={src} alt="" aria-hidden />
                  <span>{label}</span>
                </button>
              ))}
            </div>

            <button className="exp-intro-tools" onClick={() => setScreen("tools")}>
              Bekijk onze volledige toolstack ({TOOLS.length} tools) <Arrow />
            </button>

            <p className="exp-intro-note">
              Volledig vrijblijvend · indicatieve vanafprijzen · in een paar minuten samengesteld
            </p>
          </div>

          {/* Voorbij slidende diensten in donkere gradient */}
          <div className="exp-intro-marquees">
            <Marquee items={marqueeTop} direction="right" />
            <Marquee items={marqueeBottom} direction="left" />
          </div>
        </div>
      </>
    );
  }

  // ============================================================ INTAKE
  if (screen === "intake") {
    return (
      <>
        <Starfield />
        <div className="exp-bg-gradients" />
        <Intake onDone={onIntakeDone} onExit={() => setScreen("intro")} />
      </>
    );
  }

  // ============================================================ FLOW
  return (
    <div className="exp-flow-root">
      <div className="exp-canvas-bg" />
      <TechField />

      {/* -------- TOPBAR -------- */}
      <header className="exp-topbar is-sticky">
        <button className="exp-topbar-logo" onClick={() => setScreen("intro")} aria-label="Naar start">
          <M7Logo height={24} />
        </button>
        <div className="exp-progress">
          <div className="exp-progress-bar">
            <span style={{ width: `${(step / (stepTotal - 1)) * 100}%` }} />
          </div>
          <span className="exp-progress-label">
            Stap {step + 1} / {stepTotal}
          </span>
        </div>
        <div className="exp-topbar-actions">
          <button className="exp-btn exp-btn-ghost exp-btn-sm exp-btn-reset" onClick={confirmReset} title="Opnieuw beginnen">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M4 4v6h6M20 20v-6h-6" /><path d="M20 10a8 8 0 0 0-14.3-3.7L4 8M4 14a8 8 0 0 0 14.3 3.7L20 16" /></svg>
            <span className="exp-reset-txt">Opnieuw</span>
          </button>
          <a className="exp-btn exp-btn-ghost exp-btn-sm" href={INTRO_MAILTO}>
            Kennismaken
          </a>
        </div>
      </header>

      {/* -------- STEP-RAIL -------- */}
      <nav className="exp-rail" aria-label="Stappen">
        <button className="exp-tab" onClick={() => setScreen("intake")}>
          <span className="exp-tab-step">✦</span>
          Intake
        </button>
        {orderedCats.map((cid, i) => {
          const cat = CATEGORY_BY_ID[cid];
          const c = countFor(cat);
          const rec = recommendations.has(cid);
          const inJourney = journey.includes(cid);
          return (
            <button
              key={cid}
              className={`exp-tab ${step === i ? "is-active" : ""} ${inJourney && c === 0 ? "is-journey" : ""}`}
              onClick={() => gotoStep(i)}
            >
              <span className="exp-tab-step">{i + 1}</span>
              <CategoryIcon name={cid} className="exp-tab-icon" />
              {cat.label}
              {c > 0 && <span className="exp-tab-count">{c}</span>}
              {rec && c === 0 && <span className="exp-tab-rec" aria-label="aanbevolen" />}
            </button>
          );
        })}
      </nav>

      {/* -------- STEP CONTENT -------- */}
      <div className="exp-shell">
        <div ref={stepTop} className="exp-step-anchor" />
        <div className="exp-step-wrap" key={step} data-dir={stepDir}>
          {currentCat && (
            <CategoryStep
              cat={currentCat}
              state={state}
              stepNumber={step + 1}
              stepTotal={stepTotal}
              onPlan={onPlan}
              onAddon={onAddon}
              onQty={onQtyChange}
              onOption={onOption}
              onGoTo={goToCat}
              onInfo={setInfoPkg}
              reveal={reveal}
            />
          )}
        </div>

        {/* -------- STEP-NAV -------- */}
        <div className="exp-stepnav">
          <button
            className="exp-btn exp-btn-ghost"
            onClick={() => (step === 0 ? setScreen("intake") : gotoStep(step - 1))}
          >
            <ArrowLeft /> {step === 0 ? "Intake" : "Vorige"}
          </button>

          {step < stepTotal - 1 ? (
            <button className="exp-btn exp-btn-primary" onClick={() => gotoStep(step + 1)}>
              Volgende
              <CircleArrow />
            </button>
          ) : (
            <button
              className="exp-btn exp-btn-primary"
              onClick={openReview}
              disabled={totalCount === 0}
            >
              Bekijk &amp; vraag aan <CircleArrow />
            </button>
          )}
        </div>
      </div>

      {/* -------- ONDERBALK / UITKLAPBAAR OVERZICHT -------- */}
      <div className={`exp-bar ${drawerOpen ? "is-open" : ""}`}>
        {drawerOpen && (
          <div className="exp-drawer">
            <div className="exp-drawer-head">
              <strong>Jouw samenstelling</strong>
              <button className="exp-drawer-close" onClick={() => setDrawerOpen(false)} aria-label="Inklappen">
                <Chevron />
              </button>
            </div>
            {totalCount === 0 ? (
              <p className="exp-drawer-empty">Nog niks gekozen — voeg diensten toe terwijl je door de stappen loopt.</p>
            ) : (
              <div className="exp-drawer-list">
                {CATEGORY_ORDER.filter((cid) =>
                  [...selectedIds].some((id) => PKG_BY_ID[id]?.cat.id === cid)
                ).map((cid) => {
                  const cat = CATEGORY_BY_ID[cid];
                  const rows = [...selectedIds]
                    .filter((id) => PKG_BY_ID[id]?.cat.id === cid)
                    .map((id) => PKG_BY_ID[id]!.pkg);
                  return (
                    <div key={cid} className="exp-drawer-group">
                      <button className="exp-drawer-group-head" onClick={() => goToCat(cid)}>
                        <CategoryIcon name={cid} />
                        {cat.label}
                        <Arrow />
                      </button>
                      {rows.map((pkg) => {
                        const n = pkg.kind === "item" ? qty[pkg.id] ?? 1 : 1;
                        const p = priceLabel(pkg.price);
                        return (
                          <div className="exp-drawer-row" key={pkg.id}>
                            <span className="n">
                              {pkg.name}
                              {n > 1 ? ` · ${n}×` : ""}
                            </span>
                            <span className="p">
                              {p.main} <small>{p.unit}</small>
                            </span>
                            <button className="exp-drawer-del" onClick={() => removeSelection(pkg.id)} aria-label="Verwijderen">
                              ×
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        <div className="exp-bar-main">
          <button className="exp-bar-toggle" onClick={() => setDrawerOpen((o) => !o)}>
            <Chevron up={drawerOpen} />
            <span className="exp-bar-count">
              {totalCount} {totalCount === 1 ? "dienst" : "diensten"}
            </span>
          </button>
          <div className="exp-bar-totals">
            <div className="exp-bar-total">
              <div className="k">Eenmalig vanaf</div>
              <div className="v">
                {formatEuro(animSetup)}
                {totals.custom && <small> + maatwerk</small>}
              </div>
            </div>
            <div className="exp-bar-total">
              <div className="k">Doorlopend</div>
              <div className="v">
                {formatEuro(animMonthly)} <small>/mnd</small>
              </div>
            </div>
            <span className="exp-bar-vat exp-vat">{VAT_NOTE}</span>
          </div>
          <button
            className="exp-btn exp-btn-primary exp-btn-sm"
            onClick={openReview}
            disabled={totalCount === 0}
          >
            Vraag aan <CircleArrow />
          </button>
        </div>
      </div>

      {/* -------- ZIJPANEEL: MERKLANDSCHAP -------- */}
      <button
        className={`exp-panel-tab ${panelOpen ? "is-open" : ""}`}
        onClick={() => setPanelOpen((o) => !o)}
        aria-label="Merklandschap"
      >
        <span className="exp-panel-tab-icon">
          {panelOpen ? <Arrow /> : <Sparkle />}
        </span>
        <span className="exp-panel-tab-txt">Merk&shy;landschap</span>
        {totalCount > 0 && <span className="exp-panel-tab-count">{totalCount}</span>}
      </button>

      <aside className={`exp-sidepanel ${panelOpen ? "is-open" : ""}`} aria-hidden={!panelOpen}>
        <div className="exp-sidepanel-head">
          <div>
            <span className="exp-eyebrow"><Sparkle /> Jouw merklandschap</span>
            <p>Je selectie + logische upsells. Klik een <b>+</b> om die stap te openen.</p>
          </div>
          <button className="exp-drawer-close" onClick={() => setPanelOpen(false)} aria-label="Sluiten">×</button>
        </div>
        <Landscape data={landscapeData} onGoToCat={goToCat} variant="panel" />
        <div className="exp-sidepanel-foot">
          <div className="exp-sidepanel-tot">
            <span>{formatEuro(totals.setup)}{totals.custom ? " +" : ""}</span>
            <small>eenmalig</small>
          </div>
          <button className="exp-btn exp-btn-primary exp-btn-sm" onClick={openReview} disabled={totalCount === 0}>
            Vraag aan <CircleArrow />
          </button>
        </div>
      </aside>

      {screen === "review" && (
        <ReviewScreen
          landscapeData={landscapeData}
          totals={totals}
          totalCount={totalCount}
          onGoToCat={goToCat}
          onBack={() => setScreen("flow")}
          onRequest={() => setModalOpen(true)}
          onReset={confirmReset}
        />
      )}

      {modalOpen && (
        <QuoteModal
          selectedIds={selectedIds}
          qty={qty}
          options={options}
          totals={totals}
          stage={stage}
          goals={goals}
          answers={answers}
          onClose={() => setModalOpen(false)}
        />
      )}

      {infoPkg && PKG_BY_ID[infoPkg] && (
        <PkgInfoModal
          pkg={PKG_BY_ID[infoPkg].pkg}
          cat={PKG_BY_ID[infoPkg].cat}
          selected={
            PKG_BY_ID[infoPkg].pkg.kind === "plan"
              ? state.plans[PKG_BY_ID[infoPkg].cat.id] === infoPkg
              : PKG_BY_ID[infoPkg].pkg.kind === "addon"
              ? state.addons.includes(infoPkg)
              : (state.qty[infoPkg] ?? 0) > 0
          }
          onToggle={() => {
            const { pkg, cat } = PKG_BY_ID[infoPkg];
            if (pkg.kind === "plan") onPlan(cat.id, pkg.id);
            else if (pkg.kind === "addon") onAddon(pkg.id);
            else onQtyChange(pkg.id, (state.qty[pkg.id] ?? 0) > 0 ? -(state.qty[pkg.id] ?? 0) : 1);
          }}
          onClose={() => setInfoPkg(null)}
        />
      )}
    </div>
  );
}

// ============================================================ REVIEW (full-screen)
function ReviewScreen({
  landscapeData,
  totals,
  totalCount,
  onGoToCat,
  onBack,
  onRequest,
  onReset,
}: {
  landscapeData: LandscapeData;
  totals: { setup: number; monthly: number; custom: boolean };
  totalCount: number;
  onGoToCat: (cat: IconKey) => void;
  onBack: () => void;
  onRequest: () => void;
  onReset: () => void;
}) {
  const upsells = CATEGORY_ORDER.filter(
    (c) =>
      landscapeData.recommendations.has(c) &&
      ![...landscapeData.selectedIds].some((id) => PKG_BY_ID[id]?.cat.id === c)
  );
  return (
    <div className="exp-review">
      <div className="exp-review-inner">
        <header className="exp-review-head">
          <span className="exp-eyebrow"><Sparkle /> Jouw geconfigureerde merklandschap</span>
          <h2>Dit is jouw dienstenstructuur</h2>
          <p>
            Een overzicht van alles wat je hebt samengesteld. Mis je nog iets? Klik een{" "}
            <b>+</b> om die stap te openen. Helemaal goed? Vraag het vrijblijvend aan.
          </p>
          <div className="exp-review-stats">
            <div>
              <strong>{totalCount}</strong>
              <small>{totalCount === 1 ? "dienst" : "diensten"}</small>
            </div>
            <div>
              <strong>{formatEuro(totals.setup)}{totals.custom ? " +" : ""}</strong>
              <small>eenmalig vanaf</small>
            </div>
            <div>
              <strong>{formatEuro(totals.monthly)}</strong>
              <small>per maand</small>
            </div>
          </div>
          <p className="exp-review-vat exp-vat">{VAT_NOTE} · indicatieve vanafprijzen</p>
        </header>

        <Landscape data={landscapeData} onGoToCat={onGoToCat} variant="full" />

        {upsells.length > 0 && (
          <p className="exp-review-upsellnote">
            Vaak logisch hierbij:{" "}
            {upsells.map((c, i) => (
              <span key={c}>
                <button className="exp-review-upsell" onClick={() => onGoToCat(c)}>
                  + {CATEGORY_BY_ID[c].label}
                </button>
                {i < upsells.length - 1 ? " " : ""}
              </span>
            ))}
          </p>
        )}

        <div className="exp-review-cta">
          <button className="exp-btn exp-btn-ghost" onClick={onBack}>
            <ArrowLeft /> Terug naar stappen
          </button>
          <button className="exp-btn exp-btn-primary exp-btn-lg" onClick={onRequest} disabled={totalCount === 0}>
            Vraag dit aan <CircleArrow />
          </button>
        </div>
        <button className="exp-review-reset" onClick={onReset}>Opnieuw beginnen</button>
      </div>
    </div>
  );
}

// ============================================================ MODAL
function QuoteModal({
  selectedIds,
  qty,
  options,
  totals,
  stage,
  goals,
  answers,
  onClose,
}: {
  selectedIds: Set<string>;
  qty: Record<string, number>;
  options: Record<string, string[]>;
  totals: { setup: number; monthly: number; custom: boolean };
  stage: string | null;
  goals: string[];
  answers: Record<string, string[]>;
  onClose: () => void;
}) {
  const [copied, setCopied] = useState(false);
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const groups = useMemo(() => {
    const byCat = new Map<IconKey, { label: string; rows: { id: string; name: string; n: number; price: Pkg["price"] }[] }>();
    for (const id of selectedIds) {
      const entry = PKG_BY_ID[id];
      if (!entry) continue;
      const { pkg, cat } = entry;
      if (!byCat.has(cat.id)) byCat.set(cat.id, { label: cat.label, rows: [] });
      const n = pkg.kind === "item" ? qty[pkg.id] ?? 1 : 1;
      byCat.get(cat.id)!.rows.push({ id: pkg.id, name: pkg.name, n, price: pkg.price });
    }
    return CATEGORY_ORDER.filter((c) => byCat.has(c)).map((c) => ({ id: c, ...byCat.get(c)! }));
  }, [selectedIds, qty]);

  const stageLabel = STAGES.find((s) => s.id === stage)?.label;
  const goalLabels = goals.map((g) => GOALS.find((x) => x.id === g)?.label).filter(Boolean) as string[];
  const answerRows = useMemo(() => describeAnswers(answers), [answers]);

  const chosenOptions = useMemo(
    () =>
      CATALOG.flatMap((cat) =>
        (cat.options ?? [])
          .map((opt) => ({ label: opt.label, values: options[opt.id] ?? [] }))
          .filter((o) => o.values.length > 0)
      ),
    [options]
  );

  const summaryText = useMemo(() => {
    const lines = ["M7 — Samengestelde dienstverlening", ""];
    if (stageLabel) lines.push(`Startpunt: ${stageLabel}`);
    if (goalLabels.length) lines.push(`Doelen: ${goalLabels.join(", ")}`);
    if (stageLabel || goalLabels.length) lines.push("");
    groups.forEach((g) => {
      lines.push(`[${g.label}]`);
      g.rows.forEach((r) => {
        const p = priceLabel(r.price);
        lines.push(`  • ${r.name}${r.n > 1 ? ` (${r.n}×)` : ""} — ${p.main} ${p.unit}`.trim());
      });
    });
    if (answerRows.length) {
      lines.push("", "Intake-antwoorden:");
      answerRows.forEach((a) => lines.push(`• ${a.label} — ${a.values.join(", ")}`));
    }
    if (chosenOptions.length) {
      lines.push("", "Voorkeuren:");
      chosenOptions.forEach((o) => lines.push(`• ${o.label}: ${o.values.join(", ")}`));
    }
    lines.push(
      "",
      `Totaal eenmalig (vanaf): ${formatEuro(totals.setup)}${totals.custom ? " + maatwerk" : ""}`,
      `Totaal doorlopend: ${formatEuro(totals.monthly)} /mnd`,
      "",
      "(Indicatieve vanafprijzen — graag vrijblijvend afstemmen.)"
    );
    return lines.join("\n");
  }, [groups, chosenOptions, answerRows, totals, stageLabel, goalLabels]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard niet beschikbaar */
    }
  };

  const submit = () => {
    const body = encodeURIComponent(
      `${message ? message + "\n\n" : ""}${summaryText}\n\n— ${name || "?"}${company ? `, ${company}` : ""}`
    );
    const subject = encodeURIComponent("Offerte-aanvraag via online experience");
    window.location.href = `mailto:hello@m7branding.com?subject=${subject}&body=${body}${
      email ? `&cc=${encodeURIComponent(email)}` : ""
    }`;
  };

  return (
    <div className="exp-modal-overlay" onClick={onClose}>
      <div className="exp-modal exp-modal-split" onClick={(e) => e.stopPropagation()}>
        <button className="exp-modal-close" onClick={onClose} aria-label="Sluiten">
          ×
        </button>
        <div className="exp-modal-main">
        <h3>Jouw dienstverlening</h3>
        <p style={{ color: "var(--exp-muted)", fontSize: 13.5, marginTop: 6 }}>
          Controleer je samenstelling en stuur 'm door — we werken 'm vrijblijvend uit tot een
          concrete offerte, of plannen eerst een kennismaking.
        </p>

        {(stageLabel || goalLabels.length > 0) && (
          <div className="exp-intake-summary">
            {stageLabel && <span className="exp-chip">Start · {stageLabel}</span>}
            {goalLabels.map((g) => (
              <span className="exp-chip" key={g}>
                Doel · {g}
              </span>
            ))}
          </div>
        )}

        <div className="exp-summary-list">
          {groups.map((g) => (
            <div key={g.id}>
              <div className="exp-summary-group">
                <CategoryIcon name={g.id} />
                {g.label}
              </div>
              {g.rows.map((r) => {
                const p = priceLabel(r.price);
                return (
                  <div className="exp-summary-row" key={r.id}>
                    <div className="n">
                      {r.name}
                      {r.n > 1 ? ` · ${r.n}×` : ""}
                    </div>
                    <div className="p">
                      {p.main} <span style={{ color: "var(--exp-faint)" }}>{p.unit}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
          {chosenOptions.map((o) => (
            <div className="exp-summary-row" key={o.label}>
              <div className="n">{o.label}</div>
              <div className="p">{o.values.join(", ")}</div>
            </div>
          ))}
        </div>

        {answerRows.length > 0 && (
          <div className="exp-answers">
            <div className="exp-answers-head">Jouw intake-antwoorden</div>
            {answerRows.map((a) => (
              <div className="exp-answers-row" key={a.label}>
                <span className="q">{a.label}</span>
                <span className="a">{a.values.join(", ")}</span>
              </div>
            ))}
          </div>
        )}

        <div className="exp-summary-tot">
          <span>Totaal eenmalig (vanaf)</span>
          <span>
            {formatEuro(totals.setup)}
            {totals.custom && " + maatwerk"}
          </span>
        </div>
        <div className="exp-summary-tot" style={{ paddingTop: 4 }}>
          <span>Totaal doorlopend</span>
          <span>{formatEuro(totals.monthly)} /mnd</span>
        </div>
        <p className="exp-vat" style={{ marginTop: 6 }}>{VAT_NOTE} · indicatieve vanafprijzen</p>

        <div className="exp-field">
          <label>Naam</label>
          <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Je naam" />
        </div>
        <div className="exp-field">
          <label>Bedrijf</label>
          <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Bedrijfsnaam" />
        </div>
        <div className="exp-field">
          <label>E-mail</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="jij@bedrijf.nl" type="email" />
        </div>
        <div className="exp-field">
          <label>Bericht (optioneel)</label>
          <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows={3} placeholder="Waar kunnen we mee helpen?" />
        </div>

        <div className="exp-modal-actions">
          <button className="exp-btn exp-btn-primary" style={{ flex: 1 }} onClick={submit}>
            Verstuur aanvraag <CircleArrow />
          </button>
          <button className="exp-btn exp-btn-ghost" onClick={copy}>
            {copied ? "Gekopieerd ✓" : "Kopieer"}
          </button>
        </div>
        <p className="exp-note" style={{ textAlign: "center", marginTop: 14 }}>
          Liever eerst overleggen?{" "}
          <a href={INTRO_MAILTO} style={{ color: "var(--exp-a2)" }}>
            Plan een vrijblijvend kennismakingsgesprek
          </a>
          . Alle bedragen zijn indicatieve vanafprijzen.
        </p>
        </div>

        <aside className="exp-modal-aside">
          <div className="exp-modal-aside-overlay" />
          <div className="exp-modal-aside-content">
            <M7Logo height={26} />
            <h4>Klaar om te groeien met M7?</h4>
            <p>
              We werken je samenstelling vrijblijvend uit tot een concrete offerte — of
              plannen eerst een kennismaking. Geen verplichtingen.
            </p>
            <ul>
              <li><Check /> Reactie binnen 1 werkdag</li>
              <li><Check /> Vaste aanspreekpartner</li>
              <li><Check /> Transparante vanafprijzen</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
