/* ============================================================
   Logo's die we ontwierpen (de "<Merk> Logo"-items van de vorige
   website, m7branding.com). Per logo:
   - image: wit logo op transparant (webp met alfa), voor de rustige wand;
   - tile:  het originele merkvlak in de eigen kleuren (hover / spotlight);
   - w/h:   afmetingen van `image`, voor een optisch gelijke grootte;
   - bg:    achtergrondkleur van het merkvlak;
   - case:  slug van een case van hetzelfde merk (optioneel).
   Beelden: /public/media/logos-designed/<slug>.webp en <slug>-tile.webp.
   ============================================================ */

export interface LogoDesign {
  slug: string;
  name: string;
  image: string;
  tile: string;
  w: number;
  h: number;
  bg: string;
  case?: string;
}

const img = (slug: string) => `/media/logos-designed/${slug}.webp`;
const tile = (slug: string) => `/media/logos-designed/${slug}-tile.webp`;

export const logoDesigns: LogoDesign[] = [
  { slug: "jurgh", name: "JURGH Detailing", image: img("jurgh"), tile: tile("jurgh"), w: 720, h: 234, bg: "#1a1a1a", case: "jurgh-detailing" },
  { slug: "sublime", name: "SUBLIME", image: img("sublime"), tile: tile("sublime"), w: 720, h: 166, bg: "#000000", case: "sublime-branding" },
  { slug: "sparked", name: "Sparked", image: img("sparked"), tile: tile("sparked"), w: 720, h: 288, bg: "#ffec01", case: "sparked" },
  { slug: "bernheze-makelaars", name: "Bernheze Makelaars", image: img("bernheze-makelaars"), tile: tile("bernheze-makelaars"), w: 582, h: 274, bg: "#1e2d26", case: "bernheze-makelaars-rebranding" },
  { slug: "kippenkar", name: "Kippenkar", image: img("kippenkar"), tile: tile("kippenkar"), w: 531, h: 156, bg: "#ffffff", case: "kippenkar" },
  { slug: "nktv", name: "NKTV", image: img("nktv"), tile: tile("nktv"), w: 454, h: 188, bg: "#f69220", case: "nktv" },
  { slug: "journey-selection", name: "Journey Selection", image: img("journey-selection"), tile: tile("journey-selection"), w: 720, h: 212, bg: "#1a1a1a" },
  { slug: "hockeytv", name: "HockeyTV", image: img("hockeytv"), tile: tile("hockeytv"), w: 720, h: 239, bg: "#ffffff" },
  { slug: "happy-horse-sales", name: "Happy Horse Sales", image: img("happy-horse-sales"), tile: tile("happy-horse-sales"), w: 720, h: 331, bg: "#495058", case: "happy-horse-sales" },
  { slug: "koppens-architecten", name: "Koppens Architecten", image: img("koppens-architecten"), tile: tile("koppens-architecten"), w: 438, h: 444, bg: "#ffffff", case: "architectenbureau-koppens" },
  { slug: "eyedle", name: "Eyedle", image: img("eyedle"), tile: tile("eyedle"), w: 446, h: 146, bg: "#ed1e79" },
  { slug: "laserlux", name: "Laserlux", image: img("laserlux"), tile: tile("laserlux"), w: 720, h: 177, bg: "#434343" },
  { slug: "atl", name: "ATL+", image: img("atl"), tile: tile("atl"), w: 304, h: 140, bg: "#033155" },
  { slug: "flj-tuinen", name: "FLJ Tuinen", image: img("flj-tuinen"), tile: tile("flj-tuinen"), w: 720, h: 264, bg: "#099d49" },
  { slug: "geluksvogel", name: "Geluksvogel", image: img("geluksvogel"), tile: tile("geluksvogel"), w: 412, h: 494, bg: "#006837" },
  { slug: "cec", name: "CEC", image: img("cec"), tile: tile("cec"), w: 483, h: 530, bg: "#fedd30" },
  { slug: "bruidshuis-diana", name: "Bruidshuis Diana", image: img("bruidshuis-diana"), tile: tile("bruidshuis-diana"), w: 720, h: 457, bg: "#baaf99" },
  { slug: "gelderse-doodles", name: "Gelderse Doodles", image: img("gelderse-doodles"), tile: tile("gelderse-doodles"), w: 720, h: 332, bg: "#f7f7f7" },
  { slug: "audiretrofits", name: "AudiRetrofits", image: img("audiretrofits"), tile: tile("audiretrofits"), w: 623, h: 381, bg: "#000000" },
  { slug: "mvdb-autos", name: "MvdB Auto's", image: img("mvdb-autos"), tile: tile("mvdb-autos"), w: 695, h: 251, bg: "#010b17" },
  { slug: "vastgrip", name: "VastGrip", image: img("vastgrip"), tile: tile("vastgrip"), w: 719, h: 345, bg: "#ffffff" },
  { slug: "unimatter", name: "Unimatter", image: img("unimatter"), tile: tile("unimatter"), w: 606, h: 182, bg: "#ffffff" },
  { slug: "wifilab", name: "Wifi Lab", image: img("wifilab"), tile: tile("wifilab"), w: 720, h: 146, bg: "#ebffff" },
  { slug: "stuurland-automotive", name: "Stuurland Automotive", image: img("stuurland-automotive"), tile: tile("stuurland-automotive"), w: 478, h: 170, bg: "#f2f2f2" },
  { slug: "bitcoin-brabant", name: "Bitcoin Brabant", image: img("bitcoin-brabant"), tile: tile("bitcoin-brabant"), w: 174, h: 193, bg: "#1a1a1a" },
  { slug: "m-r-enterprise", name: "M.R. Enterprise", image: img("m-r-enterprise"), tile: tile("m-r-enterprise"), w: 228, h: 158, bg: "#000000" },
  { slug: "data-studio", name: "Data Studio", image: img("data-studio"), tile: tile("data-studio"), w: 694, h: 164, bg: "#1a1a24" },
  { slug: "hiibye", name: "HiiBye", image: img("hiibye"), tile: tile("hiibye"), w: 346, h: 123, bg: "#705d8b" },
  { slug: "pysport", name: "PySport", image: img("pysport"), tile: tile("pysport"), w: 694, h: 224, bg: "#e9e9e9" },
  { slug: "onlinemaaltijd-nl", name: "Onlinemaaltijd.nl", image: img("onlinemaaltijd-nl"), tile: tile("onlinemaaltijd-nl"), w: 555, h: 160, bg: "#d5b82c" },
];
