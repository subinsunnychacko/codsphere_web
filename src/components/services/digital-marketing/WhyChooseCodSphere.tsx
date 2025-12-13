// components/services/digital-marketing/WhyChooseCodSphere.tsx
"use client";

import Image from "next/image";

const reasons = [
  {
    icon: "/icons/tick-3d.svg",
    text: "4+ Years of Experience Across Industries",
  },
  {
    icon: "/icons/tick-3d.svg",
    text: "Google & Meta Certified Marketing Professionals",
  },
  {
    icon: "/icons/tick-3d.svg",
    text: "Transparent Monthly Reporting",
  },
  {
    icon: "/icons/tick-3d.svg",
    text: "Dedicated Account Managers",
  },
  {
    icon: "/icons/tick-3d.svg",
    text: "Data-Backed Strategy (without the fluff)",
  },
  {
    icon: "/icons/tick-3d.svg",
    text: "Conversion-First Approach",
  },
];

export default function WhyChooseCodSphere() {
  return (
    <section className="bg-white">
      <div className="container-wrapper py-more">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[98px] items-center">
          {/* Text Content - Left Side */}
          <div className="order-2 lg:order-1 w-full lg:max-w-[545px]">
            <h2 className="mb-5 md:mb-6 lg:mb-[24px] text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-bold">
              Why Choose CodSphere as Your Digital Marketing Partner?
            </h2>

            <ul className="space-y-4 lg:space-y-[20px] mt-5 lg:mt-[20px]">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3 lg:gap-[14px]">
                  {/* Check Icon - Black background */}
                  <div className="flex-shrink-0 flex items-center justify-center w-[26px] h-[26px] md:w-[28px] md:h-[28px] lg:w-[30px] lg:h-[30px] bg-black rounded-full">
                    <svg
                      className="w-4 h-4 md:w-[16px] md:h-[16px] lg:w-[18px] lg:h-[18px]"
                      viewBox="0 0 18 18"
                      fill="none"
                    >
                      <path
                        d="M3 9L7 13L15 5"
                        stroke="white"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <span className="text-[16px] md:text-[17px] lg:text-[19px] leading-[20px] md:leading-[21px] lg:leading-[23px] pt-[2px] lg:pt-[3px]">
                    {reason.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image Container - Right Side */}
          <div className="relative order-1 lg:order-2 w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] w-full">
              <figure className="relative w-full lg:flex-1 h-[250px] md:h-[350px] lg:h-[408px] overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] bg-[#D9D9D9]">
                <Image
                  src="/images/services/group-discussion-2.jpg"
                  alt="CodSphere digital marketing team engaged in group discussion"
                  fill
                  className="object-cover"
                  priority
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
