/* ============================================================
   Reviews, gekoppeld aan diensten (en optioneel een case).

   - Google-reviews: letterlijk overgenomen van ons Google
     Bedrijfsprofiel (screenshots van 28 oktober 2026, alle 5/5).
     Van een deel hebben we alleen de Engelse Google-vertaling:
     die tonen we in beide talen met `translated: true` (de site
     meldt dan "Vertaald door Google"). Nederlandse originelen
     staan ongewijzigd in nl én en.
     `when` is de relatieve datum zoals Google die op die dag toonde.
   - Reviews met `draft: true` zijn conceptteksten van M7 die de
     klant nog moet goedkeuren. Die zie je alleen in development of
     met NEXT_PUBLIC_SHOW_DRAFTS=1, nooit in productie. Goedgekeurd?
     Vervang de tekst door de goedgekeurde versie en haal `draft` weg.
   ============================================================ */

import type { Review } from "./types";

const ago = (n: number, unit: "jaar" | "maanden") =>
  unit === "jaar"
    ? { nl: `${n} jaar geleden`, en: `${n} year${n === 1 ? "" : "s"} ago` }
    : { nl: `${n} maanden geleden`, en: `${n} months ago` };

/** Dezelfde tekst in beide talen (we vertalen klantcitaten niet zelf). */
const same = (text: string) => ({ nl: text, en: text });

