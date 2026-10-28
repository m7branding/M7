import type { Metadata } from "next";
import { LOCALES, type Locale } from "@/content/types";
import { buildMetadata } from "@/lib/seo";
import { paths } from "@/lib/paths";

type P = { params: { lang: Locale } };

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: P): Metadata {
  const nl = params.lang === "nl";
  return buildMetadata({
    locale: params.lang,
    path: paths.process,
    title: nl ? "Ons werkproces per dienst | M7" : "Our process per service | M7",
    description: nl
      ? "Hoe M7 werkt, per dienst: van branding en websites tot apps, marketing en AI. Kies je dienst en zie stap voor stap hoe we samen tot resultaat komen."
      : "How M7 works, per service: from branding and websites to apps, marketing and AI. Pick a service and see step by step how we get to results together.",
  });
}

/** Werkproces per dienst (wordt in deze ronde uitgebouwd). */
export default function ProcessPage() {
  return <article className="process-page" />;
}
