/* ============================================================
   Support: wie er klaarstaat en hoe je ons bereikt.
   Gebruikt door de supportmodal (footer, contactpagina, #support).
   ============================================================ */

import { site } from "./site";
import { member } from "./team";
import type { T } from "./types";

export interface SupportPerson {
  name: string;
  /** Voornaam voor korte teksten ("Bel Martijn"). */
  first: string;
  role: T;
  /**
   * Vierkante portretfoto (bv. /media/team/avatar/martijn-roefs.webp).
   * Zonder foto tonen we initialen in de merkgradient.
   */
  photo?: string;
}

function pick(slug: string) {
  const m = member(slug);
  return { name: m.name, first: m.first, photo: m.avatar, role: m.role };
}

export const support = {
  email: "support@m7branding.com",
  /** Telefoonnummer van Martijn (env NEXT_PUBLIC_PHONE). Leeg = geen belknop. */
  phone: site.phone,
  /** Wie de belknop opneemt ("Bel Martijn", "WhatsApp Martijn Roefs"). */
  phoneOwner: "Martijn",
  phoneOwnerFull: "Martijn Roefs",
  /** WhatsApp-nummer (env NEXT_PUBLIC_WHATSAPP, internationaal: 316…). Leeg = geen WhatsApp-knop. */
  whatsapp: site.whatsapp,
  /** Wie support oppakt: Martijn als vast aanspreekpunt, Alexander en Finn aan de techniek. */
  people: [
    { ...pick("martijn-roefs"), role: { nl: "Je vaste aanspreekpunt", en: "Your point of contact" } },
    pick("alexander-koselka"),
    pick("finn-oliemeulen"),
  ] as SupportPerson[],
};

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
