/* Juridische pagina's. Vervang de concepttekst door je eigen (juridisch gecontroleerde) voorwaarden. */

import type { T } from "./types";

export const legalDocs: Record<string, { title: T; updated: string; body: T }> = {
  privacybeleid: {
    title: { nl: "Privacybeleid", en: "Privacy policy" },
    updated: "2026-10-24",
    body: {
      nl: "M7 Branding & Design B.V. respecteert je privacy. In dit privacybeleid lees je welke gegevens we verwerken wanneer je onze website bezoekt, contact met ons opneemt of je aanmeldt voor de nieuwsbrief, met welk doel en hoe lang we ze bewaren.\n\nWelke gegevens verwerken we?\n- Contactgegevens die je zelf invult (naam, bedrijf, e-mailadres, telefoonnummer, bericht)\n- Analytische gegevens over websitegebruik, alleen na toestemming (Google Analytics 4 met Consent Mode)\n- Technische gegevens die nodig zijn om de website veilig te laten werken\n\nWaarom?\nOm je vraag te beantwoorden, een offerte op te stellen, onze dienstverlening uit te voeren en (met toestemming) onze website en marketing te verbeteren.\n\nJe rechten\nJe kunt ons altijd vragen om inzage, correctie of verwijdering van je gegevens via hello@m7branding.com.\n\nDeze tekst is een concept. Vervang hem door je definitieve privacyverklaring.",
      en: "M7 Branding & Design B.V. respects your privacy. This privacy policy explains which data we process when you visit our website, contact us or sign up for our newsletter, why we do so and how long we keep it.\n\nWhich data do we process?\n- Contact details you enter yourself (name, company, email address, phone number, message)\n- Analytics data about website usage, only after consent (Google Analytics 4 with Consent Mode)\n- Technical data required to run the website securely\n\nWhy?\nTo answer your question, prepare a proposal, deliver our services and (with consent) improve our website and marketing.\n\nYour rights\nYou can always ask us for access, correction or deletion of your data via hello@m7branding.com.\n\nThis text is a draft. Replace it with your final privacy statement.",
    },
  },
  "algemene-voorwaarden": {
    title: { nl: "Algemene voorwaarden", en: "Terms & conditions" },
    updated: "2026-10-24",
    body: {
      nl: "Op alle offertes, opdrachten en overeenkomsten van M7 Branding & Design B.V. zijn onze algemene voorwaarden van toepassing.\n\nDeze pagina is een concept. Plaats hier je volledige algemene voorwaarden of verwijs naar het PDF-bestand.",
      en: "Our terms and conditions apply to all quotes, assignments and agreements of M7 Branding & Design B.V.\n\nThis page is a draft. Place your full terms and conditions here or link to the PDF file.",
    },
  },
  cookies: {
    title: { nl: "Cookies", en: "Cookies" },
    updated: "2026-10-24",
    body: {
      nl: "We gebruiken functionele cookies om de website te laten werken. Analytische en marketingcookies (Google Analytics 4, Google Tag Manager) plaatsen we alleen na jouw toestemming via de cookiebanner (Google Consent Mode v2).\n\nJe kunt je keuze altijd wijzigen door je browsergegevens voor deze site te wissen; de banner verschijnt dan opnieuw.\n\nDeze tekst is een concept. Vul aan met je definitieve cookieverklaring.",
      en: "We use functional cookies to make the website work. Analytics and marketing cookies (Google Analytics 4, Google Tag Manager) are only placed after your consent via the cookie banner (Google Consent Mode v2).\n\nYou can change your choice at any time by clearing your browser data for this site; the banner will then appear again.\n\nThis text is a draft. Complete it with your final cookie statement.",
    },
  },
};
