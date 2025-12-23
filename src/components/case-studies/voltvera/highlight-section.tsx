import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HighlightComp from "@/components/highlight-comp";

export default function HighlightSection() {
  return (
    <HighlightComp
      content={
        <div>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Experience the impact of human-driven technology.
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Behind every CodSphere system is a team of creators, engineers, and innovators —
            building tools that help real people work smarter, faster, and together.
          </p>

          <div className="flex flex-col 2xl:flex-row gap-3 mt-5">
            <Link href="/contact" className="w-full 2xl:w-1/2">
              <button className="w-full cursor-pointer rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
                <div className="flex justify-center items-center gap-3 rounded-full px-5 py-3 bg-linear-to-l from-[#33fbfe] to-[#010B66]">
                  <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                    <ArrowRight />
                  </div>
                  Talk to Us
                </div>
              </button>
            </Link>
            <Link href="/start-free-trial" className="w-full 2xl:w-1/2">
              <button className="w-full cursor-pointer rounded-full border-2 border-white lg:text-[18px] flex justify-center items-center gap-3 px-5 py-3 hover:bg-white hover:text-black">
                Start Your Free Trial
              </button>
            </Link>
          </div>
        </div>
      }
      image={
        <Image
          src={"/images/profile-pic/person-1.png"}
          alt="CodeSphere team member"
          fill
          className="object-contain"
          priority
        />
      }
    />
  );
}
