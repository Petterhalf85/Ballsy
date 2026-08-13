import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata = {
  title: "AreYouBallsy? — Discover Your Courage",
  description:
    "Ballsy isn't about being fearless. Ballsy is about what you do when you're afraid. Take the 33-question courage test.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${anton.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
