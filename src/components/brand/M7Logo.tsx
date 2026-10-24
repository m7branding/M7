/* M7-logo's als inline SVG (exacte paden uit de aangeleverde assets). */

export const M7_PATHS = [
  "M58.168 49.8125L75.7011 11.1482H62.3291L58.2315 0H88.6286L88.5968 10.7616L70.3649 49.8125H58.168Z",
  "M75.7 11.1482H62.328L58.2305 0H64.2673L75.7 11.1482Z",
  "M88.5972 10.7615L70.3653 49.8126L75.7014 11.1482L69.8398 0H88.629L88.5972 10.7615Z",
  "M70.3649 49.8109H58.168L75.7011 11.1465L70.3649 49.8109Z",
  "M0 0.119141H16.4012L27.729 32.6887H27.8682L39.2655 0.119141H55.5972V50.0311H44.7557V11.7512H44.6168L31.6905 50.0311H23.4202L10.9805 11.7512H10.8415V50.0311H0V0.119141Z",
];

/** Het gevulde M7-emblem (89×51). */
export function M7Emblem({ className, title }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 89 51" className={className} fill="currentColor" role={title ? "img" : undefined} aria-hidden={title ? undefined : true}>
      {title ? <title>{title}</title> : null}
      {M7_PATHS.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

/** Lijn-versie: elk pad als stroke (pathLength=1 voor draw-animaties). */
export function M7Lined({ className }: { className?: string }) {
  return (
    <svg viewBox="-2 -2 93 55" className={className} fill="none" aria-hidden="true">
      {M7_PATHS.map((d, i) => (
        <path
          key={i}
          d={d}
          pathLength={1}
          stroke="currentColor"
          strokeWidth={1.1}
          strokeLinejoin="round"
          style={{ ["--pi" as string]: i }}
        />
      ))}
    </svg>
  );
}

/** Volledige badge: emblem in een gradient-ring (#3AFFFF → #00FF19). */
export function M7Badge({ className, id = "m7b" }: { className?: string; id?: string }) {
  return (
    <svg viewBox="0 0 147 147" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="73.4" y1="0" x2="73.4" y2="147" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3AFFFF" />
          <stop offset="1" stopColor="#00FF19" />
        </linearGradient>
      </defs>
      <circle cx="73.415" cy="73.415" r="66.4" fill="#000" />
      <circle cx="73.415" cy="73.415" r="69.9" fill="none" stroke={`url(#${id}-g)`} strokeWidth="7" />
      <g transform="translate(30.69 51.25)" fill="#fff">
        {M7_PATHS.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}
