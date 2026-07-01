// ============================================================
// M7 — Brand / tool iconen. Herkenbare (vereenvoudigde) logo's voor
// de platforms en services die we inzetten. Ieder icoon rendert in een
// 0 0 24 24 viewBox. Icons met eigen merk-kleuren zetten hun fills zelf;
// mono-glyphs gebruiken currentColor (ingekleurd via de merk-kleur).
// Voor niche-tools valt het systeem terug op een nette lettermark-chip.
// ============================================================

import type { ReactNode } from "react";

export type BrandKey =
  | "wordpress"
  | "webflow"
  | "figma"
  | "adobe"
  | "shopify"
  | "woocommerce"
  | "stripe"
  | "make"
  | "zapier"
  | "airtable"
  | "memberstack"
  | "wized"
  | "apple"
  | "android"
  | "meta"
  | "linkedin"
  | "tiktok"
  | "reddit"
  | "googleads"
  | "googleanalytics"
  | "googletagmanager"
  | "googlesearchconsole"
  | "notion"
  | "hubspot"
  | "pipedrive"
  | "odoo"
  | "teamleader"
  | "mailchimp"
  | "activecampaign"
  | "resend"
  | "lottie";

type Brand = {
  name: string;
  color: string;
  /** true = glyph gebruikt currentColor (ingekleurd met `color`). */
  mono?: boolean;
  /** eigen SVG-glyph; als afwezig wordt een lettermark getoond. */
  glyph?: ReactNode;
  /** korte letters voor de lettermark-fallback. */
  letters?: string;
};

// ------------------------------------------------------------ glyphs
const wordpress = (
  <>
    <circle cx="12" cy="12" r="10.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M3.2 12c0-1.28.27-2.5.76-3.6L8.3 19.3A8.8 8.8 0 0 1 3.2 12Zm8.8 8.8c-.86 0-1.7-.12-2.48-.35l2.63-7.64 2.7 7.38.06.13a8.8 8.8 0 0 1-2.9.48Zm1.2-12.94c.53-.03 1-.09 1-.09.47-.06.42-.75-.05-.72 0 0-1.42.11-2.34.11-.86 0-2.31-.11-2.31-.11-.47-.03-.53.69-.06.72 0 0 .44.06.92.09l1.38 3.78-1.94 5.8-3.23-9.58c.53-.03 1-.09 1-.09.47-.06.42-.75-.06-.72 0 0-1.41.11-2.33.11l-.4-.01A8.8 8.8 0 0 1 13.5 3.3l-.13.01c-1.02.06-1.74.95-1.74 1.9 0 .86.49 1.58 1.02 2.44.4.7.86 1.6.86 2.9 0 .9-.34 1.94-.8 3.4l-1.05 3.5-3.8-11.3.02-.19Zm3.36 12.03 2.66-7.68c.5-1.24.66-2.24.66-3.12l-.03-.5A8.8 8.8 0 0 1 20.8 12a8.79 8.79 0 0 1-4.24 7.9Z"
      fill="currentColor"
    />
  </>
);

const webflow = (
  <path
    d="M21.5 5.5 15.9 18.5h-3.4l2.34-4.53h-.1c-1.93 2.51-4.82 4.17-8.64 4.53V14.1s2.45-.14 3.88-1.65h-.1L6.4 5.5h3.09l1.65 4.13 1.65-4.13h2.34l1.53 4.1L18.4 5.5h3.1Z"
    fill="currentColor"
  />
);

const figma = (
  <>
    <path d="M9 2h3v6.67H9A3.33 3.33 0 0 1 9 2Z" fill="#F24E1E" />
    <path d="M12 2h3a3.33 3.33 0 0 1 0 6.67h-3V2Z" fill="#FF7262" />
    <path d="M9 8.67h3v6.66H9a3.33 3.33 0 0 1 0-6.66Z" fill="#A259FF" />
    <path d="M12 8.67h.17a3.33 3.33 0 1 1-3.17 3.33v-.16a3.33 3.33 0 0 1 3-3.17Z" fill="#1ABCFE" transform="translate(0 0)" />
    <circle cx="12" cy="18.67" r="3.33" fill="#0ACF83" transform="translate(0 -3.34)" />
    <path d="M9 15.33h3V22H9a3.33 3.33 0 0 1 0-6.67Z" fill="#0ACF83" />
  </>
);

const adobe = (
  <path
    d="M7.3 3.5H2.5v17L9.9 3.5H7.3Zm9.4 0h-2.6L21.5 20.5V3.5h-4.8ZM12 9.6l4.3 10.9h-2.8l-1.28-3.24H8.94L12 9.6Z"
    fill="currentColor"
  />
);

