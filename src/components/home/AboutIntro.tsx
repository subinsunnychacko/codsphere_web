import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import group_discussion_img from "@/assets/images/group-discussion.jpg";

export default function AboutIntro() {
  return (
    <section className="container-wrapper py-less">
      {/* Header */}
      <p className="font-damion text-[30px] sm:text-[35px] leading-[38px] sm:leading-[45px] text-[#D3D3D3] mb-2 sm:mb-4">
        About Codsphere
      </p>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-8">
        {/* Left Column - Text Content */}
        <div className="">
          {/* Main Text */}
          {/* <div className="text-[20px] md:text-[25px] leading-[28px] sm:leading-[32px] md:leading-[36px] text-[#525252]"> */}
          <div className="text-[20px] lg:text-[25px] leading-[28px] sm:leading-[32px] md:leading-[36px] text-[#525252]">
            <p className="font-semibold">
              Hi We're{" "}
              <span className="font-damion font-normal text-[20px] lg:text-[25px]">
                Cod Sphere,
              </span>
            </p>
            <p className="font-normal">
              Digital Infrastructure for the We're a Vancouver-based technology company delivering
              custom CRM, ERP, and business automation tools that simplify workflows and help you
              scale faster. From smart invoicing apps to integrated marketing systems, we specialize
              in transforming business challenges into efficient digital ecosystems.
              <br />
              Whether you're a founder building from scratch or a growing company looking to
              optimize backend processes, we bring the tech stack and strategy to make it happen.
            </p>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <Link href="/contact">
              <button className="rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
                <div className="flex items-center gap-3 rounded-full px-4 py-3 bg-black">
                  <div className="bg-white text-black rounded-full p-0.5">
                    <ArrowRight />
                  </div>
                  Start Your Free Trial
                </div>
              </button>
            </Link>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="flex justify-center lg:justify-end">
          <figure className="relative w-full h-[408px] overflow-hidden rounded-[34px]">
            <Image
              src={group_discussion_img}
              alt="Codsphere team working together"
              fill
              className="object-cover"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
