/* ============================================================
   Bestaat een mediabestand echt (public/…)? Alleen server-side
   (cases-hero, World of M7): zo schakelt de site vanzelf over zodra
   nieuwe renders klaarstaan, en verwijst hij nooit naar een gat.
   ============================================================ */

import fs from "node:fs";
import path from "node:path";

const seen = new Map<string, number>();
const PUBLIC = path.join(process.cwd(), "public");

/** Grootte in bytes (0 = bestaat niet). In productie onthouden; in development elke keer opnieuw gekeken. */
function sizeOf(src: string): number {
  const dev = process.env.NODE_ENV !== "production";
  if (!dev && seen.has(src)) return seen.get(src)!;
  let n = 0;
  try {
    n = fs.statSync(path.join(PUBLIC, decodeURI(src))).size;
  } catch {
    n = 0;
  }
  if (!dev) seen.set(src, n);
  return n;
}

/** true als `/media/…` in public/ staat. */
export function onDisk(src?: string | null): src is string {
  return Boolean(src && src.startsWith("/") && sizeOf(src) > 0);
}

/** Het lichtste bestaande bestand uit een rij gelijkwaardige beelden (voor kleine tegels), of undefined. */
export function lightest(list: (string | undefined | null)[]): string | undefined {
  const ok = Array.from(new Set(list.filter(onDisk)));
  return ok.sort((a, b) => sizeOf(a) - sizeOf(b))[0];
}

/** Alleen de paden die bestaan. */
export const existing = (list: (string | undefined | null)[]) => list.filter(onDisk);
