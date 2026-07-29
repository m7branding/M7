const SOURCES = [
  { n: "acme.com — 142 pages crawled", d: "Refreshed 2 days ago · 318 facts extracted", state: "ok" },
  { n: "LinkedIn — company + 4 expert profiles", d: "Roles, credentials, public viewpoints", state: "ok" },
  { n: "Documents — 12 files", d: "Case studies, pricing deck, methodology playbook", state: "ok" },
  { n: "Google Search Console", d: "Baselines set · 1,204 queries tracked", state: "ok" },
  { n: "Microsoft Clarity", d: "Not connected — unlocks friction insights", state: "todo" },
];

const FACTS = [
  { f: "Implementation projects run 6–10 weeks with a 3-phase rollout", src: "methodology-playbook.pdf · p.4", conf: "High", status: "approved" },
  { f: "Pricing starts at €2,400/mo for teams up to 25 users", src: "pricing-deck-2026.pdf · slide 7", conf: "Conflict", status: "conflict" },
  { f: "94% of audited clients pass ISO re-certification first try", src: "case-study-meridian.docx", conf: "High", status: "approved" },
  { f: "Founded 2014, offices in Amsterdam and Antwerp", src: "acme.com/about", conf: "High", status: "approved" },
];

export default function Brain() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Company Brain</h1>
          <div className="muted">Everything the studio knows — with provenance. You control what is used publicly.</div>
        </div>
        <button className="btn btn-ghost btn-sm">+ Add source</button>
      </div>

      <div className="two-col">
        <div className="panel card">
          <div className="panel-head"><b>Connected sources</b><span className="chip">5</span></div>
          <div className="rowlist">
            {SOURCES.map((s) => (
              <div className="rowitem" key={s.n}>
                <span className={`dot ${s.state === "ok" ? "dot-ok" : "dot-warn"}`} />
                <span className="grow"><b>{s.n}</b><span>{s.d}</span></span>
                <span className={`chip ${s.state === "ok" ? "chip-ok" : "chip-warn"}`}>{s.state === "ok" ? "Synced" : "Connect"}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="panel card">
          <div className="panel-head"><b>Extracted facts</b><span className="chip chip-warn">1 conflict</span></div>
          <div className="rowlist">
            {FACTS.map((f) => (
              <div className="rowitem" key={f.f}>
                <span className="grow">
                  <b>{f.f}</b>
                  <span className="mono">{f.src}</span>
                </span>
                <span className={`chip ${f.status === "conflict" ? "chip-warn" : "chip-ok"}`}>
                  {f.status === "conflict" ? "Resolve" : "Approved"}
                </span>
              </div>
            ))}
          </div>
          <div className="card-soft" style={{ padding: "13px 16px", marginTop: 14, fontSize: 13, color: "var(--ink-55)" }}>
            Conflicting claims are surfaced as decisions — never silently blended into content.
          </div>
        </div>
      </div>
    </>
  );
}
