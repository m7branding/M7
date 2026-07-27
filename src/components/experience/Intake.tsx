"use client";

// ============================================================
// M7 — Intake. Een cinematische, multi-step vragenflow met cleane
// pictogrammen per keuze. Eerst waar sta je / wat wil je bereiken,
// daarna een set voorwaardelijke vervolgvragen om de behoefte scherp
// te krijgen. Sluit af met een geanimeerde "denk"-loader. Antwoorden
// bepalen mee welke categorieën in het pad komen.
// ============================================================

import { useEffect, useMemo, useRef, useState } from "react";
import { GOALS, STAGES, type IconKey } from "@/lib/catalog";
import { M7Logo } from "./Logo";

// ------------------------------------------------------------ pictogrammen
const ICONS: Record<string, React.ReactNode> = {
  // stages
  startup: <path d="M12 21c0-5 0-7 0-7m0 0c-3 0-5-2-5-5 3 0 5 2 5 5Zm0 0c0-3 2-5 5-5 0 3-2 5-5 5ZM8 21h8" />,
  existing: <><rect x="4" y="8" width="16" height="13" rx="1.5" /><path d="M9 21v-5h6v5M8 5l4-2 4 2M8 12h.01M12 12h.01M16 12h.01" /></>,
  rebrand: <path d="M20 11a8 8 0 0 0-14-4l-2 2m0-4v4h4M4 13a8 8 0 0 0 14 4l2-2m0 4v-4h-4" />,
  migrate: <path d="M4 8h13m0 0-3-3m3 3-3 3M20 16H7m0 0 3-3m-3 3 3 3" />,
  scale: <path d="M12 3c3 2.5 5 6 5 10a5 5 0 0 1-10 0c0-4 2-7.5 5-10ZM9.5 21h5M12 11v3" />,
  // goals / general
  star: <path d="M12 3l2.2 6.3L21 9.5l-5.4 4 2 6.5L12 16l-5.6 4 2-6.5-5.4-4 6.8-.2Z" />,
  browser: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 9h18M6.5 7h.01M9 7h.01" /></>,
  cart: <path d="M4 5h2l2 11h9l2-7H7M9 20h.01M17 20h.01" />,
  magnet: <path d="M6 4v7a6 6 0 0 0 12 0V4h-4v7a2 2 0 0 1-4 0V4Z" />,
  search: <><circle cx="11" cy="11" r="6" /><path d="M20 20l-4.5-4.5" /></>,
  target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></>,
  plug: <path d="M9 3v5m6-5v5M7 8h10v3a5 5 0 0 1-10 0V8ZM12 16v5" />,
  kanban: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M9 4v16M15 4v16M6 8h.01M12 8h.01M18 8h.01" /></>,
  dashboard: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></>,
  phone: <><rect x="7" y="2" width="10" height="20" rx="3" /><path d="M11 18h2" /></>,
  content: <path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6ZM18 15l.8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8Z" />,
  ai: <><rect x="7" y="7" width="10" height="10" rx="2" /><path d="M10 3v2M14 3v2M10 19v2M14 19v2M3 10h2M3 14h2M19 10h2M19 14h2M10.5 10.5h3v3h-3z" /></>,
  advice: <path d="M12 3a7 7 0 0 0-4 12.7V18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-2.3A7 7 0 0 0 12 3ZM9.5 22h5" />,
  gear: <path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm8 3.5-1.8.9.3 2-2 .6-1.2 1.6-1.9-.7-1.9.7-1.2-1.6-2-.6.3-2L4 12l1.8-.9-.3-2 2-.6L8.7 6l1.9.7L12.5 5l1.2 1.6 1.9-.7L16.8 8.5l2 .6-.3 2Z" />,
  // branch
  check: <path d="M4 12l5 5L20 6" />,
  cross: <path d="M6 6l12 12M18 6 6 18" />,
  question: <path d="M9 9a3 3 0 1 1 4 2.8c-.9.5-1 1-1 2.2M12 17h.01" />,
  logo: <path d="M12 3l7.5 4.3v9.4L12 21l-7.5-4.3V7.3Z" />,
  palette: <path d="M12 3a9 9 0 1 0 0 18c1.2 0 2-1 2-2s-.8-1.5-.8-2.3.7-1.7 1.8-1.7H17a4 4 0 0 0 4-4c0-4.4-4-8-9-8Zm-4 9a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />,
  book: <path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 1-3-3V4ZM5 17a3 3 0 0 1 3-3h11" />,
  globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" /></>,
  sitemap: <><rect x="9" y="3" width="6" height="4" rx="1" /><rect x="3" y="16" width="6" height="4" rx="1" /><rect x="15" y="16" width="6" height="4" rx="1" /><path d="M12 7v4M6 16v-2h12v2" /></>,
  blocks: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></>,
  cap: <path d="M12 4 2 9l10 5 10-5-10-5ZM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />,
  doc: <><rect x="5" y="3" width="14" height="18" rx="2" /><path d="M8 8h8M8 12h8M8 16h5" /></>,
  image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8.5" cy="9.5" r="1.5" /><path d="M4 18l5-5 4 4 3-3 4 4" /></>,
  layers: <path d="M12 3l9 5-9 5-9-5 9-5ZM3 13l9 5 9-5M3 17l9 5 9-5" />,
  translate: <path d="M4 5h8M8 3v2c0 4-2 8-5 10M6 9c0 3 3 5 6 6M13 20l4-9 4 9M14.5 17h5" />,
  cookie: <path d="M12 3a9 9 0 1 0 9 9 4 4 0 0 1-4-4 3 3 0 0 1-3-3 3 3 0 0 1-2-2ZM9 11h.01M14 14h.01M8 15h.01" />,
  chart: <path d="M4 20V5m0 15h16M8 16l4-5 3 2 5-7" />,
  socials: <path d="M18 8a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM6 15a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm12 6a3 3 0 1 0-3-3 3 3 0 0 0 3 3ZM8.6 13.5l6.8 3.5M15.4 6.5 8.6 10" />,
  hubspot: <><circle cx="9" cy="15" r="4" /><circle cx="17" cy="7" r="2" /><path d="M9 11V9M15.5 8l-4 4" /></>,
  pipeline: <path d="M3 7h6a3 3 0 0 1 3 3v4a3 3 0 0 0 3 3h6M18 4l3 3-3 3" />,
  none: <path d="M5 12h14" />,
};

