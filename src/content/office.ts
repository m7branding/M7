/* ============================================================
   Kantoor & cultuur: foto's van ons pand in Nistelrode.
   Elke foto staat in twee maten in /media/office/:
   <naam>.webp (max 1600px) en <naam>-sm.webp (max 720px).
   ============================================================ */

import type { T } from "./types";

export interface OfficePhoto {
  name: string;
  w: number;
  h: number;
  alt: T;
  /** office = pand & werkplekken, culture = team & ontspanning */
  kind: "office" | "culture";
}

export const officePhoto = (p: OfficePhoto, size: "sm" | "lg" = "lg") =>
  `/media/office/${p.name}${size === "sm" ? "-sm" : ""}.webp`;

export const officePhotos: OfficePhoto[] = [
  { name: "kantoor-buitenkant", w: 1200, h: 1600, kind: "office", alt: { nl: "Het kantoor van M7 aan de Loosbroekseweg in Nistelrode bij zonsondergang", en: "The M7 office on the Loosbroekseweg in Nistelrode at sunset" } },
  { name: "kantoor-werkplekken", w: 1600, h: 1200, kind: "office", alt: { nl: "Open studio met werkplekken, olijfboom en LED-quote", en: "Open studio with desks, an olive tree and an LED quote" } },
  { name: "olijfboom-led-quote", w: 1200, h: 1600, kind: "office", alt: { nl: "Olijfboom in de studio met de LED-quote 'With our thoughts we make the world'", en: "Olive tree in the studio with the LED quote 'With our thoughts we make the world'" } },
  { name: "led-quote", w: 900, h: 1600, kind: "office", alt: { nl: "Blauwe LED-quote 'With our thoughts we make the world' boven de studio", en: "Blue LED quote 'With our thoughts we make the world' above the studio" } },
  { name: "m7-logo-wand", w: 900, h: 1600, kind: "office", alt: { nl: "M7-logo op de wand bij de entree", en: "M7 logo on the wall at the entrance" } },
  { name: "werkplek", w: 1600, h: 1200, kind: "office", alt: { nl: "Werkplek met twee schermen onder het houten dak", en: "Desk with two screens under the wooden roof" } },
  { name: "meetingroom", w: 1600, h: 1200, kind: "office", alt: { nl: "Meetingroom met stenen wand en zicht op de biljarttafel", en: "Meeting room with a stone wall and a view of the pool table" } },
  { name: "silence-room", w: 1200, h: 1600, kind: "office", alt: { nl: "Glazen deur naar de silence room, met to-do's op de wand", en: "Glass door to the silence room, with to-dos on the wall" } },
  { name: "millie-kantine", w: 1200, h: 1600, kind: "culture", alt: { nl: "Kantoorhond Millie in de kantine met lange tafel en haardvuur op het scherm", en: "Office dog Millie in the canteen with a long table and a fireplace on screen" } },
  { name: "lounge-biljart", w: 1600, h: 1200, kind: "culture", alt: { nl: "Team aan het biljarten in de lounge met bar", en: "The team playing pool in the lounge with bar" } },
  { name: "fifa", w: 1200, h: 1600, kind: "culture", alt: { nl: "Een potje FIFA op de PlayStation in de kantine", en: "A game of FIFA on the PlayStation in the canteen" } },
  { name: "fitness", w: 1200, h: 1600, kind: "culture", alt: { nl: "Trainen in de eigen fitnessruimte onder de LED-quote 'Trust the process'", en: "Training in our own gym under the LED quote 'Trust the process'" } },
  { name: "padel", w: 1200, h: 1600, kind: "culture", alt: { nl: "Padellen met het team", en: "Playing padel with the team" } },
  { name: "teamborrel", w: 1600, h: 1200, kind: "culture", alt: { nl: "Teamborrel met een biertje", en: "Team drinks" } },
  { name: "motogp-assen", w: 1200, h: 1600, kind: "culture", alt: { nl: "Teamuitje naar de MotoGP in Assen", en: "Team outing to the MotoGP in Assen" } },
  { name: "m7-jas", w: 1200, h: 1600, kind: "culture", alt: { nl: "M7-jas aan de kapstok: branding, design, websites, apps en AI", en: "M7 jacket on the coat rack: branding, design, websites, apps and AI" } },
  { name: "zonsondergang", w: 900, h: 1600, kind: "culture", alt: { nl: "Zonsondergang boven de weilanden rond het kantoor", en: "Sunset over the fields around the office" } },
];

export const office = {
  /** Faciliteiten in ons pand (ook gebruikt in JSON-LD amenityFeature). */
  amenities: [
    { nl: "Ruime eigen parkeerplaats", en: "Spacious private car park" },
    { nl: "Laadpaal voor elektrische auto's", en: "EV charging point" },
    { nl: "Meerdere meetingrooms", en: "Several meeting rooms" },
    { nl: "Silence room", en: "Silence room" },
    { nl: "Ruime kantine met PlayStation", en: "Large canteen with PlayStation" },
    { nl: "Eigen fitnessruimte", en: "Our own gym" },
    { nl: "Lounge met darts, biljart en bar", en: "Lounge with darts, pool and a bar" },
  ] as T[],
};
