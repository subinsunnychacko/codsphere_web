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
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 sm:pt-[88px] lg:pt-[104px]">
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
      <Footer />
    </div>
  );
}
