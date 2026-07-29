"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Logo, Emblem } from "@/components/Logo";
import { StencilCanvas } from "@/components/StencilCanvas";
import "./onboarding.css";

/* ---------------- demo data ---------------- */

const SOURCES = [
  { id: "site", icon: "🌐", name: "Website crawl", desc: "Pages, offers, FAQs, proof and internal links" },
  { id: "linkedin", icon: "💼", name: "LinkedIn profiles", desc: "Company page + approved expert profiles" },
  { id: "docs", icon: "📄", name: "Documents", desc: "Decks, case studies, research, playbooks" },
  { id: "ga", icon: "📈", name: "Google Analytics & Search Console", desc: "Baselines, top pages and queries" },
  { id: "clarity", icon: "🎥", name: "Microsoft Clarity", desc: "Behavior patterns and friction signals" },
  { id: "crm", icon: "🤝", name: "CRM (HubSpot / Pipedrive)", desc: "Objections, lifecycle and lead quality" },
];

const SECTORS = ["SaaS", "Professional services", "Finance", "Healthcare", "Manufacturing", "E-commerce", "Education", "Logistics"];
const GOALS = ["Rank for non-brand search", "Get cited by AI answers", "Capture qualified leads", "Nurture existing audience", "Support sales conversations"];

const THEMES = [
  { id: "t1", title: "AI governance for regulated teams", why: "High demand growth · strong internal expertise", tags: ["Search ↑ 32%", "Low coverage"] },
  { id: "t2", title: "Implementation cost & ROI transparency", why: "Sales questions map directly to this theme", tags: ["High intent", "Calculator fit"] },
  { id: "t3", title: "Vendor comparison & selection criteria", why: "Competitors rank thin content here", tags: ["Comparison gap", "GEO cite"] },
  { id: "t4", title: "Compliance readiness & risk audits", why: "Proprietary checklist gives originality", tags: ["Assessment fit", "Authority"] },
  { id: "t5", title: "Migration & switching playbooks", why: "Recurring support questions, zero public answers", tags: ["FAQ cluster", "Quick wins"] },
  { id: "t6", title: "Industry benchmarks & trends", why: "Own data enables citable original research", tags: ["Linkable", "PR value"] },
];

const STEPS = ["Company", "Sources", "Profile", "Themes", "Launch"];

/* ---------------- page ---------------- */

