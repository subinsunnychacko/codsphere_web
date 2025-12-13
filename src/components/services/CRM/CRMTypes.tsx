// components/services/CRM/CRMTypes.tsx
import Image from "next/image";

interface CRMType {
  title: string;
  description: string;
  image: string;
}

export default function CRMTypes() {
  const crmTypes: CRMType[] = [
    {
      title: "Custom CRM Software",
      description:
        "Built from scratch, fully tailored to your processes, branding, user roles, and KPIs.",
      image: "/images/services/crm/custom-crm-development.jpg",
    },
    {
      title: "Open-Source CRM Integration",
      description: "Customize platforms like Odoo, SuiteCRM, or OroCRM with your unique modules.",
      image: "/images/services/crm/crm-integration-with-existing-systems.jpg",
    },
    {
      title: "Industry-Specific CRMs",
      description:
        "CRM for real estate, healthcare, finance, retail, and logistics with niche features.",
      image: "/images/services/crm/e-commerce-crm.jpg",
    },
  ];

  return (
    <section aria-labelledby="crm-types" className="bg-[#ECF5F7]">
      <div className="container-wrapper py-more">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Types of CRM Solutions We Offer
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[30px]">
          {crmTypes.map((type, index) => (
            <div
              key={index}
              className="bg-white rounded-[20px] md:rounded-[24px] lg:rounded-[28px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden hover:shadow-[0px_6px_20px_rgba(0,0,0,0.15)] transition-shadow"
            >
              {/* Image Container */}
              <div className="relative h-[200px] md:h-[220px] lg:h-[250px] w-full overflow-hidden">
                <Image
                  src={type.image}
                  alt={type.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-7 lg:p-8">
                <h3 className="text-[22px] md:text-[24px] lg:text-[26px] leading-[26px] md:leading-[28px] lg:leading-[30px] font-medium text-black mb-1">
                  {type.title}
                </h3>
                <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[20px] lg:leading-[22px] font-light text-[#515151]">
                  {type.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
