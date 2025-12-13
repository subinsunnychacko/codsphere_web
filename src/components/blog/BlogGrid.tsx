// components/blog/BlogGrid.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog-data";

export function BlogGrid() {
  const handleViewMore = () => {
    console.log("View more clicked");
  };

  return (
    <div className="space-y-6 md:space-y-8 lg:space-y-[30px]">
      {/* Featured Post */}
      <article className="relative overflow-hidden bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[19px]">
        <div className="relative h-[250px] md:h-[350px] lg:h-[447px] bg-[#D9D9D9] ">
          <Image
            src={blogPosts[0].image}
            alt={blogPosts[0].imageAlt}
            fill
            className="object-cover rounded-t-[19px]"
          />
        </div>

        <div className="p-6 md:p-8 lg:p-[32px_30px]">
          <div className="flex flex-wrap items-center gap-4 md:gap-6 lg:gap-[30px] mb-3 md:mb-4 lg:mb-[15px]">
            <div className="flex items-center gap-[4px]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="black">
                <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
              </svg>
              <span className="font-sequel font-[400] text-[14px] md:text-[14px] lg:text-[15px] text-black">
                {blogPosts[0].category}
              </span>
            </div>
            <div className="flex items-center gap-[4px]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="black"
                strokeWidth="1.5"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="font-sequel font-[400] text-[14px] md:text-[14px] lg:text-[15px] text-black">
                {blogPosts[0].date}
              </span>
            </div>
          </div>

          <h3 className="mb-3 md:mb-4 lg:mb-[15px] font-sequel font-[415] text-[20px] md:text-[22px] lg:text-[25px] leading-[24px] md:leading-[26px] lg:leading-[29px] text-black">
            {blogPosts[0].title}
          </h3>

          <p className="mb-4 md:mb-5 lg:mb-[20px] font-sequel font-[400] text-[14px] md:text-[15px] lg:text-[16px] leading-[17px] md:leading-[18px] lg:leading-[19px] text-black">
            {blogPosts[0].excerpt}
          </p>

          {/* Only this Read More is clickable */}
          <Link href={`/blog/${blogPosts[0].slug}`}>
            <button className="h-[44px] md:h-[48px] lg:h-[51px] px-4 md:px-5 lg:px-[30px] bg-[#0D0D0D] rounded-[22px] md:rounded-[24px] lg:rounded-[25.5px] text-white font-sequel font-[405] text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[20px] lg:leading-[21px] shadow-[4px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-lg transition-all">
              Read More
            </button>
          </Link>
        </div>
      </article>

      {/* Regular Posts Grid - responsive: 1 column on mobile, 2 on tablet+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 lg:gap-[22px]">
        {blogPosts.slice(1, 5).map((post) => (
          <article
            key={post.id}
            className="relative overflow-hidden bg-white shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[19px]"
          >
            <div className="relative h-[200px] md:h-[200px] lg:h-[215px] bg-[#D9D9D9] rounded-t-[19px]">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                className="object-cover rounded-t-[19px]"
              />
            </div>

            <div className="p-4 md:p-5 lg:p-[20px_17px]">
              <div className="flex flex-wrap items-center gap-3 md:gap-4 lg:gap-[20px] mb-3 lg:mb-[15px]">
                <div className="flex items-center gap-[4px]">
                  <svg className="w-4 h-4 md:w-[18px] md:h-[18px]" viewBox="0 0 24 24" fill="black">
                    <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
                  </svg>
                  <span className="font-sequel font-[400] text-[13px] md:text-[14px] lg:text-[15px] text-black">
                    {post.category}
                  </span>
                </div>
                <div className="flex items-center gap-[4px]">
                  <svg
                    className="w-4 h-4 md:w-[18px] md:h-[18px]"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="black"
                    strokeWidth="1.5"
                  >
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  <span className="font-sequel font-[400] text-[13px] md:text-[14px] lg:text-[15px] text-black">
                    {post.date}
                  </span>
                </div>
              </div>

              <h3 className="mb-2 md:mb-3 lg:mb-[11px] font-sequel font-[415] text-[18px] md:text-[22px] lg:text-[25px] leading-[22px] md:leading-[26px] lg:leading-[29px] text-black min-h-[44px] md:min-h-[52px] lg:min-h-[90px]">
                {post.title}
              </h3>

              <p className="mb-3 md:mb-4 lg:mb-[15px] font-sequel font-[400] text-[13px] md:text-[15px] lg:text-[16px] leading-[16px] md:leading-[18px] lg:leading-[19px] text-black min-h-[32px] md:min-h-[36px] lg:min-h-[57px]">
                {post.excerpt}
              </p>

              <Link href={`/blog/${post.slug}`}>
                <button className="cursor-pointer h-[40px] md:h-[44px] lg:h-[51px] px-4 md:px-5 lg:px-[30px] bg-black disabled:bg-gray-400 rounded-[20px] md:rounded-[22px] lg:rounded-[25.5px] text-white font-sequel font-[405] text-[14px] md:text-[16px] lg:text-[18px] leading-[18px] md:leading-[20px] lg:leading-[21px] shadow-[4px_4px_12px_rgba(0,0,0,0.15)]">
                  Read More
                </button>
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center">
        <button
          onClick={handleViewMore}
          className="group flex items-center gap-3 opacity-50 cursor-not-allowed h-[60px] md:h-[70px] lg:h-[85px] px-6 md:px-8 lg:px-[26px_12px] bg-[#0D0D0D] rounded-[30px] md:rounded-[35px] lg:rounded-[42.5px] shadow-[4px_4px_12px_rgba(0,0,0,0.15)] hover:shadow-xl transition-all"
          disabled
        >
          <span className="font-sequel font-[405] text-[20px] md:text-[25px] lg:text-[30px] leading-[24px] md:leading-[30px] lg:leading-[35px] text-white mr-3 md:mr-4 lg:mr-auto ml-2 md:ml-4 lg:ml-[10px]">
            View More
          </span>
          <div className="flex items-center justify-center w-[30px] h-[30px] md:w-[35px] md:h-[35px] lg:w-[39px] lg:h-[39px] bg-white rounded-full mr-2 md:mr-3 lg:mr-[14px]">
            <svg
              width="18"
              height="17"
              viewBox="0 0 22 21"
              fill="none"
              className="w-4 h-4 md:w-5 md:h-5 lg:w-[22px] lg:h-[21px]"
            >
              <path
                d="M5 10.5H17M17 10.5L11 4.5M17 10.5L11 16.5"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </div>
  );
}
