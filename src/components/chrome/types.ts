import type { IconKey } from "@/components/ui/Icon";

/** Serialiseerbare, al vertaalde navigatiedata voor de client-chrome. */
export interface NavData {
  services: {
    slug: string;
    title: string;
    short: string;
    intro: string;
    color: string;
    icon: IconKey;
    apps: { slug: string; title: string }[];
  }[];
  sectors: { slug: string; title: string; icon: IconKey }[];
  cases: { slug: string; client: string; title: string; cover?: string; color: string }[];
  caseCount: number;
  team: { photo: string; name: string }[];
  contact: { email: string; phone: string; address: string; letsgo: string; answers: string };
  socials: { key: string; url: string }[];
}
