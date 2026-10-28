"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useLocale } from "@/components/motion/LocaleProvider";
import { TLink } from "@/components/motion/TLink";
import { aria, Check, ChoiceCard, ChoiceChip, Field } from "@/components/overlay/Choice";
import { LiveDot } from "@/components/overlay/LiveDot";
import { OverlayShell } from "@/components/overlay/OverlayShell";
import {
  clearDraft,
  EMAIL_RE,
  isValidPhone,
  isValidUrl,
  loadDraft,
  normalizeUrl,
  saveDraft,
  useOverlayHost,
} from "@/components/overlay/overlay-events";
import { Icon } from "@/components/ui/Icon";
import type { SupportPerson } from "@/content/support";
import type { T } from "@/content/types";
import { tr } from "@/lib/i18n";
import { paths } from "@/lib/paths";
import { Avatar, Avatars } from "./Avatars";

/* ------------------------------------------------------------ copy */
const C = {
  status: { nl: "Support staat aan", en: "Support is on" },
  title: { nl: "We staan voor je klaar", en: "We've got your back" },
  intro: {
    nl: "Loopt er iets vast, wil je iets laten aanpassen of heb je een vraag? Maak in een paar stappen een ticket aan. Dan weten we meteen wat er speelt.",
    en: "Something stuck, a change you need or a question? Create a ticket in a few steps, so we know straight away what's going on.",
  },
  direct: { nl: "Liever direct contact?", en: "Rather talk directly?" },
  call: { nl: "Bel", en: "Call" },
  mail: { nl: "Mail support", en: "Email support" },
  steps: [
    { nl: "Onderwerp", en: "Topic" },
    { nl: "Details", en: "Details" },
    { nl: "Gegevens", en: "Your details" },
    { nl: "Controleren", en: "Review" },
  ] as T[],
  stepOf: { nl: "Stap {n} van {t}", en: "Step {n} of {t}" },
  close: { nl: "Sluiten", en: "Close" },
  back: { nl: "Terug", en: "Back" },
  next: { nl: "Volgende", en: "Next" },
  send: { nl: "Verstuur ticket", en: "Send ticket" },
  sending: { nl: "Versturen…", en: "Sending…" },
  optional: { nl: "optioneel", en: "optional" },
  edit: { nl: "Wijzig", en: "Edit" },

  s1: { nl: "Waar kunnen we mee helpen?", en: "What can we help with?" },
  s1sub: { nl: "Kies wat het beste past. Je kunt altijd terug.", en: "Pick what fits best. You can always go back." },
  kinds: {
    problem: {
      t: { nl: "Er werkt iets niet", en: "Something isn't working" },
      d: { nl: "Een storing, foutmelding of iets dat raar doet.", en: "An outage, an error or something acting up." },
    },
    request: {
      t: { nl: "Wijziging of verzoek", en: "Change or request" },
      d: { nl: "Iets aanpassen, toevoegen of laten regelen.", en: "Something to change, add or sort out." },
    },
    question: {
      t: { nl: "Vraag of advies", en: "Question or advice" },
      d: { nl: "Even sparren of iets navragen.", en: "A quick question or some advice." },
    },
  } as Record<Kind, { t: T; d: T }>,

  pTitle: { nl: "Wat gaat er mis?", en: "What's going wrong?" },
  pSub: { nl: "Vertel wat je deed en wat je zag. Een foutmelding overtypen helpt ook.", en: "Tell us what you did and what you saw. Copying an error message helps too." },
  pDesc: { nl: "Omschrijving", en: "Description" },
  pDescPh: {
    nl: "Bijvoorbeeld: het contactformulier verstuurt sinds vanochtend niks meer.",
    en: "For example: the contact form hasn't sent anything since this morning.",
  },
  pUrl: { nl: "Waar zie je het?", en: "Where do you see it?" },
  pUrlHint: { nl: "Plak de link van de pagina, als dat kan.", en: "Paste the page link, if you can." },
  urgency: { nl: "Hoe dringend is het?", en: "How urgent is it?" },
  urg: {
    low: { t: { nl: "Kan wachten", en: "Can wait" }, d: { nl: "Geen haast, als het maar goed komt.", en: "No rush, as long as it gets fixed." } },
    today: { t: { nl: "Vandaag graag", en: "Today, please" }, d: { nl: "Het zit in de weg, maar alles draait nog.", en: "It's in the way, but things still run." } },
    urgent: { t: { nl: "Spoed: site ligt eruit", en: "Urgent: site is down" }, d: { nl: "Bezoekers of klanten kunnen er niet meer bij.", en: "Visitors or customers can't get in." } },
  } as Record<Urgency, { t: T; d: T }>,
  urgentCall: {
    nl: "Ligt je site eruit? Bel {name} gerust meteen, dan kijken we direct mee.",
    en: "Site down? Feel free to call {name} right away and we'll look into it.",
  },
  urgentNoPhone: {
    nl: "Spoed pakken we als eerste op. Zet zoveel mogelijk details in je ticket.",
    en: "Urgent tickets go first. Add as many details as you can.",
  },

  rTitle: { nl: "Wat mogen we voor je regelen?", en: "What can we sort out for you?" },
  rSub: { nl: "Kies één of meer onderwerpen en vertel wat je precies wilt.", en: "Pick one or more topics and tell us exactly what you need." },
  rTypes: { nl: "Waar gaat het om?", en: "What is it about?" },
  rSpec: { nl: "Wat wil je precies?", en: "What exactly do you need?" },
  rSpecPh: {
    nl: "Hoe concreter, hoe sneller we het oppakken. Welke pagina, welke tekst, voor wanneer?",
    en: "The more specific, the faster we can pick it up. Which page, which text, by when?",
  },
  rUrl: { nl: "Om welke pagina gaat het?", en: "Which page is it about?" },

  qTitle: { nl: "Wat wil je weten?", en: "What would you like to know?" },
  qSub: { nl: "Vraag maar raak. Hoe meer context, hoe beter ons antwoord.", en: "Ask away. The more context, the better our answer." },
  qMsg: { nl: "Je vraag", en: "Your question" },
  qMsgPh: {
    nl: "Bijvoorbeeld: kunnen we onze nieuwsbrief koppelen aan de website?",
    en: "For example: can we connect our newsletter to the website?",
  },

  cTitle: { nl: "Met wie hebben we het?", en: "Who are we talking to?" },
  cSub: { nl: "Dan weten we bij wie we terugkomen.", en: "So we know who to get back to." },
  name: { nl: "Naam", en: "Name" },
  company: { nl: "Bedrijfsnaam", en: "Company name" },
  email: { nl: "E-mailadres", en: "Email address" },
  phone: { nl: "Telefoon", en: "Phone" },
  phoneHint: { nl: "Handig als we even willen bellen.", en: "Handy if we'd like to give you a call." },
  website: { nl: "Website", en: "Website" },

  sumTitle: { nl: "Klopt dit zo?", en: "Does this look right?" },
  sumSub: { nl: "Check je ticket nog even. Daarna gaat 'ie naar {email}.", en: "Give your ticket a quick check. Then it goes to {email}." },
  sumTopic: { nl: "Onderwerp", en: "Topic" },
  sumDetails: { nl: "Details", en: "Details" },
  sumContact: { nl: "Contact", en: "Contact" },
  privacy: { nl: "We gebruiken je gegevens alleen om je ticket af te handelen.", en: "We only use your details to handle your ticket." },
  privacyLink: { nl: "Privacybeleid", en: "Privacy policy" },

  doneTitle: { nl: "Ticket is binnen. Dank je!", en: "Ticket received. Thanks!" },
  doneText: {
    nl: "We gaan ermee aan de slag en reageren binnen één werkdag.",
    en: "We're on it and will get back to you within one business day.",
  },
  doneUrgent: {
    nl: "Spoed pakken we als eerste op.",
    en: "Urgent tickets go first.",
  },
  doneCall: { nl: "Kan het echt niet wachten? Bel {name}:", en: "Really can't wait? Call {name}:" },
  ref: { nl: "Referentie", en: "Reference" },
  newTicket: { nl: "Nog een ticket", en: "Another ticket" },

  failTitle: { nl: "Automatisch versturen lukte nu niet", en: "We couldn't send it automatically" },
  failText: {
    nl: "Geen zorgen, je ticket staat klaar. Stuur 'm met één klik via je eigen mail naar {email}.",
    en: "No worries, your ticket is ready. Send it in one click from your own email to {email}.",
  },
  failMail: { nl: "Open in je mail", en: "Open in your email" },
  copy: { nl: "Kopieer ticket", en: "Copy ticket" },
  copied: { nl: "Gekopieerd", en: "Copied" },
  retry: { nl: "Opnieuw proberen", en: "Try again" },

  err: {
    choose: { nl: "Maak even een keuze.", en: "Please pick one." },
    chooseOne: { nl: "Kies minstens één onderwerp.", en: "Pick at least one topic." },
    short: { nl: "Vertel iets meer, dan kunnen we gerichter helpen.", en: "Tell us a bit more so we can help properly." },
    required: { nl: "Dit veld hebben we nodig.", en: "We need this one." },
    email: { nl: "Dit e-mailadres lijkt niet te kloppen.", en: "This email address doesn't look right." },
    url: { nl: "Dit lijkt geen geldige link.", en: "This doesn't look like a valid link." },
    phone: { nl: "Dit telefoonnummer lijkt niet te kloppen.", en: "This phone number doesn't look right." },
  },
};

