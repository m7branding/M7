import s from "./DesignersHouseBook.module.css";

const P = "/media/showcase/designershouse";

const SWATCHES = [
  { name: "Muted gold", hex: "#D3C089", ink: "#2b2a28" },
  { name: "Charcoal", hex: "#383736", ink: "#f6f6f6" },
  { name: "Soft taupe", hex: "#D7D1CB", ink: "#2b2a28" },
  { name: "Soft silver", hex: "#F6F6F6", ink: "#2b2a28" },
];

function Img({ n }: { n: string }) {
  return <img src={`${P}/brandbook-${n}.webp`} alt="" loading="lazy" decoding="async" />;
}

/**
 * DesignersHouse: het brandbook ligt als hardcover op tafel. Eén doorlopende, trage
 * camerabeweging over de hele scroll: het dichte boek drijft binnen en draait bij,
 * de kaft gaat langzaam open ("About" + kleurenpalet), daarna slaan de bladen één
 * voor één om (typografie + logovarianten, dan stijlelementen + sfeerbeeld) terwijl
 * de camera rustig blijft pannen en inzoomen. Kleurstalen zweven er los naast.
 */
export function DesignersHouseBook() {
  return (
    <div className={s.root}>
      <div className={s.glow} aria-hidden="true" />

      <div className={s.scene}>
        <div className={s.book}>
          <div className={s.shadow} />
          {/* linkerhelft: het blok pagina's dat onder de omgeslagen bladen ligt */}
          <div className={s.leftBlock} />
          {/* rechterhelft: onderste pagina, twee bladen en de kaft draaien om de rug */}
          <div className={s.right}>
            <div className={`${s.page} ${s.base}`}>
              <Img n="03" />
            </div>
            <div className={`${s.leaf} ${s.leaf2}`}>
              <div className={`${s.face} ${s.front}`}>
                <Img n="16" />
              </div>
              <div className={`${s.face} ${s.back}`}>
                <Img n="21" />
              </div>
            </div>
            <div className={`${s.leaf} ${s.leaf1}`}>
              <div className={`${s.face} ${s.front}`}>
                <Img n="17" />
              </div>
              <div className={`${s.face} ${s.back}`}>
                <Img n="18" />
              </div>
            </div>
            <div className={`${s.leaf} ${s.cover}`}>
              <div className={`${s.face} ${s.front} ${s.coverFront}`}>
                <span className={s.foil} />
                <span className={s.coverWord}>
                  designers
                  <small>HOUSE</small>
                </span>
                <span className={s.coverLabel}>Brandbook · 2025</span>
              </div>
              <div className={`${s.face} ${s.back}`}>
                <Img n="02" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ul className={s.swatches} aria-hidden="true">
        {SWATCHES.map((w, i) => (
          <li key={w.hex} style={{ ["--c" as string]: w.hex, ["--ink" as string]: w.ink, ["--n" as string]: i }}>
            <span className={s.chip} />
            <span className={s.meta}>
              <b>{w.name}</b>
              {w.hex}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
