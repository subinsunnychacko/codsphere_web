"use client";

import Image from "next/image";
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import voltveraImage from "@/assets/images/case-studies/voltvera-case-study.png";
import sortifyImage from "@/assets/images/case-studies/sortify-case-study.png";

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
      fd: "Proven Impact with CodSphere’s Smart MLM Engine",
    },
    {
      id: 2,
      company: "Sortify Technologies Inc.",
      title: "From Paper Logs To Cloud Intelligence",
      fd: "Making Mailrooms Smarter, Not Busier",
      description:
        "A digital transformation success story from Sortify -reducing errors, cutting costs, and delighting users.",
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
    <section id="in-action" className="relative bg-black">
      <div className="container-wrapper pt-12 pb-20 sm:pt-16 sm:pb-28">
        <div className="text-center mx-auto pb-6 sm:pb-12 text-white max-w-4xl">
          <p className="font-damion text-2xl sm:text-3xl text-[#828282]">Our Ecosystem in Action</p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-2">
            Case Studies: Where Innovation Meets Impact
          </h2>
          <p className="mt-2 text-base sm:text-lg font-light">
            Explore how CodeSphere's technology has helped businesses streamline operations,
            automate workflows, and scale faster — from manufacturing to modern SaaS.
          </p>
        </div>

        <div className="relative flex justify-center">
          <div className="w-full sm:w-5/6 lg:w-4/6">
            <div className="rounded-xl p-0.5 bg-gradient-to-r from-[#33FCFE] to-[#010B66]">
              <div className="rounded-lg bg-black overflow-hidden flex flex-col">
                <div className="relative w-full aspect-[16/9] bg-slate-900 overflow-hidden group">
                  <Image
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/70 to-transparent px-4 py-6 sm:px-6 sm:py-8">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{study.title}</h3>
                    <p className="text-gray-300 text-sm sm:text-base">{study.company}</p>
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-[#33FCFE] to-[#010B66]"></div>

                <div className="p-4 sm:p-8">
                  <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 py-6">
                    {study.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="flex flex-col items-center text-center gap-2"
                      >
                        <Image
                          src={stat.icon}
                          alt={`${stat.label}-icon`}
                          width={40}
                          height={40}
                          className="object-contain"
                        />
                        <p className="font-bold text-white text-lg">{stat.value}</p>
                        <p className="text-gray-300 text-sm">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col items-center text-center py-5">
                    <p className="mb-4 text-white font-semibold text-xl sm:text-3xl">{study.fd}</p>
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                      {study.description}
                    </p>

                    <Link href={study.hrefNav} className="w-full sm:w-auto">
                      <button className="w-full sm:w-auto rounded-full bg-gradient-to-r from-[#33FCFE] to-[#010B66] text-white text-sm sm:text-base px-6 py-3 hover:brightness-110 transition flex items-center justify-center gap-3">
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        View Complete Study
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center gap-2 mt-6">
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
