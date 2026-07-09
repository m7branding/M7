// ============================================================
// M7 — Brand / tool iconen. Echte, officiële logo's (single-path 24x24,
// bron: Simple Icons) gerenderd in de merk-kleur. Merken die niet in de
// Simple Icons-set zitten (Memberstack, Wized, Pipedrive, Teamleader,
// ActiveCampaign) vallen terug op een nette lettermark-chip.
// ============================================================

import { BRAND_PATHS } from "./brandPaths";

// Merken zonder officieel single-path logo: we tonen hun echte favicon.
const FAVICONS: Partial<Record<string, string>> = {
  memberstack: "/brand/memberstack.png",
  wized: "/brand/wized.png",
  pipedrive: "/brand/pipedrive.png",
  teamleader: "/brand/teamleader.png",
  activecampaign: "/brand/activecampaign.png",
};

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
  /** merk-kleur waarin het logo/lettermark wordt getoond. */
  color: string;
  /** korte letters voor merken zonder officieel Simple-Icons-logo. */
  letters?: string;
};

// Merk-kleuren (officiële brand-hex; op donkere merken een lichte tint voor
// leesbaarheid op de dark theme).
export const BRANDS: Record<BrandKey, Brand> = {
  wordpress: { name: "WordPress", color: "#3858E9" },
  webflow: { name: "Webflow", color: "#146EF5" },
  figma: { name: "Figma", color: "#A259FF" },
  adobe: { name: "Adobe", color: "#FA0F00" },
  shopify: { name: "Shopify", color: "#95BF47" },
  woocommerce: { name: "WooCommerce", color: "#9B5C8F" },
  stripe: { name: "Stripe", color: "#635BFF" },
  make: { name: "Make", color: "#B14BF4" },
  zapier: { name: "Zapier", color: "#FF4F00" },
  airtable: { name: "Airtable", color: "#2D9BF0" },
  memberstack: { name: "Memberstack", color: "#6D5EF6", letters: "Ms" },
  wized: { name: "Wized", color: "#3B5BFE", letters: "Wz" },
  apple: { name: "iOS", color: "#E9E9EE" },
  android: { name: "Android", color: "#3DDC84" },
  meta: { name: "Meta Ads", color: "#0866FF" },
  linkedin: { name: "LinkedIn", color: "#0A66C2" },
  tiktok: { name: "TikTok", color: "#E9E9EE" },
  reddit: { name: "Reddit", color: "#FF4500" },
  googleads: { name: "Google Ads", color: "#4285F4" },
  googleanalytics: { name: "Analytics (GA4)", color: "#E37400" },
  googletagmanager: { name: "Tag Manager", color: "#4285F4" },
  googlesearchconsole: { name: "Search Console", color: "#458CF5" },
  notion: { name: "Notion", color: "#E9E9EE" },
  hubspot: { name: "HubSpot", color: "#FF7A59" },
  pipedrive: { name: "Pipedrive", color: "#2A9D3C", letters: "Pd" },
  odoo: { name: "Odoo", color: "#9B6A94" },
  teamleader: { name: "Teamleader", color: "#00B2B2", letters: "Tl" },
  mailchimp: { name: "Mailchimp", color: "#FFE01B", letters: "Mc" },
  activecampaign: { name: "ActiveCampaign", color: "#356AE6", letters: "Ac" },
  resend: { name: "Resend", color: "#E9E9EE" },
  lottie: { name: "Lottie", color: "#00DDB3" },
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
  const d = BRAND_PATHS[name];
  const fav = FAVICONS[name];
  if (!d) {
    if (fav) {
      return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={fav}
          alt={b.name}
          width={size}
          height={size}
          className={`brand-fav ${className}`}
          loading="lazy"
        />
      );
    }
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
      style={{ color: b.color }}
      fill="currentColor"
      aria-hidden
    >
      <path d={d} />
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
        <BrandIcon name={name} size={17} />
      </span>
      {b.name}
    </span>
  );
}

/** Officiële Webflow "Professional Partner"-badge (M7 is Webflow Professional Partner). */
export function WebflowPartnerBadge() {
  return (
    <span className="wf-partner" title="M7 is Webflow Professional Partner">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/webflow-partner.png" alt="Webflow Professional Partner" className="wf-partner-img" />
    </span>
  );
}
