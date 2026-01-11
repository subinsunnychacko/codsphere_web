import { ContactForm } from "@/components/solutions/ContactForm";
import FeaturesSection from "@/components/solutions/FeaturesSection";
import HeroSection from "@/components/solutions/hero-section";
import HighlightSection from "@/components/solutions/highlight-section";
import Perks from "@/components/solutions/Perks";
import PricingSection from "@/components/solutions/pricing-section";
import ServicesSection from "@/components/solutions/services-section";
import TestimonialsSection from "@/components/solutions/Testimonials";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Perks />
      <TestimonialsSection />
      <FeaturesSection />
      <PricingSection />
      <ServicesSection />
      <HighlightSection />
      <ContactForm />
    </div>
  );
};

export default page;
