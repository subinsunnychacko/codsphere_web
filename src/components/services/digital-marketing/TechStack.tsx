import Image from "next/image";

const techCategories = [
  {
    title: "SEO Tools",
    subtitle: "Ahrefs, SEMrush, Surfer",
    tools: [
      {
        name: "Ahrefs",
        logo: "/logos/digital-marketing/ahrefs.png",
        bg: "bg-blue-500",
      },
      {
        name: "SEMrush",
        logo: "/logos/digital-marketing/semrush.png",
        bg: "bg-orange-500",
      },
      {
        name: "Surfer SEO",
        logo: "/logos/digital-marketing/surfe.png",
        bg: "bg-pink-100",
      },
    ],
  },
  {
    title: "PPC Tools",
    subtitle: "Google Ads Manager, Meta Business Suite",
    tools: [
      {
        name: "Google Ads",
        logo: "/logos/digital-marketing/google-ads-manager.png",
        bg: "bg-white",
        textColor: "text-gray-700",
      },
      {
        name: "Meta",
        logo: "/logos/digital-marketing/meta-business-suite.png",
        bg: "bg-white",
        textColor: "text-blue-600",
      },
    ],
  },
  {
    title: "Email Tools",
    subtitle: "Mailchimp, ActiveCampaign, HubSpot",
    tools: [
      {
        name: "Mailchimp",
        logo: "/logos/digital-marketing/mailchimp.png",
        bg: "bg-yellow-400",
      },
      {
        name: "ActiveCampaign",
        logo: "/logos/digital-marketing/active-campaign.png",
        bg: "bg-blue-700",
      },
      {
        name: "HubSpot",
        logo: "/logos/digital-marketing/hubspot.png",
        bg: "bg-orange-500",
      },
    ],
  },
  {
    title: "Analytics",
    subtitle: "GA4, Hotjar, Tag Manager",
    tools: [
      {
        name: "Google Analytics",
        logo: "/logos/digital-marketing/ga4.png",
        bg: "bg-orange-400",
      },
      {
        name: "Hotjar",
        logo: "/logos/digital-marketing/hotjar.png",
        bg: "bg-red-500",
      },
      {
        name: "Tag Manager",
        logo: "/logos/digital-marketing/tag-manager.png",
        bg: "bg-blue-400",
      },
    ],
  },
  {
    title: "Design",
    subtitle: "Canva Pro, Figma",
    tools: [
      {
        name: "Canva",
        logo: "/logos/digital-marketing/canva-pro.png",
        bg: "bg-gradient-to-br from-blue-400 to-purple-500",
      },
      {
        name: "Figma",
        logo: "/logos/digital-marketing/figma.png",
        bg: "bg-black",
      },
    ],
  },
  {
    title: "CRM/Automation",
    subtitle: "HubSpot, Zoho, Salesforce",
    tools: [
      {
        name: "HubSpot",
        logo: "/logos/digital-marketing/hubspot.png",
        bg: "bg-orange-500",
      },
      {
        name: "Zoho",
        logo: "/logos/digital-marketing/zoho.png",
        bg: "bg-white",
        textColor: "text-red-600",
      },
      {
        name: "Salesforce",
        logo: "/logos/digital-marketing/salesforce.png",
        bg: "bg-blue-500",
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="bg-[#F0F4FA]">
      <div className="container-wrapper py-more">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Our Digital Marketing Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-[42px]">
          {techCategories.map((category, index) => (
            <div key={index} className="relative">
              {/* Blue shadow card behind */}
              <div
                className="absolute bg-[#608BF3] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[8px]"
                style={{
                  width: "calc(100% - 10px)",
                  height: "100%",
                  left: "0px",
                  top: "0px",
                }}
              />

              {/* Main white card */}
              <div
                className="relative bg-white rounded-[8px] h-full"
                style={{
                  width: "calc(100% - 10px)",
                  left: "10px",
                  top: "0px",
                }}
              >
                {/* Card content */}
                <div className="p-5 md:p-5 lg:p-6 pl-6 md:pl-7 lg:pl-8 h-full flex flex-col break-words">
                  <h3 className="text-[24px] md:text-[27px] lg:text-[30px] leading-[30px] md:leading-[32px] lg:leading-[35px] mb-1 lg:mb-[4px] font-medium">
                    {category.title}
                  </h3>
                  <p className="mb-auto text-[15px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[19px] lg:leading-[21px] font-light">
                    {category.subtitle}
                  </p>

                  {/* Tools aligned to bottom right */}
                  <div className="flex gap-2 justify-end flex-wrap mt-5">
                    {category.tools.map((tool, toolIndex) => (
                      <Image
                        key={toolIndex}
                        src={tool.logo}
                        alt={tool.name}
                        width={32}
                        height={32}
                        className="object-contain h-[40px] w-fit"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
