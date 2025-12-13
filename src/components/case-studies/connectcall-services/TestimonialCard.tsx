"use client";

import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  testimonial,
  image,
}: TestimonialCardProps) {
  return (
    <div className="flex min-h-[150px] md:min-h-[165px] lg:min-h-[178px] w-full lg:max-w-[795px] rounded-[12px] md:rounded-[14px] lg:rounded-[15px] bg-[#F7F6F5]">
      <div className="flex flex-col sm:flex-row items-center sm:items-center p-4 md:p-5 lg:p-[25px] w-full">
        {/* Profile image - responsive */}
        <div className="relative h-[60px] w-[60px] md:h-[75px] md:w-[75px] lg:h-[88px] lg:w-[88px] flex-shrink-0 overflow-hidden rounded-full bg-[#D9D9D9] mb-4 sm:mb-0">
          <Image
            src={image}
            alt={`${name} giving a review about CodSphere's ConnectCall Services`}
            fill
            className="object-cover"
          />
        </div>

        {/* Content - responsive */}
        <div className="sm:ml-4 md:ml-5 lg:ml-[25px] flex-1 text-center sm:text-left">
          <p className="text-[18px] md:text-[22px] lg:text-[25px] leading-[24px] md:leading-[30px] lg:leading-[36px] text-black font-sequel font-[405]">
            {name}
          </p>
          <p className="text-[12px] md:text-[14px] lg:text-[15px] leading-[16px] md:leading-[19px] lg:leading-[21px] text-[#479FD1] font-sequel font-[405]">
            {role}, {company}
          </p>
          <p className="mt-2 md:mt-3 lg:mt-[10px] text-[14px] md:text-[16px] lg:text-[18px] leading-[20px] md:leading-[23px] lg:leading-[26px] text-[#515151] font-sequel font-[405]">
            &quot;{testimonial}&quot;
          </p>
        </div>
      </div>
    </div>
  );
}
