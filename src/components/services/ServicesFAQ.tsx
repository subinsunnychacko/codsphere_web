"use client";

import * as React from "react";

const faqs = [
  {
    q: "What makes CodSphere's CRM different from off-the-shelf tools like HubSpot or Zoho?",
    a: "Unlike generic platforms, our CRM is built custom for your workflow. Whether you&apos;re managing sales pipelines, onboarding clients, or automating reminders, we tailor the logic, UI, and integrations to your exact business model — no unnecessary features, no workarounds.",
  },
  {
    q: "Can you integrate your ERP system with my existing tools and software?",
    a: "Absolutely. Our ERP development focuses on modular and API-first architecture, meaning we can integrate with your accounting tools, inventory apps, HR systems, or any third-party software — from QuickBooks to SAP.",
  },
  {
    q: "How long does it take to build a custom CRM or ERP?",
    a: "Typical projects take 4 to 12 weeks, depending on complexity. We follow agile methodology, so you'll see progress in sprints and can start using core features while we continue building enhancements.",
  },
  {
    q: "Do you offer mobile apps with your web solutions?",
    a: "Yes — all our platforms are mobile-optimised by default, and we offer dedicated iOS and Android apps if your team needs native functionality (like offline access, push notifications, or camera-based features).",
  },
  {
    q: "How secure are your invoicing and automation tools?",
    a: "We prioritise security from day one — using bank-grade encryption, secure login protocols, and GDPR-compliant architecture. Whether you&apos;re handling financial data or customer records, your system is protected end-to-end.",
  },
];

export default function ServicesFAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="">
      <div className="container mx-auto px-[20px] sm:px-[60px] lg:px-[180px] pt-more">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-8">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 md:space-y-6 lg:space-y-[30px]">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="relative px-0 md:px-2">
                {/* Blue shadow background - hidden on mobile, visible on larger screens */}
                <div
                  className="hidden md:block absolute bg-[#608BF3] rounded-[17px] inset-x-0"
                  style={{
                    height: isOpen ? "calc(100% + 6px)" : "100%",
                    left: "-6px",
                    right: "6px",
                    top: "0",
                  }}
                  aria-hidden="true"
                />

                {/* Main FAQ container - responsive width */}
                <div
                  className={`relative bg-[#F5F6FA] rounded-[17px] transition-all duration-300 w-full min-h-[120px] md:min-h-[143px]`}
                >
                  <div
                    className={`p-6 md:p-8 lg:p-[30px] pr-[70px] md:pr-[80px] ${!isOpen ? "min-h-[120px] md:min-h-[143px] flex items-center" : ""}`}
                  >
                    <h5 className="text-[18px] md:text-[20px] lg:text-[22px] leading-[22px] md:leading-[24px] lg:leading-[26px] font-[415] font-sequel text-black pr-2">
                      {item.q}
                    </h5>

                    {/* Answer - only visible when open */}
                    {isOpen && (
                      <p className="mt-4 md:mt-5 lg:mt-[20px] text-[14px] md:text-[15px] lg:text-[16px] leading-[18px] md:leading-[19px] font-[405] font-sequel text-black animate-fadeIn">
                        {item.a}
                      </p>
                    )}
                  </div>

                  {/* Arrow button - responsive positioning */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className={`absolute w-9 h-9 md:w-10 md:h-10 lg:w-[42px] lg:h-[42px] rounded-full bg-[#608BF3] flex items-center justify-center transition-transform duration-300 hover:scale-110`}
                    style={{
                      right: "20px",
                      top: isOpen ? "20px" : "50%",
                      transform: isOpen ? "none" : "translateY(-50%)",
                    }}
                    aria-label={isOpen ? "Collapse" : "Expand"}
                    aria-expanded={isOpen}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    >
                      <path
                        d="M7 10l5 5 5-5"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Add animation keyframe */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
