/* ============================================================
   Tools & platformen die M7 gebruikt — met iconen.
   `si` = sleutel uit simple-icons (https://simpleicons.org).
   Geen `si`? Dan tonen we een strak monogram in `color`.
   Nieuwe tool: voeg hier een regel toe en verwijs ernaar vanuit
   een dienst, toepassing of case.
   ============================================================ */

export type ToolCategory =
  | "platform"
  | "development"
  | "design"
  | "marketing"
  | "analytics"
  | "crm"
  | "automation"
  | "ai"
  | "media"
  | "seo"
  | "hosting";

export interface Tool {
  name: string;
  category: ToolCategory;
  /** simple-icons export, bv. "siWebflow" */
  si?: string;
  /** Merk-/accentkleur (hex zonder #) voor het monogram of de glow. */
  color?: string;
  url?: string;
}

const t = <K extends string>(tools: Record<K, Tool>) => tools;

export const TOOLS = t({
  /* Platforms & CMS */
  webflow: { name: "Webflow", category: "platform", si: "siWebflow", url: "https://webflow.com" },
  wordpress: { name: "WordPress", category: "platform", si: "siWordpress" },
  elementor: { name: "Elementor", category: "platform", si: "siElementor" },
  woocommerce: { name: "WooCommerce", category: "platform", si: "siWoocommerce" },
  shopify: { name: "Shopify", category: "platform", si: "siShopify" },
  framer: { name: "Framer", category: "platform", si: "siFramer" },
  yoast: { name: "Yoast SEO", category: "seo", si: "siYoast" },
  rankmath: { name: "Rank Math", category: "seo", color: "4F46E5" },
  stripe: { name: "Stripe", category: "platform", si: "siStripe" },
  mollie: { name: "Mollie", category: "platform", color: "FFFFFF" },
  sanity: { name: "Sanity", category: "platform", si: "siSanity" },

  /* Development */
  nextjs: { name: "Next.js", category: "development", si: "siNextdotjs" },
  react: { name: "React", category: "development", si: "siReact" },
  typescript: { name: "TypeScript", category: "development", si: "siTypescript" },
  nodejs: { name: "Node.js", category: "development", si: "siNodedotjs" },
  expo: { name: "Expo / React Native", category: "development", si: "siExpo" },
  flutter: { name: "Flutter", category: "development", si: "siFlutter" },
  supabase: { name: "Supabase", category: "development", si: "siSupabase" },
  firebase: { name: "Firebase", category: "development", si: "siFirebase" },
  postgresql: { name: "PostgreSQL", category: "development", si: "siPostgresql" },
  php: { name: "PHP", category: "development", si: "siPhp" },
  tailwind: { name: "Tailwind CSS", category: "development", si: "siTailwindcss" },
  threejs: { name: "Three.js", category: "development", si: "siThreedotjs" },
  gsap: { name: "GSAP", category: "development", si: "siGreensock" },
  github: { name: "GitHub", category: "development", si: "siGithub" },
  appstore: { name: "App Store", category: "development", si: "siAppstore" },
  googleplay: { name: "Google Play", category: "development", si: "siGoogleplay" },
  docker: { name: "Docker", category: "development", si: "siDocker" },
  jira: { name: "Jira", category: "development", si: "siJira" },
  clickup: { name: "ClickUp", category: "development", si: "siClickup" },

  /* Hosting & domeinen */
  vercel: { name: "Vercel", category: "hosting", si: "siVercel" },
  cloudflare: { name: "Cloudflare", category: "hosting", si: "siCloudflare" },
  netlify: { name: "Netlify", category: "hosting", si: "siNetlify" },
  digitalocean: { name: "DigitalOcean", category: "hosting", si: "siDigitalocean" },
  googlecloud: { name: "Google Cloud", category: "hosting", si: "siGooglecloud" },
  plesk: { name: "Plesk", category: "hosting", si: "siPlesk" },
  cpanel: { name: "cPanel", category: "hosting", si: "siCpanel" },
  letsencrypt: { name: "Let's Encrypt SSL", category: "hosting", si: "siLetsencrypt" },
  wpengine: { name: "WP Engine", category: "hosting", si: "siWpengine" },
  kinsta: { name: "Kinsta", category: "hosting", si: "siKinsta" },
  transip: { name: "TransIP", category: "hosting", color: "2D9CDB" },
  openprovider: { name: "Openprovider", category: "hosting", color: "0E6EB8" },
  sidn: { name: "SIDN (.nl)", category: "hosting", color: "F28C00" },

  /* Design */
  figma: { name: "Figma", category: "design", si: "siFigma" },
  illustrator: { name: "Illustrator", category: "design", si: "siAdobeillustrator" },
  photoshop: { name: "Photoshop", category: "design", si: "siAdobephotoshop" },
  indesign: { name: "InDesign", category: "design", si: "siAdobeindesign" },
  lightroom: { name: "Lightroom", category: "design", si: "siAdobelightroom" },
  adobexd: { name: "Adobe XD", category: "design", si: "siAdobexd" },
  canva: { name: "Canva", category: "design", si: "siCanva" },
  miro: { name: "Miro", category: "design", si: "siMiro" },

  /* Media: foto, video, 3D, animatie */
  aftereffects: { name: "After Effects", category: "media", si: "siAdobeaftereffects" },
  premiere: { name: "Premiere Pro", category: "media", si: "siAdobepremierepro" },
  davinci: { name: "DaVinci Resolve", category: "media", si: "siDavinciresolve" },
  blender: { name: "Blender", category: "media", si: "siBlender" },
  cinema4d: { name: "Cinema 4D", category: "media", si: "siCinema4d" },
  unreal: { name: "Unreal Engine", category: "media", si: "siUnrealengine" },
  lottie: { name: "Lottie", category: "media", color: "00DDB3" },
  spline: { name: "Spline", category: "media", color: "B05CFF" },
  dji: { name: "DJI Drone", category: "media", si: "siDji" },
  sony: { name: "Sony Cinema", category: "media", si: "siSony" },
  youtube: { name: "YouTube", category: "media", si: "siYoutube" },
  vimeo: { name: "Vimeo", category: "media", si: "siVimeo" },

  /* Marketing & advertising */
  googleads: { name: "Google Ads", category: "marketing", si: "siGoogleads" },
  meta: { name: "Meta Ads", category: "marketing", si: "siMeta" },
  instagram: { name: "Instagram", category: "marketing", si: "siInstagram" },
  facebook: { name: "Facebook", category: "marketing", si: "siFacebook" },
  linkedin: { name: "LinkedIn Ads", category: "marketing", si: "siLinkedin" },
  tiktok: { name: "TikTok Ads", category: "marketing", si: "siTiktok" },
  reddit: { name: "Reddit Ads", category: "marketing", si: "siReddit" },
  pinterest: { name: "Pinterest", category: "marketing", si: "siPinterest" },
  microsoftads: { name: "Microsoft Ads", category: "marketing", color: "00A4EF" },
  mailchimp: { name: "Mailchimp", category: "marketing", si: "siMailchimp" },
  brevo: { name: "Brevo", category: "marketing", si: "siBrevo" },
  klaviyo: { name: "Klaviyo", category: "marketing", color: "FFFFFF" },
  activecampaign: { name: "ActiveCampaign", category: "marketing", color: "356AE6" },
  trustpilot: { name: "Trustpilot", category: "marketing", si: "siTrustpilot" },
  calendly: { name: "Calendly", category: "marketing", si: "siCalendly" },
  typeform: { name: "Typeform", category: "marketing", si: "siTypeform" },
  whatsapp: { name: "WhatsApp Business", category: "marketing", si: "siWhatsapp" },

  /* Analytics & tracking */
  ga4: { name: "Google Analytics 4", category: "analytics", si: "siGoogleanalytics" },
  gtm: { name: "Google Tag Manager", category: "analytics", si: "siGoogletagmanager" },
  searchconsole: { name: "Search Console", category: "analytics", si: "siGooglesearchconsole" },
  lookerstudio: { name: "Looker Studio", category: "analytics", si: "siLooker" },
  hotjar: { name: "Hotjar", category: "analytics", si: "siHotjar" },
  cookiebot: { name: "Cookiebot / Consent Mode", category: "analytics", color: "1032CF" },
  pagespeed: { name: "PageSpeed Insights", category: "analytics", si: "siPagespeedinsights" },

  /* SEO */
  semrush: { name: "Semrush", category: "seo", si: "siSemrush" },
  ahrefs: { name: "Ahrefs", category: "seo", color: "FF8800" },
  screamingfrog: { name: "Screaming Frog", category: "seo", color: "8BC34A" },
  googlebusiness: { name: "Google Bedrijfsprofiel", category: "seo", si: "siGoogle" },
  schema: { name: "Schema.org", category: "seo", color: "E94B3C" },
  bing: { name: "Bing Webmaster", category: "seo", color: "258FFA" },

  /* CRM & ERP */
  hubspot: { name: "HubSpot", category: "crm", si: "siHubspot" },
  odoo: { name: "Odoo", category: "crm", si: "siOdoo" },
  pipedrive: { name: "Pipedrive", category: "crm", color: "25292C" },
  teamleader: { name: "Teamleader", category: "crm", color: "00B2B2" },
  notion: { name: "Notion", category: "crm", si: "siNotion" },
  airtable: { name: "Airtable", category: "crm", si: "siAirtable" },
  slack: { name: "Slack", category: "crm", si: "siSlack" },
  googlesheets: { name: "Google Sheets", category: "crm", si: "siGooglesheets" },

  /* Automatisering */
  make: { name: "Make", category: "automation", si: "siMake" },
  zapier: { name: "Zapier", category: "automation", si: "siZapier" },
  n8n: { name: "n8n", category: "automation", si: "siN8n" },
  twilio: { name: "Twilio", category: "automation", si: "siTwilio" },
  sendgrid: { name: "SendGrid", category: "automation", si: "siSendgrid" },

  /* AI */
  openai: { name: "OpenAI / ChatGPT", category: "ai", si: "siOpenai" },
  claude: { name: "Claude", category: "ai", si: "siClaude" },
  gemini: { name: "Google Gemini", category: "ai", si: "siGooglegemini" },
  perplexity: { name: "Perplexity", category: "ai", si: "siPerplexity" },
  midjourney: { name: "Midjourney", category: "ai", color: "FFFFFF" },
  runway: { name: "Runway", category: "ai", color: "FFFFFF" },
  elevenlabs: { name: "ElevenLabs", category: "ai", si: "siElevenlabs" },
  huggingface: { name: "Hugging Face", category: "ai", si: "siHuggingface" },
  langchain: { name: "LangChain", category: "ai", si: "siLangchain" },
  copilot: { name: "GitHub Copilot", category: "ai", si: "siGithubcopilot" },
});

export type ToolSlug = keyof typeof TOOLS;

export const TOOL_CATEGORY_LABEL: Record<ToolCategory, { nl: string; en: string }> = {
  platform: { nl: "Platforms & CMS", en: "Platforms & CMS" },
  development: { nl: "Development", en: "Development" },
  design: { nl: "Design", en: "Design" },
  marketing: { nl: "Marketing & ads", en: "Marketing & ads" },
  analytics: { nl: "Analytics & tracking", en: "Analytics & tracking" },
  crm: { nl: "CRM & samenwerking", en: "CRM & collaboration" },
  automation: { nl: "Automatisering", en: "Automation" },
  ai: { nl: "AI", en: "AI" },
  media: { nl: "Foto, video & 3D", en: "Photo, video & 3D" },
  seo: { nl: "SEO", en: "SEO" },
  hosting: { nl: "Hosting & domeinen", en: "Hosting & domains" },
};
