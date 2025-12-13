"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const services = [
  {
    title: "Custom CRM Software Development",
    desc: "Manage leads, customers, and workflows with tailored CRM platforms built for your exact business model.",
    img: "/images/home/service-crm.jpg",
    imgAlt: "Hands interacting with a digital CRM system interface.",
    href: "/services/crm-development",
  },
  {
    title: "AI-Driven ERP System Development & Integration",
    desc: "Streamline operations with intelligent, scalable ERP solutions tailored for finance, inventory, HR, and more.",
    img: "/images/home/service-erp.jpg",
    imgAlt: "Business professional using AI-driven ERP system tools.",
    href: "/services/erp-solutions",
  },
  {
    title: "Smart Invoicing & Billing Tools",
    desc: "Simplify payments and automate recurring invoicing with clean, secure, and intuitive systems.",
    img: "/images/home/service-invoicing.jpg",
    imgAlt: "Close-up of a digital invoicing and billing tool.",
    href: "/services/#",
  },
  {
    title: "Digital Marketing",
    desc: "We don't guess — we build full-funnel strategies that convert using data, automation, and analytics.",
    img: "/images/home/service-marketing.jpg",
    imgAlt: "Person using a digital interface for marketing strategies.",
    href: "/services/digital-marketing",
  },
];

export default function WorkCarousel() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-black text-white bg-dots">
      <div className="container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto mb-10">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]">Services</p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Startup or Scaleup — We've Got the Stack.
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Explore the four pillars we build around — and why brands keep coming back
          </p>
        </div>

        {/* Services Grid - Added padding for arrow overflow on hover */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              isHovered={hoveredIndex === index}
              onHover={() => setHoveredIndex(index)}
              onLeave={() => setHoveredIndex(null)}
            />
          ))}
        </div>

        {/* Explore Button */}
        <div className="flex justify-center mt-8 sm:mt-14">
          <button className="rounded-full bg-gradient-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
            <div className="flex items-center gap-3 rounded-full px-4 py-3 bg-black hover:bg-gray-800">
              <div className="bg-white text-black rounded-full p-0.5">
                <ArrowRight />
              </div>
              Explore Our Solutions
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  desc,
  img,
  imgAlt,
  href,
  isHovered,
  onHover,
  onLeave,
}: {
  title: string;
  desc: string;
  img: string;
  imgAlt: string;
  href: string;
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
        <Link
          href={href}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          className="absolute bottom-0 left-0 w-[70px] h-[70px] rounded-full flex items-center justify-center z-50 transition-all duration-300 bg-black border-2 border-white transform -translate-y-1 cursor-pointer"
        >
          <ArrowUpRight className="w-8 h-8 text-white" />
        </Link>
      )}
    </div>
  );
}
