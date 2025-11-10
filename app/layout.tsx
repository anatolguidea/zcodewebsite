import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { StructuredDataProvider } from "@/components/layout/StructuredDataProvider";
import { MobileMetaTags } from "@/components/layout/MobileMetaTags";

const inter = Inter({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0f1a1d" },
    { media: "(prefers-color-scheme: dark)", color: "#0f1a1d" },
    { color: "#0f1a1d" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "Modern Agency Website",
    template: "%s | YourBrand",
  },
  description:
    "A production-ready, high-performance website with minimal design and exceptional user experience.",
  keywords: ["web development", "agency", "minimal design", "modern website"],
  authors: [{ name: "YourBrand" }],
  creator: "YourBrand",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    siteName: "YourBrand",
    title: "Modern Agency Website",
    description:
      "A production-ready, high-performance website with minimal design and exceptional user experience.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "YourBrand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Agency Website",
    description:
      "A production-ready, high-performance website with minimal design and exceptional user experience.",
    images: ["/og-image.jpg"],
    creator: "@yourbrand",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    // PNG icons can be added later - SVG works for modern browsers
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <MobileMetaTags />
        <StructuredDataProvider />
        {children}
      </body>
    </html>
  );
}
