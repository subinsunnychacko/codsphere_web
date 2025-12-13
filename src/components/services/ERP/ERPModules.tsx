"use client";

export default function ERPModules() {
  const modules = [
    {
      title: "Production & Supply Chain Management",
      description:
        "Real-time inventory monitoring, demand forecasting, and supplier coordination are optimised using machine learning models.",
    },
    {
      title: "Finance, Accounting & Budgeting",
      description:
        "Automate invoicing, expense approvals, and compliance, with AI-based anomaly detection and fraud prevention.",
    },
    {
      title: "Human Resources & Workforce Management",
      description:
        "Use AI to automate onboarding, performance tracking, and predictive attrition alerts.",
    },
    {
      title: "Transport, Logistics & Fleet Tracking",
      description:
        "Route optimisation, delivery prediction, and load planning powered by dynamic AI systems—all integrated into ERP.",
    },
    {
      title: "Hospitality & Customer-Facing Operations",
      description:
        "Reservation, guest services, and inventory modules enhanced with predictive analytics and personalised guest insights.",
    },
    {
      title: "Custom AI + ERP Modules",
      description:
        "From AI chatbots for support automation to intelligent BI dashboards, we tailor AI enhancements to your sector and pain points.",
    },
  ];

  return (
    <section className="bg-[#F0F4FA]">
      <div className="container-wrapper py-more">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Core Modules & AI Capabilities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
          {modules.map((module, index) => (
            <div key={index} className="relative">
              {/* Blue left border shadow effect */}
              <div className="absolute left-0 top-0 bottom-0 w-[8px] md:w-[9px] lg:w-[10px] bg-[#608BF3] rounded-l-[8px]" />

              {/* Main white card */}
              <div
                className="relative bg-white rounded-[8px] p-5 md:p-5 lg:p-6 ml-[8px] md:ml-[9px] lg:ml-[10px] min-h-[180px] md:min-h-[195px] lg:min-h-[210px]"
                style={{
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              >
                <h3 className="text-[18px] md:text-[19px] lg:text-[20px] leading-[22px] md:leading-[23px] lg:leading-[24px] mb-3 md:mb-3 lg:mb-4 font-semibold">
                  {module.title}
                </h3>
                <p className="text-[13px] md:text-[13px] lg:text-[14px] leading-[16px] md:leading-[16px] lg:leading-[17px] text-gray-700 font-medium">
                  {module.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
