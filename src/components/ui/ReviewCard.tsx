import type { Locale, Review } from "@/content/types";
import { tr } from "@/lib/i18n";
import { Icon } from "./Icon";

export function ReviewCard({ r, locale, draftLabel }: { r: Review; locale: Locale; draftLabel: string }) {
  return (
    <figure className={`review${r.draft ? " is-draft" : ""}`} data-reveal="up">
      {r.draft ? <span className="review__draft">{draftLabel}</span> : null}
      <Icon name="quote" size={30} className="review__quote" />
      <blockquote>{tr(r.quote, locale)}</blockquote>
      <figcaption>
        {r.avatar ? <img src={r.avatar} alt="" width={52} height={52} loading="lazy" /> : <span className="review__avatar">{r.author[0]}</span>}
        <span>
          <strong>{r.author}</strong>
          <small>
            {tr(r.role, locale)} · {r.company}
          </small>
        </span>
        {r.rating ? (
          <span className="review__stars" aria-label={`${r.rating}/5`}>
            {"★★★★★".slice(0, r.rating)}
          </span>
        ) : null}
      </figcaption>
    </figure>
  );
}
