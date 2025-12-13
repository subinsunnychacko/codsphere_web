import Image from "next/image";

const modules = [
  {
    title: "Production & Supply Chain Management",
    copy:
      "Real-time inventory monitoring, demand forecasting, and supplier coordination are optimised using machine learning models.",
    img: "/images/services/erp/core-production.jpg",
  },
  {
    title: "Transport, Logistics & Fleet Tracking",
    copy:
      "Route optimisation, delivery prediction, and load planning powered by dynamic AI systems—all integrated into ERP.",
    img: "/images/services/erp/core-logistics.jpg",
  },
  {
    title: "Finance, Accounting & Budgeting",
    copy:
      "Automate invoicing, expense approvals, and compliance, with AI-based anomaly detection and fraud prevention.",
    img: "/images/services/erp/core-finance.jpg",
  },
  {
    title: "Hospitality & Customer-Facing Operations",
    copy:
      "Reservation, guest services, and inventory modules enhanced with predictive analytics and personalised guest insights.",
    img: "/images/services/erp/core-hospitality.jpg",
  },
  {
    title: "Human Resources & Workforce Management",
    copy:
      "Use AI to automate onboarding, performance tracking, and predictive attrition alerts.",
    img: "/images/services/erp/core-hr.jpg",
  },
  {
    title: "Custom AI + ERP Modules",
    copy:
      "From AI chatbots for support automation to intelligent BI dashboards, we tailor AI enhancements to your sector and pain points.",
    img: "/images/services/erp/core-custom.jpg",
  },
];

export default function ERPCore() {
  return (
    <section className="relative bg-[#F0F4FA]">
      <div className="cs-container py-10 md:py-16">
        <h2 className="heading-40 fw-415 text-center">Core Modules & AI Capabilities</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((m) => (
            <article
              key={m.title}
              className="overflow-hidden rounded-[8px] bg-white shadow-sm ring-1 ring-black/5"
            >
              <div className="relative h-[140px] w-full">
                <Image src={m.img} alt={m.title} fill className="object-cover" />
              </div>
              <div className="space-y-3 p-5">
                <h3 className="body-20 fw-415">{m.title}</h3>
                <p className="text-[14px] leading-[17px]">{m.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
