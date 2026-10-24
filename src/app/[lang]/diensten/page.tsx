import type { Metadata } from "next";
import { TLink } from "@/components/motion/TLink";
import { Mockup } from "@/components/mockups";
import { FolderGrid, LevelUp } from "@/components/sections/Home";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/seo/JsonLd";
import { Btn } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { allApplications, allServices, applicationsFor } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, itemListLd } from "@/lib/seo";

type P = { params: { lang: Locale } };

export function generateMetadata({ params }: P): Metadata {
  const nl = params.lang === "nl";
  return buildMetadata({
    locale: params.lang,
    path: paths.services,
    title: nl ? "Diensten | Branding, websites, apps, marketing & AI | M7" : "Services | Branding, websites, apps, marketing & AI | M7",
    description: nl
      ? "Alle diensten van M7 onder één dak: branding, websites & webshops, web-apps, marketing automation, SEO/AEO/GEO, content & ads, video & 3D, print, configurators en AI."
      : "All M7 services under one roof: branding, websites & web shops, web apps, marketing automation, SEO/AEO/GEO, content & ads, video & 3D, print, configurators and AI.",
  });
}

export default function ServicesPage({ params }: P) {
  const locale = params.lang;
  const d = getDict(locale);
  const list = allServices();
  return (
    <>
      <PageHero
        locale={locale}
        crumbs={[
          { name: d.nav.home, path: "/" },
          { name: d.nav.services, path: paths.services },
        ]}
        crumbsLabel={d.misc.breadcrumbs}
        kicker={d.nav.services}
        title={[{ t: "Everything your brand needs, " }, { t: "under one roof.", c: "g-pixels" }]}
        lead={
          locale === "nl"
            ? `${list.length} peilers, ${allApplications().length} toepassingen en één team. Van eerste merkgevoel tot slimme software en campagnes die renderen.`
            : `${list.length} pillars, ${allApplications().length} applications and one team. From first brand feeling to smart software and campaigns that perform.`
        }
      >
        <Btn href={site.letsgo}>{d.cta.configurator}</Btn>
      </PageHero>

      <section className="section section--tight">
        <div className="container">
          <FolderGrid locale={locale} />
        </div>
      </section>

      <section className="section svc-index" aria-label={d.nav.services}>
        <div className="container">
          <ol className="svc-rows">
            {list.map((s, i) => {
              const apps = applicationsFor(s.slug);
              return (
                <li key={s.slug} style={{ ["--accent" as string]: s.color }} data-reveal="up">
                  <TLink href={paths.service(s)} className="svc-row" data-cursor={d.cta.discover}>
                    <span className="svc-row__num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="svc-row__main">
                      <span className="svc-row__title">{tr(s.title, locale)}</span>
                      <span className="svc-row__tag">{tr(s.tagline, locale)}</span>
                    </span>
                    <span className="svc-row__apps">
                      {apps.slice(0, 4).map((a) => (
                        <span key={a.slug}>{tr(a.title, locale)}</span>
                      ))}
                      {apps.length > 4 ? <span>+{apps.length - 4}</span> : null}
                    </span>
                    <span className="svc-row__arrow">
                      <Icon name="arrowUpRight" size={26} stroke={1.8} />
                    </span>
                    <span className="svc-row__preview" aria-hidden="true">
                      <Mockup kind={s.mockup} accent={s.color} />
                    </span>
                  </TLink>
                </li>
              );
            })}
          </ol>
          <p className="center" style={{ marginTop: 48 }} data-reveal="up">
            <TLink href={paths.applications} className="link-dash">
              {d.nav.allApplications} <span className="count-badge">{allApplications().length}</span>
            </TLink>
          </p>
        </div>
      </section>

      <LevelUp locale={locale} />
      <JsonLd data={itemListLd(list.map((s) => ({ name: tr(s.title, locale), path: paths.service(s) })), locale)} />
    </>
  );
}
