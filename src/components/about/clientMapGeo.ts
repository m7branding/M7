/* Projecties voor de klantenkaart (zelfde formules als d3-geo, zie scripts/dotmap/generate.mjs).
   Alleen server-side gebruikt: de client krijgt kant-en-klare viewBox-coördinaten. */

import { NL_MAP, WORLD_MAP, type DotMapMeta } from "@/content/generated/dotmap";

const RAD = Math.PI / 180;

function naturalEarth1(l: number, p: number): [number, number] {
  const p2 = p * p;
  const p4 = p2 * p2;
  return [
    l * (0.8707 - 0.131979 * p2 + p4 * (-0.013791 + p4 * (0.003971 * p2 - 0.001529 * p4))),
    p * (1.007226 + p2 * (0.015085 + p4 * (-0.044475 + 0.028874 * p2 - 0.005916 * p4))),
  ];
}

function mercator(l: number, p: number): [number, number] {
  return [l, Math.log(Math.tan((Math.PI / 2 + p) / 2))];
}

/** lat/lon → viewBox-coördinaten van de gegenereerde kaart. */
export function project(map: DotMapMeta, lat: number, lon: number): [number, number] {
  const { k, tx, ty, type } = map.projection;
  const [x, y] = (type === "mercator" ? mercator : naturalEarth1)(lon * RAD, lat * RAD);
  return [tx + k * x, ty - k * y];
}

/** Valt dit punt binnen de uitsnede van de close-up? */
export function inCloseUp(lat: number, lon: number): boolean {
  const b = NL_MAP.bounds;
  return lon >= b.west && lon <= b.east && lat >= b.south && lat <= b.north;
}

export { NL_MAP, WORLD_MAP };
