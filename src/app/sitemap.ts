import { MetadataRoute } from "next";
import { blogPosts } from "@/lib/blog-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://codsphere.com";

  // Static pages
  const staticPages = [
    "",
    "/about",
    "/services",
    "/services/crm-development",
    "/services/erp-solutions",
    "/services/digital-marketing",
    "/services/web-and-mobile",
    "/success-stories",
    "/blog",
    "/blog/crm-sales-process",
    "/blog/erp-systems-startups",
    "/blog/replacing-spreadsheets-crms",
    "/blog/ai-hr-tools",
    "/blog/ecommerce-software-stack-2025",
    "/case-studies",
    "/case-studies/connectcall-services",
    "/case-studies/sortify",
    "/case-studies/voltvera",
    "/contact",
    "/start-free-trial",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Blog posts
  const blogPages = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...blogPages];
}
