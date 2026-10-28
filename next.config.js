/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Zet dit aan voor een volledig statische export (handig om te embedden
  // op WordPress/Webflow of te hosten op een CDN):
  // output: "export",
  async redirects() {
    // hernoemde sectoren
    const moved = [
      ["bouw-vastgoed-architectuur", "bouw-architectuur"],
      ["e-commerce-retail", "food-retail"],
    ];
    return moved.flatMap(([from, to]) => [
      { source: `/sectoren/${from}`, destination: `/sectoren/${to}`, permanent: true },
      { source: `/en/sectors/${from}`, destination: `/en/sectors/${to}`, permanent: true },
    ]);
  },
};

module.exports = nextConfig;
