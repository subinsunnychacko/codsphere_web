"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import pS from "@/assets/images/about-us/p (1).avif";

type Member = {
  name: string;
  role: string;
  img: string;
  video?: string;
  offset?: string; // for staggered layout
};

const MEMBERS: Member[] = [
  {
    name: "Samerth Pathak",
    role: "Lead Architect (CRM & ERP)",
    img: "/images/profile-pic/samerth.jpeg",
    video: "#",
    offset: "top",
  },
  {
    name: "Pratyaksh Sethi",
    role: "Chief Business Development Officer",
    img: "/images/profile-pic/pratyaksh_new.jpg",
    video: "#",
    offset: "bottom",
  },
  {
    name: "Vishnu Nair",
    role: "Project Manager",
    img: "/images/profile-pic/vishnu.jpeg",
    video: "#",
    offset: "top",
  },
  {
    name: "Subin Sunny",
    role: "Software Developer & Quality Designer",
    img: "/images/profile-pic/subin.jpeg",
    video: "#",
    offset: "bottom",
  },
];

export default function Team() {
  return (
    <section className="">
      <div className="container-wrapper pt-less pb-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4 md:pb-12">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#D3D3D3]">Experts Team</p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Team Perfection At It's Finest
          </h2>
        </div>

        {/* Cards Grid - Staggered Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 xl:gap-6">
          {MEMBERS.map((member, index) => (
            <div
              key={member.name}
              className={cn(
                "",
                member.offset === "bottom" ? "lg:block lg:mt-[77px]" : "", // Cards 2 and 4 are pushed down on desktop only
              )}
            >
              <TeamCard {...member} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCard({ name, role, img, video }: Member) {
  const [imageError, setImageError] = useState(false);

  return (
    <article className="relative rounded-[16px] sm:rounded-[18px] lg:rounded-[21px]  shadow-[0px_4px_11.8px_rgba(0,0,0,0.15)] overflow-visible">
      {/* Card Container */}
      <div className="py-16 lg:py-8 xl:py-12 flex flex-col gap-6 xl:gap-10">
        {/* Avatar Container - Positioned to overflow */}
        <div className="mx-auto w-full flex justify-center">
          {/* Image Container with border and shadow */}
          <div className="relative h-[256px] lg:h-[120px] xl:h-[160px] 2xl:h-[200px] aspect-square rounded-full border-2 border-white shadow-[0px_1px_7.1px_rgba(0,0,0,0.25)]  bg-[#D9D9D9] overflow-hidden">
            {!imageError ? (
              <Image
                src={img}
                alt={`CodeSphere team member ${name}, ${role} profile picture`}
                fill
                sizes="(max-width: 640px) 120px, (max-width: 1024px) 140px, 174px"
                className="object-cover"
                priority
                onError={() => setImageError(true)}
              />
            ) : (
              <div className="w-full h-full bg-[#D9D9D9]" />
            )}
            {/* Play button - positioned absolutely */}
            {/* {video && (
              <Link
                href={video}
                aria-label={`Play intro video of ${name}`}
                className="absolute top-2 lg:top-1 -right-4 lg:-right-5 xl:-right-7 2xl:-right-5 h-12 lg:h-10 xl:h-12 aspect-square flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-gray-900 transition-colors"
              >
                <Play className=" fill-white" />
              </Link>
            )} */}
          </div>
        </div>

        {/* Name + Role - Below the avatar */}
        <div className="text-center">
          <p className="text-[16px] sm:text-[18px] lg:text-[20px] leading-[20px] sm:leading-[22px] lg:leading-[24px] font-medium text-black font-sequel">
            {name}
          </p>
          <p className="mt-1 text-[13px] sm:text-[14px] lg:text-[15px] leading-[16px] sm:leading-[17px] lg:leading-[18px] text-[#515151] font-sequel font-normal">
            {role}
          </p>
        </div>
      </div>
    </article>
  );
}
