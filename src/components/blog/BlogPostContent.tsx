// components/blog/BlogPostContent.tsx
import type { BlogPostType } from "@/lib/blog-data";
import Image from "next/image";

// interface BlogPost {
//   id: number;
//   category: string;
//   date: string;
//   title: string;
//   excerpt: string;
//   tag: string;
//   slug: string;
//   image: string;
//   imageAlt: string;
// }

interface BlogPostContentProps {
  post: BlogPostType;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  // Only show full content for the CRM article
  const showFullContent = post.slug === "crm-sales-process";

  return (
    <article className="flex-1 w-full">
      {/* Featured Image - Following ServicesCore responsive pattern */}
      <div className="relative w-full aspect-[16/9] md:aspect-[2/1] lg:aspect-auto lg:h-[447px] mb-6 md:mb-8 lg:mb-[51px] rounded-t-[12px] md:rounded-t-[16px] lg:rounded-t-[19px] overflow-hidden bg-[#D9D9D9]">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 826px"
          priority
        />
      </div>

      {/* Article Content - Following ServicesCore typography pattern */}
      <div className="">
        {showFullContent ? (
          <>
            {/* Main title - Following ServicesCore h3 pattern */}
            <h2 className="mb-4 md:mb-5 lg:mb-6 font-medium text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[52px] font-sequel text-black">
              Mastering Local SEO: The Key to Winning Local Customers in the Digital Age
            </h2>

            {/* Body text - Following ServicesCore copy pattern */}
            <div className="space-y-4 md:space-y-5 lg:space-y-6">
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Today, with so many businesses competing online, showing up in front of nearby
                customers at the exact right time is more important than ever. That's where local
                SEO (Search Engine Optimization) makes a huge difference. Whether you run a
                restaurant, a law office, a gym, or a home repair service, local SEO helps connect
                your business with people searching in your area. It's not just about being
                online—it's about being found by the right people near you.
              </p>

              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Local SEO isn't just a checklist of digital tasks. It's a long-term strategy to
                build visibility, trust, and relevance in your specific geographic area. From
                optimizing your Google presence to tailoring your content for local search terms,
                every step adds to your chances of showing up when and where it matters most.
              </p>

              {/* Section headings - Following ServicesCore kicker pattern */}
              <h3 className="font-medium mt-6 md:mt-7 lg:mt-8 mb-3 md:mb-4 text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-sequel text-black">
                Introduction: Why Local SEO Is Crucial for Local Businesses
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Local SEO helps you appear in searches when potential customers look for services
                "near me" or by city and neighborhood. Unlike general SEO that targets broader
                audiences, local SEO puts your business on the digital map for those actively
                looking nearby.
              </p>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                From improving map listings to earning positive reviews and ranking in the local
                3-pack, this type of SEO builds trust, boosts traffic, and drives footfall or calls
                from people who are already looking to buy.
              </p>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                If your competitors are ranking and you're not, you're missing out on
                high-converting leads that could've been yours. Local SEO ensures that your online
                presence reflects real-world value.
              </p>

              <h3 className="font-medium mt-6 md:mt-7 lg:mt-8 mb-3 md:mb-4 text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-sequel text-black">
                Google Business Profile: Your Digital Storefront
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Google Business Profile (formerly Google My Business) is a must-have for any local
                business. It determines how you appear on Google Maps, search results, and in voice
                searches. Setting it up is free—but optimizing it is where the magic happens.
              </p>
              <ul className="list-none space-y-1 lg:space-y-[2px] mt-3 lg:mt-[12px]">
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Ensure that your business name, address, phone number (NAP), hours, and
                  categories are accurate.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Add appealing photos, services, FAQs, and updates.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Use posts to share news, offers, or events directly in search results.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Track engagement with insights on views, clicks, and direction requests.
                </li>
              </ul>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Your Google Business Profile isn't just a listing—it's a conversion tool. Done well,
                it can drive people straight from search to your front door.
              </p>

              <h3 className="font-medium mt-6 md:mt-7 lg:mt-8 mb-3 md:mb-4 text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-sequel text-black">
                Online Reviews: The New Word-of-Mouth
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Positive reviews do more than just make you look good—they directly impact your
                local search rankings. Google considers review quantity, quality, and freshness when
                deciding how to rank businesses.
              </p>
              <ul className="list-none space-y-1 lg:space-y-[2px] mt-3 lg:mt-[12px]">
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Ask happy customers to leave a review on your Google profile.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Reply to every review—positive or negative—to show active engagement.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Encourage reviews on platforms like Yelp, Facebook, and niche directories in
                  your industry.
                </li>
              </ul>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Reviews boost credibility and trust. A business with glowing, recent feedback is far
                more likely to get chosen than one with outdated or negative reviews.
              </p>

              <h3 className="font-medium mt-6 md:mt-7 lg:mt-8 mb-3 md:mb-4 text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-sequel text-black">
                Local Keywords: Speak Your Customer's Language
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                You want your business to show up when someone searches for "best gym in [City]" or
                "emergency plumber near me." That means using the right local keywords.
              </p>
              <ul className="list-none space-y-1 lg:space-y-[2px] mt-3 lg:mt-[12px]">
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Do keyword research focused on geographic modifiers (e.g., city, neighborhood).
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Add these keywords to your titles, meta descriptions, headers, and website
                  content.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Include local landmarks, directions, and service areas naturally in your text.
                </li>
              </ul>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Keyword optimization is not about stuffing words—it's about understanding how people
                actually search for local businesses like yours.
              </p>

              <h3 className="font-medium mt-6 md:mt-7 lg:mt-8 mb-3 md:mb-4 text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-sequel text-black">
                Content for the Community: Make It Local
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Publishing content that's locally relevant gives Google more context about your
                location and helps your site rank higher in local results.
              </p>
              <ul className="list-none space-y-1 lg:space-y-[2px] mt-3 lg:mt-[12px]">
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Write blog posts about local events, news, or collaborations.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Create location pages if you serve multiple areas.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Highlight customer stories, case studies, or testimonials from local clients.
                </li>
              </ul>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                This approach connects you more closely to your community and reinforces your
                authority in your niche.
              </p>

              <h3 className="font-medium mt-6 md:mt-7 lg:mt-8 mb-3 md:mb-4 text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-sequel text-black">
                Mobile Optimization: Because Local = Mobile
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Over 60% of local searches happen on smartphones. If your website doesn't load fast
                or look good on mobile, you'll lose potential customers on the spot.
              </p>
              <ul className="list-none space-y-1 lg:space-y-[2px] mt-3 lg:mt-[12px]">
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Use a responsive web design that adapts to all screen sizes.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Compress images and use lightweight scripts for faster loading.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Keep contact buttons (like Call Now or Get Directions) easily clickable.
                </li>
              </ul>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Mobile-friendly websites improve user experience, reduce bounce rate, and increase
                your chances of showing up in local results.
              </p>

              <h3 className="font-medium mt-6 md:mt-7 lg:mt-8 mb-3 md:mb-4 text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-sequel text-black">
                NAP Consistency and Local Citations
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Google wants to see the same business name, address, and phone number (NAP) across
                the web. Inconsistent listings can confuse search engines and lower your
                credibility.
              </p>
              <ul className="list-none space-y-1 lg:space-y-[2px] mt-3 lg:mt-[12px]">
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ List your business in online directories like Yelp, Justdial, YellowPages, and
                  Bing Places.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Ensure NAP consistency in every listing, right down to abbreviations and
                  punctuation.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Use tools like Moz Local or BrightLocal to audit and fix citation errors.
                </li>
              </ul>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Each citation reinforces your legitimacy in a specific location, helping boost your
                overall local SEO score.
              </p>

              <h3 className="font-medium mt-6 md:mt-7 lg:mt-8 mb-3 md:mb-4 text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-sequel text-black">
                Structured Data and On-Page Signals
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Schema markup (structured data) helps search engines better understand your business
                details. Think of it as an "extra label" for your content.
              </p>
              <ul className="list-none space-y-1 lg:space-y-[2px] mt-3 lg:mt-[12px]">
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Add LocalBusiness schema to your homepage and contact page.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Include business hours, menu items, prices, and service areas using JSON-LD
                  format.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Optimize your title tags and meta descriptions with local keywords and calls to
                  action.
                </li>
              </ul>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                These behind-the-scenes enhancements tell search engines exactly what you offer—and
                where.
              </p>

              <h3 className="font-medium mt-6 md:mt-7 lg:mt-8 mb-3 md:mb-4 text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-sequel text-black">
                Backlinks from Local Sources
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Local backlinks act as endorsements. When reputable local websites link to your
                site, it sends trust signals to Google.
              </p>
              <ul className="list-none space-y-1 lg:space-y-[2px] mt-3 lg:mt-[12px]">
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Join local chambers of commerce or business associations and request a link.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Sponsor or collaborate with local events, schools, or charities.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Reach out to local bloggers or news sites with press releases or guest post
                  pitches.
                </li>
              </ul>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Building local links doesn&apos;t just help SEO—it strengthens community presence
                too.
              </p>

              <h3 className="font-medium mt-6 md:mt-7 lg:mt-8 mb-3 md:mb-4 text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-sequel text-black">
                Social Media and Local Engagement
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Your social media channels also influence your local presence.
              </p>
              <ul className="list-none space-y-1 lg:space-y-[2px] mt-3 lg:mt-[12px]">
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Tag your location in posts and stories.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Share locally relevant updates, promotions, and customer interactions.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Encourage users to tag your business when they visit or review.
                </li>
              </ul>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Search engines recognize active, locally engaged businesses as more relevant for
                local searchers.
              </p>

              <h3 className="font-medium mt-6 md:mt-7 lg:mt-8 mb-3 md:mb-4 text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-sequel text-black">
                Performance, Speed, and SEO Tech Setup
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                A technically sound website is the foundation of any SEO strategy—including local.
              </p>
              <ul className="list-none space-y-1 lg:space-y-[2px] mt-3 lg:mt-[12px]">
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Use SEO-friendly URL structures and page titles.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Minimize broken links and optimize internal linking.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Set up local landing pages for each location or service area.
                </li>
                <li className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                  ✅ Enable SSL (https), optimize site speed, and use image alt tags.
                </li>
              </ul>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                A fast, accessible, well-structured website builds a strong SEO base and creates a
                better user experience.
              </p>

              <h3 className="font-medium mt-6 md:mt-7 lg:mt-8 mb-3 md:mb-4 text-[18px] md:text-[24px] lg:text-[28px] leading-[24px] md:leading-[30px] lg:leading-[36px] font-sequel text-black">
                Conclusion: Think Local, Win Global (One Neighborhood at a Time)
              </h3>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Local SEO is more than a marketing tactic—it's a growth engine for local businesses.
                From showing up on Google Maps to getting picked over your competitor, it's about
                being the business people find and trust when they need help nearby.
              </p>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                By claiming your Google Business Profile, collecting real reviews, writing local
                content, and optimizing your technical SEO, you're investing in visibility that
                compounds over time.
              </p>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                As mobile and voice search become more dominant, local SEO will only grow in
                importance. The businesses that act now will be the ones leading tomorrow.
              </p>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                Whether you're opening your doors or expanding to new areas, mastering local SEO
                gives your brand a powerful edge—right in your own backyard.
              </p>
            </div>
          </>
        ) : (
          <>
            <h2 className="mb-4 md:mb-5 lg:mb-6 font-medium text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[52px] font-sequel text-black">
              {post.title}
            </h2>
            <div className="space-y-4 md:space-y-5 lg:space-y-6">
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-black">
                {post.excerpt}
              </p>
              <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[24px] lg:leading-[26px] font-[400] font-sequel text-gray-600">
                Full content coming soon...
              </p>
            </div>
          </>
        )}
      </div>
    </article>
  );
}
