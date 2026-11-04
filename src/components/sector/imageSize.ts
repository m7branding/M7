import { readFileSync } from "node:fs";
import { join } from "node:path";

/**
 * Breedte / hoogte van een beeld in /public, uitgelezen uit de bestandskop (webp, png, jpg).
 * Alleen op de server (de sectorpagina's zijn statisch): zo krijgen browser-, tablet-, boek- en
 * drukwerkframes exact de verhouding van het beeld, ook als iemand later een eigen beeld instelt.
 */
const cache = new Map<string, number | null>();

export function aspectOf(src: string): number | null {
  if (cache.has(src)) return cache.get(src)!;
  let ar: number | null = null;
  try {
    if (src.startsWith("/")) {
      const b = readFileSync(join(process.cwd(), "public", decodeURIComponent(src.split("?")[0])));
      const s = dims(b);
      if (s && s.w > 0 && s.h > 0) ar = s.w / s.h;
    }
  } catch {
    ar = null;
  }
  cache.set(src, ar);
  return ar;
}

function dims(b: Buffer): { w: number; h: number } | null {
  // PNG
  if (b.length > 24 && b.readUInt32BE(0) === 0x89504e47) return { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
  // WebP
  if (b.length > 30 && b.toString("ascii", 0, 4) === "RIFF" && b.toString("ascii", 8, 12) === "WEBP") {
    const chunk = b.toString("ascii", 12, 16);
    if (chunk === "VP8X") return { w: 1 + b.readUIntLE(24, 3), h: 1 + b.readUIntLE(27, 3) };
    if (chunk === "VP8 ") return { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
    if (chunk === "VP8L") {
      const n = b.readUInt32LE(21);
      return { w: 1 + (n & 0x3fff), h: 1 + ((n >> 14) & 0x3fff) };
    }
    return null;
  }
  // JPEG: zoek het SOF-segment
  if (b.length > 4 && b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i + 9 < b.length) {
      if (b[i] !== 0xff) return null;
      const m = b[i + 1];
      const len = b.readUInt16BE(i + 2);
      if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) return { w: b.readUInt16BE(i + 7), h: b.readUInt16BE(i + 5) };
      i += 2 + len;
    }
  }
  return null;
}
