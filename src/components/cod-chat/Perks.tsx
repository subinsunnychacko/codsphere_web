"use client";

import { useEffect, useState } from "react";
import { Puzzle, Palette, BarChart3, ScanSearch } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "Simple add-on.",
    subtitle: "No rebuild.",
    description:
      "Works seamlessly with your existing website. No redesigns, no downtime, no hassle.",
    icon: Puzzle,
  },
  {
    id: 2,
    title: "Styled to match",
    subtitle: "your brand",
    description: "Customize the look and tone to fit your brand, so it feels native not bolted on.",
    icon: Palette,
  },
  {
    id: 3,
    title: "One dashboard to track",
    subtitle: "everything",
    description: "View conversations, leads, and follow-ups from a single, easy-to-use dashboard.",
    icon: BarChart3,
  },
  {
    id: 4,
    title: "Automatically captures",
    subtitle: "qualified leads",
    description:
      "Smart conversations collect the right details and turn chats into real leads automatically.",
    icon: ScanSearch,
  },
];

export default function Perks() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const goToStep = (index: number) => {
    setCurrentStep(index % steps.length);
  };

  return (
    <section className="w-full bg-[#091825] relative overflow-hidden">
      {/* Left side teal glow */}
      <div className="absolute top-0 left-0 w-[500px] h-full bg-gradient-to-r from-[#0d3d4d]/40 via-[#0a2a35]/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[300px] h-[400px] bg-[#0f4d5a]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-wrapper py-12 lg:py-16 xl:py-20 relative z-10">
        {/* Header */}
        <div className="text-center w-full lg:w-4/5 mx-auto pb-10 lg:pb-14">
          <p className="font-damion text-[22px] sm:text-[26px] lg:text-[30px] text-white/90 mb-2">
            Why This Works?
          </p>
          <h2 className="text-[18px] sm:text-[22px] md:text-[26px] lg:text-[32px] xl:text-[36px] font-semibold text-white leading-tight tracking-tight">
            Designed for busy businesses that can't afford to miss enquiries.
          </h2>
          <p className="mt-3 text-[13px] sm:text-[15px] lg:text-[17px] font-light text-gray-400">
            Turn conversations into qualified leads, even when you're on the job.
          </p>
        </div>

        {/* Desktop View - Connected Steps */}
        <div className="hidden md:block">
          <div className="flex justify-between items-start relative">
            {steps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.id}
                  className="relative flex flex-col items-center flex-1 px-2 lg:px-3"
                >
                  {/* Icon */}
                  <div className="text-cyan-400 mb-4">
                    <IconComponent
                      className="w-8 h-8 lg:w-10 lg:h-10 xl:w-11 xl:h-11"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Connector Line - I-beam style */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-4 lg:top-5 left-[58%] w-[84%] flex items-center">
                      {/* Left vertical bar */}
                      <div className="w-[2px] h-3 bg-cyan-500/70" />
                      {/* Horizontal line */}
                      <div className="flex-1 h-[2px] bg-cyan-500/70" />
                      {/* Right vertical bar */}
                      <div className="w-[2px] h-3 bg-cyan-500/70" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="text-center">
                    <h3 className="text-[12px] lg:text-[14px] xl:text-[15px] font-semibold text-white leading-tight">
                      {step.title}
                    </h3>
                    <h3 className="text-[12px] lg:text-[14px] xl:text-[15px] font-semibold text-white mb-1.5 leading-tight">
                      {step.subtitle}
                    </h3>
                    <p className="text-[10px] lg:text-[11px] xl:text-[12px] text-gray-500 leading-relaxed max-w-[180px] mx-auto">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="relative flex flex-col items-center gap-3 min-h-[160px]">
            {/* Icon */}
            <div className="text-cyan-400">
              {(() => {
                const IconComponent = steps[currentStep].icon;
                return <IconComponent className="w-10 h-10" strokeWidth={1.5} />;
              })()}
            </div>

            {/* Content */}
            <div className="text-center px-6 max-w-xs">
              <h3 className="text-[14px] font-semibold text-white leading-tight">
                {steps[currentStep].title}
              </h3>
              <h3 className="text-[14px] font-semibold text-white mb-2 leading-tight">
                {steps[currentStep].subtitle}
              </h3>
              <p className="text-[12px] text-gray-500 leading-relaxed">
                {steps[currentStep].description}
              </p>
            </div>
          </div>

          {/* Step Indicators */}
          <div className="flex items-center justify-center mt-6">
            <div className="flex gap-2">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToStep(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentStep
                      ? "bg-cyan-400 w-5"
                      : "bg-gray-600 w-1.5 hover:bg-gray-500"
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
