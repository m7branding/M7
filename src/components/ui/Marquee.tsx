/** Naadloze, oneindige marquee (pure CSS). Pauzeert bij hover. */
export function Marquee({
  children,
  speed = 40,
  reverse = false,
  className,
  fade = true,
  label,
}: {
  children: React.ReactNode;
  /** Seconden per loop. */
  speed?: number;
  reverse?: boolean;
  className?: string;
  fade?: boolean;
  label?: string;
}) {
  return (
    <div
      className={`marquee${reverse ? " marquee--rev" : ""}${fade ? " marquee--fade" : ""}${className ? " " + className : ""}`}
      style={{ ["--speed" as string]: `${speed}s` }}
      aria-label={label}
      role={label ? "region" : undefined}
    >
      <div className="marquee__track">
        <div className="marquee__group">{children}</div>
        <div className="marquee__group" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
