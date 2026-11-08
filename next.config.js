// klanten met meerdere projecten: één pagina (host), de andere delen als hoofdstuk (#slug)
const caseFamilies = require("./src/content/case-families.json");
// url's van de vorige (Webflow-)site → de nieuwe pagina's; Engelstalige pagina's naar /en, Nederlandse landingspagina's naar NL
const legacyRedirects = require("./src/content/legacy-redirects.json");
// hernoemde/verwijderde/samengevoegde routes; dezelfde lijsten gebruikt de middleware (Netlify draait die vóór deze redirects)
const rules = require("./src/content/redirect-rules.json");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Aparte map voor een dev-server naast een productie-build (NEXT_DIST_DIR=.next-dev npx next dev)
  distDir: process.env.NEXT_DIST_DIR || ".next",
  // De server-functie hoeft de media niet mee te nemen: beeldafmetingen worden bij de build uit /public gelezen
  // (zie components/case/imageSize.ts) en de hosting serveert /public zelf. Zonder dit zit alle media (honderden MB)
  // in de functie en weigert Netlify de upload ("request body too large").
  experimental: {
    outputFileTracingExcludes: { "*": ["public/**/*", "scripts/**/*", "shots/**/*"] },
  },
  // Zet dit aan voor een volledig statische export (handig om te embedden
  // op WordPress/Webflow of te hosten op een CDN):
  // output: "export",
  async redirects() {
    const moved = rules.movedSectors;
    const services = rules.renamedServices;
    const mergedCases = rules.mergedCases;
    const removedCases = rules.removedCases;
    // losse url's van een deel van de storyline van een klant → de pagina van de host, bij dat hoofdstuk
    const familyParts = caseFamilies.flatMap(([host, ...parts]) => parts.map((part) => [part, host]));
    return [
      ...legacyRedirects.map(([source, destination]) => ({ source, destination, permanent: true })),
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
