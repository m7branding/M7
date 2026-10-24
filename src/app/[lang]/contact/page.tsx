import type { Metadata } from "next";
import { Aurora } from "@/components/motion/Aurora";
import { TLink } from "@/components/motion/TLink";
import { ContactForm } from "@/components/sections/ContactForm";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Btn } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { SocialIcon } from "@/components/ui/Social";
import { site } from "@/content/site";
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
            <div className="contact__letsgo" data-reveal="up" style={{ ["--d" as string]: "0.1s" }}>
              <Aurora palette="teal" />
              <div className="contact__letsgo-inner">
                <h2 className="h3">{d.contact.configuratorText}</h2>
                <Btn href={site.letsgo}>{d.cta.configurator}</Btn>
              </div>
            </div>
            <TLink href={site.answers.url} className="contact__answers card card--pad" data-reveal="up">
              <span className="kicker">{d.nav.answers}</span>
              <span>{locale === "nl" ? "Antwoord op de meest gestelde vragen, direct." : "Answers to the most asked questions, instantly."}</span>
              <Icon name="arrowUpRight" size={20} />
            </TLink>
          </aside>
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
