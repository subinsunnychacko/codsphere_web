// components/services/CRM/CRMPlatforms.tsx
"use client";

import Image from "next/image";

export default function CRMPlatforms() {
  const platforms = [
    {
      name: "Salesforce CRM",
      description: "Setup, development, integration",
      logo: "/logos/crm/salesforce.png",
      logoBg: "/logos/crm/salesforce-bg.svg",
      gradient: "rgba(0, 161, 224, 0.5)",
    },
    {
      name: "Odoo CRM",
      description: "Open-source, modular, and highly customizable",
      logo: "/logos/crm/odoo.svg",
      logoBg: "/logos/crm/odoo-bg.svg",
      gradient: "rgba(243, 118, 211, 0.5)",
    },
    {
      name: "Krayin CRM",
      description: "Laravel-based open-source CRM ideal for SMEs",
      logo: "/logos/crm/krayin.svg",
      logoBg: "/logos/crm/krayin-bg.svg",
      gradient: "rgba(12, 168, 255, 0.5)",
    },
    {
      name: "Custom PHP/Node.js CRM",
      description: "Fully proprietary builds with 100% ownership",
      logo: "/logos/crm/custom-crm.svg",
      logoBg: "/logos/crm/custom-crm-bg.svg",
      gradient: "rgba(171, 255, 81, 0.5)",
    },
  ];

  return (
    <section aria-labelledby="crm-platforms" className="bg-black bg-dots overflow-hidden">
      <div className="container-wrapper py-more">
        {/* Title */}
        <h2
          id="crm-platforms"
          className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-bold text-white mb-8 md:mb-12 lg:mb-[60px]"
        >
          CRM Platforms We Work With
        </h2>

        {/* Platform Cards Grid - responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-[40px]">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="bg-gray-900 bg-no-repeat relative w-full h-[220px] md:h-[250px] lg:h-[285px] rounded-[16px] md:rounded-[18px] lg:rounded-[20px] overflow-hidden p-5"
              style={{
                backgroundImage: `
                  radial-gradient(94.65% 173.2% at 54.11% -11.05%, ${platform.gradient} 0%, rgba(255, 255, 255, 0.1) 82.01%), 
                  url(${platform.logoBg})
                `,
                backgroundPosition: "80% 50%",
              }}
            >
              {/* Icon Box */}
              <div className="w-fit p-2 rounded-md bg-gray-500/30 border border-gray-500/30">
                <Image
                  src={platform.logo}
                  alt={`${platform.name} icon`}
                  width={40}
                  height={40}
                  className="object-contain h-full w-fit"
                />
              </div>
              {/* Content */}
              <div className="h-full flex flex-col justify-center">
                <h3 className="text-[26px] md:text-[30px] lg:text-[36px] leading-[32px] md:leading-[38px] lg:leading-[44px] font-[415] text-white mb-1 md:mb-2">
                  {platform.name}
                </h3>
                <h5 className="text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] md:leading-[25px] lg:leading-[28px] font-[405] text-white/60">
                  {platform.description}
                </h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
