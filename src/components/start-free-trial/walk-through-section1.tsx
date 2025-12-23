"use client";
import { ArrowRight, PauseIcon, PlayIcon } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";

export default function WalkThroughSection1() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const toggleVideoPlay = () => {
    if (!videoRef.current) return;

    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsVideoPlaying(true);
    } else {
      videoRef.current.pause();
      setIsVideoPlaying(false);
    }
  };

  return (
    <section className="bg-black bg-dots text-white relative">
      <div className="relative z-10 container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4 md:pb-12 text-white">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]">
            Learn & Grow with Codsphere
          </p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            HOW IT WORKS — "Your Setup in Three Steps"
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Get hands-on within minutes. No coding. No setup fees.
          </p>
        </div>

        {/* Video section */}
        <div className="mb-12 flex justify-center relative h-124 rounded-xl overflow-hidden">
          <button
            className="absolute left-8 bottom-8 z-10 flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-black cursor-pointer"
            aria-label="Play video"
            onClick={toggleVideoPlay}
          >
            {!isVideoPlaying ? (
              <PlayIcon size={28} strokeWidth={2} className="font-bold text-black" />
            ) : (
              <PauseIcon size={28} strokeWidth={2} className="font-bold text-black" />
            )}
          </button>
          <video
            ref={videoRef}
            loop
            muted
            playsInline
            className="absolute top-0 left-0 w-full h-full object-cover"
            poster="/images/home/work-samples/work-sample-2.jpg"
          >
            <source src="/videos/hero-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Steps */}
        <div className="flex justify-center mb-5">
          <div className="text-start">
            <p className="text-[20px] font-light">
              <span className="block">
                Step 1: Create your account and personalize your workspace.
              </span>
              <span className="block">
                Step 2: Import your customer data or sync existing tools.
              </span>
              <span className="block">
                Step 3: Start automating — from lead management to invoicing.
              </span>
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-2xl font-bold mb-4">Ready to see why 100+ teams trust CodSphere?</p>
          <Link href="/success-stories">
            <button className="rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
              <div className="flex justify-center items-center gap-3 rounded-full px-4 py-3 bg-black hover:bg-gray-800">
                <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                  <ArrowRight />
                </div>
                Explore our Success Stories
              </div>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
