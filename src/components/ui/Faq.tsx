import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/content/site";
import type { FAQ, Locale } from "@/content/types";
import { tr } from "@/lib/i18n";
import { faqLd } from "@/lib/seo";
import { Icon } from "./Icon";
import { RichText } from "./RichText";

/**
 * FAQ-accordeon op basis van <details> (werkt zonder JS, crawlbaar
 * voor zoekmachines en AI) + FAQPage JSON-LD + link naar de kennisbank.
 */
export function Faq({
  faqs,
  locale,
  moreLabel,
  answersPath = "",
  withLd = true,
}: {
  faqs: FAQ[];
  locale: Locale;
  moreLabel?: string;
  answersPath?: string;
  withLd?: boolean;
}) {
  if (!faqs.length) return null;
  return (
    <div className="faq">
      <div className="faq__list" data-stagger="">
        {faqs.map((f, i) => (
          <details key={i} className="faq__item" name="faq">
            <summary>
              <span className="faq__q">{tr(f.q, locale)}</span>
              <span className="faq__icon" aria-hidden="true">
                <Icon name="plus" size={18} stroke={2} />
              </span>
            </summary>
            <div className="faq__a">
              <RichText text={tr(f.a, locale)} locale={locale} />
            </div>
          </details>
        ))}
      </div>
      {moreLabel ? (
        <a className="link-dash faq__more" href={`${site.answers.url}${answersPath}`} target="_blank" rel="noopener">
          {moreLabel}
        </a>
      ) : null}
      {withLd ? <JsonLd data={faqLd(faqs, locale)} /> : null}
    </div>
  );
}
