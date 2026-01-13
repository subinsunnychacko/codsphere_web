"use client";
import ServiceCard from "@/components/service-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

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

export default function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="bg-[#001024] text-white bg-dots">
      <div className="container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto mb-10">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]">
            Design Your Next Breakthrough
          </p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Extend your setup with CodSphere tools
          </h2>
          <p className="mt-2 text-[20px] font-light">
            The electrician website template is designed to work on its own and scale further when
            paired with CodSphere tools that help you capture, manage, and convert leads more
            efficiently.
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
          <Link href="/services">
            <button className="rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
              <div className="flex items-center gap-3 rounded-full px-4 py-3 bg-black hover:bg-gray-800">
                <div className="bg-white text-black rounded-full p-0.5">
                  <ArrowRight />
                </div>
                Explore Our Solutions
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
