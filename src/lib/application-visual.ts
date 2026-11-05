import { APP_VISUALS } from "@/content/application-visuals";
import type { ServiceSlug } from "@/content/registry";
import type { Application, Case } from "@/content/types";
import { getCase } from "@/lib/content";

/** Het beeld in de hero van een toepassingspagina (zie content/application-visuals.ts). */
export type AppVisual =
  | { kind: "show"; service: ServiceSlug }
  | { kind: "video"; case: Case; src: string; poster?: string }
  | { kind: "image"; case: Case; src: string; position?: string };

/** Alle beelden van een case waaruit een toepassing mag kiezen: cover, galerij en de poster van de hero-video. */
const mediaOf = (c: Case) => [c.cover, c.heroVideo?.poster, ...(c.gallery ?? [])].filter(Boolean) as string[];

/**
 * Vast (deterministisch) beeld per toepassing. Een case die niet (meer) aan de toepassing gekoppeld is,
 * of een beeld dat niet (meer) in de case staat, valt terug op de showcase van de eigen dienst:
 * zo staat er nooit een ongerelateerd project of een kale mockup.
 */
export function applicationVisual(a: Application): AppVisual {
  const fallback: AppVisual = { kind: "show", service: a.service };
  const ref = APP_VISUALS[a.slug];
  if (!ref) return fallback;
  if ("show" in ref) return { kind: "show", service: ref.show };

  const c = getCase(ref.case);
  const warn = (why: string) => {
    if (process.env.NODE_ENV !== "production") console.warn(`[application-visual] ${a.slug}: ${why}; terug naar de showcase van ${a.service}`);
    return fallback;
  };
  if (!c) return warn(`case "${ref.case}" bestaat niet (of is een concept)`);
  if (!c.applications.includes(a.slug)) return warn(`case "${ref.case}" is niet aan deze toepassing gekoppeld`);

  if ("video" in ref) {
    return c.heroVideo?.src ? { kind: "video", case: c, src: c.heroVideo.src, poster: c.heroVideo.poster } : warn(`case "${ref.case}" heeft geen hero-video`);
  }
  return mediaOf(c).includes(ref.src) ? { kind: "image", case: c, src: ref.src, position: ref.position } : warn(`beeld ${ref.src} staat niet in case "${ref.case}"`);
}
