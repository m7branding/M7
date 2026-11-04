import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LandingPage, landingMetadata } from "@/components/landing/Landing";
import type { Locale } from "@/content/types";

type P = { params: { lang: Locale } };

/** Landingspagina, alleen NL: onder /en de M7-404. Inhoud: content/landings.ts. */
export function generateMetadata({ params }: P): Metadata {
  return landingMetadata("branding-voor-je-bedrijf", params.lang);
}

export default function Page({ params }: P) {
  if (params.lang !== "nl") notFound();
  return <LandingPage slug="branding-voor-je-bedrijf" />;
}
