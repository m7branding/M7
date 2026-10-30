/* Vaste teksten van de showreel-speler (cases-hero en World of M7). */
import type { Locale, T } from "@/content/types";
import { tr } from "@/lib/i18n";
import type { ShowreelLabels } from "./ShowreelPlayer";

const COPY = {
  media: { nl: "Showreel met werk van M7", en: "Showreel of work by M7" },
  pause: { nl: "Pauzeer de showreel", en: "Pause the showreel" },
  play: { nl: "Speel de showreel af", en: "Play the showreel" },
  show: { nl: "Toon showreel", en: "Show reel" },
  now: { nl: "Nu in beeld", en: "Now showing" },
  featuring: { nl: "Met werk voor", en: "Featuring" },
} satisfies Record<keyof ShowreelLabels, T>;

export function showreelLabels(locale: Locale): ShowreelLabels {
  return Object.fromEntries(Object.entries(COPY).map(([k, v]) => [k, tr(v, locale)])) as ShowreelLabels;
}
