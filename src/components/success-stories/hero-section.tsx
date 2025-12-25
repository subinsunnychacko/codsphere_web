import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import cloud_img from "@/assets/images/success-stories/cloud.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden -mt-20 sm:-mt-[88px] lg:-mt-[104px] pt-60 md:pt-[88px] lg:pt-[104px] pb-20 bg-black">
      <div className="absolute inset-0 ">
        <Image
          src={cloud_img}
          alt="CodeSphere cloud vector image"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 container-wrapper h-full flex justify-center pt-5 sm:pt-10 lg:pt-20">
        <div className="text-white w-full md:w-3/5 xl:w-1/2 2xl:w-1/3 flex flex-col gap-9 text-center">
          <h1 className="font-sequel text-[24px] sm:text-[42px] lg:text-[48px] leading-[39px] lg:leading-[59px] font-bold">
            We don't just build software — we engineer ecosystems.
          </h1>
          <p className="text-[14px] sm:text-[18px] lg:text-[20px] leading-7">
            Automations, CRMs, and integrations that talk to each other. Because scaling a business
            shouldn't mean juggling systems.
          </p>
          <div className="flex flex-col gap-3">
            <Link href="/contact">
              <button className="w-full cursor-pointer rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
                <div className="flex justify-center items-center gap-3 rounded-full px-5 py-3 bg-linear-to-l from-[#33fbfe] to-[#010B66]">
                  <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                    <ArrowRight />
                  </div>
                  Test our CRM
                </div>
              </button>
            </Link>
            <Link href="#in-action">
              <button className="w-full cursor-pointer rounded-full border-2 border-white lg:text-[18px] flex justify-center items-center gap-3 px-5 py-3 hover:bg-white hover:text-black">
                See What We've Built
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
