/* Playwright staat globaal (NODE_PATH) of lokaal; ESM-imports lezen NODE_PATH niet, require wel. */
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
export const { chromium } = require("playwright");
