// components/services/web-mobile/CaseStudies.tsx
"use client";

import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const caseStudies = [
  {
    id: 1,
    title: "eCommerce App for a Fashion Brand",
    desc: "A complete Shopify-to-App transition with real-time inventory sync and custom push notifications.",
    img: "/images/services/web-and-mobile/e-commerce-app-for-fashion-brand.jpg",
    imgAlt: "Fashion eCommerce app showing online shopping and clothing store interface",
  },
  {
    id: 2,
    title: "Corporate Website for B2B SaaS",
    desc: "Custom WordPress build with HubSpot CRM integration and blazing-fast performance scores.",
    img: "/images/services/web-and-mobile/corporate-website-for-b2b.jpg",
    imgAlt: "B2B SaaS corporate website concept with hand interacting on digital SaaS icons",
  },
  {
    id: 3,
    title: "Healthcare Booking App",
    desc: "HIPAA-compliant appointment booking app with doctor-patient video calls and in-app payments.",
    img: "/images/services/web-and-mobile/healthcare-booking-app.jpg",
    imgAlt: "Doctor using healthcare booking app with medical icons and digital interface",
  },
  {
    id: 4,
    title: "Web Dashboard for AI Analytics",
    desc: "React.js frontend + Node.js backend powering a real-time data dashboard for enterprise use.",
    img: "/images/services/web-and-mobile/web-dashboard-for-ai-analytics.jpg",
    imgAlt: "AI analytics dashboard with charts and data visualization on computer screen",
  },
];

export default function CaseStudies() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <section className="bg-white">
      <div className="container-wrapper pt-more pb-less">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {caseStudies.map((study, index) => (
            <CaseStudyCard
              key={index}
              {...study}
              isHovered={hoveredCard === index}
              onHover={() => setHoveredCard(index)}
              onLeave={() => setHoveredCard(null)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseStudyCard({
  title,
  desc,
  img,
  imgAlt,
  isHovered,
  onHover,
  onLeave,
}: {
  title: string;
  desc: string;
  img: string;
  imgAlt: string;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative">
      {/* Main Card */}
      <article
        className={cn(
          "relative rounded-3xl transition-all duration-300 overflow-hidden group h-full bg-[#0E0E0E] border-[3px] border-[#232323]",
          isHovered &&
            "rounded-t-3xl rounded-br-3xl rounded-bl-[160px] bg-[#608BF3] transform -translate-y-1",
        )}
        onMouseEnter={onHover}
        onMouseLeave={onLeave}
      >
        {/* Arrow Icon - Top Right when not hovered */}
        {!isHovered && (
          <div
            className="absolute top-4 right-4 w-[50px] h-[50px] rounded-full flex items-center justify-center z-10"
            style={{
              background: "#0E0E0E",
              border: "1px solid #232323",
            }}
          >
            <ArrowUpRight className="w-6 h-6 text-white" />
          </div>
        )}

        {/* Content */}
        <div className="pt-10 pb-2 h-full flex flex-col justify-between relative z-10">
          <div className="px-5">
            {/* Title - Fixed height for alignment */}
            <h3 className="text-[18px] sm:text-[20px] leading-[22px] sm:leading-[25px] md:leading-[26px] font-medium text-white font-sequel pr-12 sm:pr-16 pb-1.5">
              {title}
            </h3>
            {/* Divider Line */}
            <hr />
            {/* Description - Fixed height */}
            <p className="text-[10px] sm:text-[12px] leading-[13px] sm:leading-[14px] font-normal text-white/90 font-sequel pt-1.5">
              {desc}
            </p>
          </div>

          {/* Image Container - Fixed dimensions */}
          <div className="px-1 pt-2.5">
            <div className="relative h-[160px] w-full overflow-hidden bg-black rounded-3xl">
              {!imageError ? (
                <Image
                  src={img}
                  alt={imgAlt}
                  fill
                  className={cn(
                    "object-cover transition-transform duration-300",
                    isHovered && "scale-105",
                  )}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div className="w-full h-full bg-black" />
              )}
            </div>
          </div>
        </div>
      </article>

      {/* Arrow Icon - Bottom Left on hover (outside card) */}
      {isHovered && (
        <div
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          className="absolute bottom-0 left-0 w-[70px] h-[70px] rounded-full flex items-center justify-center z-50 transition-all duration-300 bg-black border-2 border-white transform -translate-y-1 cursor-pointer"
        >
          <ArrowUpRight className="w-8 h-8 text-white" />
        </div>
      )}
    </div>
  );
}
