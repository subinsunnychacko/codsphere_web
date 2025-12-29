// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { BlogTableOfContents } from "@/components/blog/BlogTableOfContents";
import { BlogRecentPosts } from "@/components/blog/BlogRecentPosts";
import blog_banner_bg from "@/assets/images/banners/blog-banner-bg.jpg";
import ContactCTA from "@/components/ContactCTA";
import type { Metadata } from "next";
import { formatMetaTitle } from "@/lib/format-meta-title";
// import Navbar from "@/components/Navbar";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: formatMetaTitle("Blog Post Not Found", "Success Stories & Results"),
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: formatMetaTitle(post.title),
    description: post.excerpt || `Read our latest insights on ${post.category}`,
    openGraph: {
      title: formatMetaTitle(post.title),
      description: post.excerpt || `Read our latest insights on ${post.category}`,
      type: "article",
      authors: post.author ? [post.author] : undefined,
      publishedTime: post.date,
      tags: post.category ? [post.category] : [],
      images: [
        {
          url: `https://codsphere.com/${post.ogImage}`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: formatMetaTitle(post.title),
      description: post.excerpt || `Read our latest insights on ${post.category}`,
      images: [`https://codsphere.com/${post.ogImage}`],
    },
    alternates: {
      canonical: `https://codsphere.com/blog/${slug}`,
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const tableOfContents = [
    "Introduction: Why Local SEO Is Crucial for Local Businesses",
    "Google Business Profile: Your Digital Storefront",
    "Online Reviews: The New Word-of-Mouth",
    "Local Keywords: Speak Your Customer's Language",
    "Content for the Community: Make It Local",
    "Mobile Optimization: Because Local = Mobile",
    "NAP Consistency and Local Citations",
    "Structured Data and On-Page Signals",
    "Backlinks from Local Sources",
    "Social Media and Local Engagement",
    "Performance, Speed, and SEO Tech Setup",
    "Conclusion: Think Local, Win Global (One Neighborhood at a Time)",
  ];

  const recentPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <div
        className="relative h-[120px] sm:h-[150px] lg:h-[250px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${blog_banner_bg.src})` }}
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black/50" />

        <div className="h-full flex items-end pb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="container-wrapper">
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold drop-shadow-lg">
                Blogs: {post.title}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area - Following services responsive pattern */}
      <div className="container-wrapper pt-more">
        {/* Mobile/Tablet Layout: Table of Contents at top */}
        <div className="lg:hidden mb-8 md:mb-12">
          <BlogTableOfContents sections={tableOfContents} />
        </div>

        {/* Desktop Layout: Side-by-side; Mobile/Tablet: Stacked */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 lg:gap-[60px]">
          {/* Main Content */}
          <BlogPostContent post={post} />

          {/* Desktop Sidebar */}
          <aside className="w-full lg:w-[374px] lg:sticky lg:top-6">
            {/* Table of Contents - Only visible on desktop */}
            <div className="hidden lg:block mb-8 md:mb-12 lg:mb-[60px]">
              <BlogTableOfContents sections={tableOfContents} />
            </div>

            {/* Recent Posts - Always visible */}
            <BlogRecentPosts posts={recentPosts} />
          </aside>
        </div>
      </div>

      <ContactCTA />
    </div>
  );
}
