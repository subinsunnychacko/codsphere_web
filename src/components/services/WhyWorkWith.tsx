"use client";

import Image from "next/image";

const ITEMS = [
  {
    title: "Built by senior engineers",
    tone: "bg-[#EEDFFF]",
    iconColor: "#663C97",
    iconPath: "/icons/senior-engineer.svg",
  },
  {
    title: "Tailored for real business use",
    tone: "bg-[#CFFFEE]",
    iconColor: "#0E875C",
    iconPath: "/icons/real-business.svg",
  },
  {
    title: "Fast deployment with ongoing support",
    tone: "bg-[#FFF4D5]",
    iconColor: "#A98C38",
    iconPath: "/icons/deployment-with-support.svg",
  },
  {
    title: "100% transparent development",
    tone: "bg-[#FFE7D5]",
    iconColor: "#7B563A",
    iconPath: "/icons/transparent-development.svg",
  },
  {
    title: "Based in Canada. Serving globally",
    tone: "bg-[#BCCFFF]",
    iconColor: "#2C4994",
    iconPath: "/icons/hand-earth.svg",
  },
];

export default function WhyWorkWith() {
  return (
    <section className="relative">
      {/* Main black container - responsive height */}
      <div className="relative bg-black bg-dots overflow-visible pt-8 sm:pt-14 pb-[100px] md:pb-[110px] lg:pb-[116px]">
        <div className="container-wrapper">
          {/* headings */}
          <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-6 md:pb-12 text-white">
            <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
              Why Work With CodSphere?
            </h2>
            <p className="mt-2 text-[20px] font-light">
              We're not just coders—we're growth partners. Whether you're a startup automating your
              first sales process or an enterprise optimizing your ERP workflows, we bring the
              strategy, code, and systems that scale with you.
            </p>
          </div>
        </div>
      </div>

      {/* Value cards container - responsive positioning */}
      <div className="relative z-30 -mt-[100px] md:-mt-[110px] lg:-mt-[116px] mb-12 md:mb-16 lg:mb-[84px]">
        <div className="container-wrapper">
          {/* Grid for responsive cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {ITEMS.map((item) => {
              return (
                <div
                  key={item.title}
                  className="w-full rounded-[22px] bg-white flex flex-col items-center justify-between gap-5 px-3 py-7"
                  style={{
                    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  {/* Icon container with colored background */}
                  <div
                    className={`w-[65px] h-[60px] md:w-[75px] md:h-[70px] rounded-full ${item.tone} flex items-center justify-center`}
                  >
                    <Image
                      src={item.iconPath}
                      alt=""
                      width={40}
                      height={40}
                      className="w-[35px] h-[35px] md:w-[40px] md:h-[40px] object-contain"
                    />
                  </div>

                  {/* Title text */}
                  <h4 className="flex-1 whitespace-pre-line text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-[420] text-black text-center font-sequel">
                    {item.title}
                  </h4>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
