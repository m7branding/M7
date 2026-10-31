/* ============================================================
   Merkkleur → diepe, rustige tint voor de schermvullende secties op de
   casepagina (statements, quotes, showcase). Via OKLCH: de tint (hue) van
   de klant blijft, lichtheid en verzadiging gaan omlaag. Zo wordt ook geel
   of pastel nooit schreeuwerig, en blijft witte tekst ruim leesbaar
   (contrast ≥ 10:1 bij L ≈ 0,25).
   ============================================================ */

type Lab = { L: number; a: number; b: number };

const toLin = (c: number) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
const toSrgb = (c: number) => (c <= 0.0031308 ? 12.92 * c : 1.055 * Math.pow(c, 1 / 2.4) - 0.055);

function hexToLab(hex: string): Lab {
  const h = hex.replace("#", "");
  const full = h.length === 3 ? h.replace(/./g, (x) => x + x) : h.slice(0, 6);
  const n = parseInt(full, 16);
  const [r, g, b] = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => toLin(v / 255));
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return {
    L: 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    a: 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    b: 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  };
}

function labToHex({ L, a, b }: Lab): string {
  const l = Math.pow(L + 0.3963377774 * a + 0.2158037573 * b, 3);
  const m = Math.pow(L - 0.1055613458 * a - 0.0638541728 * b, 3);
  const s = Math.pow(L - 0.0894841775 * a - 1.291485548 * b, 3);
  const rgb = [
    4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s,
    -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s,
    -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s,
  ];
  return "#" + rgb.map((v) => Math.round(Math.min(1, Math.max(0, toSrgb(v))) * 255).toString(16).padStart(2, "0")).join("");
}

/** Zelfde tint, andere lichtheid en (begrensde) verzadiging. */
function shade(hex: string, L: number, maxC: number, keep = 0.75): string {
  const lab = hexToLab(hex);
  const C = Math.hypot(lab.a, lab.b);
  let h = Math.atan2(lab.b, lab.a);
  // geel wordt donker al snel olijf: iets naar amber/brons draaien, dat blijft warm en herkenbaar
  const deg = (h * 180) / Math.PI;
  if (deg > 86 && deg < 118) h = (80 * Math.PI) / 180;
  const c = Math.min(C * keep, maxC);
  return labToHex({ L, a: c * Math.cos(h), b: c * Math.sin(h) });
}

/** Kleuren voor een merkkleur-sectie: diepe basis, iets lichtere gloed en een accent voor details. */
export function brandTones(hex: string) {
  return {
    /** Achtergrond: diep en rustig. */
    deep: shade(hex, 0.235, 0.075),
    /** Zachte gloed in de hoek (radial gradient). */
    glow: shade(hex, 0.42, 0.13, 0.9),
    /** Fijne details (lijntjes, aanhalingsteken): helder genoeg op de donkere basis. */
    accent: shade(hex, 0.78, 0.16, 1),
  };
}
