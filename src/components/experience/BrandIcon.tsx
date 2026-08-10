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
  | "lottie"
  | "openai"
  | "claude"
  | "googlegemini"
  | "perplexity"
  | "pagespeedinsights"
  | "clarity"
  | "weglot"
  | "amazonwebservices"
  | "netlify"
  | "vercel"
  | "github"
  | "anthropic"
  | "gmail"
  | "whatsapp"
  | "pinterest"
  | "googledrive"
  | "dropbox"
  | "slack"
  | "cloudflare"
  | "supabase"
  | "postgresql"
  | "docker"
  | "nodedotjs"
  | "nextdotjs"
  | "react"
  | "typescript"
  | "tailwindcss"
  | "vimeo"
  | "youtube"
  | "spotify"
  | "canva"
  | "miro"
  | "trello"
  | "asana"
  | "clickup"
  | "jira"
  | "googlecalendar"
  | "googlesheets"
  | "googledocs"
  | "microsoft365"
  | "microsoftword"
  | "microsoftexcel"
  | "microsoftpowerpoint"
  | "testflight"
  | "metabusiness"
  | "consentstudio"
  | "usercentrics"
  | "translatepress";

/** Merken waarvan het logo (bijna) wit is: op een licht canvas tonen we die
 *  in inkt-zwart, zodat ze niet wegvallen. */
const LIGHT_MARKS = new Set([
  "apple",
  "tiktok",
  "notion",
  "resend",
  "vercel",
  "github",
  "nextdotjs",
  "openai",
]);

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
  openai: { name: "ChatGPT", color: "#E9E9EE" },
  claude: { name: "Claude", color: "#D97757" },
  googlegemini: { name: "Gemini", color: "#8E7CFF" },
  perplexity: { name: "Perplexity", color: "#20B8CD" },
  pagespeedinsights: { name: "PageSpeed Insights", color: "#4285F4" },
  clarity: { name: "Microsoft Clarity", color: "#0F6CBD", letters: "Cl" },
  weglot: { name: "Weglot", color: "#3B82F6", letters: "Wg" },
  amazonwebservices: { name: "AWS", color: "#FF9900" },
  netlify: { name: "Netlify", color: "#00C7B7" },
  vercel: { name: "Vercel", color: "#E9E9EE" },
  github: { name: "GitHub", color: "#E9E9EE" },
  anthropic: { name: "Anthropic", color: "#D97757" },
  gmail: { name: "Gmail", color: "#EA4335" },
  whatsapp: { name: "WhatsApp", color: "#25D366" },
  pinterest: { name: "Pinterest", color: "#BD081C" },
  googledrive: { name: "Google Drive", color: "#4285F4" },
  dropbox: { name: "Dropbox", color: "#0061FF" },
  slack: { name: "Slack", color: "#4A154B" },
  cloudflare: { name: "Cloudflare", color: "#F38020" },
  supabase: { name: "Supabase", color: "#3FCF8E" },
  postgresql: { name: "PostgreSQL", color: "#4169E1" },
  docker: { name: "Docker", color: "#2496ED" },
  nodedotjs: { name: "Node.js", color: "#5FA04E" },
  nextdotjs: { name: "Next.js", color: "#E9E9EE" },
  react: { name: "React", color: "#61DAFB" },
  typescript: { name: "TypeScript", color: "#3178C6" },
  tailwindcss: { name: "Tailwind CSS", color: "#06B6D4" },
  vimeo: { name: "Vimeo", color: "#1AB7EA" },
  youtube: { name: "YouTube", color: "#FF0000" },
  spotify: { name: "Spotify", color: "#1DB954" },
  canva: { name: "Canva", color: "#00C4CC" },
  miro: { name: "Miro", color: "#FFD02F" },
  trello: { name: "Trello", color: "#0052CC" },
  asana: { name: "Asana", color: "#F06A6A" },
  clickup: { name: "ClickUp", color: "#7B68EE" },
  jira: { name: "Jira", color: "#0052CC" },
  googlecalendar: { name: "Google Agenda", color: "#4285F4" },
  googlesheets: { name: "Google Sheets", color: "#34A853" },
  googledocs: { name: "Google Docs", color: "#4285F4" },
  microsoft365: { name: "Microsoft 365", color: "#D83B01", letters: "365" },
  microsoftword: { name: "Word", color: "#2B579A", letters: "W" },
  microsoftexcel: { name: "Excel", color: "#217346", letters: "X" },
  microsoftpowerpoint: { name: "PowerPoint", color: "#D24726", letters: "P" },
  testflight: { name: "TestFlight", color: "#0D96F6", letters: "TF" },
  metabusiness: { name: "Meta Business Suite", color: "#0866FF", letters: "MB" },
  consentstudio: { name: "Consent Studio", color: "#12A150", letters: "CS" },
  usercentrics: { name: "Usercentrics", color: "#1F5AF6", letters: "UC" },
  translatepress: { name: "TranslatePress", color: "#4B65F6", letters: "TP" },
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
      className={`brand-svg ${className}`}
      style={{ color: b.color }}
      fill="currentColor"
      data-light={LIGHT_MARKS.has(name) ? "1" : undefined}
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
