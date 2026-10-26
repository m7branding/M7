import s from "./DesignersHouseBook.module.css";

const P = "/media/showcase/designershouse";

const SWATCHES = [
  { name: "Muted gold", hex: "#D3C089", ink: "#2b2a28" },
  { name: "Charcoal", hex: "#383736", ink: "#f6f6f6" },
  { name: "Soft taupe", hex: "#D7D1CB", ink: "#2b2a28" },
  { name: "Soft silver", hex: "#F6F6F6", ink: "#2b2a28" },
];

/**
 * DesignersHouse: het brandbook ligt als hardcover op tafel en slaat open
 * terwijl de kaart in beeld schuift. Eerst de kaft met goudfolie-embleem,
 * dan "About" + kleurenpalet, daarna bladert hij door naar typografie +
 * logovarianten. Kleurstalen schuiven er los naast.
 */
export function DesignersHouseBook() {
  return (
    <div className={s.root}>
      <div className={s.glow} aria-hidden="true" />
      <div className={s.watermark} aria-hidden="true" />

      <div className={s.scene}>
        <div className={s.book}>
          <div className={s.shadow} />
          {/* rechterhelft: onderste pagina, een blad en de kaft draaien om de rug */}
          <div className={s.right}>
            <div className={`${s.page} ${s.base}`}>
              <img src={`${P}/brandbook-16.webp`} alt="" loading="lazy" decoding="async" />
            </div>
            <div className={`${s.leaf} ${s.leaf2}`}>
              <div className={`${s.face} ${s.front}`}>
                <img src={`${P}/brandbook-17.webp`} alt="" loading="lazy" decoding="async" />
              </div>
              <div className={`${s.face} ${s.back}`}>
                <img src={`${P}/brandbook-18.webp`} alt="" loading="lazy" decoding="async" />
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
                <img src={`${P}/brandbook-02.webp`} alt="" loading="lazy" decoding="async" />
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
