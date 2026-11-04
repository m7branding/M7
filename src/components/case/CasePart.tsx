import { SplitText } from "@/components/motion/SplitText";
import { TLink } from "@/components/motion/TLink";
import type { Case, Locale, Service } from "@/content/types";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import type { HeroMedia } from "@/lib/story";
import { CaseMedia } from "./CaseMedia";

const pad = (n: number) => String(n).padStart(2, "0");

/**
 * Opening van een volgend deel in de storyline van een klant (bv. na het platform de branding):
 * nummer en jaar, de titel groot, de diensten en de samenvatting, en dan het beste beeld van dat
 * deel schermvullend (dezelfde keus als de hero van een losse case).
 */
export function CasePart({ c, n, total, locale, services, media }: { c: Case; n: number; total: number; locale: Locale; services: Service[]; media: HeroMedia }) {
  const film = media.kind === "video" ? (c.films ?? []).find((f) => f.src === media.src) : undefined;
  return (
    <>
      <section className="cx-part" id={c.slug} aria-labelledby={`${c.slug}-title`}>
        <div className="container cx-part__in">
          <p className="cx-part__n" data-reveal="fade">
            <span>{pad(n)}</span>
            <i aria-hidden="true" />
            <span>{pad(total)}</span>
            {c.year ? <span className="cx-part__year">{c.year}</span> : null}
          </p>
          <SplitText as="h2" id={`${c.slug}-title`} className="cx-part__title" parts={tr(c.title, locale)} />
          <div className="cx-part__body">
            {services.length ? (
              <ul className="cx-part__tags" data-reveal="up" aria-label={locale === "nl" ? "Diensten" : "Services"}>
                {services.map((s) => (
                  <li key={s.slug}>
                    <TLink href={paths.service(s)} className="cx-hero__tag" style={{ ["--accent" as string]: s.color }}>
                      {tr(s.short, locale)}
                    </TLink>
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="cx-part__lead" data-reveal="up" style={{ ["--d" as string]: "0.12s" }}>
              {tr(c.summary, locale)}
            </p>
          </div>
        </div>
      </section>
      {media.kind === "video" ? (
        <CaseMedia video={media.src} poster={media.poster} alt={`${c.client}: ${tr(c.title, locale)}`} fit={film && film.w / film.h < 1.7 ? "native" : undefined} ratio={film ? film.w / film.h : undefined} />
      ) : media.kind === "image" ? (
        <CaseMedia image={media.src} position={media.position} alt={`${c.client}: ${tr(c.title, locale)}`} />
      ) : null}
    </>
  );
}
