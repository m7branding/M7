/* ============================================================
   Support: wie er klaarstaat en hoe je ons bereikt.
   Gebruikt door de supportmodal (footer, contactpagina, #support).
   ============================================================ */

import { site } from "./site";
import type { T } from "./types";

export interface SupportPerson {
  name: string;
  /** Voornaam voor korte teksten ("Bel Martijn"). */
  first: string;
  role: T;
  /**
   * Portretfoto (vierkant, bv. /media/team/team-1.webp).
   * Zonder foto tonen we initialen in de merkgradient.
   */
  photo?: string;
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
  /*
   * TODO(M7): koppel de juiste teamfoto's. We weten nog niet welke foto in
   * public/media/team/team-1..6.webp bij wie hoort (team-4 is de kantoorhond).
   * Zet per persoon `photo: "/media/team/team-X.webp"` en controleer de rollen.
   */
  people: [
    { name: "Martijn Roefs", first: "Martijn", role: { nl: "Je vaste aanspreekpunt", en: "Your point of contact" } },
    { name: "Alexander", first: "Alexander", role: { nl: "Support", en: "Support" } },
    { name: "Finn", first: "Finn", role: { nl: "Support", en: "Support" } },
  ] as SupportPerson[],
};

export const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]!.toUpperCase())
    .join("");
