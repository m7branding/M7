// ============================================================
// M7 — Card-art: een UNIEKE, concept-gedreven illustratie per pakket.
// Stijl: cleane "product-scènes" — zwevende UI-fragmenten, device-mock-ups
// en abstracte tech line-art die laat zien wát de dienst doet. Subtiel
// geanimeerd (zweven, tekenen, pulsen, scannen).
// Elke pkg.id heeft zijn eigen scène; onbekende id's vallen terug op een
// categorie-motief.
// ============================================================

import type { IconKey, PkgKind } from "@/lib/catalog";

const ACCENT: Record<IconKey, string> = {
  branding: "#7c5cff",
  print: "#e2903a",
  websites: "#1f78ff",
  webshop: "#12a150",
  webapps: "#6d4dff",
  apps: "#0ea3c2",
  organic: "#d94fc4",
  paid: "#0e93c2",
  seo: "#d9a13a",
  tracking: "#12958a",
  funnels: "#e8703a",
  crm: "#6d4dff",
  hosting: "#10b3a2",
  support: "#12a150",
};

const ink = (o: number) => `rgba(22,32,58,${o})`;

// ------------------------------------------------------------ primitives
type Cls = { cls?: string; className?: string; style?: React.CSSProperties };

const Panel = ({
  x, y, w, h, r = 8, cls, className: cn, style, fill = "#fff", stroke, sw = 1.3, o = 1,
}: { x: number; y: number; w: number; h: number; r?: number; fill?: string; stroke?: string; sw?: number; o?: number } & Cls) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={fill} stroke={stroke ?? ink(0.16)} strokeWidth={sw} opacity={o} className={cls ?? cn} style={style} />
);

const Bar = ({ x, y, w, h = 4, c, o = 0.2, r = 2, cls, className: cn, style }: { x: number; y: number; w: number; h?: number; c?: string; o?: number; r?: number } & Cls) => (
  <rect x={x} y={y} width={w} height={h} rx={r} fill={c ?? ink(o)} className={cls ?? cn} style={style} />
);

const Dot = ({ x, y, r = 2.2, c, o = 0.3, cls, className: cn, style }: { x: number; y: number; r?: number; c?: string; o?: number } & Cls) => (
  <circle cx={x} cy={y} r={r} fill={c ?? ink(o)} className={cls ?? cn} style={style} />
);

const Stroke = ({ d, c, o = 0.5, w = 1.4, dash, cls, className: cn, style }: { d: string; c?: string; o?: number; w?: number; dash?: string } & Cls) => (
  <path d={d} fill="none" stroke={c ?? ink(o)} strokeWidth={w} strokeLinecap="round" strokeLinejoin="round" strokeDasharray={dash} className={cls ?? cn} style={style} />
);

const Txt = ({ x, y, t, c, o = 0.62, size = 11, w = 700, anchor = "middle" as const, cls, className: cn }: { x: number; y: number; t: string; c?: string; o?: number; size?: number; w?: number; anchor?: "middle" | "start" | "end" } & Cls) => (
  <text x={x} y={y} textAnchor={anchor} fontSize={size} fontWeight={w} fill={c ?? ink(o)} className={cls ?? cn} style={{ fontFamily: "inherit" }}>{t}</text>
);

/** Browser-venster mock-up. */
const Browser = ({ x, y, w, h, c, cls, children }: { x: number; y: number; w: number; h: number; c: string; children?: React.ReactNode } & Cls) => (
  <g className={cls}>
    <Panel x={x} y={y} w={w} h={h} r={7} />
    <Stroke d={`M${x} ${y + 12}H${x + w}`} o={0.12} w={1.1} />
    <Dot x={x + 7} y={y + 6} r={1.5} c={c} />
    <Dot x={x + 13} y={y + 6} r={1.5} o={0.16} />
    <Dot x={x + 19} y={y + 6} r={1.5} o={0.16} />
    {children}
  </g>
);

/** Telefoon mock-up. */
const Phone = ({ x, y, w = 34, h = 62, c, cls, children }: { x: number; y: number; w?: number; h?: number; c: string; children?: React.ReactNode } & Cls) => (
  <g className={cls}>
    <Panel x={x} y={y} w={w} h={h} r={7} />
    <Bar x={x + w / 2 - 5} y={y + 4} w={10} h={2} o={0.18} />
    {children}
  </g>
);

/** Uren-meter voor de support-plannen (n van 8 segmenten gevuld). */
const Meter = ({ x, y, n, total = 8, c, label }: { x: number; y: number; n: number; total?: number; c: string; label: string }) => (
  <g>
    {Array.from({ length: total }).map((_, i) => (
      <rect key={i} x={x + i * 13} y={y - (i < n ? 6 + i * 2.6 : 4)} width={8} height={i < n ? 6 + i * 2.6 : 4} rx={2}
        fill={i < n ? c : ink(0.13)} opacity={i < n ? 0.9 : 1} className={i < n ? "ca-rise" : undefined}
        style={i < n ? { animationDelay: `${i * 90}ms` } : undefined} />
    ))}
    <Txt x={x + (total * 13) / 2 - 2} y={y + 16} t={label} size={10} o={0.5} />
  </g>
);

// ------------------------------------------------------------ scènes
type Scene = (c: string) => React.ReactNode;

