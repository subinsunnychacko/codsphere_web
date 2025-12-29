import CaseStudyDetailHeader from "@/components/case-studies/connectcall-services/CaseStudyDetailHeader";
import ContentSection from "@/components/case-studies/voltvera/content-section";
import HighlightSection from "@/components/case-studies/voltvera/highlight-section";
import ContactCTA from "@/components/ContactCTA";
// import Navbar from "@/components/Navbar";
import case_studies_banner_bg from "@/assets/images/banners/case-studies-banner-bg.jpg";
import { Metadata } from "next";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Project Voltvera"),
  description: "Smart MLM Automation at Scale",
  alternates: {
    canonical: "https://codsphere.com/case-studies/voltvera",
  },
};

export default function VoltveraPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <CaseStudyDetailHeader
        title="Project Voltvera — Smart MLM Automation at Scale"
        backgroundImage={case_studies_banner_bg.src}
      />
      <ContentSection />
      <HighlightSection />
      <ContactCTA />
    </div>
  );
}
