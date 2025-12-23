"use client";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function ServiceCard({
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
            <p className="text-[10px] sm:text-[12px] leading-[13px] sm:leading-3.5 font-normal text-white/90 font-sequel pt-1.5">
              {desc}
            </p>
          </div>

          {/* Image Container - Fixed dimensions */}
          <div className="px-1 pt-2.5">
            <div className="relative h-40 w-full overflow-hidden bg-black rounded-3xl">
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
