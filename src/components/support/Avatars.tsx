import { initials, type SupportPerson } from "@/content/support";

/** Overlappende avatars van het supportteam. Zonder foto: initialen in de merkgradient. */
export function Avatars({
  people,
  size = 52,
  className,
}: {
  people: Pick<SupportPerson, "name" | "photo">[];
  size?: number;
  className?: string;
}) {
  return (
    <span className={`avs${className ? ` ${className}` : ""}`} style={{ ["--av" as string]: `${size}px` }}>
      {people.map((p, i) => (
        <Avatar key={p.name} person={p} style={{ ["--i" as string]: i }} />
      ))}
    </span>
  );
}

export function Avatar({
  person,
  size,
  style,
}: {
  person: Pick<SupportPerson, "name" | "photo">;
  size?: number;
  style?: React.CSSProperties;
}) {
  const s = size ? { ...style, ["--av" as string]: `${size}px` } : style;
  return (
    <span className="av" style={s} title={person.name}>
      {person.photo ? (
        <img src={person.photo} alt={person.name} width={96} height={96} loading="lazy" decoding="async" />
      ) : (
        <span className="av__ini" aria-label={person.name} role="img">
          {initials(person.name)}
        </span>
      )}
    </span>
  );
}
