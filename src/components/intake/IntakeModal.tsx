"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Aurora } from "@/components/motion/Aurora";
import { useLocale } from "@/components/motion/LocaleProvider";
import { aria, Check, ChoiceCard, ChoiceChip, Field } from "@/components/overlay/Choice";
import { OverlayShell } from "@/components/overlay/OverlayShell";
import { clearDraft, EMAIL_RE, isValidPhone, loadDraft, saveDraft, useOverlayHost } from "@/components/overlay/overlay-events";
import { Icon, type IconKey } from "@/components/ui/Icon";
import { SocialIcon } from "@/components/ui/Social";
import { Avatars } from "@/components/support/Avatars";
import type { ServiceSlug } from "@/content/registry";
import type { T } from "@/content/types";
import { tr } from "@/lib/i18n";
import { BUDGET, CHALLENGES, GOALS, MOMENTS, recommend, SERVICE_PITCH, SPECIFICS, TIMING, type GoalId } from "./intake-data";

export interface IntakeService {
  slug: ServiceSlug;
  title: T;
  short: T;
  color: string;
  icon: IconKey;
}

/* ------------------------------------------------------------ copy */
const C = {
  label: { nl: "Korte intake", en: "Quick intake" },
  close: { nl: "Sluiten", en: "Close" },
  restart: { nl: "Opnieuw beginnen", en: "Start over" },
  back: { nl: "Terug", en: "Back" },
  next: { nl: "Volgende", en: "Next" },
  skip: { nl: "Sla over", en: "Skip" },
  hint: { nl: "Kies met {keys}, verder met Enter", en: "Pick with {keys}, continue with Enter" },
  optional: { nl: "optioneel", en: "optional" },
  kick: {
    goal: { nl: "Je doel", en: "Your goal" },
    challenge: { nl: "Waar je staat", en: "Where you are" },
    solution: { nl: "Onze tip", en: "Our advice" },
    spec: { nl: "Even inzoomen", en: "Zooming in" },
    timing: { nl: "Planning en budget", en: "Timing and budget" },
    contact: { nl: "Bijna klaar", en: "Almost done" },
  },
  goalQ: { nl: "Wat wil je bereiken?", en: "What do you want to achieve?" },
  goalSub: {
    nl: "Een paar klikken, dan weten we waar je staat en denken we gericht mee. Geen verplichtingen.",
    en: "A few clicks and we'll know where you stand, so we can think along properly. No strings attached.",
  },
  chQ: { nl: "Wat speelt er nu?", en: "What's going on right now?" },
  chSub: { nl: "Kies wat het meest herkenbaar is.", en: "Pick the one that sounds most familiar." },
  otherQ: { nl: "Vertel kort waar je mee zit", en: "Tell us briefly what's on your mind" },
  otherSub: { nl: "Een paar zinnen is genoeg. Wij denken mee.", en: "A few sentences will do. We'll think along." },
  otherPh: {
    nl: "Bijvoorbeeld: we willen een ledenomgeving voor onze vereniging, maar weten niet waar te beginnen.",
    en: "For example: we'd like a members' area for our association but don't know where to start.",
  },
  solQ: { nl: "Hier zouden wij mee beginnen", en: "This is where we'd start" },
  solQOther: { nl: "Welke diensten spreken je aan?", en: "Which services appeal to you?" },
  solSub: {
    nl: "Op basis van je antwoorden. Kies er één of meer, maximaal drie.",
    en: "Based on your answers. Pick one or more, up to three.",
  },
  best: { nl: "Beste match", en: "Best match" },
  more: { nl: "Of kies zelf", en: "Or pick your own" },
  max3: { nl: "Maximaal drie. De rest bespreken we graag in het gesprek.", en: "Three max. We're happy to discuss the rest in person." },
  unsure: { nl: "Weet ik nog niet, denk met me mee", en: "Not sure yet, help me decide" },
  unsureD: { nl: "Prima. Dan kijken we samen wat het slimst is.", en: "Fine. We'll figure out the smartest route together." },
  specQ: { nl: "Even inzoomen op {s}", en: "Zooming in on {s}" },
  specSub: { nl: "Een paar snelle keuzes. Twijfel je? Sla gerust over.", en: "A few quick choices. Not sure? Feel free to skip." },
  multi: { nl: "meerdere mogelijk", en: "pick any" },
  timeQ: { nl: "Wanneer en waarvoor ongeveer?", en: "When, and roughly for what budget?" },
  timeSub: {
    nl: "Geen prijsafspraak. Het helpt ons alleen om passend te adviseren.",
    en: "No price commitment. It just helps us give fitting advice.",
  },
  timing: { nl: "Wanneer wil je starten?", en: "When would you like to start?" },
  budget: { nl: "Welk budget heb je ongeveer in gedachten?", en: "What budget do you roughly have in mind?" },
  note: { nl: "Nog iets wat we moeten weten?", en: "Anything else we should know?" },
  contactQ: { nl: "Hoe wil je verder?", en: "How would you like to continue?" },
  contactSub: {
    nl: "Laat je gegevens achter, dan nemen we binnen één werkdag contact met je op. Of regel het direct.",
    en: "Leave your details and we'll get back to you within one business day. Or sort it out right away.",
  },
  name: { nl: "Naam", en: "Name" },
  company: { nl: "Bedrijfsnaam", en: "Company name" },
  role: { nl: "Je rol", en: "Your role" },
  rolePh: { nl: "Bijv. eigenaar, marketing", en: "E.g. owner, marketing" },
  email: { nl: "E-mailadres", en: "Email address" },
  phone: { nl: "Telefoon", en: "Phone" },
  submit: { nl: "Verstuur intake", en: "Send intake" },
  sending: { nl: "Versturen…", en: "Sending…" },
  direct: { nl: "Liever direct?", en: "Rather go direct?" },
  team: { nl: "Je intake komt direct bij ons team terecht.", en: "Your intake goes straight to our team." },
  wa: { nl: "WhatsApp {name}", en: "WhatsApp {name}" },
  waD: { nl: "Met je keuzes al ingevuld", en: "With your choices filled in" },
  call: { nl: "Bel {name}", en: "Call {name}" },
  mail: { nl: "Mail ons", en: "Email us" },
  cb: { nl: "Bel me terug", en: "Call me back" },
  cbD: { nl: "Laat je nummer achter", en: "Leave your number" },
  cbQ: { nl: "We bellen je terug", en: "We'll call you back" },
  cbSub: {
    nl: "Laat je naam en nummer achter. Dan bellen we je op een moment dat jou uitkomt.",
    en: "Leave your name and number and we'll call you at a time that suits you.",
  },
  cbMoment: { nl: "Wanneer schikt het?", en: "When suits you?" },
  cbSubmit: { nl: "Vraag terugbelverzoek aan", en: "Request a call back" },
  cbBack: { nl: "Toch liever het formulier", en: "Back to the form" },
  privacy: { nl: "We gebruiken je gegevens alleen om contact met je op te nemen.", en: "We only use your details to get in touch with you." },
  doneQ: { nl: "Top, je intake is binnen!", en: "Great, we've got your intake!" },
  doneCbQ: { nl: "Genoteerd, we bellen je terug!", en: "Noted, we'll call you back!" },
  doneSub: {
    nl: "We kijken ernaar en nemen binnen één werkdag contact met je op. Tot snel.",
    en: "We'll take a look and get back to you within one business day. Talk soon.",
  },
  doneCbSub: {
    nl: "We bellen je zo snel mogelijk terug op {phone}{moment}.",
    en: "We'll call you back as soon as we can on {phone}{moment}.",
  },
  doneClose: { nl: "Sluiten", en: "Close" },
  doneCatalog: { nl: "Bekijk de catalogus", en: "Browse the catalogue" },
  failQ: { nl: "Automatisch versturen lukte nu niet", en: "We couldn't send it automatically" },
  failSub: {
    nl: "Geen zorgen, je antwoorden staan klaar. Stuur ze met één klik naar {email}.",
    en: "No worries, your answers are ready. Send them to {email} in one click.",
  },
  failMail: { nl: "Mail je intake", en: "Email your intake" },
  retry: { nl: "Opnieuw proberen", en: "Try again" },
  sum: {
    goal: { nl: "Doel", en: "Goal" },
    challenge: { nl: "Situatie", en: "Situation" },
    services: { nl: "Diensten", en: "Services" },
    timing: { nl: "Planning", en: "Timing" },
    budget: { nl: "Budget", en: "Budget" },
    note: { nl: "Toelichting", en: "Note" },
    unsure: { nl: "Nog open, graag advies", en: "Open, advice welcome" },
  },
  err: {
    required: { nl: "Dit veld hebben we nodig.", en: "We need this one." },
    email: { nl: "Dit e-mailadres lijkt niet te kloppen.", en: "This email address doesn't look right." },
    phone: { nl: "Dit telefoonnummer lijkt niet te kloppen.", en: "This phone number doesn't look right." },
    phoneReq: { nl: "Zonder nummer kunnen we lastig bellen.", en: "We can't call without a number." },
    choose: { nl: "Kies er minstens één, of laat ons meedenken.", en: "Pick at least one, or let us help you decide." },
    short: { nl: "Vertel iets meer, dan kunnen we gericht meedenken.", en: "Tell us a little more so we can think along." },
  },
};

