/* ============================================================
   Over M7: hero-media en teksten die alleen op /over-m7 staan.
   ============================================================ */

import type { T } from "./types";

/**
 * Korte videoclips voor de hero (rouleren met een rustige crossfade).
 * Zet de bestanden in /public/media/about/ en vul ze hier in, bv.
 *   { src: "/media/about/studio.mp4", poster: "/media/about/studio.webp", label: { nl: "De studio", en: "The studio" } }
 * Tip: 6 tot 12 seconden per clip, zonder geluid, 1920px breed, H.264 (mp4) of VP9 (webm), liefst < 4 MB.
 * Zolang de lijst leeg is, rouleren de kantoorfoto's hieronder met een langzame Ken Burns-beweging.
 */
export const heroClips: { src: string; poster?: string; label?: T }[] = [];

/** Maximale speelduur per clip (seconden); langere clips worden na deze tijd overgevloeid. */
export const heroClipMaxSeconds = 10;

/** Hoe lang elke foto in beeld blijft als er (nog) geen clips zijn (seconden). */
export const heroStillSeconds = 6.5;

/**
 * Foto's voor de hero zolang er geen clips zijn (namen uit officePhotos).
 * `pos` = object-position op brede schermen, `posM` op mobiel (staand).
 */
export const heroStills: { name: string; label: T; pos?: string; posM?: string }[] = [
  { name: "kantoor-werkplekken", label: { nl: "De studio", en: "The studio" }, pos: "50% 45%", posM: "62% 50%" },
  { name: "kantoor-buitenkant", label: { nl: "Loosbroekseweg 45, Nistelrode", en: "Loosbroekseweg 45, Nistelrode" }, pos: "50% 30%", posM: "50% 40%" },
  { name: "lounge-biljart", label: { nl: "De lounge", en: "The lounge" }, pos: "50% 55%", posM: "40% 50%" },
  { name: "olijfboom-led-quote", label: { nl: "Onze LED-quote", en: "Our LED quote" }, pos: "50% 30%", posM: "50% 40%" },
  { name: "millie-kantine", label: { nl: "Millie in de kantine", en: "Millie in the canteen" }, pos: "50% 62%", posM: "45% 60%" },
  { name: "meetingroom", label: { nl: "Een van onze meetingrooms", en: "One of our meeting rooms" }, pos: "50% 50%", posM: "55% 50%" },
  { name: "padel", label: { nl: "Padel met het team", en: "Padel with the team" }, pos: "50% 58%", posM: "50% 55%" },
  { name: "fitness", label: { nl: "Onze eigen gym", en: "Our own gym" }, pos: "50% 32%", posM: "50% 40%" },
  { name: "zonsondergang", label: { nl: "Zonsondergang boven de weilanden", en: "Sunset over the fields" }, pos: "50% 62%", posM: "50% 55%" },
];

/* ---------------- Teksten ---------------- */

