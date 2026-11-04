import { initials, type SupportPerson } from "@/content/support";
import "./avatars.css";

type Person = Pick<SupportPerson, "name" | "photo">;

/**
 * Overlappende ronde avatars (echte gezichten uit team.ts: `photo: m.avatar`).
 * Zonder foto: initialen in de merkgradient. Met de muis: naam-tooltip.
 * `more` toont een "+N"-emblem achteraan.
 */
export function Avatars({
  people,
  size = 52,
  more,
  ring,
  tips = true,
  decorative,
  className,
}: {
  people: Person[];
  size?: number;
  /** Aantal extra mensen dat niet getoond wordt ("+3"). */
  more?: number;
  /** Kleur van de scheidingsring, gelijk aan de achtergrond eronder. */
  ring?: string;
  /** Naam-tooltip bij hover. */
  tips?: boolean;
  /** Lege alt (bv. binnen een link die zelf al een tekst heeft). */
  decorative?: boolean;
  className?: string;
}) {
  const style: Record<string, string | number> = { "--av": `${size}px` };
  if (ring) style["--av-ring"] = ring;
  return (
    <span className={`avs${className ? ` ${className}` : ""}`} style={style as React.CSSProperties}>
      {people.map((p, i) => (
        <Avatar key={p.name} person={p} tip={tips} decorative={decorative} style={{ ["--i" as string]: i }} />
      ))}
      {more && more > 0 ? (
        <span className="av av--more" style={{ ["--i" as string]: people.length }} aria-hidden="true">
          +{more}
        </span>
      ) : null}
    </span>
  );
}

export function Avatar({
  person,
  size,
  tip,
  decorative,
  style,
}: {
  person: Person;
  decorative?: boolean;
  size?: number;
  /** Naam-tooltip bij hover (standaard uit; in <Avatars> standaard aan). */
  tip?: boolean;
  style?: React.CSSProperties;
}) {
  const s = size ? { ...style, ["--av" as string]: `${size}px` } : style;
  return (
    <span className="av" style={s}>
      {person.photo ? (
        <img src={person.photo} alt={decorative ? "" : person.name} width={96} height={96} loading="lazy" decoding="async" draggable={false} />
      ) : (
        <span className="av__ini" {...(decorative ? { "aria-hidden": true } : { "aria-label": person.name, role: "img" })}>
          {initials(person.name)}
        </span>
      )}
      {tip ? (
        <span className="av__tip" aria-hidden="true">
          {person.name}
        </span>
      ) : null}
    </span>
  );
}
