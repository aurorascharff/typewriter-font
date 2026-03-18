import { ImageResponse } from "next/og";

export const alt = "Typewriter Font – Unicode Monospace Text Generator";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          width: "100%",
          height: "100%",
          backgroundColor: "#0a0a0a",
          padding: "80px 100px",
          gap: "32px",
        }}
      >
        <div
          style={{
            fontSize: 80,
            fontWeight: 700,
            fontFamily: "monospace",
            color: "#fafafa",
            lineHeight: 1.1,
          }}
        >
          Typewriter Font
        </div>
        <div
          style={{
            fontSize: 28,
            color: "#a1a1aa",
            lineHeight: 1.5,
            maxWidth: "700px",
          }}
        >
          Convert text to monospace Unicode characters that look like a terminal
          or typewriter.
        </div>
      </div>
    ),
    { ...size },
  );
}
