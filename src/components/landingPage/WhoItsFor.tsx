"use client";

import { useLayoutEffect, useRef } from "react";
import {
  Wrench,
  Zap,
  Droplets,
  Home,
  Sparkles,
  TreeDeciduous,
  Truck,
  Briefcase,
  LucideIcon,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

interface Industry {
  icon: LucideIcon;
  name: string;
}

const industries: Industry[] = [
  { icon: Wrench, name: "Contractors" },
  { icon: Zap, name: "Electricians" },
  { icon: Droplets, name: "Plumbers" },
  { icon: Home, name: "Home Services" },
  { icon: Sparkles, name: "Cleaners" },
  { icon: TreeDeciduous, name: "Landscapers" },
  { icon: Truck, name: "Movers" },
  { icon: Briefcase, name: "Consultants" },
];

export function WhoItsFor() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Fade in header
      gsap.from(".who-header", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".who-header",
          start: "top 90%",
        },
      });

      // Continuous Marquee Animation
      const marqueeContent = marqueeRef.current;
      if (marqueeContent) {
        const totalWidth = marqueeContent.offsetWidth;
        gsap.to(marqueeContent, {
          x: `-${totalWidth / 2}`,
          duration: 30,
          repeat: -1,
          ease: "none",
        });
      }

      // Parallax movement on cards based on scroll
      gsap.to(".industry-card", {
        y: (i) => (i % 2 === 0 ? -20 : 20),
        scrollTrigger: {
          trigger: ".industry-grid",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Premium Background Accents */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-border/50 to-transparent opacity-20" />
      <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-border/50 to-transparent opacity-20" />

      <div className="container-wrapper relative z-10">
        <div className="who-header text-center mb-20 max-w-3xl mx-auto">
          <span className="text-cyan text-[10px] font-bold tracking-[0.4em] uppercase mb-4 block">
            Target Industries
          </span>
          <h2 className="font-sequel text-3xl md:text-5xl font-bold text-foreground tracking-tighter leading-[1.1]">
            Built for Businesses That <br />
            <span className="text-muted-foreground">Don't Sit at a Desk.</span>
          </h2>
        </div>
      </div>

      {/* Marquee Section */}
      <div className="industry-grid relative flex overflow-hidden py-10 select-none">
        <div
          ref={marqueeRef}
          className="flex whitespace-nowrap gap-6 md:gap-8"
          style={{ width: "max-content" }}
        >
          {/* Duplicate the array to create a seamless loop */}
          {[...industries, ...industries].map((industry, index) => {
            const Icon = industry.icon;
            return (
              <div
                key={index}
                className="industry-card group relative w-[240px] md:w-[280px] aspect-[4/3] rounded-3xl border border-border bg-card/50 backdrop-blur-sm p-8 flex flex-col justify-between transition-all duration-500 hover:border-cyan/50 hover:bg-cyan/[0.02]"
              >
                <div className="flex justify-between items-start">
                  <div className="w-12 h-12 rounded-2xl bg-foreground flex items-center justify-center group-hover:bg-cyan group-hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-500">
                    <Icon className="w-6 h-6 text-cyan-400 group-hover:text-background transition-colors" />
                  </div>
                  <span className="text-foreground/10 font-sequel text-4xl font-bold group-hover:text-cyan/10 transition-colors">
                    0{(index % industries.length) + 1}
                  </span>
                </div>

                <div>
                  <h3 className="font-sequel text-xl font-bold text-foreground mb-1 group-hover:translate-x-2 transition-transform duration-500">
                    {industry.name}
                  </h3>
                  <div className="w-0 h-0.5 bg-cyan group-hover:w-full transition-all duration-500" />
                </div>

                {/* Corner Gradient Glow */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-cyan/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="container-wrapper mt-20">
        <div className="flex flex-col md:flex-row items-center justify-between p-8 rounded-[2rem] border border-dashed border-border/60 bg-muted/20">
          <p className="font-sequel text-sm text-muted-foreground mb-4 md:mb-0">
            Don't see your industry? We specialize in{" "}
            <span className="text-foreground underline decoration-cyan underline-offset-4">
              all
            </span>{" "}
            field-service sectors.
          </p>
          <Link
            href="/home"
            className="group flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full font-sequel text-xs font-bold transition-all duration-300"
          >
            Get Started
            <IconArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function IconArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M14 5l7 7m0 0l-7 7m7-7H3"
      />
    </svg>
  );
}
