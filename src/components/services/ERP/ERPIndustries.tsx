"use client";

import Image from "next/image";

export default function ERPIndustries() {
  const industries = [
    {
      name: "Manufacturing & Distribution",
      color: "bg-[#EEDFFF]",
      icon: "/icons/manufacturing-and-distribution.svg",
      iconWidth: 64,
      iconHeight: 80,
    },
    {
      name: "Logistics & Transportation",
      color: "bg-[#FFF4D5]",
      icon: "/icons/logistics-and-transportation.svg",
      iconWidth: 88,
      iconHeight: 108,
    },
    {
      name: "Retail & E‑Commerce",
      color: "bg-[#FFE7D5]",
      icon: "/icons/cart.svg",
      iconWidth: 72,
      iconHeight: 90,
    },
    {
      name: "Hospitality & Healthcare",
      color: "bg-[#CFFFEE]",
      icon: "/icons/hospital.svg",
      iconWidth: 64,
      iconHeight: 80,
    },
    {
      name: "Startups scaling",
      color: "bg-[#BCCFFF]",
      icon: "/icons/startups-scaling.svg",
      iconWidth: 90,
      iconHeight: 111,
    },
  ];

  return (
    <section className="bg-black bg-dots overflow-hidden">
      <div className="container-wrapper py-more">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12 text-white">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Industries We Serve
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Our flexible architecture suits any industry, but we specialise in:
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8 lg:gap-4 justify-items-center">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[140px] md:w-[150px] lg:w-[154px]"
            >
              <div className="w-[100px] h-[100px] md:w-[110px] md:h-[110px] lg:w-[131px] lg:h-[122px] flex items-center justify-center mb-3 md:mb-3 lg:mb-4 relative">
                <div
                  className={`${industry.color} w-[90px] h-[90px] md:w-[105px] md:h-[105px] lg:w-[122px] lg:h-[122px] rounded-full flex items-center justify-center`}
                >
                  <Image
                    src={industry.icon}
                    alt={industry.name}
                    width={industry.iconWidth}
                    height={industry.iconHeight}
                    className="w-[50px] h-auto md:w-[60px] lg:w-auto"
                    style={{
                      objectFit: "contain",
                    }}
                    priority
                  />
                </div>
              </div>
              <h5 className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-white text-center">
                {industry.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
