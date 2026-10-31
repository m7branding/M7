import fs from "node:fs";
import path from "node:path";

/* ============================================================
   Afmetingen van een beeld in /public, uit de bestandsheader (webp, png,
   jpg). Alleen server-side (build/SSG): zo krijgt de galerij echte
   verhoudingen (geen layout shift, slimme verdeling van portret en
   landschap) zonder dat er een beeld-library bij hoeft.
   ============================================================ */

export type Size = { w: number; h: number };

const cache = new Map<string, Size | null>();
const PUBLIC = path.join(process.cwd(), "public");

function parse(buf: Buffer): Size | null {
  // WebP (RIFF....WEBP)
  if (buf.toString("ascii", 0, 4) === "RIFF" && buf.toString("ascii", 8, 12) === "WEBP") {
    const kind = buf.toString("ascii", 12, 16);
    if (kind === "VP8X") return { w: buf.readUIntLE(24, 3) + 1, h: buf.readUIntLE(27, 3) + 1 };
    if (kind === "VP8 ") return { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
    if (kind === "VP8L") {
      const v = buf.readUInt32LE(21);
      return { w: (v & 0x3fff) + 1, h: ((v >> 14) & 0x3fff) + 1 };
    }
    return null;
  }
  // PNG
  if (buf.readUInt32BE(0) === 0x89504e47) return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  // JPEG: zoek het SOF-segment
  if (buf[0] === 0xff && buf[1] === 0xd8) {
    let o = 2;
    while (o + 9 < buf.length) {
      if (buf[o] !== 0xff) return null;
      const marker = buf[o + 1];
      const len = buf.readUInt16BE(o + 2);
      if (marker >= 0xc0 && marker <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marker)) {
        return { w: buf.readUInt16BE(o + 7), h: buf.readUInt16BE(o + 5) };
      }
      o += 2 + len;
    }
  }
  return null;
}

/** Breedte en hoogte van een /public-beeld (bv. "/media/cases/x/01.webp"), of null als het onbekend is. */
export function imageSize(src: string): Size | null {
  if (cache.has(src)) return cache.get(src)!;
  let size: Size | null = null;
  if (src.startsWith("/") && !src.startsWith("//")) {
    try {
      const fd = fs.openSync(path.join(PUBLIC, decodeURI(src.split("?")[0])), "r");
      const buf = Buffer.alloc(256 * 1024);
      const n = fs.readSync(fd, buf, 0, buf.length, 0);
      fs.closeSync(fd);
      size = parse(buf.subarray(0, n));
    } catch {
      size = null;
    }
  }
  cache.set(src, size);
  return size;
}
