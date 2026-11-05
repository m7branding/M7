import type { Locale } from "@/content/types";
import { tr } from "@/lib/i18n";
import type { CaseBlock } from "@/lib/story";

/** Eén regel in "In dit project": het anker op de pagina en de kop. `part`: opening van een volgend deel. */
export type TocItem = { id: string; label: string; part?: boolean };

/** Kop als platte tekst: [[slug|label]] → label, <br> → spatie. */
const plain = (s: string) =>
  s
    .replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, a: string, b?: string) => b ?? a)
    .replace(/<br\s*\/?>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

/**
 * De hoofdstukken van een case-verhaal met een kop (tekst, beeld naast tekst, tijdlijn/checklist),
 * met dezelfde ankers als CaseStory: `${idPrefix}story-${index}`.
 */
export function storyToc(blocks: CaseBlock[], locale: Locale, idPrefix = ""): TocItem[] {
  return blocks.flatMap((b, i): TocItem[] => {
    const h = b.type === "text" || b.type === "split" ? b.h : b.type === "timeline" ? b.title : undefined;
    const label = plain(tr(h, locale));
    return label ? [{ id: `${idPrefix}story-${i}`, label }] : [];
  });
}
