import type { Metadata } from "next";

import localFont from "next/font/local";
import { Damion } from "next/font/google";
import "./globals.css";

import GoogleAnalytics from "@/components/GoogleAnalytics";
import Footer from "@/components/Footer";
import ContactUsPopupBtn from "@/components/ContactUsPopupBtn";
import Navbar2 from "@/components/Navbar2";
import Script from "next/script";

const sequelSans = localFont({
  src: [
    {
      path: "/fonts/sequel-sans/Sequel Sans Black Head.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "/fonts/sequel-sans/Sequel Sans Bold Head.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "/fonts/sequel-sans/Sequel Sans Medium Head.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "/fonts/sequel-sans/Sequel Sans Book Body.ttf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "/fonts/sequel-sans/Sequel Sans Roman Body.ttf",
    //   weight: "400",
    //   style: "normal",
    // },
    {
      path: "/fonts/sequel-sans/Sequel Sans Light Body.ttf",
      weight: "300",
      style: "normal",
    },
  ],
  variable: "--font-sequel-sans",
  display: "swap",
});

const damion = Damion({
  variable: "--font-damion",
  subsets: ["latin"],
  weight: "400", // only one available
});

export const metadata: Metadata = {
  metadataBase: new URL("https://codsphere.com"),
  title: "CodSphere - AI ERP, CRM & Automation Experts",
  description:
    "CodSphere builds next-gen CRM systems, scalable ERP platforms, smart invoicing tools, and full-funnel digital strategies for smarter business efficiency.",
  keywords:
    "CRM, ERP, business automation, AI solutions, digital marketing, invoicing tools, Vancouver tech, business efficiency",
  authors: [{ name: "CodSphere" }],
  creator: "CodSphere",
  publisher: "CodSphere",
  alternates: {
    canonical: "https://codsphere.com",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: "https://codsphere.com",
    locale: "en_US",
    title: "CodSphere - AI ERP, CRM & Automation Experts",
    description: "Next-gen CRM systems, scalable ERP platforms, and business automation tools.",
    siteName: "CodSphere",
    images: [
      {
        url: "https://codsphere.com/og/web-og-1200x630.png",
        width: 1200,
        height: 630,
        alt: "CodSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CodSphere - AI ERP, CRM & Automation",
    description: "Next-gen CRM systems, scalable ERP platforms, and business automation tools.",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "your-verification-code-here",
  },
  category: "technology",
  referrer: "origin-when-cross-origin",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="apple-mobile-web-app-title" content="CodSphere" />
      </head>
      <body
        className={`${sequelSans.variable} ${damion.variable} ${sequelSans.className} antialiased overflow-x-hidden`}
      >
        <GoogleAnalytics />
        <Script
          src="https://site-flow-ai--spathak6.replit.app/widget.js"
          data-widget-id="9ef7ba1c-8356-4adf-af1e-d5dcf4b093e0"
          strategy="afterInteractive"
        />
        <Navbar2 />
        <main className="pt-20 sm:pt-[88px] lg:pt-[104px]">{children}</main>
        <Footer />
        <ContactUsPopupBtn />
      </body>
    </html>
  );
}
