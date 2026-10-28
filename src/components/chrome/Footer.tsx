import { M7BadgeReveal } from "@/components/brand/M7BadgeReveal";
import { intakeProps } from "@/components/intake/intake-props";
import { PixelGrid } from "@/components/motion/PixelGrid";
import { TLink } from "@/components/motion/TLink";
import { LiveDot } from "@/components/overlay/LiveDot";
import { OverlayButton } from "@/components/overlay/OverlayButton";
import { IntakeGate, SupportGate } from "@/components/overlay/OverlayGates";
import { SocialIcon } from "@/components/ui/Social";
import { site } from "@/content/site";
import { support } from "@/content/support";
import type { Locale } from "@/content/types";
import { allCases, allServices } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { localize, tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { Newsletter } from "./Newsletter";

export function Footer({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const cases = allCases().filter((c) => c.featured).slice(0, 6);
  const year = new Date().getFullYear();
  const nl = locale === "nl";

  return (
    <footer className="ftr">
      <div className="ftr__badge-row">
        <PixelGrid variant="sides" intensity={1.25} />
        <M7BadgeReveal className="ftr__badge" />
      </div>
      <div className="container ftr__news">
        <Newsletter label={d.newsletter.label} question={d.newsletter.question} placeholder={d.newsletter.placeholder} thanks={d.newsletter.thanks} />
        <ul className="news__perks">
          {d.newsletter.perks.map((p) => (
            <li key={p}>
              <img src="/brand/check.svg" alt="" width={16} height={13} />
              {p}
            </li>
          ))}
        </ul>
      </div>

      <div className="container">
        <div className="ftr__cols">
          <div className="ftr__col">
            <h3>{d.footer.pillars}</h3>
            <ul>
              {allServices().map((s) => (
                <li key={s.slug}>
                  <TLink href={paths.service(s)}>{tr(s.short, locale)}</TLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="ftr__col">
            <h3>{d.footer.projects}</h3>
            <ul>
              {cases.map((c) => (
                <li key={c.slug}>
                  <TLink href={paths.case(c)}>{c.client}</TLink>
                </li>
              ))}
              <li>
                <TLink href={paths.cases}>{d.nav.allCases} →</TLink>
              </li>
            </ul>
          </div>
          <div className="ftr__col">
            <h3>{d.footer.company}</h3>
            <ul>
              <li>
                <TLink href={paths.about}>{d.footer.about}</TLink>
              </li>
              <li>
                <TLink href={paths.process}>{d.footer.process}</TLink>
              </li>
              <li>
                <TLink href={`${paths.about}#team`}>{d.footer.team}</TLink>
              </li>
              <li>
                <TLink href={paths.sectors}>{d.nav.sectors}</TLink>
              </li>
              <li>
                <TLink href={paths.applications}>{d.nav.applications}</TLink>
              </li>
              <li>
                <TLink href={paths.contact}>{d.nav.contact}</TLink>
              </li>
              <li>
                <OverlayButton target="support" className="ftr-sup">
                  <LiveDot size={6} />
                  Support
                </OverlayButton>
              </li>
              <li>
                <a href={site.answers.url} target="_blank" rel="noopener">
                  {d.footer.answers}
                </a>
              </li>
              <li>
                <a href={site.letsgo}>{nl ? "Catalogus & tarieven" : "Catalogue & pricing"}</a>
              </li>
              <li>
                <OverlayButton target="intake" className="ftr-sup">
                  {nl ? "Korte intake" : "Quick intake"}
                </OverlayButton>
              </li>
            </ul>
          </div>
          <div className="ftr__col">
            <h3>{d.footer.social}</h3>
            <div className="ftr__social">
              {Object.entries(site.socials).map(([k, url]) => (
                <a key={k} href={url} target="_blank" rel="noopener" aria-label={k}>
                  <SocialIcon name={k} size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="ftr__legal">
        <OverlayButton target="support" className="ftr-sup ftr-sup--pill">
          <LiveDot size={7} />
          Support
          <span className="ftr-sup__live">Live</span>
        </OverlayButton>
        <TLink href={paths.terms}>{d.footer.terms}</TLink>
        <TLink href={paths.privacy}>{d.footer.privacy}</TLink>
        <TLink href={paths.cookies}>{d.footer.cookies}</TLink>
        <p className="ftr__copy">
          © {year} {site.legalName} · {site.address.street}, {site.address.postalCode} {site.address.city}
          {site.kvk ? ` · KvK ${site.kvk}` : ""} · {d.footer.rights}
        </p>
      </div>

      {/* Site-brede modals: openen via de knoppen hierboven, overal via #support / #intake */}
      <SupportGate email={support.email} phone={support.phone} phoneOwner={support.phoneOwner} people={support.people} />
      <IntakeGate {...intakeProps()} privacyHref={localize(paths.privacy, locale)} catalogHref={site.letsgo} />
    </footer>
  );
}
