/* M7 line-iconset — strak, 1.6px stroke, 24px grid.
   Gebruikt voor diensten, sectoren en UI. */

const P = {
  /* Diensten */
  sparkle: "M12 2.5c.6 4.6 2.9 6.9 7.5 7.5-4.6.6-6.9 2.9-7.5 7.5-.6-4.6-2.9-6.9-7.5-7.5 4.6-.6 6.9-2.9 7.5-7.5Z M19 15.5c.25 1.6 1 2.35 2.5 2.5-1.5.25-2.25 1-2.5 2.5-.25-1.5-1-2.25-2.5-2.5 1.5-.15 2.25-.9 2.5-2.5Z",
  browser: "M3.5 6.5a2 2 0 0 1 2-2h13a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-11Z M3.5 8.5h17 M6.5 6.5h.01 M8.5 6.5h.01 M10.5 6.5h.01",
  apps: "M4 7a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z M14 4h6v6h-6z M4 17a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z M14 17a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z",
  flow: "M4 5h5v4H4z M15 15h5v4h-5z M15 5h5v4h-5z M9 7h6 M17.5 9v6 M4 15h5v4H4z M9 17h6",
  search: "M10.5 17a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13Z M15.3 15.3 20 20 M8 10.5h5 M10.5 8v5",
  megaphone: "M4 10v4a1 1 0 0 0 1 1h2l5 4V5L7 9H5a1 1 0 0 0-1 1Z M16 9a4 4 0 0 1 0 6 M18.5 6.5a7.5 7.5 0 0 1 0 11",
  camera: "M3.5 8.5a2 2 0 0 1 2-2h2l1.5-2h6l1.5 2h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2v-9Z M12 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z",
  pen: "M12 4v6 M5 18c0-5 3-8 7-8s7 3 7 8 M3 18h4v3H3z M17 18h4v3h-4z M10 2h4v2h-4z M12 10a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z",
  sliders: "M5 4v16 M12 4v16 M19 4v16 M3 14h4 M10 8h4 M17 16h4",
  ai: "M8 3.5v3 M16 3.5v3 M8 17.5v3 M16 17.5v3 M3.5 8h3 M3.5 16h3 M17.5 8h3 M17.5 16h3 M6.5 6.5h11v11h-11z M12 9l.9 2.1L15 12l-2.1.9L12 15l-.9-2.1L9 12l2.1-.9Z",
  /* Sectoren */
  car: "M5 16.5h14 M4 13l1.6-4.2A2 2 0 0 1 7.5 7.5h9a2 2 0 0 1 1.9 1.3L20 13v4a1 1 0 0 1-1 1h-1.5a1 1 0 0 1-1-1v-.5h-9v.5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-4Z M4 13h16 M7.5 15h.01 M16.5 15h.01",
  trophy: "M8 4h8v5a4 4 0 0 1-8 0V4Z M8 6H5v1.5A3.5 3.5 0 0 0 8.5 11 M16 6h3v1.5a3.5 3.5 0 0 1-3.5 3.5 M12 13v4 M8.5 20h7 M9.5 17h5v3h-5z",
  rocket: "M12 3c3 2 4.5 5 4.5 9l-2 3h-5l-2-3c0-4 1.5-7 4.5-9Z M12 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z M9.5 15l-2.5 2 1 3 2.5-2 M14.5 15l2.5 2-1 3-2.5-2 M12 18v3",
  cart: "M3 4h2.5l2.2 10.5a1.5 1.5 0 0 0 1.5 1.2h7.6a1.5 1.5 0 0 0 1.5-1.1L20 8H6.4 M9.5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z M17 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
  briefcase: "M4 8.5a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 20 8.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 17.5v-9Z M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7 M4 12.5h16 M11 12.5v1.5h2v-1.5",
  building: "M5 20V5.5A1.5 1.5 0 0 1 6.5 4h7A1.5 1.5 0 0 1 15 5.5V20 M15 10h3.5a1.5 1.5 0 0 1 1.5 1.5V20 M3 20h18 M8 8h1 M11 8h1 M8 11h1 M11 11h1 M8 14h1 M11 14h1 M10 20v-3",
  factory: "M3 20V10l5 3V10l5 3V10l5 3V5h3v15H3Z M7 17h2 M12 17h2",
  heart: "M12 19.5s-7.5-4.6-7.5-10A4 4 0 0 1 12 7a4 4 0 0 1 7.5 2.5c0 5.4-7.5 10-7.5 10Z M8 11.5h2l1-2 2 4 1-2h2",
  coin: "M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z M14.5 9.2a2.6 2.6 0 0 0-2.5-1.2c-1.4 0-2.5.8-2.5 2s1.1 1.6 2.5 2 2.5.8 2.5 2-1.1 2-2.5 2a2.7 2.7 0 0 1-2.6-1.3 M12 6.5V8 M12 16v1.5",
  plane: "M10.5 13.5 4 11.5l1.5-1.5 6.5.5 4-4.5a1.8 1.8 0 0 1 2.5 2.5l-4.5 4 .5 6.5-1.5 1.5-2-6.5-3 3v2l-1 1-1-3-3-1 1-1h2l3-3Z",
  /* UI */
  arrowUpRight: "M7 17 17 7 M8 7h9v9",
  arrowRight: "M4 12h16 M14 6l6 6-6 6",
  arrowLeft: "M20 12H4 M10 6l-6 6 6 6",
  plus: "M12 5v14 M5 12h14",
  minus: "M5 12h14",
  check: "M5 12.5l4.5 4.5L19 7.5",
  close: "M6 6l12 12 M18 6 6 18",
  menu: "M4 7h16 M4 12h16 M4 17h10",
  globe: "M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z M3.5 12h17 M12 3.5c2.2 2.3 3.3 5.2 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.2-3.3-8.5S9.8 5.8 12 3.5Z",
  mail: "M4 6.5h16v11H4z M4 7l8 6 8-6",
  phone: "M5 4.5h3.5l1.5 4-2 1.5a10 10 0 0 0 6 6l1.5-2 4 1.5V19a1.5 1.5 0 0 1-1.5 1.5A15.5 15.5 0 0 1 3.5 6 1.5 1.5 0 0 1 5 4.5Z",
  pin: "M12 21s6.5-5.6 6.5-11a6.5 6.5 0 0 0-13 0C5.5 15.4 12 21 12 21Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  play: "M8 5.5v13l10.5-6.5L8 5.5Z",
  chevronDown: "M6 9.5l6 6 6-6",
  chevronRight: "M9.5 6l6 6-6 6",
  star: "M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8-4.3-4.1 5.9-.9L12 3.5Z",
  quote: "M5 17.5c0-4.5 1-8 5-10 M5 17.5h4v-4H5 M14 17.5c0-4.5 1-8 5-10 M14 17.5h4v-4h-4",
  grid: "M4 4h6v6H4z M14 4h6v6h-6z M4 14h6v6H4z M14 14h6v6h-6z",
  layers: "M12 4 3.5 8.5 12 13l8.5-4.5L12 4Z M3.5 12.5 12 17l8.5-4.5 M3.5 16.5 12 21l8.5-4.5",
  bolt: "M13 3 5 13.5h6L10 21l9-11h-6l0-7Z",
  chart: "M4 20V4 M4 20h16 M8 16v-4 M12 16V8 M16 16v-6 M20 16V6",
  shield: "M12 3.5 5 6v5.5c0 4.4 3 7.7 7 9 4-1.3 7-4.6 7-9V6l-7-2.5Z M9 12l2 2 4-4",
  users: "M9 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z M3 20a6 6 0 0 1 12 0 M16 4.5a3.5 3.5 0 0 1 0 6.5 M18 14.5a5.5 5.5 0 0 1 3 5.5",
  clock: "M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z M12 7.5V12l3 2",
  target: "M12 20.5a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z M12 12h.01",
  code: "M8.5 7.5 4 12l4.5 4.5 M15.5 7.5 20 12l-4.5 4.5 M13.5 5l-3 14",
  server: "M4 5h16v6H4z M4 13h16v6H4z M7.5 8h.01 M7.5 16h.01 M11 8h6 M11 16h6",
  link: "M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1 M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1",
  eye: "M2.5 12S6 5.5 12 5.5 21.5 12 21.5 12 18 18.5 12 18.5 2.5 12 2.5 12Z M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
  lock: "M6 11h12v9H6z M8.5 11V8a3.5 3.5 0 0 1 7 0v3",
  calendar: "M4 6h16v14H4z M4 10h16 M8 3.5v4 M16 3.5v4",
  send: "M20.5 3.5 10 14 M20.5 3.5 14 20.5l-4-6.5-6.5-4 17-6.5Z",
  dots: "M5 5h4v4H5z M15 5h4v4h-4z M5 15h4v4H5z M15 15h4v4h-4z",
} as const;

export type IconKey = keyof typeof P;
export const ICON_KEYS = Object.keys(P) as IconKey[];

export function Icon({
  name,
  size = 24,
  stroke = 1.6,
  className,
  title,
}: {
  name: IconKey;
  size?: number;
  stroke?: number;
  className?: string;
  title?: string;
}) {
  const d = P[name];
  const filled = name === "play" || name === "dots";
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={filled ? "currentColor" : "none"}
      stroke={filled ? "none" : "currentColor"}
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
    >
      {title ? <title>{title}</title> : null}
      <path d={d} />
    </svg>
  );
}
