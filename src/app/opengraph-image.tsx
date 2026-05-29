import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Semper Admin Portal — Sourced USMC administrative reference";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0A1424",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px 80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        {/* Scarlet left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            width: 8,
            height: "100%",
            background: "#B82230",
          }}
        />

        {/* Eyebrow */}
        <div
          style={{
            fontSize: 18,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#B82230",
            marginBottom: 24,
          }}
        >
          USMC Administrative Reference
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            lineHeight: 1,
            color: "#F2E5BE",
            letterSpacing: "0.04em",
            marginBottom: 28,
          }}
        >
          SEMPER ADMIN
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1,
            color: "#B89042",
            letterSpacing: "0.06em",
            marginBottom: 40,
          }}
        >
          PORTAL
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: 24,
            color: "#8A7F66",
            lineHeight: 1.5,
            maxWidth: 800,
          }}
        >
          Role-tagged reference for Marines, leaders, commanders, and admin specialists. Backed by MCO, MARADMIN, DODI, and USC authority.
        </div>

        {/* Bottom stat strip */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            left: 80,
            display: "flex",
            gap: 48,
          }}
        >
          {[
            { label: "Roles", value: "4" },
            { label: "Pages", value: "700+" },
            { label: "Citations", value: "440+" },
          ].map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              <div style={{ fontSize: 32, fontWeight: 800, color: "#F2E5BE" }}>{s.value}</div>
              <div style={{ fontSize: 14, color: "#5C5340", letterSpacing: "0.1em", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
