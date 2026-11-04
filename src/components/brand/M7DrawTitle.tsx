import { Fragment } from "react";
import { M7EmblemDraw } from "./M7Logo";
import "./m7Draw.css";

/**
 * Het M7-emblem dat zich bij binnenkomst tekent als technische tekening (hulplijnen,
 * contouren, dan vloeit het merkverloop erin) en bij hover het effect van het navbar-logo
 * afspeelt. Gedeeld door de hero's van Over M7, /cases en World of M7 (zie m7Draw.css).
 * De intro start zodra de dichtstbijzijnde [data-reveal]-ouder .is-in krijgt (RevealObserver).
 */
export function M7DrawMark({ dot = false }: { dot?: boolean }) {
  return (
    <>
      <span className="m7dm">
        <svg className="m7dm__gdef" aria-hidden="true" focusable="false">
          <defs>
            {/* zelfde verloop als --g-pixels (95deg), in de coördinaten van het emblem (89 × 51) */}
            <linearGradient id="m7dm-g" gradientUnits="userSpaceOnUse" x1="0" y1="0" x2="89" y2="7.8">
              <stop offset="0" stopColor="#3affff" />
              <stop offset="0.45" stopColor="#22ffb4" />
              <stop offset="1" stopColor="#18ff59" />
            </linearGradient>
          </defs>
        </svg>
        <M7EmblemDraw />
        <span className="visually-hidden">M7</span>
      </span>
      {dot ? (
        <span className="m7dm__dot g-pixels" aria-hidden="true">
          .
        </span>
      ) : null}
    </>
  );
}

/**
 * Kop "<woorden> [M7]" met dezelfde woord-reveal als SplitText (.split/.w), waarin "M7"
 * het tekenende emblem is. Het laatste woord blijft met het logo op één regel.
 * De naam voor schermlezers en zoekmachines staat in aria-label (bv. "Masterpieces by M7").
 */
export function M7DrawTitle({
  as: Tag = "h1",
  id,
  words,
  dot = false,
  className,
  delay = 0.1,
}: {
  as?: "h1" | "h2" | "p";
  id?: string;
  /** De woorden vóór het logo, bv. "Welcome to the world of". */
  words: string;
  /** Punt in merkverloop achter het logo (zoals "… world of M7."). */
  dot?: boolean;
  className?: string;
  delay?: number;
}) {
  const list = words.trim().split(/\s+/);
  const last = list.pop() ?? "";
  return (
    <Tag
      id={id}
      className={`split m7dt${className ? " " + className : ""}`}
      data-reveal=""
      style={{ ["--d" as string]: `${delay}s` }}
      aria-label={`${words.trim()} M7${dot ? "." : ""}`}
    >
      {list.map((w, i) => (
        <Fragment key={`${w}-${i}`}>
          <span className="w" aria-hidden="true">
            <span style={{ ["--i" as string]: i }}>{w}</span>
          </span>{" "}
        </Fragment>
      ))}
      <span className="m7dt__tail">
        {last ? (
          <>
            <span className="w" aria-hidden="true">
              <span style={{ ["--i" as string]: list.length }}>{last}</span>
            </span>{" "}
          </>
        ) : null}
        <M7DrawMark dot={dot} />
      </span>
    </Tag>
  );
}
