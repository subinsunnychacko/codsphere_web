"use client";

import { useLayoutEffect, useRef } from "react";
import { FileText, Brain, Rocket, Sparkles } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const levels = [
  {
    icon: FileText,
    name: "Starter",
    label: "Level 1: Rule-Based",
    description:
      "Fixed answers to common questions. You provide the script, we build the logic flows.",
    color: "text-slate-400",
  },
  {
    icon: Brain,
    name: "AI Standard",
    label: "Level 2: Semantic AI",
    description:
      "Smarter responses pulled from your website content. It understands intent, not just keywords.",
    color: "text-slate-200",
  },
  {
    icon: Rocket,
    name: "AI Pro",
    label: "Level 3: Reasoning AI",
    description:
      "Advanced logic that references your PDFs, internal policies, and complex documentation.",
    color: "text-accent",
  },
];

export function AIExplanation() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title Animation
      gsap.from(".explanation-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".explanation-title",
          start: "top 90%",
        },
      });

      // Step Animation
      gsap.from(".explanation-step", {
        opacity: 0,
        x: -30,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".explanation-grid",
          start: "top 80%",
        },
      });

      // Line Growth Animation
      gsap.from(".step-line", {
        scaleX: 0,
        duration: 1.5,
        ease: "expo.inOut",
        scrollTrigger: {
          trigger: ".explanation-grid",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 bg-foreground overflow-hidden">
      {/* Abstract Background Noise/Dots */}
      <div className="absolute inset-0 bg-dots opacity-[0.15] pointer-events-none" />

      <div className="relative container-wrapper">
        <div className="explanation-title text-center mb-20">
          <h2 className="font-sequel text-3xl md:text-5xl font-bold text-background tracking-tighter mb-4">
            Evolution of Intelligence
          </h2>
          <p className="text-background/50 font-medium tracking-widest uppercase text-xs">
            Choosing the right brain for your business
          </p>
        </div>

        <div className="explanation-grid relative grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="step-line absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-background/20 to-transparent hidden md:block" />

          {levels.map((level, index) => (
            <div
              key={index}
              className="explanation-step group relative flex flex-col items-center text-center"
            >
              {/* Icon Orb */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-[#0a0a0a] border border-background/10 flex items-center justify-center mb-8 transition-all duration-500 group-hover:border-cyan group-hover:shadow-[0_0_30px_rgba(0,255,255,0.2)]">
                {/* AI Scanning Ring (Hidden by default, shown on hover) */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan/0 group-hover:border-cyan/50 group-hover:scale-125 transition-all duration-700 opacity-0 group-hover:opacity-100" />

                <level.icon
                  className={cn(
                    "w-8 h-8 transition-transform duration-500 group-hover:scale-110",
                    level.color,
                  )}
                />

                {/* Level Tag */}
                <div className="absolute -bottom-2 bg-background text-foreground px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter">
                  {level.name}
                </div>
              </div>

              {/* Text */}
              <div className="relative z-10">
                <p
                  className={cn(
                    "text-[10px] font-bold tracking-[0.2em] uppercase mb-3",
                    level.color,
                  )}
                >
                  {level.label}
                </p>
                <h3 className="font-sequel text-xl font-bold text-background mb-4 group-hover:text-cyan transition-colors">
                  {level.name === "Starter"
                    ? "Manual Logic"
                    : level.name === "AI Pro"
                      ? "Deep Reasoning"
                      : "Contextual AI"}
                </h3>
                <p className="text-background/60 text-sm leading-relaxed max-w-[280px] mx-auto">
                  {level.description}
                </p>
              </div>

              {/* Decorative Number */}
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-9xl font-black text-background/[0.03] select-none pointer-events-none font-sequel">
                0{index + 1}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-20 flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 px-4 py-2 rounded-full border border-background/10 bg-background/[0.02]">
            <Sparkles className="w-4 h-4 text-cyan" />
            <p className="text-background/60 text-xs font-medium tracking-wide">
              No technical knowledge required. We handle the full deployment.
            </p>
          </div>
          <div className="w-px h-12 bg-gradient-to-b from-cyan to-transparent" />
        </div>
      </div>
    </section>
  );
}
