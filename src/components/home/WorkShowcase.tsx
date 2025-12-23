"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
      <div
        ref={containerRef}
        aria-label="Scroll-triggered project showcase"
        className="relative h-screen transform-gpu"
      >
        {/* Frame 1 */}
        <div className="gsap-frame md:absolute md:inset-0 z-50">
          <div className="rise absolute top-2/12 left-1/12 rounded-lg overflow-hidden p-2 bg-gradient-to-tr from-gray-50/80 via-gray-100 to-[#f683ae]">
            <p className="pt-1 pb-2 text-sm font-medium">CODCRM Accounting</p>
            <div
              // className="rounded-md overflow-hidden relative h-[120px] w-[200px] sm:h-[155px] sm:w-[240px] lg:h-[200px] lg:w-[280px] 2xl:h-[300px] 2xl:w-[400px]"
              className="rounded-md overflow-hidden relative h-[120px] w-[200px] sm:h-[155px] sm:w-[240px] lg:h-[200px] lg:w-[280px]"
              aria-label="Box A"
            >
              <Image
                src="/images/home/work-samples/work-sample-3.jpg"
                alt="Case preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="rise absolute text-right top-5/12 right-1/12 sm:top-1/5 sm:right-1/12">
            <p className="text-2xl sm:text-3xl font-semibold italic text-[#D3D3D3]">150+</p>
            <h3 className="mt-2 max-w-xs text-xl sm:text-2xl font-semibold md:text-3xl">
              Websites built and managed
            </h3>
          </div>
          <div className="rise absolute sm:max-w-4/12 text-left bottom-4/12 left-1/12 sm:bottom-1/8 sm:left-1/12">
            <p className="text-2xl sm:text-3xl font-semibold italic text-[#D3D3D3]">04+</p>
            <h3 className="mt-2 max-w-lg text-xl sm:text-2xl font-semibold md:text-3xl">
              Year of of building, breaking, fixing, and scaling digital systems
            </h3>
          </div>
          <div className="rise absolute bottom-1/12 right-1/12 sm:bottom-1/8 sm:right-1/12 rounded-lg overflow-hidden p-2 bg-gradient-to-tr from-gray-50/80 via-gray-100 to-[#79c62d]">
            <p className="pt-1 pb-2 text-sm font-medium">Voltvera</p>
            <div
              // className="rounded-md overflow-hidden relative h-[100px] w-[200px] sm:h-[130px] sm:w-[260px] lg:h-[160px] lg:w-[320px] 2xl:h-[250px] 2xl:w-[500px]"
              className="rounded-md overflow-hidden relative h-[100px] w-[200px] sm:h-[130px] sm:w-[260px] lg:h-[160px] lg:w-[320px]"
              aria-label="Box B"
            >
              <Image
                src="/images/home/work-samples/work-sample-2.jpg"
                alt="Case preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Frame 2 */}
        <div className="gsap-frame md:absolute md:inset-0 z-40">
          <div className="rise absolute top-3/12 right-1/12 sm:top-2/12 sm:right-2/12 rounded-lg overflow-hidden p-2 bg-gradient-to-tr from-gray-50/80 via-gray-100 to-[#7574ff]">
            <p className="pt-1 pb-2 text-sm font-medium">CODCRM Projects</p>
            <div
              // className="rounded-md overflow-hidden relative h-[120px] w-[230px] sm:h-[140px] sm:w-[250px] 2xl:h-[250px] 2xl:w-[450px]"
              className="rounded-md overflow-hidden relative h-[120px] w-[230px] sm:h-[140px] sm:w-[250px]"
              aria-label="Box C"
            >
              <Image
                src="/images/home/work-samples/work-sample-5.jpg"
                alt="Case preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="rise absolute bottom-2/12 left-1/12 sm:bottom-1/12 sm:left-2/12 rounded-lg overflow-hidden p-2 bg-gradient-to-tr from-gray-50/80 via-gray-100 to-black">
            <p className="pt-1 pb-2 text-sm font-medium">Sortify</p>
            <div
              // className="rounded-md overflow-hidden relative h-[100px] w-[250px] sm:h-[140px] sm:w-[400px] 2xl:h-[250px] 2xl:w-[750px]"
              className="rounded-md overflow-hidden relative h-[100px] w-[250px] sm:h-[140px] sm:w-[400px]"
              aria-label="Box D"
            >
              <Image
                src="/images/home/work-samples/work-sample-1.jpg"
                alt="Case preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Frame 3 */}
        <div className="gsap-frame md:absolute md:inset-0 z-30">
          <div className="rise absolute top-2/10 left-2/12 sm:top-2/10 sm:left-3/12 rounded-lg overflow-hidden p-2 bg-gradient-to-tr from-gray-50/80 via-gray-100 to-[#f683ae]">
            <p className="pt-1 pb-2 text-sm font-medium">CODCRM Stock</p>
            <div
              // className="rounded-md overflow-hidden relative h-[160px] w-[200px] sm:h-[180px] sm:w-[220px] 2xl:h-[350px] 2xl:w-[420px]"
              className="rounded-md overflow-hidden relative h-[160px] w-[200px] sm:h-[180px] sm:w-[220px]"
              aria-label="Box E"
            >
              <Image
                src="/images/home/work-samples/work-sample-4.jpg"
                alt="Case preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="rise absolute bottom-1/10 right-3/10 lg:bottom-2/10 sm:right-3/10 rounded-lg bg-card p-4 shadow-sm">
            <div
              // className="rounded-md w-[60px] h-[160px] sm:w-[80px] sm:h-[200px] 2xl:w-[180px] 2xl:h-[380px]"
              className="rounded-md w-[60px] h-[160px] sm:w-[80px] sm:h-[200px]"
              aria-label="Box F"
            >
              <Image
                src="/images/home/work-samples/work-sample-8.jpg"
                alt="Case preview"
                fill
                className="object-fill rounded-2xl"
              />
            </div>
          </div>
        </div>

        {/* Frame 4 */}
        <div className="gsap-frame md:absolute md:inset-0 z-20">
          <div className="rise absolute sm:max-w-4/12 w-4/5 top-4/11 left-1/12 sm:top-48 sm:left-1/12  text-left">
            <p className="text-2xl sm:text-3xl font-semibold italic text-[#D3D3D3]">230</p>
            <h3 className="mt-2 max-w-sm text-xl sm:text-2xl font-semibold md:text-3xl">
              Countries and regions covered
            </h3>
          </div>
          <div className="rise absolute top-2/12 right-1/12 sm:top-2/12 sm:right-1/12 rounded-lg overflow-hidden p-2 bg-gradient-to-tr from-gray-50/80 via-gray-100 to-[#db5f39]">
            <p className="pt-1 pb-2 text-sm font-medium">Osfp_ce</p>
            <div
              // className="rounded-md overflow-hidden relative h-[100px] w-[180px] sm:h-[120px] sm:w-[200px] 2xl:h-[300px] 2xl:w-[500px]"
              className="rounded-md overflow-hidden relative h-[100px] w-[180px] sm:h-[140px] sm:w-[240px]"
              aria-label="Box G"
            >
              <Image
                src="/images/home/work-samples/work-sample-6.jpg"
                alt="Case preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="rise absolute bottom-3/12 left-1/12 sm:bottom-1/10 sm:left-1/12 rounded-lg overflow-hidden p-2 bg-gradient-to-tr from-gray-50/80 via-gray-100 to-[#cafb85]">
            <p className="pt-1 pb-2 text-sm font-medium">Slate</p>
            <div
              // className="rounded-md overflow-hidden relative h-[100px] w-[180px] sm:h-[160px] sm:w-[250px] 2xl:h-[350px] 2xl:w-[550px]"
              className="rounded-md overflow-hidden relative h-[100px] w-[180px] sm:h-[180px] sm:w-[280px]"
              aria-label="Box H"
            >
              <Image
                src="/images/home/work-samples/work-sample-7.jpg"
                alt="Case preview"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="rise absolute sm:max-w-4/12 bottom-1/12 right-1/12 sm:bottom-28 sm:right-1/12 text-right">
            <p className="text-2xl sm:text-3xl font-semibold italic text-[#D3D3D3]">600,000+</p>
            <h3 className="mt-2 text-xl sm:text-2xl font-semibold md:text-3xl">
              Websites built and managed
            </h3>
          </div>
        </div>
      </div>

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
