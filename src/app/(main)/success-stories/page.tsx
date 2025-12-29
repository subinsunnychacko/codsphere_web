import Navbar2 from "@/components/Navbar2";
import HeroSection from "@/components/success-stories/hero-section";
import InActionSection from "@/components/home/inaction-section";
import TestimonialsSection from "@/components/success-stories/testimonials-section";
import ServicesSection from "../../../components/success-stories/services-section";
import InsightsSection from "@/components/success-stories/insights-section";
import HighlightSection from "@/components/success-stories/highlight-section";
import ContactCTA from "@/components/ContactCTA";
import { Metadata } from "next";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Success Stories", "Our success stories"),
  description:
    "Custom CRM & ERP, smart invoicing, web/mobile, and revenue-first digital marketing. Future-proof systems that scale.",
  alternates: {
    canonical: "https://codsphere.com/success-stories",
  },
};

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar2 /> */}
      <HeroSection />
      <InActionSection />
      <TestimonialsSection />
      <ServicesSection />
      <InsightsSection />
      <HighlightSection />
      <ContactCTA />
    </div>
  );
}
