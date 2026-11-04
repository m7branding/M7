/* Extra lijn-iconen voor de over-ons-pagina, in dezelfde stijl als ui/Icon (24px grid, ronde lijnen). */

const P = {
  parking: "M6 3.5h12A2.5 2.5 0 0 1 20.5 6v12a2.5 2.5 0 0 1-2.5 2.5H6A2.5 2.5 0 0 1 3.5 18V6A2.5 2.5 0 0 1 6 3.5Z M9.75 16.5v-9h3a2.75 2.75 0 0 1 0 5.5h-3",
  plug: "M9 3.5v4 M15 3.5v4 M7 7.5h10v3a5 5 0 0 1-10 0v-3Z M12 15.5v2.5a2.5 2.5 0 0 0 2.5 2.5h2 M12.6 9.2l-1.6 2.3h2l-1.6 2.3",
  meeting:
    "M4 10.5h16 M6 10.5v8 M18 10.5v8 M9 3.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Z M15 3.75a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5Z M7.5 10.5c0-1.4.7-2.5 1.5-2.5s1.5 1.1 1.5 2.5 M13.5 10.5c0-1.4.7-2.5 1.5-2.5s1.5 1.1 1.5 2.5",
  silence: "M4 9.5v5h3.5l4.5 4v-13l-4.5 4H4Z M16 9.5l4.5 5 M20.5 9.5l-4.5 5",
  gamepad:
    "M7.6 8h8.8a4 4 0 0 1 3.9 3.2l.8 4a2.4 2.4 0 0 1-4.1 2.1L15.4 15.6H8.6L7 17.3a2.4 2.4 0 0 1-4.1-2.1l.8-4A4 4 0 0 1 7.6 8Z M8 10.5v3 M6.5 12h3 M15.5 11h.01 M17.5 13h.01",
  gym: "M3.5 10v4 M6.5 7.5v9 M17.5 7.5v9 M20.5 10v4 M6.5 12h11",
  darts: "M12 20.5a8.5 8.5 0 1 1 0-17 8.5 8.5 0 0 1 0 17Z M12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Z M12 12l7.5-7.5 M17 4.5h2.5V7",
  fish: "M3.5 12c2.6-3.6 6-5.5 9.5-5.5 2.3 0 4.1 1.1 5.5 2.7L21 7.5v9l-2.5-1.7c-1.4 1.6-3.2 2.7-5.5 2.7-3.5 0-6.9-1.9-9.5-5.5Z M8.5 11.25h.01 M13 9.5c.8 1.6.8 3.4 0 5",
  racket: "M14 3.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Z M9.4 14.6 4 20 M12 8h.01 M15 8h.01 M12 11h.01 M15 11h.01 M18 9.5h.01 M13.5 13.5h.01",
  quote: "M5 7.5a2.5 2.5 0 0 1 2.5-2.5h9A2.5 2.5 0 0 1 19 7.5v6a2.5 2.5 0 0 1-2.5 2.5H11l-4 3.5V16h0.5A2.5 2.5 0 0 1 5 13.5v-6Z M9 9.5v2 M12 9.5v2 M15 9.5v2",
  tree: "M12 3.5l5 6.5h-2.5l3.5 5h-12l3.5-5H7l5-6.5Z M12 15v5.5 M9 20.5h6",
  pin: "M12 21s-6.5-5.6-6.5-11a6.5 6.5 0 0 1 13 0C18.5 15.4 12 21 12 21Z M12 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  route: "M6 16.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z M18 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z M8 18.5h7.5a3 3 0 0 0 0-6h-7a3 3 0 0 1 0-6H16",
  check: "M5 12.5l4.5 4.5L19 7.5",
} as const;

export type AboutIconKey = keyof typeof P;

export function AboutIcon({ name, size = 22, stroke = 1.6, className }: { name: string; size?: number; stroke?: number; className?: string }) {
  const d = P[(name in P ? name : "check") as AboutIconKey];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

/** Iconen voor office.amenities (zelfde volgorde). */
export const AMENITY_ICONS: AboutIconKey[] = ["parking", "plug", "meeting", "silence", "gamepad", "gym", "darts"];
