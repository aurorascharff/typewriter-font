import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0a0a",
          borderRadius: 6,
          fontSize: 22,
          fontFamily: "monospace",
          fontWeight: 700,
          color: "#fafafa",
        }}
      >
        𝚃
      </div>
    ),
    { ...size },
  );
}
