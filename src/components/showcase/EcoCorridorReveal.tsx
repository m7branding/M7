import s from "./EcoCorridorReveal.module.css";

const P = "/media/showcase/plentyplanet";
const COLS = 8;
const ROWS = 5;
/* render-buckets: vanuit het midden naar buiten, met wat willekeur zoals een echte renderer */
const JITTER = [0.3, 0, 0.6, 0.2, 0.8, 0.4, 0.1, 0.7, 0.5];
const TILES = Array.from({ length: COLS * ROWS }, (_, n) => {
  const i = n % COLS;
  const j = Math.floor(n / COLS);
  const d = Math.hypot(i - (COLS - 1) / 2, (j - (ROWS - 1) / 2) * 1.25);
  return { i, j, o: +(d * 1.6 + JITTER[n % JITTER.length]).toFixed(2) };
});

/* draadmodel (in beeldcoördinaten van de render, 1600 × 893): de corridor, zijn A-palen en twee hallen */
const ROUTE = [
  "M835 690 L1372 333 L1600 400",
  "M1372 333 L905 172",
  "M805 702 L270 282 L500 224",
  "M790 728 L513 893",
];
const seg = (x1: number, y1: number, x2: number, y2: number, ts: number[]) =>
  ts.map((t) => [Math.round(x1 + (x2 - x1) * t), Math.round(y1 + (y2 - y1) * t)]);
const POSTS = [
  ...seg(835, 690, 1372, 333, [0.1, 0.25, 0.4, 0.55, 0.7, 0.85]),
  ...seg(1372, 333, 1600, 400, [0.4, 0.8]),
  ...seg(1372, 333, 905, 172, [0.15, 0.32, 0.49, 0.66, 0.83, 0.97]),
  ...seg(805, 702, 270, 282, [0.1, 0.23, 0.36, 0.49, 0.62, 0.75, 0.88]),
  ...seg(270, 282, 500, 224, [0.3, 0.6, 0.9]),
  ...seg(790, 728, 513, 893, [0.35, 0.7]),
]
  .map(([x, y]) => `M${x - 7} ${y + 26}L${x} ${y}L${x + 7} ${y + 26}`)
  .join("");
const BUILDINGS =
  "M595 385L930 248L1225 325L835 505ZM595 385V412L835 572V505M835 572L1225 352V325" +
  "M297 525L380 458L665 625L500 752ZM297 525V560L500 790V752M500 790L665 662V625M338 492L582 688";

const LAYERS = [
  { name: "Terrein", c: "#8d8a7f" },
  { name: "Gebouwen", c: "#c9ccce" },
  { name: "Corridor_Corten", c: "#b5562a" },
  { name: "Beplanting", c: "#7fbf4d" },
  { name: "Zonnepanelen", c: "#3c5a86" },
];

/**
 * Plenty Planet: de Green Eco Corridor wordt "gerenderd" terwijl de kaart in beeld schuift.
 * Draadmodel op een blauwdrukraster → claypass (diagonale wipe) → kleurenrender in tegels
 * → overgang naar een tweede camerastandpunt. Eromheen een rustige viewport-UI:
 * modusschakelaar, REC + timecode, lagen, renderstatus en een tijdlijn.
 */
export function EcoCorridorReveal() {
  return (
    <div className={s.root}>
      <div className={s.glow} aria-hidden="true" />

      <div className={s.win} aria-hidden="true">
        {/* werkbalk */}
        <div className={s.bar}>
          <span className={s.dots}>
            <i />
            <i />
            <i />
          </span>
          <span className={s.file}>
            Green_Eco_Corridor<em>.scene</em>
          </span>
          <span className={s.modes}>
            <span className={s.modePill} />
            <span className={s.m0}>Wireframe</span>
            <span className={s.m1}>Clay</span>
            <span className={s.m2}>Render</span>
          </span>
        </div>

        {/* viewport */}
        <div className={s.view}>
          <div className={s.plane}>
            <img className={s.lines} src={`${P}/corridor-lines.webp`} alt="" loading="lazy" decoding="async" />
            <span className={s.scan} />
            <div className={s.clay}>
              <img src={`${P}/greenecocorridor.webp`} alt="" loading="lazy" decoding="async" />
              <img className={s.wire} src={`${P}/corridor-lines.webp`} alt="" loading="lazy" decoding="async" />
            </div>
            <svg className={s.wf} viewBox="0 0 1600 893" preserveAspectRatio="none">
              <path className={s.wfBuild} d={BUILDINGS} />
              <path className={s.wfPosts} d={POSTS} />
              <g className={s.wfSpiral}>
                <ellipse cx="820" cy="704" rx="40" ry="15" />
                <ellipse cx="820" cy="729" rx="40" ry="15" />
                <ellipse cx="820" cy="754" rx="40" ry="15" />
                <path d="M780 704V780M860 704V780" />
              </g>
              {ROUTE.map((d, n) => (
                <g key={d} className={s.wfRoute} style={{ ["--n" as string]: n }}>
                  <path d={d} pathLength={1} />
                  <path d={d} pathLength={1} />
                </g>
              ))}
            </svg>
            <div className={s.sweep}>
              <span />
            </div>
            <div className={s.tiles}>
              {TILES.map((t) => (
                <span key={`${t.i}-${t.j}`} style={{ ["--i" as string]: t.i, ["--j" as string]: t.j, ["--o" as string]: t.o }} />
              ))}
            </div>
            <img className={s.full} src={`${P}/greenecocorridor.webp`} alt="" loading="lazy" decoding="async" />
          </div>
          <div className={`${s.plane} ${s.plane2}`}>
            <img src={`${P}/greencorridor3.webp`} alt="" loading="lazy" decoding="async" />
          </div>
          <div className={s.vignette} />
        </div>

        {/* HUD binnen het zichtbare deel van de viewport */}
        <div className={s.hud}>
          <span className={s.frameMarks} />
          <span className={s.cross} />

          <div className={s.rec}>
            <span className={s.recDot} />
            <b>REC</b>
            <span className={s.tc} />
            <span className={s.fr} />
          </div>

          <div className={s.cam}>
            <span className={s.cam1}>Camera_01 · 24 mm</span>
            <span className={s.cam2}>Camera_02 · 35 mm</span>
          </div>

          <div className={s.layers}>
            <span className={s.panelHead}>Lagen</span>
            <ul>
              {LAYERS.map((l, n) => (
                <li key={l.name} style={{ ["--c" as string]: l.c, ["--n" as string]: n }}>
                  <i className={s.sw} />
                  {l.name}
                  <svg className={s.eye} viewBox="0 0 16 10">
                    <path d="M1 5c2-3 4.5-4.2 7-4.2S13 2 15 5c-2 3-4.5 4.2-7 4.2S3 8 1 5Z" />
                    <circle cx="8" cy="5" r="1.9" />
                  </svg>
                </li>
              ))}
            </ul>
          </div>

          <div className={s.status}>
            <div className={s.statusRow}>
              <span className={s.spin} />
              <span className={s.stWire}>Viewport · draadmodel</span>
              <span className={s.stClay}>Claypass · belichting</span>
              <span className={s.stRender}>Renderen</span>
              <span className={s.stDone}>Render klaar</span>
              <b className={s.pct} />
            </div>
            <span className={s.prog} />
          </div>

          <div className={s.timeline}>
            <span className={s.keys} />
            <span className={s.head} />
          </div>
        </div>
      </div>
    </div>
  );
}
