"use client";

import dynamic from "next/dynamic";

const BallsyQuiz = dynamic(() => import("../components/BallsyQuiz"), {
  ssr: false,
  loading: () => (
    <p style={{ textAlign: "center", marginTop: 80, color: "#93a99a" }}>Loading…</p>
  ),
});

export default function Home() {
  return <BallsyQuiz />;
}
