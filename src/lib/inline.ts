import type { Locale } from "@/content/types";
import type { IconKey } from "@/components/ui/Icon";
import { getApplication, getService } from "./content";
import { tr } from "./i18n";
import { paths } from "./paths";

/** Inline verwijzing in content-tekst: [[dienst-of-toepassing-slug]] of [[slug|eigen label]]. */
export const REF_RE = /\[\[([a-z0-9-]+)(?:\|([^\]]+))?\]\]/g;

export interface InlineRef {
  href: string;
  label: string;
  icon: IconKey;
  color: string;
}

/** Zoekt een dienst of toepassing op; toepassingen krijgen het icoon en de kleur van hun dienst. */
export function resolveRef(slug: string, label: string | undefined, locale: Locale): InlineRef | null {
  const s = getService(slug);
  if (s) return { href: paths.service(s), label: label ?? tr(s.short, locale), icon: s.icon, color: s.color };
  const a = getApplication(slug);
  if (a) {
    const parent = getService(a.service)!;
    return { href: paths.application(a), label: label ?? tr(a.title, locale), icon: parent.icon, color: parent.color };
  }
  return null;
}

/** Zelfde tekst zonder [[...]]-markering (voor JSON-LD, llms.txt en meta). */
export const stripRefs = (text: string, locale: Locale) =>
  text.replace(REF_RE, (_, slug: string, label?: string) => resolveRef(slug, label, locale)?.label ?? label ?? slug);
