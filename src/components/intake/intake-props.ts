import { site } from "@/content/site";
import { support } from "@/content/support";
import { people } from "@/content/team";
import { allServices } from "@/lib/content";
import type { IntakeService } from "./IntakeModal";

/** Server-side: slanke props voor <IntakeModal> (geen volledige dienst-content naar de client). */
export function intakeProps() {
  const services: IntakeService[] = allServices().map((s) => ({
    slug: s.slug,
    title: s.title,
    short: s.short,
    color: s.color,
    icon: s.icon,
  }));
  return {
    services,
    email: site.email,
    phone: site.phone,
    whatsapp: site.whatsapp,
    contactName: { full: support.phoneOwnerFull, first: support.phoneOwner },
    /** Echte gezichten voor de avatar-rij (eerste drie + "+N"). */
    team: people.slice(0, 3).map((m) => ({ name: m.name, photo: m.avatar })),
    teamSize: people.length,
  };
}
