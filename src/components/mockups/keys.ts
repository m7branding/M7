/** Iedere peiler heeft een eigen, unieke geanimeerde mockup. */
export const MOCKUP_KEYS = [
  "brand",
  "web",
  "app",
  "flow",
  "seo",
  "social",
  "video",
  "print",
  "configurator",
  "ai",
] as const;
export type MockupKey = (typeof MOCKUP_KEYS)[number];
