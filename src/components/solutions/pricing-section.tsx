"use client";

import { cn } from "@/lib/utils";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  const plans = [
    {
      id: "starter",
      name: "Website Template (Starter)",
      price: "99.00",
      badge: "Best Value",
      description: "Best for individual electricians & small teams",
      featuresHeading: "Core Features:",
      features: [
        "Electrician website template",
        "Pre-built service pages & CTAs",
        "Mobile-optimized layout",
        "Trade-specific content blocks",
      ],
      buttonText: "Get the Template",
      buttonUrl: "/contact",
    },
    {
      id: "professional",
      name: "Website + Lead Capture (Growth)",
      price: "199.00",
      badge: "Popular",
      description: "Best for electricians who want better leads",
      featuresHeading: "Everything in Starter, plus:",
      features: [
        "CodChat Integration",
        "Lead capture & qualification",
        "Faster response to enquiries",
      ],
      buttonText: "Upgrade & Automate",
      buttonUrl: "/contact",
    },
    {
      id: "enterprise",
      name: "Full Growth Setup (Pro Mode)",
      price: "199.00",
      description: "Best for growing electrical businesses",
      featuresHeading: "Everything in Growth, plus:",
      features: ["CodCRM integration", "Customer & job management", "Follow-ups and lead tracking"],
      buttonText: "Talk to a Solutions Expert",
      buttonUrl: "/contact",
    },
  ];

  return (
    <section className="bg-dots-for-white relative overflow-hidden">
      <div className="relative z-10 container-wrapper py-16 md:py-24">
        {/* Headings */}
        <div className="flex flex-col items-center text-center mb-12 px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-black max-w-4xl tracking-tight">
            Simple pricing. Built to scale with your business.
          </h2>
          <p className="max-w-2xl text-gray-600 text-base md:text-lg">
            Start with a conversion-ready electrician website template, then extend it as your
            business grows.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 px-2 sm:px-4">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={cn(
                "group relative rounded-2xl p-[1.5px] transition-transform duration-300 hover:scale-[1.02]",
                plan.id === "starter"
                  ? "bg-[#33FCFE]"
                  : "bg-gradient-to-r from-[#33FCFE] via-[#33FCFE] to-[#010B66]",
              )}
            >
              <div className="relative rounded-2xl px-6 py-10 md:px-8 text-white bg-black h-full flex flex-col overflow-hidden">
                {plan.badge && (
                  <div className="absolute top-4 right-0 bg-[#33FCFE] text-black px-4 py-1 text-xs md:text-sm font-bold rounded-l-sm z-20">
                    {plan.badge}
                  </div>
                )}

                <div className="relative z-10 flex flex-col h-full">
                  <h3 className="text-xl md:text-2xl font-bold mb-1 pr-16 leading-tight">
                    {plan.name}
                  </h3>

                  <p className="text-gray-400 text-xs md:text-sm mb-4 font-light italic">
                    {plan.description}
                  </p>

                  <div className="mb-6">
                    <span className="text-3xl md:text-4xl font-bold">${plan.price}</span>
                    <span className="text-gray-400 text-lg md:text-xl font-light">/Month</span>
                  </div>

                  <div className="flex-grow">
                    <h4 className="font-semibold text-sm md:text-base mb-4">
                      {plan.featuresHeading}
                    </h4>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check
                            className="text-[#33FCFE] w-5 h-5 mt-0.5 shrink-0"
                            strokeWidth={3}
                          />
                          <span className="text-sm md:text-base text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6">
                    <Link href={plan.buttonUrl}>
                      <button
                        className={cn(
                          "w-full rounded-full p-[1.5px] transition-all duration-300",
                          plan.id === "starter"
                            ? "bg-white"
                            : "bg-gradient-to-r from-[#33FCFE] to-[#010B66]",
                        )}
                      >
                        {/* FIXED: Removed group-hover:bg-white from the inner div.
                            Now it stays black, or you can add a subtle hover effect if desired.
                        */}
                        <div className="flex justify-center items-center gap-2 rounded-full px-4 py-3 bg-black text-sm md:text-base font-medium transition-colors duration-300 group-hover:bg-black/80">
                          {plan.id !== "starter" && (
                            <div className="bg-gradient-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-1">
                              <ArrowRight size={16} />
                            </div>
                          )}
                          {plan.buttonText}
                        </div>
                      </button>
                    </Link>

                    <p className="text-center text-[10px] md:text-xs text-gray-400 mt-3">
                      No hidden fees · Cancel anytime
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
