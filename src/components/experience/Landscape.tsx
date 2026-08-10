// ============================================================
// M7 — "Merklandschap": een skeleton / flow-chart van je selectie.
// Toont gekozen categorieën als knopen (met hun items) en de logische
// upsells als gestippelde (+)-knopen die in beeld blijven. Klikken op een
// knoop of (+) springt naar die stap. Gebruikt in het zijpaneel én in de
// full-screen review vóór de aanvraag.
// ============================================================

import {
  CATEGORY_BY_ID,
  CATEGORY_ORDER,
  PKG_BY_ID,
  type IconKey,
} from "@/lib/catalog";
import { CategoryIcon } from "./CategoryIcon";

export type LandscapeData = {
  selectedIds: Set<string>;
  qty: Record<string, number>;
  recommendations: Set<IconKey>;
};

function itemsForCat(cat: IconKey, selectedIds: Set<string>) {
  return [...selectedIds]
    .map((id) => PKG_BY_ID[id])
    .filter((e) => e && e.cat.id === cat)
    .map((e) => e!.pkg);
}

export function Landscape({
  data,
  onGoToCat,
  variant = "panel",
}: {
  data: LandscapeData;
  onGoToCat: (cat: IconKey) => void;
  variant?: "panel" | "full";
}) {
  const { selectedIds, qty, recommendations } = data;

  const selectedCats = CATEGORY_ORDER.filter((c) =>
    [...selectedIds].some((id) => PKG_BY_ID[id]?.cat.id === c)
  );
  const upsellCats = CATEGORY_ORDER.filter(
    (c) => recommendations.has(c) && !selectedCats.includes(c)
  );

  const empty = selectedCats.length === 0;

  return (
    <div className={`exp-landscape ${variant === "full" ? "is-full" : ""}`}>
      <div className="exp-landscape-track">
        {empty && (
          <>
            {[0, 1, 2].map((i) => (
              <div key={i} className="exp-lnode is-skeleton">
                <span className="exp-lnode-dot" />
                <div className="exp-lnode-body">
                  <span className="exp-skel-line" style={{ width: `${60 - i * 10}%` }} />
                  <span className="exp-skel-line sm" style={{ width: `${40 - i * 6}%` }} />
                </div>
              </div>
            ))}
            <p className="exp-landscape-hint">
              Nog niks gekozen — je selectie verschijnt hier als een groeiend merklandschap.
            </p>
          </>
        )}

        {selectedCats.map((cid) => {
          const cat = CATEGORY_BY_ID[cid];
          const items = itemsForCat(cid, selectedIds);
          return (
            <div key={cid} className="exp-lnode is-selected">
              <button className="exp-lnode-head" onClick={() => onGoToCat(cid)}>
                <span className="exp-lnode-badge">
                  <CategoryIcon name={cid} />
                </span>
                <span className="exp-lnode-title">{cat.label}</span>
                <span className="exp-lnode-count">{items.length}</span>
              </button>
              <div className="exp-lnode-items">
                {items.map((pkg) => {
                  const n = pkg.kind === "item" ? qty[pkg.id] ?? 1 : 1;
                  return (
                    <span key={pkg.id} className="exp-lchip">
                      {pkg.name}
                      {n > 1 ? ` ·${n}×` : ""}
                    </span>
                  );
                })}
              </div>
            </div>
          );
        })}

        {upsellCats.length > 0 && (
          <div className="exp-landscape-upsells">
            <span className="exp-landscape-upsell-label">Logische upsells</span>
            <div className="exp-landscape-upsell-row">
              {upsellCats.map((cid) => (
                <button key={cid} className="exp-lnode-add" onClick={() => onGoToCat(cid)}>
                  <span className="exp-lnode-plus">+</span>
                  <CategoryIcon name={cid} />
                  {CATEGORY_BY_ID[cid].label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
