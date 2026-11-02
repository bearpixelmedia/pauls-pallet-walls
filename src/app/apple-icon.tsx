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
          borderRadius: 28,
        }}
      >
        <div style={{ display: "flex", gap: 10 }}>
          <div
            style={{
              width: 28,
              height: 112,
              background: "#E6EBE7",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              width: 28,
              height: 112,
              background: "#C8D4CC",
              borderRadius: 4,
            }}
          />
          <div
            style={{
              width: 28,
              height: 112,
              background: "#E6EBE7",
              borderRadius: 4,
            }}
          />
        </div>
        <div
          style={{
            position: "absolute",
            top: 58,
            left: 28,
            width: 124,
            height: 10,
            background: "#B08D3C",
            borderRadius: 3,
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 108,
            left: 28,
            width: 124,
            height: 10,
            background: "#C9AE66",
            borderRadius: 3,
          }}
        />
      </div>
    ),
    size,
  );
}
