"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="
        relative min-h-screen w-full overflow-hidden
        flex items-center justify-center
        -mt-20 sm:-mt-[88px] lg:-mt-[104px]
        pt-[80px] md:pt-[88px] lg:pt-[104px]
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
        <source src="/videos/Solutions_Hero_Video.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-black/50" />

      <div
        className="
          relative z-10 container-wrapper 
          w-full py-10 md:py-20
          flex flex-col md:flex-row
          justify-center md:justify-between
          items-center
        "
      >
        {/* CONTENT BOX */}
        <div className="text-white w-full md:w-8/12 lg:w-6/12 flex flex-col gap-6 text-center md:text-left">
          <h1
            className="
              font-sequel font-bold leading-tight
              text-[28px]
              sm:text-[34px]
              md:text-[38px]
              lg:text-[42px]
              xl:text-[46px]
            "
          >
            Most trade websites don’t work. This one is built around real pain points.
          </h1>

          <p
            className="
              leading-7 opacity-90
              text-[15px]
              sm:text-[16px]
              lg:text-[18px]
              max-w-xl mx-auto md:mx-0
            "
          >
            We studied how tradespeople get work, lose leads, and build trust then designed a
            template that fixes the gaps.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md md:max-w-none justify-center md:justify-start mt-4">
            {/* EXPLORE BUTTON */}
            <Link href="/trade-demo/home" className="w-full md:w-auto">
              <button
                className="
                  w-full md:w-auto h-[56px]
                  rounded-full
                  bg-linear-to-r from-[#33FCFE] to-[#010B66]
                  text-white text-[14px] md:text-[15px]
                  p-[2px]
                  transition-transform active:scale-95
                "
              >
                <div
                  className="
                    flex h-full items-center justify-center gap-3
                    rounded-full px-6
                    bg-linear-to-l from-[#33fbfe] to-[#010B66]
                  "
                >
                  <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] rounded-full p-0.5 shrink-0">
                    <ArrowRight size={18} />
                  </div>
                  <span className="whitespace-normal sm:whitespace-nowrap">
                    Explore the template
                  </span>
                </div>
              </button>
            </Link>

            {/* FREE TRIAL BUTTON */}
            <Link href="/cod-chat" className="w-full md:w-auto">
              <button
                className="
                  w-full md:w-auto h-[56px]
                  rounded-full
                  border-2 border-white
                  text-[14px] md:text-[15px]
                  px-8
                  flex justify-center items-center
                  hover:bg-white hover:text-black
                  transition-all
                  active:scale-95
                "
              >
                Capture leads with CodChat
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