const SCENES: Record<string, Scene> = {
  // ===================================================== BRANDING
  "brand-essentials": (c) => (
    <g>
      <Panel x={92} y={30} w={54} h={54} r={12} cls="ca-float" />
      <g className="ca-float"><circle cx={119} cy={57} r={13} fill="none" stroke={c} strokeWidth={2} /><path d="M119 47l7 12h-14z" fill={c} /></g>
      <g className="ca-float-b">
        <rect x={158} y={30} width={24} height={24} rx={6} fill={c} />
        <rect x={186} y={30} width={24} height={24} rx={6} fill={c} opacity={0.55} />
        <rect x={214} y={30} width={24} height={24} rx={6} fill={ink(0.28)} />
        <Bar x={158} y={64} w={80} h={5} o={0.18} />
        <Bar x={158} y={74} w={52} h={5} o={0.12} />
      </g>
    </g>
  ),
  "brand-startup": (c) => (
    <g>
      <Panel x={72} y={26} w={58} h={62} r={12} cls="ca-float" />
      <Txt x={101} y={64} t="Aa" size={24} c={ink(0.8)} cls="ca-float" />
      <g className="ca-float-b">
        <Panel x={142} y={26} w={86} h={28} r={8} />
        <circle cx={158} cy={40} r={7} fill={c} /><Bar x={172} y={36} w={44} h={4} o={0.18} /><Bar x={172} y={44} w={28} h={4} o={0.1} />
        <Panel x={142} y={60} w={86} h={28} r={8} />
        {[0, 1, 2, 3].map((i) => <rect key={i} x={150 + i * 19} y={68} width={14} height={12} rx={3} fill={i === 0 ? c : ink(0.14 + i * 0.05)} />)}
      </g>
      <Stroke d="M236 34c14 0 14 46 28 46" o={0.14} dash="4 5" cls="ca-march" />
    </g>
  ),
  "brand-rebrand": (c) => (
    <g>
      <Panel x={72} y={34} w={48} h={48} r={12} />
      <rect x={88} y={50} width={16} height={16} rx={4} fill={ink(0.24)} />
      <Stroke d="M132 58h30" c={c} w={1.6} /><Stroke d="M156 53l6 5-6 5" c={c} w={1.6} />
      <Panel x={176} y={30} w={56} h={56} r={14} cls="ca-float" />
      <g className="ca-float"><circle cx={204} cy={58} r={12} fill="none" stroke={c} strokeWidth={2.2} /><circle cx={204} cy={58} r={4} fill={c} /></g>
      <circle cx={232} cy={32} r={3} fill={c} className="ca-blink" />
    </g>
  ),
  "brand-book-plus": (c) => (
    <g>
      <Panel x={92} y={28} w={58} h={62} r={5} />
      <Panel x={150} y={28} w={58} h={62} r={5} />
      <Stroke d="M150 28v62" o={0.16} />
      <Bar x={102} y={40} w={38} h={5} c={c} /><Bar x={102} y={52} w={30} h={4} o={0.16} /><Bar x={102} y={62} w={34} h={4} o={0.16} /><Bar x={102} y={72} w={22} h={4} o={0.1} />
      <rect x={160} y={40} width={38} height={22} rx={4} fill={c} opacity={0.18} />
      <Bar x={160} y={70} w={38} h={4} o={0.16} /><Bar x={160} y={78} w={26} h={4} o={0.1} />
    </g>
  ),
  "brand-mockups": (c) => (
    <g>
      <g className="ca-float">
        <Stroke d="M150 24l38 20-38 20-38-20z" c={c} w={1.5} />
        <Stroke d="M112 44v22l38 20V64" o={0.3} /><Stroke d="M188 44v22l-38 20" o={0.3} />
      </g>
      <Panel x={198} y={44} w={30} h={44} r={6} cls="ca-float-b" />
      <Bar x={206} y={54} w={14} h={3} o={0.16} cls="ca-float-b" />
      <Stroke d="M74 88h152" o={0.1} dash="3 6" />
    </g>
  ),
  "brand-illustration": (c) => (
    <g>
      <Stroke d="M84 78C104 30 146 90 166 46s44-6 56 12" c={c} w={1.8} cls="ca-draw" />
      {[[84, 78], [166, 46], [222, 58]].map(([x, y], i) => (
        <g key={i}><rect x={x - 3.5} y={y - 3.5} width={7} height={7} fill="#fff" stroke={c} strokeWidth={1.4} /></g>
      ))}
      <Stroke d="M166 46l22-14M166 46l-20 12" o={0.22} />
      <Dot x={188} y={32} r={2.4} c={c} /><Dot x={146} y={58} r={2.4} c={c} />
    </g>
  ),
  "brand-logo-export": (c) => (
    <g>
      {["SVG", "PNG", "EPS", "PDF"].map((t, i) => (
        <g key={t} className={i % 2 ? "ca-float-b" : "ca-float"}>
          <Panel x={78 + i * 38} y={38} w={32} h={40} r={6} />
          <Stroke d={`M${98 + i * 38} 38v8h${8}`} o={0.18} />
          <Txt x={94 + i * 38} y={64} t={t} size={8.5} o={0.55} />
        </g>
      ))}
      <Dot x={232} y={44} r={3} c={c} className="ca-blink" />
    </g>
  ),
  "brand-email-sig": (c) => (
    <g>
      <Panel x={86} y={28} w={128} h={62} r={8} />
      <Stroke d="M86 46h128" o={0.12} />
      <Bar x={96} y={35} w={40} h={4} o={0.18} />
      <circle cx={106} cy={64} r={9} fill={c} opacity={0.2} /><circle cx={106} cy={64} r={9} fill="none" stroke={c} strokeWidth={1.2} />
      <Bar x={122} y={57} w={50} h={4.5} c={c} /><Bar x={122} y={66} w={70} h={4} o={0.16} /><Bar x={122} y={74} w={38} h={4} o={0.1} />
      <Stroke d="M214 34l16-6-6 16z" c={c} w={1.4} cls="ca-float" />
    </g>
  ),

  // ===================================================== PRINT
  "print-cards": (c) => (
    <g>
      <g transform="rotate(-8 150 60)"><Panel x={96} y={44} w={78} h={44} r={5} /><Bar x={106} y={58} w={30} h={4} o={0.16} /><Bar x={106} y={68} w={44} h={3.5} o={0.1} /></g>
      <g transform="rotate(6 150 60)" className="ca-float"><Panel x={126} y={30} w={78} h={44} r={5} /><circle cx={142} cy={46} r={6} fill={c} /><Bar x={154} y={44} w={36} h={4} o={0.18} /><Bar x={154} y={53} w={24} h={3.5} o={0.1} /></g>
    </g>
  ),
  "print-flyer": (c) => (
    <g>
      <Panel x={110} y={22} w={80} h={72} r={4} cls="ca-float" />
      <rect x={110} y={22} width={80} height={26} rx={4} fill={c} opacity={0.18} />
      <Stroke d="M150 22v72" o={0.12} dash="4 4" />
      <Bar x={120} y={58} w={26} h={4} o={0.18} /><Bar x={120} y={68} w={20} h={3.5} o={0.1} />
      <Bar x={158} y={58} w={24} h={4} o={0.18} /><Bar x={158} y={68} w={18} h={3.5} o={0.1} />
    </g>
  ),
  "print-brochure": (c) => (
    <g>
      <Panel x={86} y={30} w={52} h={60} r={4} />
      <Panel x={124} y={26} w={52} h={64} r={4} cls="ca-float" />
      <Panel x={162} y={30} w={52} h={60} r={4} />
      <rect x={132} y={34} width={36} height={20} rx={3} fill={c} opacity={0.2} className="ca-float" />
      <Bar x={132} y={62} w={36} h={4} o={0.16} cls="ca-float" /><Bar x={132} y={71} w={24} h={3.5} o={0.1} cls="ca-float" />
      <Bar x={94} y={46} w={30} h={3.5} o={0.1} /><Bar x={170} y={46} w={30} h={3.5} o={0.1} />
    </g>
  ),
  "print-promo": (c) => (
    <g>
      <Panel x={98} y={20} w={38} h={74} r={4} cls="ca-float" />
      <rect x={104} y={28} width={26} height={30} rx={3} fill={c} opacity={0.2} />
      <Bar x={104} y={64} w={26} h={4} o={0.16} /><Bar x={104} y={73} w={18} h={3.5} o={0.1} />
      <Stroke d="M104 94h26" o={0.3} w={2} />
      <Panel x={152} y={34} w={56} h={46} r={4} />
      <Txt x={180} y={62} t="%" size={20} c={c} />
      <Dot x={216} y={36} r={3} c={c} className="ca-blink" />
    </g>
  ),
  "print-invite": (c) => (
    <g>
      <Panel x={102} y={38} w={96} h={54} r={5} />
      <Stroke d="M102 38l48 30 48-30" c={c} w={1.5} />
      <Panel x={122} y={20} w={56} h={34} r={4} cls="ca-float" />
      <Bar x={132} y={30} w={36} h={4} c={c} cls="ca-float" /><Bar x={132} y={40} w={24} h={3.5} o={0.14} cls="ca-float" />
    </g>
  ),

  // ===================================================== WEBSITES
  "web-essential": (c) => (
    <g>
      <Browser x={84} y={22} w={132} h={72} c={c}>
        <rect x={92} y={34} width={116} height={26} rx={4} fill={c} opacity={0.14} />
        <Bar x={100} y={42} w={48} h={5} c={c} /><Bar x={100} y={52} w={32} h={4} o={0.16} />
        {[0, 1, 2].map((i) => <rect key={i} x={92 + i * 40} y={66} width={34} height={18} rx={3} fill={ink(0.08)} />)}
      </Browser>
      <g className="ca-float-b">{[0, 1, 2, 3, 4].map((i) => <Dot key={i} x={228} y={34 + i * 11} r={2.4} c={i === 0 ? c : undefined} o={0.18} />)}</g>
    </g>
  ),
  "web-pro": (c) => (
    <g>
      <Browser x={70} y={22} w={112} h={72} c={c}>
        <Bar x={78} y={40} w={40} h={5} c={c} /><Bar x={78} y={50} w={70} h={4} o={0.14} />
        <rect x={78} y={60} width={96} height={26} rx={4} fill={ink(0.07)} />
      </Browser>
      <g className="ca-float-b">
        <Panel x={196} y={26} w={44} h={16} r={5} /><Txt x={218} y={37} t="CMS" size={8} c={c} />
        <Stroke d="M218 42v10h-14v8M218 52v8" o={0.22} />
        <Panel x={188} y={60} w={30} h={14} r={4} /><Panel x={222} y={60} w={30} h={14} r={4} />
      </g>
    </g>
  ),
  "web-premium": (c) => (
    <g>
      <Panel x={70} y={34} w={108} h={58} r={7} o={0.5} />
      <Panel x={82} y={28} w={108} h={58} r={7} o={0.75} />
      <Browser x={94} y={22} w={112} h={64} c={c} cls="ca-float">
        <rect x={102} y={38} width={96} height={20} rx={4} fill={c} opacity={0.16} />
        <Bar x={102} y={62} w={44} h={4} o={0.16} /><Bar x={102} y={70} w={62} h={4} o={0.1} />
      </Browser>
      <Stroke d="M216 34l4 8 8 4-8 4-4 8-4-8-8-4 8-4z" c={c} w={1.3} cls="ca-blink" />
    </g>
  ),
  "web-styleframing": (c) => (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i} className={i === 1 ? "ca-float" : undefined}>
          <Panel x={78 + i * 52} y={i === 1 ? 24 : 30} w={44} h={i === 1 ? 66 : 58} r={6} stroke={i === 1 ? c : undefined} sw={i === 1 ? 1.6 : 1.3} />
          <rect x={86 + i * 52} y={(i === 1 ? 24 : 30) + 8} width={28} height={16} rx={3} fill={i === 1 ? c : ink(0.12)} opacity={i === 1 ? 0.55 : 1} />
          <Bar x={86 + i * 52} y={(i === 1 ? 24 : 30) + 32} w={28} h={3.5} o={0.14} />
          <Bar x={86 + i * 52} y={(i === 1 ? 24 : 30) + 40} w={20} h={3.5} o={0.1} />
        </g>
      ))}
      <Dot x={144} y={18} r={3} c={c} className="ca-blink" />
    </g>
  ),
  "web-content": (c) => (
    <g>
      <Panel x={92} y={22} w={116} h={72} r={7} />
      <Bar x={104} y={34} w={54} h={6} c={c} />
      <Bar x={104} y={48} w={92} h={4} o={0.16} /><Bar x={104} y={58} w={84} h={4} o={0.16} />
      <Bar x={104} y={68} w={70} h={4} o={0.16} /><Bar x={104} y={78} w={40} h={4} o={0.1} />
      <rect x={146} y={74} width={1.6} height={11} fill={c} className="ca-blink" />
    </g>
  ),
  "web-animations": (c) => (
    <g>
      <Stroke d="M76 84C112 84 116 30 150 30s40 54 74 54" c={c} w={1.6} dash="120 200" cls="ca-draw" />
      <Stroke d="M76 84C112 84 116 30 150 30s40 54 74 54" o={0.1} />
      <circle r={4} fill={c} className="ca-orbit-path"><animateMotion dur="4.5s" repeatCount="indefinite" path="M76 84C112 84 116 30 150 30s40 54 74 54" /></circle>
      <Dot x={76} y={84} r={2.6} o={0.25} /><Dot x={224} y={84} r={2.6} o={0.25} />
    </g>
  ),
  "web-media": (c) => (
    <g>
      <Panel x={92} y={26} w={84} h={62} r={7} />
      <Stroke d="M100 74l18-18 14 12 12-10 24 20" o={0.2} />
      <circle cx={134} cy={44} r={6} fill={c} opacity={0.35} />
      <g className="ca-float-b"><Panel x={186} y={40} w={44} h={34} r={8} /><path d="M203 50l12 7-12 7z" fill={c} /></g>
      <Stroke d="M182 30l3 6 6 3-6 3-3 6-3-6-6-3 6-3z" c={c} w={1.2} cls="ca-blink" />
    </g>
  ),
  "web-landingblocks": (c) => (
    <g>
      <Panel x={94} y={20} w={110} h={80} r={7} />
      <rect x={104} y={30} width={90} height={18} rx={4} fill={c} opacity={0.18} />
      <rect x={104} y={54} width={42} height={16} rx={4} fill={ink(0.09)} />
      <rect x={152} y={54} width={42} height={16} rx={4} fill={ink(0.09)} />
      <g className="ca-float"><rect x={196} y={70} width={46} height={18} rx={4} fill="#fff" stroke={c} strokeWidth={1.4} strokeDasharray="4 4" /><Stroke d="M219 75v8M215 79h8" c={c} w={1.4} /></g>
    </g>
  ),
  "web-popups": (c) => (
    <g>
      <Panel x={78} y={26} w={116} h={68} r={7} o={0.6} />
      <Bar x={88} y={38} w={50} h={4} o={0.12} /><Bar x={88} y={48} w={70} h={4} o={0.08} />
      <g className="ca-float">
        <Panel x={140} y={40} w={92} h={50} r={9} stroke={c} sw={1.5} />
        <Bar x={152} y={52} w={46} h={5} c={c} /><Bar x={152} y={62} w={62} h={4} o={0.14} />
        <rect x={152} y={72} width={38} height={11} rx={5.5} fill={c} />
      </g>
      <Dot x={236} y={38} r={2.6} c={c} className="ca-blink" />
    </g>
  ),
  "web-contentmodel": (c) => (
    <g>
      <Panel x={128} y={20} w={46} h={18} r={5} stroke={c} sw={1.5} />
      <Stroke d="M151 38v10M92 62V48h118v14" o={0.22} />
      <Panel x={70} y={62} w={44} h={18} r={5} />
      <Panel x={128} y={62} w={44} h={18} r={5} />
      <Panel x={186} y={62} w={44} h={18} r={5} />
      <Stroke d="M92 80v10M150 80v10" o={0.16} dash="3 4" cls="ca-march" />
      <Dot x={151} y={29} r={2.4} c={c} />
    </g>
  ),
  "web-migration": (c) => (
    <g>
      <Panel x={64} y={32} w={62} h={52} r={6} o={0.65} />
      <Bar x={74} y={44} w={32} h={4} o={0.14} /><Bar x={74} y={54} w={42} h={4} o={0.1} />
      <Stroke d="M136 58h34" c={c} w={1.8} /><Stroke d="M164 52l6 6-6 6" c={c} w={1.8} />
      <Txt x={153} y={48} t="301" size={9} c={c} />
      <Browser x={180} y={26} w={62} h={62} c={c} cls="ca-float">
        <rect x={188} y={42} width={46} height={14} rx={3} fill={c} opacity={0.16} />
        <Bar x={188} y={62} w={34} h={4} o={0.14} />
      </Browser>
    </g>
  ),
  "web-golive": (c) => (
    <g>
      <Stroke d="M150 88c-14-14-14-38 0-54 14 16 14 40 0 54z" c={c} w={1.6} cls="ca-float" />
      <circle cx={150} cy={46} r={5} fill="#fff" stroke={c} strokeWidth={1.4} className="ca-float" />
      <Stroke d="M138 84l-10 10M162 84l10 10" c={c} o={0.5} w={1.4} dash="3 4" cls="ca-march" />
      <g className="ca-float-b">
        <Panel x={198} y={38} w={44} h={40} r={7} />
        {[0, 1, 2].map((i) => <g key={i}><Stroke d={`M206 ${48 + i * 11}l3 3 5-6`} c={c} w={1.4} /><Bar x={220} y={46 + i * 11} w={14} h={3.5} o={0.14} /></g>)}
      </g>
    </g>
  ),

  // ===================================================== WEBSHOP
  "shop-start": (c) => (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}><Panel x={72 + (i % 2) * 44} y={26 + Math.floor(i / 2) * 38} w={38} h={32} r={5} />
          <rect x={78 + (i % 2) * 44} y={32 + Math.floor(i / 2) * 38} width={26} height={13} rx={3} fill={ink(0.1)} />
          <Bar x={78 + (i % 2) * 44} y={50 + Math.floor(i / 2) * 38} w={16} h={3.5} c={i === 0 ? c : undefined} o={0.14} /></g>
      ))}
      <g className="ca-float-b">
        <Stroke d="M180 34h10l6 30h30l6-22" c={c} w={1.6} />
        <Dot x={198} y={72} r={3} c={c} /><Dot x={224} y={72} r={3} c={c} />
        <circle cx={230} cy={32} r={8} fill={c} /><Txt x={230} y={35.5} t="3" size={9} c="#fff" />
      </g>
    </g>
  ),
  "shop-pro": (c) => (
    <g>
      <Panel x={76} y={22} w={104} h={74} r={8} />
      <Bar x={88} y={34} w={44} h={5} c={c} />
      <Stroke d="M76 46h104" o={0.1} />
      {[0, 1].map((i) => <g key={i}><Bar x={88} y={54 + i * 12} w={46} h={4} o={0.14} /><Bar x={150} y={54 + i * 12} w={20} h={4} o={0.1} /></g>)}
      <Stroke d="M88 80h82" o={0.12} dash="3 4" />
      <Txt x={96} y={92} t="VAT" size={8.5} c={c} anchor="start" />
      <Bar x={150} y={86} w={20} h={5} c={c} />
      <g className="ca-float-b"><Panel x={192} y={38} w={44} h={52} r={6} /><Stroke d="M214 38v8h8" o={0.18} /><Bar x={200} y={54} w={28} h={3.5} o={0.14} /><Bar x={200} y={62} w={20} h={3.5} o={0.1} /><Bar x={200} y={74} w={28} h={5} c={c} /></g>
    </g>
  ),
  "shop-scale": (c) => (
    <g>
      <circle cx={150} cy={56} r={16} fill="#fff" stroke={c} strokeWidth={1.6} />
      <Txt x={150} y={60} t="€" size={13} c={c} />
      {[[86, 30], [86, 82], [214, 30], [214, 82]].map(([x, y], i) => (
        <g key={i}><Panel x={x - 20} y={y - 11} w={40} h={22} r={6} cls={i % 2 ? "ca-float-b" : "ca-float"} />
          <Stroke d={`M${x < 150 ? x + 20 : x - 20} ${y} L${x < 150 ? 134 : 166} 56`} o={0.18} dash="3 4" cls="ca-march" /></g>
      ))}
    </g>
  ),

  // ===================================================== WEB-APPS
  "wapp-portal": (c) => (
    <g>
      <Panel x={76} y={22} w={148} h={74} r={8} />
      <Stroke d="M112 22v74" o={0.12} /><Stroke d="M76 38h148" o={0.1} />
      {[0, 1, 2].map((i) => <Bar key={i} x={84} y={48 + i * 12} w={20} h={4} c={i === 0 ? c : undefined} o={0.12} />)}
      <rect x={122} y={48} width={44} height={18} rx={4} fill={ink(0.07)} />
      <rect x={172} y={48} width={44} height={18} rx={4} fill={ink(0.07)} />
      <rect x={122} y={72} width={94} height={16} rx={4} fill={c} opacity={0.12} />
      <g className="ca-float-b"><circle cx={206} cy={30} r={7} fill={c} opacity={0.9} /><Stroke d="M203 30v-2.5a3 3 0 016 0V30" c="#fff" w={1.2} /><rect x={202.5} y={30} width={7} height={5} rx={1.4} fill="#fff" /></g>
    </g>
  ),
  "wapp-flow": (c) => (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx={92 + i * 42} cy={34} r={10} fill={i === 0 ? c : "#fff"} stroke={i === 0 ? c : ink(0.2)} strokeWidth={1.4} />
          <Txt x={92 + i * 42} y={37.5} t={`${i + 1}`} size={9} c={i === 0 ? "#fff" : ink(0.5)} />
          {i < 2 && <Stroke d={`M${104 + i * 42} 34h18`} o={0.2} dash="3 3" cls="ca-march" />}
        </g>
      ))}
      <Panel x={78} y={54} w={100} h={38} r={7} />
      <Bar x={88} y={64} w={48} h={4} o={0.16} /><Bar x={88} y={74} w={64} h={4} o={0.1} />
      <g className="ca-float-b"><Panel x={192} y={44} w={52} h={34} r={7} stroke={c} sw={1.5} /><Bar x={200} y={54} w={36} h={4} o={0.16} /><rect x={200} y={64} width={22} height={8} rx={4} fill={c} /></g>
    </g>
  ),
  "wapp-loyalty": (c) => (
    <g>
      {[0, 1, 2, 3, 4].map((i) => (
        <path key={i} d={`M${88 + i * 20} 34l3.2 6.6 7.3 1-5.3 5.1 1.3 7.2-6.5-3.4-6.5 3.4 1.3-7.2-5.3-5.1 7.3-1z`}
          fill={i < 3 ? c : ink(0.14)} className={i < 3 ? "ca-blink" : undefined} style={{ animationDelay: `${i * 200}ms` }} />
      ))}
      {[0, 1, 2].map((i) => (
        <g key={i}><rect x={96 + i * 40} y={72 - i * 0} width={32} height={8 + i * 8} rx={3} fill={c} opacity={0.2 + i * 0.25} transform={`translate(0 ${-i * 8})`} /></g>
      ))}
      <Stroke d="M88 88h124" o={0.12} />
    </g>
  ),

  // ===================================================== APPS
  "mob-strategy": (c) => (
    <g>
      <Stroke d="M74 70h152" o={0.16} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <circle cx={92 + i * 42} cy={70} r={i === 0 ? 6 : 4.5} fill={i === 0 ? c : "#fff"} stroke={i === 0 ? c : ink(0.25)} strokeWidth={1.4} />
          <Panel x={72 + i * 42} y={30 + (i % 2) * 8} w={40} h={22} r={5} cls={i % 2 ? "ca-float-b" : "ca-float"} />
          <Bar x={78 + i * 42} y={38 + (i % 2) * 8} w={20} h={3.5} c={i === 0 ? c : undefined} o={0.14} />
          <Stroke d={`M${92 + i * 42} ${52 + (i % 2) * 8}v${18 - (i % 2) * 8}`} o={0.14} dash="3 3" />
        </g>
      ))}
    </g>
  ),
  "mob-uiux": (c) => (
    <g>
      {[0, 1, 2].map((i) => (
        <Phone key={i} x={82 + i * 52} y={22} c={c} cls={i === 1 ? "ca-float" : undefined}>
          <rect x={88 + i * 52} y={32} width={22} height={i === 1 ? 22 : 14} rx={3} fill={i === 1 ? c : ink(0.1)} opacity={i === 1 ? 0.4 : 1} />
          <Bar x={88 + i * 52} y={i === 1 ? 60 : 52} w={22} h={3} o={0.14} />
          <Bar x={88 + i * 52} y={i === 1 ? 68 : 60} w={14} h={3} o={0.1} />
        </Phone>
      ))}
      {[0, 1].map((i) => <Stroke key={i} d={`M${118 + i * 52} 52h${12}`} c={c} o={0.5} w={1.4} dash="3 3" cls="ca-march" />)}
    </g>
  ),
  "mob-build": (c) => (
    <g>
      <Phone x={88} y={20} w={40} h={76} c={c} cls="ca-float">
        <rect x={94} y={32} width={28} height={30} rx={4} fill={c} opacity={0.18} />
        <Bar x={94} y={68} w={28} h={3.5} o={0.14} /><Bar x={94} y={76} w={18} h={3.5} o={0.1} />
      </Phone>
      <g className="ca-float-b">
        {[0, 1, 2].map((i) => (
          <g key={i}><Panel x={150 + i * 34} y={30} w={28} h={54} r={5} />
            {[0, 1].map((j) => <rect key={j} x={155 + i * 34} y={38 + j * 14} width={18} height={10} rx={2.5} fill={i === 0 && j === 0 ? c : ink(0.1)} opacity={i === 0 && j === 0 ? 0.6 : 1} />)}</g>
        ))}
      </g>
    </g>
  ),

  // ===================================================== ORGANIC
  "org-social-basic": (c) => (
    <g>
      <Panel x={104} y={20} w={92} h={80} r={9} cls="ca-float" />
      <g className="ca-float">
        <circle cx={118} cy={34} r={6} fill={c} opacity={0.35} /><Bar x={130} y={31} w={34} h={4} o={0.16} />
        <rect x={112} y={46} width={76} height={32} rx={5} fill={ink(0.08)} />
        <Stroke d="M120 66l10-9 8 7 7-6 14 12" o={0.18} />
        <Stroke d="M116 88c-3-3-3-7 0-9 2-1.5 4-.5 5 1 1-1.5 3-2.5 5-1 3 2 3 6 0 9l-5 4z" c={c} w={1.3} />
      </g>
    </g>
  ),
  "org-social-reels": (c) => (
    <g>
      <Panel x={74} y={26} w={72} h={68} r={8} />
      <rect x={82} y={34} width={56} height={28} rx={4} fill={ink(0.08)} />
      <Bar x={82} y={70} w={40} h={4} o={0.14} /><Bar x={82} y={78} w={28} h={4} o={0.1} />
      <g className="ca-float">
        <Panel x={162} y={20} w={64} h={80} r={9} stroke={c} sw={1.5} />
        <rect x={170} y={28} width={48} height={52} rx={5} fill={c} opacity={0.14} />
        <circle cx={194} cy={54} r={11} fill="#fff" stroke={c} strokeWidth={1.4} /><path d="M191 49l8 5-8 5z" fill={c} />
        <Bar x={170} y={88} w={34} h={3.5} o={0.14} />
      </g>
    </g>
  ),
  "org-social-pro": (c) => (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i}><Panel x={70 + i * 40} y={30} w={34} h={34} r={5} /><rect x={75 + i * 40} y={35} width={24} height={16} rx={3} fill={ink(0.09)} /><Bar x={75 + i * 40} y={56} w={16} h={3} o={0.12} /></g>
      ))}
      {[0, 1, 2].map((i) => (
        <g key={`b${i}`}><Panel x={70 + i * 40} y={70} w={34} h={26} r={5} /><Bar x={75 + i * 40} y={78} w={20} h={3} o={0.12} /><Bar x={75 + i * 40} y={86} w={14} h={3} o={0.08} /></g>
      ))}
      <g className="ca-float"><Panel x={198} y={34} w={44} h={62} r={8} stroke={c} sw={1.5} /><circle cx={220} cy={62} r={11} fill="#fff" stroke={c} strokeWidth={1.4} /><path d="M217 57l8 5-8 5z" fill={c} /></g>
    </g>
  ),
  "org-airender": (c) => (
    <g>
      <Panel x={70} y={30} w={62} h={58} r={6} />
      <Stroke d="M80 74c8-18 14-26 20-26s10 10 22 20" o={0.28} dash="4 4" />
      <Stroke d="M92 48a6 6 0 1112 0" o={0.2} dash="3 3" />
      <Stroke d="M142 58h18" c={c} w={1.6} /><Stroke d="M154 53l6 5-6 5" c={c} w={1.6} />
      <Panel x={170} y={26} w={62} h={62} r={6} cls="ca-float" />
      <rect x={176} y={32} width={50} height={50} rx={4} fill={c} opacity={0.16} className="ca-float" />
      <Stroke d="M180 76l14-14 10 9 8-7 12 12" c={c} o={0.6} w={1.4} cls="ca-float" />
      <Stroke d="M238 30l2.6 5.4 5.4 2.6-5.4 2.6-2.6 5.4-2.6-5.4-5.4-2.6 5.4-2.6z" c={c} w={1.2} cls="ca-blink" />
    </g>
  ),
  "org-aimotion": (c) => (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <g key={i} style={{ animationDelay: `${i * 180}ms` }} className="ca-blink">
          <Panel x={78 + i * 40} y={34} w={34} h={46} r={5} o={1 - i * 0.16} />
          <rect x={84 + i * 40} y={42} width={22} height={22} rx={3} fill={c} opacity={0.3 - i * 0.06} />
        </g>
      ))}
      <Stroke d="M78 90h156" o={0.1} dash="4 5" cls="ca-march" />
      <Dot x={230} y={30} r={3} c={c} className="ca-blink" />
    </g>
  ),
  "org-ai": (c) => (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <Panel x={88 + (i % 2) * 46} y={26 + Math.floor(i / 2) * 42} w={40} h={36} r={6} />
          <rect x={94 + (i % 2) * 46} y={32 + Math.floor(i / 2) * 42} width={28} height={24} rx={3} fill={c} opacity={0.1 + i * 0.06} />
        </g>
      ))}
      <g className="ca-float-b">
        <Stroke d="M196 34l3.4 7 7 3.4-7 3.4-3.4 7-3.4-7-7-3.4 7-3.4z" c={c} w={1.4} />
        <Stroke d="M218 62l2.2 4.6 4.6 2.2-4.6 2.2-2.2 4.6-2.2-4.6-4.6-2.2 4.6-2.2z" c={c} w={1.2} o={0.7} />
      </g>
    </g>
  ),
  "org-video": (c) => (
    <g>
      <Panel x={82} y={24} w={102} h={54} r={7} />
      <Stroke d="M82 38h102" o={0.12} />
      <path d="M92 28l10 8M108 28l10 8M124 28l10 8M140 28l10 8" stroke={ink(0.2)} strokeWidth={1.4} fill="none" />
      <circle cx={133} cy={58} r={11} fill="#fff" stroke={c} strokeWidth={1.5} /><path d="M130 53l8 5-8 5z" fill={c} />
      <g className="ca-float-b">
        <Panel x={196} y={34} w={40} h={34} r={6} />
        {[0, 1, 2].map((i) => <rect key={i} x={202} y={40 + i * 9} width={28 - i * 6} height={5} rx={2.5} fill={i === 0 ? c : ink(0.14)} />)}
      </g>
      <Stroke d="M82 88h152" o={0.1} dash="6 5" cls="ca-march" />
    </g>
  ),
  "org-podcast": (c) => (
    <g>
      <g className="ca-float">
        <rect x={112} y={22} width={20} height={34} rx={10} fill="#fff" stroke={c} strokeWidth={1.6} />
        <Stroke d="M104 48a18 18 0 0036 0" c={c} w={1.5} />
        <Stroke d="M122 66v12M112 78h20" o={0.3} w={1.6} />
      </g>
      <g>
        {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => {
          const h = [10, 20, 32, 24, 38, 18, 26, 12][i];
          return <rect key={i} x={158 + i * 11} y={58 - h / 2} width={4.5} height={h} rx={2.2} fill={c} opacity={0.35 + (i % 3) * 0.2} className="ca-rise" style={{ animationDelay: `${i * 110}ms` }} />;
        })}
      </g>
    </g>
  ),

  // ===================================================== PAID ADS
  "ads-starter": (c) => (
    <g>
      <Panel x={92} y={22} w={80} h={74} r={8} cls="ca-float" />
      <rect x={100} y={30} width={64} height={30} rx={4} fill={c} opacity={0.16} className="ca-float" />
      <Bar x={100} y={68} w={44} h={4} o={0.16} cls="ca-float" />
      <rect x={100} y={78} width={34} height={10} rx={5} fill={c} className="ca-float" />
      <g className="ca-float-b">
        <circle cx={210} cy={54} r={20} fill="none" stroke={c} strokeWidth={1.4} />
        <circle cx={210} cy={54} r={11} fill="none" stroke={c} strokeWidth={1.4} opacity={0.6} />
        <circle cx={210} cy={54} r={3.5} fill={c} className="ca-pulse-sm" />
      </g>
    </g>
  ),
  "ads-growth": (c) => (
    <g>
      <Panel x={74} y={28} w={56} h={58} r={7} />
      <Txt x={102} y={40} t="A" size={11} c={ink(0.55)} />
      <rect x={82} y={46} width={40} height={20} rx={3} fill={ink(0.09)} />
      <Bar x={82} y={72} w={28} h={4} o={0.14} />
      <Panel x={144} y={22} w={56} h={64} r={7} stroke={c} sw={1.6} cls="ca-float" />
      <Txt x={172} y={36} t="B" size={11} c={c} cls="ca-float" />
      <rect x={152} y={42} width={40} height={22} rx={3} fill={c} opacity={0.18} className="ca-float" />
      <Bar x={152} y={70} w={30} h={4} c={c} cls="ca-float" />
      <g className="ca-float-b"><Stroke d="M214 76l10-14 8 6 10-20" c={c} w={1.8} cls="ca-draw" /><Stroke d="M234 42h8v8" c={c} w={1.6} /></g>
    </g>
  ),
  "ads-scale": (c) => (
    <g>
      <Panel x={70} y={20} w={160} h={80} r={9} />
      <Stroke d="M70 36h160" o={0.1} />
      <Bar x={80} y={26} w={36} h={4.5} c={c} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}><rect x={80 + i * 38} y={46} width={30} height={16} rx={4} fill={i === 0 ? c : ink(0.09)} opacity={i === 0 ? 0.5 : 1} />
          <Bar x={80 + i * 38} y={68} w={22} h={3.5} o={0.12} /></g>
      ))}
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const h = [8, 14, 11, 20, 16, 26][i];
        return <rect key={`b${i}`} x={82 + i * 25} y={92 - h} width={9} height={h} rx={2.5} fill={c} opacity={0.25 + i * 0.12} className="ca-rise" style={{ animationDelay: `${i * 100}ms` }} />;
      })}
    </g>
  ),

  // ===================================================== SEO / AEO
  "seo-boost": (c) => (
    <g>
      <Panel x={78} y={26} w={144} h={68} r={8} />
      <rect x={88} y={36} width={90} height={12} rx={6} fill={ink(0.07)} />
      <circle cx={196} cy={42} r={7} fill="none" stroke={c} strokeWidth={1.5} /><Stroke d="M201 47l6 6" c={c} w={1.5} />
      <Bar x={88} y={58} w={70} h={5} c={c} /><Bar x={88} y={70} w={112} h={4} o={0.14} /><Bar x={88} y={80} w={86} h={4} o={0.1} />
      <Dot x={82} y={60} r={2} c={c} />
    </g>
  ),
  "seo-growth": (c) => (
    <g>
      <Stroke d="M76 88V26M76 88h152" o={0.14} />
      <Stroke d="M86 80l28-14 26 8 30-24 34-18" c={c} w={2} cls="ca-draw" />
      {[[86, 80], [114, 66], [140, 74], [170, 50], [204, 32]].map(([x, y], i) => <Dot key={i} x={x} y={y} r={2.6} c={c} />)}
      <g className="ca-float-b">
        <Panel x={188} y={54} w={44} h={34} r={6} />
        <Bar x={196} y={62} w={28} h={3.5} o={0.16} /><Bar x={196} y={70} w={20} h={3.5} o={0.1} /><Bar x={196} y={78} w={24} h={3.5} o={0.1} />
      </g>
    </g>
  ),
  "seo-authority": (c) => (
    <g>
      <circle cx={150} cy={58} r={15} fill="#fff" stroke={c} strokeWidth={1.8} />
      <Txt x={150} y={62} t="M7" size={9} c={c} />
      {[[86, 30], [80, 74], [126, 92], [214, 34], [222, 76], [172, 94]].map(([x, y], i) => (
        <g key={i}>
          <Stroke d={`M${x} ${y}L${150 + (x < 150 ? -14 : 14)} ${58 + (y < 58 ? -6 : 6)}`} o={0.16} dash="3 4" cls="ca-march" />
          <circle cx={x} cy={y} r={5.5} fill="#fff" stroke={ink(0.22)} strokeWidth={1.3} />
          <Dot x={x} y={y} r={1.8} c={c} o={0.5} />
        </g>
      ))}
    </g>
  ),
  "aeo-answers": (c) => (
    <g>
      <Panel x={76} y={22} w={112} h={72} r={9} />
      <g><Stroke d="M86 34l2.6 5.4 5.4 2.6-5.4 2.6L86 50l-2.6-5.4L78 42l5.4-2.6z" c={c} w={1.3} cls="ca-blink" /></g>
      <Bar x={98} y={38} w={54} h={4.5} c={c} />
      <Bar x={86} y={54} w={92} h={4} o={0.14} /><Bar x={86} y={64} w={80} h={4} o={0.14} /><Bar x={86} y={74} w={58} h={4} o={0.1} />
      <g className="ca-float-b">
        <Panel x={198} y={30} w={42} h={22} r={5} /><Txt x={219} y={44} t="FAQ" size={8.5} c={ink(0.5)} />
        <Panel x={198} y={60} w={42} h={22} r={5} stroke={c} sw={1.4} /><Txt x={219} y={74} t="{ }" size={9} c={c} />
      </g>
    </g>
  ),

  // ===================================================== TRACKING
  "trk-foundation": (c) => (
    <g>
      <Browser x={74} y={22} w={104} h={60} c={c}>
        <Bar x={84} y={42} w={44} h={4} o={0.14} /><Bar x={84} y={52} w={64} h={4} o={0.1} />
      </Browser>
      <g className="ca-float">
        <Panel x={82} y={66} w={88} h={26} r={7} stroke={c} sw={1.4} />
        <Bar x={90} y={74} w={40} h={3.5} o={0.16} />
        <rect x={136} y={72} width={26} height={11} rx={5.5} fill={c} />
      </g>
      <g className="ca-float-b">
        <Stroke d="M198 34l14 8v16l-14 8-14-8V42z" c={c} w={1.5} />
        <Txt x={198} y={54} t="GA4" size={7.5} c={c} />
      </g>
    </g>
  ),
  "trk-server": (c) => (
    <g>
      <Panel x={64} y={44} w={44} h={32} r={6} />
      <Bar x={72} y={54} w={26} h={3.5} o={0.14} /><Bar x={72} y={62} w={18} h={3.5} o={0.1} />
      <Stroke d="M110 60h24" c={c} o={0.5} w={1.4} dash="3 3" cls="ca-march" />
      <g className="ca-float">
        <Panel x={136} y={34} w={44} h={52} r={7} stroke={c} sw={1.5} />
        {[0, 1, 2].map((i) => <g key={i}><rect x={144} y={42 + i * 15} width={28} height={11} rx={3} fill={ink(0.07)} /><Dot x={149} y={47.5 + i * 15} r={1.8} c={c} /></g>)}
      </g>
      {[0, 1, 2].map((i) => (
        <g key={`o${i}`}>
          <Stroke d={`M182 60L206 ${34 + i * 26}`} o={0.16} dash="3 4" cls="ca-march" />
          <Panel x={206} y={26 + i * 26} w={34} h={16} r={5} />
        </g>
      ))}
    </g>
  ),
  "trk-insights": (c) => (
    <g>
      <Panel x={70} y={20} w={160} h={80} r={9} />
      <Stroke d="M70 36h160M150 36v64" o={0.1} />
      <Bar x={80} y={26} w={40} h={4.5} c={c} />
      {[0, 1, 2, 3, 4].map((i) => {
        const h = [12, 22, 16, 30, 24][i];
        return <rect key={i} x={82 + i * 13} y={90 - h} width={8} height={h} rx={2.5} fill={c} opacity={0.3 + i * 0.14} className="ca-rise" style={{ animationDelay: `${i * 110}ms` }} />;
      })}
      {[0, 1, 2].map((i) => (
        <g key={`f${i}`}><rect x={160 + i * 6} y={46 + i * 15} width={60 - i * 12} height={11} rx={3} fill={c} opacity={0.5 - i * 0.13} /></g>
      ))}
    </g>
  ),

  // ===================================================== FUNNELS
  "fun-calc": (c) => (
    <g>
      <Panel x={92} y={20} w={72} h={80} r={9} cls="ca-float" />
      <g className="ca-float">
        <rect x={100} y={28} width={56} height={18} rx={4} fill={ink(0.07)} />
        <Txt x={150} y={41} t="€ 12.400" size={9} c={c} anchor="end" />
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <rect key={i} x={100 + (i % 3) * 20} y={54 + Math.floor(i / 3) * 15} width={16} height={11} rx={3} fill={i === 8 ? c : ink(0.08)} />
        ))}
      </g>
      <g className="ca-float-b"><Stroke d="M180 76l12-16 10 8 14-24" c={c} w={1.8} cls="ca-draw" /><Dot x={216} y={44} r={3} c={c} /></g>
    </g>
  ),
  "fun-quote": (c) => (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <circle cx={86 + i * 30} cy={30} r={8} fill={i < 2 ? c : "#fff"} stroke={i < 2 ? c : ink(0.2)} strokeWidth={1.4} />
          {i < 2 ? <Stroke d={`M${82 + i * 30} 30l3 3 5-6`} c="#fff" w={1.4} /> : <Txt x={86 + i * 30} y={33.5} t="3" size={8} c={ink(0.45)} />}
          {i < 2 && <Stroke d={`M${96 + i * 30} 30h${10}`} o={0.2} />}
        </g>
      ))}
      <Panel x={72} y={48} w={94} h={44} r={7} />
      <Bar x={82} y={58} w={54} h={4} o={0.16} /><Bar x={82} y={68} w={70} h={4} o={0.1} /><rect x={82} y={78} width={34} height={8} rx={4} fill={c} />
      <g className="ca-float-b"><Panel x={186} y={30} w={48} h={60} r={6} /><Stroke d="M210 30v10h10" o={0.18} /><Bar x={194} y={50} w={32} h={3.5} o={0.14} /><Bar x={194} y={58} w={24} h={3.5} o={0.1} /><Txt x={210} y={80} t="PDF" size={8.5} c={c} /></g>
    </g>
  ),
  "fun-config": (c) => (
    <g>
      <Panel x={70} y={26} w={68} h={68} r={8} />
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={78} y={36 + i * 18} width={52} height={13} rx={4} fill={i === 1 ? c : ink(0.07)} opacity={i === 1 ? 0.45 : 1} />
          <circle cx={86} cy={42.5 + i * 18} r={3.4} fill={i === 1 ? c : "#fff"} stroke={i === 1 ? c : ink(0.25)} strokeWidth={1.2} />
        </g>
      ))}
      <Stroke d="M148 60h20" c={c} w={1.6} /><Stroke d="M162 55l6 5-6 5" c={c} w={1.6} />
      <Panel x={178} y={24} w={62} h={72} r={9} cls="ca-float" />
      <g className="ca-float"><rect x={188} y={34} width={42} height={34} rx={5} fill={c} opacity={0.16} /><Stroke d="M196 60l10-10 8 7 8-6" c={c} o={0.6} w={1.4} /><Bar x={188} y={76} w={30} h={4} o={0.14} /></g>
    </g>
  ),
  "fun-ebook": (c) => (
    <g>
      <g className="ca-float">
        <Panel x={82} y={22} w={56} h={70} r={5} />
        <rect x={82} y={22} width={9} height={70} rx={3} fill={c} opacity={0.3} />
        <Bar x={98} y={38} w={30} h={4.5} c={c} /><Bar x={98} y={50} w={32} h={3.5} o={0.14} /><Bar x={98} y={58} w={24} h={3.5} o={0.1} />
      </g>
      <Stroke d="M154 44v22M148 60l6 6 6-6" c={c} w={1.6} cls="ca-float-b" />
      <g className="ca-float-b">
        <Panel x={176} y={40} w={62} h={34} r={7} stroke={c} sw={1.4} />
        <Stroke d="M182 48l25 14 25-14" o={0.22} />
        <Bar x={184} y={66} w={28} h={3.5} o={0.12} />
      </g>
    </g>
  ),
  "fun-email": (c) => (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i} className={i === 1 ? "ca-float" : undefined}>
          <Panel x={72 + i * 56} y={30 + i * 6} w={48} h={36} r={6} stroke={i === 0 ? c : undefined} sw={i === 0 ? 1.5 : 1.3} />
          <Stroke d={`M${76 + i * 56} ${36 + i * 6}l20 12 20-12`} o={0.2} />
          <Bar x={80 + i * 56} y={56 + i * 6} w={26} h={3.5} o={0.12} />
        </g>
      ))}
      <Stroke d="M120 48h8M176 54h8" o={0.2} dash="3 3" cls="ca-march" />
      <Stroke d="M76 84h152" o={0.1} />
      {[0, 1, 2].map((i) => <g key={`d${i}`}><Dot x={96 + i * 56} y={84} r={3} c={c} /><Txt x={96 + i * 56} y={98} t={`d${i * 3 + 1}`} size={7.5} o={0.4} /></g>)}
    </g>
  ),
  "fun-audience": (c) => (
    <g>
      <Panel x={70} y={34} w={56} h={52} r={7} />
      {[0, 1, 2].map((i) => <g key={i}><circle cx={84} cy={46 + i * 15} r={4.5} fill={ink(0.12)} /><Bar x={94} y={43 + i * 15} w={24} h={4} o={0.12} /></g>)}
      {[0, 1, 2].map((i) => (
        <g key={`l${i}`}>
          <Stroke d={`M128 60C150 60 152 ${40 + i * 20} 174 ${40 + i * 20}`} o={0.18} dash="3 4" cls="ca-march" />
          <Panel x={174} y={32 + i * 20} w={56} h={16} r={5} />
          <Dot x={184} y={40 + i * 20} r={2.6} c={c} o={0.5} />
          <Bar x={192} y={38 + i * 20} w={28} h={3.5} o={0.12} />
        </g>
      ))}
    </g>
  ),

  // ===================================================== CRM
  "crm-setup": (c) => (
    <g>
      {[0, 1, 2, 3].map((i) => (
        <g key={i}>
          <Bar x={72 + i * 40} y={26} w={30} h={4} c={i === 0 ? c : undefined} o={0.14} />
          <Panel x={70 + i * 40} y={36} w={34} h={56} r={6} fill={ink(0.02)} stroke={ink(0.1)} />
          {[0, 1].slice(0, i === 0 ? 2 : 1).map((j) => (
            <g key={j} className={i === 1 && j === 0 ? "ca-float" : undefined}>
              <Panel x={74 + i * 40} y={42 + j * 24} w={26} h={20} r={4} />
              <Bar x={78 + i * 40} y={48 + j * 24} w={16} h={3} o={0.14} />
              <Bar x={78 + i * 40} y={54 + j * 24} w={10} h={3} c={i === 0 ? c : undefined} o={0.1} />
            </g>
          ))}
        </g>
      ))}
    </g>
  ),
  "crm-api": (c) => (
    <g>
      <Panel x={124} y={44} w={52} h={30} r={8} stroke={c} sw={1.6} />
      <Txt x={150} y={63} t="API" size={10} c={c} />
      {[[76, 30], [76, 84], [224, 30], [224, 84]].map(([x, y], i) => (
        <g key={i}>
          <Panel x={x - 26} y={y - 12} w={52} h={24} r={6} cls={i % 2 ? "ca-float-b" : "ca-float"} />
          <Bar x={x - 18} y={y - 2} w={26} h={3.5} o={0.14} />
          <Stroke d={`M${x < 150 ? x + 26 : x - 26} ${y}H${x < 150 ? 124 : 176}V59`} o={0.18} dash="3 4" cls="ca-march" />
        </g>
      ))}
    </g>
  ),
  "crm-manage": (c) => (
    <g>
      <Panel x={74} y={30} w={92} h={60} r={8} />
      <Stroke d="M74 44h92" o={0.1} />
      {[0, 1, 2].map((i) => <g key={i}><Dot x={86} y={56 + i * 13} r={2.6} c={i === 0 ? c : undefined} o={0.16} /><Bar x={96} y={54 + i * 13} w={54} h={4} o={0.12} /></g>)}
      <g className="ca-spin">
        <circle cx={208} cy={56} r={16} fill="none" stroke={c} strokeWidth={1.6} strokeDasharray="6 5" />
      </g>
      <circle cx={208} cy={56} r={6} fill="#fff" stroke={c} strokeWidth={1.5} />
      <Dot x={208} y={56} r={2.4} c={c} />
    </g>
  ),

  // ===================================================== HOSTING
  "host-domain-dns": (c) => (
    <g>
      <Panel x={76} y={24} w={148} h={22} r={11} />
      <circle cx={92} cy={35} r={5} fill="none" stroke={c} strokeWidth={1.4} /><Stroke d="M87 35h10M92 30c2 3 2 7 0 10" c={c} o={0.6} w={1} />
      <Bar x={104} y={33} w={62} h={4.5} o={0.2} />
      <Txt x={200} y={38} t=".com" size={9} c={c} />
      {["A", "MX", "TXT"].map((t, i) => (
        <g key={t} className={i % 2 ? "ca-float-b" : "ca-float"}>
          <Panel x={80} y={56 + i * 15} w={140} h={12} r={4} />
          <Txt x={92} y={65 + i * 15} t={t} size={7.5} c={c} />
          <Bar x={108} y={60 + i * 15} w={60 - i * 12} h={3.5} o={0.12} />
          <Dot x={210} y={62 + i * 15} r={2} c={c} o={0.4} />
        </g>
      ))}
    </g>
  ),
  "host-mailboxes": (c) => (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i} className={i === 1 ? "ca-float" : undefined}>
          <Panel x={80 + i * 50} y={34 + (i === 1 ? -6 : 0)} w={44} h={32} r={6} stroke={i === 1 ? c : undefined} sw={i === 1 ? 1.5 : 1.3} />
          <Stroke d={`M${84 + i * 50} ${40 + (i === 1 ? -6 : 0)}l18 12 18-12`} o={0.22} />
        </g>
      ))}
      <Txt x={150} y={86} t="@jouwmerk.nl" size={9.5} c={c} />
      <Dot x={224} y={30} r={3} c={c} className="ca-blink" />
    </g>
  ),
  "host-basic": (c) => (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Panel x={90} y={30 + i * 20} w={84} h={16} r={4} />
          <Dot x={102} y={38 + i * 20} r={2.4} c={i === 0 ? c : undefined} o={0.25} className={i === 0 ? "ca-blink" : undefined} />
          <Bar x={112} y={36 + i * 20} w={40} h={3.5} o={0.12} />
        </g>
      ))}
      <g className="ca-float-b">
        <Stroke d="M206 32l16 6v12c0 11-7 17-16 21-9-4-16-10-16-21V38z" c={c} w={1.5} />
        <Stroke d="M199 50l5 5 9-10" c={c} w={1.4} />
      </g>
    </g>
  ),
  "host-premium": (c) => (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i}><Panel x={70} y={28 + i * 20} w={74} h={16} r={4} /><Dot x={80} y={36 + i * 20} r={2.2} c={c} o={0.3} /><Bar x={90} y={34 + i * 20} w={34} h={3.5} o={0.12} /></g>
      ))}
      <g className="ca-float">
        <Panel x={160} y={26} w={68} h={30} r={6} stroke={c} sw={1.4} />
        <Txt x={194} y={45} t="staging" size={8.5} c={c} />
      </g>
      <g className="ca-float-b">
        <Panel x={160} y={64} w={68} h={26} r={6} />
        <Stroke d="M166 70l18 11 18-11" o={0.22} />
        <Dot x={218} y={77} r={2.4} c={c} o={0.5} />
      </g>
    </g>
  ),
  "host-taylored": (c) => (
    <g>
      <Stroke d="M110 44a16 16 0 0130-6 13 13 0 0122 8 12 12 0 01-2 24h-46a14 14 0 01-4-26z" c={c} w={1.6} cls="ca-float" />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}><Panel x={82 + i * 34} y={74} w={28} h={18} r={5} cls={i % 2 ? "ca-float-b" : undefined} />
          <Dot x={96 + i * 34} y={83} r={2.2} c={c} o={0.4} /></g>
      ))}
      <Stroke d="M124 66v8M158 66v8M192 66v8" o={0.14} dash="3 3" cls="ca-march" />
      <Stroke d="M224 30v10h-10" c={c} w={1.5} />
    </g>
  ),
  "host-automation": (c) => (
    <g>
      {[[86, 58], [150, 34], [150, 82], [214, 58]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r={13} fill="#fff" stroke={i === 0 ? c : ink(0.2)} strokeWidth={1.5} />
          {i === 0 ? <Stroke d={`M${x - 4} ${y - 5}l8 5-8 5z`} c={c} w={1.3} /> : <Dot x={x} y={y} r={2.6} c={c} o={0.35} />}
        </g>
      ))}
      <Stroke d="M99 58C118 58 130 40 137 36M99 58C118 58 130 76 137 80M163 36c8 4 20 22 38 22M163 80c8-4 20-22 38-22" o={0.2} dash="4 4" cls="ca-march" />
      <Dot x={150} y={58} r={2} c={c} o={0.3} />
    </g>
  ),

  // ===================================================== SUPPORT (uren-meter)
  "sup-mini": (c) => (
    <g>
      <Panel x={92} y={24} w={116} h={54} r={8} />
      {[0, 1, 2].map((i) => (
        <g key={i}><Stroke d={`M104 ${38 + i * 14}l3.5 3.5 6-7`} c={i === 0 ? c : ink(0.25)} w={1.5} /><Bar x={122} y={36 + i * 14} w={70 - i * 14} h={4} o={0.12} /></g>
      ))}
      <Txt x={150} y={94} t="onderhoud" size={9.5} o={0.42} />
    </g>
  ),
  "sup-solid": (c) => (
    <g>
      <Stroke d="M72 76h156" o={0.12} />
      <Stroke d="M76 66h22l6-14 8 26 7-18 9 10h20l6-8 8 12 9-16 8 8h22" c={c} w={1.6} cls="ca-draw" />
      <Meter x={98} y={92} n={1} c={c} label="1 uur p/m" />
      <Dot x={228} y={44} r={3} c={c} className="ca-blink" />
    </g>
  ),
  "sup-build": (c) => (
    <g>
      <Panel x={94} y={20} w={112} h={40} r={8} />
      {[0, 1, 2].map((i) => <rect key={i} x={104 + i * 34} y={30} width={26} height={20} rx={4} fill={i === 0 ? c : ink(0.09)} opacity={i === 0 ? 0.5 : 1} />)}
      <Meter x={98} y={86} n={3} c={c} label="3 uur p/m" />
    </g>
  ),
  "sup-craft": (c) => (
    <g>
      <g className="ca-float">
        <Panel x={110} y={18} w={80} h={30} r={15} stroke={c} sw={1.5} />
        <Txt x={150} y={37} t="same-day" size={9.5} c={c} />
      </g>
      <Meter x={98} y={86} n={5} c={c} label="5 uur p/m" />
    </g>
  ),
  "sup-forge": (c) => (
    <g>
      <Stroke d="M78 46h144" o={0.14} />
      {[0, 1, 2, 3].map((i) => (
        <g key={i}><circle cx={94 + i * 40} cy={46} r={5} fill={i < 2 ? c : "#fff"} stroke={i < 2 ? c : ink(0.22)} strokeWidth={1.4} />
          <Bar x={82 + i * 40} y={26} w={24} h={4} o={i < 2 ? 0.2 : 0.1} /></g>
      ))}
      <Meter x={98} y={90} n={6} c={c} label="8 uur p/m" />
    </g>
  ),
  "sup-scale": (c) => (
    <g>
      <g className="ca-float">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <rect key={i} x={92 + (i % 3) * 40} y={22 + Math.floor(i / 3) * 26} width={32} height={20} rx={5}
            fill={i < 4 ? c : ink(0.1)} opacity={i < 4 ? 0.28 + i * 0.08 : 1} />
        ))}
      </g>
      <Meter x={98} y={92} n={7} c={c} label="12 uur p/m" />
    </g>
  ),
  "sup-apex": (c) => (
    <g>
      <g className="ca-float">
        <Stroke d="M108 62a42 42 0 0184 0" o={0.14} w={7} />
        <Stroke d="M108 62a42 42 0 0184 0" c={c} w={7} dash="132" cls="ca-draw" />
        <Stroke d="M150 62l24-20" c={ink(0.7)} w={2} />
        <Dot x={150} y={62} r={4} c={ink(0.7)} />
      </g>
      <Txt x={150} y={86} t="16 uur p/m" size={10} c={c} />
    </g>
  ),
  "sup-custom": (c) => (
    <g>
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <Stroke d={`M84 ${34 + i * 20}h132`} o={0.14} w={4} />
          <Stroke d={`M84 ${34 + i * 20}h${[92, 60, 110][i]}`} c={c} w={4} />
          <circle cx={84 + [92, 60, 110][i]} cy={34 + i * 20} r={6} fill="#fff" stroke={c} strokeWidth={1.6} className={i === 1 ? "ca-float" : undefined} />
        </g>
      ))}
      <Txt x={150} y={94} t="16+ uur · SLA op maat" size={9} o={0.45} />
    </g>
  ),
};

