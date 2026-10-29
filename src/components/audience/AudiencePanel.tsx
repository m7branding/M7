import { TLink } from "@/components/motion/TLink";
import { IntakeCta } from "@/components/overlay/OverlayButton";
import { TeamLine } from "@/components/support/TeamLine";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/content/types";
import { type AudSegment, type UseCaseView, useCaseId, useCaseLink } from "@/lib/audience";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { stripRefs } from "@/lib/inline";
import { paths } from "@/lib/paths";
import { audCopy } from "./copy";
import { slugify } from "./match";
import "./audience.css";

/**
 * Eén use case als rustige kaart: icoon, titel en tekst. De hele kaart linkt
 * (stretched link op de titel) naar de dienst of toepassing; een pijltje
 * verschijnt pas bij hover/focus. Geen label-pill meer.
 * `compact` (accordeon op de dienstpagina): zonder SVG-iconen, scheelt veel HTML bij 70+ doelgroepen.
 */
export function UseCaseCard({ u, locale, compact }: { u: UseCaseView; locale: Locale; compact?: boolean }) {
  const l = useCaseLink(u, locale);
  return (
    <li className="aud-uc__item" data-uc={useCaseId(u)} data-svc={u.service} style={{ ["--accent" as string]: l.color }}>
      {compact ? null : (
        <span className="aud-uc__ic" aria-hidden="true">
          <Icon name={l.icon} size={18} stroke={2} />
        </span>
      )}
      <h4 className="aud-uc__t">
        <TLink href={l.href} className="aud-uc__a" draggable={false}>
          {tr(u.title, locale)}
        </TLink>
      </h4>
      <p className="aud-uc__x">{stripRefs(tr(u.text, locale), locale)}</p>
      <span className="aud-uc__go" aria-hidden="true">
        {compact ? <span className="aud-arrow aud-arrow--ur" /> : <Icon name="arrowUpRight" size={15} stroke={2.2} />}
      </span>
    </li>
  );
}

/**
 * Alles voor één doelgroep binnen een sector: intro, soorten bedrijven,
 * use cases (horizontale slider), FAQ's met de CTA ernaast. Server-gerenderd
 * (crawlbaar); de modal toont het, of de dienstpagina haalt het lazy op.
 * Het gedrag van de slider en de Aurora achter de CTA koppelt Audience.tsx
 * aan het paneel dat open staat (werkt zo ook voor geïmporteerde panelen).
 */
export function AudiencePanel({ g, locale }: { g: AudSegment; locale: Locale }) {
  const d = getDict(locale);
  const c = audCopy(locale);
  const general = g.index < 0;
  const sectorName = tr(g.sector.title, locale);
  const key = g.key[locale];
  const ucId = `aud-uc-${key}`;
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
        <section className="aud-p__sec aud-sl" data-aud-uc="" data-aud-slider="" aria-labelledby={`${ucId}-h`}>
          <h3 className="aud-p__h" id={`${ucId}-h`} data-aud-uc-h="">
            {c.howWeHelp}
          </h3>
          <ul className="aud-uc aud-sl__track" id={ucId} data-sl-track="">
            {g.useCases.map((u) => (
              <UseCaseCard key={useCaseId(u)} u={u} locale={locale} />
            ))}
          </ul>
          <div className="aud-sl__ctrl">
            <span className="aud-sl__bar" aria-hidden="true">
              <span className="aud-sl__thumb" data-sl-thumb="" />
            </span>
            <button type="button" className="aud-sl__btn" data-sl-prev="" aria-controls={ucId} aria-label={c.prev}>
              <Icon name="arrowLeft" size={18} stroke={2} />
            </button>
            <button type="button" className="aud-sl__btn" data-sl-next="" aria-controls={ucId} aria-label={c.next}>
              <Icon name="arrowRight" size={18} stroke={2} />
            </button>
          </div>
        </section>
      ) : null}

      <div className={`aud-p__duo${g.faqs.length ? "" : " aud-p__duo--solo"}`}>
        {g.faqs.length ? (
          <section className="aud-p__sec aud-p__faq" aria-labelledby={`aud-faq-${key}`}>
            <h3 className="aud-p__h" id={`aud-faq-${key}`}>
              {d.service.faq}
            </h3>
            <Faq faqs={g.faqs} locale={locale} withLd={false} />
          </section>
        ) : null}

        <aside className="aud-cta" aria-labelledby={`aud-cta-${key}`}>
          {/* Audience.tsx zet hier de levende Aurora in; tot dan (of zonder JS) een stil beeld */}
          <div className="aud-cta__bg" data-aud-aurora="" aria-hidden="true" />
          <div className="aud-cta__in">
            <TeamLine locale={locale} show={4} size={36} ring="#1b0b45" className="aud-cta__team" />
            <div className="aud-cta__body">
              <p className="aud-cta__t" id={`aud-cta-${key}`}>
                {c.ctaTitle}
              </p>
              <p className="aud-cta__x">{c.ctaText}</p>
            </div>
            <div className="aud-cta__row">
              <IntakeCta variant="light" size="sm">
                {d.cta.launch}
              </IntakeCta>
              <TLink href={paths.contact} className="aud-cta__call">
                {d.cta.call}
                <Icon name="arrowRight" size={16} stroke={2.2} />
              </TLink>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}
