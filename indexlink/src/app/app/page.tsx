import Link from "next/link";

const APPROVALS = [
  { t: "Draft ready: “ISO 42001 readiness — a practical audit walkthrough”", s: "Visibility · needs review", chip: "Review draft", href: "/app/visibility/workshop" },
  { t: "Funnel match: attach “AI Risk Assessment” to 3 compliance pages", s: "Conversion · suggested by matching engine", chip: "Approve match", href: "/app/conversion" },
  { t: "Campaign proposal: 34 contacts researching migration playbooks", s: "Action · segment formed 2 days ago", chip: "Review campaign", href: "/app/action" },
  { t: "Fact conflict: two pricing statements found in sources", s: "Company Brain · pick the current one", chip: "Resolve", href: "/app/brain" },
];

const NEXT = [
  { t: "Answer 2 open workshop questions", d: "Unblocks the comparison page draft", href: "/app/visibility/workshop" },
  { t: "Choose home-page slot for the new guide", d: "Publishing is otherwise complete", href: "/app/visibility" },
  { t: "Connect Microsoft Clarity", d: "+6% readiness · unlocks friction insights", href: "/app/brain" },
];

export default function CommandCenter() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Command Center</h1>
          <div className="muted">Good morning. Three approvals are waiting — everything else is running.</div>
        </div>
        <Link href="/app/visibility" className="btn btn-primary btn-sm">+ New content</Link>
      </div>

      <div className="stats">
        <div className="stat card"><span className="k">Qualified visits (30d)</span><span className="v">4,218</span><span className="d up">▲ 23% vs prior</span></div>
        <div className="stat card"><span className="k">AI citations</span><span className="v">31</span><span className="d up">▲ 9 new sources</span></div>
        <div className="stat card"><span className="k">Leads captured</span><span className="v">87</span><span className="d up">▲ 18% vs prior</span></div>
        <div className="stat card"><span className="k">Pending approvals</span><span className="v">4</span><span className="d flat">2 time-sensitive</span></div>
      </div>

      <div className="two-col">
        <div className="panel card">
          <div className="panel-head">
            <b>Approval inbox</b>
            <span className="chip">4 open</span>
          </div>
          <div className="rowlist">
            {APPROVALS.map((a) => (
              <Link href={a.href} key={a.t} className="rowitem">
                <span className="dot pulse" />
                <span className="grow">
                  <b>{a.t}</b>
                  <span>{a.s}</span>
                </span>
                <span className="chip chip-signal">{a.chip}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="panel card">
          <div className="panel-head">
            <b>Recommended next actions</b>
            <span className="chip chip-ok">readiness 82%</span>
          </div>
          <div className="rowlist">
            {NEXT.map((n) => (
              <Link href={n.href} key={n.t} className="rowitem">
                <span className="grow">
                  <b>{n.t}</b>
                  <span>{n.d}</span>
                </span>
                <span className="chip chip-outline">Do it →</span>
              </Link>
            ))}
          </div>
          <div className="card-soft" style={{ padding: "14px 16px", marginTop: 14, fontSize: 13, color: "var(--ink-55)" }}>
            <b style={{ color: "var(--ink)" }}>This week&apos;s loop:</b> the “vendor comparison” theme is
            attracting traffic but has no decision-stage page yet. The studio drafted an
            opportunity card — worth 10 minutes.
          </div>
        </div>
      </div>
    </>
  );
}
