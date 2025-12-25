"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import voltveraImage from "@/assets/images/case-studies/voltvera-case-study.png"
import sortifyImage from "@/assets/images/case-studies/sortify-case-study.png"

export default function InActionSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const caseStudies = [
    {
      id: 1,
      company: "Voltvera India Pvt. Ltd.",
      title: "Smart MLM Automation at Scale",
      description:
        "Voltvera India transformed from manual, error-prone MLM operations to a fully automated, scalable ecosystem, built on CodeSphere's CRM + ERP suite.",
      video: "/videos/hero-video.mp4",
      image: voltveraImage,
      hrefNav: "/case-studies/voltvera",
      stats: [
        { icon: "/icons/cpu.svg", value: "100%", label: "Automation" },
        { icon: "/icons/chart-bar.svg", value: "+85%", label: "Transparency" },
        { icon: "/icons/users.svg", value: "25K+", label: "Concurrent Users" },
        { icon: "/icons/rocket.svg", value: "2x", label: "Faster Expansion" },
      ],
      fd: "Proven Impact with CodSphere’s Smart MLM Engine"
    },
    {
      id: 2,
      company: "Sortify Technologies Inc.",
      title: "From Paper Logs To Cloud Intelligence",
      fd: "Making Mailrooms Smarter, Not Busier",
      description:
        "Sortify moved from manual warehouse logs to real-time cloud analytics powered by CodeSphere.",
      video: "/videos/hero-video.mp4",
      image: sortifyImage,
      hrefNav: "/case-studies/sortify",
      stats: [
        { icon: "/icons/timer.svg", value: "70% Faster", label: "Processing" },
        { icon: "/icons/message.svg", value: "80% Fewer", label: "Inquiry Calls" },
        { icon: "/icons/tick.svg", value: "99% Tracking", label: "Accuracy" },
        { icon: "/icons/cpu.svg", value: "60% Productivity", label: "Boost" },
      ],
    },
  ];


  const study = caseStudies[currentSlide];

  return (
    <section className="relative bg-black">
      <div className="container-wrapper pt-less pb-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 mx-auto pb-4 md:pb-12 text-white">
          <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]">
            Our Ecosystem in Action
          </p>
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Case Studies: Where Innovation Meets Impact
          </h2>
          <p className="mt-2 text-[20px] font-light">
            Explore how CodeSphere's technology has helped businesses streamline operations,
            automate workflows, and scale faster — from manufacturing to modern SaaS.
          </p>
        </div>

        {/* Case Study Card with Gradient Border */}
        <div className="relative flex justify-center">
          <div className="w-full sm:w-4/6">
            <div className="rounded-xl p-0.5 bg-linear-to-r from-[#33FCFE] to-[#010B66]">
              {/* <div className="rounded-[11px] bg-black p-0 overflow-hidden"> */}
              <div className="rounded-[11px] bg-black overflow-hidden h-[720px] sm:h-[760px] lg:h-[800px] flex flex-col">
                {/* Showcase Image Container */}
                <div className="relative w-full aspect-video bg-slate-900 overflow-hidden group">
                  {/* <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                    <source src={study.video} type="video/mp4" />
                  </video> */}
                  <Image alt="" src={study?.image} className="w-full h-full object-cover">

                  </Image>
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black via-black/70 to-transparent pt-12 pb-6 px-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">{study.title}</h3>
                    <p className="text-gray-300 text-sm mb-1">{study.company}</p>
                  </div>
                </div>

                <div className="h-2 bg-linear-to-r from-[#33FCFE] to-[#010B66]"></div>

                <div className="p-8 sm:p-10">
                  <div className="grid grid-cols-4 gap-4 py-8">
                    {study.stats.map((stat, index) => {
                      const Icon = stat.icon;
                      return (
                        <div
                          key={stat.label}
                          className="flex flex-col items-center text-center pb-6 gap-4"
                        >
                          <div className="text-cyan-400">
                            <Image
                              src={stat.icon}
                              alt={`${stat.label}-icon`}
                              width={40}
                              height={40}
                              className="w-[35px] h-[35px] md:w-10 md:h-10 object-contain"
                            />
                          </div>
                          <div>
                            <p className="font-bold text-white text-lg">{stat.value}</p>
                            <p className="font-bold text-white text-lg">{stat.label}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Case Study Content */}
                  <div className="flex flex-col items-center text-center">
                    <p className="mb-4 text-white font-semibold text-3xl">
                      {study.fd}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-8">
                      {study.description}
                    </p>

                    {/* CTA Button */}
                    {/* <div className="flex justify-center"> */}
                    <Link href={study.hrefNav}>
                      <button className="w-full rounded-full bg-linear-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
                        <div className="flex justify-center items-center gap-3 rounded-full px-4 py-3 bg-black hover:bg-gray-800">
                          <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] text-white rounded-full p-0.5">
                            <ArrowRight />
                          </div>
                          View Complete Study
                        </div>
                      </button>
                    </Link>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination Dots */}
            <div className="flex justify-center gap-3 mt-12">
              {caseStudies.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`rounded-full transition-all ${
                    index === currentSlide
                      ? "w-3 h-3 bg-cyan-400"
                      : "w-3 h-3 bg-gray-500 hover:bg-gray-400 cursor-pointer"
                  }`}
                  aria-label={`Go to case study ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
