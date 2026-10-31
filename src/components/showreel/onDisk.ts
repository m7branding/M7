/* ============================================================
   Bestaat een mediabestand echt (public/…)? Alleen server-side
   (cases-hero, World of M7): zo schakelt de site vanzelf over zodra
   nieuwe renders klaarstaan, en verwijst hij nooit naar een gat.
   ============================================================ */

import fs from "node:fs";
import path from "node:path";

const seen = new Map<string, boolean>();
const PUBLIC = path.join(process.cwd(), "public");

/** true als `/media/…` in public/ staat. In productie onthouden; in development elke keer opnieuw gekeken. */
export function onDisk(src?: string | null): src is string {
  if (!src || !src.startsWith("/")) return false;
  const dev = process.env.NODE_ENV !== "production";
  if (!dev && seen.has(src)) return seen.get(src)!;
  let ok = false;
  try {
    ok = fs.statSync(path.join(PUBLIC, decodeURI(src))).size > 0;
  } catch {
    ok = false;
  }
  if (!dev) seen.set(src, ok);
  return ok;
}

/** Alleen de paden die bestaan. */
export const existing = (list: (string | undefined | null)[]) => list.filter(onDisk);
