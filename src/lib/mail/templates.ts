/* ============================================================
   E-mails in de M7-huisstijl: donker, Montserrat, teal → groen.
   Tabellen + inline styles, zodat ze in Gmail, Outlook en Apple Mail
   hetzelfde ogen. Elke mail heeft ook een platte-tekstversie.
   Alle invoer van bezoekers gaat door esc().
   ============================================================ */

import { site } from "@/content/site";
import { getDict } from "@/lib/dict";
import { localize } from "@/lib/i18n";

export type Lang = "nl" | "en";
type TT = { nl: string; en: string };
export interface Built {
  subject: string;
  html: string;
  text: string;
}

const C = {
  bg: "#030304",
  card: "#0e0e11",
  card2: "#16161a",
  line: "#25252a",
  text: "#f6f6f8",
  muted: "#b4b4bd",
  faint: "#76767f",
  teal: "#3affff",
  green: "#18ff59",
};
const FONT = "'Montserrat',Helvetica,Arial,sans-serif";

export const esc = (s: unknown) =>
  String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
const br = (s: string) => esc(s).replace(/\r?\n/g, "<br>");
export const clip = (s: string, n: number) => (s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s);
const first = (n: string) => n.trim().split(/\s+/)[0] || n.trim();
const L = (t: TT, l: Lang) => t[l];

/** 06… / +31 6… → 316… voor wa.me en tel: */
const intl = (phone: string) => {
  const d = phone.replace(/[^\d+]/g, "");
  if (d.startsWith("+")) return d.slice(1);
  if (d.startsWith("00")) return d.slice(2);
  if (d.startsWith("0")) return "31" + d.slice(1);
  return d;
};

const when = (d = new Date()) =>
  new Intl.DateTimeFormat("nl-NL", { timeZone: "Europe/Amsterdam", dateStyle: "long", timeStyle: "short" }).format(d);

/* ---------- bouwstenen */

const eyebrow = (t: string) =>
  `<div style="font:700 11px/16px ${FONT};letter-spacing:.2em;text-transform:uppercase;color:${C.teal}">${esc(t)}</div>`;

const accent = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 18px"><tr><td width="44" height="3" bgcolor="${C.teal}" style="width:44px;height:3px;line-height:3px;font-size:0;border-radius:3px;background:${C.teal};background-image:linear-gradient(90deg,${C.teal},${C.green})">&nbsp;</td></tr></table>`;

const h1 = (html: string) =>
  `<h1 class="h1" style="margin:14px 0 0;font:800 34px/40px ${FONT};letter-spacing:-.02em;color:${C.text}">${html}</h1>`;

const p = (html: string, mt = 16) => `<p style="margin:${mt}px 0 0;font:400 16px/26px ${FONT};color:${C.muted}">${html}</p>`;

const small = (html: string, mt = 18) => `<p style="margin:${mt}px 0 0;font:400 13px/21px ${FONT};color:${C.faint}">${html}</p>`;

const hl = (t: string) => `<span style="color:${C.teal}">${esc(t)}</span>`;

function button(href: string, label: string, ghost = false) {
  const bg = ghost ? C.card : C.teal;
  const fg = ghost ? C.text : C.bg;
  const border = ghost ? `border:1px solid ${C.line};` : "";
  return `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="display:inline-table;margin:0 8px 8px 0"><tr><td bgcolor="${bg}" style="background:${bg};${border}border-radius:999px">
<a href="${esc(href)}" style="display:inline-block;padding:14px 24px;font:700 14px/18px ${FONT};color:${fg};text-decoration:none;border-radius:999px">${esc(label)}&nbsp;&nbsp;&#8599;</a></td></tr></table>`;
}

