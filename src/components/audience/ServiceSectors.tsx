import { TLink } from "@/components/motion/TLink";
import { SectionHead } from "@/components/ui/Cards";
import { Faq } from "@/components/ui/Faq";
import { Icon } from "@/components/ui/Icon";
import type { Locale, Sector, Service } from "@/content/types";
import { type AudSegment, audienceIndex, audiencesOf, segHash, serviceFaqs, serviceUseCases, useCaseId } from "@/lib/audience";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { Audience } from "./Audience";
import { UseCaseCard } from "./AudiencePanel";
import { audCopy, lcFirst } from "./copy";
import "./audience.css";

/**
 * Dienstpagina: "Voor welke sectoren". Zoekbalk + accordeon
 * sector → doelgroep → dienst-specifieke tekst (native <details>,
 * crawlbaar). "Bekijk alles voor …" opent de doelgroep-modal; die
 * haalt het volledige paneel van de sectorpagina op en zet de use
 * cases van deze dienst bovenaan.
 */
export function ServiceSectors({ service, sectors, locale }: { service: Service; sectors: Sector[]; locale: Locale }) {
  if (!sectors.length) return null;
  const d = getDict(locale);
  const c = audCopy(locale);
  const svcName = tr(service.short, locale);

  const segItem = (g: AudSegment, label?: string) => {
    const key = g.key[locale];
    const name = label ?? tr(g.name, locale);
    const types = g.types.map((t) => tr(t, locale));
    const cases = serviceUseCases(g, service.slug);
    const faqs = serviceFaqs(g, service.slug);
    return (
      <details key={key} className="aud-seg" name={`aud-seg-${g.sector.slug}`} id={`aud-seg-${key}`}>
        <summary className="aud-seg__sum">
          <span className="aud-seg__txt">
            <span className="aud-seg__name">{name}</span>
            {types.length ? (
              <span className="aud-seg__types">
                {types.slice(0, 3).join(" · ")}
                {types.length > 3 ? ` +${types.length - 3}` : ""}
              </span>
            ) : null}
          </span>
          <span className="aud-seg__plus" aria-hidden="true" />
        </summary>
        <div className="aud-seg__body">
          <p className="aud-seg__intro">{tr(g.intro, locale)}</p>
          {cases.length ? (
            <div className="aud-svc" data-aud-svc={key}>
              <p className="aud-svc__h">
                <span className="aud-svc__dot" aria-hidden="true" />
                {c.helps(svcName, lcFirst(name))}
              </p>
              <ul className="aud-uc aud-uc--compact">
                {cases.map((u) => (
                  <UseCaseCard key={useCaseId(u)} u={u} locale={locale} compact />
                ))}
              </ul>
            </div>
          ) : null}
          {faqs.length ? (
            <div className="aud-seg__faq">
              <Faq faqs={faqs} locale={locale} withLd={false} />
            </div>
          ) : null}
          <div className="aud-seg__foot">
            <a href={`#${segHash(g, locale)}`} className="aud-seg__all">
              {c.seeAll(lcFirst(name))}
              <span className="aud-seg__all-ic" aria-hidden="true">
                <span className="aud-arrow" />
              </span>
            </a>
          </div>
        </div>
      </details>
    );
  };

  return (
    <section className="section svc-aud" id="sectoren" aria-labelledby="svc-aud-title">
      <div className="container">
        <SectionHead kicker={d.service.sectors} title={d.service.sectorsTitle} text={c.svcIntro(svcName)} id="svc-aud-title" />
        <div className="svc-aud__finder" data-reveal="up">
          <Audience
            index={audienceIndex(locale)}
            locale={locale}
            scope={sectors.map((s) => s.slug)}
            service={{ slug: service.slug, name: svcName }}
            variant="section"
          />
        </div>
        <div className="aud-acc" data-stagger="">
          {sectors.map((s) => {
            const segs = audiencesOf(s.slug);
            const named = segs.filter((g) => g.index >= 0);
            const general = segs.find((g) => g.index < 0);
            return (
              <details key={s.slug} className="aud-acc__sec" name="aud-sector" id={`aud-sec-${s.slug}`}>
                <summary className="aud-acc__sum">
                  <span className="aud-acc__ic" aria-hidden="true">
                    <Icon name={s.icon} size={22} />
                  </span>
                  <span className="aud-acc__txt">
                    <span className="aud-acc__name">{tr(s.title, locale)}</span>
                    {named.length ? (
                      <span className="aud-acc__segs">{named.map((g) => tr(g.name, locale)).join(" · ")}</span>
                    ) : null}
                  </span>
                  {named.length ? <span className="aud-acc__count">{c.segCount(named.length)}</span> : null}
                  <span className="aud-acc__plus" aria-hidden="true" />
                </summary>
                <div className="aud-acc__body">
                  <div className="aud-acc__list">
                    {named.map((g) => segItem(g))}
                    {general ? segItem(general, named.length ? c.other : c.all) : null}
                  </div>
                  <TLink href={paths.sector(s)} className="link-dash aud-acc__more">
                    {c.toSector(tr(s.title, locale))}
                  </TLink>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
}