const shopify = (
  <path
    d="M15.3 5.1c-.1 0-1.9.14-1.9.14s-1.26-1.25-1.4-1.39c-.14-.14-.42-.1-.53-.07l-.72.22C10.4 3.35 9.86 3 9.1 3 7.3 3 6.44 5.25 6.17 6.4l-1.5.46c-.46.15-.48.16-.54.6-.05.33-1.26 9.7-1.26 9.7L12.4 21l5.28-1.14S15.42 5.2 15.4 5.1Zm-2.9-.72-1.16.36c0-.83-.1-2-.5-2 .8.04 1.34 1.02 1.66 1.64Zm-2.32-1.4c.4.36.66 1.34.66 2.14l-1.9.6c.36-1.4 1.05-2.08 1.24-2.74Zm-.9 4.3.3 6.1s-.75-.4-1.66-.4c-1.35 0-1.42.85-1.42 1.06 0 1.16 3.03 1.6 3.03 4.32 0 2.14-1.36 3.52-3.2 3.52a4.4 4.4 0 0 1-.15-.01l1.55-11.9 1.55-2.79Z"
    fill="currentColor"
  />
);

const woocommerce = (
  <>
    <rect x="1.5" y="6" width="21" height="12" rx="4" fill="currentColor" opacity="0.9" />
    <path d="M5 10.2c.2 1.7.5 3 .9 3.9.2.4.5.6.8.6.5 0 .8-.5 1-1.4.2-.9.3-1.6.3-2.1.2 1.9.6 3.5 1.4 3.5.3 0 .6-.2.8-.7l.7 1.4" stroke="#fff" strokeWidth="1.1" fill="none" strokeLinecap="round" />
    <circle cx="16.5" cy="12" r="2.2" fill="none" stroke="#fff" strokeWidth="1.1" />
    <circle cx="20" cy="12" r="0.1" fill="#fff" />
  </>
);

const stripe = (
  <>
    <rect x="2" y="4" width="20" height="16" rx="4" fill="currentColor" />
    <path d="M11.3 10.1c0-.5.42-.7 1.1-.7.98 0 2.2.3 3.18.83V8.02A8.3 8.3 0 0 0 12.4 7.4c-2.62 0-4.36 1.37-4.36 3.66 0 3.57 4.9 3 4.9 4.54 0 .6-.52.79-1.24.79-1.07 0-2.44-.44-3.52-1.03v2.28c1.2.52 2.42.74 3.52.74 2.68 0 4.53-1.33 4.53-3.65-.01-3.85-4.93-3.17-4.93-4.62Z" fill="#fff" />
  </>
);

const zapier = (
  <path
    d="M14.4 12c0 .78-.14 1.53-.4 2.22.7.27 1.45.4 2.24.4.78 0 1.53-.13 2.22-.4a6.36 6.36 0 0 0 0-4.45 6.36 6.36 0 0 0-2.22-.4c-.79 0-1.54.14-2.23.4.26.7.4 1.45.4 2.23ZM12 14.4c-.78 0-1.53-.14-2.22-.4a6.36 6.36 0 0 0-.4 2.23c0 .79.13 1.54.4 2.23a6.36 6.36 0 0 0 4.44 0c.27-.69.4-1.44.4-2.23 0-.78-.13-1.53-.4-2.22-.69.26-1.44.4-2.22.4ZM9.6 12c0-.78.14-1.53.4-2.22a6.36 6.36 0 0 0-2.23-.4c-.78 0-1.53.13-2.22.4a6.36 6.36 0 0 0 0 4.44c.69.27 1.44.4 2.22.4.79 0 1.54-.13 2.23-.4A6.34 6.34 0 0 1 9.6 12Zm2.4-2.4c.78 0 1.53.14 2.22.4.27-.69.4-1.44.4-2.22 0-.79-.13-1.54-.4-2.23a6.36 6.36 0 0 0-4.44 0 6.36 6.36 0 0 0-.4 2.23c0 .78.13 1.53.4 2.22.69-.26 1.44-.4 2.22-.4Z"
    fill="currentColor"
  />
);

