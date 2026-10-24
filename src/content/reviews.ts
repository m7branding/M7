/* ============================================================
   Reviews, gekoppeld aan diensten (en optioneel een case).
   Reviews met `draft: true` zijn placeholders voor de opmaak:
   die zie je alleen in development of met NEXT_PUBLIC_SHOW_DRAFTS=1.
   Vervang ze door echte reviews (bijvoorbeeld uit Google) en
   verwijder `draft`.
   ============================================================ */

import type { Review } from "./types";

export const reviews: Review[] = [
  {
    id: "teamtv-emiel",
    author: "Emiel van Lieshout",
    role: { nl: "CEO", en: "CEO" },
    company: "TeamTV",
    avatar: "/media/people/client-1.webp",
    quote: {
      en: "M7 has played a major role in designing the all-new TeamTV web-app interface and its UI/UX. Through their designs, this platform gained a modern and clean appearance that triggered many positive reactions from our users. Additionally, the design perfectly anticipates a growth in functionalities and lay-outs, making it usable and scalable for TeamTV for years.",
      nl: "M7 heeft een grote rol gespeeld in het ontwerp van de volledig vernieuwde TeamTV web-app en de UI/UX ervan. Dankzij hun ontwerpen kreeg het platform een moderne, strakke uitstraling die veel positieve reacties van onze gebruikers opleverde. Bovendien anticipeert het ontwerp perfect op groei in functionaliteiten en lay-outs, waardoor het voor TeamTV nog jaren bruikbaar en schaalbaar is.",
    },
    services: ["web-apps-portals-apps", "websites-webshops", "branding-rebranding"],
    case: "teamtv",
    rating: 5,
  },

  /* ---------- Concept-reviews (vervangen door echte) ---------- */
  {
    id: "draft-branding",
    author: "Naam contactpersoon",
    role: { nl: "Oprichter", en: "Founder" },
    company: "Monvy",
    avatar: "/media/people/client-2.webp",
    quote: {
      nl: "Plaats hier een echte review over het brandingtraject: hoe de samenwerking verliep en wat het nieuwe merk heeft opgeleverd.",
      en: "Place a real review about the branding project here: how the collaboration went and what the new brand delivered.",
    },
    services: ["branding-rebranding", "grafisch-ontwerp-print"],
    case: "monvy",
    draft: true,
  },
  {
    id: "draft-web",
    author: "Naam contactpersoon",
    role: { nl: "Eigenaar", en: "Owner" },
    company: "Repairlab",
    avatar: "/media/people/client-3.webp",
    quote: {
      nl: "Plaats hier een echte review over de website of webshop: snelheid, vindbaarheid en hoe klanten de nieuwe site ervaren.",
      en: "Place a real review about the website or web shop here: speed, findability and how customers experience the new site.",
    },
    services: ["websites-webshops", "seo-aeo-geo"],
    case: "repairlab",
    draft: true,
  },
  {
    id: "draft-marketing",
    author: "Naam contactpersoon",
    role: { nl: "Marketing manager", en: "Marketing manager" },
    company: "Buitenstate",
    avatar: "/media/people/client-4.webp",
    quote: {
      nl: "Plaats hier een echte review over marketing, automatisering of campagnes en de resultaten die het opleverde.",
      en: "Place a real review about marketing, automation or campaigns and the results it delivered here.",
    },
    services: ["marketing-automatisering-funnels", "content-marketing-online-ads", "seo-aeo-geo"],
    draft: true,
  },
  {
    id: "draft-media",
    author: "Naam contactpersoon",
    role: { nl: "Directeur", en: "Director" },
    company: "JURGH Detailing",
    avatar: "/media/people/client-5.webp",
    quote: {
      nl: "Plaats hier een echte review over foto, video, 3D of animatie.",
      en: "Place a real review about photo, video, 3D or animation here.",
    },
    services: ["foto-video-3d-animatie", "content-marketing-online-ads"],
    case: "jurgh-detailing",
    draft: true,
  },
  {
    id: "draft-tools",
    author: "Naam contactpersoon",
    role: { nl: "Commercieel directeur", en: "Commercial director" },
    company: "Titanium Exhaust",
    avatar: "/media/people/client-6.webp",
    quote: {
      nl: "Plaats hier een echte review over een configurator, calculator of lead tool.",
      en: "Place a real review about a configurator, calculator or lead tool here.",
    },
    services: ["configurators-lead-tools-widgets", "web-apps-portals-apps"],
    case: "titanium-exhaust-configurator",
    draft: true,
  },
  {
    id: "draft-ai",
    author: "Naam contactpersoon",
    role: { nl: "Operationeel manager", en: "Operations manager" },
    company: "The Digital Clinic",
    quote: {
      nl: "Plaats hier een echte review over AI, automatisering of consultancy.",
      en: "Place a real review about AI, automation or consultancy here.",
    },
    services: ["ai-consultancy", "marketing-automatisering-funnels"],
    case: "the-digital-clinic",
    draft: true,
  },
];
