// ============================================================
// M7 — Techy line-art per pakket-card. Cleane blueprint/wireframe-
// illustraties met subtiele animatie (marcherende dash-lijnen, een
// orbiterende node en een pulserende marker). Per categorie een eigen
// motief + accentkleur; een seed (o.b.v. pkg-id) varieert subtiel.
// ============================================================

import type { IconKey, PkgKind } from "@/lib/catalog";

const PALETTE: Record<IconKey, string> = {
  branding: "#7c5cff",
  print: "#f0a63a",
  websites: "#1f78ff",
  webshop: "#16a34a",
  webapps: "#6d4dff",
  apps: "#0ea3c2",
  organic: "#e05cd6",
  paid: "#0ea3c2",
  seo: "#e0a83a",
  tracking: "#1f9d8f",
  funnels: "#f0743a",
  crm: "#6d4dff",
  hosting: "#10b3a2",
  support: "#16a34a",
};

function seedOf(id: string): number {
  let h = 0;
  for (let i = 0; i < id.length; i++) h = (h * 31 + id.charCodeAt(i)) >>> 0;
  return h;
}

// Per-categorie line-art motief (strokes, gebruikt currentColor via stroke=c).
function motif(cat: IconKey, c: string) {
  const s = { stroke: c, strokeWidth: 1.4, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (cat) {
    case "branding":
      return (<g {...s}><path className="ca-draw" d="M150 20l9 15-9 15-9-15z" /><path d="M150 35l9 15-9 22-9-22z" opacity="0.5" /></g>);
    case "print":
      return (<g {...s}><rect className="ca-draw" x="120" y="18" width="60" height="42" rx="3" /><path d="M130 30h40M130 40h30M130 50h36" opacity="0.6" /></g>);
    case "websites":
      return (<g {...s}><rect className="ca-draw" x="116" y="16" width="68" height="46" rx="4" /><path d="M116 29h68" /><circle cx="123" cy="22.5" r="1.4" fill={c} stroke="none" /><path d="M126 44h30M126 52h20" opacity="0.6" /></g>);
    case "webshop":
      return (<g {...s}><path className="ca-draw" d="M122 26h56l-6 32h-44z" /><path d="M134 26a16 16 0 0132 0" opacity="0.6" /><circle cx="140" cy="64" r="2.4" fill={c} stroke="none" /><circle cx="164" cy="64" r="2.4" fill={c} stroke="none" /></g>);
    case "webapps":
      return (<g {...s}><rect className="ca-draw" x="116" y="16" width="68" height="46" rx="4" /><path d="M138 16v46M116 29h22" /><path d="M148 34h28M148 44h28M148 54h18" opacity="0.55" /></g>);
    case "apps":
      return (<g {...s}><rect className="ca-draw" x="134" y="10" width="32" height="58" rx="6" /><path d="M144 18h12" opacity="0.6" /><circle cx="150" cy="60" r="2.2" fill={c} stroke="none" /></g>);
    case "organic":
      return (<g {...s}><path className="ca-draw" d="M112 42c18 0 18-24 38-24s20 24 38 24" /><path d="M112 54c18 0 18-16 38-16s20 16 38 16" opacity="0.45" /></g>);
    case "paid":
      return (<g {...s}><circle className="ca-draw" cx="150" cy="39" r="26" /><circle cx="150" cy="39" r="14" opacity="0.6" /><path d="M150 8v9M150 61v9M119 39h9M172 39h9" opacity="0.5" /></g>);
    case "seo":
      return (<g {...s}><circle className="ca-draw" cx="140" cy="34" r="19" /><path d="M154 48l17 17" /><path d="M140 22v5M140 41v5M128 34h5M147 34h5" opacity="0.5" /></g>);
    case "tracking":
      return (<g {...s}><path d="M112 64V16M112 64h76" opacity="0.7" /><path className="ca-draw" d="M120 54l14-15 12 8 20-25" /></g>);
    case "funnels":
      return (<g {...s}><path className="ca-draw" d="M116 16h68l-24 27v22l-20-9V43z" /><path d="M134 26h32" opacity="0.55" /></g>);
    case "crm":
      return (<g {...s}><circle className="ca-draw" cx="126" cy="24" r="7" /><circle cx="174" cy="24" r="7" /><circle cx="150" cy="58" r="7" /><path d="M132 29l13 23M168 29l-13 23M134 24h32" opacity="0.55" /></g>);
    case "hosting":
      return (<g {...s}><ellipse className="ca-draw" cx="150" cy="39" rx="34" ry="13" /><ellipse cx="150" cy="39" rx="34" ry="13" transform="rotate(60 150 39)" opacity="0.6" /><ellipse cx="150" cy="39" rx="34" ry="13" transform="rotate(120 150 39)" opacity="0.4" /><circle cx="150" cy="39" r="4" fill={c} stroke="none" /></g>);
    case "support":
      return (<g {...s}><path className="ca-draw" d="M150 12l26 9v17c0 16-11 25-26 32-15-7-26-16-26-32V21z" /><path d="M139 39l7 7 15-16" /></g>);
    default:
      return <circle cx="150" cy="39" r="22" stroke={c} fill="none" />;
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
  const c = PALETTE[cat] ?? "#1f78ff";
  const s = seedOf(id);
  const gid = `ca-${id}`;
  // deterministische orbit-hoek + iso-offset voor variatie
  const orbitDelay = -(s % 40) / 10; // -0..-4s
  const tick = (s >> 3) & 7;

  return (
    <div className={`exp-cardart ${className}`} data-kind={kind} aria-hidden>
      <svg viewBox="0 0 300 80" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`${gid}-g`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor={c} stopOpacity="0.16" />
            <stop offset="1" stopColor={c} stopOpacity="0" />
          </linearGradient>
          <pattern id={`${gid}-grid`} width="16" height="16" patternUnits="userSpaceOnUse">
            <path d="M16 0H0V16" fill="none" stroke={c} strokeOpacity="0.12" strokeWidth="0.6" />
          </pattern>
        </defs>

        {/* blueprint-tint + fijn raster */}
        <rect width="300" height="80" fill={`url(#${gid}-g)`} />
        <rect width="300" height="80" fill={`url(#${gid}-grid)`} />

        {/* iso guide-lijnen (marcherende dash) */}
        <g stroke={c} strokeOpacity="0.35" strokeWidth="0.8" fill="none">
          <path className="ca-march" strokeDasharray="4 6" d="M0 62L300 40" />
          <path className="ca-march2" strokeDasharray="3 7" d="M0 20L300 46" opacity="0.5" />
        </g>

        {/* data-ticks rechtsonder */}
        <g stroke={c} strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round">
          {Array.from({ length: 6 }).map((_, i) => (
            <line key={i} x1={220 + i * 12} y1={68} x2={220 + i * 12} y2={68 - (6 + ((s >> i) & 7) * 4)} />
          ))}
          <line x1={220 + tick * 12} y1={70} x2={220 + tick * 12} y2={52} stroke={c} strokeOpacity="0.9" className="ca-tick" />
        </g>

        {/* categorie-motief (getekend) */}
        {motif(cat, c)}

        {/* orbiterende node rond het motief */}
        <g className="ca-orbit" style={{ animationDelay: `${orbitDelay}s`, transformOrigin: "150px 39px" }}>
          <circle cx="150" cy="8" r="2.6" fill={c} />
        </g>
        {/* pulserende marker */}
        <circle className="ca-pulse" cx="150" cy="39" r="3" fill={c} />
      </svg>
    </div>
  );
}
