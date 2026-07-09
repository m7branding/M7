/** @type {import('next').NextConfig} */

// Statische export (voor FTP-hosting op bv. letsgo.m7branding.com) aanzetten
// met:  STATIC_EXPORT=1 npm run build   (of: npm run export)
// Dit levert een self-contained `out/`-map op die je 1-op-1 kunt uploaden.
const isExport = process.env.STATIC_EXPORT === "1";

const nextConfig = {
  reactStrictMode: true,

  ...(isExport
    ? {
        // Zelfstandige statische export — geen Node-server nodig.
        output: "export",
        images: { unoptimized: true },
      }
    : {
        // SSR/Vercel-modus: sta toe dat de experience als <iframe> op je eigen
        // site(s) wordt ingesloten (frame-ancestors * = embedbaar op elk domein).
        // NB: bij statische export moet je webserver deze header zelf zetten;
        // standaard staat framing echter gewoon toe.
        async headers() {
          return [
            {
              source: "/:path*",
              headers: [
                { key: "Content-Security-Policy", value: "frame-ancestors *;" },
              ],
            },
          ];
        },
      }),
};

module.exports = nextConfig;
