import type { Chapter, Locale } from "@/content/types";
import { tr } from "@/lib/i18n";
import { RichText } from "./RichText";

/** Rustige content-sectie: kop (met Engelse kicker) links, tekst en optionele quote rechts. */
export function ChapterBlock({ c, locale, id }: { c: Chapter; locale: Locale; id: string }) {
  return (
    <section className="section chapter" aria-labelledby={id}>
      <div className="container chapter__grid">
        <div className="chapter__head">
          {c.kicker ? (
            <p className="chapter__kicker" data-reveal="fade">
              {tr(c.kicker, locale)}
            </p>
          ) : null}
          <h2 className="h3 chapter__title" id={id} data-reveal="up">
            {tr(c.h, locale)}
          </h2>
        </div>
        <div className="chapter__body">
          <div data-reveal="up">
            <RichText text={tr(c.body, locale)} className="body" locale={locale} />
          </div>
          {c.quote ? (
            <blockquote className="chapter__quote" data-reveal="up">
              <p>{tr(c.quote, locale)}</p>
            </blockquote>
          ) : null}
        </div>
      </div>
    </section>
  );
}
