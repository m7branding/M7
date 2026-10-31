/* ============================================================
   Portfolio-mockups v2 (sessie "M7 Website project mockups", 31 okt 2026):
   schone device- en UI-mockups van de live sites, per case in de volgorde van
   de curatie. Alleen device/UI-beelden: de zelf samengestelde brand-stukken
   (visitekaartjes, brandbook, kleurkaarten, blinddruk) zijn bewust niet
   overgenomen; echt drukwerk komt uit Figma of van M7 zelf.
   `hero` is alleen een terugval voor cases zonder eigen hero-video.
   Bestanden: public/media/cases/<slug>/v-*.{webp,mp4}.
   ============================================================ */

export interface PortfolioSet {
  /** Stills in volgorde. */
  images: string[];
  films: { src: string; poster: string; w: number; h: number; title?: string }[];
  /** Cover voor kaarten en overzichten. */
  cover?: string;
  /** Webclip als hero-video, alleen als de case er nog geen heeft. */
  hero?: { src: string; poster: string };
}

export const portfolioV2: Record<string, PortfolioSet> = {
  "aigora": {
    cover: "/media/cases/aigora/v-06-tablet.webp",
    hero: { src: "/media/cases/aigora/v-motion-01-laptop-scroll.mp4", poster: "/media/cases/aigora/v-motion-01-laptop-scroll.webp" },
    images: ["/media/cases/aigora/v-06-tablet.webp", "/media/cases/aigora/v-04-phones-duo.webp", "/media/cases/aigora/v-03-page-columns.webp", "/media/cases/aigora/v-05-phones-flatlay.webp", "/media/cases/aigora/v-02-screen-wall.webp"],
    films: [
      { src: "/media/cases/aigora/v-motion-02-phones-scroll.mp4", poster: "/media/cases/aigora/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "atl-plus": {
    cover: "/media/cases/atl-plus/v-10-browser-components.webp",
    hero: { src: "/media/cases/atl-plus/v-motion-01-browser-scroll.mp4", poster: "/media/cases/atl-plus/v-motion-01-browser-scroll.webp" },
    images: ["/media/cases/atl-plus/v-10-browser-components.webp", "/media/cases/atl-plus/v-08-phone-row.webp", "/media/cases/atl-plus/v-06-phone-closeup.webp", "/media/cases/atl-plus/v-03-device-panels.webp", "/media/cases/atl-plus/v-09-tablet.webp", "/media/cases/atl-plus/v-05-phones-flatlay.webp", "/media/cases/atl-plus/v-11-lifted-components.webp", "/media/cases/atl-plus/v-07-phones-duo.webp", "/media/cases/atl-plus/v-02-page-columns.webp", "/media/cases/atl-plus/v-04-screen-wall.webp"],
    films: [
      { src: "/media/cases/atl-plus/v-motion-02-phones-scroll.mp4", poster: "/media/cases/atl-plus/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "battery-park-montessori": {
    cover: "/media/cases/battery-park-montessori/v-06-tablet.webp",
    hero: { src: "/media/cases/battery-park-montessori/v-motion-01-laptop-scroll.mp4", poster: "/media/cases/battery-park-montessori/v-motion-01-laptop-scroll.webp" },
    images: ["/media/cases/battery-park-montessori/v-06-tablet.webp", "/media/cases/battery-park-montessori/v-04-phone-row.webp", "/media/cases/battery-park-montessori/v-01-laptop-closeup.webp", "/media/cases/battery-park-montessori/v-03-screen-wall.webp", "/media/cases/battery-park-montessori/v-07-phones-duo.webp", "/media/cases/battery-park-montessori/v-05-phones-flatlay.webp"],
    films: [
      { src: "/media/cases/battery-park-montessori/v-motion-02-phones-scroll.mp4", poster: "/media/cases/battery-park-montessori/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "bernheze-makelaars-rebranding": {
    cover: "/media/cases/bernheze-makelaars-rebranding/v-02-browser-components.webp",
    hero: { src: "/media/cases/bernheze-makelaars-rebranding/v-motion-01-browser-scroll.mp4", poster: "/media/cases/bernheze-makelaars-rebranding/v-motion-01-browser-scroll.webp" },
    images: ["/media/cases/bernheze-makelaars-rebranding/v-02-browser-components.webp", "/media/cases/bernheze-makelaars-rebranding/v-07-phones-duo.webp", "/media/cases/bernheze-makelaars-rebranding/v-08-phone-row.webp", "/media/cases/bernheze-makelaars-rebranding/v-05-laptop-closeup.webp", "/media/cases/bernheze-makelaars-rebranding/v-09-phone-closeup.webp", "/media/cases/bernheze-makelaars-rebranding/v-10-phones-flatlay.webp"],
    films: [
      { src: "/media/cases/bernheze-makelaars-rebranding/v-motion-02-phones-scroll.mp4", poster: "/media/cases/bernheze-makelaars-rebranding/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "boutique-hotels-gelderland": {
    cover: "/media/cases/boutique-hotels-gelderland/v-06-tablet.webp",
    hero: { src: "/media/cases/boutique-hotels-gelderland/v-motion-01-display-scroll.mp4", poster: "/media/cases/boutique-hotels-gelderland/v-motion-01-display-scroll.webp" },
    images: ["/media/cases/boutique-hotels-gelderland/v-06-tablet.webp", "/media/cases/boutique-hotels-gelderland/v-03-phone-closeup.webp", "/media/cases/boutique-hotels-gelderland/v-01-browser-components.webp", "/media/cases/boutique-hotels-gelderland/v-04-phones-flatlay.webp", "/media/cases/boutique-hotels-gelderland/v-05-phones-duo.webp"],
    films: [
      { src: "/media/cases/boutique-hotels-gelderland/v-motion-03-screens.mp4", poster: "/media/cases/boutique-hotels-gelderland/v-motion-03-screens.webp", w: 1600, h: 1000 },
    ],
  },
  "buitenstate": {
    cover: "/media/cases/buitenstate/v-08-tablet.webp",
    hero: { src: "/media/cases/buitenstate/v-motion-01-zoom-in.mp4", poster: "/media/cases/buitenstate/v-motion-01-zoom-in.webp" },
    images: ["/media/cases/buitenstate/v-03-browser-components.webp", "/media/cases/buitenstate/v-09-phones-duo.webp", "/media/cases/buitenstate/v-08-tablet.webp", "/media/cases/buitenstate/v-04-lifted-components.webp", "/media/cases/buitenstate/v-07-phone-row.webp", "/media/cases/buitenstate/v-05-laptop-closeup.webp", "/media/cases/buitenstate/v-06-phone-closeup.webp", "/media/cases/buitenstate/v-02-page-columns.webp"],
    films: [
      { src: "/media/cases/buitenstate/v-motion-03-phones-scroll.mp4", poster: "/media/cases/buitenstate/v-motion-03-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "calvin-vlaanderen": {
    hero: { src: "/media/cases/calvin-vlaanderen/v-motion-03-pages.mp4", poster: "/media/cases/calvin-vlaanderen/v-motion-03-pages.webp" },
    images: ["/media/cases/calvin-vlaanderen/v-04-phone-closeup.webp", "/media/cases/calvin-vlaanderen/v-01-lifted-components.webp", "/media/cases/calvin-vlaanderen/v-03-device-panels.webp", "/media/cases/calvin-vlaanderen/v-11-screen-wall.webp", "/media/cases/calvin-vlaanderen/v-05-phones-flatlay.webp"],
    films: [
      { src: "/media/cases/calvin-vlaanderen/v-motion-02-phones-scroll.mp4", poster: "/media/cases/calvin-vlaanderen/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "designers-house": {
    cover: "/media/cases/designers-house/v-03-display-and-phone.webp",
    hero: { src: "/media/cases/designers-house/v-motion-01-floating-ui.mp4", poster: "/media/cases/designers-house/v-motion-01-floating-ui.webp" },
    images: ["/media/cases/designers-house/v-03-display-and-phone.webp", "/media/cases/designers-house/v-05-phones-flatlay.webp", "/media/cases/designers-house/v-02-screen-detail.webp", "/media/cases/designers-house/v-07-phones-duo.webp", "/media/cases/designers-house/v-06-tablet.webp", "/media/cases/designers-house/v-01-browser-components.webp"],
    films: [
      { src: "/media/cases/designers-house/v-motion-03-components.mp4", poster: "/media/cases/designers-house/v-motion-03-components.webp", w: 1600, h: 1000 },
    ],
  },
  "digital-newsgroup": {
    cover: "/media/cases/digital-newsgroup/v-05-phone-row.webp",
    hero: { src: "/media/cases/digital-newsgroup/v-motion-01-laptop-scroll.mp4", poster: "/media/cases/digital-newsgroup/v-motion-01-laptop-scroll.webp" },
    images: ["/media/cases/digital-newsgroup/v-05-phone-row.webp", "/media/cases/digital-newsgroup/v-04-floating-ui.webp", "/media/cases/digital-newsgroup/v-01-screen-wall.webp", "/media/cases/digital-newsgroup/v-07-phone-closeup.webp", "/media/cases/digital-newsgroup/v-02-lifted-components.webp", "/media/cases/digital-newsgroup/v-06-phones-flatlay.webp", "/media/cases/digital-newsgroup/v-03-page-columns.webp", "/media/cases/digital-newsgroup/v-08-phones-duo.webp"],
    films: [
      { src: "/media/cases/digital-newsgroup/v-motion-02-phones-scroll.mp4", poster: "/media/cases/digital-newsgroup/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "edgeway-commodities": {
    hero: { src: "/media/cases/edgeway-commodities/v-motion-01-display-scroll.mp4", poster: "/media/cases/edgeway-commodities/v-motion-01-display-scroll.webp" },
    images: ["/media/cases/edgeway-commodities/v-05-phone-closeup.webp", "/media/cases/edgeway-commodities/v-02-browser-components.webp", "/media/cases/edgeway-commodities/v-07-phone-row.webp", "/media/cases/edgeway-commodities/v-03-device-panels.webp", "/media/cases/edgeway-commodities/v-04-screen-wall.webp", "/media/cases/edgeway-commodities/v-06-phones-flatlay.webp", "/media/cases/edgeway-commodities/v-08-tablet.webp"],
    films: [
      { src: "/media/cases/edgeway-commodities/v-motion-03-pages.mp4", poster: "/media/cases/edgeway-commodities/v-motion-03-pages.webp", w: 1600, h: 1000 },
    ],
  },
  "electriffy": {
    cover: "/media/cases/electriffy/v-04-screen-detail.webp",
    hero: { src: "/media/cases/electriffy/v-motion-03-pages.mp4", poster: "/media/cases/electriffy/v-motion-03-pages.webp" },
    images: ["/media/cases/electriffy/v-04-screen-detail.webp", "/media/cases/electriffy/v-07-phone-row.webp", "/media/cases/electriffy/v-02-page-columns.webp", "/media/cases/electriffy/v-05-display-and-phone.webp", "/media/cases/electriffy/v-03-device-panels.webp", "/media/cases/electriffy/v-06-tablet.webp", "/media/cases/electriffy/v-08-phones-flatlay.webp"],
    films: [
      { src: "/media/cases/electriffy/v-motion-02-phones-scroll.mp4", poster: "/media/cases/electriffy/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
      { src: "/media/cases/electriffy/v-motion-01-browser-scroll.mp4", poster: "/media/cases/electriffy/v-motion-01-browser-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "esmailly-bouw": {
    images: ["/media/cases/esmailly-bouw/v-08-phones-duo.webp", "/media/cases/esmailly-bouw/v-05-device-panels.webp", "/media/cases/esmailly-bouw/v-03-display-and-phone.webp", "/media/cases/esmailly-bouw/v-07-phone-row.webp", "/media/cases/esmailly-bouw/v-09-phone-closeup.webp", "/media/cases/esmailly-bouw/v-06-floating-ui.webp", "/media/cases/esmailly-bouw/v-04-lifted-components.webp"],
    films: [
      { src: "/media/cases/esmailly-bouw/v-motion-02-phone-scroll.mp4", poster: "/media/cases/esmailly-bouw/v-motion-02-phone-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "fairlink": {
    hero: { src: "/media/cases/fairlink/v-motion-01-zoom-in.mp4", poster: "/media/cases/fairlink/v-motion-01-zoom-in.webp" },
    images: ["/media/cases/fairlink/v-02-browser-components.webp", "/media/cases/fairlink/v-05-phone-row.webp", "/media/cases/fairlink/v-01-page-columns.webp", "/media/cases/fairlink/v-04-phones-duo.webp", "/media/cases/fairlink/v-03-screen-wall.webp"],
    films: [
      { src: "/media/cases/fairlink/v-motion-02-phones-scroll.mp4", poster: "/media/cases/fairlink/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "foodbars-gelderland": {
    cover: "/media/cases/foodbars-gelderland/v-05-tablet.webp",
    hero: { src: "/media/cases/foodbars-gelderland/v-motion-01-zoom-in.mp4", poster: "/media/cases/foodbars-gelderland/v-motion-01-zoom-in.webp" },
    images: ["/media/cases/foodbars-gelderland/v-04-phone-closeup.webp", "/media/cases/foodbars-gelderland/v-06-phone-row.webp", "/media/cases/foodbars-gelderland/v-03-browser-components.webp", "/media/cases/foodbars-gelderland/v-07-phones-flatlay.webp", "/media/cases/foodbars-gelderland/v-05-tablet.webp"],
    films: [
      { src: "/media/cases/foodbars-gelderland/v-motion-03-phones-scroll.mp4", poster: "/media/cases/foodbars-gelderland/v-motion-03-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "impeco": {
    cover: "/media/cases/impeco/v-06-floating-ui.webp",
    hero: { src: "/media/cases/impeco/v-motion-01-browser-scroll.mp4", poster: "/media/cases/impeco/v-motion-01-browser-scroll.webp" },
    images: ["/media/cases/impeco/v-06-floating-ui.webp", "/media/cases/impeco/v-07-phone-row.webp", "/media/cases/impeco/v-03-laptop-closeup.webp", "/media/cases/impeco/v-10-phones-flatlay.webp", "/media/cases/impeco/v-04-screen-wall.webp"],
    films: [
      { src: "/media/cases/impeco/v-motion-02-phones-scroll.mp4", poster: "/media/cases/impeco/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "jalo-energy": {
    cover: "/media/cases/jalo-energy/v-05-screen-detail.webp",
    hero: { src: "/media/cases/jalo-energy/v-motion-01-floating-ui.mp4", poster: "/media/cases/jalo-energy/v-motion-01-floating-ui.webp" },
    images: ["/media/cases/jalo-energy/v-05-screen-detail.webp", "/media/cases/jalo-energy/v-07-phone-row.webp", "/media/cases/jalo-energy/v-04-laptop-closeup.webp", "/media/cases/jalo-energy/v-09-phone-closeup.webp", "/media/cases/jalo-energy/v-02-browser-components.webp", "/media/cases/jalo-energy/v-10-tablet.webp", "/media/cases/jalo-energy/v-08-phones-flatlay.webp", "/media/cases/jalo-energy/v-06-device-panels.webp", "/media/cases/jalo-energy/v-01-screen-wall.webp"],
    films: [
      { src: "/media/cases/jalo-energy/v-motion-02-phones-scroll.mp4", poster: "/media/cases/jalo-energy/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "jmtuning": {
    cover: "/media/cases/jmtuning/v-05-laptop-closeup.webp",
    hero: { src: "/media/cases/jmtuning/v-motion-03-components.mp4", poster: "/media/cases/jmtuning/v-motion-03-components.webp" },
    images: ["/media/cases/jmtuning/v-05-laptop-closeup.webp", "/media/cases/jmtuning/v-07-phone-closeup.webp", "/media/cases/jmtuning/v-08-phone-row.webp", "/media/cases/jmtuning/v-03-lifted-components.webp", "/media/cases/jmtuning/v-02-screen-wall.webp", "/media/cases/jmtuning/v-04-device-panels.webp"],
    films: [
      { src: "/media/cases/jmtuning/v-motion-02-phones-scroll.mp4", poster: "/media/cases/jmtuning/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "jurgh-detailing": {
    cover: "/media/cases/jurgh-detailing/v-01-display-and-phone.webp",
    hero: { src: "/media/cases/jurgh-detailing/v-motion-01-display-scroll.mp4", poster: "/media/cases/jurgh-detailing/v-motion-01-display-scroll.webp" },
    images: ["/media/cases/jurgh-detailing/v-01-display-and-phone.webp", "/media/cases/jurgh-detailing/v-07-phone-closeup.webp", "/media/cases/jurgh-detailing/v-03-browser-components.webp", "/media/cases/jurgh-detailing/v-08-phone-row.webp", "/media/cases/jurgh-detailing/v-05-screen-detail.webp", "/media/cases/jurgh-detailing/v-04-lifted-components.webp"],
    films: [
      { src: "/media/cases/jurgh-detailing/v-motion-02-phone-scroll.mp4", poster: "/media/cases/jurgh-detailing/v-motion-02-phone-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "kds-stansvormen": {
    cover: "/media/cases/kds-stansvormen/v-09-tablet.webp",
    hero: { src: "/media/cases/kds-stansvormen/v-motion-01-floating-ui.mp4", poster: "/media/cases/kds-stansvormen/v-motion-01-floating-ui.webp" },
    images: ["/media/cases/kds-stansvormen/v-09-tablet.webp", "/media/cases/kds-stansvormen/v-06-phone-closeup.webp", "/media/cases/kds-stansvormen/v-08-phone-row.webp", "/media/cases/kds-stansvormen/v-03-screen-detail.webp", "/media/cases/kds-stansvormen/v-02-page-columns.webp", "/media/cases/kds-stansvormen/v-07-phones-flatlay.webp", "/media/cases/kds-stansvormen/v-01-lifted-components.webp"],
    films: [
      { src: "/media/cases/kds-stansvormen/v-motion-02-phones-scroll.mp4", poster: "/media/cases/kds-stansvormen/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "kippenkar": {
    cover: "/media/cases/kippenkar/v-03-laptop-closeup.webp",
    hero: { src: "/media/cases/kippenkar/v-motion-01-floating-ui.mp4", poster: "/media/cases/kippenkar/v-motion-01-floating-ui.webp" },
    images: ["/media/cases/kippenkar/v-03-laptop-closeup.webp", "/media/cases/kippenkar/v-08-phone-closeup.webp", "/media/cases/kippenkar/v-04-device-panels.webp", "/media/cases/kippenkar/v-07-phones-flatlay.webp", "/media/cases/kippenkar/v-02-screen-wall.webp", "/media/cases/kippenkar/v-05-page-columns.webp", "/media/cases/kippenkar/v-01-browser-components.webp"],
    films: [
      { src: "/media/cases/kippenkar/v-motion-02-phones-scroll.mp4", poster: "/media/cases/kippenkar/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "maarschall": {
    cover: "/media/cases/maarschall/v-06-tablet.webp",
    hero: { src: "/media/cases/maarschall/v-motion-01-floating-ui.mp4", poster: "/media/cases/maarschall/v-motion-01-floating-ui.webp" },
    images: ["/media/cases/maarschall/v-06-tablet.webp", "/media/cases/maarschall/v-07-phone-row.webp", "/media/cases/maarschall/v-09-phones-duo.webp", "/media/cases/maarschall/v-04-device-panels.webp"],
    films: [
      { src: "/media/cases/maarschall/v-motion-02-phones-scroll.mp4", poster: "/media/cases/maarschall/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "martello": {
    cover: "/media/cases/martello/v-02-display-and-phone.webp",
    hero: { src: "/media/cases/martello/v-motion-01-laptop-scroll.mp4", poster: "/media/cases/martello/v-motion-01-laptop-scroll.webp" },
    images: ["/media/cases/martello/v-06-phones-duo.webp", "/media/cases/martello/v-04-browser-components.webp", "/media/cases/martello/v-07-phone-row.webp", "/media/cases/martello/v-05-device-panels.webp", "/media/cases/martello/v-03-page-columns.webp", "/media/cases/martello/v-08-phones-flatlay.webp", "/media/cases/martello/v-01-screen-wall.webp"],
    films: [
      { src: "/media/cases/martello/v-motion-03-phones-scroll.mp4", poster: "/media/cases/martello/v-motion-03-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "mindyourpass": {
    cover: "/media/cases/mindyourpass/v-04-display-and-phone.webp",
    hero: { src: "/media/cases/mindyourpass/v-motion-01-zoom-in.mp4", poster: "/media/cases/mindyourpass/v-motion-01-zoom-in.webp" },
    images: ["/media/cases/mindyourpass/v-04-display-and-phone.webp", "/media/cases/mindyourpass/v-05-phone-row.webp", "/media/cases/mindyourpass/v-03-floating-ui.webp", "/media/cases/mindyourpass/v-07-phones-duo.webp", "/media/cases/mindyourpass/v-06-tablet.webp", "/media/cases/mindyourpass/v-02-screen-wall.webp"],
    films: [
      { src: "/media/cases/mindyourpass/v-motion-02-phones-scroll.mp4", poster: "/media/cases/mindyourpass/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "misterglass": {
    cover: "/media/cases/misterglass/v-05-display-and-phone.webp",
    images: ["/media/cases/misterglass/v-05-display-and-phone.webp", "/media/cases/misterglass/v-08-phone-closeup.webp", "/media/cases/misterglass/v-06-laptop-closeup.webp", "/media/cases/misterglass/v-03-screen-detail.webp", "/media/cases/misterglass/v-04-lifted-components.webp"],
    films: [
      { src: "/media/cases/misterglass/v-motion-02-phones-scroll.mp4", poster: "/media/cases/misterglass/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
      { src: "/media/cases/misterglass/v-motion-03-components.mp4", poster: "/media/cases/misterglass/v-motion-03-components.webp", w: 1600, h: 1000 },
    ],
  },
  "nova-funeral-cars": {
    cover: "/media/cases/nova-funeral-cars/v-08-tablet.webp",
    hero: { src: "/media/cases/nova-funeral-cars/v-motion-01-display-scroll.mp4", poster: "/media/cases/nova-funeral-cars/v-motion-01-display-scroll.webp" },
    images: ["/media/cases/nova-funeral-cars/v-08-tablet.webp", "/media/cases/nova-funeral-cars/v-02-floating-ui.webp", "/media/cases/nova-funeral-cars/v-07-phones-duo.webp", "/media/cases/nova-funeral-cars/v-03-screen-detail.webp", "/media/cases/nova-funeral-cars/v-10-phone-row.webp", "/media/cases/nova-funeral-cars/v-06-device-panels.webp", "/media/cases/nova-funeral-cars/v-09-phones-flatlay.webp", "/media/cases/nova-funeral-cars/v-04-screen-wall.webp", "/media/cases/nova-funeral-cars/v-05-lifted-components.webp"],
    films: [
      { src: "/media/cases/nova-funeral-cars/v-motion-02-phones-scroll.mp4", poster: "/media/cases/nova-funeral-cars/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "nova-special-cars": {
    cover: "/media/cases/nova-special-cars/v-06-tablet.webp",
    hero: { src: "/media/cases/nova-special-cars/v-motion-01-floating-ui.mp4", poster: "/media/cases/nova-special-cars/v-motion-01-floating-ui.webp" },
    images: ["/media/cases/nova-special-cars/v-06-tablet.webp", "/media/cases/nova-special-cars/v-05-phones-flatlay.webp", "/media/cases/nova-special-cars/v-01-laptop-closeup.webp", "/media/cases/nova-special-cars/v-07-phones-duo.webp", "/media/cases/nova-special-cars/v-03-screen-detail.webp", "/media/cases/nova-special-cars/v-02-browser-components.webp", "/media/cases/nova-special-cars/v-04-device-panels.webp"],
    films: [
      { src: "/media/cases/nova-special-cars/v-motion-02-phones-scroll.mp4", poster: "/media/cases/nova-special-cars/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
      { src: "/media/cases/nova-special-cars/v-motion-03-pages.mp4", poster: "/media/cases/nova-special-cars/v-motion-03-pages.webp", w: 1600, h: 1000 },
    ],
  },
  "onderbouwd-investeren": {
    cover: "/media/cases/onderbouwd-investeren/v-01-display-and-phone.webp",
    hero: { src: "/media/cases/onderbouwd-investeren/v-motion-01-browser-scroll.mp4", poster: "/media/cases/onderbouwd-investeren/v-motion-01-browser-scroll.webp" },
    images: ["/media/cases/onderbouwd-investeren/v-01-display-and-phone.webp", "/media/cases/onderbouwd-investeren/v-07-phones-flatlay.webp", "/media/cases/onderbouwd-investeren/v-03-lifted-components.webp", "/media/cases/onderbouwd-investeren/v-05-phone-closeup.webp", "/media/cases/onderbouwd-investeren/v-04-screen-wall.webp", "/media/cases/onderbouwd-investeren/v-02-laptop-closeup.webp"],
    films: [
      { src: "/media/cases/onderbouwd-investeren/v-motion-03-pages.mp4", poster: "/media/cases/onderbouwd-investeren/v-motion-03-pages.webp", w: 1600, h: 1000 },
    ],
  },
  "pine-street-school": {
    cover: "/media/cases/pine-street-school/v-03-tablet.webp",
    hero: { src: "/media/cases/pine-street-school/v-motion-01-floating-ui.mp4", poster: "/media/cases/pine-street-school/v-motion-01-floating-ui.webp" },
    images: ["/media/cases/pine-street-school/v-03-tablet.webp", "/media/cases/pine-street-school/v-02-laptop-closeup.webp", "/media/cases/pine-street-school/v-11-screen-wall.webp"],
    films: [
      { src: "/media/cases/pine-street-school/v-motion-02-phones-scroll.mp4", poster: "/media/cases/pine-street-school/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "plenty-planet": {
    cover: "/media/cases/plenty-planet/v-04-display-and-phone.webp",
    hero: { src: "/media/cases/plenty-planet/v-motion-01-laptop-scroll.mp4", poster: "/media/cases/plenty-planet/v-motion-01-laptop-scroll.webp" },
    images: ["/media/cases/plenty-planet/v-04-display-and-phone.webp", "/media/cases/plenty-planet/v-07-tablet.webp", "/media/cases/plenty-planet/v-05-phones-flatlay.webp", "/media/cases/plenty-planet/v-01-lifted-components.webp", "/media/cases/plenty-planet/v-03-screen-wall.webp", "/media/cases/plenty-planet/v-08-phones-duo.webp"],
    films: [
      { src: "/media/cases/plenty-planet/v-motion-02-phones-scroll.mp4", poster: "/media/cases/plenty-planet/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "repairlab": {
    cover: "/media/cases/repairlab/v-02-laptop-closeup.webp",
    hero: { src: "/media/cases/repairlab/v-motion-01-zoom-in.mp4", poster: "/media/cases/repairlab/v-motion-01-zoom-in.webp" },
    images: ["/media/cases/repairlab/v-02-laptop-closeup.webp", "/media/cases/repairlab/v-06-phones-flatlay.webp", "/media/cases/repairlab/v-03-device-panels.webp", "/media/cases/repairlab/v-04-lifted-components.webp"],
    films: [
      { src: "/media/cases/repairlab/v-motion-02-phones-scroll.mp4", poster: "/media/cases/repairlab/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "silvr": {
    cover: "/media/cases/silvr/v-03-display-and-phone.webp",
    hero: { src: "/media/cases/silvr/v-motion-01-zoom-in.mp4", poster: "/media/cases/silvr/v-motion-01-zoom-in.webp" },
    images: ["/media/cases/silvr/v-03-display-and-phone.webp", "/media/cases/silvr/v-06-tablet.webp", "/media/cases/silvr/v-04-floating-ui.webp", "/media/cases/silvr/v-02-device-panels.webp"],
    films: [
      { src: "/media/cases/silvr/v-motion-03-screens.mp4", poster: "/media/cases/silvr/v-motion-03-screens.webp", w: 1600, h: 1000 },
    ],
  },
  "speedbar": {
    cover: "/media/cases/speedbar/v-04-laptop-closeup.webp",
    images: ["/media/cases/speedbar/v-04-laptop-closeup.webp", "/media/cases/speedbar/v-07-phone-closeup.webp", "/media/cases/speedbar/v-06-phone-row.webp", "/media/cases/speedbar/v-02-floating-ui.webp", "/media/cases/speedbar/v-08-phones-duo.webp", "/media/cases/speedbar/v-03-screen-wall.webp"],
    films: [
      { src: "/media/cases/speedbar/v-motion-01-floating-ui.mp4", poster: "/media/cases/speedbar/v-motion-01-floating-ui.webp", w: 1600, h: 1000 },
      { src: "/media/cases/speedbar/v-motion-04-components.mp4", poster: "/media/cases/speedbar/v-motion-04-components.webp", w: 1600, h: 1000 },
    ],
  },
  "steddion": {
    cover: "/media/cases/steddion/v-02-display-and-phone.webp",
    hero: { src: "/media/cases/steddion/v-motion-01-display-scroll.mp4", poster: "/media/cases/steddion/v-motion-01-display-scroll.webp" },
    images: ["/media/cases/steddion/v-01-lifted-components.webp", "/media/cases/steddion/v-07-phone-row.webp", "/media/cases/steddion/v-04-page-columns.webp", "/media/cases/steddion/v-05-phone-closeup.webp", "/media/cases/steddion/v-03-browser-components.webp", "/media/cases/steddion/v-06-phones-duo.webp", "/media/cases/steddion/v-08-tablet.webp"],
    films: [
      { src: "/media/cases/steddion/v-motion-02-phones-scroll.mp4", poster: "/media/cases/steddion/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "sublime-branding": {
    images: ["/media/cases/sublime-branding/v-08-tablet.webp", "/media/cases/sublime-branding/v-04-floating-ui.webp", "/media/cases/sublime-branding/v-06-phone-closeup.webp", "/media/cases/sublime-branding/v-09-phones-duo.webp", "/media/cases/sublime-branding/v-01-browser-components.webp"],
    films: [
      { src: "/media/cases/sublime-branding/v-motion-02-phones-scroll.mp4", poster: "/media/cases/sublime-branding/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "the-digital-clinic": {
    cover: "/media/cases/the-digital-clinic/v-06-tablet.webp",
    hero: { src: "/media/cases/the-digital-clinic/v-motion-01-display-scroll.mp4", poster: "/media/cases/the-digital-clinic/v-motion-01-display-scroll.webp" },
    images: ["/media/cases/the-digital-clinic/v-06-tablet.webp", "/media/cases/the-digital-clinic/v-04-phone-row.webp", "/media/cases/the-digital-clinic/v-05-phone-closeup.webp", "/media/cases/the-digital-clinic/v-01-floating-ui.webp", "/media/cases/the-digital-clinic/v-03-screen-wall.webp", "/media/cases/the-digital-clinic/v-02-screen-detail.webp"],
    films: [
      { src: "/media/cases/the-digital-clinic/v-motion-02-phones-scroll.mp4", poster: "/media/cases/the-digital-clinic/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "the-filmcar": {
    cover: "/media/cases/the-filmcar/v-04-screen-detail.webp",
    images: ["/media/cases/the-filmcar/v-04-screen-detail.webp", "/media/cases/the-filmcar/v-07-phones-duo.webp", "/media/cases/the-filmcar/v-06-phone-row.webp", "/media/cases/the-filmcar/v-03-page-columns.webp", "/media/cases/the-filmcar/v-05-lifted-components.webp", "/media/cases/the-filmcar/v-02-screen-wall.webp"],
    films: [
      { src: "/media/cases/the-filmcar/v-motion-02-phone-scroll.mp4", poster: "/media/cases/the-filmcar/v-motion-02-phone-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "the-sandt": {
    cover: "/media/cases/the-sandt/v-03-display-and-phone.webp",
    hero: { src: "/media/cases/the-sandt/v-motion-01-laptop-scroll.mp4", poster: "/media/cases/the-sandt/v-motion-01-laptop-scroll.webp" },
    images: ["/media/cases/the-sandt/v-03-display-and-phone.webp", "/media/cases/the-sandt/v-06-phones-duo.webp", "/media/cases/the-sandt/v-07-phone-row.webp", "/media/cases/the-sandt/v-02-screen-wall.webp", "/media/cases/the-sandt/v-05-phone-closeup.webp"],
    films: [
      { src: "/media/cases/the-sandt/v-motion-02-phones-scroll.mp4", poster: "/media/cases/the-sandt/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
  "your-earth": {
    cover: "/media/cases/your-earth/v-03-floating-ui.webp",
    hero: { src: "/media/cases/your-earth/v-motion-01-zoom-in.mp4", poster: "/media/cases/your-earth/v-motion-01-zoom-in.webp" },
    images: ["/media/cases/your-earth/v-03-floating-ui.webp", "/media/cases/your-earth/v-05-phone-closeup.webp", "/media/cases/your-earth/v-04-page-columns.webp", "/media/cases/your-earth/v-07-phones-duo.webp", "/media/cases/your-earth/v-02-device-panels.webp", "/media/cases/your-earth/v-06-tablet.webp", "/media/cases/your-earth/v-08-phones-flatlay.webp"],
    films: [
      { src: "/media/cases/your-earth/v-motion-03-pages.mp4", poster: "/media/cases/your-earth/v-motion-03-pages.webp", w: 1600, h: 1000 },
      { src: "/media/cases/your-earth/v-motion-02-phones-scroll.mp4", poster: "/media/cases/your-earth/v-motion-02-phones-scroll.webp", w: 1600, h: 1000 },
    ],
  },
};
