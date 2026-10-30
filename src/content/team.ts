/* ============================================================
   Team M7: volgorde = volgorde op de over-ons-pagina.
   `photo` is het portret (800×999), `avatar` een vierkante
   gezichtsuitsnede (256×256) voor de kleine avatar-emblemen.
   ============================================================ */

import type { TeamMember } from "./types";

export const team: TeamMember[] = [
  {
    slug: "martijn-roefs",
    name: "Martijn Roefs",
    first: "Martijn",
    role: { nl: "Eigenaar & Brand Strategist", en: "Owner & Brand Strategist" },
    photo: "/media/team/team-1.webp",
    avatar: "/media/team/avatar/martijn-roefs.webp",
    founder: true,
  },
  {
    slug: "noud-van-der-stappen",
    name: "Noud van der Stappen",
    first: "Noud",
    role: { nl: "Designer & Marketeer", en: "Designer & Marketer" },
    photo: "/media/team/team-2.webp",
    avatar: "/media/team/avatar/noud-van-der-stappen.webp",
  },
  {
    slug: "alexander-koselka",
    name: "Alexander Koselka",
    first: "Alexander",
    role: { nl: "Full Stack Designer & Developer", en: "Full Stack Designer & Developer" },
    photo: "/media/team/team-3.webp",
    avatar: "/media/team/avatar/alexander-koselka.webp",
    fun: { nl: "Een zware battie.", en: "A true 'zware battie'." },
  },
  {
    slug: "maud-bouwmans",
    name: "Maud Bouwmans",
    first: "Maud",
    role: { nl: "Marketeer & Designer", en: "Marketer & Designer" },
    photo: "/media/team/team-5.webp",
    avatar: "/media/team/avatar/maud-bouwmans.webp",
  },
  {
    slug: "finn-oliemeulen",
    name: "Finn Oliemeulen",
    first: "Finn",
    role: { nl: "Full-Stack Developer", en: "Full-Stack Developer" },
    photo: "/media/team/team-6.webp",
    avatar: "/media/team/avatar/finn-oliemeulen.webp",
    fun: { nl: "Knapste kerel op kantoor.", en: "Best-looking guy in the office." },
  },
  {
    slug: "luuk-van-heeswijk",
    name: "Luuk van Heeswijk",
    first: "Luuk",
    role: { nl: "Brand & Graphic Designer", en: "Brand & Graphic Designer" },
    photo: "/media/team/team-7.webp",
    avatar: "/media/team/avatar/luuk-van-heeswijk.webp",
  },
  {
    slug: "eddy-van-heeswijk",
    name: "Eddy van Heeswijk",
    first: "Eddy",
    role: { nl: "Brand & Graphic Designer", en: "Brand & Graphic Designer" },
    photo: "/media/team/team-8.webp",
    avatar: "/media/team/avatar/eddy-van-heeswijk.webp",
  },
  {
    slug: "millie",
    name: "Millie",
    first: "Millie",
    role: { nl: "Chief Happiness Officer", en: "Chief Happiness Officer" },
    photo: "/media/team/team-4.webp",
    avatar: "/media/team/avatar/millie.webp",
    fun: { nl: "Keurt elk ontwerp met een kwispel.", en: "Approves every design with a wag." },
    dog: true,
  },
];

/** Alleen de mensen (zonder Millie), bv. voor JSON-LD en avatar-rijen. */
export const people = team.filter((m) => !m.dog);

export const member = (slug: string) => team.find((m) => m.slug === slug)!;
