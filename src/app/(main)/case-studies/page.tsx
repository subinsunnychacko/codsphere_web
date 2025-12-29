import type { Metadata } from "next";
import { formatMetaTitle } from "@/lib/format-meta-title";
import CaseStudiesHero from "@/components/case-studies/CaseStudiesHero";
import ContactCTA from "@/components/ContactCTA";
import CaseStudies from "./case-studies";
// import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: formatMetaTitle("Case Studies", "Success Stories & Results"),
  description:
    "Explore CodSphere's proven track record. Real client success stories showcasing our CRM, ERP, and digital transformation solutions.",
  keywords:
    "case studies, client success stories, CRM implementation case studies, ERP success stories, digital transformation results",
  alternates: {
    canonical: "https://codsphere.com/case-studies",
  },
};

export default function CaseStudiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <CaseStudiesHero />
      {/* Case Study Grid */}
      <CaseStudies />
      <ContactCTA />
    </div>
  );
}
