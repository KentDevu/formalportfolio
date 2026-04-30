import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "Kent Harold Belen — Tech Lead × Security Engineer",
  description:
    "Kent Harold Belen — Tech Lead at Catalyx Solutions, Software Engineer at Lujo PH. Full-stack + security + AI. Top 4% TryHackMe. Based in Makati, PH.",
  keywords: [
    "Kent Harold Belen",
    "portfolio",
    "tech lead",
    "security engineer",
    "full-stack",
    "cybersecurity",
  ],
  authors: [{ name: "Kent Harold Belen" }],
  openGraph: {
    title: "Kent Harold Belen — Tech Lead × Security Engineer",
    description:
      "Full-stack + security + AI. Top 4% TryHackMe. Based in Makati, PH.",
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
      <body>{children}</body>
    </html>
  );
}
