import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import hand_vector_img from "@/assets/images/home/hand.png";
import hand_from_top_vector_img from "@/assets/images/home/hand-from-top.png";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden -mt-20 sm:-mt-[88px] lg:-mt-[104px] md:pt-[88px] lg:pt-[104px] pb-20 bg-black bg-linear-to-r from-black to-[#0664a7]">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 container-wrapper h-full flex flex-col-reverse md:flex-row justify-between pt-5 sm:pt-10 lg:pt-20">
        <div className="text-white md:w-6/12 lg:w-5/12 flex flex-col gap-9 -mt-15 md:mt-0 text-center md:text-start">
          <h1 className="font-sequel text-[24px] sm:text-[42px] lg:text-[48px] leading-[39px] lg:leading-[59px] font-bold">
            AI ERP, CRM & Automation Experts Driving Smarter Business Efficiency
          </h1>
          <p className="text-[14px] sm:text-[18px] lg:text-[20px] leading-7">
            At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart invoicing
            tools, and full-funnel digital strategies so your business runs smarter, not harder.
          </p>
          <div className="flex flex-col 2xl:flex-row gap-3">
            <Link href="/services">
              <button className="w-full cursor-pointer rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
                <div className="flex justify-center items-center gap-3 rounded-full px-5 py-3 bg-linear-to-l from-[#33fbfe] to-[#010B66]">
                  <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                    <ArrowRight />
                  </div>
                  Discover Our Expertise
                </div>
              </button>
            </Link>
            <Link href="/start-free-trial">
              <button className="w-full cursor-pointer rounded-full border-2 border-white lg:text-[18px] flex justify-center items-center gap-3 px-5 py-3 hover:bg-white hover:text-black">
                Start Your Free Trial
              </button>
            </Link>
          </div>
        </div>
        <div className="md:w-5/12 lg:w-1/2 flex justify-center md:justify-end items-start -mt-5 sm:-mt-10 lg:-mt-20">
          <Image
            src={hand_vector_img}
            alt="Codsphere hand"
            className="object-contain hidden md:block"
            priority
          />
          <Image
            src={hand_from_top_vector_img}
            alt="Codsphere hand"
            className="object-contain md:hidden"
            priority
          />
        </div>
      </div>
    </section>
  );
}
