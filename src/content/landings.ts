/* ============================================================
   Landingspagina's (alleen NL): /website-laten-bouwen en
   /branding-voor-je-bedrijf. Eén belofte, bewijs (echte cases en
   reviews), werkwijze, FAQ en een formulier. Opbouw zoals de
   landingspagina's van de vorige site; de inhoud komt zoveel
   mogelijk uit de dienst (services/*.ts). Hier staat alleen de
   eigen copy van de pagina. Geen verzonnen cijfers of claims:
   cijfers in de hero zijn de `highlights` van de dienst.
   ============================================================ */

import type { AuroraPalette } from "@/components/motion/Aurora";
import type { ApplicationSlug, ServiceSlug } from "./registry";

export type LandingSlug = "website-laten-bouwen" | "branding-voor-je-bedrijf";

export interface Landing {
  slug: LandingSlug;
  /** De dienst waar teksten, werkwijze, FAQ, cases en reviews vandaan komen. */
  service: ServiceSlug;
  /** Naam in kruimelpad en JSON-LD. */
  name: string;
  /** Naam van het formulier in het GA4-event generate_lead (voor toekomstige ads). */
  form: string;
  /** Kleur van de Aurora in het CTA-blok. */
  palette: AuroraPalette;
  metaTitle: string;
  metaDescription: string;
  /** Het kruimelpad (Home / `name`) staat als kicker boven de H1. */
  hero: {
    /** H1: de belofte. Het deel in `highlight` krijgt het accentverloop. */
    title: string;
    highlight: string;
    lead: string;
  };
  why: {
    kicker: string;
    title: string;
    text: string;
    /** Vier USP's, elk met een link naar de bijbehorende toepassing. */
    items: { title: string; text: string; app: ApplicationSlug }[];
  };
  /** Het verhaal over de uitdaging: hoofdstuk `chapter` van de dienst, met daarna een CTA. */
  story: { chapter: number; cta: { title: string; text: string } };
  reviews: { kicker: string; title: string };
  process: { title: string; text: string; cta: string };
  /** Verdieping uit de SEO-tekst van de dienst (seo.sections[section]), met een eigen kicker. */
  deepDive: { section: number; kicker: string };
  /** Logo's die we ontwierpen (LogoWall) na de cases. */
  logoWall?: boolean;
  faq: { lead: string };
  /** Formulier onderaan (#aanvraag). */
  contact: { kicker: string; title: string; text: string };
}