const fill = (s: string, vars: Record<string, string>) => s.replace(/\{(\w+)\}/g, (_, k) => vars[k] ?? "");

/* ------------------------------------------------------------ state */
interface Answers {
  goal: GoalId | "";
  challenge: string;
  otherText: string;
  services: ServiceSlug[];
  unsure: boolean;
  specs: Record<string, string[]>;
  timing: string;
  budget: string;
  note: string;
  name: string;
  company: string;
  role: string;
  email: string;
  phone: string;
  moment: string;
}
const EMPTY: Answers = {
  goal: "",
  challenge: "",
  otherText: "",
  services: [],
  unsure: false,
  specs: {},
  timing: "",
  budget: "",
  note: "",
  name: "",
  company: "",
  role: "",
  email: "",
  phone: "",
  moment: "",
};
type StepId = "goal" | "challenge" | "solution" | `spec:${ServiceSlug}` | "timing" | "contact";
const DRAFT_KEY = "m7-intake-draft";
type ErrKey = keyof typeof C.err;

/* ============================================================ */
export interface IntakeModalProps {
  services: IntakeService[];
  email: string;
  phone: string;
  whatsapp: string;
  /** Voor "WhatsApp Martijn Roefs" / "Bel Martijn". */
  contactName: { full: string; first: string };
  privacyHref: string;
  /** Link naar de configurator in de succes-stap (weglaten op /letsgo zelf). */
  catalogHref?: string;
  /** Echte gezichten van het team (avatar-rij bij de contactstap en de bevestiging). */
  team?: { name: string; photo?: string }[];
  /** Totaal aantal mensen in het team (voor "+N"). */
  teamSize?: number;
}

