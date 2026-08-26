import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "AreYouBallsy? — Discover Your Courage";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#0b1712",
        }}
      >
        <svg width="110" height="82" viewBox="0 0 4096 3048" style={{ marginBottom: 32 }}>
          <path
            fill="#e6b23f"
            d="M1229 22 L1229 1492 L1314 1472 L1668 1174 L1674 448 L2184 446 L2601 786 L23 2956 L22 3021 L673 3006 L2491 1493 L3434 2246 L3096 2601 L2303 2601 L1870 2933 L1846 3002 L3333 3024 L4072 2246 L4075 2167 L2856 1200 L3274 851 L3316 743 L2359 21 Z"
          />
        </svg>
        <div
          style={{
            display: "flex",
            fontSize: 92,
            fontWeight: 700,
            color: "#f2e8d3",
            letterSpacing: "-0.01em",
          }}
        >
          AreYouBallsy?
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 30,
            color: "#d7a24a",
            marginTop: 24,
            maxWidth: 820,
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          Ballsy isn&rsquo;t the absence of fear. It&rsquo;s the decision to act anyway.
        </div>
      </div>
    ),
    { ...size }
  );
}
