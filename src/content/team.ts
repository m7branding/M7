/* Team M7 — vul de namen en rollen in (foto's staan al klaar). */

import type { TeamMember } from "./types";

export const team: TeamMember[] = [
  { name: "Naam teamlid", role: { nl: "Rol", en: "Role" }, photo: "/media/team/team-1.webp" },
  { name: "Naam teamlid", role: { nl: "Rol", en: "Role" }, photo: "/media/team/team-2.webp" },
  { name: "Naam teamlid", role: { nl: "Rol", en: "Role" }, photo: "/media/team/team-3.webp" },
  { name: "Naam teamlid", role: { nl: "Rol", en: "Role" }, photo: "/media/team/team-5.webp" },
  { name: "Naam teamlid", role: { nl: "Rol", en: "Role" }, photo: "/media/team/team-6.webp" },
  {
    name: "Kantoorhond",
    role: { nl: "Chief Happiness Officer", en: "Chief Happiness Officer" },
    photo: "/media/team/team-4.webp",
    fun: { nl: "Keurt elk ontwerp met een kwispel.", en: "Approves every design with a wag." },
  },
];
