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
    return [
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
