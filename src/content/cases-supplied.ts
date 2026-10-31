import type { Case } from "./types";

/* ============================================================
   Cases die binnenkwamen met de mockups van M7 (artifact "M7 Case
   Mockups"). De teksten beschrijven alleen wat de beelden laten zien;
   ze staan als concept tot M7 ze bevestigt of aanvult (jaar, rol, resultaat).
   Beeld en films: supplied-media.ts.
   ============================================================ */

export const suppliedCases: Case[] = [
  {
    slug: "citex-ai",
    client: "Citex AI",
    title: {
      nl: "Citex AI: gebiedsdata van de stad in één dashboard",
      en: "Citex AI: a city's area data in one dashboard",
    },
    summary: {
      nl: "Dashboardontwerp voor Citex AI: per stadsdeel de KPI's en duurzaamheidsindicatoren naast een 3D-kaart van de stad, op een groot scherm en op de tablet.",
      en: "Dashboard design for Citex AI: per district, the KPIs and sustainability indicators next to a 3D map of the city, on a large screen and on a tablet.",
    },
    sector: "tech-saas-startups",
    services: ["web-apps-portals-apps"],
    applications: ["dashboards", "ux-ui-app-design"],
    tools: [],
    color: "#1A90C0",
    challenge: {
      nl: "Citex AI brengt informatie over de stad per gebied samen. Die moest in één oogopslag leesbaar zijn: hoe staat een stadsdeel ervoor, en waar op de kaart ligt het?",
      en: "Citex AI brings together information about the city, area by area. It had to be readable at a glance: how is a district doing, and where on the map is it?",
    },
    approach: {
      nl: "We ontwierpen een donker, rustig dashboard rond een 3D-kaart van de stad. Per gebied staan de KPI's en duurzaamheidsindicatoren direct naast de kaart, zodat cijfer en plek altijd bij elkaar horen.",
      en: "We designed a dark, calm dashboard around a 3D map of the city. For each area the KPIs and sustainability indicators sit right next to the map, so figure and place always belong together.",
    },
    result: {
      nl: "Een interface die veel gebiedsdata overzichtelijk maakt, op een groot scherm én op de tablet.",
      en: "An interface that makes a lot of area data easy to read, on a large screen and on a tablet.",
    },
    concept: true,
    shape: "wide",
  },
  {
    slug: "eredivisietoppers",
    client: "Eredivisietoppers",
    title: {
      nl: "Eredivisietoppers: spelerskaarten van de supermarkt naar je app",
      en: "Eredivisietoppers: player cards from the supermarket to your app",
    },
    summary: {
      nl: "App-presentatie en pitchdeck voor Eredivisietoppers: spelerskaarten van Eredivisie-spelers verzamelen, spelerspakketten openen, je droomopstelling bouwen en duels volgen in live verslagen.",
      en: "App presentation and pitch deck for Eredivisietoppers: collect player cards of Eredivisie players, open player packs, build your dream line-up and follow duels in live reports.",
    },
    sector: "sport-media",
    services: ["grafisch-ontwerp-print"],
    applications: ["presentaties-pitchdecks"],
    tools: [],
    color: "#E0306A",
    challenge: {
      nl: "Eredivisietoppers brengt het verzamelen van spelerskaarten naar een app. Dat idee moest in één presentatie tastbaar worden: wat verzamel je, hoe speel je ermee en waarom blijf je terugkomen?",
      en: "Eredivisietoppers takes collecting player cards into an app. That idea had to become tangible in a single presentation: what do you collect, how do you play with it and why do you keep coming back?",
    },
    approach: {
      nl: "We bouwden de presentatie op rond de momenten die het spel spannend maken: een pakket openen, de kaarten verzamelen, je opstelling kiezen en een duel live volgen. Elke slide toont het echte scherm uit de app, in de rode en roze huisstijl van Eredivisietoppers.",
      en: "We built the presentation around the moments that make the game exciting: opening a pack, collecting the cards, choosing your line-up and following a duel live. Every slide shows the real screen from the app, in Eredivisietoppers' red and pink identity.",
    },
    result: {
      nl: "Een app-presentatie die het concept laat zien zoals het voelt om het te spelen, op de iPad, op het grote scherm en geprint.",
      en: "An app presentation that shows the concept the way it feels to play it, on the iPad, on the big screen and in print.",
    },
    concept: true,
    shape: "wide",
  },
];
