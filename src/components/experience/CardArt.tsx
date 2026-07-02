// ============================================================
// M7 — Abstracte infographic per pakket-card. Elke categorie krijgt
// een eigen gradient + geometrisch motief; met een deterministische
// seed (o.b.v. het pakket-id) varieert het beeld subtiel per kaart,
// zodat elke card z'n eigen "infographic" heeft die past bij de dienst.
// ============================================================

import type { IconKey, PkgKind } from "@/lib/catalog";

const PALETTE: Record<IconKey, [string, string]> = {
  branding: ["#7c5cff", "#22d3ee"],
  print: ["#f5c93b", "#ff7a59"],
  websites: ["#2fe3cf", "#22d3ee"],
  webshop: ["#22c55e", "#2fe3cf"],
  webapps: ["#7c5cff", "#22d3ee"],
  apps: ["#22d3ee", "#7c5cff"],
  organic: ["#ff60ff", "#7c5cff"],
  paid: ["#22d3ee", "#2fe3cf"],
  seo: ["#f5c93b", "#2fe3cf"],
  tracking: ["#22d3ee", "#22c55e"],
  funnels: ["#ff7a59", "#f5c93b"],
  crm: ["#7c5cff", "#2fe3cf"],
  hosting: ["#2fe3cf", "#22d3ee"],
  support: ["#22c55e", "#22d3ee"],
};

