import { TLink } from "@/components/motion/TLink";
import { IntakeCta } from "@/components/overlay/OverlayButton";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import { RichText } from "@/components/ui/RichText";
import type { Locale } from "@/content/types";
import { type AudSegment, type UseCaseView, useCaseId, useCaseLink } from "@/lib/audience";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { audCopy } from "./copy";
import { slugify } from "./match";
import "./audience.css";

/**
 * Eén use case als kaart: titel, tekst en de gekoppelde dienst/toepassing in de accentkleur.
 * `compact` (accordeon op de dienstpagina): zonder iconen, scheelt veel HTML bij 70+ doelgroepen.
 */
export function UseCaseCard({ u, locale, compact }: { u: UseCaseView; locale: Locale; compact?: boolean }) {
  const l = useCaseLink(u, locale);
  return (
    <li className="aud-uc__item" data-uc={useCaseId(u)} data-svc={u.service} style={{ ["--accent" as string]: l.color }}>
      <div className="aud-uc__top">
        {compact ? null : (
          <span className="aud-uc__ic" aria-hidden="true">
            <Icon name={l.icon} size={18} stroke={2} />
          </span>
        )}
        <h4 className="aud-uc__t">{tr(u.title, locale)}</h4>
      </div>
      <RichText text={tr(u.text, locale)} className="aud-uc__x" locale={locale} />
      <TLink href={l.href} className="aud-uc__link">
        <span className="aud-uc__dot" aria-hidden="true" />
        {l.label}
        {compact ? <span className="aud-arrow aud-arrow--ur" aria-hidden="true" /> : <Icon name="arrowUpRight" size={14} stroke={2} />}
      </TLink>
    </li>
  );
}

/**
 * Alles voor één doelgroep binnen een sector: intro, soorten bedrijven,
 * use cases, FAQ's en een CTA. Server-gerenderd (crawlbaar); de modal
 * toont het, of de dienstpagina haalt het lazy op.
 */
export function AudiencePanel({ g, locale }: { g: AudSegment; locale: Locale }) {
  const d = getDict(locale);
  const c = audCopy(locale);
  const general = g.index < 0;
  const sectorName = tr(g.sector.title, locale);
  const key = g.key[locale];
  return (
    <article className="aud-p">
      <header className="aud-p__head" data-aud-head="">
        <p className="aud-p__kicker">
          <span className="aud-p__kic" aria-hidden="true">
            <Icon name={g.sector.icon} size={15} stroke={2} />
          </span>
          {general ? d.nav.sectors : sectorName}
        </p>
        <h2 className="aud-p__title" id={`aud-t-${key}`}>
          {tr(g.name, locale)}
        </h2>
        <p className="aud-p__intro">{tr(g.intro, locale)}</p>
        {g.types.length ? (
          <ul className="aud-p__types" aria-label={c.typesLabel}>
            {g.types.map((t) => (
              <li key={t.nl} data-type={slugify(tr(t, locale))}>
                {tr(t, locale)}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      {g.useCases.length ? (
        <section className="aud-p__sec" data-aud-uc="">
          <h3 className="aud-p__h" data-aud-uc-h="">
            {c.howWeHelp}
          </h3>
          <ul className="aud-uc">
            {g.useCases.map((u) => (
              <UseCaseCard key={useCaseId(u)} u={u} locale={locale} />
            ))}
          </ul>
        </section>
      ) : null}

      {g.faqs.length ? (
        <section className="aud-p__sec aud-p__faq">
          <h3 className="aud-p__h">{d.service.faq}</h3>
          <Faq faqs={g.faqs} locale={locale} withLd={false} />
        </section>
      ) : null}

      <footer className="aud-p__cta">
        <div className="aud-p__cta-txt">
          <p className="aud-p__cta-t">{c.ctaTitle}</p>
          <p className="aud-p__cta-x">{c.ctaText}</p>
        </div>
        <div className="aud-p__cta-row">
          <IntakeCta>{d.cta.launch}</IntakeCta>
          <TLink href={paths.contact} className="link-dash">
            {d.cta.call}
          </TLink>
        </div>
      </footer>
    </article>
  );
}
