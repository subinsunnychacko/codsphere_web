// components/services/web-mobile/WhyCodSphere.tsx
"use client";

import Image from "next/image";

const reasons = [
  "8+ Years of Full-Stack Development Expertise",
  "Agile Sprints & Transparent Project Management",
  "Cloud-Ready & Scalable Architecture",
  "100% Ownership Rights for You",
  "Free Deployment & Post-Launch Support",
];

export default function WhyCodSphere() {
  return (
    <section className="bg-white">
      <div className="container-wrapper pt-less pb-more">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[98px] items-center">
          {/* Text Content - Responsive */}
          <div className="order-2 lg:order-1 w-full lg:max-w-[545px]">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[52px] mb-6 md:mb-7 lg:mb-8 font-[415] font-sequel text-black">
              Why CodSphere?
            </h2>

            <ul className="space-y-3 md:space-y-3.5 lg:space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-2.5 md:gap-3">
                  <div className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] lg:w-[34px] lg:h-[34px] flex-shrink-0 mt-0.5 lg:mt-1 bg-gray-800 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 md:w-[18px] md:h-[18px] lg:w-5 lg:h-5"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 10L9 12L13 8"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-[400] font-sequel text-black">
                    {reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] w-full">
              <figure className="relative w-full lg:flex-1 h-[250px] md:h-[350px] lg:h-[408px] overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] bg-[#D9D9D9]">
                <Image
                  src="/images/services/group-discussion-2.jpg"
                  alt="CodSphere app development team engaged in group discussion"
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
