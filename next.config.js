/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Zet dit aan voor een volledig statische export (handig om te embedden
  // op WordPress/Webflow of te hosten op een CDN):
  // output: "export",

  // Sta toe dat de experience als <iframe> op je eigen site(s) wordt ingesloten.
  // (frame-ancestors * = embedbaar op elk domein — het is een publieke widget.)
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-ancestors *;",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
