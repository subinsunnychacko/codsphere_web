"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  {
    id: 1,
    title: "Identify",
    description: "Spot businesses needing digital solutions",
    icon: "/icons/search.svg",
  },
  {
    id: 2,
    title: "Introduce",
    description: "Refer them via email, LinkedIn, or call",
    icon: "/icons/handshake.svg",
  },
  {
    id: 3,
    title: "CodSphere Delivers",
    description: "We handle sales, setup, and support",
    icon: "/icons/zap.svg",
  },
  {
    id: 4,
    title: "You Earn",
    description: "Get recurring commission for life",
    icon: "/icons/coin-stack.svg",
  },
];

export default function ReferralProgramSection() {
  const [currentStep, setCurrentStep] = useState(0);

  // Auto-rotate carousel every 1.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const goToStep = (index: number) => {
    setCurrentStep(index % steps.length);
  };

  return (
    <section className="w-full bg-linear-to-b from-cyan-100 to-cyan-50">
      <div className="container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#a8a8a8]">
            CodSphere Referral Program
          </p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Grow With CodSphere - Earn as You Refer
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Turn your network into lifetime earnings. Earn commissions by connecting businesses that
            need CRM, ERP, or automation solutions — zero investment, all reward.
          </p>
        </div>

        {/* Commission Highlight */}
        <div className="flex justify-center">
          <div className="border border-[#33FCFE] rounded-lg px-6 py-2 mb-8">
            <p className="text-gray-900 font-semibold text-center">
              Earn up to 10% recurring commission for every successful referral.
            </p>
          </div>
        </div>

        {/* Desktop View - Show all steps */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => {
            return (
              <div key={index} className="relative flex flex-col items-center gap-2">
                {/* Line connector for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute w-full h-1 bg-gray-400 top-[70px] left-2/4 right-1/4"></div>
                )}

                <p className="text-md font-bold text-gray-600">Step {step.id}</p>
                {/* Icon Circle */}
                <div className="relative z-10">
                  <div className="w-20 h-20 rounded-full bg-[#d9feff] border-4 border-gray-400 flex items-center justify-center">
                    <Image
                      src={step.icon}
                      alt={`${step.title}-icon`}
                      width={40}
                      height={40}
                      className="w-[35px] h-[35px] md:w-10 md:h-10 object-contain"
                    />
                  </div>
                </div>

                <div className="w-2/3">
                  <h3 className="text-md font-bold text-gray-900 text-center">{step.title}</h3>
                  <p className="text-sm text-gray-700 text-center">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View - Carousel with auto-rotation */}
        <div className="md:hidden mb-12">
          <div className="relative flex flex-col items-center gap-2 h-52">
            <p className="text-md font-bold text-gray-600">Step {steps[currentStep].id}</p>
            {/* Icon Circle */}
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full bg-[#d9feff] border-4 border-gray-400 flex items-center justify-center">
                <Image
                  src={steps[currentStep].icon}
                  alt={`${steps[currentStep].title}-icon`}
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
              </div>
            </div>
            <div className="w-2/3">
              <h3 className="text-md font-bold text-gray-900 text-center">
                {steps[currentStep].title}
              </h3>
              <p className="text-sm text-gray-700 text-center">{steps[currentStep].description}</p>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex items-center justify-center mt-3">
            <div className="flex gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentStep ? "bg-[#010B66] w-5" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="w-full md:w-auto cursor-pointer rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
            <div className="flex justify-center items-center gap-3 rounded-full px-5 py-3 bg-linear-to-l from-[#33FCFE] to-[#010b6698]">
              <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                <ArrowRight />
              </div>
              More details
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
