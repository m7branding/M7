const WEEKS = ["W23", "W24", "W25", "W26", "W27", "W28", "W29", "W30"];
const VISITS = [520, 610, 585, 740, 890, 960, 1120, 1245];
const LEADS = [6, 9, 8, 12, 15, 14, 19, 23];

const TOP = [
  { p: "/iso-42001-readiness-walkthrough", v: "1.2k visits", l: "14 leads", c: "6 AI citations" },
  { p: "/ai-act-timeline", v: "840 visits", l: "5 leads", c: "6 AI citations" },
  { p: "/governance-audit-cost", v: "610 visits", l: "11 leads", c: "3 AI citations" },
];

function Bars({ data, labels, max, title }: { data: number[]; labels: string[]; max: number; title: string }) {
  const W = 440, H = 150, pad = 4, bw = W / data.length - 8;
  return (
    <svg viewBox={`0 -24 ${W} ${H + 46}`} role="img" aria-label={title}>
      {data.map((v, i) => {
        const h = Math.max(6, (v / max) * H);
        const x = i * (W / data.length) + pad;
        return (
          <g key={i}>
            <rect className="bar" x={x} y={H - h} width={bw} height={h} rx={4}>
              <title>{`${labels[i]}: ${v.toLocaleString("en-US")}`}</title>
            </rect>
            <text x={x + bw / 2} y={H + 16} textAnchor="middle" fontSize="11" fill="var(--ink-40)">
              {labels[i]}
            </text>
            {i === data.length - 1 && (
              <text x={x + bw / 2} y={H - h - 7} textAnchor="middle" fontSize="12" fontWeight="700" fill="var(--ink)">
                {v.toLocaleString("en-US")}
              </text>
            )}
          </g>
        );
      })}
    </svg>
  );
}

export default function Analytics() {
  return (
    <>
      <div className="page-head">
        <div>
          <h1>Analytics</h1>
          <div className="muted">Human engagement only — crawler and bot activity is tracked separately.</div>
        </div>
        <span className="chip chip-outline">Hub view · last 8 weeks</span>
      </div>

      <div className="stats">
        <div className="stat card"><span className="k">Indexed pages</span><span className="v">24</span><span className="d up">▲ 4 new</span></div>
        <div className="stat card"><span className="k">Non-brand impressions</span><span className="v">48.2k</span><span className="d up">▲ 31%</span></div>
        <div className="stat card"><span className="k">Funnel completion</span><span className="v">41%</span><span className="d up">▲ 5pt</span></div>
        <div className="stat card"><span className="k">Cost per qualified lead</span><span className="v">€38</span><span className="d up">▼ 22%</span></div>
      </div>

      <div className="two-col">
        <div className="panel card chart">
          <div className="panel-head"><b>Qualified visits per week</b></div>
          <Bars data={VISITS} labels={WEEKS} max={1300} title="Qualified visits per week" />
        </div>
        <div className="panel card chart">
          <div className="panel-head"><b>Leads captured per week</b></div>
          <Bars data={LEADS} labels={WEEKS} max={25} title="Leads captured per week" />
        </div>
      </div>

      <div className="panel card">
        <div className="panel-head"><b>Top content</b><span className="chip">by qualified visits</span></div>
        <div className="rowlist">
          {TOP.map((t) => (
            <div className="rowitem" key={t.p}>
              <span className="grow"><b className="mono">{t.p}</b></span>
              <span className="muted" style={{ fontSize: 13 }}>{t.v}</span>
              <span className="muted" style={{ fontSize: 13 }}>{t.l}</span>
              <span className="chip chip-signal">{t.c}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
