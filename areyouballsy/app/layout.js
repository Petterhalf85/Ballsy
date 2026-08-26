import { Fraunces, Space_Grotesk } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const title = "AreYouBallsy? — Discover Your Courage";
const description =
  "Ballsy isn't about being fearless. Ballsy is about what you do when you're afraid. Take the 33-question courage test.";

export const metadata = {
  metadataBase: new URL("https://areyouballsy.com"),
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://areyouballsy.com",
    siteName: "AreYouBallsy?",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${spaceGrotesk.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
