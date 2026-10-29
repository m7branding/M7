/* ============================================================
   /diensten: inhoudsopgave van de diensten (springt naar de
   peilerkaarten) en de band met alle toepassingen.
   ============================================================ */

import { TLink } from "@/components/motion/TLink";
import { Btn } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import type { Locale } from "@/content/types";
import { allApplications, allServices, applicationsFor } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";

/** Genummerde inhoudsopgave: links 01–05, rechts 06–10 (zoals de twee kaartenstapels eronder). */
export function ServiceToc({ locale }: { locale: Locale }) {
  const d = getDict(locale);
  const nl = locale === "nl";
  const list = allServices();
  const apps = allApplications().length;
  return (
    <section className="section svc-toc" aria-labelledby="svc-toc-title">
      <div className="container svc-toc__grid">
        <div className="svc-toc__head" data-reveal="up">
          <h2 id="svc-toc-title" className="svc-toc__title">
            {nl ? `${list.length} diensten, één team.` : `${list.length} services, one team.`}
          </h2>
          <p className="svc-toc__text">
            {nl
              ? "Spring direct naar wat je zoekt, of scroll rustig langs alles. Bij elke dienst zie je echt werk van ons."
              : "Jump straight to what you need, or scroll past everything at your own pace. Every service comes with real work of ours."}
          </p>
          <TLink href={paths.applications} className="link-dash">
            {d.nav.allApplications} <span className="count-badge">{apps}</span>
          </TLink>
        </div>
        <nav className="svc-toc__nav" aria-label={nl ? "Naar een dienst" : "Go to a service"}>
          <ol className="svc-toc__list" data-stagger="" style={{ ["--rows" as string]: Math.ceil(list.length / 2) }}>
            {list.map((s, i) => {
              const n = applicationsFor(s.slug).length;
              return (
                <li key={s.slug} style={{ ["--accent" as string]: s.color }}>
                  <a href={`#${s.slug}`} className="svc-toc__item">
                    <span className="svc-toc__num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="svc-toc__ic" aria-hidden="true">
                      <Icon name={s.icon} size={18} stroke={1.7} />
                    </span>
                    <span className="svc-toc__name">
                      <span className="svc-toc__full">{tr(s.title, locale)}</span>
                      <span className="svc-toc__short">{tr(s.short, locale)}</span>
                    </span>
                    <span className="svc-toc__count">
                      {n}
                      <span className="svc-toc__unit"> {nl ? (n === 1 ? "toepassing" : "toepassingen") : n === 1 ? "application" : "applications"}</span>
                    </span>
                    <span className="svc-toc__go" aria-hidden="true">
                      <Icon name="arrowRight" size={16} stroke={2} />
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>
    </section>
  );
}

/** Band tussen de twee kaartenstapels: het aantal toepassingen, een greep eruit en de link. */
export function AppsBand({ locale }: { locale: Locale }) {
  const nl = locale === "nl";
  const all = allApplications();
  // per dienst de eerste toepassing: een greep uit de breedte van het aanbod
  const picks = allServices().flatMap((s) => {
    const a = applicationsFor(s.slug)[0];
    return a ? [{ a, color: s.color }] : [];
  });
  return (
    <section className="section apps-band" aria-labelledby="apps-band-title">
      <div className="container">
        <div className="apps-band__card" data-reveal="up">
          <p className="apps-band__count">
            <span className="apps-band__num">{all.length}</span>
            <span className="apps-band__unit">{nl ? "toepassingen" : "applications"}</span>
          </p>
          <div className="apps-band__text">
            <h2 id="apps-band-title" className="apps-band__title">
              {nl ? "Van logo tot AI-agent." : "From logo to AI agent."}
            </h2>
            <p>
              {nl
                ? "Elke dienst bestaat uit concrete toepassingen, van een huisstijl tot een klantportaal. Zoek en filter ze op één plek, met de cases en sectoren erbij."
                : "Every service is made up of concrete applications, from a visual identity to a client portal. Search and filter them in one place, with the cases and sectors alongside."}
            </p>
          </div>
          <div className="apps-band__cta">
            <Btn href={paths.applications}>{nl ? "Bekijk alle toepassingen" : "See all applications"}</Btn>
          </div>
          <ul className="apps-band__chips">
            {picks.map(({ a, color }) => (
              <li key={a.slug} style={{ ["--accent" as string]: color }}>
                <TLink href={paths.application(a)} className="apps-band__chip">
                  {tr(a.title, locale)}
                </TLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