// ------------------------------------------------------------ fallback
const FALLBACK: Scene = (c) => (
  <g>
    <Panel x={104} y={30} w={92} h={54} r={9} cls="ca-float" />
    <Bar x={116} y={44} w={46} h={5} c={c} cls="ca-float" />
    <Bar x={116} y={56} w={66} h={4} o={0.14} cls="ca-float" />
    <Bar x={116} y={66} w={40} h={4} o={0.1} cls="ca-float" />
  </g>
);

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
  const c = ACCENT[cat] ?? "#1f78ff";
  const gid = `ca-${id}`;
  const scene = SCENES[id] ?? FALLBACK;

  return (
    <div className={`exp-cardart ${className}`} data-kind={kind} aria-hidden>
      <svg viewBox="0 0 300 120" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id={`${gid}-bg`} x1="0" y1="0" x2="0.4" y2="1">
            <stop offset="0" stopColor={c} stopOpacity="0.13" />
            <stop offset="1" stopColor={c} stopOpacity="0.02" />
          </linearGradient>
          <pattern id={`${gid}-grid`} width="15" height="15" patternUnits="userSpaceOnUse">
            <path d="M15 0H0V15" fill="none" stroke={c} strokeOpacity="0.1" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="300" height="120" fill={`url(#${gid}-bg)`} />
        <rect width="300" height="120" fill={`url(#${gid}-grid)`} />
        {scene(c)}
      </svg>
    </div>
  );
}
