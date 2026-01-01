"use client";

import { Footer } from "@/components/landingPage/Footer";
import { AIExplanation } from "@/components/landingPage/AIExplanation";
import { DesignIncluded } from "@/components/landingPage/DesignIncluded";
import { FAQ } from "@/components/landingPage/FAQ";
import { FinalCTA } from "@/components/landingPage/FinalCTA";
import { Hero } from "@/components/landingPage/Hero";
import { HowItWorks } from "@/components/landingPage/HowItWorks";
import { Navbar } from "@/components/landingPage/Navbar";
import { Pricing } from "@/components/landingPage/Pricing";
import { ProblemSolution } from "@/components/landingPage/ProblemSolution";
import { Testimonials } from "@/components/landingPage/Testimonials";
import { ValueProps } from "@/components/landingPage/ValueProps";
import { WhoItsFor } from "@/components/landingPage/WhoItsFor";
// import "../components/landingPage/index.css";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProps />
      <ProblemSolution />
      <HowItWorks />
      <Pricing />
      <DesignIncluded />
      <AIExplanation />
      <WhoItsFor />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}
