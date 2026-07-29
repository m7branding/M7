"use client";

import { useState } from "react";
import Link from "next/link";

/**
 * The dynamic content workshop: AI asks one high-leverage question at a
 * time; every answer visibly sharpens the content blueprint on the right.
 */

const QUESTIONS = [
  {
    key: "audience",
    q: "Who typically triggers an ISO 42001 readiness project at your clients?",
    why: "Anchors the page to a real buyer instead of a generic reader.",
    opts: [
      "Compliance / risk officer under board pressure",
      "CTO preparing for enterprise sales requirements",
      "External counsel flagging the AI Act deadline",
    ],
    bp: "Audience & situation",
  },
  {
    key: "pov",
    q: "Your playbook uses a 3-phase rollout. What do most competitors get wrong about phase one?",
    why: "This becomes the page's defensible point of view — the part AI can't invent.",
    opts: [
      "They start with tooling instead of an inventory of AI systems",
      "They audit policies but skip the actual model registry",
      "They treat it as legal work and exclude engineering",
    ],
    bp: "Company point of view",
  },
  {
    key: "proof",
    q: "Which proof can we cite publicly?",
    why: "Claims trace to approved sources — this keeps the page credible and citable.",
    opts: [
      "Meridian case: certified in 9 weeks (approved case study)",
      "94% first-try re-certification rate across audits",
      "Anonymized findings from 40+ readiness scans",
    ],
    bp: "Evidence & examples",
  },
  {
    key: "cta",
    q: "What should a convinced reader do next?",
    why: "Matches the conversion funnel to the page's intent — not a generic ebook.",
    opts: [
      "Take the 12-point readiness self-assessment",
      "Download the audit-day checklist",
      "Book a 30-minute gap review",
    ],
    bp: "Conversion offer",
  },
];

const STATIC_BP = [
  ["Search / answer intent", "“How do we prepare for an ISO 42001 audit?” — informational, decision-adjacent"],
  ["Content structure", "Walkthrough · 3 phases · pitfalls table · FAQ block · internal links to compliance theme"],
] as const;

export default function Workshop() {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [custom, setCustom] = useState("");
  const idx = QUESTIONS.findIndex((q) => !answers[q.key]);
  const current = idx === -1 ? null : QUESTIONS[idx];
  const progress = (Object.keys(answers).length / QUESTIONS.length) * 100;

  const answer = (key: string, val: string) => {
    setAnswers((a) => ({ ...a, [key]: val }));
    setCustom("");
  };

  return (
    <>
      <div className="page-head">
        <div>
          <h1>Content workshop</h1>
          <div className="muted">
            <span className="chip chip-outline" style={{ marginRight: 8 }}>Resource</span>
            ISO 42001 readiness — a practical audit walkthrough
          </div>
        </div>
        <Link href="/app/visibility" className="btn btn-ghost btn-sm">← Back to studio</Link>
      </div>

      <div className="ws">
        <div className="ws-chat">
          <div className="progress-track"><div className="progress-fill" style={{ width: `${progress}%` }} /></div>

          {QUESTIONS.filter((q) => answers[q.key]).map((q) => (
            <div className="ws-answered rise" key={q.key}>
              <span className="dot dot-ok" style={{ marginTop: 5 }} />
              <span>
                <span className="q">{q.q}</span>
                <b>{answers[q.key]}</b>
              </span>
            </div>
          ))}

          {current ? (
            <div className="ws-q card rise" key={current.key}>
              <span className="why-matter">
                <span className="dot pulse" /> Question {idx + 1} of {QUESTIONS.length} — {current.why}
              </span>
              <div className="asks">{current.q}</div>
              <div className="ws-opts">
                {current.opts.map((o) => (
                  <button key={o} className="ws-opt" onClick={() => answer(current.key, o)}>{o}</button>
                ))}
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <input
                  className="ws-opt"
                  style={{ flex: 1 }}
                  placeholder="Or answer in your own words…"
                  value={custom}
                  onChange={(e) => setCustom(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && custom.trim() && answer(current.key, custom.trim())}
                />
                <button className="btn btn-soft btn-sm" disabled={!custom.trim()} onClick={() => custom.trim() && answer(current.key, custom.trim())}>
                  Answer
                </button>
              </div>
            </div>
          ) : (
            <div className="ws-q card rise" style={{ alignItems: "flex-start" }}>
              <span className="chip chip-ok">Blueprint complete</span>
              <div className="asks">The page is specific enough to draft. Generate the evidence-backed draft for review?</div>
              <div style={{ display: "flex", gap: 10 }}>
                <button className="btn btn-primary btn-sm">Generate draft →</button>
                <button className="btn btn-ghost btn-sm" onClick={() => setAnswers({})}>Revise answers</button>
              </div>
            </div>
          )}
        </div>

        <aside className="blueprint card">
          <div className="panel-head" style={{ marginBottom: 2 }}>
            <b>Content blueprint</b>
            <span className="chip">{Object.keys(answers).length + 2}/6 set</span>
          </div>
          {STATIC_BP.map(([k, v]) => (
            <div className="bp-row filled" key={k}>
              <span className="bk">{k}</span>
              <span className="bv">{v}</span>
            </div>
          ))}
          {QUESTIONS.map((q) => (
            <div className={`bp-row ${answers[q.key] ? "filled" : ""}`} key={q.key}>
              <span className="bk">{q.bp}</span>
              <span className="bv">{answers[q.key] ?? "— waiting for your answer"}</span>
            </div>
          ))}
        </aside>
      </div>
    </>
  );
}