const airtable = (
  <>
    <path d="M11.2 3.3 2.9 6.7c-.6.24-.6 1.1.01 1.34l8.35 3.3c.47.18 1 .18 1.47 0l8.35-3.3c.6-.25.6-1.1 0-1.34l-8.3-3.4a2 2 0 0 0-1.57 0Z" fill="#FFBF00" />
    <path d="M12.9 12.9v7.65c0 .5.5.85.97.66l6.5-2.52a.7.7 0 0 0 .45-.66V10.4a.7.7 0 0 0-.97-.66l-6.5 2.5a.7.7 0 0 0-.45.66Z" fill="#26B5F8" />
    <path d="M11.1 13.2 3.3 17c-.4.2-.4.4-.4.66v.02c0 .1.03.2.08.28.14.2.4.3.66.2l7.5-2.9V13.2Z" fill="#ED3049" />
    <path d="M3.5 10.1 8 12l3.1-1.2-4.3-1.7c-.4-.16-.9-.05-1.2.27L3.5 10.1Z" fill="#ED3049" opacity="0.55" />
  </>
);

const apple = (
  <path
    d="M16.3 12.6c-.02-2.02 1.65-2.99 1.72-3.04-.94-1.37-2.4-1.56-2.92-1.58-1.24-.13-2.42.73-3.05.73-.63 0-1.6-.71-2.63-.69-1.35.02-2.6.79-3.3 2-1.4 2.44-.36 6.05 1 8.03.67.97 1.47 2.06 2.5 2.02 1-.04 1.38-.65 2.6-.65 1.2 0 1.55.65 2.6.63 1.08-.02 1.76-.99 2.42-1.96.76-1.12 1.08-2.2 1.1-2.26-.02-.01-2.1-.81-2.12-3.2ZM14.3 6.6c.55-.67.92-1.6.82-2.53-.79.03-1.75.53-2.32 1.2-.51.58-.96 1.53-.84 2.43.88.07 1.79-.44 2.34-1.1Z"
    fill="currentColor"
  />
);

const android = (
  <>
    <path d="M6 10.5h12v6a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 16.5v-6Z" fill="currentColor" />
    <rect x="3" y="10.5" width="1.8" height="6" rx=".9" fill="currentColor" />
    <rect x="19.2" y="10.5" width="1.8" height="6" rx=".9" fill="currentColor" />
    <rect x="8.5" y="17" width="1.8" height="4" rx=".9" fill="currentColor" />
    <rect x="13.7" y="17" width="1.8" height="4" rx=".9" fill="currentColor" />
    <path d="M6 10c0-2.4 1.6-4.45 3.86-5.36l-.9-1.5a.35.35 0 0 1 .6-.36l.94 1.56A6.9 6.9 0 0 1 12 4c.53 0 1.04.06 1.5.18l.94-1.56a.35.35 0 0 1 .6.36l-.9 1.5A5.98 5.98 0 0 1 18 10H6Z" fill="currentColor" />
    <circle cx="9.5" cy="7.5" r=".7" fill="#0a0a0b" />
    <circle cx="14.5" cy="7.5" r=".7" fill="#0a0a0b" />
  </>
);

const meta = (
  <path
    d="M3 14.4c0-3.6 1.8-6.9 4.1-6.9 1.3 0 2.36 1 3.3 2.55.66 1.08 1.28 2.4 1.9 3.7.62-1.3 1.24-2.62 1.9-3.7C15.14 8.5 16.2 7.5 17.5 7.5c2.3 0 4.1 3.3 4.1 6.9 0 1.65-.7 2.7-1.98 2.7-1.06 0-1.86-.7-2.86-2.4-.5-.85-1.02-1.86-1.56-2.9-.54 1.04-1.06 2.05-1.56 2.9-1 1.7-1.8 2.4-2.86 2.4-1.06 0-1.68-.6-2.02-1.5-.34.9-.96 1.5-2.02 1.5C3.7 17.1 3 16.05 3 14.4Zm2 0c0 .95.28 1.35.72 1.35.5 0 .86-.4 1.5-1.5.5-.86.98-1.85 1.44-2.85-.42-.86-.86-1.5-1.3-1.9-.34-.3-.66-.4-.96-.4-1.02 0-1.9 2.2-1.9 5.3Zm12.28-5.3c-.3 0-.62.1-.96.4-.44.4-.88 1.04-1.3 1.9.46 1 .94 1.99 1.44 2.85.64 1.1 1 1.5 1.5 1.5.44 0 .72-.4.72-1.35 0-3.1-.88-5.3-1.4-5.3Z"
    fill="currentColor"
  />
);

const linkedin = (
  <>
    <rect x="2.5" y="2.5" width="19" height="19" rx="3.5" fill="currentColor" />
    <path d="M7.1 9.4v8H4.5v-8h2.6ZM5.8 5.3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM9 9.4h2.5v1.1h.03c.35-.63 1.2-1.3 2.47-1.3 2.64 0 3.13 1.65 3.13 3.8v4.4h-2.6v-3.9c0-.93-.02-2.13-1.36-2.13-1.36 0-1.57.99-1.57 2.06v3.97H9v-8Z" fill="#fff" />
  </>
);

