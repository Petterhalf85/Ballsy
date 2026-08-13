"use client";

import dynamic from "next/dynamic";

const BallsyQuiz = dynamic(() => import("../components/BallsyQuiz"), {
  ssr: false,
  loading: () => <p style={{ textAlign: "center", marginTop: 40 }}>Loading…</p>,
});

export default function Home() {
  return <BallsyQuiz />;
}
