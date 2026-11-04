import { ImageResponse } from "next/og";
import { M7_PATHS } from "@/components/brand/M7Logo";

export const runtime = "edge";

/** Dynamische Open Graph-afbeelding in M7-stijl: /og?title=... */
export function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const title = (searchParams.get("title") || "From pixels to stars.").slice(0, 90);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "radial-gradient(90% 80% at 80% 10%, #0f3a3a 0%, #030304 60%)",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <svg width="150" height="86" viewBox="0 0 89 51" fill="#fff">
          {M7_PATHS.map((d, i) => (
            <path key={i} d={d} />
          ))}
        </svg>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 76, fontWeight: 800, letterSpacing: -2, lineHeight: 1.05, maxWidth: 1000 }}>{title}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 28, color: "#a7a7b0" }}>
            <div style={{ width: 60, height: 4, background: "linear-gradient(90deg,#3affff,#00ff19)" }} />
            M7 Branding &amp; Design · m7branding.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
