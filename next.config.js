// klanten met meerdere projecten: één pagina (host), de andere delen als hoofdstuk (#slug)
const caseFamilies = require("./src/content/case-families.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Aparte map voor een dev-server naast een productie-build (NEXT_DIST_DIR=.next-dev npx next dev)
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // Zet dit aan voor een volledig statische export (handig om te embedden
  // op WordPress/Webflow of te hosten op een CDN):
  // output: "export",
  async redirects() {
    // hernoemde sectoren
    const moved = [
      ["bouw-vastgoed-architectuur", "bouw-architectuur"],
      ["e-commerce-retail", "food-retail"],
    ];
    // hernoemde diensten (ook de toepassingen eronder)
    const services = [["marketing-automatisering-funnels", "automation-funnels"]];
    // samengevoegde cases (zelfde klant)
    const mergedCases = [["titanium-exhaust-configurator", "maarschall"]];
    // verwijderde cases zonder beeldmateriaal: naar het overzicht
    const removedCases = [
      "designershouse",
      "impeco-chauffeurshandboek",
      "kds-intranet",
      "plenty-planet-content",
      "soesoe",
      "helloflow",
      "mission-critical-nutrition",
      "velorum",
      "gmu",
      "spoedfix",
      "phoenix-green-hydrogen",
    ];
    // losse url's van een deel van de storyline van een klant → de pagina van de host, bij dat hoofdstuk
    const familyParts = caseFamilies.flatMap(([host, ...parts]) => parts.map((part) => [part, host]));
    return [
      ...familyParts.flatMap(([part, host]) => [
        { source: `/cases/${part}`, destination: `/cases/${host}#${part}`, permanent: true },
        { source: `/en/cases/${part}`, destination: `/en/cases/${host}#${part}`, permanent: true },
      ]),
      ...mergedCases.flatMap(([from, to]) => [
        { source: `/cases/${from}`, destination: `/cases/${to}`, permanent: true },
        { source: `/en/cases/${from}`, destination: `/en/cases/${to}`, permanent: true },
      ]),
      ...removedCases.flatMap((slug) => [
        { source: `/cases/${slug}`, destination: "/cases", permanent: true },
        { source: `/en/cases/${slug}`, destination: "/en/cases", permanent: true },
      ]),
      ...moved.flatMap(([from, to]) => [
        { source: `/sectoren/${from}`, destination: `/sectoren/${to}`, permanent: true },
        { source: `/en/sectors/${from}`, destination: `/en/sectors/${to}`, permanent: true },
      ]),
      ...services.flatMap(([from, to]) => [
        { source: `/diensten/${from}/:app*`, destination: `/diensten/${to}/:app*`, permanent: true },
        { source: `/en/services/${from}/:app*`, destination: `/en/services/${to}/:app*`, permanent: true },
      ]),
    ];
  },
};

module.exports = nextConfig;
