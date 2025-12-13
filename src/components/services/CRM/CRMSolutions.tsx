// components/services/CRM/CRMSolutions.tsx
"use client";

import Image from "next/image";

export default function CRMSolutions() {
  const solutions = [
    {
      title: "Lead & Contact Management",
      description:
        "Easily capture, assign, and qualify leads from multiple channels. Manage every interaction with a centralised contact database.",
      image: "/images/services/crm/lead-and-contact-management.jpg",
    },
    {
      title: "Sales Pipeline & Opportunity Tracking",
      description:
        "Visualise your pipeline. Track deals by stage, set follow-ups, and automate status updates based on actions taken by your team or customers.",
      image: "/images/services/crm/sales-pipeline-and-opportunity-tracking.jpg",
    },
    {
      title: "Marketing Automation",
      description:
        "Set up automated drip campaigns, bulk emails, and personalised content delivery using CRM triggers.",
      image: "/images/services/crm/marketing-automation.jpg",
    },
    {
      title: "Customer Support Module",
      description:
        "Create support tickets, route them by rules, monitor SLAs, and track satisfaction ratings — all within the same platform.",
      image: "/images/services/crm/customer-support.jpg",
    },
    {
      title: "Reporting & Analytics",
      description:
        "Real-time dashboards to track sales velocity, team performance, customer lifetime value, and more.",
      image: "/images/services/crm/reporting-and-analytics.jpg",
    },
    {
      title: "Integrations & API",
      description:
        "Our CRMs integrate with leading tools: Google Workspace/Microsoft Teams/HubSpot, Salesforce/QuickBooks, Stripe/Shopify, WooCommerce",
      image: "/images/services/crm/integrations-and-aip.jpg",
    },
  ];

  return (
    <section aria-labelledby="crm-solutions" className="bg-white">
      <div className="container-wrapper py-less">
        {/* Header - now centered on mobile */}
        <h2
          id="crm-solutions"
          className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-semibold text-black mb-8 md:mb-12 lg:mb-[60px] text-center lg:text-left"
        >
          Our CRM Solutions Cover:
        </h2>

        {/* Grid Layout - responsive from 1 column to 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-x-[60px] lg:gap-y-[40px]">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative w-full h-[280px] md:h-[300px] lg:h-[328px] rounded-[20px] md:rounded-[24px] lg:rounded-[26px] overflow-hidden"
            >
              <Image
                src={solution.image}
                alt={solution.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-[30px]">
                <h3 className="text-[20px] md:text-[22px] lg:text-[25px] leading-[24px] md:leading-[26px] lg:leading-[30px] font-[425] text-white mb-2 md:mb-3">
                  {solution.title}:
                </h3>
                <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-light text-white/90">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
