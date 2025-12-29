"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import heroBg from "@/assets/hero-bg.jpg";
import Link from "next/link";

export function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(cardRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        delay: 0.2,
        ease: "power4.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="relative py-32 overflow-hidden">
      {/* Background (UNCHANGED) */}
      <div className="absolute inset-0 z-0">
        <Image src={heroBg} alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-dark-blue/60" />
      </div>

      <div className="container-wrapper relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div>
          <h2
            ref={titleRef}
            className="font-sequel text-white text-4xl md:text-6xl leading-tight mb-6"
          >
            Turn Visitors Into <br />
            <span className="text-white/60">Conversations.</span>
          </h2>

          <p className="text-white/70 text-lg max-w-xl">
            Your website shouldn’t just exist. It should engage, qualify, and convert leads
            automatically — even while you sleep.
          </p>
        </div>

        {/* Glass CTA Card */}
        <div
          ref={cardRef}
          className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-10 shadow-[0_40px_120px_rgba(0,0,0,0.4)]"
        >
          {/* Glow ring */}
          <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-white/20 to-transparent opacity-40 pointer-events-none" />

          <p className="font-damion text-white text-2xl mb-4">Let’s build your</p>

          <h3 className="font-sequel text-white text-3xl mb-8">Conversational Website</h3>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              ref={btnRef}
              href="/home"
              className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white px-8 py-4 font-medium text-black overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Get Started
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>

              {/* Hover glow */}
              <span className="absolute inset-0 bg-gradient-to-r from-white to-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </Link>

            <a
              href="#pricing"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-4 text-white/80 hover:text-white hover:border-white transition"
            >
              Compare Plans
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
