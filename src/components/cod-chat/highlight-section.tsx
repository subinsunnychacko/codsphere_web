"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HighlightComp from "./highlight-comp";
import { useState } from "react";
import FreeTrialOverlay from "../start-free-trial/FreeTrialOverlay";

export default function HighlightSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FreeTrialOverlay open={open} onClose={() => setOpen(false)} />
      <HighlightComp
        content={
          <div className="max-w-xl">
            {/* Updated Heading with Cyan Highlight */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[42px] font-semibold leading-[1.2]">
              Not sure the automation is right for your business?{" "}
            </h2>

            <p className="mt-4 text-[16px] lg:text-[18px] font-light text-gray-300 leading-relaxed">
              We’ll review your site, understand your goals, and share honest, actionable feedback .
              No sales pitch, no obligation.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={() => setOpen(true)}
                className="w-full sm:w-auto cursor-pointer rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[16px] p-[2px]"
              >
                <div className="flex justify-center items-center gap-2 rounded-full px-6 py-3 bg-linear-to-l from-[#33fbfe] to-[#010B66]">
                  <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                    <ArrowRight size={16} />
                  </div>
                  <span className="font-medium">See CodChat in Action</span>
                </div>
              </button>

              <Link href="/services" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto cursor-pointer rounded-full border-2 border-white text-[15px] lg:text-[16px] font-medium flex justify-center items-center px-8 py-[14px] hover:bg-white hover:text-black transition-colors">
                  Talk to us
                </button>
              </Link>
            </div>
          </div>
        }
        image={
          <Image
            src={"/images/profile-pic/profile-pic-5.png"}
            alt="Audit Expert"
            fill
            className="object-cover"
            priority
          />
        }
      />
    </>
  );
}
