/**
 * Server-side split: elk woord in een masker, zodat het bij in beeld
 * komen omhoog schuift (zie .split in base.css). Ondersteunt segmenten
 * met een eigen class (bv. gradient-woorden).
 */
type Seg = string | { t: string; c?: string };

export function SplitText({
  as: Tag = "span",
  parts,
  className,
  delay = 0,
  id,
}: {
  as?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  parts: Seg[] | string;
  className?: string;
  delay?: number;
  id?: string;
}) {
  const segs: { t: string; c?: string }[] = (typeof parts === "string" ? [parts] : parts).map((p) =>
    typeof p === "string" ? { t: p } : p,
  );
  let i = 0;
  const label = segs.map((s) => s.t).join("");
  return (
    <Tag
      id={id}
      className={`split${className ? " " + className : ""}`}
      data-reveal=""
      style={{ ["--d" as string]: `${delay}s` }}
      aria-label={label}
    >
      {segs.map((s, si) =>
        s.t.split(/(\s+)/).map((word, wi) => {
          if (!word) return null;
          if (/^\s+$/.test(word)) return " ";
          if (word === "<br>") return <br key={`${si}-${wi}`} />;
          const idx = i++;
          return (
            <span className="w" key={`${si}-${wi}`} aria-hidden="true">
              <span className={s.c} style={{ ["--i" as string]: idx }}>
                {word}
              </span>
            </span>
          );
        }),
      )}
    </Tag>
  );
}