const tiktok = (
  <path
    d="M16.5 3c.35 1.9 1.5 3.35 3.4 3.65v2.63c-1.1.1-2.06-.24-3.18-.9v4.1c0 5.2-5.68 6.83-7.96 3.1-1.47-2.4-.56-6.6 4.15-6.77v2.77c-.36.06-.74.15-1.1.27-1.05.35-1.64 1.02-1.48 2.2.32 2.26 4.46 2.93 4.12-1.5V3h2.05Z"
    fill="currentColor"
  />
);

const reddit = (
  <>
    <circle cx="12" cy="12" r="10" fill="currentColor" />
    <circle cx="12" cy="13" r="6" fill="#fff" />
    <circle cx="8.6" cy="12.6" r="1.2" fill="currentColor" />
    <circle cx="15.4" cy="12.6" r="1.2" fill="currentColor" />
    <path d="M9.3 15.4c1.5 1.1 3.9 1.1 5.4 0" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none" />
    <circle cx="18.5" cy="8.5" r="1.6" fill="#fff" />
    <circle cx="12" cy="6.2" r="1.2" fill="#fff" />
    <path d="M12 7.2v4M17.4 9.2 12.6 7" stroke="#fff" strokeWidth="1" />
  </>
);

const googleG = (colorful = true) => (
  <>
    <path d="M21.6 12.2c0-.64-.06-1.25-.16-1.84H12v3.49h5.38a4.6 4.6 0 0 1-2 3.02v2.5h3.24c1.9-1.75 2.98-4.33 2.98-7.17Z" fill={colorful ? "#4285F4" : "currentColor"} />
    <path d="M12 22c2.7 0 4.96-.9 6.62-2.42l-3.24-2.5c-.9.6-2.05.96-3.38.96-2.6 0-4.8-1.76-5.58-4.12H3.06v2.58A10 10 0 0 0 12 22Z" fill={colorful ? "#34A853" : "currentColor"} />
    <path d="M6.42 13.92a6 6 0 0 1 0-3.84V7.5H3.06a10 10 0 0 0 0 9l3.36-2.58Z" fill={colorful ? "#FBBC05" : "currentColor"} />
    <path d="M12 5.96c1.47 0 2.79.5 3.83 1.5l2.87-2.87A10 10 0 0 0 3.06 7.5l3.36 2.58C7.2 7.72 9.4 5.96 12 5.96Z" fill={colorful ? "#EA4335" : "currentColor"} />
  </>
);

const googleanalytics = (
  <>
    <rect x="16" y="3" width="5" height="18" rx="2.5" fill="#F9AB00" />
    <rect x="9.5" y="9" width="5" height="12" rx="2.5" fill="#E37400" />
    <circle cx="5.5" cy="18" r="2.7" fill="#E37400" />
  </>
);

const googletagmanager = (
  <>
    <path d="M9.9 21.3 2.7 14.1a3 3 0 0 1 0-4.24l7.16-7.16a3 3 0 0 1 4.24 0l7.2 7.2a3 3 0 0 1 0 4.24l-7.16 7.16a3 3 0 0 1-4.24 0Z" fill="#8AB4F8" opacity="0.55" />
    <path d="M13.9 21.3 2.7 10.1a3 3 0 0 1 0-4.24l3-3 15.6 15.6-3 3a3 3 0 0 1-4.24 0Z" fill="#4285F4" />
    <circle cx="12" cy="18.4" r="2.1" fill="#246FDB" />
  </>
);

const googlesearchconsole = (
  <>
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5V15a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 15V5.5Z" fill="#458CF5" opacity=".45" />
    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H12v12.5H5.5A1.5 1.5 0 0 1 4 15V5.5Z" fill="#458CF5" />
    <circle cx="14" cy="14" r="4" fill="none" stroke="#F9AB00" strokeWidth="1.8" />
    <path d="M17 17l3 3" stroke="#F9AB00" strokeWidth="1.8" strokeLinecap="round" />
  </>
);

const notion = (
  <>
    <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
    <path d="M8 8.2v7.6M8 8.2l6 7.6M16 8.2v7.6" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </>
);

const hubspot = (
  <>
    <path d="M16 8.4V5.6a1.9 1.9 0 1 0-1.4 0V8.4a5.4 5.4 0 0 0-2.4 1L7.5 5.9a2.1 2.1 0 1 0-1.2 1.5l4.6 3.4a5.3 5.3 0 1 0 5.1-2.4Zm-1 8.9a2.6 2.6 0 1 1 0-5.2 2.6 2.6 0 0 1 0 5.2Z" fill="currentColor" />
  </>
);

