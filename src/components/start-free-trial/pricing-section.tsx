import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function PricingSection() {
  const plans = [
    {
      id: "starter",
      name: "Starter Pack",
      price: 35,
      badge: "Best Value",
      description: "Kickstart automation with core CRM + ERP essentials.",
      bestFor: "Small Teams & Freelancers",
      featuresHeading: "Core Features:",
      features: ["Contact Management", "Basic Analytics", "Email Integration", "Task Management"],
      buttonText: "Start Your 14-Day Free Trial",
      buttonUrl: "/contact",
    },
    {
      id: "professional",
      name: "Professional",
      price: 45,
      badge: "Popular",
      description: "Scale faster with analytics, automation, and integrations.",
      bestFor: "Growing Businesses",
      featuresHeading: "Everything in Starter, plus:",
      features: [
        "Sales Pipeline Management",
        "Marketing Tool Integrations",
        "Advanced Reporting",
        "Customizable Dashboards",
      ],
      buttonText: "Upgrade & Automate",
      buttonUrl: "/contact",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: null,
      description: "Custom-built systems for large-scale operations and teams.",
      bestFor: "Large Teams & Enterprises",
      featuresHeading: "Everything in Professional, plus:",
      features: [
        "Advanced Automation",
        "Multi-Channel Support",
        "AI-Driven Analytics",
        "Custom Integrations",
      ],
      buttonText: "Talk to a Solutions Expert",
      buttonUrl: "/contact",
      custom: true,
      highlight: true,
    },
  ];

  return (
    <section className="bg-dots-for-white relative">
      <div className="relative z-10 container-wrapper py-more">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
            Simple, Transparent, and Customizable
          </h2>
          <p className="text-gray-700 text-lg">
            No per-user pricing. Pay only for the features you need.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            // <div
            //   key={idx}
            //   className={`relative rounded-2xl px-8 pt-10 pb-8 bg-black text-white border-4 ${
            //     plan.highlight ? "border-[#8487F5]" : "border-[#33FCFE]"
            //   }`}
            // >
            <div
              key={idx}
              className={cn(
                "group relative rounded-2xl p-[4px]",
                plan.id === "starter" && "bg-[#33FCFE]",
                plan.id !== "starter" && "bg-linear-to-r from-[#33FCFE] via-white to-[#010B66]",
              )}
            >
              <div
                className={cn(
                  "relative rounded-2xl px-8 pt-10 pb-8 text-white bg-black overflow-hidden transition-all duration-500 ease-out",
                  plan.id === "starter" &&
                    "group-hover:bg-[#3D9C9D] group-hover:shadow-[4px_4px_4px_0px_#00000040]",
                )}
              >
                {plan.id !== "starter" && (
                  <div
                    className={cn(
                      "absolute inset-0 opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100",
                      plan.id === "professional" && "bg-linear-to-r from-[#33FCFE] to-[#010B66]",
                      plan.id === "enterprise" && "bg-linear-to-r from-[#6366F1] to-[#082A7A]",
                    )}
                  />
                )}

                <div className="relative z-10">
                  <div
                    className={cn(
                      "transition-all duration-500 ease-out",
                      plan.id === "starter" &&
                        "group-hover:bg-[#3D9C9D] group-hover:shadow-[4px_4px_4px_0px_#00000040]",
                      plan.id === "professional" &&
                        "group-hover:shadow-[5px_8px_4px_0px_#00000040]",
                      plan.id === "enterprise" && "group-hover:shadow-[4px_5px_4px_0px_#00000040]",
                    )}
                  />
                  {/* Badge */}
                  {plan.badge && (
                    <div
                      className={`absolute top-4 -right-1 bg-[#33FCFE] text-black px-4 py-1 text-sm font-bold rounded-l-sm`}
                    >
                      {plan.badge}
                    </div>
                  )}

                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>

                  {plan.price && (
                    <div className="mb-4">
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-gray-400">/Month</span>
                    </div>
                  )}

                  {plan.custom && <div className="mb-4 text-2xl font-bold">Custom Quote</div>}

                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>

                  <p className="text-sm text-[#33FCFE] font-semibold mb-6">
                    Best for: {plan.bestFor}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-semibold mb-3">{plan.featuresHeading}</h4>
                    <ul className="space-y-2">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-[#33FCFE]">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={plan.buttonUrl}>
                    <button
                      className={cn(
                        "w-full rounded-full text-[15px] lg:text-[18px] p-0.5 transition-all duration-500",
                        plan.id === "starter"
                          ? "bg-white"
                          : "bg-linear-to-r from-[#33FCFE] to-[#010B66]",
                      )}
                    >
                      <div
                        className={cn(
                          "flex justify-center items-center gap-3 rounded-full px-4 py-3 bg-black transition-all duration-500",
                          "group-hover:bg-white group-hover:text-black",
                        )}
                      >
                        {plan.id !== "starter" && (
                          <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                            <ArrowRight />
                          </div>
                        )}
                        {plan.buttonText}
                      </div>
                    </button>
                  </Link>

                  <p className="text-center text-xs text-gray-300 mt-1">
                    No hidden fees · Cancel anytime
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