export function IntakeModal({
  services,
  email,
  phone,
  whatsapp,
  contactName,
  privacyHref,
  catalogHref,
  team = [],
  teamSize = 0,
  initialOpen,
}: IntakeModalProps & { initialOpen?: boolean }) {
  const locale = useLocale();
  const L = (v: T) => tr(v, locale);
  const { open, close } = useOverlayHost("intake", initialOpen);

  const [a, setA] = useState<Answers>(EMPTY);
  const [stepId, setStepId] = useState<StepId>("goal");
  const [dir, setDir] = useState<1 | -1>(1);
  const [mode, setMode] = useState<"form" | "callback">("form");
  const [errors, setErrors] = useState<Partial<Record<string, ErrKey>>>({});
  const [status, setStatus] = useState<"idle" | "busy" | "done" | "error">("idle");
  const [maxNote, setMaxNote] = useState(false);
  const restored = useRef(false);
  const headRef = useRef<HTMLHeadingElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const hpRef = useRef<HTMLInputElement>(null);
  const advanceT = useRef<number>();

  const byslug = useMemo(() => Object.fromEntries(services.map((s) => [s.slug, s])) as Record<ServiceSlug, IntakeService>, [services]);
  const tel = phone.replace(/[^\d+]/g, "");
  const wa = whatsapp.replace(/[^\d]/g, "");

  /* ---------- stappen (conditioneel) */
  const steps = useMemo<StepId[]>(
    () => [
      "goal",
      "challenge",
      "solution",
      ...(a.unsure ? [] : a.services.slice(0, 3).map((s) => `spec:${s}` as StepId)),
      "timing",
      "contact",
    ],
    [a.unsure, a.services],
  );
  const idx = Math.max(0, steps.indexOf(stepId));
  const current: StepId = steps[idx];

  /* ---------- concept herstellen / autosave */
  useEffect(() => {
    if (!open || restored.current) return;
    restored.current = true;
    const d = loadDraft<{ a: Answers; step: StepId; mode?: "form" | "callback" }>(DRAFT_KEY);
    if (d?.a) {
      setA({ ...EMPTY, ...d.a });
      if (d.step) setStepId(d.step);
      if (d.mode) setMode(d.mode);
    }
  }, [open]);
  useEffect(() => {
    if (!restored.current || status === "done") return;
    saveDraft(DRAFT_KEY, { a, step: current, mode });
  }, [a, current, mode, status]);

  // Focus naar de vraag bij elke stapwissel
  const firstFocus = useRef(true);
  useEffect(() => {
    if (firstFocus.current) {
      firstFocus.current = false;
      return;
    }
    if (open) headRef.current?.focus({ preventScroll: true });
    stageRef.current?.scrollTo({ top: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, status, mode]);

  useEffect(() => () => window.clearTimeout(advanceT.current), []);

  /* ---------- helpers */
  const set = <K extends keyof Answers>(k: K, v: Answers[K]) => {
    setA((cur) => ({ ...cur, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }));
  };
  const goTo = (s: StepId, d: 1 | -1) => {
    window.clearTimeout(advanceT.current);
    setDir(d);
    setErrors({});
    setStepId(s);
  };
  const autoAdvance = (from: StepId, nextSteps?: StepId[]) => {
    window.clearTimeout(advanceT.current);
    advanceT.current = window.setTimeout(() => {
      const list = nextSteps ?? steps;
      const i = list.indexOf(from);
      if (i >= 0 && list[i + 1]) goTo(list[i + 1], 1);
    }, 300);
  };

  const challenges = a.goal && a.goal !== "other" ? CHALLENGES[a.goal] : [];
  const recs = recommend(a.goal, a.challenge);
  const others = services.filter((s) => !recs.includes(s.slug));

  const pickGoal = (g: GoalId) => {
    if (g !== a.goal) setA((cur) => ({ ...cur, goal: g, challenge: "", services: [], unsure: false }));
    autoAdvance("goal");
  };
  const pickChallenge = (id: string) => {
    const r = recommend(a.goal, id);
    if (id !== a.challenge) setA((cur) => ({ ...cur, challenge: id, services: r.slice(0, 1), unsure: false }));
    autoAdvance("challenge", ["goal", "challenge", "solution"]);
  };
  const toggleService = (slug: ServiceSlug) => {
    setErrors({});
    setA((cur) => {
      if (cur.services.includes(slug)) return { ...cur, services: cur.services.filter((s) => s !== slug), unsure: false };
      if (cur.services.length >= 3) {
        setMaxNote(true);
        return cur;
      }
      setMaxNote(false);
      return { ...cur, services: [...cur.services, slug], unsure: false };
    });
  };
  const toggleSpec = (key: string, opt: string, multi?: boolean) =>
    setA((cur) => {
      const now = cur.specs[key] ?? [];
      const nextVals = multi ? (now.includes(opt) ? now.filter((x) => x !== opt) : [...now, opt]) : now[0] === opt ? [] : [opt];
      return { ...cur, specs: { ...cur.specs, [key]: nextVals } };
    });

  /* ---------- validatie */
  const validate = (): Partial<Record<string, ErrKey>> => {
    const e: Partial<Record<string, ErrKey>> = {};
    if (current === "goal" && !a.goal) e.goal = "choose";
    if (current === "challenge") {
      if (a.goal === "other" && a.otherText.trim().length < 5) e.otherText = "short";
      if (a.goal !== "other" && !a.challenge) e.challenge = "choose";
    }
    if (current === "solution" && !a.services.length && !a.unsure) e.services = "choose";
    if (current === "contact") {
      if (mode === "form") {
        if (!a.name.trim()) e.name = "required";
        if (!a.company.trim()) e.company = "required";
        if (!EMAIL_RE.test(a.email.trim())) e.email = a.email.trim() ? "email" : "required";
        if (!isValidPhone(a.phone)) e.phone = "phone";
      } else {
        if (!a.name.trim()) e.name = "required";
        if (!a.phone.trim()) e.phone = "phoneReq";
        else if (!isValidPhone(a.phone)) e.phone = "phone";
      }
    }
    return e;
  };
  const focusError = () =>
    window.setTimeout(() => {
      document.querySelector<HTMLElement>(".itk [aria-invalid='true'], .itk .is-invalid button")?.focus();
    }, 30);

  const next = () => {
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      focusError();
      return;
    }
    if (current === "contact") {
      submit();
      return;
    }
    if (steps[idx + 1]) goTo(steps[idx + 1], 1);
  };
  const back = () => {
    if (current === "contact" && mode === "callback") {
      setMode("form");
      return;
    }
    if (idx > 0) goTo(steps[idx - 1], -1);
  };

  const errMsg = (k: string) => (errors[k] ? L(C.err[errors[k]!]) : undefined);

  /* ---------- samenvatting */
  const goalObj = GOALS.find((g) => g.id === a.goal);
  const challengeObj = challenges.find((c) => c.id === a.challenge);
  const chosen = a.services.map((s) => byslug[s]).filter(Boolean);
  const timingObj = TIMING.find((x) => x.id === a.timing);
  const budgetObj = BUDGET.find((x) => x.id === a.budget);
  const momentObj = MOMENTS.find((x) => x.id === a.moment);

  const specLines = (slug: ServiceSlug) =>
    SPECIFICS[slug]
      .map((q) => {
        const vals = (a.specs[`${slug}.${q.id}`] ?? []).map((id) => q.options.find((o) => o.id === id)).filter(Boolean);
        return vals.length ? `${L(q.q)} ${vals.map((o) => L(o!.t)).join(", ")}` : "";
      })
      .filter(Boolean);

  const summaryText = (() => {
    const lines: string[] = [];
    if (goalObj) lines.push(`${L(C.sum.goal)}: ${L(goalObj.t)}`);
    if (a.goal === "other" && a.otherText.trim()) lines.push(`${L(C.sum.challenge)}: ${a.otherText.trim()}`);
    else if (challengeObj) lines.push(`${L(C.sum.challenge)}: ${L(challengeObj.t)}`);
    if (a.unsure) lines.push(`${L(C.sum.services)}: ${L(C.sum.unsure)}`);
    else if (chosen.length) {
      lines.push(`${L(C.sum.services)}: ${chosen.map((s) => L(s.title)).join(", ")}`);
      chosen.forEach((s) => {
        const sl = specLines(s.slug);
        if (sl.length) lines.push(`- ${L(s.short)}: ${sl.join(" · ")}`);
      });
    }
    if (timingObj) lines.push(`${L(C.sum.timing)}: ${L(timingObj.t)}`);
    if (budgetObj) lines.push(`${L(C.sum.budget)}: ${L(budgetObj.t)}`);
    if (a.note.trim()) lines.push(`${L(C.sum.note)}: ${a.note.trim().slice(0, 1200)}`);
    return lines.join("\n");
  })();

  const contactLines = [a.name, a.role && a.company ? `${a.role}, ${a.company}` : a.company || a.role, a.email, a.phone]
    .filter((x) => x && x.trim())
    .join("\n");

  const mailto = `mailto:${email}?subject=${encodeURIComponent(
    `${locale === "nl" ? "Korte intake" : "Quick intake"}${a.company ? ` · ${a.company}` : a.name ? ` · ${a.name}` : ""}`,
  )}&body=${encodeURIComponent(
    `${locale === "nl" ? "Hoi M7,\n\nIk heb de korte intake ingevuld:" : "Hi M7,\n\nI filled in the quick intake:"}\n\n${summaryText}${
      contactLines ? `\n\n${contactLines}` : ""
    }`,
  )}`;
  const waHref = wa
    ? `https://wa.me/${wa}?text=${encodeURIComponent(
        `${locale === "nl" ? `Hoi ${contactName.first}! Ik heb net de korte intake gedaan op de M7-site.` : `Hi ${contactName.first}! I just did the quick intake on the M7 site.`}\n\n${summaryText}`,
      )}`
    : "";

  /* ---------- versturen */
  const submit = async () => {
    setStatus("busy");
    const callback = mode === "callback";
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "intake",
          callback,
          name: a.name.trim(),
          company: a.company.trim() || undefined,
          role: a.role.trim() || undefined,
          email: a.email.trim() || undefined,
          phone: a.phone.trim() || undefined,
          moment: callback && momentObj ? L(momentObj.t) : undefined,
          interest: a.unsure ? [] : a.services,
          message: `${callback ? (locale === "nl" ? "Terugbelverzoek na korte intake" : "Call-back request after quick intake") : locale === "nl" ? "Korte intake" : "Quick intake"}\n\n${summaryText}`,
          answers: {
            goal: a.goal,
            challenge: a.goal === "other" ? undefined : a.challenge,
            otherText: a.goal === "other" ? a.otherText.trim() : undefined,
            services: a.unsure ? [] : a.services,
            unsure: a.unsure,
            specs: a.specs,
            timing: a.timing || undefined,
            budget: a.budget || undefined,
            note: a.note.trim() || undefined,
          },
          website: hpRef.current?.value || "",
          locale,
          page: window.location.href,
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("done");
      clearDraft(DRAFT_KEY);
      const g = (window as unknown as { gtag?: (...x: unknown[]) => void }).gtag;
      g?.("event", "generate_lead", { form: callback ? "intake_callback" : "intake" });
    } catch {
      setStatus("error");
    }
  };

  const restart = () => {
    clearDraft(DRAFT_KEY);
    setA((cur) => ({ ...EMPTY, name: cur.name, company: cur.company, role: cur.role, email: cur.email, phone: cur.phone }));
    setMode("form");
    setStatus("idle");
    goTo("goal", -1);
  };

  const onClose = () => {
    close();
    window.clearTimeout(advanceT.current);
    if (status === "done") {
      window.setTimeout(() => {
        setA(EMPTY);
        setMode("form");
        setStatus("idle");
        setStepId("goal");
      }, 520);
    }
  };

  /* ---------- toetsenbord: 1–9 kiest, Enter gaat verder */
  const onKeyDown = (e: React.KeyboardEvent) => {
    if (status === "done" || e.metaKey || e.ctrlKey || e.altKey) return;
    const el = e.target as HTMLElement;
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(el.tagName);
    if (typing) return;
    if (e.key === "Enter" && el.tagName !== "BUTTON" && el.tagName !== "A") {
      e.preventDefault();
      next();
      return;
    }
    if (/^[1-9]$/.test(e.key)) {
      const n = Number(e.key) - 1;
      if (current === "goal" && GOALS[n]) {
        e.preventDefault();
        pickGoal(GOALS[n].id);
      } else if (current === "challenge" && challenges[n]) {
        e.preventDefault();
        pickChallenge(challenges[n].id);
      }
    }
  };

  // Vóór de dienstkeuze rekenen we alvast één verdiepingsstap mee, zodat het totaal niet verspringt
  const total = steps.length + (idx < 2 && !a.unsure && a.services.length === 0 && a.goal !== "other" ? 1 : 0);
  const pct = status === "done" ? 1 : (idx + (current === "contact" && status === "busy" ? 1 : 0.5)) / total;
  const shortcutKeys = current === "goal" ? `1–${GOALS.length}` : current === "challenge" && challenges.length ? `1–${challenges.length}` : "";

  /* ---------- render per stap */
  const kicker = (k: keyof typeof C.kick, accent?: string) => (
    <p className="itk__kicker" style={accent ? ({ ["--acc" as string]: accent } as React.CSSProperties) : undefined}>
      <span className="itk__kicker-n">{String(idx + 1).padStart(2, "0")}</span>
      {L(C.kick[k])}
    </p>
  );

  const teamRow = team.length ? (
    <p className="itk__team">
      <Avatars people={team} size={34} more={Math.max(0, teamSize - team.length)} ring="#0c0c0f" />
      <span>{L(C.team)}</span>
    </p>
  ) : null;

  let body: React.ReactNode = null;

  if (status === "done") {
    const cb = mode === "callback";
    body = (
      <div className="itk__done">
        <span className="ov-donemark ov-donemark--lg" aria-hidden="true">
          <svg viewBox="0 0 52 52">
            <circle cx="26" cy="26" r="24" />
            <path d="M15 27l7 7 15-16" />
          </svg>
        </span>
        <h2 className="itk__q" tabIndex={-1} ref={headRef}>
          {cb ? L(C.doneCbQ) : L(C.doneQ)}
        </h2>
        <p className="itk__sub">
          {cb
            ? fill(L(C.doneCbSub), {
                phone: a.phone,
                moment: momentObj && a.moment !== "any" ? ` (${L(momentObj.t).toLowerCase()})` : "",
              })
            : L(C.doneSub)}
        </p>
        {teamRow}
        <div className="itk__recap">
          {goalObj ? (
            <div>
              <span>{L(C.sum.goal)}</span>
              <strong>{L(goalObj.t)}</strong>
            </div>
          ) : null}
          <div>
            <span>{L(C.sum.services)}</span>
            <strong className="itk__recap-svcs">
              {a.unsure
                ? L(C.sum.unsure)
                : chosen.map((s) => (
                    <span key={s.slug} className="itk__svc-pill" style={{ ["--acc" as string]: s.color } as React.CSSProperties}>
                      <Icon name={s.icon} size={15} /> {L(s.short)}
                    </span>
                  ))}
            </strong>
          </div>
          {timingObj || budgetObj ? (
            <div>
              <span>
                {L(C.sum.timing)} · {L(C.sum.budget)}
              </span>
              <strong>{[timingObj && L(timingObj.t), budgetObj && L(budgetObj.t)].filter(Boolean).join(" · ")}</strong>
            </div>
          ) : null}
        </div>
        <div className="itk__done-cta">
          <button type="button" className="ov-btn ov-btn--primary" onClick={onClose}>
            {L(C.doneClose)}
          </button>
          {catalogHref ? (
            <a className="ov-btn ov-btn--ghost" href={catalogHref}>
              {L(C.doneCatalog)} <Icon name="arrowUpRight" size={16} stroke={2} />
            </a>
          ) : null}
        </div>
      </div>
    );
  } else if (current === "goal") {
    body = (
      <>
        {kicker("goal")}
        <h2 className="itk__q" tabIndex={-1} ref={headRef}>
          {L(C.goalQ)}
        </h2>
        <p className="itk__sub">{L(C.goalSub)}</p>
        <div className={`itk__grid itk__grid--goals${errors.goal ? " is-invalid" : ""}`} role="group" aria-label={L(C.goalQ)}>
          {GOALS.map((g, i) => (
            <ChoiceCard
              key={g.id}
              layout="tile"
              selected={a.goal === g.id}
              onSelect={() => pickGoal(g.id)}
              icon={<Icon name={g.icon} size={24} />}
              title={L(g.t)}
              desc={L(g.d)}
              shortcut={i + 1}
              autoFocus={a.goal ? a.goal === g.id : i === 0}
            />
          ))}
        </div>
        {errors.goal ? <p className="ov-field__err">{errMsg("goal")}</p> : null}
      </>
    );
  } else if (current === "challenge") {
    body =
      a.goal === "other" ? (
        <>
          {kicker("challenge")}
          <h2 className="itk__q" tabIndex={-1} ref={headRef}>
            {L(C.otherQ)}
          </h2>
          <p className="itk__sub">{L(C.otherSub)}</p>
          <Field id="itk-other" label={L(C.otherQ)} error={errMsg("otherText")} className="itk__wide">
            <textarea
              {...aria("itk-other", errMsg("otherText"))}
              rows={5}
              value={a.otherText}
              placeholder={L(C.otherPh)}
              onChange={(e) => set("otherText", e.target.value)}
              maxLength={2000}
              data-autofocus=""
            />
          </Field>
        </>
      ) : (
        <>
          {kicker("challenge")}
          <h2 className="itk__q" tabIndex={-1} ref={headRef}>
            {L(C.chQ)}
          </h2>
          <p className="itk__sub">
            {goalObj ? (
              <span className="itk__echo">
                <Icon name={goalObj.icon} size={15} /> {L(goalObj.t)}
              </span>
            ) : null}{" "}
            {L(C.chSub)}
          </p>
          <div className={`itk__grid itk__grid--list${errors.challenge ? " is-invalid" : ""}`} role="group" aria-label={L(C.chQ)}>
            {challenges.map((c, i) => (
              <ChoiceCard key={c.id} selected={a.challenge === c.id} onSelect={() => pickChallenge(c.id)} title={L(c.t)} shortcut={i + 1} />
            ))}
          </div>
          {errors.challenge ? <p className="ov-field__err">{errMsg("challenge")}</p> : null}
        </>
      );
  } else if (current === "solution") {
    const recCards = recs.map((slug) => byslug[slug]).filter(Boolean);
    const pool = a.goal === "other" || !recCards.length ? services : others;
    body = (
      <>
        {kicker("solution")}
        <h2 className="itk__q" tabIndex={-1} ref={headRef}>
          {recCards.length ? L(C.solQ) : L(C.solQOther)}
        </h2>
        <p className="itk__sub">{L(C.solSub)}</p>
        {recCards.length ? (
          <div className={`itk__grid itk__grid--svc${errors.services ? " is-invalid" : ""}`} role="group" aria-label={L(C.solQ)}>
            {recCards.map((s, i) => (
              <ChoiceCard
                key={s.slug}
                layout="tile"
                className="itk__svc"
                selected={a.services.includes(s.slug)}
                onSelect={() => toggleService(s.slug)}
                icon={<Icon name={s.icon} size={24} />}
                title={L(s.title)}
                desc={L(SERVICE_PITCH[s.slug])}
                accent={s.color}
                badge={i === 0 ? L(C.best) : undefined}
                autoFocus={i === 0}
              />
            ))}
          </div>
        ) : null}
        <div className={`itk__more${errors.services && !recCards.length ? " is-invalid" : ""}`}>
          {recCards.length ? <p className="itk__label">{L(C.more)}</p> : null}
          <div className="ov-chips" role="group" aria-label={L(C.more)}>
            {pool.map((s) => (
              <ChoiceChip
                key={s.slug}
                selected={a.services.includes(s.slug)}
                onSelect={() => toggleService(s.slug)}
                accent={s.color}
                icon={<Icon name={s.icon} size={14} />}
              >
                {L(s.short)}
              </ChoiceChip>
            ))}
          </div>
        </div>
        {maxNote ? <p className="itk__note">{L(C.max3)}</p> : null}
        <ChoiceCard
          className="itk__unsure"
          selected={a.unsure}
          onSelect={() => {
            setErrors({});
            setMaxNote(false);
            setA((cur) => ({ ...cur, unsure: !cur.unsure, services: !cur.unsure ? [] : cur.services }));
          }}
          icon={<Icon name="users" size={22} />}
          title={L(C.unsure)}
          desc={L(C.unsureD)}
        />
        {errors.services ? <p className="ov-field__err">{errMsg("services")}</p> : null}
      </>
    );
  } else if (current.startsWith("spec:")) {
    const slug = current.slice(5) as ServiceSlug;
    const s = byslug[slug];
    body = s ? (
      <>
        <p className="itk__kicker itk__kicker--svc" style={{ ["--acc" as string]: s.color } as React.CSSProperties}>
          <span className="itk__kicker-n">{String(idx + 1).padStart(2, "0")}</span>
          <span className="itk__kicker-svc">
            <Icon name={s.icon} size={15} /> {L(s.title)}
          </span>
        </p>
        <h2 className="itk__q" tabIndex={-1} ref={headRef}>
          {fill(L(C.specQ), { s: L(s.short) })}
        </h2>
        <p className="itk__sub">{L(C.specSub)}</p>
        <div className="itk__qs" style={{ ["--acc" as string]: s.color } as React.CSSProperties}>
          {SPECIFICS[slug].map((q) => {
            const key = `${slug}.${q.id}`;
            const vals = a.specs[key] ?? [];
            return (
              <div key={q.id} className="itk__qgroup" role="group" aria-labelledby={`itk-q-${key}`}>
                <p className="itk__label" id={`itk-q-${key}`}>
                  {L(q.q)} {q.multi ? <span className="itk__label-hint">{L(C.multi)}</span> : null}
                </p>
                <div className={`ov-chips${q.multi ? "" : " ov-chips--seg"}`}>
                  {q.options.map((o) => (
                    <ChoiceChip
                      key={o.id}
                      selected={vals.includes(o.id)}
                      onSelect={() => toggleSpec(key, o.id, q.multi)}
                      accent={s.color}
                      radio={!q.multi}
                    >
                      {L(o.t)}
                    </ChoiceChip>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </>
    ) : null;
  } else if (current === "timing") {
    body = (
      <>
        {kicker("timing")}
        <h2 className="itk__q" tabIndex={-1} ref={headRef}>
          {L(C.timeQ)}
        </h2>
        <p className="itk__sub">{L(C.timeSub)}</p>
        <div className="itk__qs">
          <div className="itk__qgroup" role="group" aria-labelledby="itk-timing">
            <p className="itk__label" id="itk-timing">
              <Icon name="calendar" size={16} /> {L(C.timing)}
            </p>
            <div className="ov-chips ov-chips--seg">
              {TIMING.map((o) => (
                <ChoiceChip key={o.id} selected={a.timing === o.id} onSelect={() => set("timing", a.timing === o.id ? "" : o.id)} radio>
                  {L(o.t)}
                </ChoiceChip>
              ))}
            </div>
          </div>
          <div className="itk__qgroup" role="group" aria-labelledby="itk-budget">
            <p className="itk__label" id="itk-budget">
              <Icon name="coin" size={16} /> {L(C.budget)}
            </p>
            <div className="ov-chips ov-chips--seg">
              {BUDGET.map((o) => (
                <ChoiceChip key={o.id} selected={a.budget === o.id} onSelect={() => set("budget", a.budget === o.id ? "" : o.id)} radio>
                  {L(o.t)}
                </ChoiceChip>
              ))}
            </div>
          </div>
          <Field id="itk-note" label={L(C.note)} optional={L(C.optional)}>
            <textarea id="itk-note" rows={3} value={a.note} onChange={(e) => set("note", e.target.value)} maxLength={2000} />
          </Field>
        </div>
      </>
    );
  } else if (current === "contact") {
    const quick = (
      <aside className="itk__quick" aria-label={L(C.direct)}>
        {teamRow}
        <p className="itk__label">{L(C.direct)}</p>
        {wa ? (
          <a className="itk__qa itk__qa--wa" href={waHref} target="_blank" rel="noopener">
            <span className="itk__qa-i">
              <SocialIcon name="whatsapp" size={20} />
            </span>
            <span>
              <strong>{fill(L(C.wa), { name: contactName.full })}</strong>
              <small>{L(C.waD)}</small>
            </span>
            <Icon name="arrowUpRight" size={16} stroke={2} />
          </a>
        ) : null}
        {tel ? (
          <a className="itk__qa" href={`tel:${tel}`}>
            <span className="itk__qa-i">
              <Icon name="phone" size={19} />
            </span>
            <span>
              <strong>{fill(L(C.call), { name: contactName.first })}</strong>
              <small>{phone}</small>
            </span>
            <Icon name="arrowUpRight" size={16} stroke={2} />
          </a>
        ) : null}
        <a className="itk__qa" href={mailto}>
          <span className="itk__qa-i">
            <Icon name="mail" size={19} />
          </span>
          <span>
            <strong>{L(C.mail)}</strong>
            <small>{email}</small>
          </span>
          <Icon name="arrowUpRight" size={16} stroke={2} />
        </a>
        {mode === "form" ? (
          <button type="button" className="itk__qa" onClick={() => (setErrors({}), setMode("callback"))}>
            <span className="itk__qa-i">
              <Icon name="clock" size={19} />
            </span>
            <span>
              <strong>{L(C.cb)}</strong>
              <small>{L(C.cbD)}</small>
            </span>
            <Icon name="arrowRight" size={16} stroke={2} />
          </button>
        ) : null}
      </aside>
    );

    const fail =
      status === "error" ? (
        <div className="itk__fail" role="alert">
          <p className="itk__fail-t">{L(C.failQ)}</p>
          <p>{fill(L(C.failSub), { email })}</p>
          <div className="itk__fail-cta">
            <a className="ov-btn ov-btn--primary" href={mailto}>
              <Icon name="mail" size={18} /> {L(C.failMail)}
            </a>
            {wa ? (
              <a className="ov-btn ov-btn--ghost" href={waHref} target="_blank" rel="noopener">
                <SocialIcon name="whatsapp" size={17} /> WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      ) : null;

    body = (
      <>
        {kicker("contact")}
        <h2 className="itk__q" tabIndex={-1} ref={headRef}>
          {mode === "callback" ? L(C.cbQ) : L(C.contactQ)}
        </h2>
        <p className="itk__sub">{mode === "callback" ? L(C.cbSub) : L(C.contactSub)}</p>
        <div className="itk__contact">
          <form
            className="itk__form"
            noValidate
            onSubmit={(e) => {
              e.preventDefault();
              next();
            }}
          >
            {fail}
            {mode === "form" ? (
              <div className="ov-grid2">
                <Field id="itk-name" label={L(C.name)} error={errMsg("name")}>
                  <input {...aria("itk-name", errMsg("name"))} autoComplete="name" value={a.name} onChange={(e) => set("name", e.target.value)} data-autofocus="" />
                </Field>
                <Field id="itk-company" label={L(C.company)} error={errMsg("company")}>
                  <input {...aria("itk-company", errMsg("company"))} autoComplete="organization" value={a.company} onChange={(e) => set("company", e.target.value)} />
                </Field>
                <Field id="itk-role" label={L(C.role)} optional={L(C.optional)}>
                  <input id="itk-role" autoComplete="organization-title" placeholder={L(C.rolePh)} value={a.role} onChange={(e) => set("role", e.target.value)} />
                </Field>
                <Field id="itk-email" label={L(C.email)} error={errMsg("email")}>
                  <input
                    {...aria("itk-email", errMsg("email"))}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    value={a.email}
                    onChange={(e) => set("email", e.target.value)}
                  />
                </Field>
                <Field id="itk-phone" label={L(C.phone)} optional={L(C.optional)} error={errMsg("phone")} className="ov-span2">
                  <input
                    {...aria("itk-phone", errMsg("phone"))}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={a.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                </Field>
              </div>
            ) : (
              <div className="ov-grid2">
                <Field id="itk-cb-name" label={L(C.name)} error={errMsg("name")}>
                  <input {...aria("itk-cb-name", errMsg("name"))} autoComplete="name" value={a.name} onChange={(e) => set("name", e.target.value)} data-autofocus="" />
                </Field>
                <Field id="itk-cb-phone" label={L(C.phone)} error={errMsg("phone")}>
                  <input
                    {...aria("itk-cb-phone", errMsg("phone"))}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    value={a.phone}
                    onChange={(e) => set("phone", e.target.value)}
                  />
                </Field>
                <div className="itk__qgroup ov-span2" role="group" aria-labelledby="itk-moment">
                  <p className="itk__label" id="itk-moment">
                    {L(C.cbMoment)}
                  </p>
                  <div className="ov-chips ov-chips--seg">
                    {MOMENTS.map((o) => (
                      <ChoiceChip key={o.id} selected={a.moment === o.id} onSelect={() => set("moment", a.moment === o.id ? "" : o.id)} radio>
                        {L(o.t)}
                      </ChoiceChip>
                    ))}
                  </div>
                </div>
              </div>
            )}
            <input ref={hpRef} type="text" name="website" tabIndex={-1} autoComplete="off" className="ov-hp" aria-hidden="true" />
            <div className="itk__form-foot">
              <button type="submit" className="ov-btn ov-btn--primary ov-btn--lg" disabled={status === "busy"}>
                {status === "busy" ? L(C.sending) : status === "error" ? L(C.retry) : mode === "callback" ? L(C.cbSubmit) : L(C.submit)}
                <span className="ov-btn__dot">
                  <Icon name={mode === "callback" ? "phone" : "send"} size={16} stroke={2} />
                </span>
              </button>
              {mode === "callback" ? (
                <button type="button" className="ov-link" onClick={() => (setErrors({}), setMode("form"))}>
                  {L(C.cbBack)}
                </button>
              ) : null}
            </div>
            <p className="itk__privacy">
              <Icon name="lock" size={14} />
              <span>
                {L(C.privacy)}{" "}
                <a href={privacyHref} target="_blank" rel="noopener">
                  {locale === "nl" ? "Privacybeleid" : "Privacy policy"}
                </a>
              </span>
            </p>
          </form>
          {quick}
        </div>
      </>
    );
  }

  return (
    <OverlayShell
      open={open}
      onClose={onClose}
      labelledBy="itk-label"
      variant="full"
      backdrop={
        <div className="itk__bg" aria-hidden="true">
          <Aurora palette="violet" intensity={0.75} fallback="/media/bg/ai-waves.webp" />
        </div>
      }
    >
      <div className="itk" onKeyDown={onKeyDown}>
        <header className="itk__top">
          <p className="itk__brand" id="itk-label">
            <img src="/brand/m7-badge.svg" alt="" width={28} height={28} />
            <span>{L(C.label)}</span>
          </p>
          <div className="itk__prog">
            <span className="itk__count" aria-hidden={status === "done"}>
              {status === "done" ? <Check size={13} /> : `${idx + 1} / ${total}`}
            </span>
            <div
              className="ov-progress ov-progress--lg"
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={total}
              aria-valuenow={status === "done" ? total : idx + 1}
              aria-label={L(C.label)}
            >
              <span style={{ transform: `scaleX(${pct})` }} />
            </div>
          </div>
          <div className="itk__top-r">
            {idx > 0 && status !== "done" ? (
              <button type="button" className="ov-link itk__restart" onClick={restart}>
                {L(C.restart)}
              </button>
            ) : null}
            <button type="button" className="ov-close" onClick={onClose} aria-label={L(C.close)}>
              <Icon name="close" size={20} stroke={2} />
            </button>
          </div>
        </header>

        <div className="itk__stage" ref={stageRef}>
          <div className="itk__step" key={status === "done" ? "done" : `${current}-${mode}`} data-dir={dir}>
            {body}
          </div>
        </div>

        {status !== "done" ? (
          <footer className="itk__foot">
            {idx > 0 || mode === "callback" ? (
              <button type="button" className="ov-btn ov-btn--ghost" onClick={back}>
                <Icon name="arrowLeft" size={18} stroke={2} /> {L(C.back)}
              </button>
            ) : (
              <span />
            )}
            {shortcutKeys ? <span className="itk__hint">{fill(L(C.hint), { keys: shortcutKeys })}</span> : <span />}
            {current !== "contact" ? (
              <button type="button" className="ov-btn ov-btn--primary" onClick={next}>
                {current.startsWith("spec:") || current === "timing"
                  ? hasSpecAnswer(current, a)
                    ? L(C.next)
                    : L(C.skip)
                  : L(C.next)}
                <span className="ov-btn__dot">
                  <Icon name="arrowRight" size={17} stroke={2.2} />
                </span>
              </button>
            ) : (
              <span />
            )}
          </footer>
        ) : null}
      </div>
    </OverlayShell>
  );
}

function hasSpecAnswer(step: StepId, a: Answers) {
  if (step === "timing") return Boolean(a.timing || a.budget || a.note.trim());
  const slug = step.slice(5);
  return Object.entries(a.specs).some(([k, v]) => k.startsWith(`${slug}.`) && v.length > 0);
}
