"use client";

export default function ERPBenefits() {
  const benefits = [
    {
      feature: "Predictive Forecasting",
      impact: "Boost uptime, reduce costs, improve inventory planning & strategy",
    },
    {
      feature: "Automated Operational Workflows",
      impact: "Free employees from routine tasks and reduce errors",
    },
    {
      feature: "Data Security",
      impact: "Real-time anomaly detection and compliance auditing",
    },
    {
      feature: "Scalability",
      impact: "AI-driven ERP scales with usage and business changes",
    },
    {
      feature: "Unified Analytics",
      impact: "Single source of operational truth—support smarter decisions",
    },
  ];

  return (
    <section className="bg-white">
      <div className="container-wrapper pt-less pb-more">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Key Business Benefits
          </h2>
        </div>

        <div className="bg-[#ECF5F7] rounded-[15px] overflow-hidden">
          {/* Header */}
          <div className="bg-black px-6 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6">
            <div className="grid grid-cols-2 gap-4 md:gap-6 lg:gap-8">
              <p className="text-[20px] md:text-[25px] lg:text-[30px] leading-[24px] md:leading-[30px] lg:leading-[35px] font-medium text-white">
                Feature
              </p>
              <p className="text-[20px] md:text-[25px] lg:text-[30px] leading-[24px] md:leading-[30px] lg:leading-[35px] font-medium text-white">
                Business Impact
              </p>
            </div>
          </div>

          {/* Rows */}
          <div>
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 gap-4 md:gap-6 lg:gap-8 px-6 md:px-8 lg:px-12 py-4 md:py-5 lg:py-6 ${
                  index !== benefits.length - 1 ? "border-b border-black" : ""
                }`}
              >
                <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px]  font-medium">
                  {benefit.feature}
                </p>
                <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[18px] md:leading-[22px] lg:leading-[24px]  font-medium">
                  {benefit.impact}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
