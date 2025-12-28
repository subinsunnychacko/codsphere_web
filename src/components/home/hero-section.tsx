import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import hand_vector_img from "@/assets/images/home/hand.png";
import hand_from_top_vector_img from "@/assets/images/home/hand-from-top.png";

export default function HeroSection() {
  return (
    <section
      className="
        relative min-h-screen w-full overflow-hidden
        -mt-20 sm:-mt-[88px] lg:-mt-[104px]
        md:pt-[88px] lg:pt-[104px]
        pb-14
        bg-black bg-linear-to-r from-black to-[#0664a7]
      "
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      {/* ⬇️ CENTER + LOWER CONTENT */}
      <div
        className="
    relative z-10 container-wrapper
    flex flex-col-reverse md:flex-row
    justify-center md:justify-between
    items-center
  "
      >
        {/* LEFT CONTENT */}
        <div className="text-white md:w-6/12 lg:w-5/12 flex flex-col gap-5 text-center md:text-start">
          <h1
            className="
    font-sequel font-bold leading-tight
    text-[26px]
    sm:text-[34px]
    md:text-[38px]
    lg:text-[42px]
    xl:text-[46px]
  "
          >
            AI ERP, CRM & Automation Experts Driving Smarter Business Efficiency
          </h1>

          <p
            className="
    leading-7
    text-[14px]
    sm:text-[15px]
    md:text-[16px]
    lg:text-[17px]
  "
          >
            At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart invoicing
            tools, and full-funnel digital strategies so your business runs smarter, not harder.
          </p>

          <div className="flex flex-col lg:flex-row gap-3 w-full">
            {/* DISCOVER BUTTON */}
            <Link href="/services" className="block w-full lg:flex-1">
              <button
                className="
        w-full
        h-[52px]
        rounded-full
        bg-linear-to-r from-[#33FCFE] to-[#010B66]
        text-white
        text-[15px]
        p-[3px]
      "
              >
                <div
                  className="
          flex h-full items-center justify-center gap-3
          rounded-full
          px-4
          bg-linear-to-l from-[#33fbfe] to-[#010B66]
        "
                >
                  <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] rounded-full p-0.5 shrink-0">
                    <ArrowRight />
                  </div>
                  <span className="whitespace-nowrap">Discover Our Expertise</span>
                </div>
              </button>
            </Link>

            {/* START FREE TRIAL */}
            <Link href="/start-free-trial" className="block w-full lg:flex-1">
              <button
                className="
        w-full
        h-[52px]
        rounded-full
        border-2 border-white
        text-[15px]
        flex justify-center items-center
        hover:bg-white hover:text-black
        whitespace-nowrap
      "
              >
                Start Your Free Trial
              </button>
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-5/12 lg:w-1/2 flex justify-center md:justify-end items-start">
          <Image
            src={hand_vector_img}
            alt="Codsphere hand"
            className="
      object-contain hidden md:block
      max-h-[480px]          /* 100% zoom – SAME as now */
      xl:max-h-[540px]       /* kicks in at wider viewports (≈90%) */
      2xl:max-h-[580px]      /* large monitors */
    "
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
