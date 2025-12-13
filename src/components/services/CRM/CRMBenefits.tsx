// components/services/CRM/CRMBenefits.tsx
import Image from "next/image";

export default function CRMBenefits() {
  const benefits = [
    "Streamline customer interactions from inquiry to onboarding",
    "Eliminate spreadsheet dependency",
    "Reduce lead leakage and missed follow-ups",
    "Track, measure, and forecast revenue accurately",
    "Improve team performance with automation and accountability",
    "Fully compliant with data privacy standards",
  ];

  return (
    <section aria-labelledby="crm-benefits" className="bg-white">
      <div className="container-wrapper pt-more pb-less">
        {/* Grid Layout - responsive: stack on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-[60px] items-center">
          {/* LEFT - Infographic Image */}
          <figure className="relative w-full h-[300px] md:h-[400px] lg:h-[492px] order-2 lg:order-1">
            <Image
              src="/images/services/crm/crm-benefits.svg"
              alt="CRM Benefits Infographic image"
              fill
              className="object-contain"
              sizes="(max-width: 1024px) 100vw, 688px"
            />
          </figure>

          {/* RIGHT - Benefits List */}
          <div className="order-1 lg:order-2">
            {/* Title */}
            <h2
              id="crm-benefits"
              className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-[415] text-[#000000] mb-6 md:mb-8 lg:mb-[40px]"
            >
              Benefits of Using Our CRM Solutions
            </h2>

            {/* Benefits List */}
            <ul className="space-y-4 lg:space-y-[20px]">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3 lg:gap-[15px]">
                  {/* Checkmark */}
                  <div className="flex-shrink-0 mt-[2px]">
                    <svg
                      className="w-5 h-5 lg:w-5 lg:h-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.5 10L9.5 12L12.5 8"
                        stroke="#608BF3"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <circle cx="10" cy="10" r="9" stroke="#608BF3" strokeWidth="1.5" />
                    </svg>
                  </div>
                  {/* Benefit text */}
                  <span className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-[#3D3D3D]">
                    {benefit}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
