import { TLink } from "@/components/motion/TLink";
import { CaseCover } from "@/components/ui/CaseCard";
import { Icon } from "@/components/ui/Icon";
import type { Case, Locale } from "@/content/types";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";

/**
 * "Volgende case": een kaart in dezelfde stijl als de hero (ingesprongen, afgeronde hoeken,
 * donkere verloop linksonder). Beeld: de brede render voor deze strook (r-next), anders de
 * poster van de hero-video (ook liggend en rechts van het midden gecomponeerd), anders de cover.
 * Op mobiel de staande poster, zodat het onderwerp niet tot een smalle strook wordt bijgesneden.
 */
export function CaseNext({ c, locale, kicker, cursor }: { c: Case; locale: Locale; kicker: string; cursor: string }) {
  const wide = c.next ?? c.heroVideo?.poster ?? c.cover;
  const tall = c.heroVideo?.posterMobile;
  return (
    <section className="cx-next">
      <TLink href={paths.case(c)} className="cx-next__frame" data-cursor={cursor}>
        <span className="cx-next__media">
          {wide ? (
            <picture>
              {tall ? <source media="(max-width: 760px)" srcSet={tall} /> : null}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={wide} alt="" loading="lazy" decoding="async" />
            </picture>
          ) : (
            <CaseCover c={c} sizes="100vw" />
          )}
        </span>
        <span className="cx-next__shade" aria-hidden="true" />
        <span className="cx-next__inner">
          <span className="kicker">{kicker}</span>
          <span className="cx-next__title">
            {c.client}
            <Icon name="arrowRight" size={48} stroke={1.6} />
          </span>
          <span className="cx-next__sub">{tr(c.title, locale)}</span>
        </span>
      </TLink>
    </section>
  );
}
