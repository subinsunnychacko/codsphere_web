"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const slides = [
  {
    src: "/images/home/work-samples/work-sample-14.png",
    stat: "150+ Deployments",
    desc: "Websites built and managed",
  },
  {
    src: "/images/home/work-samples/work-sample-16.png",
    stat: "4+ Years Experience",
    desc: "Years of building, breaking, fixing, and scaling digital systems",
  },
];

export default function WorkShowcaseCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % total);
    }, 5500);
    return () => clearInterval(interval);
  }, [total]);

  const next = () => setCurrentSlide((prev) => (prev + 1) % total);
  const prev = () => setCurrentSlide((prev) => (prev - 1 + total) % total);

  return (
    <section className="bg-white py-16 overflow-hidden">
      <div className="container-wrapper">
        {/* Header */}
        <div className="text-center mb-12 px-4">
          <h2 className="font-sequel text-black text-[26px] sm:text-[30px] lg:text-[42px]">
            Crafted Digital Experiences
          </h2>
          <p className="mt-3 text-gray-600 max-w-xl mx-auto">
            Built for speed. Designed for scale. Trusted worldwide.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          {/* Slides wrapper */}
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="min-w-full flex flex-col items-center px-6">
                {/* Image container with fixed aspect ratio */}
                <div className="w-full max-w-4xl aspect-[16/9] relative overflow-hidden rounded-2xl">
                  <Image src={slide.src} alt={slide.stat} fill className="object-cover" priority />
                </div>

                {/* Text below image */}
                <div className="mt-8 sm:mt-10 text-center max-w-md">
                  <p className="text-black font-semibold text-lg sm:text-xl">{slide.stat}</p>
                  <p className="mt-2 text-gray-600 text-sm sm:text-base">{slide.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 hidden sm:flex p-2 bg-white shadow rounded-full"
          >
            <ArrowLeft />
          </button>

          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 hidden sm:flex p-2 bg-white shadow rounded-full"
          >
            <ArrowRight />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-6">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-3 h-3 rounded-full transition ${
                i === currentSlide ? "bg-cyan-400" : "bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
