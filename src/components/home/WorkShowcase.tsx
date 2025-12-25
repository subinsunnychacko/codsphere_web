"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import WorkShowcaseCarousel from "./WorkShowcaseCarousel";

gsap.registerPlugin(ScrollTrigger);

export default function WorkShowcaseSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const mm = gsap.matchMedia();
    const ctx = gsap.context(
      () => {
        // mm.add("(min-width: 768px)", () => {
        mm.add("(min-width: 68px)", () => {
          const container = containerRef.current;
          const frames = gsap.utils.toArray<HTMLElement>(".gsap-frame");
          if (!frames.length) return;

          // initial state
          gsap.set(frames, {
            position: "absolute",
            inset: 0,
            autoAlpha: 0,
            // scale: 0.82,
            // yPercent: 6,
            scale: 0.6, // was 0.82 — now starts farther away
            yPercent: 10,
            transformOrigin: "50% 50%",
            willChange: "transform, opacity",
            force3D: true,
          });
          // gsap.set(frames[0], { autoAlpha: 1, scale: 1, yPercent: 0 });
          gsap.set(frames[0], {
            autoAlpha: 1,
            scale: 0.6, // start small, not full size
            yPercent: 10,
            z: -300,
          });

          // 1️⃣ Pin the container at the top of the screen (independent trigger)
          ScrollTrigger.create({
            trigger: container,
            start: "top top",
            // end: "+=2500",
            // end: "+=2750",
            end: "+=7000",
            pin: true,
            anticipatePin: 1,
          });

          // 2️⃣ Actual animation timeline (starts when section center hits viewport center)
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: container,
              // start: "top center", // animation starts when section center hits viewport center
              start: "top bottom", // animation starts when section bottom hits viewport top
              // end: "+=4000",
              // end: "+=4000",
              end: "+=8000",
              scrub: true,
            },
          });

          frames.forEach((frame, i) => {
            // bring current frame to front while it zooms in
            tl.to(
              frame,
              {
                autoAlpha: 1,
                scale: 1,
                yPercent: 0,
                duration: 0.9,
                ease: "power3.out",
              },
              // i === 0 ? 0 : '>+=0.2',
              // i === 0 ? 0 : '>=0.0',
              i === 0 ? 0 : ">-=0.2",
            );

            // subtle staggered rise of inner elements while scaling
            const kids = frame.querySelectorAll<HTMLElement>(".rise");
            if (kids.length) {
              tl.from(
                kids,
                {
                  y: 30,
                  opacity: 0,
                  duration: 0.6,
                  ease: "power2.out",
                  stagger: 0.07,
                },
                "<0.1",
              );
            }

            // as the next frame comes in, push the current frame slightly past 1 (zoom-through) and fade
            const prev = frames[i - 1];
            if (prev) {
              tl.to(
                prev,
                {
                  scale: 1.08,
                  yPercent: -4,
                  autoAlpha: 0,
                  duration: 0.7,
                  // duration: 1.4,
                  ease: "power3.inOut",
                },
                "<",
              );
            }
          });
        });
      },
      // scope for gsap.context — pass the actual element
      containerRef.current,
    );

    // cleanup
    return () => {
      ctx.revert();
      mm.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // containerRef is a ref (stable), so empty deps is OK

  return (
    <section className="container-wrapper pt-less pb-more">
      {/* Header */}
      <div className="text-center w-5/5 lg:w-4/5 mx-auto">
        {/* <p className="font-damion text-[30px] sm:text-[35px] leading-[35px] sm:leading-[40px] md:leading-[45px] text-[#D3D3D3]">
          Codsphere
        </p> */}
        <h2 className="font-medium text-black text-[28px] sm:text-[30px] lg:text-[40px] leading-[36px] sm:leading-[40px] md:leading-[46px] lg:leading-[52px] font-sequel px-4">
          Crafting digital experiences and products for inspiring brand across worldwide
        </h2>
      </div>

      {/* Animation container */}
      <WorkShowcaseCarousel />

      {/* Bottom section */}
      <div>
        <div className="text-center w-5/5 lg:w-4/5 mx-auto mt-5 sm:mt-10">
          <h3 className="font-medium text-black text-[28px] sm:text-[30px] lg:text-[40px] leading-[36px] sm:leading-[40px] md:leading-[46px] lg:leading-[52px] font-sequel px-4">
            Built for speed. Crafted for scalability. Trusted by over 150+ clients worldwide.
          </h3>
        </div>
        {/* CTA Button */}
        {/* <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
          <Link href="/contact">
            <button className="rounded-full bg-gradient-to-r from-[#33FCFE] to-[#010B66] text-white text-[15px] lg:text-[18px] p-[3px]">
              <div className="flex items-center gap-3 rounded-full px-4 py-3 bg-black">
                Chat For Free!
                <div className="bg-white text-black rounded-full p-0.5">
                  <ArrowRight />
                </div>
              </div>
            </button>
          </Link>
        </div> */}
      </div>
    </section>
  );
}