export const reviews: Review[] = [
  /* ---------- Google-reviews (echt, gepubliceerd) ---------- */
  {
    id: "google-monique-roefs",
    author: "Monique Roefs",
    company: "Bernheze Makelaars",
    quote: same("Prima resultaat opgeleverd voor ons bedrijf Bernheze Makelaars. Prachtig ontwerp en goede samenwerking!"),
    lang: "nl",
    services: ["websites-webshops", "branding-rebranding"],
    rating: 5,
    source: "google",
    when: { nl: "7 jaar geleden", en: "7 years ago" },
  },
  {
    id: "google-wesley-zantinge",
    author: "Wesley Zantinge",
    quote: same(
      "Our collaboration with M7 Branding has far exceeded our expectations. Their in-depth knowledge of technical webshops has had a direct, measurable impact on our projects; revenue has increased significantly since we started working with them. What we particularly appreciate about M7 Branding is their reliability and clear communication. They not only make clear agreements but also always honor them – something we greatly value in a partner. It is a reassuring feeling to know that we are working with a team that holds not only expertise but also integrity and customer focus in high regard. We are extremely satisfied!",
    ),
    lang: "en",
    translated: true,
    services: ["websites-webshops", "seo-aeo-geo"],
    rating: 5,
    source: "google",
    when: { nl: "een jaar geleden", en: "a year ago" },
  },
  {
    id: "google-nova-funeral-cars",
    author: "Nova Funeral Cars",
    quote: same(
      "A professional partner to work with. The gentlemen at M7 are committed and deliver superb work! These are craftsmen we definitely recommend.\n\nM7 created a new website, corporate identity, name, and logo for us; this is the place to go for both a complete rebranding and smaller designs.",
    ),
    lang: "en",
    translated: true,
    services: ["branding-rebranding", "websites-webshops"],
    case: "nova-funeral-cars",
    rating: 5,
    source: "google",
    when: ago(2, "jaar"),
  },
  {
    id: "google-rick-swinkels",
    author: "Rick Swinkels",
    quote: same(
      "Veelzijdig, flexibel, creatief en deskundig. Denken met je mee, adviseren waar nodig, en realiseren binnen tijd. Kortom, fijne club om mee samen te werken!",
    ),
    lang: "nl",
    services: ["branding-rebranding", "content-marketing-online-ads"],
    rating: 5,
    source: "google",
    when: ago(2, "jaar"),
  },
  {
    id: "google-peter-van-der-heijden",
    author: "Peter van der Heijden",
    company: "LaserLux",
    quote: same(
      "Martijn helped me develop and build the corporate identity and website for my company, LaserLux. He comes up with fresh ideas, communicates clearly, and is professional. It was a great collaboration and led to a great result.",
    ),
    lang: "en",
    translated: true,
    services: ["branding-rebranding", "websites-webshops"],
    rating: 5,
    source: "google",
    when: ago(6, "jaar"),
  },
  {
    id: "google-thijs-sijpestijn",
    author: "Thijs Sijpestijn",
    company: "CryptoCoinTalk",
    quote: same(
      "Not a service provider, but a partner! Martijn and the M7 team helped our company CryptoCoinTalk with a complete restructuring of the subscription mechanism. In addition, they also tackled our branding and website with an extremely positive result! Always approachable and incredibly accessible!",
    ),
    lang: "en",
    translated: true,
    services: ["web-apps-portals-apps", "branding-rebranding", "websites-webshops"],
    rating: 5,
    source: "google",
    when: ago(3, "jaar"),
  },
  {
    id: "google-chantal-van-lanen",
    author: "Chantal van Lanen",
    quote: same(
      "De sparringspartner voor ambitieuze ondernemers. Denken altijd met je mee, hebben echt verstand van alles wat met vermarkten en branding te maken heeft en lopen […]",
    ),
    lang: "nl",
    fragment: true,
    services: ["branding-rebranding", "content-marketing-online-ads"],
    rating: 5,
    source: "google",
    when: ago(6, "maanden"),
  },
  {
    id: "google-amainfilms",
    author: "Amainfilms",
    quote: same(
      "Fast, quality, and service. If you were to ask me how I experienced the development of my website by M7 Branding & Design, those would be the three perfect words. Extremely satisfied with the services and support from Martijn and his team. Changes I suggested in the evening were implemented overnight, so they were visible the next day. From start to finish, the team managed to make my unique vision a reality. I'm incredibly proud of the end result.",
    ),
    lang: "en",
    translated: true,
    services: ["websites-webshops"],
    rating: 5,
    source: "google",
    when: ago(4, "jaar"),
  },
  {
    id: "google-bas-honselaar",
    author: "Bas Honselaar",
    quote: same("Onlangs een dronevideo laten maken voor een verkoopcampagne. Kennis van zaken en meedenken met de klant, top!"),
    lang: "nl",
    services: ["foto-video-3d-animatie", "content-marketing-online-ads"],
    rating: 5,
    source: "google",
    when: ago(2, "jaar"),
  },
  {
    id: "google-onur-ulusoy",
    author: "Onur Ulusoy",
    quote: same(
      "I partnered with M7 Brand Agency for the design of my company logo and business cards. The design was exactly as I wanted, and the communication during the process was excellent. They have a hands-on mentality where the client's needs take center stage. In short, a solid 5+!",
    ),
    lang: "en",
    translated: true,
    services: ["branding-rebranding", "grafisch-ontwerp-print"],
    rating: 5,
    source: "google",
    when: ago(6, "jaar"),
  },
  {
    id: "google-roy-van-de-valk",
    author: "Roy van de Valk",
    quote: same(
      "Vriendelijk en Professioneel geholpen met het maken van een website voor mijn bedrijf, bij vragen altijd goed te bereiken en ze komen afspraken netjes na.",
    ),
    lang: "nl",
    services: ["websites-webshops"],
    rating: 5,
    source: "google",
    when: ago(2, "jaar"),
  },
  {
    id: "google-jurgen-hesselink",
    author: "Jurgen Hesselink",
    quote: same(
      "Highly recommend if you are looking for a partner that thinks along with you and, above all, delivers good quality. Very happy with my new site!",
    ),
    lang: "en",
    translated: true,
    services: ["websites-webshops"],
    rating: 5,
    source: "google",
    when: ago(5, "jaar"),
  },
  {
    id: "google-cas-schonkeren",
    author: "Cas Schonkeren",
    quote: same("Dit is hét waar je samen mee wilt werken op het gebied van Branding en Design."),
    lang: "nl",
    services: ["branding-rebranding", "grafisch-ontwerp-print", "content-marketing-online-ads"],
    rating: 5,
    source: "google",
    when: ago(2, "jaar"),
  },
  {
    id: "google-mondhygienepraktijk-engelen",
    author: "Mondhygiënepraktijk Engelen",
    quote: same(
      "I am very satisfied with the service and professionalism. They think along with you and look for the best options. Definitely recommended!",
    ),
    lang: "en",
    translated: true,
    services: ["websites-webshops"],
    rating: 5,
    source: "google",
    when: ago(5, "jaar"),
  },

  /* ---------- Klantreview (aangeleverd door de klant) ---------- */
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

  /* ---------- Conceptreviews: nog NIET goedgekeurd door de klant ---------- */
  {
    id: "draft-edgeway-commodities",
    author: "Edgeway Commodities",
    quote: same(
      "M7 heeft onze branding en website echt naar een next level getild. Een unieke uitstraling die precies past bij onze boutique HR search positionering. Vooral de slimme structuur van onze diensten en hoe alles samenkomt in één sterk verhaal is ontzettend goed gedaan. Heel blij met het resultaat!",
    ),
    lang: "nl",
    services: ["branding-rebranding", "websites-webshops"],
    draft: true,
  },
  {
    id: "draft-platan-consulting",
    author: "Platan Consulting",
    quote: same(
      "M7 denkt op alle fronten met ons mee. Van pitchdecks en websites tot overtuigend presentatiemateriaal en strategisch advies. Ze begrijpen snel wat je wilt overbrengen en weten dat telkens weer sterk neer te zetten. Fijne partij om mee samen te werken!",
    ),
    lang: "nl",
    services: ["grafisch-ontwerp-print", "websites-webshops", "branding-rebranding"],
    draft: true,
  },
  {
    id: "draft-atletiekunie",
    author: "Atletiekunie",
    quote: same(
      "M7 heeft ons van advies tot ontwikkeling uitstekend geholpen bij ATL+. Ze denken echt mee over hoe je een digitale leeromgeving logisch, toegankelijk en toekomstbestendig maakt. Een betrokken en deskundige ontwikkelpartner die verder kijkt dan alleen de techniek.",
    ),
    lang: "nl",
    services: ["web-apps-portals-apps"],
    draft: true,
  },
  {
    id: "draft-smarthome-services",
    author: "Smarthome Services",
    quote: same(
      "Superfijne samenwerking met M7! Ze helpen ons niet alleen met onze website, maar denken ook actief mee over onze online vindbaarheid. Van SEO tot de nieuwste ontwikkelingen rondom AEO en GEO. Praktisch, snel schakelen en altijd met goede ideeën.",
    ),
    lang: "nl",
    services: ["seo-aeo-geo", "websites-webshops"],
    draft: true,
  },
  {
    id: "draft-bernheze-makelaars",
    author: "Bernheze Makelaars",
    quote: same(
      "We werken al jaren met M7 samen en ze zijn inmiddels veel meer dan alleen onze web- en brandingpartner. Van strategisch advies en verschillende brandingtrajecten tot ons uitgebreide klantenportaal en een AI-systeem op maat. Ook bij de implementatie binnen onze organisatie denken ze actief mee. Een partij die ons bedrijf echt begrijpt en continu helpt vernieuwen.",
    ),
    lang: "nl",
    services: ["websites-webshops", "branding-rebranding", "web-apps-portals-apps", "ai-consultancy"],
    draft: true,
  },
  {
    id: "draft-alpacafarm-vorstenbosch",
    author: "Alpacafarm Vorstenbosch",
    quote: same(
      "M7 regelt voor ons eigenlijk alles rondom marketing en online zichtbaarheid. Van social media en campagnes tot de website, slimme openingstijdenwidgets en functies die meegaan met onze seizoenen. Ze snappen hoe ons bedrijf werkt en vertalen dat naar creatieve, praktische oplossingen. Top samenwerking!",
    ),
    lang: "nl",
    services: ["content-marketing-online-ads", "websites-webshops", "configurators-lead-tools-widgets", "automation-funnels"],
    draft: true,
  },
  {
    id: "draft-fairlink",
    author: "Fairlink",
    quote: same(
      "M7 heeft ons geholpen om een complex internationaal verhaal terug te brengen tot een heldere, sterke branding en website. Fairlink werkt aan veiligere en eerlijkere internationale arbeidsmigratie, en dat vraagt om een verhaal dat meteen duidelijk is voor werknemers, werkgevers en partners. M7 snapte die uitdaging en vertaalde die naar een professionele uitstraling en logische website. Erg fijne samenwerking!",
    ),
    lang: "nl",
    services: ["branding-rebranding", "websites-webshops"],
    draft: true,
  },
  {
    id: "draft-issa",
    author: "ISSA – International Step by Step Association",
    quote: same(
      "M7 heeft ons bij diverse Europese en nationale projecten geholpen met branding, marketing en websites. Ze denken goed mee, begrijpen de verschillende doelgroepen en vertalen complexe projecten naar heldere, aantrekkelijke communicatie. Een flexibele en betrokken partner waar we prettig mee samenwerken.",
    ),
    lang: "nl",
    services: ["branding-rebranding", "content-marketing-online-ads", "websites-webshops"],
    draft: true,
  },
  {
    id: "draft-monvy",
    author: "Monvy",
    quote: same(
      "M7 snapt dat een klantenportaal meer moet doen dan er goed uitzien. Ze denken mee over de hele gebruikersflow, maken complexe processen overzichtelijk en houden de techniek én de klant in het oog. Prettige mensen die snel tot de kern komen.",
    ),
    lang: "nl",
    services: ["web-apps-portals-apps"],
    case: "monvy",
    draft: true,
  },
  {
    id: "draft-infrai",
    author: "InfrAI",
    quote: same(
      "Bij de ontwikkeling van een web-app is het fijn om een partner te hebben die zowel het product als de techniek begrijpt. M7 stelt de juiste vragen, denkt kritisch mee over de UX en weet ingewikkelde functionaliteit helder en gebruiksvriendelijk te maken.",
    ),
    lang: "nl",
    services: ["web-apps-portals-apps"],
    draft: true,
  },
  {
    id: "draft-yousure",
    author: "YouSure",
    quote: same(
      "Wat wij sterk vinden aan M7 is hun brede blik op digitale producten. Niet alleen een goede interface, maar ook aandacht voor toegankelijkheid, compliance en een logische inrichting van processen. Ze brengen structuur aan en geven deskundig, praktisch advies.",
    ),
    lang: "nl",
    services: ["web-apps-portals-apps", "ai-consultancy"],
    draft: true,
  },
  {
    id: "draft-tom-hofman",
    author: "Tom Hofman",
    quote: same(
      "M7 neemt UX research serieus en vertaalt inzichten ook echt naar betere productkeuzes. Geen eindeloze rapporten, maar scherpe analyses, duidelijke prioriteiten en een goed verhaal richting het ontwikkelteam. Heel waardevol in een producttraject.",
    ),
    lang: "nl",
    services: ["web-apps-portals-apps"],
    draft: true,
  },
  {
    id: "draft-brad-m",
    author: "Brad M.",
    quote: same(
      "Van eerste productidee tot concrete oplevering denkt M7 op strategisch én praktisch niveau mee. Sterk in projectmanagement, heldere keuzes en het bewaken van de gebruikerservaring. Ook onderwerpen als accessibility en compliance worden meteen meegenomen in plaats van achteraf opgelost.",
    ),
    lang: "nl",
    services: ["web-apps-portals-apps", "ai-consultancy"],
    draft: true,
  },
];
