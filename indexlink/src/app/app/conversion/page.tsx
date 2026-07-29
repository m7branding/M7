const FUNNELS = [
  { n: "AI Readiness Self-Assessment", type: "Assessment", stat: "312 starts · 41% completion · 87 leads", live: true },
  { n: "Audit-Day Checklist", type: "Checklist", stat: "204 downloads · 61 leads", live: true },
  { n: "Compliance Cost Calculator", type: "Calculator", stat: "Draft — fields proposed from pricing facts", live: false },
];

const MATCHES = [
  { page: "ISO 42001 readiness walkthrough", funnel: "AI Readiness Self-Assessment", conf: 94, note: "Decision-adjacent intent → assessment beats a generic guide" },
  { page: "What does an AI governance audit cost?", funnel: "Compliance Cost Calculator", conf: 91, note: "Cost query → quantify the business case on-page" },
  { page: "Migration playbook: leaving legacy GRC", funnel: "Audit-Day Checklist", conf: 78, note: "Process content → low-friction practical asset" },
];

export default function Conversion() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Conversion Studio</h1>
          <div className="muted">Value funnels matched to every page — continuing the visitor&apos;s task, not interrupting it.</div>
        </div>
        <button className="btn btn-primary btn-sm">+ New funnel</button>
      </div>

      <div className="two-col">
        <div className="panel card">
          <div className="panel-head"><b>Funnel library</b><span className="chip">3</span></div>
          <div className="rowlist">
            {FUNNELS.map((f) => (
              <div className="rowitem" key={f.n}>
                <span className={`dot ${f.live ? "dot-ok" : "dot-warn"}`} />
                <span className="grow"><b>{f.n}</b><span>{f.stat}</span></span>
                <span className="chip chip-outline">{f.type}</span>
              </div>
            ))}
          </div>

          <div className="mockup-scene">
            <div className="mockup">
              <span className="m-tag">SELF-ASSESSMENT</span>
              <span className="m-title">AI Readiness — 12-point audit scan</span>
              <span className="m-lines"><i /><i /><i /></span>
            </div>
          </div>
          <div className="chart-note" style={{ textAlign: "center" }}>
            Auto-generated 3D mockup — created together with the asset, reused across pages and campaigns.
          </div>
        </div>

        <div className="panel card">
          <div className="panel-head"><b>AI funnel matching</b><span className="chip chip-signal">3 suggestions</span></div>
          <div className="rowlist">
            {MATCHES.map((m) => (
              <div className="rowitem" key={m.page}>
                <span className="grow">
                  <b>{m.page} → {m.funnel}</b>
                  <span>{m.note}</span>
                </span>
                <span className="chip chip-signal">{m.conf}%</span>
                <button className="btn btn-soft btn-sm">Approve</button>
              </div>
            ))}
          </div>
          <div className="card-soft" style={{ padding: "13px 16px", marginTop: 14, fontSize: 13, color: "var(--ink-55)" }}>
            Context fields adapt per page (1–3 questions max) while the core lead schema stays
            stable — personalization without form sprawl.
          </div>
        </div>
      </div>
    </>
  );
}
