/**
 * Server-side split: elk woord in een masker, zodat het bij in beeld
 * komen omhoog schuift (zie .split in base.css). Ondersteunt segmenten
 * met een eigen class (bv. gradient-woorden).
 *
 * Gradient-segmenten (class g-*) krijgen per woord een verschoven achtergrond,
 * zodat één verloop door het hele segment loopt i.p.v. per woord opnieuw te
 * beginnen. Server-side schatten we dat op lettertellingen; GradientFlow meet
 * het daarna in de browser exact na.
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
  // per gradient-segment: lettertelling voor de schatting (spatie = 1 teken)
  const flow = (seg: { t: string; c?: string }) => {
    if (!seg.c?.startsWith("g-")) return null;
    const words = seg.t.split(/\s+/).filter((w) => w && w !== "<br>");
    const total = words.reduce((n, w) => n + w.length, 0) + Math.max(0, words.length - 1);
    let before = 0;
    return words.map((w) => {
      const c = w.length;
      const pos = total === c ? 0 : (before / (total - c)) * 100;
      const style = { ["--gbs" as string]: `${((total / c) * 100).toFixed(2)}%`, ["--gbp" as string]: `${pos.toFixed(2)}%` };
      before += c + 1;
      return style;
    });
  };
  return (
    <Tag
      id={id}
      className={`split${className ? " " + className : ""}`}
      data-reveal=""
      style={{ ["--d" as string]: `${delay}s` }}
      aria-label={label}
    >
      {segs.map((s, si) => {
        const g = flow(s);
        let gi = 0;
        return s.t.split(/(\s+)/).map((word, wi) => {
          if (!word) return null;
          if (/^\s+$/.test(word)) return " ";
          if (word === "<br>") return <br key={`${si}-${wi}`} />;
          const idx = i++;
          const gs = g ? g[gi++] : null;
          return (
            <span className="w" key={`${si}-${wi}`} aria-hidden="true">
              <span className={s.c} style={{ ["--i" as string]: idx, ...gs }} data-g={g ? si : undefined}>
                {word}
              </span>
            </span>
          );
        });
      })}
    </Tag>
  );
}
