import { ImageResponse } from "next/og";

export const alt = "Paul's Pallet Walls";
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
            width: 360,
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#1A3326",
          }}
        >
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: 14,
              background: "#E6EBE7",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div style={{ display: "flex", gap: 14 }}>
              <div
                style={{
                  width: 36,
                  height: 160,
                  background: "#0E2419",
                  borderRadius: 4,
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 160,
                  background: "#1A3326",
                  borderRadius: 4,
                }}
              />
              <div
                style={{
                  width: 36,
                  height: 160,
                  background: "#0E2419",
                  borderRadius: 4,
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 72,
                left: 28,
                width: 164,
                height: 12,
                background: "#B08D3C",
                borderRadius: 3,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: 136,
                left: 28,
                width: 164,
                height: 12,
                background: "#C9AE66",
                borderRadius: 3,
              }}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 64,
            paddingRight: 48,
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 600,
              color: "#E6EBE7",
              letterSpacing: -1,
              lineHeight: 1,
            }}
          >
            Paul&apos;s
          </div>
          <div
            style={{
              marginTop: 18,
              fontSize: 34,
              fontWeight: 500,
              color: "#C8D4CC",
              letterSpacing: 6,
            }}
          >
            PALLET WALLS
          </div>
          <div
            style={{
              marginTop: 22,
              width: 72,
              height: 4,
              background: "#B08D3C",
              borderRadius: 2,
            }}
          />
          <div
            style={{
              marginTop: 28,
              fontSize: 24,
              color: "#C9AE66",
              fontFamily: "Arial, Helvetica, sans-serif",
            }}
          >
            Packages &amp; construction
          </div>
        </div>
      </div>
    ),
    size,
  );
}
