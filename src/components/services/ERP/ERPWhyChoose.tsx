"use client";

import Image from "next/image";

export default function ERPWhyChoose() {
  const reasons = [
    "End-to-end ERP + AI developers—no siloed teams",
    "Canada-based quality and transparency, global-level reliability",
    "Flexible AI adoption models (embedded, hybrid, low-code) for lean operations or full custom builds",
    "Agile sprint delivery paired with AI governance and compliance",
    "Competitive pricing without sacrificing enterprise performance",
  ];

  return (
    <section className="bg-white">
      <div className="container-wrapper pt-more">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[98px] items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1 w-full lg:max-w-[545px]">
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] mb-6 md:mb-7 lg:mb-8 font-bold">
              Why Choose CodSphere?
            </h2>
            <ul className="space-y-3 md:space-y-3 lg:space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-[28px] h-[28px] md:w-[30px] md:h-[30px] lg:w-[34px] lg:h-[34px] mt-1 flex-shrink-0 bg-gray-800 rounded-full flex items-center justify-center">
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
                  <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-light">
                    {reason}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          <div className="relative order-1 lg:order-2 w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] w-full">
              <figure className="relative w-full lg:flex-1 h-[250px] md:h-[350px] lg:h-[408px] overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] bg-[#D9D9D9]">
                <Image
                  src="/images/services/erp/erp-working-process.jpg"
                  alt="ERP Technology symbolizing image"
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
