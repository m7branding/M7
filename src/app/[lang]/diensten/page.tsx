import type { Metadata } from "next";
import { MediaHero } from "@/components/hero/MediaHero";
import { IntakeCta } from "@/components/overlay/OverlayButton";
import { LevelUp, PillarStack } from "@/components/sections/Home";
import { AppsBand, ServiceToc } from "@/components/sections/ServicesOverview";
import { JsonLd } from "@/components/seo/JsonLd";
import { TLink } from "@/components/motion/TLink";
import { site } from "@/content/site";
import type { Locale } from "@/content/types";
import { allApplications, allServices } from "@/lib/content";
import { getDict } from "@/lib/dict";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, itemListLd } from "@/lib/seo";
import "@/styles/overview.css";

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
  const apps = allApplications().length;
  const half = Math.ceil(list.length / 2);
  return (
    <>
      <MediaHero
        locale={locale}
        page="services"
        crumbs={[
          { name: d.nav.home, path: "/" },
          { name: d.nav.services, path: paths.services },
        ]}
        crumbsLabel={d.misc.breadcrumbs}
        meta={[
          { icon: "grid", text: `${list.length} ${d.nav.services.toLowerCase()}` },
          { text: `${apps} ${d.nav.applications.toLowerCase()}` },
        ]}
        title={[{ t: "Everything your brand needs, " }, { t: "under one roof.", c: "g-pixels" }]}
        lead={
          locale === "nl"
            ? `${list.length} peilers, ${apps} toepassingen en één team. Van eerste merkgevoel tot slimme software en campagnes die renderen.`
            : `${list.length} pillars, ${apps} applications and one team. From first brand feeling to smart software and campaigns that perform.`
        }
      >
        <IntakeCta>{d.cta.launch}</IntakeCta>
        <TLink href={site.letsgo} className="link-dash">
          {d.cta.configurator}
        </TLink>
      </MediaHero>

      <ServiceToc locale={locale} />

      {/* Dezelfde kaarten met showcases als op home, in twee stapels van vijf */}
      <PillarStack locale={locale} from={0} to={half} anchors />
      <AppsBand locale={locale} />
      <PillarStack locale={locale} from={half} anchors />

      <LevelUp locale={locale} />
      <JsonLd data={itemListLd(list.map((s) => ({ name: tr(s.title, locale), path: paths.service(s) })), locale)} />
    </>
  );
}