function Ico({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {ICONS[name] ?? ICONS.question}
    </svg>
  );
}

// ------------------------------------------------------------ vraag-model
type Choice = { id: string; label: string; icon: string; hint?: string; add?: IconKey[] };
type Question = {
  id: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
  multi?: boolean;
  choices: Choice[];
  when?: (a: Answers) => boolean;
};
type Answers = Record<string, string[]>;

const stageIcon: Record<string, string> = {
  startup: "startup",
  existing: "existing",
  rebrand: "rebrand",
  migrate: "migrate",
  scale: "scale",
};
const goalIcon: Record<string, string> = {
  brand: "star",
  website: "browser",
  shop: "cart",
  leads: "magnet",
  findable: "search",
  ads: "target",
  integrations: "plug",
  crmsetup: "kanban",
  portal: "dashboard",
  app: "phone",
  content: "content",
  ai: "ai",
  advice: "advice",
  run: "gear",
};

const has = (a: Answers, q: string, v: string) => (a[q] ?? []).includes(v);
const hasGoal = (a: Answers, v: string) => has(a, "goals", v);

const QUESTIONS: Question[] = [
  {
    id: "stage",
    eyebrow: "Stap 1",
    title: "Waar sta je nu?",
    subtitle: "Zo weten we waar we starten.",
    choices: STAGES.map((s) => ({ id: s.id, label: s.label, icon: stageIcon[s.id] ?? "startup", hint: s.desc })),
  },
  {
    id: "goals",
    eyebrow: "Stap 2",
    title: "Wat wil je bereiken?",
    subtitle: "Kies alles wat van toepassing is — meerdere mag.",
    multi: true,
    choices: GOALS.map((g) => ({ id: g.id, label: g.label, icon: goalIcon[g.id] ?? "star" })),
  },
  {
    id: "brandStatus",
    eyebrow: "Branding",
    title: "Wat heb je al qua branding?",
    subtitle: "Zo weten we of we aanvullen of vanaf nul bouwen.",
    when: (a) => hasGoal(a, "brand") || has(a, "stage", "startup") || has(a, "stage", "rebrand"),
    choices: [
      { id: "none", label: "Nog niks", icon: "cross", hint: "Volledige branding bij M7", add: ["branding"] },
      { id: "logo", label: "Alleen een logo", icon: "logo", hint: "Uitbreiden naar een merk", add: ["branding"] },
      { id: "logocolors", label: "Logo + kleuren", icon: "palette", hint: "Naar complete richtlijnen", add: ["branding"] },
      { id: "guidelines", label: "Volledige guidelines", icon: "book", hint: "We werken hiermee door" },
    ],
  },
  {
    id: "domain",
    eyebrow: "Domein",
    title: "Heb je al een domeinnaam?",
    when: (a) => hasGoal(a, "website") || hasGoal(a, "shop") || hasGoal(a, "integrations"),
    choices: [
      { id: "have", label: "Ja, heb ik al", icon: "check" },
      { id: "register", label: "Nee, graag registreren", icon: "globe", hint: "Wij regelen domein + DNS", add: ["hosting"] },
      { id: "unsure", label: "Weet ik nog niet", icon: "question", add: ["hosting"] },
    ],
  },
  {
    id: "sitemap",
    eyebrow: "Structuur",
    title: "Heb je al een sitemap of contentstructuur?",
    subtitle: "Wij kunnen een SEO-slimme structuur (her)opzetten.",
    when: (a) => hasGoal(a, "website"),
    choices: [
      { id: "yes", label: "Ja, die ligt er", icon: "sitemap" },
      { id: "no", label: "Nee, nog niet", icon: "cross", hint: "Wij zetten 'm op", add: ["seo", "websites"] },
      { id: "help", label: "Graag jullie hulp", icon: "search", hint: "SEO-geoptimaliseerde structuur", add: ["seo", "websites"] },
    ],
  },
  {
    id: "cms",
    eyebrow: "CMS",
    title: "Wat zijn je wensen qua CMS?",
    subtitle: "Meerdere mag.",
    multi: true,
    when: (a) => hasGoal(a, "website"),
    choices: [
      { id: "self", label: "Zelf beheren", icon: "dashboard" },
      { id: "blocks", label: "Library met branded blokken", icon: "blocks", hint: "Zelf pagina's bouwen", add: ["websites"] },
      { id: "training", label: "Training gewenst", icon: "cap", add: ["support"] },
    ],
  },
  {
    id: "contentWho",
    eyebrow: "Content",
    title: "Wie maakt de content?",
    when: (a) => hasGoal(a, "website") || hasGoal(a, "content"),
    choices: [
      { id: "self", label: "Dat doen we zelf", icon: "check" },
      { id: "text", label: "Tekst door M7", icon: "doc", add: ["organic", "seo"] },
      { id: "image", label: "Beeld door M7", icon: "image", add: ["organic"] },
      { id: "both", label: "Tekst én beeld door M7", icon: "layers", add: ["organic", "seo"] },
    ],
  },
  {
    id: "multilang",
    eyebrow: "Talen",
    title: "Wordt de site meertalig?",
    when: (a) => hasGoal(a, "website"),
    choices: [
      { id: "yes", label: "Ja, meertalig", icon: "translate", add: ["websites"] },
      { id: "no", label: "Nee, één taal", icon: "check" },
    ],
  },
  {
    id: "crmCurrent",
    eyebrow: "CRM",
    title: "Gebruik je al een CRM?",
    when: (a) => hasGoal(a, "crmsetup") || hasGoal(a, "integrations") || hasGoal(a, "portal"),
    choices: [
      { id: "none", label: "Nee, nog niet", icon: "none", add: ["crm"] },
      { id: "hubspot", label: "HubSpot", icon: "hubspot", add: ["crm"] },
      { id: "pipedrive", label: "Pipedrive", icon: "pipeline", add: ["crm"] },
      { id: "teamleader", label: "Teamleader", icon: "kanban", add: ["crm"] },
      { id: "odoo", label: "Odoo", icon: "dashboard", add: ["crm"] },
      { id: "other", label: "Anders / weet ik niet", icon: "question", add: ["crm"] },
    ],
  },
  {
    id: "crmCouple",
    eyebrow: "Koppeling",
    title: "Welke koppeling wil je?",
    subtitle: "Meerdere mag.",
    multi: true,
    when: (a) => hasGoal(a, "integrations") || hasGoal(a, "crmsetup") || (a.crmCurrent && a.crmCurrent.length > 0),
    choices: [
      { id: "leads", label: "Leads automatisch in CRM / pipeline", icon: "magnet", add: ["funnels", "crm"] },
      { id: "projects", label: "Projecten stroomlijnen in projectsysteem", icon: "kanban", add: ["crm"] },
      { id: "sync", label: "Data-sync tussen tools", icon: "plug", add: ["crm", "funnels"] },
    ],
  },
  {
    id: "measuring",
    eyebrow: "Meten",
    title: "Meet je nu al?",
    subtitle: "Search Console, GA4, Tag Manager, pixels…",
    when: (a) => hasGoal(a, "ads") || hasGoal(a, "leads") || hasGoal(a, "findable"),
    choices: [
      { id: "yes", label: "Ja, staat grotendeels", icon: "chart" },
      { id: "no", label: "Nee, nog niet", icon: "cross", hint: "Wij tuigen alles op", add: ["tracking"] },
      { id: "unsure", label: "Weet ik niet zeker", icon: "question", add: ["tracking"] },
    ],
  },
  {
    id: "socials",
    eyebrow: "Kanalen",
    title: "Op welke kanalen ben je actief?",
    subtitle: "Meerdere mag.",
    multi: true,
    when: (a) => hasGoal(a, "content") || hasGoal(a, "ads"),
    choices: [
      { id: "instagram", label: "Instagram", icon: "socials" },
      { id: "facebook", label: "Facebook", icon: "socials" },
      { id: "linkedin", label: "LinkedIn", icon: "socials" },
      { id: "tiktok", label: "TikTok", icon: "socials" },
      { id: "youtube", label: "YouTube", icon: "socials" },
      { id: "none2", label: "Nog geen / weinig", icon: "none", add: ["organic"] },
    ],
  },
  {
    id: "campaignHelp",
    eyebrow: "Strategie",
    title: "Heb je al campagne-ideeën?",
    when: (a) => hasGoal(a, "ads"),
    choices: [
      { id: "have", label: "Ja, ik heb ideeën", icon: "check" },
      { id: "strategy", label: "Graag strategische hulp", icon: "advice", hint: "Concepten, zoekwoorden & concurrentie", add: ["paid", "funnels"] },
    ],
  },
  {
    id: "siteReady",
    eyebrow: "Campagne-klaar",
    title: "Zijn je pagina's al campagne-klaar?",
    when: (a) => hasGoal(a, "ads"),
    choices: [
      { id: "yes", label: "Ja, zeker", icon: "check" },
      { id: "no", label: "Nee, nog niet", icon: "cross", hint: "Wij bouwen landingspagina's + funnels", add: ["funnels", "websites"] },
      { id: "unsure", label: "Weet ik niet, beoordeel maar", icon: "question", add: ["funnels", "websites"] },
    ],
  },
  {
    id: "compliance",
    eyebrow: "Compliance",
    title: "Heb je al een cookie-/consent-banner?",
    when: (a) => hasGoal(a, "ads") || hasGoal(a, "leads") || hasGoal(a, "findable"),
    choices: [
      { id: "yes", label: "Ja, staat goed", icon: "check" },
      { id: "no", label: "Nee, regel dat", icon: "cookie", hint: "AVG-proof consent & Consent Mode", add: ["tracking"] },
    ],
  },
];

