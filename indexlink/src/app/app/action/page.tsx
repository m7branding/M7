const SEGMENTS = [
  { n: "Migration researchers", why: "Read ≥2 migration pages + downloaded checklist", size: 34, fresh: "grew +9 this week" },
  { n: "High-intent assessors", why: "Assessment score ≥70 + pricing page visit", size: 12, fresh: "3 new today" },
  { n: "Compliance educators", why: "Newsletter + theme affinity: AI governance", size: 148, fresh: "stable" },
];

const PROPOSALS = [
  { t: "3-email migration mini-course", seg: "Migration researchers · 34 recipients", state: "Awaiting approval" },
  { t: "Sales task: call 5 assessment leads scoring 85+", seg: "High-intent assessors · assigned to Sam", state: "Awaiting approval" },
  { t: "Monthly digest: AI Act updates", seg: "Compliance educators · 148 recipients", state: "Scheduled Thu 09:00" },
];

export default function Action() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Action Studio</h1>
          <div className="muted">Explainable segments, proposed campaigns — nothing sends without your approval.</div>
        </div>
        <button className="btn btn-ghost btn-sm">Audience →</button>
      </div>

      <div className="two-col">
        <div className="panel card">
          <div className="panel-head"><b>Smart segments</b><span className="chip">3 active</span></div>
          <div className="rowlist">
            {SEGMENTS.map((s) => (
              <div className="rowitem" key={s.n}>
                <span className="grow">
                  <b>{s.n} <span className="chip" style={{ marginLeft: 6 }}>{s.size}</span></b>
                  <span>Why: {s.why} · {s.fresh}</span>
                </span>
                <button className="btn btn-soft btn-sm">Inspect</button>
              </div>
            ))}
          </div>
          <div className="card-soft" style={{ padding: "13px 16px", marginTop: 14, fontSize: 13, color: "var(--ink-55)" }}>
            Every membership is explainable — observed behavior and explicit answers only,
            never opaque scoring or inferred sensitive attributes.
          </div>
        </div>

        <div className="panel card">
          <div className="panel-head"><b>Campaign proposals</b><span className="chip chip-warn">2 waiting</span></div>
          <div className="rowlist">
            {PROPOSALS.map((p) => (
              <div className="rowitem" key={p.t}>
                <span className={`dot ${p.state.startsWith("Scheduled") ? "dot-ok" : "dot-warn"}`} />
                <span className="grow"><b>{p.t}</b><span>{p.seg}</span></span>
                {p.state.startsWith("Scheduled")
                  ? <span className="chip chip-ok">{p.state}</span>
                  : <button className="btn btn-primary btn-sm">Review &amp; approve</button>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
