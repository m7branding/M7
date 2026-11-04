import { TLink } from "@/components/motion/TLink";
import { SectionHead } from "@/components/ui/Cards";
import { logoDesigns, type LogoDesign } from "@/content/logo-designs";
import type { Locale } from "@/content/types";
import { getApplication, getCase } from "@/lib/content";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { LogoWallSpot } from "./LogoWallSpot";
import "./LogoWall.css";

const COPY = {
  kicker: { nl: "Logo-ontwerp", en: "Logo design" },
  title: { nl: "Logo's die we ontwierpen.", en: "Logos we designed." },
  text: {
    nl: "Een greep uit de logo's die we de afgelopen jaren maakten, van bouwbedrijf tot supercarclub. Hier in rustig wit, en heel even in hun eigen kleuren.",
    en: "A selection of the logos we've designed over the years, from construction firms to a supercar club. Shown here in calm white, and briefly in their own colours.",
  },
  more: { nl: "Meer over logo-ontwerp", en: "More about logo design" },
  count: { nl: "logo's", en: "logos" },
  viewCase: { nl: "Bekijk de case", en: "View the case" },
};

/**
 * Rustige wand met logo's die we ontwierpen: witte logo's op een donker
 * raster met haarlijnen. Bij hover/focus (en af en toe vanzelf, zie
 * LogoWallSpot) kleurt een vak in naar het originele merkvlak.
 */
export function LogoWall({ locale, id = "logos" }: { locale: Locale; id?: string }) {
  const app = getApplication("logo-ontwerp");
  const titleId = `${id}-title`;
  return (
    <section className="section lwall" id={id} aria-labelledby={titleId}>
      <div className="container">
        <SectionHead kicker={tr(COPY.kicker, locale)} title={tr(COPY.title, locale)} text={tr(COPY.text, locale)} id={titleId}>
          {app ? (
            <TLink href={paths.application(app)} className="link-dash">
              {tr(COPY.more, locale)} <span className="count-badge">{logoDesigns.length}</span>
            </TLink>
          ) : null}
        </SectionHead>
        <LogoWallSpot className="lwall__frame" label={`${logoDesigns.length} ${tr(COPY.count, locale)}`}>
          <ul className="lwall__grid" data-stagger="">
            {logoDesigns.map((l) => (
              <li key={l.slug} className="lwall__cell" style={{ ["--bg" as string]: l.bg }}>
                <Item l={l} locale={locale} />
              </li>
            ))}
          </ul>
        </LogoWallSpot>
      </div>
    </section>
  );
}

function Item({ l, locale }: { l: LogoDesign; locale: Locale }) {
  const c = l.case ? getCase(l.case) : undefined;
  const inner = (
    <>
      <img className="lwall__tile" src={l.tile} alt="" aria-hidden="true" loading="lazy" decoding="async" />
      <img
        className="lwall__logo"
        src={l.image}
        alt={l.name}
        width={l.w}
        height={l.h}
        loading="lazy"
        decoding="async"
        style={{ ["--lw" as string]: `${logoWidth(l)}%` }}
      />
      <span className="lwall__name" aria-hidden="true">
        {l.name}
        {c ? <span className="lwall__arrow">↗</span> : null}
      </span>
    </>
  );
  return c ? (
    <TLink href={paths.case(c)} className="lwall__item" aria-label={`${l.name}: ${tr(COPY.viewCase, locale)}`}>
      {inner}
    </TLink>
  ) : (
    <div className="lwall__item">{inner}</div>
  );
}

/**
 * Optisch gelijke grootte: elk logo krijgt ongeveer hetzelfde oppervlak in
 * een vak van 3:2, begrensd in breedte en hoogte. Geeft de breedte in % van het vak.
 */
function logoWidth({ w, h }: Pick<LogoDesign, "w" | "h">) {
  const CELL_W = 1.5; // vak 3:2 (hoogte = 1)
  const AREA = 0.18;
  const ar = w / h;
  let lw = Math.sqrt(AREA * ar);
  let lh = Math.sqrt(AREA / ar);
  const k = Math.min(1, (CELL_W * 0.62) / lw, 0.46 / lh);
  lw *= k;
  return Math.round((lw / CELL_W) * 1000) / 10;
}