export default function Onboarding() {
  const [step, setStep] = useState(0);
  const [company, setCompany] = useState("");
  const [domain, setDomain] = useState("");
  const [sub, setSub] = useState("");
  const [sources, setSources] = useState<string[]>([]);
  const [sectors, setSectors] = useState<string[]>([]);
  const [goals, setGoals] = useState<string[]>([]);
  const [themes, setThemes] = useState<string[]>([]);

  const slug = (sub || company).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

  const readiness = useMemo(() => {
    const knowledge = Math.min(100, (sources.filter((s) => ["site", "docs", "linkedin"].includes(s)).length / 3) * 100);
    const tracking = Math.min(100, (sources.filter((s) => ["ga", "clarity", "crm"].includes(s)).length / 3) * 100);
    const commercial = Math.min(100, ((sectors.length ? 50 : 0) + (goals.length ? 50 : 0)));
    const identity = company && slug ? 100 : company ? 55 : 0;
    const strategy = Math.min(100, (themes.length / 3) * 100);
    const total = Math.round((identity + knowledge + tracking + commercial + strategy) / 5);
    return { identity, knowledge, tracking, commercial, strategy, total };
  }, [company, slug, sources, sectors, goals, themes]);

  const toggle = (list: string[], set: (v: string[]) => void, id: string) =>
    set(list.includes(id) ? list.filter((x) => x !== id) : [...list, id]);

  const canNext =
    step === 0 ? company.length > 1 && slug.length > 1 :
    step === 1 ? sources.length > 0 :
    step === 2 ? sectors.length > 0 && goals.length > 0 :
    step === 3 ? themes.length >= 2 : true;

  return (
    <div className="ob">
      <div className="ob-top">
        <Link href="/"><Logo size={18} /></Link>
        <div className="ob-steps">
          {STEPS.map((s, i) => (
            <span key={s} className={`ob-step-pill ${i === step ? "active" : i < step ? "done" : ""}`} title={s} />
          ))}
        </div>
        <span className="chip">{STEPS[step]} · {step + 1}/{STEPS.length}</span>
      </div>

      <div className="ob-body">
        <div className="ob-main">
          {step === 0 && (
            <div className="ob-card rise" key="s0">
              <span className="eyebrow">Step 1 — Your company</span>
              <h1>Let&apos;s give your knowledge a home.</h1>
              <p className="lede">
                Your hub starts free on an IndexLink subdomain. Later, connect your own
                branded subdomain (like <span className="mono">insights.yourcompany.com</span>)
                with one CNAME record — everything moves with you.
              </p>
              <div className="ob-grid-2">
                <div className="field">
                  <label>Company name</label>
                  <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="Acme Consulting" autoFocus />
                </div>
                <div className="field">
                  <label>Main website</label>
                  <input value={domain} onChange={(e) => setDomain(e.target.value)} placeholder="acme.com" />
                </div>
              </div>
              <div className="field">
                <label>Your hub address</label>
                <div className="ob-subdomain">
                  <input value={sub} onChange={(e) => setSub(e.target.value)} placeholder={slug || "yourcompany"} />
                  <span className="suffix">.indexlink.io</span>
                </div>
                <span className="hint">
                  {slug ? <>Your hub will live at <b className="mono">{slug}.indexlink.io</b> — connected to your main site, tracked separately.</> : "Pick something short and memorable — it becomes part of your brand."}
                </span>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="ob-card rise" key="s1">
              <span className="eyebrow">Step 2 — Connect sources</span>
              <h1>Feed the company brain.</h1>
              <p className="lede">
                Every source makes your content more specific and less generic. Each
                extracted fact keeps its provenance — you approve what&apos;s used publicly.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {SOURCES.map((s) => {
                  const on = sources.includes(s.id);
                  return (
                    <div key={s.id} className={`src-row ${on ? "on" : ""}`} onClick={() => toggle(sources, setSources, s.id)} role="button" tabIndex={0}>
                      <span className="src-icon">{s.icon}</span>
                      <span className="src-meta">
                        <b>{s.name}</b>
                        <span>{s.desc}</span>
                      </span>
                      <span className="src-state" style={{ color: on ? "var(--ok)" : "var(--ink-20)" }}>
                        {on ? "✓ Connected" : "Connect"}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="ob-card rise" key="s2">
              <span className="eyebrow">Step 3 — Commercial profile</span>
              <h1>What should this hub achieve?</h1>
              <p className="lede">
                This shapes opportunity scoring: demand × commercial relevance ×
                authority fit × originality.
              </p>
              <div className="field">
                <label>Your sectors</label>
                <div className="pick-row">
                  {SECTORS.map((s) => (
                    <button key={s} className={`pick ${sectors.includes(s) ? "on" : ""}`} onClick={() => toggle(sectors, setSectors, s)}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="field">
                <label>Primary goals</label>
                <div className="pick-row">
                  {GOALS.map((g) => (
                    <button key={g} className={`pick ${goals.includes(g) ? "on" : ""}`} onClick={() => toggle(goals, setGoals, g)}>{g}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="ob-card rise" key="s3">
              <span className="eyebrow">Step 4 — Strategic themes</span>
              <h1>Choose your content territories.</h1>
              <p className="lede">
                Based on your sources and market signals, these themes combine real
                demand with your authority. Pick at least two — you can refine later.
              </p>
              <div className="theme-grid">
                {THEMES.map((t) => {
                  const on = themes.includes(t.id);
                  return (
                    <button key={t.id} className={`theme-card ${on ? "on" : ""}`} onClick={() => toggle(themes, setThemes, t.id)}>
                      <b>{t.title}</b>
                      <span className="why">{t.why}</span>
                      <span className="theme-meta">
                        {t.tags.map((tag) => <span key={tag} className="chip chip-signal" style={{ fontSize: 11 }}>{tag}</span>)}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="ob-card ob-done rise" key="s4">
              <Emblem size={64} color="var(--signal)" animated />
              <span className="eyebrow">You&apos;re live</span>
              <h1>{slug || "yourcompany"}.indexlink.io is ready.</h1>
              <p className="lede">
                Readiness score: <b style={{ color: "var(--signal-strong)" }}>{readiness.total}%</b>.
                The studio has drafted your first content opportunities — co-create your
                first page in the Visibility Studio.
              </p>
              <Link href="/app" className="btn btn-primary">Enter your studio →</Link>
            </div>
          )}

          {step < 4 && (
            <div className="ob-nav">
              <button className="btn btn-ghost btn-sm" onClick={() => setStep(Math.max(0, step - 1))} style={{ visibility: step === 0 ? "hidden" : "visible" }}>
                ← Back
              </button>
              <button className="btn btn-primary" disabled={!canNext} style={{ opacity: canNext ? 1 : 0.4 }} onClick={() => setStep(step + 1)}>
                {step === 3 ? "Launch my hub" : "Continue"} →
              </button>
            </div>
          )}
        </div>

        <aside className="ob-rail stencil-fade">
          <StencilCanvas density={0.5} />
          <div className="readiness card" style={{ padding: "20px 22px" }}>
            <div className="readiness-head">
              <b>Company readiness</b>
              <span className="readiness-score">{readiness.total}%</span>
            </div>
            <div className="readiness-rows">
              {([
                ["Identity", readiness.identity],
                ["Knowledge", readiness.knowledge],
                ["Tracking", readiness.tracking],
                ["Commercial", readiness.commercial],
                ["Strategy", readiness.strategy],
              ] as const).map(([label, v]) => (
                <div className="readiness-row" key={label}>
                  <span>{label}</span>
                  <div className="progress-track"><div className="progress-fill" style={{ width: `${v}%` }} /></div>
                </div>
              ))}
            </div>
          </div>

          <div className="hub-preview">
            <div className="hub-bar">
              <span className="dots"><i /><i /><i /></span>
              <span className="hub-url"><b>{slug || "yourcompany"}</b>.indexlink.io</span>
            </div>
            <div className="hub-canvas">
              <div className={`hub-block hero-block ${company ? "live" : ""}`}>
                {company ? <><Emblem size={18} color="var(--signal)" /> {company} — Knowledge Hub</> : "Your hub takes shape here"}
              </div>
              <div className="hub-row">
                {[0, 1, 2].map((i) => (
                  <div key={i} className={`hub-tile ${themes.length > i ? "live" : ""}`}>
                    {themes.length > i ? THEMES.find((t) => t.id === themes[i])?.title.split(" ").slice(0, 2).join(" ") : ""}
                  </div>
                ))}
              </div>
              <div className="hub-row">
                {[3, 4, 5].map((i) => (
                  <div key={i} className={`hub-tile ${sources.length > i - 3 ? "live" : ""}`}>
                    {sources.length > i - 3 ? "◈ source" : ""}
                  </div>
                ))}
              </div>
              <div className={`hub-block ${goals.length ? "live" : ""}`} style={{ height: 40, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11.5, fontWeight: 700, color: goals.length ? "var(--signal-strong)" : "var(--ink-20)" }}>
                {goals.length ? "⌁ Value funnel slot — matched by AI" : ""}
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
