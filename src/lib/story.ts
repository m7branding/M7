import type { Case, Review, StoryBlock, T } from "@/content/types";
import { applicationsBySlugs, getReview } from "./content";
import { getDict } from "./dict";

/**
 * Het verhaal van een case. Heeft de case een eigen `story`, dan die;
 * anders een nette standaardopbouw uit de bestaande velden:
 * uitdaging → beelden → aanpak → quote → resultaat → cijfers → opgeleverd.
 */
export function storyFor(c: Case): StoryBlock[] {
  if (c.story?.length) return c.story;
  const nl = getDict("nl").cases;
  const en = getDict("en").cases;
  // gerenderde 3D-beelden (r-*.webp uit de Blender-pipeline) gaan vóór de cover, daarna de rest
  const gallery = c.gallery ?? [];
  const renders = gallery.filter((g) => /\/r-[^/]+$/.test(g));
  const imgs = [...renders, c.cover, ...gallery.filter((g) => !renders.includes(g))].filter((x): x is string => !!x);
  const review = getReview(c.review);
  const apps = applicationsBySlugs(c.applications);

  const out: StoryBlock[] = [{ type: "intro", kicker: { nl: nl.challenge, en: en.challenge }, text: c.challenge }];
  if (imgs.length > 1) out.push({ type: "masonry", images: imgs.map((src) => ({ src })) });
  out.push({ type: "text", kicker: { nl: "How we did it.", en: "How we did it." }, h: { nl: nl.approach, en: en.approach }, body: c.approach });
  if (review)
    out.push({
      type: "quote",
      text: review.quote,
      cite: review.author,
      role: reviewRole(review),
      avatar: review.avatar,
    });
  out.push({ type: "text", kicker: { nl: "What it brought.", en: "What it brought." }, h: { nl: nl.result, en: en.result }, body: c.result });
  if (c.results?.length) out.push({ type: "results" });
  if (apps.length) out.push({ type: "timeline", style: "checklist", title: { nl: nl.delivered, en: en.delivered }, items: apps.map((a) => ({ label: a.title })) });
  return out;
}

/** "CEO, TeamTV", alleen het bedrijf, of niets (Google-reviews hebben geen functie). */
function reviewRole(r: Review): T | undefined {
  const part = (role?: string) => [role, r.company].filter(Boolean).join(", ");
  const nl = part(r.role?.nl);
  return nl ? { nl, en: part(r.role?.en) } : undefined;
}
