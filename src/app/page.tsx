import Navbar2 from "@/components/Navbar2";
import HeroSection from "@/components/home/hero-section";
import InActionSection from "@/components/home/inaction-section";
import ReferralProgramSection from "@/components/home/ReferralProgram";
import TestimonialsSection from "@/components/home/testimonials-section";
import AboutIntro from "@/components/home/AboutIntro";
import WorkShowcaseSection from "@/components/home/WorkShowcase";
import ServicesSection from "@/components/home/services-section";
import Team from "@/components/home/Team";
import ContactCTA from "@/components/ContactCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar2 />
      <HeroSection />
      <InActionSection />
      <ReferralProgramSection />
      <TestimonialsSection />
      <AboutIntro />
      <WorkShowcaseSection />
      <ServicesSection />
      <Team />
      <ContactCTA />
    </div>
  );
}
