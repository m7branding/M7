import { site } from "@/content/site";
import type { Locale, Review } from "@/content/types";
import { publishedReviews } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { ReviewsMarquee, type MarqueeReview } from "./ReviewsMarquee";

/** Minimaal aantal kaarten op een dienstpagina: aangevuld met andere echte reviews. */
const MIN = 8;

const L = {
  region: { nl: "Reviews van klanten", en: "Client reviews" },
  translated: { nl: "Vertaald door Google", en: "Translated by Google" },
  google: { nl: "Bekijk ons op Google", en: "Find us on Google" },
  pause: { nl: "Pauzeer reviews", en: "Pause reviews" },
  play: { nl: "Speel reviews af", en: "Play reviews" },
  stars: { nl: "van 5 sterren", en: "out of 5 stars" },
  googleReview: { nl: "Google-review", en: "Google review" },
};

const initials = (name: string) => {
  const words = name.split(/\s+/).filter((w) => /^\p{L}/u.test(w));
  const pick = words.length > 1 ? [words[0], words[words.length - 1]] : words;
  return pick.map((w) => w[0].toUpperCase()).join("");
};

function toItem(r: Review, locale: Locale): MarqueeReview {
  const role = r.role ? tr(r.role, locale) : "";
  return {
    id: r.id,
    author: r.author,
    meta: [role, r.company].filter(Boolean).join(", "),
    when: r.when ? tr(r.when, locale) : undefined,
    avatar: r.avatar,
    initials: initials(r.author),
    paragraphs: tr(r.quote, locale).split("\n\n"),
    lang: r.lang && r.lang !== locale ? r.lang : undefined,
    rating: r.rating,
    source: r.source,
    translated: !!r.translated,
    draft: !!r.draft,
  };
}

/**
 * Reviews als rustige, volledig brede marquee (server-wrapper).
 * - Zonder `service` (home): alle reviews, verdeeld over twee rijen die tegen elkaar in lopen.
 * - Met `service`: eerst de reviews over die dienst, aangevuld met andere echte reviews,
 *   zodat de rij nooit leeg oogt.
 * Concept-reviews (`draft`) komen alleen mee in development / preview (zie publishedReviews).
 */
export function Testimonials({ locale, service, rows }: { locale: Locale; service?: string; rows?: 1 | 2 }) {
  const d = getDict(locale);
  const all = publishedReviews();
  const real = all.filter((r) => !r.draft);
  const drafts = all.filter((r) => r.draft);

  let lines: Review[][];
  if (service) {
    const score = (r: Review) => r.services.indexOf(service as never);
    const match = real.filter((r) => score(r) >= 0).sort((a, b) => score(a) - score(b));
    const fill = real.filter((r) => score(r) < 0).slice(0, Math.max(0, MIN - match.length));
    const list = [...match, ...fill, ...drafts.filter((r) => score(r) >= 0)];
    lines = rows === 2 ? split(list) : [list];
  } else {
    lines = rows === 1 ? [[...real, ...drafts]] : split(real).map((l, i) => [...l, ...split(drafts)[i]]);
  }
  if (!lines.some((l) => l.length)) return null;

  return (
    <ReviewsMarquee
      rows={lines.filter((l) => l.length).map((l) => l.map((r) => toItem(r, locale)))}
      google={site.socials.google}
      labels={{
        region: tr(L.region, locale),
        more: d.cta.readMore,
        less: d.cta.readLess,
        draft: d.misc.showDrafts,
        translated: tr(L.translated, locale),
        google: tr(L.google, locale),
        googleReview: tr(L.googleReview, locale),
        pause: tr(L.pause, locale),
        play: tr(L.play, locale),
        stars: tr(L.stars, locale),
      }}
    />
  );
}

/** Om en om verdelen over twee rijen (korte en lange teksten blijven gemengd). */
function split<X>(list: X[]): [X[], X[]] {
  return [list.filter((_, i) => i % 2 === 0), list.filter((_, i) => i % 2 === 1)];
}