function section(title: string, inner: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:34px"><tr><td style="border-top:1px solid ${C.line};padding-top:26px">
<div style="font:700 11px/16px ${FONT};letter-spacing:.2em;text-transform:uppercase;color:${C.faint}">${esc(title)}</div>${inner}</td></tr></table>`;
}

/** Label/waarde-rijen; waarde is al HTML (gebruik esc of link). Lege waarden vallen weg. */
function rows(pairs: [string, string | undefined | false][]) {
  const r = pairs.filter(([, v]) => v);
  if (!r.length) return "";
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px">${r
    .map(
      ([k, v]) =>
        `<tr><td class="stack" width="34%" valign="top" style="padding:9px 12px 9px 0;font:500 13px/20px ${FONT};color:${C.faint}">${esc(k)}</td><td class="stack" valign="top" style="padding:9px 0;font:600 14px/21px ${FONT};color:${C.text};word-break:break-word">${v}</td></tr>`,
    )
    .join("")}</table>`;
}

const quote = (s: string) =>
  `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px"><tr><td bgcolor="${C.card2}" style="background:${C.card2};border:1px solid ${C.line};border-left:3px solid ${C.teal};border-radius:14px;padding:18px 20px;font:400 14px/23px ${FONT};color:${C.text}">${br(s)}</td></tr></table>`;

function steps(list: string[]) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:12px">${list
    .map(
      (s, i) =>
        `<tr><td width="44" valign="top" style="padding:10px 0;font:800 14px/22px ${FONT};color:${C.teal}">0${i + 1}</td><td valign="top" style="padding:10px 0;font:500 15px/22px ${FONT};color:${C.text}">${esc(s)}</td></tr>`,
    )
    .join("")}</table>`;
}

const link = (href: string, label: string) => `<a href="${esc(href)}" style="color:${C.teal};text-decoration:none">${esc(label)}</a>`;
const mailto = (e: string) => link(`mailto:${e}`, e);
const tel = (ph: string) => link(`tel:+${intl(ph)}`, ph);

/** Martijn als vast aanspreekpunt, met foto en directe lijnen. */
function person(base: string, lang: Lang) {
  const wa = site.whatsapp ? link(`https://wa.me/${site.whatsapp}`, "WhatsApp") : "";
  const ph = site.phone ? tel(site.phone) : "";
  const lines = [mailto(site.email), wa, ph].filter(Boolean).join(` <span style="color:${C.faint}">&nbsp;·&nbsp;</span> `);
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:34px"><tr><td bgcolor="${C.card2}" style="background:${C.card2};border:1px solid ${C.line};border-radius:20px;padding:18px">
<table role="presentation" cellpadding="0" cellspacing="0" border="0"><tr>
<td width="64" valign="middle" style="padding-right:16px"><img src="${base}/brand/mail/martijn.jpg" width="64" height="64" alt="Martijn Roefs" style="display:block;width:64px;height:64px;border-radius:999px;border:0"></td>
<td valign="middle"><div style="font:700 16px/22px ${FONT};color:${C.text}">Martijn Roefs</div>
<div style="font:500 13px/20px ${FONT};color:${C.faint}">${esc(L({ nl: "Je vaste aanspreekpunt bij M7", en: "Your point of contact at M7" }, lang))}</div>
<div style="margin-top:6px;font:600 13px/20px ${FONT}">${lines}</div></td>
</tr></table></td></tr></table>`;
}

function shell(o: { lang: Lang; base: string; preheader: string; body: string; note: string; page?: boolean }) {
  const home = o.base + localize("/", o.lang);
  const year = new Date().getFullYear();
  const a = site.address;
  const socials = [
    ["Instagram", site.socials.instagram],
    ["LinkedIn", site.socials.linkedin],
  ]
    .map(([k, u]) => `<a href="${esc(u)}" style="color:${C.muted};text-decoration:none">${k}</a>`)
    .join(` &nbsp;·&nbsp; `);
  return `<!doctype html>
