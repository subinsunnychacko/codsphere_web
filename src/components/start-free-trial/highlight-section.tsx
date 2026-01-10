"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HighlightComp from "@/components/highlight-comp";
import { useState } from "react";
import FreeTrialOverlay from "./FreeTrialOverlay";

export default function HighlightSection() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <FreeTrialOverlay open={open} onClose={() => setOpen(false)} />
      <HighlightComp
        content={
          <div>
            <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
              Let's Build Your Growth Engine with CodSphere.
            </h2>
            <p className="mt-2 text-[20px] font-light">
              Experience the power of unified CRM + ERP. Manage leads, automate workflows, and scale
              faster — all in one secure platform.
            </p>

            <div className="flex flex-col 2xl:flex-row gap-3 mt-5">
              <Link href="" className="w-full 2xl:w-1/2">
                <button
                  onClick={() => setOpen(true)}
                  className="w-full cursor-pointer rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]"
                >
                  <div className="flex justify-center items-center gap-3 rounded-full px-5 py-3 bg-linear-to-l from-[#33fbfe] to-[#010B66]">
                    <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                      <ArrowRight />
                    </div>
                    Start Your 14-Day Free Trial
                  </div>
                </button>
              </Link>
              <Link href="/contact" className="w-full 2xl:w-1/2">
                <button className="w-full cursor-pointer rounded-full border-2 border-white lg:text-[18px] flex justify-center items-center gap-3 px-5 py-3 hover:bg-white hover:text-black">
                  Request a Demo
                </button>
              </Link>
            </div>

            <p className="text-sm text-gray-400 mt-2">
              Trusted by businesses in 10+ countries. Built for modern growth.
            </p>
          </div>
        }
        image={
          <Image
            src={"/images/profile-pic/person-2.png"}
            alt="CodeSphere team member"
            fill
            className="object-cover"
            priority
          />
        }
      />
    </>
  );
}
