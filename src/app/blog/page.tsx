import type { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogGrid } from "@/components/blog/BlogGrid";
import { BlogSidebar } from "@/components/blog/BlogSidebar";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";
// import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: formatMetaTitle("Blog", "Industry Insights & Tech Trends"),
  description:
    "Explore CodSphere's blog for expert insights on CRM, ERP, AI automation, digital marketing strategies, and business technology trends.",
  keywords:
    "business technology blog, CRM insights, ERP trends, AI automation, digital marketing tips, tech industry news",
  alternates: {
    canonical: "https://codsphere.com/blog",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar /> */}
      <BlogHero />
      <div className="container-wrapper pt-more">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[30px]">
          <div className="flex-1">
            <BlogGrid />
          </div>
          <div className="w-full lg:w-[405px] hidden xl:block">
            <BlogSidebar />
          </div>
        </div>
      </div>
      <ContactCTA />
    </div>
  );
}
