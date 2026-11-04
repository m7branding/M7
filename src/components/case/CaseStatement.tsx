import { SplitText } from "@/components/motion/SplitText";
import type { Locale, T } from "@/content/types";
import { tr } from "@/lib/i18n";
import { GrowFrame } from "./GrowFrame";
import { brandTones, neutralTones } from "./tone";

/**
 * Schermvullende sectie in de (verdiepte) merkkleur die meegroeit op de scroll, met één zin groot in beeld.
 * Gebruikt het merk geen vol kleurvlak (`field` null), dan een neutrale basis met de merkkleur als accent.
 * - Met `cite`: een echte review van de klant, met aanhalingsteken en naam.
 * - Zonder `cite`: een statement van M7 zelf, zonder aanhalingstekens en zonder naam (nooit als klantcitaat).
 */
export function CaseStatement({
  text,
  cite,
  role,
  avatar,
  color,
  field,
  locale,
}: {
  text: T;
  cite?: string;
  role?: T;
  avatar?: string;
  color: string;
  /** Vol merkvlak (geverifieerd), of null. */
  field: string | null;
  locale: Locale;
}) {
  const t = field ? brandTones(field) : neutralTones(color);
  const str = tr(text, locale).replace(/\s*\n+\s*/g, " ");
  const size = str.length > 260 ? " is-long" : str.length > 130 ? " is-mid" : "";
  const style = { ["--deep" as string]: t.deep, ["--glow" as string]: t.glow, ["--acc" as string]: t.accent };
  return (
    <section className={`cx-say${cite ? " cx-say--review" : " cx-say--statement"}`}>
      <GrowFrame className="cx-say__grow" style={style}>
        <figure className={`container cx-say__inner${size}`}>
          {cite ? (
            <>
              <span className="cx-say__mark" aria-hidden="true">
                “
              </span>
              <blockquote>
                <SplitText as="p" className="cx-say__text" parts={str} />
              </blockquote>
              <figcaption className="cx-say__cite" data-reveal="fade" style={{ ["--d" as string]: "0.4s" }}>
                {avatar ? <img src={avatar} alt="" width={52} height={52} loading="lazy" /> : null}
                <span>
                  <strong>{cite}</strong>
                  {role ? <span>{tr(role, locale)}</span> : null}
                </span>
              </figcaption>
            </>
          ) : (
            <>
              <span className="cx-say__line" aria-hidden="true" />
              <SplitText as="p" className="cx-say__text" parts={str} />
            </>
          )}
        </figure>
      </GrowFrame>
    </section>
  );
}