export const landings: Record<LandingSlug, Landing> = {
  "website-laten-bouwen": {
    slug: "website-laten-bouwen",
    service: "websites-webshops",
    name: "Website laten bouwen",
    form: "lp_website_laten_bouwen",
    palette: "emerald",
    metaTitle: "Website laten bouwen | Webflow & WordPress | M7",
    metaDescription:
      "Website laten bouwen die je merk sterk neerzet en aanvragen oplevert. Strategie, design, development, SEO en hosting onder één dak. Webflow Professional Partner.",
    hero: {
      title: "Een website die net zo hard werkt als jij.",
      highlight: "net zo hard werkt",
      lead: "Of je nu meer aanvragen, meer verkopen of meer naamsbekendheid wilt: wij ontwerpen, bouwen en beheren websites en webshops die snel zijn, goed gevonden worden en écht converteren.",
    },
    why: {
      kicker: "Waarom M7",
      title: "Creatief én technisch sterk.",
      text: "Een compact team van creatieve en technische specialisten, met strategie, design, development en hosting aan één tafel. Geen bureaucratie of lange processen: we denken pragmatisch met je mee en gaan voor een samenwerking voor de lange termijn.",
      items: [
        {
          title: "Strategie & design",
          text: "We beginnen niet bij kleuren en lettertypes, maar bij je doelen. Daarna volgt een UI-design in je huisstijl, voor desktop, tablet en mobiel.",
          app: "ux-ui-webdesign",
        },
        {
          title: "Development",
          text: "Responsive en snel gebouwd in Webflow of WordPress, met een CMS op maat dat je zelf beheert, koppelingen en tracking.",
          app: "webflow-website",
        },
        {
          title: "Vindbaar & snel",
          text: "Schone code, korte laadtijden en een technische SEO-basis, zodat je gevonden wordt in Google én in AI-zoekmachines als ChatGPT en Perplexity.",
          app: "pagespeed-optimalisatie",
        },
        {
          title: "Hosting & beheer",
          text: "Na de lancering laten we je niet los. Met een webplan regelen we hosting, domeinen, SSL, updates en support, zodat je site veilig en snel blijft.",
          app: "hosting-onderhoud",
        },
      ],
    },
    // "Waarom een nieuwe website soms niets oplevert, en hoe het wel werkt"
    story: {
      chapter: 2,
      cta: {
        title: "Waar sta je met je huidige website?",
        text: "Vertel in een paar klikken wat je wilt bereiken. Wij denken mee over de slimste aanpak, geheel vrijblijvend.",
      },
    },
    reviews: { kicker: "Ervaringen", title: "Vraag het maar aan onze klanten." },
    process: {
      title: "Hoe gaan wij te werk?",
      text: "Een website die echt indruk maakt, begint bij het begrijpen van jouw business. Van eerste kennismaking tot livegang en daarna.",
      cta: "Loop je rond met een idee? Deel je plannen en ambities met ons.",
    },
    // "Webflow, WordPress of Shopify: welk platform past bij jou?"
    deepDive: { section: 1, kicker: "WordPress of Webflow?" },
    faq: { lead: "Website laten bouwen: antwoorden op de vragen die we het vaakst krijgen." },
    contact: {
      kicker: "Aanvraag",
      title: "Zo. Klaar voor de volgende stap?",
      text: "Vertel ons over je plannen of je huidige website. We reageren binnen één werkdag, en het eerste gesprek is geheel vrijblijvend.",
    },
  },

  "branding-voor-je-bedrijf": {
    slug: "branding-voor-je-bedrijf",
    service: "branding-rebranding",
    name: "Branding voor je bedrijf",
    form: "lp_branding_voor_je_bedrijf",
    palette: "sunset",
    metaTitle: "Branding voor je bedrijf | Logo, huisstijl & merkstrategie | M7",
    metaDescription:
      "Branding of rebranding voor je bedrijf: merkstrategie, logo, huisstijl en brandbook die opvallen, kloppen en blijven hangen. Strategie, design en techniek onder één dak.",
    hero: {
      title: "Een merk dat opvalt én blijft hangen.",
      highlight: "blijft hangen",
      lead: "Met de juiste branding zet je een merk neer dat klanten aantrekt en vasthoudt. Van merkstrategie tot logo en complete huisstijl: wij bouwen merken die opvallen, kloppen en meegroeien met je ambitie.",
    },
    why: {
      kicker: "Waarom M7",
      title: "Jouw merk. Van strategie tot uitwerking.",
      text: "We denken mee, dagen je uit en maken van jouw visie een merk dat spreekt. Strategie, design en techniek zitten bij ons aan één tafel, dus er raakt niets kwijt tussen moodboard en livegang.",
      items: [
        {
          title: "Merkstrategie",
          text: "Het fundament: waar sta je voor, voor wie ben je er en waarom kiest je klant voor jou?",
          app: "merkstrategie",
        },
        {
          title: "Logo & beeldmerk",
          text: "Een tijdloos, schaalbaar logo dat je bedrijf direct herkenbaar maakt, van favicon tot gevel.",
          app: "logo-ontwerp",
        },
        {
          title: "Huisstijl",
          text: "Kleuren, typografie, beeldtaal en iconen die samen één merk vormen en overal professioneel overkomen.",
          app: "huisstijl",
        },
        {
          title: "Brandbook & toepassingen",
          text: "Alle merkregels helder vastgelegd, met templates voor web, social en print. Zo werkt iedereen on-brand.",
          app: "brandbook",
        },
      ],
    },
    // "Logo, huisstijl of compleet merk: wat heb je eigenlijk nodig?"
    story: {
      chapter: 0,
      cta: {
        title: "Hoe staat het er nu voor met je merk?",
        text: "Vertel in een paar klikken wat je wilt bereiken. Wij denken mee over de slimste aanpak, geheel vrijblijvend.",
      },
    },
    reviews: { kicker: "Ervaringen", title: "Vraag het maar aan onze klanten." },
    process: {
      title: "Hoe gaan wij te werk?",
      text: "Rome is niet in één dag gebouwd, en een sterk merk ook niet. Maar we kunnen wel vandaag samen beginnen met bouwen.",
      cta: "Heb je al een merk, maar wil je naar het volgende niveau? Deel je plannen met ons.",
    },
    // "Wanneer is een rebranding verstandig?"
    deepDive: { section: 1, kicker: "Volledig rebranden?" },
    logoWall: true,
    faq: { lead: "Branding voor je bedrijf: antwoorden op de vragen die we het vaakst krijgen." },
    contact: {
      kicker: "Aanvraag",
      title: "Upgrade jouw merk.",
      text: "Laten we jouw merk beter in de markt zetten. Vertel ons waar je nu staat: we reageren binnen één werkdag, en het eerste gesprek is geheel vrijblijvend.",
    },
  },
};
