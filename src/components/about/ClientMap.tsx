import type { Locale } from "@/content/types";

/** Gestippelde wereldkaart met klanten + close-up van Nederland. (Wordt gebouwd.) */
export function ClientMap({ locale }: { locale: Locale }) {
  return <section className="section client-map" data-locale={locale} aria-hidden="true" />;
}
