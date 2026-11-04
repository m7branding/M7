/* Gegenereerd door scripts/dotmap/generate.mjs: niet met de hand aanpassen. */
/* Bron: Natural Earth (world-atlas). Klantlocaties staan in src/content/client-locations.ts. */

export const WORLD_MAP = {
  "src": "/media/map/world-dots.svg?v=3402372b",
  "w": 1000,
  "h": 431,
  "spacing": 5,
  "dot": 2.3,
  "dots": 5368,
  "projection": {
    "type": "naturalEarth1",
    "k": 182.7896,
    "tx": 500,
    "ty": 252.1221
  }
} as const;

export const NL_MAP = {
  "src": "/media/map/nl-dots.svg?v=48708123",
  "w": 440,
  "h": 512,
  "spacing": 5,
  "dot": 2.4,
  "dots": 3406,
  "projection": {
    "type": "mercator",
    "k": 6074.7332,
    "tx": -339.2771,
    "ty": 6760.8432
  },
  "bounds": {
    "west": 3.2,
    "east": 7.35,
    "south": 50.66,
    "north": 53.62
  }
} as const;

export type DotMapMeta = typeof WORLD_MAP | typeof NL_MAP;