const REQUEST_TYPES: { id: string; t: T }[] = [
  { id: "content", t: { nl: "Tekst of beeld aanpassen", en: "Update text or images" } },
  { id: "page", t: { nl: "Nieuwe pagina of sectie", en: "New page or section" } },
  { id: "feature", t: { nl: "Functionaliteit", en: "Functionality" } },
  { id: "domain", t: { nl: "Domein, hosting of e-mail", en: "Domain, hosting or email" } },
  { id: "seo", t: { nl: "SEO of marketing", en: "SEO or marketing" } },
  { id: "other", t: { nl: "Iets anders", en: "Something else" } },
];

/* ------------------------------------------------------------ types */
type Kind = "problem" | "request" | "question";
type Urgency = "low" | "today" | "urgent";
interface Ticket {
  kind: Kind | "";
  description: string;
  url: string;
  urgency: Urgency | "";
  types: string[];
  spec: string;
  message: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  website: string;
}
const EMPTY: Ticket = {
  kind: "",
  description: "",
  url: "",
  urgency: "",
  types: [],
  spec: "",
  message: "",
  name: "",
  company: "",
  email: "",
  phone: "",
  website: "",
};
const DRAFT_KEY = "m7-support-draft";
type Errors = Partial<Record<keyof Ticket, string>>;

