// components/blog/BlogCard.tsx
import type { BlogPostType } from "@/lib/blog-data";
import Image from "next/image";
import Link from "next/link";

interface BlogCardProps {
  post: BlogPostType;
}

export function BlogCard({ post }: BlogCardProps) {
  // Only make the CRM post clickable for now
  const isClickable = post.slug === "crm-sales-process";

  const cardContent = (
    <article
      className={`bg-white rounded-[19px] overflow-hidden shadow-[0px_4px_4px_rgba(0,0,0,0.25)] ${post.isFeature ? "col-span-2" : ""}`}
    >
      <div
        className={`relative ${post.isFeature ? "h-[447px]" : "h-[215px]"} bg-[#D9D9D9] rounded-t-[19px]`}
      >
        {post.image ? (
          <Image src={post.image} alt={post.imageAlt} fill className="object-cover" />
        ) : (
          <>
            {post.tag === "CRM" && (
              <div className="w-full h-full bg-gradient-to-br from-[#2a2a2a] to-[#0d0d0d] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-white text-[72px] font-bold mb-6">CRM</div>
                  <div className="flex gap-3 justify-center">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="w-[40px] h-[40px] border-2 border-white/30 rounded-lg flex items-center justify-center"
                      >
                        <div className="w-5 h-5 bg-white/20 rounded"></div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Other tag designs remain the same */}
          </>
        )}
      </div>

      <div className={`${post.isFeature ? "px-8 py-7" : "px-6 py-5"} bg-white`}>
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-1">
            <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="black">
              <path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
            </svg>
            <span className="text-[15px] text-black font-normal">{post.category}</span>
          </div>
          <div className="flex items-center gap-1">
            <svg
              className="w-[18px] h-[18px]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="1.5"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
              <rect x="8" y="14" width="2" height="2" fill="black"></rect>
            </svg>
            <span className="text-[15px] text-black font-normal">{post.date}</span>
          </div>
        </div>

        <h2
          className={`${post.isFeature ? "text-[25px] leading-[29px]" : "text-[25px] leading-[29px]"} font-medium mb-4 text-black`}
        >
          {post.title}
        </h2>

        <p className="text-[16px] leading-[19px] text-black mb-5">{post.excerpt}</p>

        {isClickable ? (
          <Link href={`/blog/${post.slug}`}>
            <button className="bg-[#0D0D0D] text-white px-[20px] py-[13px] rounded-[25.5px] text-[18px] font-normal hover:bg-black transition-colors shadow-[4px_4px_12px_rgba(0,0,0,0.15)]">
              Read More
            </button>
          </Link>
        ) : (
          <button
            className="bg-[#0D0D0D] text-white px-[20px] py-[13px] rounded-[25.5px] text-[18px] font-normal opacity-50 cursor-not-allowed shadow-[4px_4px_12px_rgba(0,0,0,0.15)]"
            disabled
          >
            Read More
          </button>
        )}
      </div>
    </article>
  );

  return cardContent;
}
