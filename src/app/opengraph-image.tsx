import { ImageResponse } from "next/og";

export const alt = "Paul Bunyan's Pallet Walls";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#0E2419", fontFamily: "Georgia, Times New Roman, serif" }}>
        <div style={{ width: 440, height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#14281E" }}>
          <div style={{ width: 300, height: 300, borderRadius: 150, background: "#E6EBE7", border: "6px solid #B08D3C", display: "flex", position: "relative", overflow: "hidden" }}>
            <div style={{ display: "flex", gap: 12, position: "absolute", left: 28, top: 36 }}>
              <div style={{ width: 28, height: 230, background: "#0E2419", borderRadius: 3 }} />
              <div style={{ width: 28, height: 230, background: "#1A3326", borderRadius: 3 }} />
              <div style={{ width: 28, height: 230, background: "#0E2419", borderRadius: 3 }} />
            </div>
            <div style={{ position: "absolute", left: 24, top: 95, width: 110, height: 12, background: "#B08D3C", borderRadius: 3 }} />
            <div style={{ position: "absolute", left: 24, top: 155, width: 110, height: 12, background: "#C9AE66", borderRadius: 3 }} />
            <div style={{ position: "absolute", right: 34, top: 52, width: 110, height: 48, background: "#8B1E1E", borderRadius: "56px 56px 8px 8px" }} />
            <div style={{ position: "absolute", right: 48, top: 88, width: 82, height: 76, background: "#D7AE86", borderRadius: 42 }} />
            <div style={{ position: "absolute", right: 50, top: 140, width: 78, height: 96, background: "#3D2914", borderRadius: "12px 12px 40px 40px" }} />
            <div style={{ position: "absolute", right: 42, bottom: 16, width: 94, height: 44, background: "#7A1A1A", borderRadius: "8px 8px 28px 28px" }} />
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", paddingLeft: 48, paddingRight: 48 }}>
          <div style={{ fontSize: 56, fontWeight: 600, color: "#E6EBE7", letterSpacing: -1, lineHeight: 1.05 }}>Paul Bunyan&apos;s</div>
          <div style={{ marginTop: 14, fontSize: 30, fontWeight: 500, color: "#C8D4CC", letterSpacing: 6 }}>PALLET WALLS</div>
          <div style={{ marginTop: 22, width: 72, height: 3, background: "#B08D3C", borderRadius: 2 }} />
          <div style={{ marginTop: 28, fontSize: 22, color: "#C9AE66", fontFamily: "Georgia, Times New Roman, serif", fontStyle: "italic" }}>Classic wood feature walls</div>
        </div>
      </div>
    ),
    size,
  );
}
