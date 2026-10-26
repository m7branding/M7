import s from "./DesignersHousePrint.module.css";

const P = "/media/showcase/designershouse";

/* eindpositie van elke kaart in het gespiegelde kader (beeld links): x/y-verschuiving en draaiing */
const CARDS = [
  { dx: -12, dy: -2, rz: -15 },
  { dx: -2, dy: -7, rz: 1 },
  { dx: 6, dy: 3, rz: 12 },
];

/**
 * DesignersHouse print: een still life op een warm antraciet tafelblad.
 * De A4-brochure ligt dicht (kaft = "2 Showrooms. 14 Design Rooms."),
 * slaat open als bi-fold en toont de plattegrond van de Hospitality Showroom.
 * Ernaast waaieren de uitnodigingen uit; de bovenste kaart tilt op en draait
 * in 3D om naar zijn gouden achterkant. Een verzegelde envelop met
 * goudfolie-embleem ligt aan de buitenrand.
 */
export function DesignersHousePrint() {
  return (
    <div className={s.root}>
      <div className={s.pool} aria-hidden="true" />

      <div className={s.scene}>
        <div className={s.desk}>
          {/* ---------- envelop (achterkant, verzegeld met goudfolie) ---------- */}
          <div className={s.envelope}>
            <span className={s.envShadow} />
            <span className={s.envBody} />
            <span className={s.envFlap} />
            <span className={s.envFoil} />
          </div>

          {/* ---------- A4-brochure (bi-fold) ---------- */}
          <div className={s.brochure}>
            <div className={s.bShadow} />
            <div className={s.right}>
              <div className={s.base}>
                <img src={`${P}/brochure-hospitality.webp`} alt="" loading="lazy" decoding="async" />
                <span className={s.sheen} />
                <span className={s.turnShade} />
              </div>
              <div className={s.cover}>
                <div className={`${s.face} ${s.front}`}>
                  <img src={`${P}/brochure-showrooms.webp`} alt="" loading="lazy" decoding="async" />
                  <span className={s.sheen} />
                </div>
                <div className={`${s.face} ${s.back}`}>
                  <span className={s.introMark} />
                  <span className={s.introLogo}>
                    designers<small>HOUSE</small>
                  </span>
                  <div className={s.introBody}>
                    <span className={s.introKicker}>Interieur Experience Center</span>
                    <h3 className={s.introTitle}>
                      Beleef interieur
                      <br />
                      op ware grootte.
                    </h3>
                    <p className={s.introText}>
                      Twee showrooms en veertien volledig ingerichte design rooms: van lobby en boardroom tot hotelkamer
                      en zorgwoning. Voel materialen, zie licht en meubilair samenkomen en kies uit onze stalenkamer van
                      ruim 60 m².
                    </p>
                    <ul className={s.introList}>
                      <li>
                        <b>01</b>Residential
                      </li>
                      <li>
                        <b>02</b>Hospitality
                      </li>
                    </ul>
                  </div>
                  <span className={s.folio}>02</span>
                </div>
              </div>
            </div>
          </div>

          {/* ---------- uitnodigingen ---------- */}
          {CARDS.map((c, n) => (
            <div
              key={n}
              className={`${s.card} ${n === 2 ? s.top : ""}`}
              style={{ ["--n" as string]: n, ["--dx" as string]: c.dx, ["--dy" as string]: c.dy, ["--rz" as string]: c.rz }}
            >
              <span className={s.cShadow} />
              <div className={s.flip}>
                <div className={`${s.cFace} ${s.cFront}`}>
                  <img src={`${P}/invite-front.webp`} alt="" loading="lazy" decoding="async" />
                  <span className={s.sheen} />
                </div>
                {n === 2 && (
                  <div className={`${s.cFace} ${s.cBack}`}>
                    <img src={`${P}/invite-back.webp`} alt="" loading="lazy" decoding="async" />
                    <span className={s.sheen} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={s.window} aria-hidden="true" />
    </div>
  );
}