const mono = (glyph: ReactNode) => glyph;

// ------------------------------------------------------------ registry
export const BRANDS: Record<BrandKey, Brand> = {
  wordpress: { name: "WordPress", color: "#3858E9", mono: true, glyph: wordpress },
  webflow: { name: "Webflow", color: "#146EF5", mono: true, glyph: webflow },
  figma: { name: "Figma", color: "#A259FF", glyph: figma },
  adobe: { name: "Adobe", color: "#FA0F00", mono: true, glyph: adobe },
  shopify: { name: "Shopify", color: "#95BF47", mono: true, glyph: shopify },
  woocommerce: { name: "WooCommerce", color: "#7F54B3", mono: true, glyph: woocommerce },
  stripe: { name: "Stripe", color: "#635BFF", mono: true, glyph: stripe },
  make: { name: "Make", color: "#6D00CC", letters: "M" },
  zapier: { name: "Zapier", color: "#FF4F00", mono: true, glyph: zapier },
  airtable: { name: "Airtable", color: "#2D7FF9", glyph: airtable },
  memberstack: { name: "Memberstack", color: "#6D5EF6", letters: "Ms" },
  wized: { name: "Wized", color: "#3B5BFE", letters: "Wz" },
  apple: { name: "iOS", color: "#e9e9ee", mono: true, glyph: apple },
  android: { name: "Android", color: "#3DDC84", mono: true, glyph: android },
  meta: { name: "Meta Ads", color: "#0866FF", mono: true, glyph: meta },
  linkedin: { name: "LinkedIn", color: "#0A66C2", glyph: linkedin },
  tiktok: { name: "TikTok", color: "#e9e9ee", mono: true, glyph: tiktok },
  reddit: { name: "Reddit", color: "#FF4500", mono: true, glyph: reddit },
  googleads: { name: "Google Ads", color: "#4285F4", glyph: googleG() },
  googleanalytics: { name: "Analytics (GA4)", color: "#E37400", glyph: googleanalytics },
  googletagmanager: { name: "Tag Manager", color: "#4285F4", glyph: googletagmanager },
  googlesearchconsole: { name: "Search Console", color: "#458CF5", glyph: googlesearchconsole },
  notion: { name: "Notion", color: "#e9e9ee", glyph: notion },
  hubspot: { name: "HubSpot", color: "#FF7A59", mono: true, glyph: hubspot },
  pipedrive: { name: "Pipedrive", color: "#017737", letters: "Pd" },
  odoo: { name: "Odoo", color: "#714B67", letters: "Od" },
  teamleader: { name: "Teamleader", color: "#00B2B2", letters: "Tl" },
  mailchimp: { name: "Mailchimp", color: "#FFE01B", letters: "Mc" },
  activecampaign: { name: "ActiveCampaign", color: "#356AE6", letters: "Ac" },
  resend: { name: "Resend", color: "#e9e9ee", letters: "Re" },
  lottie: { name: "Lottie", color: "#00DDB3", letters: "Lo" },
};

// ------------------------------------------------------------ components
export function BrandIcon({
  name,
  size = 22,
  className = "",
}: {
  name: BrandKey;
  size?: number;
  className?: string;
}) {
  const b = BRANDS[name];
  if (!b) return null;
  if (!b.glyph) {
    return (
      <span
        className={`brand-letters ${className}`}
        style={{ width: size, height: size, background: b.color }}
        aria-hidden
      >
        {b.letters}
      </span>
    );
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={className}
      style={b.mono ? { color: b.color } : undefined}
      aria-hidden
    >
      {b.mono ? mono(b.glyph) : b.glyph}
    </svg>
  );
}

/** Chip met merk-icoon + naam — voor de "tools & platforms"-rijen. */
export function BrandChip({ name }: { name: BrandKey }) {
  const b = BRANDS[name];
  if (!b) return null;
  return (
    <span className="brand-chip" title={b.name}>
      <span className="brand-chip-tile" style={{ ["--bc" as string]: b.color }}>
        <BrandIcon name={name} size={18} />
      </span>
      {b.name}
    </span>
  );
}

/** Webflow "Professional Partner"-badge. */
export function WebflowPartnerBadge() {
  return (
    <span className="wf-partner" title="M7 is Webflow Professional Partner">
      <span className="wf-partner-mark">
        <BrandIcon name="webflow" size={18} />
      </span>
      <span className="wf-partner-txt">
        <small>Webflow</small>
        <strong>Professional Partner</strong>
      </span>
      <svg viewBox="0 0 24 24" className="wf-partner-check" aria-hidden>
        <path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}
