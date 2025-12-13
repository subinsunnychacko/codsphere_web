"use client";

import Image from "next/image";
import { useState } from "react";

type Testimonial = {
  name: string;
  body: string;
  avatar: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Annie",
    avatar: "/images/profile-pic/lynda-kimberly.jpg",
    body: "CodSphere helped us build a custom CRM tailored to our sales pipeline. We now close deals faster, and our team finally works in sync",
  },
  {
    name: "Martine",
    avatar: "/images/profile-pic/robert-peppers.jpg",
    body: "From UI to backend, their ERP solution streamlined our operations. Inventory, HR, and billing are now managed under one dashboard — a total game-changer!",
  },
  {
    name: "Johnson",
    avatar: "/images/profile-pic/josh-m.jpg",
    body: "We were looking for a smart invoicing system, and CodSphere delivered a beautifully designed tool that cut our billing time in half.",
  },
  {
    name: "Guerra",
    avatar: "/images/profile-pic/guerra.jpg",
    body: "The CodSphere team automated our client onboarding with precision. What used to take hours is now done in minutes. Highly recommend for startups scaling fast.",
  },
  {
    name: "Lee",
    avatar: "/images/profile-pic/lee.jpg",
    body: "We hired CodSphere for a marketing strategy, but they went beyond — building funnels, setting up CRM triggers, and improving conversions by 38%.",
  },
  {
    name: "Luke",
    avatar: "/images/profile-pic/luke.jpg",
    body: "CodSphere built a backend system that connects our ecommerce, CRM, and support. Everything finally works together — no more scattered apps.",
  },
  {
    name: "Bella",
    avatar: "/images/profile-pic/bella.jpg",
    body: "Their team understood our vision from day one. The custom dashboards and workflow tools they built made scaling much smoother.",
  },
];

export default function Voices() {
  return (
    <section className="">
      <div className="container-wrapper pt-more pb-less">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#D3D3D3]">Voices</p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Trusted by thousands of forward thinkers across the globe
          </h2>
          <p className="mt-2 text-[20px] font-light">
            We've received endless love and recognition from founders and entrepreneurs who've
            entrusted us with their most precious thoughts and ideas.
          </p>
        </div>
        {/* Grid Layout - Responsive */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
        {/* Layout for Mobiles & Laptops */}
        {/* <div className="grid md:hidden xl:grid xl:grid-cols-3 gap-6">
          {[
            [testimonials[3], testimonials[6]],
            [testimonials[0], testimonials[2]],
            [testimonials[1], testimonials[4]],
          ].map((testimonialsCol, i) => (
            <div key={i} className="flex flex-col gap-6">
              {testimonialsCol.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          ))}
        </div> */}
        {/* Layout for Tablets */}
        {/* <div className="hidden md:grid md:grid-cols-2 xl:hidden gap-6">
          {[
            [testimonials[0], testimonials[2], testimonials[3]],
            [testimonials[1], testimonials[6], testimonials[4]],
          ].map((testimonialsCol, i) => (
            <div key={i} className="flex flex-col gap-6">
              {testimonialsCol.map((testimonial, index) => (
                <TestimonialCard key={index} {...testimonial} />
              ))}
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

function TestimonialCard({ name, avatar, body }: Testimonial) {
  const [imageError, setImageError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className={`
        rounded-[12px] md:rounded-[14px] lg:rounded-[15px]
        h-full p-4 md:p-5 lg:p-6
        transition-all duration-300 cursor-pointer break-inside-avoid
        ${isHovered ? "bg-[#608BF3] text-white transform -translate-y-1" : "bg-[#F7F6F5] text-black"}
      `}
      style={{
        boxShadow: isHovered
          ? "0px 8px 20px rgba(96, 139, 243, 0.25)"
          : "0px 4px 12px rgba(0, 0, 0, 0.09)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Avatar and Name */}
      <div className="flex items-center gap-2.5 md:gap-3 mb-3 md:mb-4">
        <div className="relative h-[44px] w-[44px] md:h-[50px] md:w-[50px] lg:h-[54px] lg:w-[54px] rounded-full overflow-hidden bg-[#D9D9D9] flex-shrink-0">
          {!imageError ? (
            <Image
              src={avatar}
              alt={`${name} giving a testimonial about CodSphere`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 44px, (max-width: 1024px) 50px, 54px"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-[#D9D9D9]" />
          )}
        </div>
        <p
          className={`
          text-[20px] md:text-[22px] lg:text-[25px]
          leading-[26px] md:leading-[30px] lg:leading-[36px]
          font-normal font-sequel
          transition-colors duration-300
          ${isHovered ? "text-white" : "text-black"}
        `}
        >
          {name}
        </p>
      </div>

      {/* Testimonial Body - Responsive */}
      <p
        className={`
        text-[14px] lg:text-[16px]
        leading-[20px] md:leading-[23px] lg:leading-[26px]
        font-normal font-sequel flex-grow
        transition-colors duration-300
        ${isHovered ? "text-white" : "text-[#515151]"}
      `}
      >
        {body}
      </p>
    </article>
  );
}
