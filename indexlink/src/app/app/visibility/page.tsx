import Link from "next/link";

const IDEAS = [
  { t: "ISO 42001 readiness — a practical audit walkthrough", type: "Resource", score: 87, why: "Search ↑ 32% · you own a proprietary checklist", state: "In workshop" },
  { t: "Acme vs. building an in-house compliance team", type: "Comparison", score: 82, why: "Competitors rank thin content · sales asks weekly", state: "Suggested" },
  { t: "What does an AI governance audit cost in 2026?", type: "FAQ / answer", score: 79, why: "High-intent query · answer engines cite no one yet", state: "Suggested" },
  { t: "Migration playbook: leaving legacy GRC tooling", type: "Checklist", score: 74, why: "Recurring support questions · zero public answers", state: "Suggested" },
];

const PUBLISHED = [
  { t: "The 3-phase rollout method for AI governance", slot: "Home · slot 1", perf: "1.2k visits · 14 leads" },
  { t: "AI Act timeline: what applies to you when", slot: "Theme: Compliance", perf: "840 visits · 6 citations" },
];

export default function Visibility() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Visibility Studio</h1>
          <div className="muted">Opportunities ranked by demand × relevance × authority × originality.</div>
        </div>
        <Link href="/app/visibility/workshop" className="btn btn-primary btn-sm">Open workshop</Link>
      </div>

      <div className="panel card">
        <div className="panel-head">
          <b>Opportunity cards</b>
          <span className="chip chip-signal">Theme: AI governance</span>
        </div>
        <div className="rowlist">
          {IDEAS.map((i) => (
            <Link href="/app/visibility/workshop" className="rowitem" key={i.t}>
              <span className="chip chip-outline" style={{ minWidth: 92, justifyContent: "center" }}>{i.type}</span>
              <span className="grow"><b>{i.t}</b><span>{i.why}</span></span>
              <span className="chip chip-signal">{i.score}</span>
              <span className={`chip ${i.state === "In workshop" ? "chip-warn" : ""}`}>{i.state}</span>
            </Link>
          ))}
        </div>
      </div>

      <div className="panel card">
        <div className="panel-head"><b>Published on your hub</b><span className="chip chip-ok">2 live</span></div>
        <div className="rowlist">
          {PUBLISHED.map((p) => (
            <div className="rowitem" key={p.t}>
              <span className="dot dot-ok" />
              <span className="grow"><b>{p.t}</b><span>{p.slot}</span></span>
              <span className="muted" style={{ fontSize: 13 }}>{p.perf}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
