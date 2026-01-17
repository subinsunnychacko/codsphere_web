"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

const steps = [
  {
    id: 1,
    title: "Low-quality leads",
    description: "Visitors inquire, but aren't ready to hire.",
    icon: "/icons/archery.svg",
  },
  {
    id: 2,
    title: "No trust signals",
    description: "Customers don't see proof, reviews or credibility.",
    icon: "/icons/shield.svg",
  },
  {
    id: 3,
    title: "Poor mobile experience",
    description: "Sites break where most customers actually browse.",
    icon: "/icons/Group.svg",
  },
  {
    id: 4,
    title: "Confusing calls-to-action",
    description: "Users don't know what to do next.",
    icon: "/icons/lucide_square-mouse-pointer.svg",
  },
];

export default function Perks() {
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
    <section
      className="w-full"
      style={{
        background:
          "linear-gradient(180deg, #3d4555 0%, #4a5260 10%, #5d636f 20%, #7a818b 30%, #9ca3ad 40%, #bec3c9 50%, #d8dbdf 60%, #eaebee 75%, #f3f4f6 100%)",
      }}
    >
      <div className="container-wrapper py-12 lg:py-16 xl:py-20">
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#a8a8a8] italic">
            What this template fixes!
          </p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold text-white">
            What's holding most trade websites back?
          </h2>
          <p className="mt-2 text-[18px] lg:text-[20px] font-light w-full text-gray-200">
            Through research and real trade workflows, we identified common issues that stop
            websites from converting visitors into real jobs.
          </p>
        </div>

        {/* Desktop View - Show all steps */}
        <div className="hidden md:grid grid-cols-4 gap-6 xl:gap-8 mt-10 mb-10">
          {steps.map((step, index) => {
            return (
              <div key={index} className="relative flex flex-col items-center gap-1.5">
                <div className="relative z-10">
                  <div className="w-20 h-20 flex items-center justify-center">
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
      </div>
    </section>
  );
}
