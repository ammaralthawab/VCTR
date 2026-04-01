import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VCTR — Direction + Magnitude",
  description: "VCTR is a systems-first marketing intelligence firm based in Riyadh, Saudi Arabia. We replace guesswork with direction.",
  keywords: ["marketing", "Riyadh", "KSA", "brand intelligence", "VCTR"],
  openGraph: {
    title: "VCTR — Direction + Magnitude",
    description: "We replace guesswork with direction.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;900&family=IBM+Plex+Sans+Arabic:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
