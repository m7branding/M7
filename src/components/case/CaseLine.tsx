import type { Case, Locale } from "@/content/types";
import { getService } from "@/lib/content";
import { tr } from "@/lib/i18n";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * De storyline van een klant met meerdere projecten (branding, website, portaal, content …):
 * per deel een beeld, het jaar, de titel en de diensten. Springt naar het hoofdstuk op deze pagina.
 */
export function CaseLine({ parts, locale }: { parts: Case[]; locale: Locale }) {
  const client = parts[0].client;
  const nl = locale === "nl";
  return (
    <nav className="cx-line" aria-label={nl ? `Alle projecten voor ${client}` : `All projects for ${client}`}>
      <div className="container">
        <p className="kicker cx-line__kicker">{nl ? `Het hele verhaal van ${client}` : `The full story of ${client}`}</p>
        <ol className="cx-line__list" data-stagger="" style={{ ["--n" as string]: parts.length }}>
          {parts.map((p, i) => {
            const thumb = p.cover ?? p.heroVideo?.poster;
            const tags = p.services
              .slice(0, 3)
              .map((s) => tr(getService(s)?.short, locale))
              .filter(Boolean);
            return (
              <li key={p.slug} style={{ ["--si" as string]: i }}>
                <a href={`#${p.slug}`} className="cx-line__item">
                  <span className="cx-line__media">{thumb ? <img src={thumb} alt="" loading="lazy" decoding="async" /> : null}</span>
                  <span className="cx-line__meta">
                    <span className="cx-line__n">{pad(i + 1)}</span>
                    {p.year ? <span className="cx-line__year">{p.year}</span> : null}
                  </span>
                  <strong className="cx-line__title">{tr(p.title, locale)}</strong>
                  {tags.length ? <span className="cx-line__tags">{tags.join(" · ")}</span> : null}
                </a>
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
