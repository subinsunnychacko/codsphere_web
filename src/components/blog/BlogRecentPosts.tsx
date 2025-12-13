// components/blog/BlogRecentPosts.tsx
"use client";

import type { BlogPostType } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function BlogRecentPosts({ posts }: { posts: BlogPostType[] }) {
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set());

  const handleImageError = (postId: number) => {
    setImageErrors((prev) => new Set(prev).add(postId));
  };

  return (
    <div
      className="bg-[#F8F9FA] rounded-[11px] p-[15px] min-h-[600px] lg:min-h-[1186px]"
      style={{
        boxShadow: "-4px 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Header - Following ServicesFAQ header pattern */}
      <h3 className="mb-8 lg:mb-[30px] text-center text-[20px] md:text-[22px] lg:text-[25px] leading-[26px] md:leading-[28px] lg:leading-[32px] font-[415] font-sequel text-black">
        Recent Posts
      </h3>

      {/* Posts list - Following ServicesFAQ spacing pattern */}
      <div className="space-y-8 md:space-y-10 lg:space-y-[50px]">
        {posts.map((post) => {
          const hasImageError = imageErrors.has(post.id);
          const shouldShowPlaceholder = !post.image || hasImageError;

          return (
            <div key={post.id} className="cursor-default">
              {/* Post thumbnail - Following WhyWorkWith card dimensions pattern */}
              <div className="relative mb-4 lg:mb-[20px] overflow-hidden w-full aspect-[2/1] lg:aspect-auto lg:w-[344px] lg:h-[165px] bg-[#EFF2FF] rounded-[8px]">
                {!shouldShowPlaceholder && post.image ? (
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 344px"
                    onError={() => handleImageError(post.id)}
                  />
                ) : (
                  <>
                    {/* Placeholder graphics based on tag */}
                    {post.tag === "ERP" && (
                      <div className="w-full h-full bg-gradient-to-br from-[#2c3e7a] to-[#1a2347] flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-white text-[36px] md:text-[42px] lg:text-[48px] font-bold font-sequel">
                            ERP
                          </div>
                          <div className="flex gap-2 justify-center mt-2">
                            <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                            <div className="w-2 h-2 bg-white/80 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {post.tag === "Innovation" && (
                      <div className="w-full h-full bg-gradient-to-br from-[#3ea8d8] via-[#4a90e2] to-[#5c6bc0] flex items-center justify-center">
                        <div className="relative">
                          <div className="w-16 md:w-20 h-16 md:h-20 bg-white/25 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <div className="w-10 md:w-12 h-10 md:h-12 bg-white/35 rounded-full"></div>
                          </div>
                          <div className="absolute -top-2 -right-2 w-4 md:w-5 h-4 md:h-5 bg-yellow-400 rounded-full"></div>
                        </div>
                      </div>
                    )}

                    {post.tag === "HR" && (
                      <div className="w-full h-full bg-[#4a5568] flex items-center justify-center">
                        <div className="text-center text-white">
                          <div className="text-xs font-light tracking-wider mb-1">HUMAN</div>
                          <div className="text-xs font-light tracking-wider mb-3">RESOURCES</div>
                          <div className="flex gap-1 justify-center mb-3">
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                            <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                          </div>
                          <div className="flex gap-3 justify-center">
                            <div className="w-6 h-6 border border-white/40 rounded-full"></div>
                            <div className="w-6 h-6 border border-white/40 rounded-full"></div>
                            <div className="w-6 h-6 border border-white/40 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    )}

                    {post.tag === "E-commerce" && (
                      <div className="w-full h-full bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center">
                        <svg
                          className="w-16 md:w-20 h-16 md:h-20 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
                        </svg>
                      </div>
                    )}

                    {!["ERP", "Innovation", "HR", "E-commerce"].includes(post.tag) && (
                      <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                        <div className="text-white text-xl md:text-2xl font-bold font-sequel">
                          {post.tag}
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Post date - Following ServicesFAQ text sizing */}
              <div className="flex items-center gap-2 mb-2 lg:mb-[10px]">
                <svg
                  className="w-[16px] h-[16px] lg:w-[18px] lg:h-[18px]"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="black"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <rect x="8" y="14" width="2" height="2" fill="black" />
                </svg>
                <span className="text-[13px] md:text-[14px] lg:text-[15px] leading-[16px] md:leading-[17px] lg:leading-[18px] font-[400] font-sequel text-black">
                  {post.date}
                </span>
              </div>

              {/* Post title - Following ServicesFAQ question text pattern */}
              <Link
                href={`/blog/${post.slug}`}
                className="block hover:opacity-80 transition-opacity"
              >
                <h4 className="line-clamp-2 text-[13px] md:text-[14px] lg:text-[15px] leading-[17px] md:leading-[18px] lg:leading-[19px] font-[415] font-sequel text-black max-w-full lg:max-w-[329px]">
                  {post.title}
                </h4>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
