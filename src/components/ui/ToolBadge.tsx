import * as icons from "simple-icons";
import { TOOLS, TOOL_CATEGORY_LABEL, type ToolCategory, type ToolSlug } from "@/content/tools";
import type { Locale } from "@/content/types";

type SI = { path: string; hex: string; title: string };

/** Merklogo van een tool (simple-icons) of een strak monogram als fallback. */
export function ToolIcon({ slug, size = 22 }: { slug: ToolSlug; size?: number }) {
  const tool = TOOLS[slug];
  const icon = tool.si ? (icons as unknown as Record<string, SI>)[tool.si] : undefined;
  if (icon) {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={icon.path} />
      </svg>
    );
  }
  const initials = tool.name
    .replace(/[^A-Za-z0-9 ]/g, "")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2);
  return (
    <span className="tool-mono" style={{ width: size, height: size, fontSize: size * 0.42 }} aria-hidden="true">
      {initials}
    </span>
  );
}

/** Brandkleur voor de hover-glow (donkere merken krijgen wit). */
export function toolColor(slug: ToolSlug): string {
  const tool = TOOLS[slug];
  const icon = tool.si ? (icons as unknown as Record<string, SI>)[tool.si] : undefined;
  const hex = (icon?.hex || tool.color || "FFFFFF").toUpperCase();
  const v = parseInt(hex, 16);
  const lum = 0.2126 * ((v >> 16) & 255) + 0.7152 * ((v >> 8) & 255) + 0.0722 * (v & 255);
  return lum < 60 ? "#FFFFFF" : `#${hex}`;
}

export function ToolBadge({ slug }: { slug: ToolSlug }) {
  const tool = TOOLS[slug];
  return (
    <span className="tool" style={{ ["--tc" as string]: toolColor(slug) }} title={tool.name}>
      <span className="tool__icon">
        <ToolIcon slug={slug} />
      </span>
      <span className="tool__name">{tool.name}</span>
    </span>
  );
}

/** Tools gegroepeerd per categorie. */
export function ToolGroups({ slugs, locale }: { slugs: readonly ToolSlug[]; locale: Locale }) {
  const groups = new Map<ToolCategory, ToolSlug[]>();
  for (const s of Array.from(new Set(slugs))) {
    const c = TOOLS[s].category;
    groups.set(c, [...(groups.get(c) || []), s]);
  }
  return (
    <div className="tool-groups">
      {Array.from(groups.entries()).map(([cat, list]) => (
        <div key={cat} className="tool-group" data-reveal="up">
          <p className="tool-group__label">{TOOL_CATEGORY_LABEL[cat][locale]}</p>
          <div className="tool-group__list">
            {list.map((s) => (
              <ToolBadge key={s} slug={s} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
