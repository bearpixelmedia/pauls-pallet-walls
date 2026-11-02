import { ImageResponse } from "next/og";

export const alt = "Paul Bunyan's Pallet Walls";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0E2419",
          fontFamily: "Georgia, Times New Roman, serif",
        }}
      >
        <div
          style={{
            width: 420,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#1A3326",
          }}
        >
          <div
            style={{
              width: 280,
              height: 280,
              borderRadius: 28,
              background: "#E6EBE7",
              display: "flex",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ display: "flex", gap: 10, position: "absolute", left: 22, top: 40 }}>
              <div style={{ width: 28, height: 200, background: "#0E2419", borderRadius: 4 }} />
              <div style={{ width: 28, height: 200, background: "#1A3326", borderRadius: 4 }} />
              <div style={{ width: 28, height: 200, background: "#0E2419", borderRadius: 4 }} />
            </div>
            <div style={{ position: "absolute", left: 18, top: 90, width: 110, height: 12, background: "#B08D3C", borderRadius: 3 }} />
            <div style={{ position: "absolute", left: 18, top: 150, width: 110, height: 12, background: "#C9AE66", borderRadius: 3 }} />
            <div style={{ position: "absolute", right: 28, top: 48, width: 110, height: 36, background: "#9B2C2C", borderRadius: "55px 55px 8px 8px" }} />
            <div style={{ position: "absolute", right: 40, top: 78, width: 86, height: 80, background: "#D4A574", borderRadius: 43 }} />
            <div style={{ position: "absolute", right: 42, top: 130, width: 82, height: 90, background: "#3D2914", borderRadius: "10px 10px 42px 42px" }} />
            <div style={{ position: "absolute", right: 36, bottom: 18, width: 94, height: 48, background: "#7A1F1F", borderRadius: "8px 8px 16px 16px" }} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: 56, paddingRight: 48 }}>
          <div style={{ fontSize: 58, fontWeight: 600, color: "#E6EBE7", letterSpacing: -1, lineHeight: 1.05 }}>
            Paul Bunyan&apos;s
          </div>
          <div style={{ marginTop: 16, fontSize: 32, fontWeight: 500, color: "#C8D4CC", letterSpacing: 5 }}>
            PALLET WALLS
          </div>
          <div style={{ marginTop: 22, width: 72, height: 4, background: "#B08D3C", borderRadius: 2 }} />
          <div style={{ marginTop: 28, fontSize: 24, color: "#C9AE66", fontFamily: "Arial, Helvetica, sans-serif" }}>
            Packages &amp; construction
          </div>
        </div>
      </div>
    ),
    size,
  );
}
