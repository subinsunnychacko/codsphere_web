import { ContactForm } from "@/components/cod-chat/ContactForm";
import HeroSection from "@/components/cod-chat/hero-section";
import HighlightSection from "@/components/cod-chat/highlight-section";
import Perks from "@/components/cod-chat/Perks";
import ServicesSection from "@/components/cod-chat/services-section";
import TestimonialsSection from "@/components/cod-chat/Testimonials";
import WalkThroughSection1 from "@/components/cod-chat/walk-through-section1";
import PricingSection from "@/components/cod-chat/pricing-section";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Perks />
      <TestimonialsSection />
      <WalkThroughSection1 />
      <PricingSection />
      <ServicesSection />
      <HighlightSection />
      <ContactForm />
    </div>
  );
};

export default page;
