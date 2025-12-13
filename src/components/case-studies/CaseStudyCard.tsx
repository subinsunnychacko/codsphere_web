"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

interface CaseStudyCardProps {
  image: StaticImageData;
  imageAlt: string;
  title: string;
  description: string;
  tags: string[];
  tagColors: string[];
  iconBg: string;
  href?: string;
  id: number;
}

export default function CaseStudyCard({
  image,
  imageAlt,
  title,
  description,
  tags,
  tagColors,
  iconBg,
  href = "#",
  id,
}: CaseStudyCardProps) {
  const handleClick = (e: React.MouseEvent) => {
    if (href === "#") {
      e.preventDefault();
      // Optionally show a message or do nothing
    }
  };
  return (
    <article className="group relative w-full">
      {/* card container */}
      <div className="relative">
        {/* image container with rounded corners */}
        <Link href={"/case-studies" + href} className="block" onClick={handleClick}>
          <div className="relative w-full aspect-[398/327] overflow-hidden rounded-3xl bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 398px"
              priority={id <= 3}
            />

            {/* White curved corner for the arrow placement */}
            <div className="absolute bottom-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-[90px] md:h-[90px] bg-white rounded-tl-full" />
          </div>
        </Link>

        {/* arrow icon - positioned at the white curved corner */}
        <div
          className="absolute bottom-2 right-2 sm:bottom-3 sm:right-3 md:bottom-[15px] md:right-[15px] z-10 flex w-10 h-10 sm:w-12 sm:h-12 md:w-[60px] md:h-[60px] items-center justify-center rounded-full shadow-md transition-transform hover:scale-110"
          style={{
            backgroundColor: iconBg,
          }}
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="white"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      {/* content */}
      <div className="mt-3 md:mt-[15px]">
        <h3 className="text-xl sm:text-2xl md:text-[28px] font-semibold leading-tight md:leading-[36px] text-gray-900">
          {title}
        </h3>
        <p className="mt-1 md:mt-[4px] max-w-full md:max-w-[340px] text-sm md:text-[15px] leading-5 md:leading-[20px] text-gray-600">
          {description}
        </p>

        {/* tags */}
        <div className="mt-[10px] flex flex-wrap gap-[8px]">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="inline-block rounded-[4px] px-[10px] py-[4px] text-[12px] font-medium uppercase tracking-wider"
              style={{
                backgroundColor: tagColors[index],
                color: "#3D3D3D",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
