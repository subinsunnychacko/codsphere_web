import Navbar2 from "@/components/Navbar2";
import HeroSection from "@/components/start-free-trial/hero-section";
import FeaturesSection from "@/components/start-free-trial/features-section";
import TestimonialsSection from "@/components/start-free-trial/testimonials-section";
import WalkThroughSection1 from "@/components/start-free-trial/walk-through-section1";
import PricingSection from "@/components/start-free-trial/pricing-section";
import WalkThroughSection2 from "@/components/start-free-trial/walk-through-section2";
import HighlightSection from "@/components/start-free-trial/highlight-section";
import ContactCTA from "@/components/ContactCTA";
import { Metadata } from "next";
import { formatMetaTitle } from "@/lib/format-meta-title";

export const metadata: Metadata = {
  title: formatMetaTitle("Free Trial", "Start your free trial now"),
  description:
    "Custom CRM & ERP, smart invoicing, web/mobile, and revenue-first digital marketing. Future-proof systems that scale.",
  alternates: {
    canonical: "https://codsphere.com/start-free-trial",
  },
};

export default function StartFreeTrialPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar2 /> */}
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <WalkThroughSection1 />
      <PricingSection />
      <WalkThroughSection2 />
      <HighlightSection />
      <ContactCTA />
    </div>
  );
}
