// ============================================================
// M7 — Toolstack. Alles waar we mee werken, gegroepeerd, met per tool
// een korte omschrijving van wát we ermee doen voor onze klanten.
// ============================================================

import type { BrandKey } from "@/components/experience/BrandIcon";

export type Tool = {
  key: BrandKey;
  group: string;
  /** Wat wij hiermee doen voor klanten — 1 à 2 zinnen. */
  what: string;
};

export const TOOL_GROUPS = [
  "Bouwen & CMS",
  "Hosting & infrastructuur",
  "E-commerce & betalen",
  "Meten & compliance",
  "Marketing & advertenties",
  "AI",
  "Automatisering & data",
  "Design & content",
  "Communicatie & samenwerking",
  "Apps",
] as const;

export const TOOLS: Tool[] = [
  // ---------------------------------------- Bouwen & CMS
  {
    key: "wordpress",
    group: "Bouwen & CMS",
    what: "Ons werkpaard voor content-gedreven sites. We bouwen custom thema's met eigen velden, zodat je alles zelf beheert zonder dat je de vormgeving kunt slopen.",
  },
  {
    key: "webflow",
    group: "Bouwen & CMS",
    what: "Voor visueel sterke sites met vloeiende interacties. Wij zijn Webflow Professional Partner en bouwen volledig custom — geen template.",
  },
  {
    key: "nextdotjs",
    group: "Bouwen & CMS",
    what: "Voor maatwerkplatformen en headless sites. Snelle server-rendering, goede SEO en een front-end die precies doet wat jij nodig hebt.",
  },
  {
    key: "react",
    group: "Bouwen & CMS",
    what: "De basis onder onze web-apps en portalen. Componenten die we hergebruiken, zodat nieuwe functionaliteit sneller en consistenter live gaat.",
  },
  {
    key: "typescript",
    group: "Bouwen & CMS",
    what: "Alle maatwerk schrijven we getypeerd. Dat vangt fouten af vóór livegang en houdt code jaren later nog onderhoudbaar.",
  },
  {
    key: "tailwindcss",
    group: "Bouwen & CMS",
    what: "Voor consistente styling vanuit design tokens. Je huisstijl zit in het systeem, niet in losse regels CSS.",
  },
  {
    key: "memberstack",
    group: "Bouwen & CMS",
    what: "Accounts, rollen en betaalde toegang op Webflow-sites. Ideaal voor gated content, ledenomgevingen en klantportalen zonder zwaar maatwerk.",
  },
  {
    key: "wized",
    group: "Bouwen & CMS",
    what: "Waarmee we Webflow-sites tot echte web-apps maken: data ophalen, formulieren met logica en dynamische schermen.",
  },
  {
    key: "weglot",
    group: "Bouwen & CMS",
    what: "Meertaligheid op Webflow-sites binnen een dag live, met nette URL's en hreflang. Vertalingen redigeer je daarna zelf.",
  },
  {
    key: "translatepress",
    group: "Bouwen & CMS",
    what: "Onze keuze voor meertalige WordPress-sites. Vertalen in de context van de pagina, inclusief WooCommerce-teksten.",
  },

  // ---------------------------------------- Hosting & infrastructuur
  {
    key: "amazonwebservices",
    group: "Hosting & infrastructuur",
    what: "Voor zwaardere web-apps en opslag. We zetten omgevingen op die meeschalen met je verkeer in plaats van om te vallen bij een piek.",
  },
  {
    key: "vercel",
    group: "Hosting & infrastructuur",
    what: "Onze plek voor Next.js-projecten: deploys vanaf de repository, previews per wijziging en wereldwijd snelle levering.",
  },
  {
    key: "netlify",
    group: "Hosting & infrastructuur",
    what: "Voor statische sites en landingspagina's die simpelweg altijd moeten staan, met automatische builds vanuit Git.",
  },
  {
    key: "cloudflare",
    group: "Hosting & infrastructuur",
    what: "DNS, CDN en beveiliging. Zorgt dat je site snel laadt en dat bots en aanvallen niet bij je server komen.",
  },
  {
    key: "github",
    group: "Hosting & infrastructuur",
    what: "Alle code staat in versiebeheer met reviews en releases. Je bent nooit afhankelijk van één persoon of één laptop.",
  },
  {
    key: "docker",
    group: "Hosting & infrastructuur",
    what: "Voor omgevingen die overal identiek draaien — lokaal, op staging en in productie. Geen 'bij mij werkt het wel'.",
  },
  {
    key: "nodedotjs",
    group: "Hosting & infrastructuur",
    what: "Draait onze API's, achtergrondtaken en koppelingen. Alles wat buiten de browser om moet gebeuren.",
  },
  {
    key: "supabase",
    group: "Hosting & infrastructuur",
    what: "Database, authenticatie en opslag voor web-apps. Snel op te zetten en toch een volwaardige Postgres eronder.",
  },
  {
    key: "postgresql",
    group: "Hosting & infrastructuur",
    what: "Onze standaard database voor maatwerk. Betrouwbaar, snel en geschikt voor complexe datamodellen.",
  },
  {
    key: "resend",
    group: "Hosting & infrastructuur",
    what: "Voor transactionele mail vanuit je site of app: bevestigingen, notificaties en wachtwoordherstel die daadwerkelijk aankomen.",
  },

  // ---------------------------------------- E-commerce & betalen
  {
    key: "woocommerce",
    group: "E-commerce & betalen",
    what: "Onze keuze voor shops op WordPress. Volledig aan te passen: prijslogica, klantgroepen, facturen en koppelingen naar je backoffice.",
  },
  {
    key: "shopify",
    group: "E-commerce & betalen",
    what: "Voor shops die snel live moeten en weinig maatwerk in de checkout nodig hebben. Wij verzorgen thema, structuur en integraties.",
  },
  {
    key: "stripe",
    group: "E-commerce & betalen",
    what: "Betalingen, abonnementen en uitbetalingen in maatwerkplatformen — inclusief split payments voor marktplaatsen.",
  },

  // ---------------------------------------- Meten & compliance
  {
    key: "googleanalytics",
    group: "Meten & compliance",
    what: "GA4 richten we volledig in: events, conversies en e-commerce. Zodat je ziet wat er echt gebeurt in plaats van alleen bezoekersaantallen.",
  },
  {
    key: "googletagmanager",
    group: "Meten & compliance",
    what: "Alle meetcode loopt via GTM, ook server-side. Nieuwe tags erbij zonder je site aan te raken.",
  },
  {
    key: "googlesearchconsole",
    group: "Meten & compliance",
    what: "Voor indexatie, zoekwoorden en technische signalen uit Google. De eerste plek waar we kijken bij vindbaarheidsproblemen.",
  },
  {
    key: "clarity",
    group: "Meten & compliance",
    what: "Sessie-opnames en heatmaps van echte bezoekers. Laat zien wáárom mensen afhaken, waar cijfers alleen tonen dát ze afhaken.",
  },
  {
    key: "pagespeedinsights",
    group: "Meten & compliance",
    what: "Waarmee we Core Web Vitals meten voor en na een optimalisatieslag, zodat de snelheidswinst zwart op wit staat.",
  },
  {
    key: "consentstudio",
    group: "Meten & compliance",
    what: "Nederlandse cookiebanner die we koppelen aan Consent Mode. Aantoonbaar registreren wie waarvoor toestemming gaf.",
  },
  {
    key: "usercentrics",
    group: "Meten & compliance",
    what: "De internationale marktleider in consent management. Onze keuze bij meertalige sites en strengere compliance-eisen.",
  },

  // ---------------------------------------- Marketing & advertenties
  {
    key: "googleads",
    group: "Marketing & advertenties",
    what: "Zoekwoordgestuurd adverteren waar de vraag al bestaat. Wij richten campagnes, conversies en biedstrategieën in en sturen maandelijks bij.",
  },
  {
    key: "meta",
    group: "Marketing & advertenties",
    what: "Facebook- en Instagram-campagnes inclusief creatives, doelgroepen en retargeting, met de Conversions API voor betrouwbaar meten.",
  },
  {
    key: "metabusiness",
    group: "Marketing & advertenties",
    what: "Het beheercentrum voor je Meta-pagina's, pixels en advertentieaccounts. Wij richten rechten en eigendom netjes in.",
  },
  {
    key: "linkedin",
    group: "Marketing & advertenties",
    what: "Voor zakelijke doelgroepen op functie, sector en bedrijfsgrootte. Inclusief Lead Gen Forms die doorlopen naar je CRM.",
  },
  {
    key: "tiktok",
    group: "Marketing & advertenties",
    what: "Voor bereik bij een jonger publiek met verticale video. Creatives maken we specifiek voor het platform.",
  },
  {
    key: "reddit",
    group: "Marketing & advertenties",
    what: "Een ondergewaardeerd kanaal met scherpe communities en lage kosten per bereik — mits je de toon goed treft.",
  },
  {
    key: "pinterest",
    group: "Marketing & advertenties",
    what: "Sterk voor interieur, mode, food en alles wat visueel oriënterend is. Werkt als zoekmachine, niet als tijdlijn.",
  },
  {
    key: "youtube",
    group: "Marketing & advertenties",
    what: "Voor video-advertenties en als tweede zoekmachine. We plaatsen je bedrijfsvideo's zo dat ze ook organisch gevonden worden.",
  },
  {
    key: "mailchimp",
    group: "Marketing & advertenties",
    what: "Nieuwsbrieven en basisautomatiseringen, gekoppeld aan je site en formulieren.",
  },
  {
    key: "activecampaign",
    group: "Marketing & advertenties",
    what: "Voor serieuze e-mailautomatisering: flows op basis van gedrag, tagging en segmentatie.",
  },

  // ---------------------------------------- AI
  {
    key: "openai",
    group: "AI",
    what: "ChatGPT en de API zetten we in voor contentondersteuning, classificatie en AI-stappen in automatiseringen.",
  },
  {
    key: "claude",
    group: "AI",
    what: "Onze keuze voor langere documenten en zorgvuldige tekst. Ook de basis onder eigen kennisomgevingen met bronvermelding.",
  },
  {
    key: "anthropic",
    group: "AI",
    what: "Via de API bouwen we assistenten die op jouw eigen documenten antwoorden, met controle over wat er wel en niet gedeeld wordt.",
  },
  {
    key: "googlegemini",
    group: "AI",
    what: "Sterk in combinatie met Google Workspace en beeldbegrip. We vergelijken modellen per toepassing in plaats van er één te kiezen.",
  },
  {
    key: "perplexity",
    group: "AI",
    what: "Voor onderzoek met bronvermelding. Ook belangrijk als AEO-kanaal: hier wil je genoemd worden als antwoord.",
  },

  // ---------------------------------------- Automatisering & data
  {
    key: "make",
    group: "Automatisering & data",
    what: "Onze favoriet voor automatiseringen: van formulier naar CRM, van order naar boekhouding, met foutafhandeling en logging.",
  },
  {
    key: "zapier",
    group: "Automatisering & data",
    what: "Voor snelle koppelingen tussen standaardtools, wanneer een volwaardige integratie overkill is.",
  },
  {
    key: "airtable",
    group: "Automatisering & data",
    what: "Als lichte database achter processen en productdata. Voor je team voelt het als een spreadsheet, maar er zit structuur onder.",
  },
  {
    key: "hubspot",
    group: "Automatisering & data",
    what: "CRM en marketing in één, met formulieren en flows die aansluiten op je site.",
  },
  {
    key: "pipedrive",
    group: "Automatisering & data",
    what: "Overzichtelijk sales-CRM voor teams die vooral pijplijn en opvolging willen bewaken.",
  },
  {
    key: "teamleader",
    group: "Automatisering & data",
    what: "Populair in de Benelux voor CRM, offertes en facturatie in één. Wij koppelen je site en portalen eraan.",
  },
  {
    key: "odoo",
    group: "Automatisering & data",
    what: "Voor organisaties die CRM, voorraad, projecten en facturatie in één systeem willen. Wij verzorgen inrichting en koppelingen.",
  },
  {
    key: "notion",
    group: "Automatisering & data",
    what: "Voor documentatie, kennisbanken en projectoverzicht — ook als bron voor AI-kennisomgevingen.",
  },
  {
    key: "googlesheets",
    group: "Automatisering & data",
    what: "Vaak het startpunt of eindpunt van een automatisering: import, export en rapportages die je team direct herkent.",
  },

  // ---------------------------------------- Design & content
  {
    key: "figma",
    group: "Design & content",
    what: "Waar al ons ontwerp ontstaat: styleframes, design systems en klikbare prototypes die je kunt testen voor er gebouwd wordt.",
  },
  {
    key: "adobe",
    group: "Design & content",
    what: "Voor drukwerk, retouche, illustratie en videomontage. Alles wat verder gaat dan schermontwerp.",
  },
  {
    key: "lottie",
    group: "Design & content",
    what: "Animaties uit After Effects als vectorbestand op je site: scherp op elk scherm en klein in bestandsgrootte.",
  },
  {
    key: "canva",
    group: "Design & content",
    what: "We leveren sjablonen aan waarmee jouw team zelf on-brand posts en documenten maakt, zonder ons erbij nodig te hebben.",
  },
  {
    key: "miro",
    group: "Design & content",
    what: "Voor workshops, customer journeys en procesmapping — vooral handig als er meerdere afdelingen meedenken.",
  },
  {
    key: "vimeo",
    group: "Design & content",
    what: "Voor video-hosting zonder reclame en met nette insluiting op je site, ook voor besloten content.",
  },
  {
    key: "spotify",
    group: "Design & content",
    what: "Waar we podcasts publiceren en distribueren, inclusief de social snippets eromheen.",
  },

  // ---------------------------------------- Communicatie & samenwerking
  {
    key: "gmail",
    group: "Communicatie & samenwerking",
    what: "Zakelijke mail op je eigen domein, met correcte SPF-, DKIM- en DMARC-records zodat je berichten aankomen.",
  },
  {
    key: "microsoft365",
    group: "Communicatie & samenwerking",
    what: "Mail, agenda en documenten voor teams die in de Microsoft-wereld werken. Wij regelen domeinkoppeling en records.",
  },
  {
    key: "microsoftword",
    group: "Communicatie & samenwerking",
    what: "Sjablonen in je huisstijl voor offertes, rapporten en brieven — zodat elk document er hetzelfde uitziet.",
  },
  {
    key: "microsoftexcel",
    group: "Communicatie & samenwerking",
    what: "Voor data-aanlevering, prijstabellen en imports. Vaak de brug tussen jouw administratie en onze systemen.",
  },
  {
    key: "microsoftpowerpoint",
    group: "Communicatie & samenwerking",
    what: "Presentatiesjablonen in je merkstijl, zodat een salesdeck er net zo verzorgd uitziet als je website.",
  },
  {
    key: "whatsapp",
    group: "Communicatie & samenwerking",
    what: "Als laagdrempelig contactkanaal op je site en voor automatische meldingen zoals afspraakherinneringen.",
  },
  {
    key: "slack",
    group: "Communicatie & samenwerking",
    what: "Voor korte lijnen tijdens een project en voor automatische meldingen uit je systemen.",
  },
  {
    key: "googledrive",
    group: "Communicatie & samenwerking",
    what: "Waar we bestanden en opleveringen delen, en waar automatiseringen documenten kunnen wegschrijven.",
  },
  {
    key: "dropbox",
    group: "Communicatie & samenwerking",
    what: "Voor het uitwisselen van zware bestanden zoals videomateriaal en drukwerkbestanden.",
  },
  {
    key: "googlecalendar",
    group: "Communicatie & samenwerking",
    what: "Gekoppeld aan reserverings- en afspraakportalen, zodat beschikbaarheid altijd klopt.",
  },
  {
    key: "googledocs",
    group: "Communicatie & samenwerking",
    what: "Voor content en teksten die we samen met jou schrijven en reviewen voordat ze in het CMS landen.",
  },
  {
    key: "trello",
    group: "Communicatie & samenwerking",
    what: "Eenvoudig bord voor kleinere trajecten waarbij je vooral wilt zien wat er loopt en wat af is.",
  },
  {
    key: "asana",
    group: "Communicatie & samenwerking",
    what: "Voor projecten met veel taken en afhankelijkheden tussen meerdere partijen.",
  },
  {
    key: "clickup",
    group: "Communicatie & samenwerking",
    what: "Waar we sprints, backlog en documentatie samenbrengen bij grotere ontwikkeltrajecten.",
  },
  {
    key: "jira",
    group: "Communicatie & samenwerking",
    what: "Als jouw ontwikkelteam hierin werkt, sluiten wij aan op jullie proces in plaats van andersom.",
  },

  // ---------------------------------------- Apps
  {
    key: "apple",
    group: "Apps",
    what: "iOS-ontwikkeling en publicatie in de App Store, inclusief de Apple Developer-licentie en het reviewproces.",
  },
  {
    key: "testflight",
    group: "Apps",
    what: "Waarmee we testbuilds bij jou en je testers krijgen vóór publicatie, zodat je de app echt gebruikt hebt voor hij live gaat.",
  },
  {
    key: "android",
    group: "Apps",
    what: "Android-ontwikkeling en publicatie in Google Play, met dezelfde codebase als je iOS-app waar dat kan.",
  },
];
