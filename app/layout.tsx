import type { Metadata, Viewport } from "next";

import "./globals.css";
import localFont from "next/font/local";

export const viewport: Viewport = {
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "john doe",
  description: "building & maintaining life.",
  keywords: [

  ],
  referrer: "no-referrer",
  metadataBase: new URL("https://current.site"),
  robots: "follow, index",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://current.site",
    title: "john doe",
    description: "building & maintaining life.",
    images: [
      {
        url: "https://i.ibb.co/28Mw1Cs/malevolent-red-silhouette-wallpaper-5zkfi7utebqr3kxz-1.jpg",
        alt: "john doe",
        width: 1024,
        height: 1024,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@current.site",
    creator: "@john",
    title: "john doe",
    description: "building & maintaining life.",
    images: [
      {
        url: "https://i.ibb.co/28Mw1Cs/malevolent-red-silhouette-wallpaper-5zkfi7utebqr3kxz-1.jpg",
        alt: "john doe",
        width: 1024,
        height: 1024,
      },
    ],
  },
};

const PS = localFont({
  src: "./fonts/PS.ttf",
  weight: "normal",
  variable: "--font-PS",
});

const MP = localFont({
  src: "./fonts/PS.ttf",
  weight: "normal",
  variable: "--font-MP",
});

const MPB = localFont({
  src: "./fonts/MPBold.ttf",
  weight: "bold",
  variable: "--font-MPB",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${PS.variable} ${MP.variable} ${MPB.variable}`}>
      <head>
        <meta name="theme-color" content="#000000" />
      </head>
      <body style={{ backgroundColor: "black" }}>
        {children}
      </body>
    </html>
  );
}
