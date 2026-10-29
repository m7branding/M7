import type { Metadata } from "next";
import { ClientMap } from "@/components/about/ClientMap";
import { Bento, Experience, HomeHero, Juices, LevelUp, LogoMarquee, Masterpieces, OneStop, PillarStack, StatsBand } from "@/components/sections/Home";
import { JsonLd } from "@/components/seo/JsonLd";
import type { Locale } from "@/content/types";
import { allServices } from "@/lib/content";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { buildMetadata, itemListLd } from "@/lib/seo";

export function generateMetadata({ params }: { params: { lang: Locale } }): Metadata {
  const nl = params.lang === "nl";
  return buildMetadata({
    locale: params.lang,
    path: "/",
    title: nl ? "M7 | Branding, websites, apps & marketing bureau" : "M7 | Branding, websites, apps & marketing agency",
    description: nl
      ? "From pixels to stars. M7 is het one-stop-shop voor branding, websites, webshops, web-apps, marketing, SEO/AEO/GEO, video, print, configurators en AI. Regio Eindhoven, wereldwijd actief."
      : "From pixels to stars. M7 is the one-stop-shop for branding, websites, web shops, web apps, marketing, SEO/AEO/GEO, video, print, configurators and AI. Eindhoven region, active worldwide.",
  });
}

export default function HomePage({ params }: { params: { lang: Locale } }) {
  const locale = params.lang;
  return (
    <>
      {/* Volgorde en opbouw volgens het Figma-ontwerp */}
      <HomeHero locale={locale} />
      <LogoMarquee />
      <OneStop locale={locale} />
      <Masterpieces locale={locale} />
      <Experience locale={locale} />
      <StatsBand locale={locale} />
      <PillarStack locale={locale} from={0} to={5} />
      <Juices locale={locale} />
      <PillarStack locale={locale} from={5} />
      <Bento locale={locale} />
      <ClientMap locale={locale} variant="home" />
      <LevelUp locale={locale} />
      <JsonLd data={itemListLd(allServices().map((s) => ({ name: tr(s.title, locale), path: paths.service(s) })), locale)} />
    </>
  );
}