function seedOf(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

// Per-categorie motief. `s` = seed (voor subtiele variatie), `c` = accent.
function motif(cat: IconKey, s: number, c: string) {
  const r = (n: number, lo: number, hi: number) => lo + (((s >> n) & 15) / 15) * (hi - lo);
  const stroke = { stroke: c, strokeWidth: 2, fill: "none", strokeLinecap: "round" as const };

  switch (cat) {
    case "branding":
      return (
        <>
          <circle cx="150" cy="40" r="26" {...stroke} opacity="0.9" />
          <path d="M150 14l7 24-7 24-7-24z" fill={c} opacity="0.85" />
          <circle cx="150" cy="40" r="4" fill="#fff" />
        </>
      );
    case "print":
      return (
        <>
          <rect x="120" y="18" width="60" height="44" rx="4" {...stroke} />
          <path d="M130 30h40M130 40h30M130 50h36" {...stroke} opacity="0.7" />
        </>
      );
    case "websites":
      return (
        <>
          <rect x="116" y="16" width="68" height="48" rx="5" {...stroke} />
          <path d="M116 30h68" {...stroke} />
          <circle cx="124" cy="23" r="2" fill={c} />
          <path d="M126 46h30M126 54h20" {...stroke} opacity="0.7" />
        </>
      );
    case "webshop":
      return (
        <>
          <path d="M122 26h56l-6 34h-44z" {...stroke} />
          <path d="M134 26a16 16 0 0132 0" {...stroke} opacity="0.7" />
          <circle cx="140" cy="66" r="3" fill={c} />
          <circle cx="164" cy="66" r="3" fill={c} />
        </>
      );
    case "webapps":
      return (
        <>
          <rect x="116" y="16" width="68" height="48" rx="5" {...stroke} />
          <path d="M138 16v48M116 30h22" {...stroke} opacity="0.8" />
          <path d="M148 34h28M148 44h28M148 54h18" {...stroke} opacity="0.6" />
        </>
      );
    case "apps":
      return (
        <>
          <rect x="134" y="10" width="32" height="60" rx="7" {...stroke} />
          <path d="M144 18h12" {...stroke} opacity="0.7" />
          <circle cx="150" cy="60" r="3" fill={c} />
        </>
      );
    case "organic":
      return (
        <>
          <path d="M110 44c18 0 18-26 40-26s22 26 40 26" {...stroke} />
          <path d="M110 56c18 0 18-16 40-16s22 16 40 16" {...stroke} opacity="0.5" />
          <circle cx="150" cy="18" r="4" fill={c} />
        </>
      );
    case "paid":
      return (
        <>
          <circle cx="150" cy="40" r="28" {...stroke} />
          <circle cx="150" cy="40" r="15" {...stroke} opacity="0.7" />
          <circle cx="150" cy="40" r="4" fill={c} />
          <path d="M150 6v10M150 64v10M116 40h10M174 40h10" {...stroke} opacity="0.6" />
        </>
      );
    case "seo":
      return (
        <>
          <circle cx="140" cy="34" r="20" {...stroke} />
          <path d="M155 49l18 18" {...stroke} />
          <path d="M140 22v6M140 40v6M128 34h6M146 34h6" {...stroke} opacity="0.6" />
        </>
      );
    case "tracking":
      return (
        <>
          <path d="M112 66V16M112 66h76" {...stroke} opacity="0.8" />
          <path d="M122 56l14-16 12 9 20-27" {...stroke} />
          <circle cx="168" cy="22" r="4" fill={c} />
        </>
      );
    case "funnels":
      return (
        <>
          <path d="M116 16h68l-24 28v22l-20-9V44z" {...stroke} />
          <path d="M134 26h32" {...stroke} opacity="0.6" />
        </>
      );
    case "crm":
      return (
        <>
          <circle cx="126" cy="24" r="8" {...stroke} />
          <circle cx="174" cy="24" r="8" {...stroke} />
          <circle cx="150" cy="60" r="8" {...stroke} />
          <path d="M132 30l14 24M168 30l-14 24M134 24h32" {...stroke} opacity="0.6" />
        </>
      );
    case "hosting":
      return (
        <>
          <circle cx="150" cy="40" r="10" {...stroke} />
          <ellipse cx="150" cy="40" rx="34" ry="14" {...stroke} opacity="0.8" />
          <ellipse cx="150" cy="40" rx="34" ry="14" transform="rotate(60 150 40)" {...stroke} opacity="0.55" />
          <ellipse cx="150" cy="40" rx="34" ry="14" transform="rotate(120 150 40)" {...stroke} opacity="0.4" />
        </>
      );
    case "support":
      return (
        <>
          <path d="M150 12l28 10v18c0 17-12 27-28 34-16-7-28-17-28-34V22z" {...stroke} />
          <path d="M138 40l8 8 16-17" {...stroke} />
        </>
      );
    default:
      return <circle cx="150" cy="40" r="24" {...stroke} />;
  }
}

export function CardArt({
  cat,
  id,
  kind,
  className = "",
}: {
  cat: IconKey;
  id: string;
  kind: PkgKind;
  className?: string;
}) {
  const [a, b] = PALETTE[cat] ?? ["#2fe3cf", "#22d3ee"];
  const s = seedOf(id);
  const gid = `ca-${id}`;
  // Deterministische "data"-staafjes onderaan (infographic-gevoel).
  const bars = Array.from({ length: 7 }, (_, i) => 8 + (((s >> (i * 2)) & 15) / 15) * 30);

  return (
    <div className={`exp-cardart ${className}`} data-kind={kind} aria-hidden>
      <svg viewBox="0 0 300 80" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={a} />
            <stop offset="1" stopColor={b} />
          </linearGradient>
          <radialGradient id={`${gid}-g`} cx="0.5" cy="0.2" r="0.9">
            <stop offset="0" stopColor={a} stopOpacity="0.5" />
            <stop offset="1" stopColor={b} stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="300" height="80" fill={`url(#${gid}-g)`} />
        {/* zwevende deco-stippen */}
        {Array.from({ length: 5 }).map((_, i) => (
          <circle
            key={i}
            cx={20 + ((s >> (i * 3)) & 31) * 8}
            cy={12 + ((s >> (i * 2)) & 7) * 7}
            r={1 + ((s >> i) & 1)}
            fill="#fff"
            opacity="0.25"
          />
        ))}
        {/* infographic-staafjes rechtsonder */}
        <g transform="translate(214 66)" opacity="0.55">
          {bars.map((h, i) => (
            <rect key={i} x={i * 11} y={-h} width="6" height={h} rx="2" fill={`url(#${gid})`} />
          ))}
        </g>
        {/* categorie-motief */}
        <g opacity="0.95">{motif(cat, s, a)}</g>
      </svg>
    </div>
  );
}
