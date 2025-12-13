import type { Metadata } from "next";
import ERPHero from "@/components/services/ERP/ERPHero";
import ERPIntro from "@/components/services/ERP/ERPIntro";
import ERPModules from "@/components/services/ERP/ERPModules";
import ERPWhyIntegrate from "@/components/services/ERP/ERPWhyIntegrate";
import ERPProcess from "@/components/services/ERP/ERPProcess";
import ERPBenefits from "@/components/services/ERP/ERPBenefits";
import ERPIndustries from "@/components/services/ERP/ERPIndustries";
import ERPWhyChoose from "@/components/services/ERP/ERPWhyChoose";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("AI-Driven ERP Solutions"),
  description:
    "Custom ERP Development & Intelligent Integration. AI-powered ERP systems tailored for efficiency, scalability, and predictive insight.",
  alternates: {
    canonical: "https://codsphere.com/services/erp-solutions",
  },
  openGraph: {
    title: formatMetaTitle("AI-Driven ERP Solutions"),
    description:
      "Custom ERP Development & Intelligent Integration. AI-powered ERP systems tailored for efficiency, scalability, and predictive insight.",
    url: "https://codsphere.com/services/erp-solutions",
    type: "website",
    images: [
      {
        url: "https://codsphere.com/og/services-og-erp-solutions.png",
        width: 1200,
        height: 630,
        alt: "AI-Driven ERP Solutions by CodSphere",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: formatMetaTitle("AI-Driven ERP Solutions"),
    description:
      "Custom ERP Development & Intelligent Integration. AI-powered ERP systems tailored for efficiency, scalability, and predictive insight.",
    images: ["https://codsphere.com/og/services-og-erp-solutions.png"],
  },
};

export default function ERPPage() {
  return (
    <div className="min-h-screen bg-white">
      <ERPHero />
      <ERPIntro />
      <ERPModules />
      <ERPWhyIntegrate />
      <ERPProcess />
      <ERPBenefits />
      <ERPIndustries />
      <ERPWhyChoose />
      <ContactCTA />
    </div>
  );
}
