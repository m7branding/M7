/* Vaste teksten van de showreel-speler (cases-hero en World of M7) en van de cases-hero zelf. */
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

/** Cases-hero ("Masterpieces by M7") en de balk met feiten en showreels eronder. */
export const HERO_COPY = {
  sub: {
    nl: "Merken, websites en apps waar we trots op zijn. Een greep uit ons werk, op z'n mooist.",
    en: "Brands, websites and apps we're proud of. A selection of our work, at its finest.",
  },
  reels: { nl: "Showreels", en: "Showreels" },
  watch: { nl: "Bekijk de showreel", en: "Watch the showreel" },
  close: { nl: "Sluit de showreel", en: "Close the showreel" },
} satisfies Record<string, T>;