const fill = (s: string, vars: Record<string, string>) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");

/* ------------------------------------------------------------ icons (support-specifiek) */
const KIND_ICON: Record<Kind, string> = {
  problem: "M12 4.2 2.8 19.5h18.4L12 4.2Z M12 10v4.2 M12 16.9h.01",
  request: "M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16v4Z M13.5 6.5l4 4",
  question: "M4.5 5.5h15v10h-8l-4.5 3.5v-3.5h-2.5v-10Z M9.5 9.2a2.5 2.5 0 1 1 3.3 2.4c-.5.2-.8.6-.8 1.1 M12 14.6h.01",
};
const KindIcon = ({ kind }: { kind: Kind }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d={KIND_ICON[kind]} />
  </svg>
);

/* ------------------------------------------------------------ validatie */
function validate(step: number, t: Ticket): Errors {
  const e: Errors = {};
  if (step === 0 && !t.kind) e.kind = "choose";
  if (step === 1) {
    if (t.kind === "problem") {
      if (t.description.trim().length < 8) e.description = "short";
      if (!isValidUrl(t.url)) e.url = "url";
      if (!t.urgency) e.urgency = "choose";
    } else if (t.kind === "request") {
      if (!t.types.length) e.types = "chooseOne";
      if (t.spec.trim().length < 8) e.spec = "short";
      if (!isValidUrl(t.url)) e.url = "url";
    } else if (t.kind === "question") {
      if (t.message.trim().length < 8) e.message = "short";
    }
  }
  if (step === 2) {
    if (!t.name.trim()) e.name = "required";
    if (!t.company.trim()) e.company = "required";
    if (!EMAIL_RE.test(t.email.trim())) e.email = t.email.trim() ? "email" : "required";
    if (!isValidPhone(t.phone)) e.phone = "phone";
    if (!isValidUrl(t.website)) e.website = "url";
  }
  return e;
}

