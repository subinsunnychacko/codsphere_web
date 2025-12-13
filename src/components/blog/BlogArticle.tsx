import Image from "next/image";
import { Calendar, User, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { BlogPostType } from "@/lib/blog-data";

interface BlogArticleProps {
  post: BlogPostType;
}

export function BlogArticle({ post }: BlogArticleProps) {
  return (
    <article className="bg-white rounded-lg shadow-sm overflow-hidden">
      <Link
        href="/blog"
        className="inline-flex items-center text-gray-600 hover:text-black mb-6 px-6 pt-6"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Blog
      </Link>

      <div className="px-6 pb-6">
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <User className="w-4 h-4 mr-1" />
            {post.author || "Cod Sphere Team"}
          </span>
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {post.date}
          </span>
          <span className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readTime || "5 min read"}
          </span>
        </div>

        <h1 className="text-3xl font-bold mb-6">{post.title}</h1>

        <div className="relative h-64 md:h-96 mb-8">
          {post.tag === "CRM" || post.tag === "ERP" ? (
            <div
              className={`h-full ${post.tag === "CRM" ? "bg-gray-800" : "bg-blue-900"} flex items-center justify-center rounded-lg`}
            >
              <span className="text-white text-6xl font-bold">{post.tag}</span>
            </div>
          ) : (
            <Image
              src={post.image || "/images/blog/default.jpg"}
              alt={post.title}
              fill
              className="object-cover rounded-lg"
            />
          )}
        </div>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">{post.excerpt}</p>

          {/* Add more content sections here based on the actual blog content */}
          <h2 className="text-2xl font-bold mt-8 mb-4">Understanding Modern CRM Systems</h2>
          <p className="text-gray-600 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Key Benefits</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
            <li>Streamlined sales processes</li>
            <li>Better customer insights</li>
            <li>Automated workflows</li>
            <li>Improved team collaboration</li>
          </ul>

          <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Strategy</h2>
          <p className="text-gray-600 mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500">Share:</span>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">{post.tag}</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
