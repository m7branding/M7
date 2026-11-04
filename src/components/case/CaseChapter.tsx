import { SplitText } from "@/components/motion/SplitText";
import { RichText } from "@/components/ui/RichText";
import type { Locale, T } from "@/content/types";
import { tr } from "@/lib/i18n";

/**
 * Hoofdstuk in het case-verhaal, cinematisch en rustig: een grote titel en daaronder, iets
 * naar rechts ingesprongen, één of twee redactionele alinea's. Veel lucht eromheen, geen kicker.
 */
export function CaseChapter({ title, body, quote, locale, id }: { title: T; body: T; quote?: T; locale: Locale; id: string }) {
  const t = tr(title, locale);
  return (
    <section className="cx-chapter" aria-labelledby={id}>
      <div className="container cx-chapter__inner">
        <SplitText as="h2" id={id} className={`cx-chapter__title${t.length > 34 ? " is-long" : ""}`} parts={t} />
        <div className="cx-chapter__body" data-reveal="up" style={{ ["--d" as string]: "0.25s" }}>
          <RichText text={tr(body, locale)} className="cx-chapter__text" locale={locale} />
          {quote ? <p className="cx-chapter__quote">{tr(quote, locale)}</p> : null}
        </div>
      </div>
    </section>
  );
}
