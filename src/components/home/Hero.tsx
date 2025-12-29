"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronRight, Play } from "lucide-react";
import web_page_logo_icon_white from "@/assets/web-page-logo-icon-white.svg";
import ai_hand_img from "@/assets/images/home/ai-hand.jpg";
import hero_video_poster from "@/assets/images/home/hero-video-poster.jpg";

export default function HomeHero() {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);
  const [isDesktopPlaying, setIsDesktopPlaying] = useState(false);
  const [isMobilePlaying, setIsMobilePlaying] = useState(false);

  useEffect(() => {
    // Auto-play desktop video when component mounts
    if (desktopVideoRef.current) {
      desktopVideoRef.current
        .play()
        .then(() => setIsDesktopPlaying(true))
        .catch(() => setIsDesktopPlaying(false));
    }

    // Auto-play mobile video when component mounts
    if (mobileVideoRef.current) {
      mobileVideoRef.current
        .play()
        .then(() => setIsMobilePlaying(true))
        .catch(() => setIsMobilePlaying(false));
    }
  }, []);

  const toggleDesktopPlay = () => {
    if (!desktopVideoRef.current) return;

    if (desktopVideoRef.current.paused) {
      desktopVideoRef.current.play();
      setIsDesktopPlaying(true);
    } else {
      desktopVideoRef.current.pause();
      setIsDesktopPlaying(false);
    }
  };

  const toggleMobilePlay = () => {
    if (!mobileVideoRef.current) return;

    if (mobileVideoRef.current.paused) {
      mobileVideoRef.current.play();
      setIsMobilePlaying(true);
    } else {
      mobileVideoRef.current.pause();
      setIsMobilePlaying(false);
    }
  };

  return (
    <section className="container-wrapper pt-4 sm:pt-6 lg:pt-8 pb-less">
      {/* Desktop & Tablet Layout (sm and above) */}
      <div className="hidden sm:flex justify-between gap-10 xl:gap-20 2xl:gap-40">
        <div className="w-[30%] lg:w-[40%]">
          {/* AI Info Card */}
          <div className="flex flex-col lg:flex-row gap-3 bg-[#F1F2F6] rounded-[32px] p-4">
            {/* Thumbnail */}
            <div className="relative w-full h-[150px] lg:w-[140px] lg:h-[140px] xl:w-[150px] xl:h-[150px] bg-white rounded-[21px] overflow-hidden shrink-0">
              <Image
                src={ai_hand_img}
                alt="Robotic hand holding AI letters"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Text and buttons */}
            <div className="flex flex-col justify-between pt-3 gap-3">
              <div className="h-full flex flex-col justify-center">
                <p className="text-[12px] leading-[15px] text-black font-sequel">
                  AI-powered ERP & CRM for smarter business. AUTOMATE tasks, predict trends, and
                  boost productivity. RUN faster, grow smarter.
                </p>
              </div>

              {/* Explore more button with chevrons */}
              <div className="flex items-center gap-2.5 bg-black text-black rounded-full h-[40px] xl:h-[70px] p-[5px]">
                <button className="flex-1 bg-white rounded-full h-full text-[12px] font-sequel hover:bg-gray-100 transition-colors">
                  Explore more
                </button>
                <div className="flex items-center justify-center h-full aspect-square rounded-full bg-white">
                  <div className="flex">
                    <ChevronRight className="w-3 h-3 -mr-1.5" />
                    <ChevronRight className="w-3 h-3 -mr-1.5" />
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pills*/}
          <div className="mt-12 flex flex-wrap gap-1 w-[330%] lg:w-[158%] xl:w-full">
            <h3 className="px-8 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
              Automate
            </h3>
            <h3 className="px-8 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
              Optimize
            </h3>
            <h3 className="px-6 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
              Scale
            </h3>
            <h3 className="px-7 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
              Accelerate
            </h3>
            <h3 className="px-6 py-2.5 border border-black rounded-full text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
              Integrate
            </h3>
          </div>

          {/* Subtitle*/}
          <div className="mt-5  w-[330%] lg:w-[260%] xl:w-[160%] 2xl:w-full">
            <p className="text-[16px] leading-[22px] text-[#525252]">
              At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart invoicing
              tools, and full-funnel digital strategies so your business runs smarter, not harder.
            </p>
          </div>

          <div className="w-[330%] lg:w-[260%] xl:w-[260%] 2xl:w-[180%] mt-7 lg:mt-12">
            <h1
              className="font-sequel text-[30px] lg:text-[50px] leading-[39px] lg:leading-[59px] font-normal text-black"
              style={{ fontWeight: 415 }}
            >
              AI ERP, CRM & Automation Experts Driving Smarter Business Efficiency
            </h1>
          </div>
        </div>

        {/* Video Container */}
        <div className="w-[70%] lg:w-[60%]">
          <div className="relative w-full aspect-550/400">
            {/* CodSphere Logo Icon */}
            <div className="absolute top-0 right-0 w-[10%] h-[15%] flex justify-end items-start">
              <div className="bg-black rounded-full w-[90%] aspect-square flex justify-center items-center z-20">
                <Image
                  src={web_page_logo_icon_white}
                  alt="CodSphere Icon"
                  className="object-contain h-[50%] aspect-square"
                  priority
                />
              </div>
            </div>
            {/* Clipped Video */}
            <div className="absolute inset-0">
              <video
                ref={desktopVideoRef}
                className="w-full h-full object-cover [clip-path:url(#heroVideoShape)]"
                poster={hero_video_poster.src}
                onClick={toggleDesktopPlay}
                playsInline
                muted
                loop
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
              </video>
              <svg width="0" height="0">
                <defs>
                  <clipPath id="heroVideoShape" clipPathUnits="objectBoundingBox">
                    <path
                      d="
                        M 0.07,0
                        Q 0,0 0,0.1
                        V 0.585
                        Q 0,0.685 0.07,0.685
                        H 0.25
                        Q 0.325,0.685 0.325,0.785
                        V 0.9
                        Q 0.325,1 0.395,1
                        H 0.925
                        Q 1,1 1,0.9
                        V 0.2
                        Q 1,0.15 0.945,0.15
                        H 0.96
                        Q 0.89,0.15 0.89,0.05
                        H 0.89
                        Q 0.89,0 0.835,0
                        Z
                      "
                    />
                  </clipPath>
                </defs>
              </svg>
              {/* Play button */}
              {!isDesktopPlaying && (
                <button
                  onClick={toggleDesktopPlay}
                  aria-label="Play video"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15%] lg:w-[10%] aspect-square rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10 cursor-pointer"
                >
                  <Play className="w-full" fill="black" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout (below sm) */}
      <div className="sm:hidden flex flex-col space-y-6 sm:space-y-8">
        {/* AI Info Card - Mobile */}
        <div className="w-full flex gap-3 sm:gap-4 rounded-[20px] p-3 bg-[#F1F2F6]">
          {/* Thumbnail - Fixed square aspect ratio */}
          <div className="relative w-[140px] h-[140px] sm:w-[120px] sm:h-[123px] md:w-[151px] md:h-[154px] bg-white rounded-[21px] overflow-hidden shrink-0 mx-auto sm:mx-0">
            <Image
              src={ai_hand_img}
              alt="Robotic hand holding AI letters"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text and buttons */}
          <div className="flex flex-col justify-between py-1 sm:py-2 flex-1">
            <div className="h-full flex flex-col justify-center">
              <p className="text-[11px] sm:text-[12px] leading-[14px] sm:leading-[15px] text-black font-sequel mb-3 sm:mb-0 text-left">
                AI-powered ERP & CRM for smarter business. AUTOMATE tasks, predict trends, and boost
                productivity. RUN faster, grow smarter.
              </p>
            </div>

            {/* Explore more button with chevrons */}
            <div className="flex items-center gap-2.5 bg-black text-black rounded-full h-[40px] xl:h-[50px] p-[5px] max-w-[150px]">
              <button className="flex-1 bg-white rounded-full h-full text-[12px] font-sequel hover:bg-gray-100 transition-colors">
                Explore more
              </button>
              <div className="flex items-center justify-center h-full aspect-square rounded-full bg-white">
                <div className="flex">
                  <ChevronRight className="w-3 h-3 -mr-1.5" />
                  <ChevronRight className="w-3 h-3 -mr-1.5" />
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Pills - Mobile */}
        <div className="w-full flex flex-wrap gap-1">
          <h3 className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Automate
          </h3>
          <h3 className="px-4 sm:px-6 md:px-8 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Optimize
          </h3>
          <h3 className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Scale
          </h3>
          <h3 className="px-4 sm:px-5 md:px-7 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Accelerate
          </h3>
          <h3 className="px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 border border-black rounded-full text-[12px] sm:text-[14px] md:text-[15px] font-sequel font-medium hover:bg-black hover:text-white transition-colors cursor-pointer bg-white">
            Integrate
          </h3>
        </div>

        {/* Subtitle - Mobile */}
        <div className="w-full">
          <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[20px] sm:leading-[21px] md:leading-[22px] text-[#525252] font-sequel font-light text-left">
            At CodSphere, we build next-gen CRM systems, scalable ERP platforms, smart invoicing
            tools, and full-funnel digital strategies so your business runs smarter, not harder.
          </p>
        </div>

        {/* Video Container - Mobile */}
        <div className="w-full">
          <div className="relative w-full aspect-550/400">
            {/* CodSphere Logo Icon */}
            <div className="absolute top-0 right-0 w-[10%] h-[15%] flex justify-end items-start">
              <div className="bg-black rounded-full w-[90%] aspect-square flex justify-center items-center z-20">
                <Image
                  src={web_page_logo_icon_white}
                  alt="CodSphere Icon"
                  className="object-contain h-[50%] aspect-square"
                  priority
                />
              </div>
            </div>
            {/* Simplified Video for Mobile */}
            <div className="absolute inset-0">
              <video
                ref={mobileVideoRef}
                className="w-full h-full object-cover [clip-path:url(#heroVideoShape_sm)]"
                poster={hero_video_poster.src}
                onClick={toggleMobilePlay}
                playsInline
                muted
                loop
              >
                <source src="/videos/hero-video.mp4" type="video/mp4" />
              </video>
              <svg width="0" height="0">
                <defs>
                  <clipPath id="heroVideoShape_sm" clipPathUnits="objectBoundingBox">
                    <path
                      d="
                        M 0.07,0
                        Q 0,0 0,0.1
                        V 0.9
                        Q 0,1 0.07,1
                        H 0.93
                        Q 1,1 1,0.9
                        V 0.2
                        Q 1,0.15 0.945,0.15
                        H 0.96
                        Q 0.89,0.15 0.89,0.05
                        H 0.89
                        Q 0.89,0 0.835,0
                        Z
                      "
                    />
                  </clipPath>
                </defs>
              </svg>
              {/* Play button */}
              {!isMobilePlaying && (
                <button
                  onClick={toggleMobilePlay}
                  aria-label="Play video"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[15%] aspect-square rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors shadow-lg z-10"
                >
                  <Play className="w-full aspect-square" fill="black" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Main Headline - Mobile */}
        <div className="w-full">
          <h1
            className="font-sequel text-[24px] sm:text-[32px] md:text-[40px] leading-[28px] sm:leading-[38px] md:leading-[48px] font-normal text-black text-left"
            style={{ fontWeight: 415 }}
          >
            AI ERP, CRM & Automation Experts Driving Smarter Business Efficiency
          </h1>
        </div>
      </div>
    </section>
  );
}
