import type { Metadata } from "next";
import { Rubik_Mono_One, JetBrains_Mono } from "next/font/google";

import "@styles/globals.css";

const jetbrains = JetBrains_Mono({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const rubikMonoOne = Rubik_Mono_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-rubik-mono-one",
});

export const metadata: Metadata = {
  title: "bouz",
  description: "bouz portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrains.variable} ${rubikMonoOne.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