<html lang="${o.lang}" xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="color-scheme" content="light dark">
<meta name="supported-color-schemes" content="light dark">
${o.page ? `<meta name="robots" content="noindex"><link rel="icon" href="/brand/m7-badge.svg">` : ""}
<title>M7 Branding &amp; Design</title>
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&amp;display=swap" rel="stylesheet">
<style>
:root{color-scheme:light dark;supported-color-schemes:light dark}
body{margin:0!important;padding:0!important;background:${C.bg}}
a{color:${C.teal}}
@media (max-width:620px){.px{padding-left:24px!important;padding-right:24px!important}.h1{font-size:28px!important;line-height:34px!important}.stack{display:block!important;width:100%!important;padding:2px 0!important}}
</style>
</head>
<body style="margin:0;padding:0;background:${C.bg};">
${o.page ? "" : `<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all">${esc(o.preheader)}${"&#8204;&nbsp;".repeat(60)}</div>`}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="${C.bg}" style="background:${C.bg}">
<tr><td align="center" style="padding:${o.page ? "8vh" : "28px"} 12px 40px">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px">
<tr><td class="px" style="padding:6px 40px 22px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
<td align="left" valign="middle"><a href="${esc(home)}" style="text-decoration:none"><img src="${o.base}/brand/mail/m7-logo.png" width="56" height="32" alt="M7" style="display:block;width:56px;height:32px;border:0;color:${C.text};font:800 22px/32px ${FONT}"></a></td>
<td align="right" valign="middle" style="font:600 10px/14px ${FONT};letter-spacing:.22em;text-transform:uppercase;color:${C.faint}">Branding &amp; Design</td>
</tr></table></td></tr>
<tr><td bgcolor="${C.card}" style="background:${C.card};border:1px solid ${C.line};border-radius:28px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="px" style="padding:40px 40px 44px">${o.body}</td></tr></table>
</td></tr>
<tr><td class="px" style="padding:26px 40px 0;font:400 12px/20px ${FONT};color:${C.faint}">
<div style="color:${C.muted};font-weight:600">${esc(site.legalName)}</div>
<div>${esc(a.street)}, ${esc(a.postalCode)} ${esc(a.city)} &nbsp;·&nbsp; <a href="${esc(home)}" style="color:${C.muted};text-decoration:none">m7branding.com</a> &nbsp;·&nbsp; ${socials}</div>
${o.note ? `<div style="margin-top:12px">${o.note}</div>` : ""}
<div style="margin-top:12px">&copy; ${year} M7</div>
</td></tr>
</table></td></tr></table>
</body></html>`;
}

/* ---------- leads: contactformulier en korte intake */

export interface Lead {
  kind: "contact" | "intake" | "callback";
  name: string;
  company?: string;
  role?: string;
  email?: string;
  phone?: string;
  moment?: string;
  interest?: string[];
  message: string;
  page?: string;
  locale: Lang;
}

const KIND: Record<Lead["kind"], TT> = {
  contact: { nl: "Contactformulier", en: "Contact form" },
  intake: { nl: "Korte intake", en: "Quick intake" },
  callback: { nl: "Terugbelverzoek", en: "Call-back request" },
};

export function leadSubject(l: Lead) {
  return `Nieuwe lead · ${KIND[l.kind].nl} · ${l.company || l.name}`;
}

/** Naar hello@: alles op een rij, met snelknoppen om direct te reageren. */
export function leadToTeam(l: Lead, base: string): Built {
  const who = l.company || l.name;
  const sub = [l.company ? l.name : "", l.role].filter(Boolean).join(", ");
  const replySubject = encodeURIComponent(l.locale === "en" ? "Your request at M7" : "Je aanvraag bij M7");
  const actions = [
    l.email && button(`mailto:${l.email}?subject=${replySubject}`, "Beantwoorden"),
    l.phone && button(`tel:+${intl(l.phone)}`, "Bellen", true),
    l.phone && button(`https://wa.me/${intl(l.phone)}`, "WhatsApp", true),
  ]
    .filter(Boolean)
    .join("");
  const body = [
    accent,
    eyebrow(`Nieuwe lead · ${KIND[l.kind].nl}`),
    h1(esc(who)),
    sub ? p(esc(sub), 8) : "",
    actions ? `<div style="margin-top:22px">${actions}</div>` : "",
    section(
      "Gegevens",
      rows([
        ["Naam", esc(l.name)],
        ["Bedrijf", l.company && esc(l.company)],
        ["Functie", l.role && esc(l.role)],
        ["E-mail", l.email && mailto(l.email)],
        ["Telefoon", l.phone && tel(l.phone)],
        ["Voorkeursmoment", l.moment && esc(l.moment)],
        ["Interesse", l.interest?.length ? esc(l.interest.join(", ")) : undefined],
        ["Taal", l.locale === "en" ? "Engels" : "Nederlands"],
        ["Pagina", l.page && link(l.page, clip(l.page.replace(/^https?:\/\//, ""), 60))],
        ["Ontvangen", esc(when())],
      ]),
    ),
    section(l.kind === "contact" ? "Bericht" : "Antwoorden", quote(clip(l.message, 8000))),
  ].join("");
  const note = l.email
    ? `Verstuurd door het formulier op m7branding.com. Op deze mail antwoorden gaat rechtstreeks naar ${mailto(l.email)}.`
    : "Verstuurd door het formulier op m7branding.com. Geen e-mailadres opgegeven: bel of app terug.";
  const text = [
    `Nieuwe lead · ${KIND[l.kind].nl}`,
    "",
    `Naam: ${l.name}`,
    l.company && `Bedrijf: ${l.company}`,
    l.role && `Functie: ${l.role}`,
    l.email && `E-mail: ${l.email}`,
    l.phone && `Telefoon: ${l.phone}`,
    l.moment && `Voorkeursmoment: ${l.moment}`,
    l.interest?.length && `Interesse: ${l.interest.join(", ")}`,
    l.page && `Pagina: ${l.page}`,
    `Ontvangen: ${when()}`,
    "",
    l.message,
  ]
    .filter(Boolean)
    .join("\n");
  return { subject: leadSubject(l), html: shell({ lang: "nl", base, preheader: `${who}: ${clip(l.message, 90)}`, body, note }), text };
}

/** Naar de klant (Martijn in cc): bevestiging, samenvatting en wat er nu gebeurt. */
export function leadToClient(l: Lead, base: string, opts: { ccMartijn: boolean }): Built {
  const lang = l.locale;
  const name = first(l.name);
  const subject = L(
    {
      contact: { nl: "We hebben je bericht ontvangen | M7", en: "We've received your message | M7" },
      intake: { nl: "Je intake is binnen | M7", en: "We've got your intake | M7" },
      callback: { nl: "We bellen je terug | M7", en: "We'll call you back | M7" },
    }[l.kind],
    lang,
  );
  const lead = {
    contact: {
      nl: "We hebben je bericht goed ontvangen en reageren binnen één werkdag.",
      en: "We've received your message and will reply within one business day.",
    },
    intake: {
      nl: "Je korte intake is binnen. We kijken ernaar en nemen binnen één werkdag contact met je op.",
      en: "We've got your quick intake. We'll look at it and get in touch within one business day.",
    },
    callback: {
      nl: `We bellen je zo snel mogelijk terug${l.phone ? ` op ${l.phone}` : ""}${l.moment ? ` (${l.moment})` : ""}.`,
      en: `We'll call you back as soon as possible${l.phone ? ` on ${l.phone}` : ""}${l.moment ? ` (${l.moment})` : ""}.`,
    },
  }[l.kind];
  const ccLine = opts.ccMartijn
    ? L(
        {
          nl: "Martijn Roefs, je vaste aanspreekpunt, staat in de cc. Wil je nog iets aanvullen? Reageer gewoon op deze mail.",
          en: "Martijn Roefs, your point of contact, is in cc. Anything to add? Just reply to this email.",
        },
        lang,
      )
    : L({ nl: "Wil je nog iets aanvullen? Reageer gewoon op deze mail.", en: "Anything to add? Just reply to this email." }, lang);
  const next = {
    nl: ["We lezen je aanvraag en verdiepen ons in je bedrijf.", "Binnen één werkdag hoor je van ons, per mail of telefoon.", "Samen bepalen we de beste volgende stap."],
    en: ["We read your request and look into your business.", "You'll hear from us within one business day, by email or phone.", "Together we decide on the best next step."],
  };
  const T = (nl: string, en: string) => (lang === "en" ? en : nl);
  const body = [
    accent,
    eyebrow(
      L(
        {
          contact: { nl: "Bericht ontvangen", en: "Message received" },
          intake: { nl: "Intake ontvangen", en: "Intake received" },
          callback: { nl: "Terugbelverzoek ontvangen", en: "Call-back request received" },
        }[l.kind],
        lang,
      ),
    ),
    h1(`${T("Bedankt", "Thanks")}, ${hl(name)}.`),
    p(esc(L(lead, lang))),
    p(esc(ccLine), 10),
    section(
      T("Wat je ons stuurde", "What you sent us"),
      rows([
        [T("Naam", "Name"), esc(l.name)],
        [T("Bedrijf", "Company"), l.company && esc(l.company)],
        [T("E-mail", "Email"), l.email && esc(l.email)],
        [T("Telefoon", "Phone"), l.phone && esc(l.phone)],
        [T("Voorkeursmoment", "Preferred time"), l.moment && esc(l.moment)],
        [T("Interesse", "Interest"), l.interest?.length ? esc(l.interest.join(", ")) : undefined],
      ]) + quote(clip(l.message, 1500)),
    ),
    section(T("Hoe het verder gaat", "What happens next"), steps(next[lang])),
    person(base, lang),
    `<div style="margin-top:30px">${button(base + localize("/cases", lang), T("Bekijk ons werk", "See our work"))}</div>`,
  ].join("");
  const note = esc(
    T(
      "Je ontvangt deze e-mail omdat je een formulier invulde op m7branding.com.",
      "You're receiving this email because you filled in a form on m7branding.com.",
    ),
  );
  const text = [
    `${T("Bedankt", "Thanks")}, ${name}.`,
    "",
    L(lead, lang),
    ccLine,
    "",
    `${T("Wat je ons stuurde", "What you sent us")}:`,
    clip(l.message, 1500),
    "",
    `${T("Hoe het verder gaat", "What happens next")}:`,
    ...next[lang].map((s, i) => `${i + 1}. ${s}`),
    "",
    "Martijn Roefs · M7 Branding & Design",
    `${site.email}${site.whatsapp ? ` · WhatsApp https://wa.me/${site.whatsapp}` : ""}`,
    base + localize("/cases", lang),
  ].join("\n");
  return { subject, html: shell({ lang, base, preheader: L(lead, lang), body, note }), text };
}

/* ---------- support */

export interface Ticket {
  ref?: string;
  kind: string;
  kindLabel?: string;
  urgency?: string;
  requestTypes?: string[];
  url?: string;
  message: string;
  summary?: string;
  name: string;
  company: string;
  email: string;
  phone?: string;
  website?: string;
  locale: Lang;
  page?: string;
}

const URGENCY: Record<string, TT> = {
  low: { nl: "Kan wachten", en: "Can wait" },
  today: { nl: "Vandaag graag", en: "Today, please" },
  urgent: { nl: "Spoed: site ligt eruit", en: "Urgent: site is down" },
};

export function ticketToTeam(t: Ticket, base: string, subject: string): Built {
  const urgent = t.kind === "problem" && t.urgency === "urgent";
  const actions = [
    button(`mailto:${t.email}?subject=${encodeURIComponent(`Re: ${subject}`)}`, "Beantwoorden"),
    t.phone && button(`tel:+${intl(t.phone)}`, "Bellen", true),
    t.phone && button(`https://wa.me/${intl(t.phone)}`, "WhatsApp", true),
  ]
    .filter(Boolean)
    .join("");
  const body = [
    accent,
    eyebrow(`Supportticket${urgent ? " · SPOED" : ""}`),
    h1(esc(t.company)),
    p(esc(`${t.kindLabel || t.kind}${t.urgency ? ` · ${URGENCY[t.urgency]?.nl || t.urgency}` : ""}`), 8),
    `<div style="margin-top:22px">${actions}</div>`,
    section(
      "Ticket",
      rows([
        ["Soort", esc(t.kindLabel || t.kind)],
        ["Urgentie", t.urgency && esc(URGENCY[t.urgency]?.nl || t.urgency)],
        ["Type verzoek", t.requestTypes?.length ? esc(t.requestTypes.join(", ")) : undefined],
        ["URL", t.url && link(t.url, clip(t.url, 60))],
        ["Referentie", t.ref && esc(t.ref)],
        ["Naam", esc(t.name)],
        ["Bedrijf", esc(t.company)],
        ["E-mail", mailto(t.email)],
        ["Telefoon", t.phone && tel(t.phone)],
        ["Website", t.website && link(/^https?:/.test(t.website) ? t.website : `https://${t.website}`, t.website)],
        ["Pagina", t.page && link(t.page, clip(t.page.replace(/^https?:\/\//, ""), 60))],
        ["Ontvangen", esc(when())],
      ]),
    ),
    section("Omschrijving", quote(clip(t.message, 8000))),
  ].join("");
  const text = [subject, "", t.summary || t.message, "", `Ontvangen: ${when()}`].join("\n");
  return {
    subject,
    html: shell({ lang: "nl", base, preheader: clip(t.message, 100), body, note: `Op deze mail antwoorden gaat rechtstreeks naar ${mailto(t.email)}.` }),
    text,
  };
}

export function ticketToClient(t: Ticket, base: string, opts: { ccMartijn: boolean }): Built {
  const lang = t.locale;
  const T = (nl: string, en: string) => (lang === "en" ? en : nl);
  const urgent = t.kind === "problem" && t.urgency === "urgent";
  const lead = T("We gaan ermee aan de slag en reageren binnen één werkdag.", "We're on it and will get back to you within one business day.");
  const urgentLine = urgent
    ? T("Spoed pakken we als eerste op.", "Urgent tickets go first.") +
      (site.phone ? " " + T(`Ligt je site eruit? Bel Martijn gerust meteen: ${site.phone}.`, `Site down? Feel free to call Martijn right away: ${site.phone}.`) : "")
    : "";
  const cc = opts.ccMartijn
    ? T("Martijn Roefs staat in de cc. Aanvullen kan door op deze mail te reageren.", "Martijn Roefs is in cc. To add anything, just reply to this email.")
    : T("Aanvullen kan door op deze mail te reageren.", "To add anything, just reply to this email.");
  const body = [
    accent,
    eyebrow(T("Supportticket ontvangen", "Support ticket received")),
    h1(`${T("Ticket is binnen", "Ticket received")}, ${hl(first(t.name))}.`),
    p(esc(`${lead}${urgentLine ? " " + urgentLine : ""}`)),
    p(esc(cc), 10),
    section(
      T("Je ticket", "Your ticket"),
      rows([
        [T("Soort", "Type"), esc(t.kindLabel || t.kind)],
        [T("Urgentie", "Urgency"), t.urgency && esc(L(URGENCY[t.urgency] || { nl: t.urgency, en: t.urgency }, lang))],
        [T("Referentie", "Reference"), t.ref && esc(t.ref)],
        ["URL", t.url && esc(t.url)],
      ]) + quote(clip(t.message, 1500)),
    ),
    person(base, lang),
  ].join("");
  const note = esc(
    T("Je ontvangt deze e-mail omdat je een supportticket indiende op m7branding.com.", "You're receiving this email because you submitted a support ticket on m7branding.com."),
  );
  const text = [`${T("Ticket is binnen", "Ticket received")}, ${first(t.name)}.`, "", lead, urgentLine, cc, "", clip(t.message, 1500), "", "M7 Branding & Design · " + site.email]
    .filter((x) => x !== undefined)
    .join("\n");
  return {
    subject: T(`Je ticket is binnen${t.ref ? ` (${t.ref})` : ""} | M7 support`, `Ticket received${t.ref ? ` (${t.ref})` : ""} | M7 support`),
    html: shell({ lang, base, preheader: lead, body, note }),
    text,
  };
}

/* ---------- nieuwsbrief: double opt-in */

export function optinMail(href: string, base: string, lang: Lang): Built {
  const T = (nl: string, en: string) => (lang === "en" ? en : nl);
  const perks = getDict(lang).newsletter.perks as string[];
  const list = `<table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px">${perks
    .map(
      (x) =>
        `<tr><td width="26" valign="top" style="padding:6px 0;font:800 14px/22px ${FONT};color:${C.green}">&#10003;</td><td style="padding:6px 0;font:600 15px/22px ${FONT};color:${C.text}">${esc(x)}</td></tr>`,
    )
    .join("")}</table>`;
  const body = [
    accent,
    eyebrow(T("M7 Nieuwsbrief", "M7 Newsletter")),
    h1(T(`Nog ${hl("één klik")}.`, `One more ${hl("click")}.`)),
    p(esc(T("Bevestig je e-mailadres en je ontvangt de M7 nieuwsbrief met:", "Confirm your email address and you'll get the M7 newsletter with:"))),
    list,
    `<div style="margin-top:28px">${button(href, T("Ja, schrijf me in", "Yes, subscribe me"))}</div>`,
    small(
      esc(
        T(
          "Heb je je niet aangemeld? Negeer deze mail dan; zonder bevestiging schrijven we je niet in. De link is 14 dagen geldig.",
          "Didn't sign up? Just ignore this email; without confirmation we won't subscribe you. The link is valid for 14 days.",
        ),
      ),
    ),
  ].join("");
  const note = esc(
    T(
      "Je ontvangt deze e-mail omdat dit adres werd opgegeven voor de nieuwsbrief op m7branding.com.",
      "You're receiving this email because this address was entered for the newsletter on m7branding.com.",
    ),
  );
  return {
    subject: T("Bevestig je inschrijving | M7 nieuwsbrief", "Confirm your subscription | M7 newsletter"),
    html: shell({ lang, base, preheader: T("Bevestig je e-mailadres voor de M7 nieuwsbrief.", "Confirm your email for the M7 newsletter."), body, note }),
    text: [
      T("Nog één klik.", "One more click."),
      "",
      T("Bevestig je inschrijving voor de M7 nieuwsbrief:", "Confirm your subscription to the M7 newsletter:"),
      href,
      "",
      T("Niet aangemeld? Negeer deze mail dan.", "Didn't sign up? Just ignore this email."),
    ].join("\n"),
  };
}

/** Pagina na het klikken op de bevestigingslink. */
export function optinPage(state: "ok" | "invalid" | "error", base: string, lang: Lang): string {
  const T = (nl: string, en: string) => (lang === "en" ? en : nl);
  const copy = {
    ok: {
      h: T(`Je bent ${hl("ingeschreven")}.`, `You're ${hl("subscribed")}.`),
      p: T(
        "Bedankt! Je ontvangt voortaan de M7 nieuwsbrief. Uitschrijven kan altijd, via de link onderin elke nieuwsbrief.",
        "Thanks! You'll now receive the M7 newsletter. You can unsubscribe any time via the link at the bottom of every issue.",
      ),
    },
    invalid: {
      h: T("Deze link werkt niet (meer).", "This link doesn't work (anymore)."),
      p: T(
        "De link is verlopen of onvolledig. Schrijf je opnieuw in via het formulier onderaan onze website.",
        "The link has expired or is incomplete. Sign up again via the form at the bottom of our website.",
      ),
    },
    error: {
      h: T("Er ging iets mis.", "Something went wrong."),
      p: T(
        `Je inschrijving kon nu niet worden verwerkt. Probeer het later opnieuw of mail ons op ${site.email}.`,
        `We couldn't process your subscription right now. Please try again later or email us at ${site.email}.`,
      ),
    },
  }[state];
  const body = [
    accent,
    eyebrow(T("M7 Nieuwsbrief", "M7 Newsletter")),
    h1(copy.h),
    p(esc(copy.p)),
    `<div style="margin-top:28px">${button(base + localize("/", lang), T("Naar de website", "Go to the website"))}</div>`,
  ].join("");
  return shell({ lang, base, preheader: "", body, note: "", page: true });
}
