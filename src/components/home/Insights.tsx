import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Insights() {
  return (
    <section className="bg-black text-white bg-dots">
      <div className="container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]">Insights</p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Startup or Scaleup — We've Got the Stack.
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Explore the four pillars we build around — and why brands keep coming back
          </p>
        </div>

        {/* cards */}
        <div className="relative flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 pt-4 md:pt-12 pb-10">
          {/* LEFT: feature (Latest) */}
          <article className="relative lg:w-2/3">
            {/* background image */}
            <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full rounded-sm md:rounded-xl overflow-hidden">
              <Image
                src="/images/home/blog-section-1.jpg" // <- put your image
                alt="Group of people having a discussion around a table in an office setting."
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* soft darken overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
              {/* badge */}
              <span className="absolute left-2.5 top-2.5 rounded-md bg-[#608BF3] px-3 py-1 text-[15px] font-semibold">
                Latest
              </span>
              {/* title over image */}
              <h4 className="w-2/3 absolute bottom-2.5 sm:bottom-6 left-2.5 sm:left-6 right-4 sm:right-6 text-[15px] sm:text-[23px] md:text-[25px] leading-5 sm:leading-[27px] md:leading-[29px] font-light drop-shadow">
                The Hidden ROI of Automated Invoicing for Small Teams
              </h4>
            </div>

            {/* view all guides link */}
            <div className="mt-3">
              <ViewLink href="/blog">View All Guides</ViewLink>
            </div>
          </article>

          {/* RIGHT: blog card */}
          <article className="rounded-sm bg-black/40 ring-1 ring-white/10 lg:w-1/3">
            {/* image */}
            <div className="relative aspect-[16/10] rounded-sm md:rounded-xl overflow-hidden">
              <Image
                src="/images/home/blog-section-2.jpg" // <- replace with your image
                alt="Close-up of a person using a mobile phone with UX wireframes on a whiteboard in the background."
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <span className="absolute left-2.5 top-2.5 rounded-md bg-black px-3 py-1 text-[15px] font-semibold">
                Blog
              </span>
            </div>

            {/* content */}
            <div className="pt-2.5 flex flex-col gap-2.5">
              <div className="flex items-center justify-between text-[15px] leading-[18px] text-white">
                <span>Updated: 07.26.2025</span>
                <span>By SohYoon Atac</span>
              </div>

              <h3 className="text-[25px] leading-[29px] font-semibold">
                Why Your CRM Should Be Built Around Your Sales Process – Not the Other Way Around
              </h3>

              <p className="max-w-[420px] text-[16px] leading-[19px] text-white">
                Spoiler: Looking good isn’t enough. Your site should convert, automate, and talk to
                your CRM. Here’s how to make it pull its weight.
              </p>

              <div className="">
                <ViewLink href="/blog">View All Posts</ViewLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function ViewLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-[15px] font-semibold hover:underline"
    >
      {children}
      <span className="inline-grid place-items-center h-[17px] w-[17px] rounded-full bg-white text-black">
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </Link>
  );
}
