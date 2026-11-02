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
          alignItems: "center",
          justifyContent: "center",
          background: "#0E2419",
        }}
      >
        <div
          style={{
            width: 156,
            height: 156,
            borderRadius: 78,
            background: "#1A3326",
            border: "4px solid #B08D3C",
            display: "flex",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ display: "flex", gap: 6, position: "absolute", left: 16, top: 18 }}>
            <div style={{ width: 14, height: 120, background: "#E6EBE7", borderRadius: 2 }} />
            <div style={{ width: 14, height: 120, background: "#C8D4CC", borderRadius: 2 }} />
            <div style={{ width: 14, height: 120, background: "#E6EBE7", borderRadius: 2 }} />
          </div>
          <div style={{ position: "absolute", left: 14, top: 48, width: 52, height: 6, background: "#B08D3C", borderRadius: 2 }} />
          <div style={{ position: "absolute", left: 14, top: 82, width: 52, height: 6, background: "#C9AE66", borderRadius: 2 }} />
          <div style={{ position: "absolute", right: 22, top: 28, width: 58, height: 28, background: "#C23A3A", borderRadius: "30px 30px 4px 4px" }} />
          <div style={{ position: "absolute", right: 28, top: 48, width: 46, height: 42, background: "#E0B892", borderRadius: 24 }} />
          <div style={{ position: "absolute", right: 30, top: 74, width: 42, height: 48, background: "#4A3420", borderRadius: "8px 8px 22px 22px" }} />
          <div style={{ position: "absolute", right: 24, bottom: 10, width: 54, height: 28, background: "#9B2C2C", borderRadius: "6px 6px 16px 16px" }} />
        </div>
      </div>
    ),
    size,
  );
}