// ------------------------------------------------------------ loader-woorden
const LOADING_WORDS = [
  "Evaluating your position",
  "Loading the branding guns",
  "Mapping your landscape",
  "Defining your path",
  "Calibrating growth engines",
  "Assembling your toolkit",
  "Aligning the pixels",
];

// ------------------------------------------------------------ resultaat
export type IntakeResult = {
  stage: string | null;
  goals: string[];
  extraCats: IconKey[];
  answers: Answers;
};

export function Intake({
  onDone,
  onExit,
}: {
  onDone: (r: IntakeResult) => void;
  onExit: () => void;
}) {
  const [answers, setAnswers] = useState<Answers>({});
  const [idx, setIdx] = useState(0);
  const [loading, setLoading] = useState(false);

  // zichtbare vragen op basis van huidige antwoorden
  const visible = useMemo(() => QUESTIONS.filter((q) => !q.when || q.when(answers)), [answers]);
  const q = visible[idx];

  const toggle = (choice: string, multi?: boolean) => {
    setAnswers((a) => {
      const cur = a[q.id] ?? [];
      if (multi) {
        return { ...a, [q.id]: cur.includes(choice) ? cur.filter((c) => c !== choice) : [...cur, choice] };
      }
      return { ...a, [q.id]: cur[0] === choice ? [] : [choice] };
    });
  };

  const picked = answers[q?.id] ?? [];
  const canNext = picked.length > 0;
  const isLast = idx >= visible.length - 1;

  const finish = () => {
    // verzamel extra categorieën uit de gekozen antwoorden
    const extra = new Set<IconKey>();
    for (const question of QUESTIONS) {
      for (const c of question.choices) {
        if ((answers[question.id] ?? []).includes(c.id)) c.add?.forEach((x) => extra.add(x));
      }
    }
    setLoading(true);
    window.setTimeout(() => {
      onDone({
        stage: answers.stage?.[0] ?? null,
        goals: answers.goals ?? [],
        extraCats: [...extra],
        answers,
      });
    }, 3000);
  };

  const next = () => {
    if (!canNext) return;
    if (isLast) finish();
    else setIdx((i) => i + 1);
  };
  const prev = () => {
    if (idx === 0) onExit();
    else setIdx((i) => Math.max(0, i - 1));
  };

  // clamp idx als het aantal zichtbare vragen verandert
  useEffect(() => {
    if (idx > visible.length - 1) setIdx(Math.max(0, visible.length - 1));
  }, [visible.length, idx]);

  if (loading) return <ThinkingLoader />;
  if (!q) return null;

  const progress = ((idx + 1) / visible.length) * 100;

  return (
    <div className="exp-intake2">
      <div className="exp-cinema-bg" />
      <header className="exp-topbar exp-intake2-top">
        <M7Logo height={24} />
        <div className="exp-progress">
          <div className="exp-progress-bar"><span style={{ width: `${progress}%` }} /></div>
          <span className="exp-progress-label">{idx + 1} / {visible.length}</span>
        </div>
        <button className="exp-btn exp-btn-ghost exp-btn-sm" onClick={onExit}>Sluiten</button>
      </header>

      <div className="exp-intake2-stage" key={q.id}>
        <span className="exp-eyebrow exp-intake2-eyebrow">{q.eyebrow}</span>
        <h2 className="exp-intake2-title">{q.title}</h2>
        {q.subtitle && <p className="exp-intake2-sub">{q.subtitle}</p>}

        <div className={`exp-choices ${q.choices.length > 6 ? "is-dense" : ""}`}>
          {q.choices.map((c) => {
            const on = picked.includes(c.id);
            return (
              <button
                key={c.id}
                type="button"
                className={`exp-choice ${on ? "is-on" : ""}`}
                onClick={() => toggle(c.id, q.multi)}
              >
                <span className="exp-choice-ico"><Ico name={c.icon} /></span>
                <span className="exp-choice-body">
                  <span className="exp-choice-label">{c.label}</span>
                  {c.hint && <span className="exp-choice-hint">{c.hint}</span>}
                </span>
                <span className="exp-choice-check" aria-hidden>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round"><path d="M5 13l4 4L19 7" /></svg>
                </span>
              </button>
            );
          })}
        </div>

        <div className="exp-intake2-nav">
          <button className="exp-btn exp-btn-ghost" onClick={prev}>
            {idx === 0 ? "Terug" : "Vorige"}
          </button>
          <button className="exp-btn exp-btn-primary exp-btn-lg" onClick={next} disabled={!canNext}>
            {isLast ? "Stel mijn pad samen" : "Volgende"}
            <span className="exp-circle-arrow" aria-hidden>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.6} strokeLinecap="round" strokeLinejoin="round"><path d="M7 17L17 7M8 7h9v9" /></svg>
            </span>
          </button>
        </div>
        {q.multi && <p className="exp-intake2-multi">Meerdere keuzes mogelijk</p>}
      </div>
    </div>
  );
}

// ------------------------------------------------------------ denk-loader
function ThinkingLoader() {
  const [w, setW] = useState(0);
  const ref = useRef(0);
  useEffect(() => {
    const t = window.setInterval(() => {
      ref.current = (ref.current + 1) % LOADING_WORDS.length;
      setW(ref.current);
    }, 700);
    return () => window.clearInterval(t);
  }, []);
  return (
    <div className="exp-loader">
      <div className="exp-cinema-bg" />
      <div className="exp-loader-inner">
        <div className="exp-atom" aria-hidden>
          <span className="exp-atom-nucleus" />
          <span className="exp-atom-orbit o1"><i /></span>
          <span className="exp-atom-orbit o2"><i /></span>
          <span className="exp-atom-orbit o3"><i /></span>
        </div>
        <div className="exp-loader-words">
          {LOADING_WORDS.map((word, i) => (
            <span key={word} className={`exp-loader-word ${i === w ? "is-on" : ""}`}>{word}…</span>
          ))}
        </div>
        <div className="exp-loader-bar"><span /></div>
      </div>
    </div>
  );
}
