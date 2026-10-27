import localFont from "next/font/local";

// Merkletters van klanten, alleen voor de showcases. preload: false, zodat ze
// pas laden als de showcase in beeld komt en niet meeliften op de eerste paint.
export const museoModerno = localFont({
  src: "../../fonts/museomoderno-latin-wght-normal.woff2",
  weight: "100 900",
  style: "normal",
  variable: "--f-museo",
  display: "swap",
  preload: false,
});

export const poppins = localFont({
  src: [
    { path: "../../fonts/poppins-latin-400-normal.woff2", weight: "400" },
    { path: "../../fonts/poppins-latin-500-normal.woff2", weight: "500" },
    { path: "../../fonts/poppins-latin-600-normal.woff2", weight: "600" },
    { path: "../../fonts/poppins-latin-700-normal.woff2", weight: "700" },
  ],
  style: "normal",
  variable: "--f-poppins",
  display: "swap",
  preload: false,
});
