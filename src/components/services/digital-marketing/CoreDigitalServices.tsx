// components/services/digital-marketing/CoreDigitalServices.tsx
"use client";

import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Search Engine Optimisation (SEO)",
    description:
      "Rank higher on Google with our proven on-page, off-page, and technical SEO strategies. We use the latest tools to boost visibility and drive organic traffic.",
    image: "/images/services/digital-marketing/seo-strategies.jpg",
    imageAlt: "Search Engine Optimisation with hand interacting on digital search bar interface",
  },
  {
    id: 2,
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "Launch highly targeted Google Ads and social media campaigns that bring immediate traffic and measurable ROI.",
    image: "/images/services/digital-marketing/pay-per-click.jpg",
    imageAlt: "Pay Per Click advertising concept with stacked wooden blocks and marketing icons",
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description:
      "Build brand awareness and customer engagement across platforms like Instagram, LinkedIn, and Facebook. Organic content + paid ads = winning formula.",
    image: "/images/services/digital-marketing/social-media-marketing.jpg",
    imageAlt:
      "Social media marketing analytics showing engagement likes and followers on digital screen",
  },
  {
    id: 4,
    title: "Email Marketing",
    description:
      "Create high-converting automated campaigns with platforms like Mailchimp, ActiveCampaign, and HubSpot. Nurture leads, drive conversions, and retain customers.",
    image: "/images/services/digital-marketing/email-marketing.jpg",
    imageAlt: "Email marketing automation concept with hand sending emails from laptop",
  },
  {
    id: 5,
    title: "Web & Landing Page Design",
    description:
      "We create fast, responsive, and conversion-focused websites and landing pages tailored for your business.",
    image: "/images/services/digital-marketing/web-design.jpg",
    imageAlt: "Responsive web and landing page design displayed across multiple devices",
  },
  {
    id: 6,
    title: "Lead Generation & Funnel Creation",
    description:
      "Capture, nurture, and convert leads with complete marketing funnels - from awareness to action using CRM integrations.",
    image: "/images/services/digital-marketing/lead-generation.jpg",
    imageAlt: "Lead generation and marketing funnel diagram turning leads into business revenue",
  },
];

export default function CoreDigitalServices() {
  return (
    <section className="bg-black bg-dots">
      <div className="container-wrapper py-more">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12 text-white">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Our Core Digital Marketing Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-x-[36px] lg:gap-y-[30px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative overflow-hidden bg-white shadow-[1px_1px_1px_rgba(0,0,0,0.25)] rounded-[16px]"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-[200px] md:h-[220px] lg:h-[239px] rounded-t-[16px] mx-2 mt-2 lg:mt-[8px] bg-[#D9D9D9]">
                <Image src={service.image} alt={service.imageAlt} fill className="object-cover" />
              </div>

              {/* Content Section */}
              <div className="px-2 pt-3 pb-5 lg:pt-[15px]">
                <h3 className="mb-2 lg:mb-[6px] text-[18px] md:text-[19px] lg:text-[20px] leading-[22px] md:leading-[23px] lg:leading-[24px] text-black font-medium">
                  {service.title}
                </h3>
                <p className="text-[13px] md:text-[13px] lg:text-[14px] leading-[16px] lg:leading-[17px] text-black font-light">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
