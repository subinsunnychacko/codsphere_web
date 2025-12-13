"use client";

import { cn } from "@/lib/utils";
import { MessageCircleQuestionMark } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactUsPopupBtn() {
  const [visible, setVisible] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  useEffect(() => {
    const handleScroll = () => {
      setVisible(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setVisible(false), 5000); // hides after 3s
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div
      className={cn(
        "fixed bottom-6 w-full transition-opacity duration-1000 ease-in-out pointer-events-none z-50",
        visible ? "opacity-100" : "opacity-0",
      )}
    >
      <div className="container mx-auto px-[20px] sm:px-[30px] lg:px-[90px] flex justify-end">
        <Link href={"/contact"}>
          <button
            className={cn(
              "w-fit rounded-full bg-gradient-to-r from-[#33FCFE] to-[#010B66] text-white font-medium text-[18px] lg:text-[20px] p-[3px] transition cursor-pointer",
              visible ? "pointer-events-auto" : "pointer-events-none",
            )}
          >
            <div className="flex items-center gap-2 rounded-full px-3 sm:px-5 py-3 bg-black hover:bg-gray-700 cursor-pointer">
              <MessageCircleQuestionMark />
              <span className="hidden sm:block">Contact Us</span>
            </div>
          </button>
        </Link>
      </div>
    </div>
  );
}
