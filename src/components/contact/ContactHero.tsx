import { GlowField } from "@/components/motion/GlowField";
import { SplitText } from "@/components/motion/SplitText";
import { Starfield } from "@/components/motion/Starfield";
import { TLink } from "@/components/motion/TLink";
import { IntakeCta } from "@/components/overlay/OverlayButton";
import { TeamLine } from "@/components/support/TeamLine";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { Icon } from "@/components/ui/Icon";
import { officePhoto, officePhotos } from "@/content/office";
import { site } from "@/content/site";
import { people } from "@/content/team";
import type { Locale } from "@/content/types";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import "./contact.css";

/** Google Maps-route naar ons kantoor. */
export const routeUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    `${site.legalName}, ${site.address.street}, ${site.address.postalCode} ${site.address.city}`,
  )}`;

const COPY = {
  more: { nl: "Of stuur een bericht", en: "Or send a message" },
  office: { nl: "Ons kantoor", en: "Our office" },
  route: { nl: "Plan je route", en: "Get directions" },
};

/**
 * Hero van de contactpagina: tekst links, rechts (mobiel: bovenaan) ons pand
 * in Nistelrode dat uit het donker opkomt, met adres + routelink.
 */
export function ContactHero({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const L = (t: { nl: string; en: string }) => t[locale];
  const photo = officePhotos.find((p) => p.name === "kantoor-buitenkant")!;
  const [a, b] = people;

  return (
    <section className="page-hero chero" aria-labelledby="chero-title">
      <div className="page-hero__bg">
        <GlowField
          blobs={[
            { x: "18%", y: "30%", c: "rgba(58,255,255,.08)", s: "50vmax", dur: 18, delay: -4 },
            { x: "70%", y: "110%", c: "rgba(255,150,80,.07)", s: "60vmax", dur: 20, delay: -9 },
          ]}
        />
        <Starfield density={0.35} sparkles={6} />
        <div className="chero__photo" data-reveal="fade" style={{ ["--d" as string]: "0.1s" }}>
          <img
            src={officePhoto(photo, "lg")}
            srcSet={`${officePhoto(photo, "sm")} 720w, ${officePhoto(photo, "lg")} ${photo.w}w`}
            sizes="(max-width: 900px) 100vw, 62vw"
            width={photo.w}
            height={photo.h}
            alt={tr(photo.alt, locale)}
            fetchPriority="high"
            decoding="async"
          />
        </div>
      </div>

      <div className="container chero__grid">
        <div className="chero__text">
          <Breadcrumbs
            locale={locale}
            label={d.misc.breadcrumbs}
            items={[
              { name: d.nav.home, path: "/" },
              { name: d.nav.contact, path: paths.contact },
            ]}
          />
          <SplitText
            as="h1"
            id="chero-title"
            className="h-hero chero__title"
            parts={[{ t: "Let's build something " }, { t: "great.", c: "g-level" }]}
            delay={0.1}
          />
          <p className="lead chero__lead" data-reveal="up" style={{ ["--d" as string]: "0.3s" }}>
            {d.contact.intro}
          </p>
          <div className="chero__cta" data-reveal="up" style={{ ["--d" as string]: "0.42s" }}>
            <IntakeCta>{d.cta.launch}</IntakeCta>
            <a href="#bericht" className="link-dash">
              {L(COPY.more)}
            </a>
          </div>
          <div data-reveal="up" style={{ ["--d" as string]: "0.55s" }}>
            <TeamLine
              locale={locale}
              size={38}
              ring="#060607"
              className="chero__team"
              text={
                locale === "nl" ? (
                  <>
                    <strong>Je praat direct met de makers.</strong>
                    <br />
                    {a.first}, {b.first} en de rest van het team.
                  </>
                ) : (
                  <>
                    <strong>You talk straight to the makers.</strong>
                    <br />
                    {a.first}, {b.first} and the rest of the team.
                  </>
                )
              }
            />
          </div>
        </div>

        <address className="chero__cap" data-reveal="up" style={{ ["--d" as string]: "0.7s" }}>
          <span className="chero__cap-i" aria-hidden="true">
            <Icon name="pin" size={17} />
          </span>
          <span className="chero__cap-t">
            <small>{L(COPY.office)}</small>
            <span>
              {site.address.street}, {site.address.city}
            </span>
          </span>
          <TLink href={routeUrl()} className="chero__route">
            {L(COPY.route)}
            <Icon name="arrowUpRight" size={15} stroke={2.2} />
          </TLink>
        </address>
      </div>
    </section>
  );
}
