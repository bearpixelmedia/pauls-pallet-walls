import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0E2419",
          borderRadius: 36,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div style={{ display: "flex", gap: 7, position: "absolute", left: 14, top: 28 }}>
          <div style={{ width: 18, height: 124, background: "#E6EBE7", borderRadius: 3 }} />
          <div style={{ width: 18, height: 124, background: "#C8D4CC", borderRadius: 3 }} />
          <div style={{ width: 18, height: 124, background: "#E6EBE7", borderRadius: 3 }} />
        </div>
        <div style={{ position: "absolute", left: 12, top: 58, width: 68, height: 8, background: "#B08D3C", borderRadius: 2 }} />
        <div style={{ position: "absolute", left: 12, top: 96, width: 68, height: 8, background: "#C9AE66", borderRadius: 2 }} />
        <div style={{ position: "absolute", right: 18, top: 32, width: 70, height: 24, background: "#C23A3A", borderRadius: "36px 36px 6px 6px" }} />
        <div style={{ position: "absolute", right: 26, top: 50, width: 54, height: 50, background: "#E0B892", borderRadius: 27 }} />
        <div style={{ position: "absolute", right: 28, top: 82, width: 50, height: 56, background: "#4A3420", borderRadius: "6px 6px 26px 26px" }} />
        <div style={{ position: "absolute", right: 22, bottom: 14, width: 62, height: 32, background: "#9B2C2C", borderRadius: "6px 6px 12px 12px" }} />
      </div>
    ),
    size,
  );
}
