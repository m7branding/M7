/* ============================================================
   Mockups en animaties die M7 zelf aanlevert (o.a. het artifact "M7 Case
   Mockups" en losse uploads), per case. Ze gaan vóór de gegenereerde renders:
   beelden vooraan in de galerij, films als schermvullende blokken in het verhaal,
   optioneel als hero (een film met een rustige linkeronderhoek) en als cover.
   Bestanden: public/media/cases/<slug>/s-*.{webp,mp4}.
   ============================================================ */

export interface SuppliedFilm {
  src: string;
  poster: string;
  w: number;
  h: number;
  title: string;
}

export interface SuppliedSet {
  images: { src: string; title?: string }[];
  films: SuppliedFilm[];
  /** Film die de hero wordt (src). */
  hero?: string;
  /** Beeld dat de cover wordt (src). */
  cover?: string;
}

export const suppliedMedia: Record<string, SuppliedSet> = {
  "buitenstate": {
    images: [
      { src: "/media/cases/buitenstate/s-device-family.webp" },
      { src: "/media/cases/buitenstate/s-ipad.webp" },
    ],
    films: [
    ],
  },
  "citex-ai": {
    hero: "/media/cases/citex-ai/s-infra-citex-11-citex-live-display.mp4",
    cover: "/media/cases/citex-ai/s-infra-citex-08-citex-studio-display.webp",
    images: [
      { src: "/media/cases/citex-ai/s-infra-citex-08-citex-studio-display.webp", title: "Citex — Area dashboard on Studio Display" },
      { src: "/media/cases/citex-ai/s-infra-citex-09-citex-ipad-kpi.webp", title: "Citex — KPI panel on floating iPad Pro" },
      { src: "/media/cases/citex-ai/s-infra-citex-10-citex-angled-closeup.webp", title: "Citex — Angled screen close-up" },
    ],
    films: [
      { src: "/media/cases/citex-ai/s-infra-citex-11-citex-live-display.mp4", poster: "/media/cases/citex-ai/s-infra-citex-11-citex-live-display.webp", w: 1920, h: 1080, title: "Citex — Live dashboard on Studio Display" },
      { src: "/media/cases/citex-ai/s-infra-citex-12-citex-social-4x5.mp4", poster: "/media/cases/citex-ai/s-infra-citex-12-citex-social-4x5.webp", w: 1080, h: 1350, title: "Citex — Social cut 4:5" },
    ],
  },
  "cryptocointalk": {
    images: [
      { src: "/media/cases/cryptocointalk/s-laptop.webp" },
      { src: "/media/cases/cryptocointalk/s-tradecursus.webp" },
    ],
    films: [
    ],
  },
  "db-kiepers": {
    images: [
      { src: "/media/cases/db-kiepers/s-website.webp" },
    ],
    films: [
    ],
  },
  "eredivisietoppers": {
    hero: "/media/cases/eredivisietoppers/s-eredivisie-07-eredivisie-pack-opening.mp4",
    cover: "/media/cases/eredivisietoppers/s-eredivisie-01-eredivisie-hero.webp",
    images: [
      { src: "/media/cases/eredivisietoppers/s-eredivisie-01-eredivisie-hero.webp", title: "Eredivisietoppers — Hero: badge, floating iPhone & flying cards" },
      { src: "/media/cases/eredivisietoppers/s-eredivisie-02-eredivisie-collection.webp", title: "Eredivisietoppers — Card collection fan" },
      { src: "/media/cases/eredivisietoppers/s-eredivisie-03-eredivisie-lineup.webp", title: "Eredivisietoppers — Line-up on a 3D pitch" },
      { src: "/media/cases/eredivisietoppers/s-eredivisie-04-eredivisie-live-duel.webp", title: "Eredivisietoppers — Live duel report" },
      { src: "/media/cases/eredivisietoppers/s-eredivisie-05-eredivisie-packs.webp", title: "Eredivisietoppers — Bronze, gold & silver player packs" },
      { src: "/media/cases/eredivisietoppers/s-eredivisie-06-eredivisie-grid.webp", title: "Eredivisietoppers — Grid on pink with phone & cards" },
      { src: "/media/cases/eredivisietoppers/s-pitchdecks-02-eredivisie-macbook-hero.webp", title: "Eredivisietoppers — App presentation on MacBook" },
      { src: "/media/cases/eredivisietoppers/s-pitchdecks-07-eredivisie-card-fan.webp", title: "Eredivisietoppers — Printed slide cards" },
      { src: "/media/cases/eredivisietoppers/s-pitchdecks-08-pitchdecks-overview.webp", title: "Pitch decks — Three-deck overview" },
    ],
    films: [
      { src: "/media/cases/eredivisietoppers/s-eredivisie-07-eredivisie-pack-opening.mp4", poster: "/media/cases/eredivisietoppers/s-eredivisie-07-eredivisie-pack-opening.webp", w: 1920, h: 1080, title: "Eredivisietoppers — Pack opening" },
      { src: "/media/cases/eredivisietoppers/s-eredivisie-08-eredivisie-phone-orbit.mp4", poster: "/media/cases/eredivisietoppers/s-eredivisie-08-eredivisie-phone-orbit.webp", w: 1920, h: 1080, title: "Eredivisietoppers — Floating iPhone with orbiting cards" },
      { src: "/media/cases/eredivisietoppers/s-eredivisie-09-eredivisie-social-teaser.mp4", poster: "/media/cases/eredivisietoppers/s-eredivisie-09-eredivisie-social-teaser.webp", w: 1080, h: 1350, title: "Eredivisietoppers — Social teaser (4:5)" },
      { src: "/media/cases/eredivisietoppers/s-pitchdecks-10-eredivisie-ipad-presenting.mp4", poster: "/media/cases/eredivisietoppers/s-pitchdecks-10-eredivisie-ipad-presenting.webp", w: 1920, h: 1080, title: "Eredivisietoppers — Presenting on iPad Pro" },
    ],
  },
  "expociety-app": {
    hero: "/media/cases/expociety-app/s-expociety-08-expociety-phones-cycle.mp4",
    cover: "/media/cases/expociety-app/s-expociety-01-expociety-gravity-phones.webp",
    images: [
      { src: "/media/cases/expociety-app/s-expociety-01-expociety-gravity-phones.webp", title: "Expociety — Gravity iPhones on colour block" },
      { src: "/media/cases/expociety-app/s-expociety-02-expociety-dark-hero.webp", title: "Expociety — Dark navy hero" },
      { src: "/media/cases/expociety-app/s-expociety-03-expociety-social-grid.webp", title: "Expociety — Social grid flat-lay" },
      { src: "/media/cases/expociety-app/s-expociety-04-expociety-iphone-closeup.webp", title: "Expociety — iPhone close-up" },
      { src: "/media/cases/expociety-app/s-expociety-05-expociety-logo-colourways.webp", title: "Expociety — Logo colourways" },
      { src: "/media/cases/expociety-app/s-expociety-06-expociety-ui-cards.webp", title: "Expociety — UI cards (portrait)" },
      { src: "/media/cases/expociety-app/s-expociety-07-exposuite-macbook.webp", title: "Exposuite — Brand dashboard on MacBook" },
      { src: "/media/cases/expociety-app/s-pitchdecks-01-expociety-ipad-hero.webp", title: "Expociety — Investor deck cover on iPad Pro" },
      { src: "/media/cases/expociety-app/s-pitchdecks-04-expociety-booklet.webp", title: "Expociety — Printed landscape booklet" },
      { src: "/media/cases/expociety-app/s-pitchdecks-05-expociety-slide-wall.webp", title: "Expociety — Slide wall" },
      { src: "/media/cases/expociety-app/s-pitchdecks-08-pitchdecks-overview.webp", title: "Pitch decks — Three-deck overview" },
    ],
    films: [
      { src: "/media/cases/expociety-app/s-expociety-08-expociety-phones-cycle.mp4", poster: "/media/cases/expociety-app/s-expociety-08-expociety-phones-cycle.webp", w: 1920, h: 1080, title: "Expociety — Three phones, screens cycling" },
      { src: "/media/cases/expociety-app/s-expociety-09-expociety-logo-reveal.mp4", poster: "/media/cases/expociety-app/s-expociety-09-expociety-logo-reveal.webp", w: 1920, h: 1080, title: "Expociety — Logo ring reveal" },
      { src: "/media/cases/expociety-app/s-expociety-10-expociety-ui-cards-motion.mp4", poster: "/media/cases/expociety-app/s-expociety-10-expociety-ui-cards-motion.webp", w: 1920, h: 1080, title: "Expociety — UI cards fly-in" },
      { src: "/media/cases/expociety-app/s-pitchdecks-09-expociety-flythrough.mp4", poster: "/media/cases/expociety-app/s-pitchdecks-09-expociety-flythrough.webp", w: 1920, h: 1080, title: "Expociety — Deck flythrough" },
    ],
  },
  "fairlink": {
    images: [
      { src: "/media/cases/fairlink/s-postcard.webp" },
      { src: "/media/cases/fairlink/s-postcard-mark.webp" },
      { src: "/media/cases/fairlink/s-linkedin-website.webp" },
    ],
    films: [
    ],
  },
  "huurfix": {
    images: [
      { src: "/media/cases/huurfix/s-brochure.webp" },
    ],
    films: [
    ],
  },
  "infrai": {
    hero: "/media/cases/infrai/s-infra-citex-06-infraxpec-phones-float.mp4",
    cover: "/media/cases/infrai/s-infra-citex-01-infraxpec-xpect-app-trio.webp",
    images: [
      { src: "/media/cases/infrai/s-infra-citex-01-infraxpec-xpect-app-trio.webp", title: "InfraXpec — Xpect App, three floating iPhones" },
      { src: "/media/cases/infrai/s-infra-citex-02-infraxpec-suite-macbook.webp", title: "InfraXpec — Xpect Suite on MacBook Pro & iPhone" },
      { src: "/media/cases/infrai/s-infra-citex-03-infraxpec-pavement-crack.webp", title: "InfraXpec — Pavement crack AR card" },
      { src: "/media/cases/infrai/s-infra-citex-04-infraxpec-route-flatlay.webp", title: "InfraXpec — Route flow flat lay" },
      { src: "/media/cases/infrai/s-infra-citex-05-infraxpec-ar-closeup.webp", title: "InfraXpec — AR inspection close-up" },
      { src: "/media/cases/infrai/s-pitchdecks-03-infrai-ipad-hero.webp", title: "InfrAI — Pitch deck cover on iPad Pro" },
      { src: "/media/cases/infrai/s-pitchdecks-06-infrai-presentation-room.webp", title: "InfrAI — Deck on stage screen" },
      { src: "/media/cases/infrai/s-pitchdecks-08-pitchdecks-overview.webp", title: "Pitch decks — Three-deck overview" },
    ],
    films: [
      { src: "/media/cases/infrai/s-infra-citex-06-infraxpec-phones-float.mp4", poster: "/media/cases/infrai/s-infra-citex-06-infraxpec-phones-float.webp", w: 1920, h: 1080, title: "InfraXpec — Floating iPhones, screens switching" },
      { src: "/media/cases/infrai/s-infra-citex-07-infraxpec-app-to-suite.mp4", poster: "/media/cases/infrai/s-infra-citex-07-infraxpec-app-to-suite.webp", w: 1920, h: 1080, title: "InfraXpec — From Xpect App to Xpect Suite" },
      { src: "/media/cases/infrai/s-pitchdecks-11-infrai-booklet-flip.mp4", poster: "/media/cases/infrai/s-pitchdecks-11-infrai-booklet-flip.webp", w: 1920, h: 1080, title: "InfrAI — Booklet page turns" },
    ],
  },
  "jurgh-detailing": {
    hero: "/media/cases/jurgh-detailing/s-projects-11-jurgh-scroll.mp4",
    cover: "/media/cases/jurgh-detailing/s-projects-05-jurgh-detailing.webp",
    images: [
      { src: "/media/cases/jurgh-detailing/s-projects-05-jurgh-detailing.webp", title: "Jurgh Detailing — Website on MacBook and iPad" },
      { src: "/media/cases/jurgh-detailing/s-business-cards.webp" },
      { src: "/media/cases/jurgh-detailing/s-digital-menu.webp" },
      { src: "/media/cases/jurgh-detailing/s-flyer-glascoating.webp" },
      { src: "/media/cases/jurgh-detailing/s-macbook.webp" },
      { src: "/media/cases/jurgh-detailing/s-site-detailing.webp" },
      { src: "/media/cases/jurgh-detailing/s-website-mac.webp" },
      { src: "/media/cases/jurgh-detailing/s-website-tablet.webp" },
      { src: "/media/cases/jurgh-detailing/s-portal-1.webp" },
      { src: "/media/cases/jurgh-detailing/s-portal-2.webp" },
      { src: "/media/cases/jurgh-detailing/s-portal-3.webp" },
    ],
    films: [
      { src: "/media/cases/jurgh-detailing/s-projects-11-jurgh-scroll.mp4", poster: "/media/cases/jurgh-detailing/s-projects-11-jurgh-scroll.webp", w: 1920, h: 1080, title: "Jurgh Detailing — Website scroll on a dark luxury set" },
    ],
  },
  "kds-stansvormen": {
    images: [
      { src: "/media/cases/kds-stansvormen/s-van.webp" },
    ],
    films: [
    ],
  },
  "kippenkar": {
    cover: "/media/cases/kippenkar/s-projects-07-chickenwagon.webp",
    images: [
      { src: "/media/cases/kippenkar/s-projects-07-chickenwagon.webp", title: "Chickenwagon — Website on MacBook and iPad" },
    ],
    films: [
    ],
  },
  "mindyourpass": {
    images: [
      { src: "/media/cases/mindyourpass/s-phones.webp" },
      { src: "/media/cases/mindyourpass/s-phone-clean.webp" },
      { src: "/media/cases/mindyourpass/s-dashboard.webp" },
      { src: "/media/cases/mindyourpass/s-family-private.webp" },
      { src: "/media/cases/mindyourpass/s-family-business.webp" },
      { src: "/media/cases/mindyourpass/s-hand-phone.webp" },
      { src: "/media/cases/mindyourpass/s-apppass.webp" },
    ],
    films: [
    ],
  },
  "monvy": {
    hero: "/media/cases/monvy/s-monvy-10-monvy-platform-motion.mp4",
    images: [
      { src: "/media/cases/monvy/s-monvy-01-monvy-hero-laptop.webp", title: "Monvy — Dashboard on laptop, dark hero" },
      { src: "/media/cases/monvy/s-monvy-02-monvy-gravity-ipads.webp", title: "Monvy — Gravity tablets" },
      { src: "/media/cases/monvy/s-monvy-03-monvy-colour-block.webp", title: "Monvy — Login on a plinth, brand-blue colour block" },
      { src: "/media/cases/monvy/s-monvy-04-monvy-dashboard-detail.webp", title: "Monvy — Dashboard close-up" },
      { src: "/media/cases/monvy/s-monvy-05-monvy-brand-identity.webp", title: "Monvy — Brand identity board" },
      { src: "/media/cases/monvy/s-monvy-06-monvy-screens-wall.webp", title: "Monvy — Platform screens wall" },
      { src: "/media/cases/monvy/s-monvy-07-monvy-studio-display.webp", title: "Monvy — Workflows on a studio display" },
      { src: "/media/cases/monvy/s-monvy-08-monvy-application-snippets.webp", title: "Monvy — Application snippets" },
    ],
    films: [
      { src: "/media/cases/monvy/s-monvy-10-monvy-platform-motion.mp4", poster: "/media/cases/monvy/s-monvy-10-monvy-platform-motion.webp", w: 1920, h: 1080, title: "Monvy — Platform on laptop & floating tablet" },
      { src: "/media/cases/monvy/s-monvy-11-monvy-screens-wall-motion.mp4", poster: "/media/cases/monvy/s-monvy-11-monvy-screens-wall-motion.webp", w: 1920, h: 1080, title: "Monvy — Screens wall motion" },
      { src: "/media/cases/monvy/s-monvy-12-monvy-brand-reveal.mp4", poster: "/media/cases/monvy/s-monvy-12-monvy-brand-reveal.webp", w: 1920, h: 1080, title: "Monvy — Brand reveal" },
      { src: "/media/cases/monvy/s-monvy-13-monvy-social-cut.mp4", poster: "/media/cases/monvy/s-monvy-13-monvy-social-cut.webp", w: 1080, h: 1350, title: "Monvy — Social cut (4:5)" },
    ],
  },
  "repairlab": {
    cover: "/media/cases/repairlab/s-projects-03-repairlab-website.webp",
    images: [
      { src: "/media/cases/repairlab/s-projects-03-repairlab-website.webp", title: "Repairlab — Website on MacBook and iPhone" },
      { src: "/media/cases/repairlab/s-projects-04-repairlab-identity.webp", title: "Repairlab — Brand identity board" },
    ],
    films: [
    ],
  },
  "repairlab-content": {
    images: [
      { src: "/media/cases/repairlab-content/s-airpods-post.webp" },
    ],
    films: [
    ],
  },
  "smarthome-services": {
    images: [
      { src: "/media/cases/smarthome-services/s-iphones.webp" },
    ],
    films: [
    ],
  },
  "sublime-branding": {
    images: [
      { src: "/media/cases/sublime-branding/s-routebook.webp" },
    ],
    films: [
    ],
  },
  "taylor": {
    cover: "/media/cases/taylor/s-projects-09-taylor.webp",
    images: [
      { src: "/media/cases/taylor/s-projects-09-taylor.webp", title: "Taylor — Website in browser" },
    ],
    films: [
    ],
  },
  "teamtv": {
    hero: "/media/cases/teamtv/s-projects-10-teamtv-scroll.mp4",
    images: [
      { src: "/media/cases/teamtv/s-projects-01-teamtv-platform.webp", title: "TeamTV — Website & platform on MacBook and iPad" },
      { src: "/media/cases/teamtv/s-projects-02-teamtv-studio.webp", title: "TeamTV Studio — Live match app on iPad and iPhone" },
      { src: "/media/cases/teamtv/s-ipad-iphone.webp" },
    ],
    films: [
      { src: "/media/cases/teamtv/s-projects-10-teamtv-scroll.mp4", poster: "/media/cases/teamtv/s-projects-10-teamtv-scroll.webp", w: 1920, h: 1080, title: "TeamTV — Website scroll on MacBook with floating iPad" },
    ],
  },
  "teamtv-pricing-table": {
    images: [
      { src: "/media/cases/teamtv-pricing-table/s-pricing-table.webp" },
    ],
    films: [
    ],
  },
};
