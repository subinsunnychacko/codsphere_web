import type { Metadata } from "next";
import CRMHero from "@/components/services/CRM/CRMHero";
import CRMIntro from "@/components/services/CRM/CRMIntro";
import WhyChooseCRM from "@/components/services/CRM/WhyChooseCRM";
import CRMSolutions from "@/components/services/CRM/CRMSolutions";
import CRMFeatures from "@/components/services/CRM/CRMFeatures";
import CRMTypes from "@/components/services/CRM/CRMTypes";
import CRMPlatforms from "@/components/services/CRM/CRMPlatforms";
import CRMBenefits from "@/components/services/CRM/CRMBenefits";
import CRMProcess from "@/components/services/CRM/CRMProcess";
import CRMTestimonials from "@/components/services/CRM/CRMTestimonials";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Custom CRM Development Services"),
  description:
    "Crafted CRM solutions tailored for startups, enterprises, and eCommerce platforms. Build intelligent, modular, and scalable CRM systems.",
  alternates: {
    canonical: "https://codsphere.com/services/crm-development",
  },
  openGraph: {
    title: formatMetaTitle("Custom CRM Development Services"),
    description:
      "Crafted CRM solutions tailored for startups, enterprises, and eCommerce platforms. Build intelligent, modular, and scalable CRM systems.",
    url: "https://codsphere.com/services/crm-development",
    type: "website",
    images: [
      {
        url: "https://codsphere.com/og/services-og-crm-development.png",
        width: 1200,
        height: 630,
        alt: "Custom CRM Development Services by CodSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: formatMetaTitle("Custom CRM Development Services"),
    description:
      "Crafted CRM solutions tailored for startups, enterprises, and eCommerce platforms. Build intelligent, modular, and scalable CRM systems.",
    images: ["https://codsphere.com/og/services-og-crm-development.png"],
  },
};

export default function CRMPage() {
  return (
    <div className=" bg-white">
      <CRMHero />
      <CRMIntro />
      <WhyChooseCRM />
      <CRMSolutions />
      <CRMFeatures />
      <CRMTypes />
      <CRMPlatforms />
      <CRMBenefits />
      <CRMProcess />
      <CRMTestimonials />
      <ContactCTA />
    </div>
  );
}