/* ============================================================ */
export function SupportModal({
  email,
  phone,
  phoneOwner,
  people,
}: {
  email: string;
  phone: string;
  phoneOwner: string;
  people: SupportPerson[];
}) {
  const locale = useLocale();
  const L = (v: T) => tr(v, locale);
  const { open, close } = useOverlayHost("support");

  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);
  const [t, setT] = useState<Ticket>(EMPTY);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "busy" | "done" | "error">("idle");
  const [ref, setRef] = useState("");
  const [copied, setCopied] = useState(false);
  const restored = useRef(false);
  const headRef = useRef<HTMLHeadingElement>(null);
  const hpRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true);

  const tel = phone.replace(/[^\d+]/g, "");

  // Concept herstellen bij openen
  useEffect(() => {
    if (!open || restored.current) return;
    restored.current = true;
    const d = loadDraft<{ t: Ticket; step: number }>(DRAFT_KEY);
    if (d?.t) {
      setT({ ...EMPTY, ...d.t });
      setStep(Math.min(Math.max(0, d.step | 0), 3));
    }
  }, [open]);

  // Autosave
  useEffect(() => {
    if (!restored.current || status === "done") return;
    saveDraft(DRAFT_KEY, { t, step });
  }, [t, step, status]);

  // Focus naar de staptitel bij elke stapwissel (niet bij openen)
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (open) headRef.current?.focus({ preventScroll: true });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [step, status]);

  const set = <K extends keyof Ticket>(k: K, v: Ticket[K]) => {
    setT((cur) => ({ ...cur, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const go = (to: number) => {
    setDir(to > step ? 1 : -1);
    setErrors({});
    setStep(to);
    const body = document.querySelector(".sup__body");
    body?.scrollTo({ top: 0 });
  };

  const next = () => {
    const e = validate(step, t);
    if (Object.keys(e).length) {
      setErrors(e);
      window.setTimeout(() => {
        const el = document.querySelector<HTMLElement>(".sup [aria-invalid='true'], .sup .is-invalid button, .sup .is-invalid textarea");
        el?.focus();
      }, 30);
      return;
    }
    go(step + 1);
  };

  const pickKind = (k: Kind) => {
    set("kind", k);
    window.setTimeout(() => {
      setDir(1);
      setErrors({});
      setStep(1);
    }, 260);
  };

  const errMsg = (k: keyof Ticket) => (errors[k] ? L(C.err[errors[k] as keyof typeof C.err]) : undefined);

  /* ---------- samenvatting (tekst voor mailto / kopiëren) */
  const kindLabel = t.kind ? L(C.kinds[t.kind].t) : "";
  const urgencyLabel = t.urgency ? L(C.urg[t.urgency].t) : "";
  const typeLabels = REQUEST_TYPES.filter((x) => t.types.includes(x.id)).map((x) => L(x.t));
  const detailText = t.kind === "problem" ? t.description : t.kind === "request" ? t.spec : t.message;

  const summaryText = useMemo(() => {
    const nl = locale === "nl";
    const lines = [
      ref ? `${L(C.ref)}: ${ref}` : "",
      `${L(C.sumTopic)}: ${kindLabel}`,
      t.kind === "problem" && urgencyLabel ? `${nl ? "Urgentie" : "Urgency"}: ${urgencyLabel}` : "",
      t.kind === "request" && typeLabels.length ? `${nl ? "Soort verzoek" : "Request type"}: ${typeLabels.join(", ")}` : "",
      (t.kind === "problem" || t.kind === "request") && t.url ? `${nl ? "Pagina" : "Page"}: ${normalizeUrl(t.url)}` : "",
      "",
      detailText.trim().slice(0, 1600),
      "",
      `${L(C.name)}: ${t.name}`,
      `${L(C.company)}: ${t.company}`,
      `${L(C.email)}: ${t.email}`,
      t.phone ? `${L(C.phone)}: ${t.phone}` : "",
      t.website ? `${L(C.website)}: ${normalizeUrl(t.website)}` : "",
    ];
    return lines.filter((l, i, a) => l !== "" || (a[i - 1] ?? "") !== "").join("\n").trim();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t, ref, locale]);

  const mailto = useMemo(() => {
    const urgent = t.urgency === "urgent" && t.kind === "problem";
    const subject = `[Support] ${urgent ? "SPOED · " : ""}${kindLabel} · ${t.company || t.name}${ref ? ` (${ref})` : ""}`;
    return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(summaryText)}`;
  }, [email, kindLabel, summaryText, t.company, t.name, t.urgency, t.kind, ref]);

  const send = async () => {
    const r = ref || `M7-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    setRef(r);
    setStatus("busy");
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ref: r,
          kind: t.kind,
          kindLabel,
          urgency: t.kind === "problem" ? t.urgency : undefined,
          requestTypes: t.kind === "request" ? t.types : undefined,
          url: t.kind !== "question" && t.url ? normalizeUrl(t.url) : undefined,
          message: detailText.trim(),
          name: t.name.trim(),
          company: t.company.trim(),
          email: t.email.trim(),
          phone: t.phone.trim() || undefined,
          website: t.website ? normalizeUrl(t.website) : undefined,
          fax: hpRef.current?.value || "",
          locale,
          page: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
      clearDraft(DRAFT_KEY);
      const g = (window as unknown as { gtag?: (...a: unknown[]) => void }).gtag;
      g?.("event", "support_ticket", { kind: t.kind });
    } catch {
      setStatus("error");
    }
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summaryText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      /* geen clipboard */
    }
  };

  const reset = () => {
    setT((cur) => ({ ...EMPTY, name: cur.name, company: cur.company, email: cur.email, phone: cur.phone, website: cur.website }));
    setRef("");
    setStatus("idle");
    setDir(-1);
    setStep(0);
  };

  const onClose = () => {
    close();
    if (status === "done") {
      // Volgende keer weer fris beginnen
      window.setTimeout(() => {
        setT(EMPTY);
        setStep(0);
        setRef("");
        setStatus("idle");
      }, 500);
    }
  };

  const callName = phoneOwner;
  const pct = status === "done" ? 100 : ((step + 1) / 4) * 100;

  /* ---------- render */
  return (
    <OverlayShell open={open} onClose={onClose} labelledBy="sup-title" variant="dialog">
      <div className="sup" data-step={step}>
        {/* ---------- links: het team */}
        <aside className="sup__aside">
          <div className="sup__aside-glow" aria-hidden="true" />
          <p className="live-pill sup__status">
            <LiveDot size={8} />
            <span className="live-pill__live">Live</span>
            <span className="live-pill__sep" aria-hidden="true" />
            <span className="sup__status-t">{L(C.status)}</span>
          </p>
          <Avatars people={people} size={58} className="sup__avs" />
          <h2 id="sup-title" className="sup__title">
            {L(C.title)}
          </h2>
          <p className="sup__intro">{L(C.intro)}</p>
          <ul className="sup__people">
            {people.map((p) => (
              <li key={p.name}>
                <Avatar person={p} size={34} />
                <span>
                  <strong>{p.name}</strong>
                  <small>{L(p.role)}</small>
                </span>
              </li>
            ))}
          </ul>
          <div className="sup__direct">
            <p className="sup__direct-k">{L(C.direct)}</p>
            {tel ? (
              <a className="sup__direct-a" href={`tel:${tel}`}>
                <span className="sup__direct-i">
                  <Icon name="phone" size={18} />
                </span>
                <span>
                  <strong>
                    {L(C.call)} {callName}
                  </strong>
                  <small>{phone}</small>
                </span>
              </a>
            ) : null}
            <a className="sup__direct-a" href={`mailto:${email}`}>
              <span className="sup__direct-i">
                <Icon name="mail" size={18} />
              </span>
              <span>
                <strong>{L(C.mail)}</strong>
                <small>{email}</small>
              </span>
            </a>
          </div>
        </aside>

        {/* ---------- rechts: de flow */}
        <section className="sup__main" aria-live="polite">
          <header className="sup__head">
            {status === "done" ? (
              <p className="sup__meta">
                <Check size={13} /> {L(C.ref)} {ref}
              </p>
            ) : (
              <ol className="sup__steps" aria-label={fill(L(C.stepOf), { n: String(step + 1), t: "4" })}>
                {C.steps.map((s, i) => (
                  <li key={i} className={i === step ? "is-now" : i < step ? "is-done" : ""} aria-current={i === step ? "step" : undefined}>
                    <span className="sup__steps-n">{i < step ? <Check size={11} /> : i + 1}</span>
                    <span className="sup__steps-l">{L(s)}</span>
                  </li>
                ))}
              </ol>
            )}
            <button type="button" className="ov-close" onClick={onClose} aria-label={L(C.close)}>
              <Icon name="close" size={20} stroke={2} />
            </button>
            <div className="ov-progress" aria-hidden="true">
              <span style={{ transform: `scaleX(${pct / 100})` }} />
            </div>
          </header>

          {status === "done" ? (
            <div className="sup__body sup__done" key="done" data-dir="1">
              <span className="ov-donemark" aria-hidden="true">
                <svg viewBox="0 0 52 52">
                  <circle cx="26" cy="26" r="24" />
                  <path d="M15 27l7 7 15-16" />
                </svg>
              </span>
              <h3 className="sup__h" tabIndex={-1} ref={headRef}>
                {L(C.doneTitle)}
              </h3>
              <p className="sup__sub">
                {L(C.doneText)} {t.kind === "problem" && t.urgency === "urgent" ? L(C.doneUrgent) : null}
              </p>
              {t.kind === "problem" && t.urgency === "urgent" && tel ? (
                <p className="sup__note sup__note--warn">
                  {fill(L(C.doneCall), { name: callName })}{" "}
                  <a href={`tel:${tel}`}>
                    <strong>{phone}</strong>
                  </a>
                </p>
              ) : null}
              <dl className="sup__ticket">
                <div>
                  <dt>{L(C.ref)}</dt>
                  <dd>{ref}</dd>
                </div>
                <div>
                  <dt>{L(C.sumTopic)}</dt>
                  <dd>
                    {kindLabel}
                    {t.kind === "problem" && urgencyLabel ? ` · ${urgencyLabel}` : ""}
                    {t.kind === "request" && typeLabels.length ? ` · ${typeLabels.join(", ")}` : ""}
                  </dd>
                </div>
                <div>
                  <dt>{L(C.sumContact)}</dt>
                  <dd>
                    {t.name} · {t.company} · {t.email}
                  </dd>
                </div>
              </dl>
              <div className="sup__done-cta">
                <button type="button" className="ov-btn ov-btn--primary" onClick={onClose}>
                  {L(C.close)}
                </button>
                <button type="button" className="ov-btn ov-btn--ghost" onClick={reset}>
                  {L(C.newTicket)}
                </button>
              </div>
            </div>
          ) : (
            <div className="sup__body" key={step} data-dir={dir}>
              {/* ---------- stap 1 */}
              {step === 0 && (
                <>
                  <h3 className="sup__h" tabIndex={-1} ref={headRef}>
                    {L(C.s1)}
                  </h3>
                  <p className="sup__sub">{L(C.s1sub)}</p>
                  <div className={`sup__kinds${errors.kind ? " is-invalid" : ""}`} role="group" aria-label={L(C.s1)}>
                    {(Object.keys(C.kinds) as Kind[]).map((k, i) => (
                      <ChoiceCard
                        key={k}
                        selected={t.kind === k}
                        onSelect={() => pickKind(k)}
                        icon={<KindIcon kind={k} />}
                        title={L(C.kinds[k].t)}
                        desc={L(C.kinds[k].d)}
                        accent={k === "problem" ? "#ff7a59" : k === "request" ? "#3affff" : "#b48cff"}
                        autoFocus={i === 0}
                      />
                    ))}
                  </div>
                  {errors.kind ? <p className="ov-field__err">{errMsg("kind")}</p> : null}
                  <div className="sup__direct sup__direct--inline">
                    <p className="sup__direct-k">{L(C.direct)}</p>
                    <div className="sup__direct-row">
                      {tel ? (
                        <a className="ov-pill" href={`tel:${tel}`}>
                          <Icon name="phone" size={16} /> {L(C.call)} {callName}
                        </a>
                      ) : null}
                      <a className="ov-pill" href={`mailto:${email}`}>
                        <Icon name="mail" size={16} /> {email}
                      </a>
                    </div>
                  </div>
                </>
              )}

              {/* ---------- stap 2: probleem */}
              {step === 1 && t.kind === "problem" && (
                <>
                  <h3 className="sup__h" tabIndex={-1} ref={headRef}>
                    {L(C.pTitle)}
                  </h3>
                  <p className="sup__sub">{L(C.pSub)}</p>
                  <Field id="sup-desc" label={L(C.pDesc)} error={errMsg("description")}>
                    <textarea
                      {...aria("sup-desc", errMsg("description"))}
                      rows={4}
                      value={t.description}
                      placeholder={L(C.pDescPh)}
                      onChange={(e) => set("description", e.target.value)}
                      maxLength={4000}
                    />
                  </Field>
                  <Field id="sup-url" label={L(C.pUrl)} optional={L(C.optional)} hint={L(C.pUrlHint)} error={errMsg("url")}>
                    <input
                      {...aria("sup-url", errMsg("url"), true)}
                      type="url"
                      inputMode="url"
                      autoComplete="url"
                      value={t.url}
                      placeholder="https://"
                      onChange={(e) => set("url", e.target.value)}
                    />
                  </Field>
                  <div className={`ov-field${errors.urgency ? " is-invalid" : ""}`}>
                    <p className="ov-field__label" id="sup-urg-l">
                      {L(C.urgency)}
                    </p>
                    <div className="sup__urg" role="group" aria-labelledby="sup-urg-l">
                      {(Object.keys(C.urg) as Urgency[]).map((u) => (
                        <ChoiceCard
                          key={u}
                          layout="tile"
                          selected={t.urgency === u}
                          onSelect={() => set("urgency", u)}
                          icon={<span className={`sup__urg-dot sup__urg-dot--${u}`} />}
                          title={L(C.urg[u].t)}
                          desc={L(C.urg[u].d)}
                          accent={u === "urgent" ? "#ff5a5a" : u === "today" ? "#ffd23a" : "#3affff"}
                        />
                      ))}
                    </div>
                    {errors.urgency ? <p className="ov-field__err">{errMsg("urgency")}</p> : null}
                  </div>
                  {t.urgency === "urgent" ? (
                    <p className="sup__note sup__note--warn">
                      {tel ? (
                        <>
                          {fill(L(C.urgentCall), { name: callName })}{" "}
                          <a href={`tel:${tel}`}>
                            <strong>{phone}</strong>
                          </a>
                        </>
                      ) : (
                        L(C.urgentNoPhone)
                      )}
                    </p>
                  ) : null}
                </>
              )}

              {/* ---------- stap 2: verzoek */}
              {step === 1 && t.kind === "request" && (
                <>
                  <h3 className="sup__h" tabIndex={-1} ref={headRef}>
                    {L(C.rTitle)}
                  </h3>
                  <p className="sup__sub">{L(C.rSub)}</p>
                  <div className={`ov-field${errors.types ? " is-invalid" : ""}`}>
                    <p className="ov-field__label" id="sup-types-l">
                      {L(C.rTypes)}
                    </p>
                    <div className="ov-chips" role="group" aria-labelledby="sup-types-l">
                      {REQUEST_TYPES.map((x) => (
                        <ChoiceChip
                          key={x.id}
                          selected={t.types.includes(x.id)}
                          onSelect={() =>
                            set("types", t.types.includes(x.id) ? t.types.filter((y) => y !== x.id) : [...t.types, x.id])
                          }
                        >
                          {L(x.t)}
                        </ChoiceChip>
                      ))}
                    </div>
                    {errors.types ? <p className="ov-field__err">{errMsg("types")}</p> : null}
                  </div>
                  <Field id="sup-spec" label={L(C.rSpec)} error={errMsg("spec")}>
                    <textarea
                      {...aria("sup-spec", errMsg("spec"))}
                      rows={4}
                      value={t.spec}
                      placeholder={L(C.rSpecPh)}
                      onChange={(e) => set("spec", e.target.value)}
                      maxLength={4000}
                    />
                  </Field>
                  <Field id="sup-rurl" label={L(C.rUrl)} optional={L(C.optional)} error={errMsg("url")}>
                    <input
                      {...aria("sup-rurl", errMsg("url"))}
                      type="url"
                      inputMode="url"
                      value={t.url}
                      placeholder="https://"
                      onChange={(e) => set("url", e.target.value)}
                    />
                  </Field>
                </>
              )}

              {/* ---------- stap 2: vraag */}
              {step === 1 && t.kind === "question" && (
                <>
                  <h3 className="sup__h" tabIndex={-1} ref={headRef}>
                    {L(C.qTitle)}
                  </h3>
                  <p className="sup__sub">{L(C.qSub)}</p>
                  <Field id="sup-msg" label={L(C.qMsg)} error={errMsg("message")}>
                    <textarea
                      {...aria("sup-msg", errMsg("message"))}
                      rows={6}
                      value={t.message}
                      placeholder={L(C.qMsgPh)}
                      onChange={(e) => set("message", e.target.value)}
                      maxLength={4000}
                    />
                  </Field>
                </>
              )}

              {/* ---------- stap 3: gegevens */}
              {step === 2 && (
                <>
                  <h3 className="sup__h" tabIndex={-1} ref={headRef}>
                    {L(C.cTitle)}
                  </h3>
                  <p className="sup__sub">{L(C.cSub)}</p>
                  <div className="ov-grid2">
                    <Field id="sup-name" label={L(C.name)} error={errMsg("name")}>
                      <input {...aria("sup-name", errMsg("name"))} autoComplete="name" value={t.name} onChange={(e) => set("name", e.target.value)} />
                    </Field>
                    <Field id="sup-company" label={L(C.company)} error={errMsg("company")}>
                      <input
                        {...aria("sup-company", errMsg("company"))}
                        autoComplete="organization"
                        value={t.company}
                        onChange={(e) => set("company", e.target.value)}
                      />
                    </Field>
                    <Field id="sup-email" label={L(C.email)} error={errMsg("email")}>
                      <input
                        {...aria("sup-email", errMsg("email"))}
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={t.email}
                        onChange={(e) => set("email", e.target.value)}
                      />
                    </Field>
                    <Field id="sup-phone" label={L(C.phone)} optional={L(C.optional)} hint={L(C.phoneHint)} error={errMsg("phone")}>
                      <input
                        {...aria("sup-phone", errMsg("phone"), true)}
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        value={t.phone}
                        onChange={(e) => set("phone", e.target.value)}
                      />
                    </Field>
                    <Field id="sup-web" label={L(C.website)} optional={L(C.optional)} error={errMsg("website")} className="ov-span2">
                      <input
                        {...aria("sup-web", errMsg("website"))}
                        type="url"
                        inputMode="url"
                        autoComplete="url"
                        placeholder="https://"
                        value={t.website}
                        onChange={(e) => set("website", e.target.value)}
                      />
                    </Field>
                  </div>
                  <input ref={hpRef} type="text" name="fax" tabIndex={-1} autoComplete="off" className="ov-hp" aria-hidden="true" />
                </>
              )}

              {/* ---------- stap 4: controleren */}
              {step === 3 && (
                <>
                  <h3 className="sup__h" tabIndex={-1} ref={headRef}>
                    {L(C.sumTitle)}
                  </h3>
                  <p className="sup__sub">{fill(L(C.sumSub), { email })}</p>
                  {status === "error" ? (
                    <div className="sup__fail" role="alert">
                      <p className="sup__fail-t">{L(C.failTitle)}</p>
                      <p>{fill(L(C.failText), { email })}</p>
                      <div className="sup__fail-cta">
                        <a className="ov-btn ov-btn--primary" href={mailto}>
                          <Icon name="mail" size={18} /> {L(C.failMail)}
                        </a>
                        <button type="button" className="ov-btn ov-btn--ghost" onClick={copy}>
                          {copied ? <Check /> : null} {copied ? L(C.copied) : L(C.copy)}
                        </button>
                      </div>
                    </div>
                  ) : null}
                  <div className="sup__sum">
                    <SumRow label={L(C.sumTopic)} onEdit={() => go(0)} editLabel={L(C.edit)}>
                      <span className="sup__sum-kind">
                        <KindIcon kind={t.kind as Kind} /> {kindLabel}
                      </span>
                      {t.kind === "problem" && t.urgency ? (
                        <span className={`sup__badge sup__badge--${t.urgency}`}>{urgencyLabel}</span>
                      ) : null}
                      {t.kind === "request" ? typeLabels.map((x) => <span key={x} className="sup__badge">{x}</span>) : null}
                    </SumRow>
                    <SumRow label={L(C.sumDetails)} onEdit={() => go(1)} editLabel={L(C.edit)}>
                      <p className="sup__sum-text">{detailText}</p>
                      {t.kind !== "question" && t.url ? <p className="sup__sum-url">{normalizeUrl(t.url)}</p> : null}
                    </SumRow>
                    <SumRow label={L(C.sumContact)} onEdit={() => go(2)} editLabel={L(C.edit)}>
                      <p>
                        <strong>{t.name}</strong> · {t.company}
                      </p>
                      <p className="sup__sum-muted">
                        {[t.email, t.phone, t.website ? normalizeUrl(t.website) : ""].filter(Boolean).join(" · ")}
                      </p>
                    </SumRow>
                  </div>
                  <p className="sup__privacy">
                    <Icon name="lock" size={14} /> {L(C.privacy)}{" "}
                    <TLink href={paths.privacy} onClick={onClose}>
                      {L(C.privacyLink)}
                    </TLink>
                  </p>
                </>
              )}
            </div>
          )}

          {status !== "done" ? (
            <footer className="sup__foot">
              {step > 0 ? (
                <button type="button" className="ov-btn ov-btn--ghost" onClick={() => go(step - 1)}>
                  <Icon name="arrowLeft" size={18} stroke={2} /> {L(C.back)}
                </button>
              ) : (
                <span />
              )}
              {step < 3 ? (
                <button type="button" className="ov-btn ov-btn--primary" onClick={next}>
                  {L(C.next)} <span className="ov-btn__dot"><Icon name="arrowRight" size={17} stroke={2.2} /></span>
                </button>
              ) : (
                <button type="button" className="ov-btn ov-btn--primary" onClick={send} disabled={status === "busy"}>
                  {status === "busy" ? L(C.sending) : status === "error" ? L(C.retry) : L(C.send)}
                  <span className="ov-btn__dot">
                    <Icon name="send" size={16} stroke={2} />
                  </span>
                </button>
              )}
            </footer>
          ) : null}
        </section>
      </div>
    </OverlayShell>
  );
}

function SumRow({
  label,
  onEdit,
  editLabel,
  children,
}: {
  label: string;
  onEdit: () => void;
  editLabel: string;
  children: React.ReactNode;
}) {
  return (
    <div className="sup__sum-row">
      <div className="sup__sum-head">
        <span>{label}</span>
        <button type="button" onClick={onEdit} className="sup__sum-edit">
          {editLabel}
        </button>
      </div>
      <div className="sup__sum-body">{children}</div>
    </div>
  );
}

