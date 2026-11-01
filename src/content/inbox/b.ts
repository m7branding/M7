import type { SuppliedSet } from "../supplied-media";
import type { Case } from "../types";

/* ============================================================
   FigmaAssets (M7's eigen map met screenshots, brandbooks, video's
   en mockups), groep B. Nieuwe projecten in `cases`, aangeleverd
   beeld en films per case in `media` (bestanden:
   public/media/cases/<slug>/s-*.{webp,mp4}). Zie inbox/index.ts.
   ============================================================ */

export const inboxB: { cases: Case[]; media: Record<string, SuppliedSet> } = {
  cases: [
    {
      slug: "monvy-branding",
      client: "Monvy",
      title: {
        nl: "Monvy: het merk achter het platform",
        en: "Monvy: the brand behind the platform",
      },
      summary: {
        nl: "Het brandbook van Monvy: logo en logovarianten, het beeldmerk, Poppins als huisletter, het merkkarakter en de tone of voice. Doorgezet in visitekaartjes, briefpapier en een brochure over het platform.",
        en: "Monvy's brandbook: logo and logo variants, the brand mark, Poppins as the house typeface, the brand character and the tone of voice. Carried through to business cards, letterhead and a brochure about the platform.",
      },
      sector: "tech-saas-startups",
      services: ["branding-rebranding", "grafisch-ontwerp-print"],
      applications: ["brandbook", "huisstijl", "tone-of-voice", "visitekaartjes-drukwerk", "brochures-magazines"],
      tools: [],
      logo: "/media/cases/monvy/logo-white.svg",
      cover: "/media/cases/monvy-branding/s-fa-brandbook-08.webp",
      color: "#005F9C",
      challenge: {
        nl: "Monvy wil ondernemers één plek geven voor facturen, betalingen en financiering. Daar hoort een merk bij dat vertrouwen geeft, en dat iedereen die met Monvy werkt op dezelfde manier kan toepassen: op papier, op de website en in het platform.",
        en: "Monvy wants to give businesses one place for invoices, payments and financing. That calls for a brand people trust, and one that everyone who works with Monvy can apply in the same way: on paper, on the website and in the platform.",
      },
      approach: {
        nl: "We legden het merk vast in een brandbook. De naam komt uit het Frans: mon en vy, 'mijn' en 'leven'. Het brandbook beschrijft het logo en de varianten op blauw, donkergrijs en wit, het beeldmerk als losse vorm en Poppins als huisletter in vier gewichten. Het merkkarakter vatten we samen in drie woorden: clever, no nonsense en trustful, met de Ruler als archetype. De tone of voice ligt vast op drie schalen: formeel of casual, jong of gevestigd, eenvoudig of complex. Daarna zetten we de huisstijl door in visitekaartjes, briefpapier en een brochure die het platform en zijn functies laat zien.",
        en: "We captured the brand in a brandbook. The name comes from French: mon and vy, 'my' and 'life'. The brandbook describes the logo and its variants on blue, dark grey and white, the brand mark as a standalone shape and Poppins as the house typeface in four weights. We summed up the brand character in three words: clever, no nonsense and trustful, with the Ruler as its archetype. The tone of voice is set on three scales: formal or casual, youthful or established, simple or complex. We then carried the identity through to business cards, letterhead and a brochure that shows the platform and its features.",
      },
      result: {
        nl: "Een merk met vaste afspraken over logo, kleur, typografie en toon, dat op papier en in het platform hetzelfde verhaal vertelt.",
        en: "A brand with clear rules for logo, colour, typography and tone, telling the same story on paper and in the platform.",
      },
      url: "https://monvy.com",
      shape: "wide",
    },
    {
      slug: "plenty-planet-content",
      client: "Plenty Planet",
      title: {
        nl: "Plenty Planet: energieverhalen voor LinkedIn",
        en: "Plenty Planet: energy stories for LinkedIn",
      },
      summary: {
        nl: "Posts, carrousels en korte video's voor LinkedIn in de huisstijl van Plenty Planet, over solar carparks, energie opslaan en later gebruiken, en bodem- en waterstress.",
        en: "Posts, carousels and short videos for LinkedIn in Plenty Planet's identity, about solar carparks, storing energy to use later, and soil and water stress.",
      },
      sector: "energie-duurzaamheid",
      services: ["content-marketing-online-ads", "foto-video-3d-animatie"],
      applications: ["social-media-marketing", "social-video"],
      tools: [],
      cover: "/media/cases/plenty-planet-content/s-fa-posts.webp",
      color: "#82B444",
      challenge: {
        nl: "Plenty Planet werkt aan grote energieprojecten: solar carparks, batterijopslag en laadinfrastructuur. Op LinkedIn moest dat verhaal kort en visueel worden, voor organisaties die hun energievoorziening anders willen regelen.",
        en: "Plenty Planet works on large energy projects: solar carparks, battery storage and charging infrastructure. On LinkedIn that story had to become short and visual, for organisations that want to arrange their energy supply differently.",
      },
      approach: {
        nl: "We maakten posts en carrousels in de huisstijl van Plenty Planet: een heldere kop, één boodschap per slide en het beeldmerk als afsluiter. De thema's: waarom juist nu solar carparks, zonne-energie opwekken en later gebruiken, en bodem- en waterstress als economisch risico. Daarnaast zijn er korte verticale video's met zonnepanelen, opslag en laadpunten in beeld, met ondertitels in de groene merkkleur.",
        en: "We created posts and carousels in Plenty Planet's identity: a clear headline, one message per slide and the brand mark as the closing touch. The themes: why solar carparks now, generating solar energy and using it later, and soil and water stress as an economic risk. There are also short vertical videos showing solar panels, storage and charging points, with subtitles in the green brand colour.",
      },
      result: {
        nl: "Een herkenbare reeks LinkedIn-content die de thema's van Plenty Planet in korte, visuele stappen uitlegt.",
        en: "A recognisable series of LinkedIn content that explains Plenty Planet's themes in short, visual steps.",
      },
      url: "https://www.plentyplanet.com",
      concept: true,
      shape: "wide",
    },
  ],
  media: {
    /* ---------- MindYourPass (+ Ads + Mockups) ---------- */
    "mindyourpass": {
      images: [
        { src: "/media/cases/mindyourpass/s-fa-ads-grid.webp", title: "MindYourPass — Social ads" },
        { src: "/media/cases/mindyourpass/s-fa-flyer.webp", title: "MindYourPass — Flyer, voor- en achterkant" },
        { src: "/media/cases/mindyourpass/s-fa-logs-laptop.webp", title: "MindYourPass — Logs per webapplicatie" },
        { src: "/media/cases/mindyourpass/s-fa-storage-vs-computation.webp", title: "MindYourPass — Storage-based vs. computation-based" },
        { src: "/media/cases/mindyourpass/s-fa-hybrid-solution.webp", title: "MindYourPass — Hybride oplossing" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-01.webp", title: "MindYourPass — Brandbook" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-02.webp", title: "MindYourPass — Logovarianten" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-03.webp", title: "MindYourPass — Kleurenpalet" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-04.webp", title: "MindYourPass — Kleuren en CTA's" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-05.webp", title: "MindYourPass — Mock-ups en visuals" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-06.webp", title: "MindYourPass — Meten, verbeteren, afdwingen" },
        { src: "/media/cases/mindyourpass/s-fa-brandbook-07.webp", title: "MindYourPass — Iconen" },
      ],
      films: [
        { src: "/media/cases/mindyourpass/s-fa-control-center.mp4", poster: "/media/cases/mindyourpass/s-fa-control-center.webp", w: 1920, h: 1280, title: "Control center en beveiligingsniveaus" },
        { src: "/media/cases/mindyourpass/s-fa-journey-insights.mp4", poster: "/media/cases/mindyourpass/s-fa-journey-insights.webp", w: 1920, h: 1060, title: "The Password Journey: van meten naar inzicht" },
        { src: "/media/cases/mindyourpass/s-fa-journey-improve.mp4", poster: "/media/cases/mindyourpass/s-fa-journey-improve.webp", w: 1920, h: 1060, title: "The Password Journey: verbeteren en afdwingen" },
      ],
    },

    /* ---------- Monvy (platform) ---------- */
    "monvy": {
      images: [
        { src: "/media/cases/monvy/s-fa-laptop-factoring.webp", title: "Monvy — Factuurfinanciering op de laptop" },
        { src: "/media/cases/monvy/s-fa-slide-01.webp", title: "Monvy — Het platform op de iPad" },
        { src: "/media/cases/monvy/s-fa-design-01.webp", title: "Monvy — Opvolgingen als board" },
        { src: "/media/cases/monvy/s-fa-design-02.webp", title: "Monvy — Assistent-calls bij een opvolging" },
        { src: "/media/cases/monvy/s-fa-design-03.webp", title: "Monvy — Workflow voor een factuur" },
        { src: "/media/cases/monvy/s-fa-slide-02.webp", title: "Monvy — De complete opvolging" },
        { src: "/media/cases/monvy/s-fa-slide-03.webp", title: "Monvy — Opvolging pauzeren" },
        { src: "/media/cases/monvy/s-fa-design-04.webp", title: "Monvy — Factuurfinanciering" },
        { src: "/media/cases/monvy/s-fa-design-05.webp", title: "Monvy — Onboarding: betalingen regelen" },
        { src: "/media/cases/monvy/s-fa-design-06.webp", title: "Monvy — Uitleg in het dashboard" },
      ],
      films: [],
    },

    /* ---------- Monvy Branding (split van monvy) ---------- */
    "monvy-branding": {
      cover: "/media/cases/monvy-branding/s-fa-brandbook-08.webp",
      images: [
        { src: "/media/cases/monvy-branding/s-fa-brandbook-08.webp", title: "Monvy — Visitekaartjes en briefpapier" },
        { src: "/media/cases/monvy-branding/s-fa-print.webp", title: "Monvy — Brochure en visitekaartjes" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-01.webp", title: "Monvy — Logo" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-02.webp", title: "Monvy — mon + vy" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-03.webp", title: "Monvy — Beeldmerk" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-04.webp", title: "Monvy — Typografie: Poppins" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-05.webp", title: "Monvy — Merkkarakter" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-06.webp", title: "Monvy — Tone of voice" },
        { src: "/media/cases/monvy-branding/s-fa-brandbook-07.webp", title: "Monvy — Archetype: The Ruler" },
      ],
      films: [],
    },
    /* ---------- Nexis ---------- */
    "nexis-group": {
      images: [],
      films: [
        { src: "/media/cases/nexis-group/s-fa-website-scroll.mp4", poster: "/media/cases/nexis-group/s-fa-website-scroll.webp", w: 1920, h: 1024, title: "Website: van hero tot product" },
        { src: "/media/cases/nexis-group/s-fa-demo-aanvraag.mp4", poster: "/media/cases/nexis-group/s-fa-demo-aanvraag.webp", w: 1920, h: 1024, title: "Leadwidget: in vier stappen naar een demo" },
      ],
    },

    /* ---------- Plenty Planet ---------- */
    "plenty-planet": {
      images: [
        { src: "/media/cases/plenty-planet/s-fa-wireframe.webp", title: "Plenty Planet — Wireframe oplossingspagina met meescrollende widget" },
      ],
      films: [
        // Several/Screen Recording 2026-09-01
        { src: "/media/cases/plenty-planet/s-fa-website-hero.mp4", poster: "/media/cases/plenty-planet/s-fa-website-hero.webp", w: 1920, h: 1028, title: "Website: hero, oplossingen en diensten" },
        { src: "/media/cases/plenty-planet/s-fa-website-cases.mp4", poster: "/media/cases/plenty-planet/s-fa-website-cases.webp", w: 1920, h: 1028, title: "Website: de cases-slider" },
      ],
    },
    "plenty-planet-content": {
      cover: "/media/cases/plenty-planet-content/s-fa-posts.webp",
      images: [
        { src: "/media/cases/plenty-planet-content/s-fa-posts.webp", title: "Plenty Planet — LinkedIn-posts" },
        { src: "/media/cases/plenty-planet-content/s-fa-carousel.webp", title: "Plenty Planet — Carrousel: bodem en waterstress" },
      ],
      films: [
        { src: "/media/cases/plenty-planet-content/s-fa-social-video.mp4", poster: "/media/cases/plenty-planet-content/s-fa-social-video.webp", w: 540, h: 960, title: "Korte video voor LinkedIn" },
      ],
    },

    /* ---------- Repairlab ---------- */
    "repairlab": {
      images: [
        { src: "/media/cases/repairlab/s-fa-brandbook-01.webp", title: "Repairlab — Copybook: strategie en guidelines" },
        { src: "/media/cases/repairlab/s-fa-brandbook-02.webp", title: "Repairlab — Merkpersoonlijkheid" },
        { src: "/media/cases/repairlab/s-fa-brandbook-03.webp", title: "Repairlab — Tone of voice in vier dimensies" },
        { src: "/media/cases/repairlab/s-fa-brandbook-04.webp", title: "Repairlab — Wie we zijn, en wie niet" },
        { src: "/media/cases/repairlab/s-fa-brandbook-05.webp", title: "Repairlab — De metafoor" },
      ],
      films: [],
    },
    "repairlab-content": {
      lead: true,
      images: [
        { src: "/media/cases/repairlab-content/s-fa-print-set.webp", title: "Repairlab — Flyer, advertentie en poster" },
        { src: "/media/cases/repairlab-content/s-fa-car-wrap.webp", title: "Repairlab — Belettering van de Twingo" },
        { src: "/media/cases/repairlab-content/s-fa-print-ad.webp", title: "Repairlab — Printadvertentie" },
        { src: "/media/cases/repairlab-content/s-fa-poster-find-my.webp", title: "Repairlab — Poster: 'Zoek mijn iPhone' uitschakelen" },
        { src: "/media/cases/repairlab-content/s-fa-flyer-screenprotector.webp", title: "Repairlab — Flyer: Keep your phone fit" },
      ],
      films: [],
    },

    /* ---------- SUBLIME ---------- */
    "sublime-branding": {
      lead: true,
      cover: "/media/cases/sublime-branding/s-fa-flyer-porsche.webp",
      images: [
        { src: "/media/cases/sublime-branding/s-fa-flyer-porsche.webp", title: "SUBLIME — Flyer op de motorkap" },
        { src: "/media/cases/sublime-branding/s-fa-laptop-road.webp", title: "SUBLIME CARS — Website op de laptop" },
        { src: "/media/cases/sublime-branding/s-fa-routebook-mockup.webp", title: "Super Food Rally 2.0 — Routeboek" },
        { src: "/media/cases/sublime-branding/s-fa-phone-instagram.webp", title: "SUBLIME — Instagram" },
        { src: "/media/cases/sublime-branding/s-fa-laptop-car.webp", title: "SUBLIME CARS — Homepage" },
        { src: "/media/cases/sublime-branding/s-fa-routebook-01.webp", title: "Routeboek — Cover" },
        { src: "/media/cases/sublime-branding/s-fa-laptop-interior.webp", title: "SUBLIME CARS — Autopagina" },
        { src: "/media/cases/sublime-branding/s-fa-flyer-windshield.webp", title: "SUBLIME — Flyer achter de ruit" },
        { src: "/media/cases/sublime-branding/s-fa-routebook-02.webp", title: "Routeboek — Route deel 2" },
        { src: "/media/cases/sublime-branding/s-fa-routebook-03.webp", title: "Routeboek — Route deel 3" },
        { src: "/media/cases/sublime-branding/s-fa-phone-facebook.webp", title: "SUBLIME — Social profiel" },
        { src: "/media/cases/sublime-branding/s-fa-instagram-post.webp", title: "SUBLIME — Instagram-post: evenementen" },
        { src: "/media/cases/sublime-branding/s-fa-badges.webp", title: "Super Food Rally 2.0 en het SUBLIME-embleem" },
        { src: "/media/cases/sublime-branding/s-fa-design-01.webp", title: "SUBLIME CARS — Autopagina, volledig ontwerp" },
      ],
      films: [],
    },

    /* ---------- Silvr ---------- */
    "silvr": {
      images: [
        { src: "/media/cases/silvr/s-fa-brandbook-01.webp", title: "Silvr — Brandbook: always stay ahead" },
        { src: "/media/cases/silvr/s-fa-brandbook-02.webp", title: "Silvr — Logovarianten" },
        { src: "/media/cases/silvr/s-fa-brandbook-06.webp", title: "Silvr — Merkbeeld" },
        { src: "/media/cases/silvr/s-fa-brandbook-03.webp", title: "Silvr — Kleurpalet" },
        { src: "/media/cases/silvr/s-fa-brandbook-04.webp", title: "Silvr — Typografie" },
        { src: "/media/cases/silvr/s-fa-brandbook-05.webp", title: "Silvr — Beeldmerk als grafisch element" },
        { src: "/media/cases/silvr/s-fa-email-voorstel.webp", title: "Silvr — Mail: je persoonlijke voorstel" },
      ],
      films: [],
    },

    /* ---------- Sparta (alleen beeldpagina's uit de presentatie) ---------- */
    "sparta-blue-hydrogen": {
      images: [
        { src: "/media/cases/sparta-blue-hydrogen/s-fa-slide-01.webp", title: "Sparta II — Presentatie: cover" },
        { src: "/media/cases/sparta-blue-hydrogen/s-fa-slide-02.webp", title: "Sparta II — Toepassingen in de industrie" },
        { src: "/media/cases/sparta-blue-hydrogen/s-fa-slide-03.webp", title: "Sparta II — Logo op merkblauw" },
      ],
      films: [],
    },

    /* ---------- The Digital Clinic ---------- */
    "the-digital-clinic": {
      images: [
        { src: "/media/cases/the-digital-clinic/s-fa-design-01.webp", title: "The Digital Clinic — Webdesign: hero" },
        { src: "/media/cases/the-digital-clinic/s-fa-packaging.webp", title: "The Digital Clinic — Verpakking" },
        { src: "/media/cases/the-digital-clinic/s-fa-design-02.webp", title: "The Digital Clinic — Homepage" },
        { src: "/media/cases/the-digital-clinic/s-fa-design-03.webp", title: "The Digital Clinic — Contact" },
      ],
      films: [],
    },

    /* ---------- The Sandt (online brochure The Diamond House, zonder cijfers) ---------- */
    "the-sandt": {
      images: [
        { src: "/media/cases/the-sandt/s-fa-design-01.webp", title: "The Sandt — Brochure The Diamond House: opening" },
        { src: "/media/cases/the-sandt/s-fa-design-02.webp", title: "The Sandt — Brochure: beeld van het project" },
        { src: "/media/cases/the-sandt/s-fa-brochure-covers.webp", title: "The Sandt — Brochurecovers" },
        { src: "/media/cases/the-sandt/s-fa-design-03.webp", title: "The Sandt — Brochure: The Bahamas" },
        { src: "/media/cases/the-sandt/s-fa-design-04.webp", title: "The Sandt — Brochure: omgevingsanalyse" },
        { src: "/media/cases/the-sandt/s-fa-design-05.webp", title: "The Sandt — Brochure: bouwtekeningen en rapporten" },
      ],
      films: [],
    },

    /* ---------- Several/ (opnames; Hela en KDS zijn cases van groep A) ---------- */
    "hela": {
      images: [],
      films: [
        { src: "/media/cases/hela/s-fa-helascroll.mp4", poster: "/media/cases/hela/s-fa-helascroll.webp", w: 1904, h: 988, title: "Webshop: door de consumentenpagina" },
      ],
    },
    "kds-stansvormen": {
      images: [],
      films: [
        { src: "/media/cases/kds-stansvormen/s-fa-kds-mobile.mp4", poster: "/media/cases/kds-stansvormen/s-fa-kds-mobile.webp", w: 948, h: 1920, title: "Website op mobiel" },
      ],
    },
    "aigora": {
      images: [],
      films: [
        // Several/Screen Recording 2026-10-04 at 1.26.16 PM
        { src: "/media/cases/aigora/s-fa-datasets-carousel.mp4", poster: "/media/cases/aigora/s-fa-datasets-carousel.webp", w: 1910, h: 1528, title: "Website: de bouwstenen van een dataset" },
      ],
    },

    /* ---------- Maarschall ---------- */
    "maarschall": {
      images: [
        { src: "/media/cases/maarschall/s-fa-design-01.webp", title: "Maarschall — Webdesign: The ultimate titanium exhaust" },
        { src: "/media/cases/maarschall/s-fa-design-02.webp", title: "Maarschall — Kies een afdeling" },
      ],
      films: [],
    },

    /* ---------- MisterGlass ---------- */
    "misterglass": {
      images: [
        { src: "/media/cases/misterglass/s-fa-brandbook-mockup-01.webp", title: "MisterGlass — Brandbook: logo en negatief" },
        { src: "/media/cases/misterglass/s-fa-brandbook-mockup-02.webp", title: "MisterGlass — Brandbook: typografie" },
        { src: "/media/cases/misterglass/s-fa-brandbook-01.webp", title: "MisterGlass — Brandbook" },
        { src: "/media/cases/misterglass/s-fa-brandbook-02.webp", title: "MisterGlass — Logo" },
        { src: "/media/cases/misterglass/s-fa-brandbook-03.webp", title: "MisterGlass — Logo op glas" },
        { src: "/media/cases/misterglass/s-fa-brandbook-04.webp", title: "MisterGlass — Kleurpalet" },
        { src: "/media/cases/misterglass/s-fa-brandbook-05.webp", title: "MisterGlass — Archetype: Regular Guy + Innocent" },
        { src: "/media/cases/misterglass/s-fa-brandbook-06.webp", title: "MisterGlass — Beeldtaal" },
        { src: "/media/cases/misterglass/s-fa-posters.webp", title: "MisterGlass — Posters" },
        { src: "/media/cases/misterglass/s-fa-logo-exploration.webp", title: "MisterGlass — Logo-exploratie" },
      ],
      films: [],
    },

    /* ---------- NKTV ---------- */
    "nktv": {
      images: [
        { src: "/media/cases/nktv/s-fa-brandbook-01.webp", title: "NKTV — Logo op achtergronden" },
        { src: "/media/cases/nktv/s-fa-brandbook-02.webp", title: "NKTV — Logo en woordmerk" },
        { src: "/media/cases/nktv/s-fa-brandbook-03.webp", title: "NKTV — Merkkleuren" },
        { src: "/media/cases/nktv/s-fa-brandbook-04.webp", title: "NKTV — Typografie" },
        { src: "/media/cases/nktv/s-fa-brandbook-05.webp", title: "NKTV — Basisuitstraling" },
      ],
      films: [],
    },

    /* ---------- Nova (alles Nova Funeral Cars) ---------- */
    "nova-funeral-cars": {
      images: [
        { src: "/media/cases/nova-funeral-cars/s-fa-print-a4.webp", title: "Nova Funeral Cars — Flyers A4" },
        { src: "/media/cases/nova-funeral-cars/s-fa-flyer-mockup.webp", title: "Nova Funeral Cars — Flyer: a ride in style" },
        { src: "/media/cases/nova-funeral-cars/s-fa-print-ads.webp", title: "Nova Funeral Cars — Advertentie en A5-flyer" },
      ],
      films: [],
    },

    /* ---------- OUTPLAY ---------- */
    "outplay": {
      images: [
        { src: "/media/cases/outplay/s-fa-brandbook-01.webp", title: "OUTPLAY — Outdoor Play Labs" },
        { src: "/media/cases/outplay/s-fa-brandbook-02.webp", title: "OUTPLAY — Logo en woordmerk" },
        { src: "/media/cases/outplay/s-fa-brandbook-03.webp", title: "OUTPLAY — Kleurpalet" },
        { src: "/media/cases/outplay/s-fa-brandbook-04.webp", title: "OUTPLAY — Illustraties" },
        { src: "/media/cases/outplay/s-fa-brandbook-05.webp", title: "OUTPLAY — Iconen" },
        { src: "/media/cases/outplay/s-fa-brandbook-06.webp", title: "OUTPLAY — Toepassing" },
        { src: "/media/cases/outplay/s-fa-brandbook-07.webp", title: "OUTPLAY — Digitale mock-ups" },
      ],
      films: [],
    },

    /* ---------- RSI: veel scherper dan de bestaande 691px-beelden ---------- */
    "rsi-3d-sportvelden": {
      lead: true,
      cover: "/media/cases/rsi-3d-sportvelden/s-fa-playce-air-03.webp",
      images: [
        { src: "/media/cases/rsi-3d-sportvelden/s-fa-field-hockey-alberta-03.webp", title: "Field Hockey Alberta — Veld met logo" },
        { src: "/media/cases/rsi-3d-sportvelden/s-fa-playce-air-02.webp", title: "Playce Air — Sporthal onder een luchtdak" },
        { src: "/media/cases/rsi-3d-sportvelden/s-fa-field-hockey-alberta-01.webp", title: "Field Hockey Alberta — Kooi van bovenaf" },
        { src: "/media/cases/rsi-3d-sportvelden/s-fa-playce-air-01.webp", title: "Playce Air — Speelveld" },
        { src: "/media/cases/rsi-3d-sportvelden/s-fa-field-hockey-alberta-02.webp", title: "Field Hockey Alberta — In het park" },
        { src: "/media/cases/rsi-3d-sportvelden/s-fa-playce-air-03.webp", title: "Playce Air — Vloerbelijning" },
      ],
      films: [],
    },

    /* ---------- SolidLayer ---------- */
    "solidlayer": {
      images: [
        { src: "/media/cases/solidlayer/s-fa-brandbook-01.webp", title: "SolidLayer — Brandbook: trust the layer" },
        { src: "/media/cases/solidlayer/s-fa-brandbook-02.webp", title: "SolidLayer — Logo" },
        { src: "/media/cases/solidlayer/s-fa-brandbook-03.webp", title: "SolidLayer — Logovarianten" },
        { src: "/media/cases/solidlayer/s-fa-brandbook-04.webp", title: "SolidLayer — Kleurpalet" },
        { src: "/media/cases/solidlayer/s-fa-brandbook-05.webp", title: "SolidLayer — Typografie: Roboto Mono" },
      ],
      films: [],
    },

    /* ---------- Sparked ---------- */
    "sparked": {
      images: [
        { src: "/media/cases/sparked/s-fa-brandbook-02.webp", title: "Sparked — Logo: People Driven" },
        { src: "/media/cases/sparked/s-fa-brandbook-06.webp", title: "Sparked — Jouw moment. Onze passie." },
        { src: "/media/cases/sparked/s-fa-brandbook-01.webp", title: "Sparked — Visie" },
        { src: "/media/cases/sparked/s-fa-brandbook-03.webp", title: "Sparked — Logovarianten" },
        { src: "/media/cases/sparked/s-fa-brandbook-04.webp", title: "Sparked — Merkkleuren" },
        { src: "/media/cases/sparked/s-fa-brandbook-05.webp", title: "Sparked — Typografie" },
      ],
      films: [],
    },

    /* ---------- The Filmcar ---------- */
    "the-filmcar": {
      hero: "/media/cases/the-filmcar/s-fa-rolling-shots.mp4",
      images: [
        { src: "/media/cases/the-filmcar/s-fa-design-02.webp", title: "The Filmcar — Webdesign: Shots like never before" },
        { src: "/media/cases/the-filmcar/s-fa-design-01.webp", title: "The Filmcar — Webdesign: tweede richting" },
      ],
      films: [
        { src: "/media/cases/the-filmcar/s-fa-rolling-shots.mp4", poster: "/media/cases/the-filmcar/s-fa-rolling-shots.webp", w: 1920, h: 1080, title: "Hero-video van de website: rolling shots" },
      ],
    },

    /* ---------- YOUR.earth ---------- */
    "your-earth": {
      lead: true,
      images: [
        { src: "/media/cases/your-earth/s-fa-brandbook-01.webp", title: "YOUR.earth — Website op de laptop" },
        { src: "/media/cases/your-earth/s-fa-brandbook-02.webp", title: "YOUR.earth — Website op mobiel" },
        { src: "/media/cases/your-earth/s-fa-brandbook-03.webp", title: "YOUR.earth — Visitekaartjes" },
        { src: "/media/cases/your-earth/s-fa-brandbook-04.webp", title: "YOUR.earth — Brandbook" },
        { src: "/media/cases/your-earth/s-fa-brandbook-05.webp", title: "YOUR.earth — Logoconstructie" },
        { src: "/media/cases/your-earth/s-fa-brandbook-06.webp", title: "YOUR.earth — Kleurpalet" },
        { src: "/media/cases/your-earth/s-fa-brandbook-07.webp", title: "YOUR.earth — Typografie" },
        { src: "/media/cases/your-earth/s-fa-brandbook-08.webp", title: "YOUR.earth — Every landscape has a plan" },
      ],
      films: [],
    },
  },
};