export const aboutCopy = {
  hero: {
    lead: {
      nl: "Een full-service branding- en designbureau met een eigen plek in het buitengebied van Nistelrode. Een compact team van creatieve en technische specialisten, met ruimte voor grote ideeën.",
      en: "A full-service branding and design agency with a place of its own in the countryside of Nistelrode. A compact team of creative and technical specialists, with room for big ideas.",
    },
    secondary: { nl: "Bekijk ons kantoor", en: "See our office" },
    under: { nl: "Onder één dak in Nistelrode", en: "Under one roof in Nistelrode" },
    meet: { nl: "Maak kennis met het team", en: "Meet the team" },
    media: { nl: "Sfeerbeelden van ons kantoor", en: "Impressions of our office" },
    pause: { nl: "Pauzeer de beelden", en: "Pause the footage" },
    play: { nl: "Speel de beelden af", en: "Play the footage" },
    show: { nl: "Toon beeld", en: "Show image" },
    of: { nl: "van", en: "of" },
  },
  story: {
    kicker: { nl: "Ons verhaal", en: "Our story" },
    p1: {
      nl: "Sinds {year} bouwt M7 merken en digitale oplossingen voor ambitieuze bedrijven. Wat begon met design, groeide uit tot een full-service bureau: van branding en websites tot web-apps, automation, AI en video. Alles onder één dak, met korte lijnen.",
      en: "Since {year}, M7 has been building brands and digital solutions for ambitious companies. What started with design grew into a full-service agency: from branding and websites to web apps, automation, AI and video. All under one roof, with short lines.",
    },
    p2: {
      nl: "Als Webflow Professional Partner bouwen we razendsnelle websites die je zelf kunt beheren. En met ons eigen hosting- en supportteam houden we alles in de lucht, ook lang na de lancering.",
      en: "As a Webflow Professional Partner we build lightning-fast websites you can manage yourself. And with our own hosting and support team we keep everything running, long after launch.",
    },
    since: { nl: "Sinds", en: "Since" },
    partner: { nl: "Webflow Professional Partner", en: "Webflow Professional Partner" },
    clients: { nl: "klanten wereldwijd", en: "clients worldwide" },
    statsLabel: { nl: "M7 in cijfers", en: "M7 in numbers" },
  },
  team: {
    text: {
      nl: "Strategen, designers, developers en marketeers aan één tafel. Korte lijnen, geen vertaalverlies, en een kantoorhond die de sfeer bewaakt.",
      en: "Strategists, designers, developers and marketers at one table. Short lines, nothing lost in translation, and an office dog keeping the mood up.",
    },
    founder: { nl: "Oprichter", en: "Founder" },
  },
  office: {
    kicker: { nl: "Ons kantoor", en: "Our office" },
    title: { nl: "Ruimte voor grote ideeën.", en: "Room for big ideas." },
    intro: {
      nl: "Ons kantoor staat in het buitengebied van Nistelrode, in Noord-Brabant. Een ruim pand met karakter, helemaal van onszelf, met de weilanden om ons heen. Geen kantoortuin op driehoog, wel licht, lucht en plek om na te denken. Hier is letterlijk ruimte voor onze grote creatieve ideeën.",
      en: "Our office is in the countryside of Nistelrode, in Noord-Brabant. A spacious building with character, all our own, with fields all around. No open-plan floor three storeys up, but light, air and room to think. Out here there's literally room for our big creative ideas.",
    },
    regionH: {
      nl: "Een bureau in Nistelrode, midden in Brabant",
      en: "An agency in Nistelrode, in the heart of Brabant",
    },
    region: {
      nl: "Nistelrode ligt tussen Oss, Uden, 's-\u2060Hertogenbosch en Eindhoven. Kom je langs voor een kop koffie of een sessie? Je parkeert op onze eigen, ruime parkeerplaats en rijd je elektrisch, dan laad je ondertussen gewoon bij.",
      en: "Nistelrode sits between Oss, Uden, 's-\u2060Hertogenbosch and Eindhoven. Dropping by for a coffee or a session? Park on our own spacious car park, and if you drive electric, you can charge while you're here.",
    },
    reachH: {
      nl: "Voor klanten in heel Nederland, België en daarbuiten",
      en: "For clients across the Netherlands, Belgium and beyond",
    },
    reach: {
      nl: "We werken voor bedrijven in de regio, van Oss en Uden tot Den Bosch en Eindhoven. Maar net zo goed voor klanten in de rest van Nederland, in België en ver daarbuiten: {clients} klanten wereldwijd, vanuit één plek in Brabant. Liever eerst even kennismaken? Dat kan hier aan tafel, of gewoon online.",
      en: "We work for companies in the region, from Oss and Uden to Den Bosch and Eindhoven. But just as much for clients in the rest of the Netherlands, in Belgium and far beyond: {clients} clients worldwide, from one place in Brabant. Prefer to meet first? Happy to, here at our table or simply online.",
    },
    amenitiesH: { nl: "Wat je bij ons vindt", en: "What you'll find here" },
    visit: { nl: "Kom langs", en: "Visit us" },
    route: { nl: "Plan je route", en: "Get directions" },
    country: { nl: "Nederland", en: "The Netherlands" },
    gallery: { nl: "Foto's van ons kantoor in Nistelrode", en: "Photos of our office in Nistelrode" },
  },
  culture: {
    kicker: { nl: "Zo werken we", en: "How we work" },
    title: { nl: "Serieus goed werk. Zonder stropdas.", en: "Seriously good work. No tie required." },
    intro: {
      nl: "We nemen ons werk serieus, onszelf iets minder. Tussen de projecten door spelen we een potje padel of FIFA, gooien we een pijltje in de lounge en op woensdag staat er kibbeling op tafel. Wie lekker in zijn vel zit, maakt beter werk. Zo simpel is het.",
      en: "We take our work seriously, ourselves a little less. Between projects we play a round of padel or FIFA, throw some darts in the lounge, and on Wednesdays there's kibbeling (Dutch fried fish) for lunch. People who feel at home do better work. Simple as that.",
    },
    gallery: { nl: "Foto's van het team en onze cultuur", en: "Photos of the team and our culture" },
    rituals: [
      {
        icon: "fish",
        h: { nl: "Kibbeling op woensdag", en: "Kibbeling on Wednesdays" },
        p: { nl: "Elke woensdag kibbeling bij de lunch. Daar tornen we niet aan.", en: "Fried fish for lunch every Wednesday. We don't mess with that." },
      },
      {
        icon: "racket",
        h: { nl: "Padel, FIFA en darts", en: "Padel, FIFA and darts" },
        p: {
          nl: "Even de kop leegmaken? Een potje padel, FIFA of darts doet wonderen.",
          en: "Need to clear your head? A round of padel, FIFA or darts works wonders.",
        },
      },
      {
        icon: "quote",
        h: { nl: "Onze LED-quotes", en: "Our LED quotes" },
        p: {
          nl: "Ze hangen door het hele pand. 'Trust the process' hangt niet voor niks in de gym.",
          en: "They hang all over the building. 'Trust the process' isn't in the gym by accident.",
        },
      },
      {
        icon: "tree",
        h: { nl: "Zomer? Naar buiten", en: "Summer? Outside" },
        p: {
          nl: "Bij mooi weer lunchen we buiten of lopen we even het bos in. Daar komen vaak de beste ideeën.",
          en: "When the sun's out we have lunch outside or walk into the woods. That's often where the best ideas show up.",
        },
      },
    ] as { icon: string; h: T; p: T }[],
  },
  gallery: {
    open: { nl: "Bekijk groter", en: "View larger" },
    close: { nl: "Sluiten", en: "Close" },
    prev: { nl: "Vorige foto", en: "Previous photo" },
    next: { nl: "Volgende foto", en: "Next photo" },
  },
};

/** Vervang {sleutel} in een tekst. */
export const fill = (s: string, vars: Record<string, string | number>) => s.replace(/\{(\w+)\}/g, (_, k) => String(vars[k] ?? ""));
