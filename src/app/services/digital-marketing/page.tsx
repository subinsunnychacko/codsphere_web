// app/services/digital-marketing/page.tsx
import type { Metadata } from "next";
import DigitalMarketingHero from "@/components/services/digital-marketing/DigitalMarketingHero";
import TransformPresence from "@/components/services/digital-marketing/TransformPresence";
import CoreDigitalServices from "@/components/services/digital-marketing/CoreDigitalServices";
import WhyChooseCodSphere from "@/components/services/digital-marketing/WhyChooseCodSphere";
import TechStack from "@/components/services/digital-marketing/TechStack";
import ClientTestimonials from "@/components/services/digital-marketing/ClientTestimonials";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Digital Marketing Services"),
  description:
    "Transform your online presence with CodSphere's data-driven digital marketing services. SEO, PPC, Social Media, and more.",
  alternates: {
    canonical: "https://codsphere.com/services/digital-marketing",
  },
  openGraph: {
    title: formatMetaTitle("Digital Marketing Services"),
    description:
      "Transform your online presence with CodSphere's data-driven digital marketing services. SEO, PPC, Social Media, and more.",
    url: "https://codsphere.com/services/digital-marketing",
    type: "website",
    images: [
      {
        url: "https://codsphere.com/og/services-og-digital-marketing.png",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Services by CodSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: formatMetaTitle("Digital Marketing Services"),
    description:
      "Transform your online presence with CodSphere's data-driven digital marketing services. SEO, PPC, Social Media, and more.",
    images: ["https://codsphere.com/og/services-og-digital-marketing.png"],
  },
};

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <DigitalMarketingHero />
      <TransformPresence />
      <CoreDigitalServices />
      <WhyChooseCodSphere />
      <TechStack />
      <ClientTestimonials />
      <ContactCTA />
    </div>
  );
}
