import type { Metadata } from "next";
import { TLink } from "@/components/motion/TLink";
import { LiveDot } from "@/components/overlay/LiveDot";
import { OverlayButton } from "@/components/overlay/OverlayButton";
import { PathBlock } from "@/components/overlay/PathBlock";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Btn } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SocialIcon } from "@/components/ui/Social";
import { Avatars } from "@/components/support/Avatars";
import { site } from "@/content/site";
import { support } from "@/content/support";
import type { Locale } from "@/content/types";
import { allServices } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { abs, buildMetadata, orgId } from "@/lib/seo";

type P = { params: { lang: Locale } };

export function generateMetadata({ params }: P): Metadata {
  const nl = params.lang === "nl";
  return buildMetadata({
    locale: params.lang,
    path: paths.contact,
    title: nl ? "Contact | Plan een kennismaking met M7" : "Contact | Book an intro with M7",
    description: nl
      ? "Neem contact op met M7 Branding & Design: hello@m7branding.com, Loosbroekseweg 45, Nistelrode (regio Eindhoven). We reageren binnen één werkdag."
      : "Get in touch with M7 Branding & Design: hello@m7branding.com, Loosbroekseweg 45, Nistelrode (Eindhoven region). We reply within one business day.",
  });
}

export default function ContactPage({ params }: P) {
  const locale = params.lang;
  const d = getDict(locale);
  const nl = locale === "nl";
  return (
    <>
      <PageHero
        locale={locale}
        crumbs={[
          { name: d.nav.home, path: "/" },
          { name: d.nav.contact, path: paths.contact },
        ]}
        crumbsLabel={d.misc.breadcrumbs}
        kicker={d.contact.title}
        title={[{ t: "Let's build something " }, { t: "great.", c: "g-level" }]}
        lead={d.contact.intro}
      />

      <section className="section section--tight contact">
        <div className="container contact__grid">
          <div className="contact__form card card--pad" data-reveal="up">
            <ContactForm
              services={allServices().map((s) => ({ value: s.slug, label: tr(s.title, locale) }))}
              labels={d.contact}
            />
          </div>
          <aside className="contact__aside">
            <div className="csup" data-reveal="up">
              <div className="csup__top">
                <p className="live-pill">
                  <LiveDot size={8} />
                  <span className="live-pill__live">Live</span>
                  <span className="live-pill__sep" aria-hidden="true" />
                  <span>Support</span>
                </p>
                <Avatars people={support.people} size={40} />
              </div>
              <h2 className="csup__title">{nl ? "Al klant en loopt er iets vast?" : "Already a client and something's stuck?"}</h2>
              <p className="csup__text">
                {nl
                  ? "Maak in een paar stappen een supportticket aan. Alexander, Finn en Martijn pakken het voor je op."
                  : "Create a support ticket in a few steps. Alexander, Finn and Martijn will pick it up for you."}
              </p>
              <div className="csup__foot">
                <OverlayButton target="support" look="btn" size="sm" className="btn--contact">
                  {nl ? "Maak een ticket" : "Create a ticket"}
                </OverlayButton>
                <a href={`mailto:${support.email}`}>{support.email}</a>
              </div>
            </div>
            <div className="contact__card card card--pad" data-reveal="up">
              <p className="kicker">{d.cta.mail}</p>
              <a className="contact__mail" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              {site.phone ? (
                <a className="contact__phone" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                  <Icon name="phone" size={18} /> {site.phone}
                </a>
              ) : null}
              <address className="contact__addr">
                <Icon name="pin" size={18} />
                <span>
                  {site.legalName}
                  <br />
                  {site.address.street}, {site.address.postalCode} {site.address.city}
                  <br />
                  {site.address.area}
                </span>
              </address>
              <div className="contact__socials">
                {Object.entries(site.socials).map(([k, url]) => (
                  <a key={k} href={url} target="_blank" rel="noopener" aria-label={k}>
                    <SocialIcon name={k} size={20} />
                  </a>
                ))}
              </div>
            </div>
            <TLink href={site.answers.url} className="contact__answers card card--pad" data-reveal="up">
              <span className="kicker">{d.nav.answers}</span>
              <span>{locale === "nl" ? "Antwoord op de meest gestelde vragen, direct." : "Answers to the most asked questions, instantly."}</span>
              <Icon name="arrowUpRight" size={20} />
            </TLink>
          </aside>
        </div>
        <div className="container contact-paths">
          <PathBlock
            reveal
            kicker={nl ? "Indicatieve tarieven" : "Indicative pricing"}
            title={nl ? "Diensten & Tarieven Catalogus" : "Services & Pricing Catalogue"}
            text={
              nl
                ? "Blader door al onze diensten met indicatieve tarieven en stel zelf je project samen."
                : "Browse all our services with indicative pricing and put your own project together."
            }
          >
            <Btn href={site.letsgo}>{nl ? "Open de catalogus" : "Open the catalogue"}</Btn>
          </PathBlock>
          <PathBlock
            reveal
            style={{ ["--d" as string]: "0.1s" }}
            kicker={nl ? "Korte intake" : "Quick intake"}
            title={nl ? "Liever eerst even sparren? Doe de korte intake." : "Rather talk it through first? Do the quick intake."}
            text={
              nl
                ? "Vertel in een paar klikken wat je wilt bereiken. Wij denken mee over de slimste aanpak."
                : "Tell us in a few clicks what you want to achieve. We'll think along about the smartest approach."
            }
          >
            <OverlayButton target="intake" look="btn">
              {nl ? "Start de intake" : "Start the intake"}
            </OverlayButton>
          </PathBlock>
        </div>
      </section>

      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          url: abs(paths.contact),
          about: { "@id": orgId },
        }}
      />
    </>
  );
}
