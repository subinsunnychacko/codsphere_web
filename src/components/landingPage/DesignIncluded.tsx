"use client";

import { useLayoutEffect, useRef } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const features = [
  "Clean, modern Figma-designed website",
  "Colors matched to your trade or brand",
  "Mobile-first responsive architecture",
  "Zero design or hidden fees",
  "No redesign charges for life",
];

export function DesignIncluded() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Content Entrance
      gsap.from(".design-content > *", {
        x: -50,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".design-content",
          start: "top 80%",
        },
      });

      // Mockup Entrance (Scale & Rotate)
      gsap.from(".mockup-wrapper", {
        scale: 0.8,
        rotateY: 20,
        opacity: 0,
        duration: 1.5,
        ease: "expo.out",
        scrollTrigger: {
          trigger: ".mockup-wrapper",
          start: "top 80%",
        },
      });

      // Floating Animation
      gsap.to(".mockup-float", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Subtle mouse follow effect on the mockup
      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to(".mockup-wrapper", {
          rotateY: xPos,
          rotateX: -yPos,
          duration: 0.5,
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative container-wrapper">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="design-content order-2 lg:order-1">
            <span className="inline-block text-xs tracking-[0.3em] font-bold text-cyan uppercase mb-5 font-sequel">
              Aesthetics
            </span>
            <h2 className="font-sequel text-4xl md:text-5xl font-bold text-foreground mb-8 tracking-tighter leading-[1.1]">
              Professional Design, <br />
              <span className="text-cyan">Included Free.</span>
            </h2>

            <ul className="space-y-5">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="mt-1 w-6 h-6 rounded-lg bg-cyan/10 border border-cyan/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan group-hover:text-background transition-all duration-300">
                    <Check className="w-4 h-4 text-cyan group-hover:text-inherit" />
                  </div>
                  <span className="text-foreground/80 font-medium group-hover:text-foreground transition-colors">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 rounded-2xl border border-border bg-card/50 backdrop-blur-sm relative group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <p className="relative z-10 text-lg font-sequel font-bold text-foreground italic">
                "You don't pay extra to look professional — it's in our DNA."
              </p>
            </div>
          </div>

          {/* Interactive Mockup */}
          <div className="mockup-wrapper relative order-1 lg:order-2 perspective-2000">
            <div className="mockup-float relative z-10">
              {/* Main Card */}
              <div className="relative bg-card rounded-[32px] p-4 border border-border shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] overflow-hidden">
                {/* Mockup Header */}
                <div className="flex items-center justify-between mb-6 px-4 pt-2">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-red-500/50" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                    <div className="w-2 h-2 rounded-full bg-green-500/50" />
                  </div>
                  <div className="h-4 w-32 bg-muted rounded-full" />
                </div>

                {/* Mockup Content Skeleton */}
                <div className="space-y-6 p-4">
                  <div className="space-y-3">
                    <div className="h-2 w-20 bg-cyan/40 rounded" />
                    <div className="h-8 w-full bg-foreground/10 rounded-xl" />
                    <div className="h-8 w-2/3 bg-foreground/10 rounded-xl" />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-video bg-muted rounded-2xl border border-border animate-pulse" />
                    <div className="aspect-video bg-muted rounded-2xl border border-border animate-pulse" />
                  </div>

                  <div className="space-y-3">
                    <div className="h-3 w-full bg-muted rounded" />
                    <div className="h-3 w-full bg-muted rounded" />
                    <div className="h-3 w-1/2 bg-muted rounded" />
                  </div>

                  <div className="flex gap-3 pt-4">
                    <div className="h-12 w-32 bg-cyan rounded-full shadow-lg shadow-cyan/20" />
                    <div className="h-12 w-12 bg-muted rounded-full" />
                  </div>
                </div>
              </div>

              {/* Floating Element: Badge */}
              <div className="absolute -top-6 -right-6 bg-cyan text-slate-950 font-sequel font-bold px-6 py-4 rounded-2xl shadow-2xl rotate-12 z-20 text-sm">
                Responsive Design
              </div>

              {/* Floating Element: Analytics */}
              <div className="absolute -bottom-10 -left-10 bg-card border border-border p-5 rounded-2xl shadow-2xl z-20 flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                  <div className="w-5 h-5 rounded-full border-2 border-green-500 border-t-transparent animate-spin" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    Performance
                  </p>
                  <p className="text-xl font-sequel font-bold text-foreground">99/100</p>
                </div>
              </div>
            </div>

            {/* Background Glow Behind Mockup */}
            <div className="absolute inset-0 bg-cyan/20 blur-[100px] -z-10 rounded-full scale-75" />
          </div>
        </div>
      </div>
    </section>
  );
}
