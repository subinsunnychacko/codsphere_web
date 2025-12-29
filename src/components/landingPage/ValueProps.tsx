"use client";

import { useEffect, useRef } from "react";
import { MessageCircle, Mail, Moon, Sparkles } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

const valueProps = [
  { icon: MessageCircle, text: "Answers customer questions 24/7" },
  { icon: Mail, text: "Captures email & phone automatically" },
  { icon: Moon, text: "Works even when you're unavailable" },
  { icon: Sparkles, text: "Looks professional and modern" },
  // Duplicate for seamless loop
  { icon: MessageCircle, text: "Answers customer questions 24/7" },
  { icon: Mail, text: "Captures email & phone automatically" },
  { icon: Moon, text: "Works even when you're unavailable" },
  { icon: Sparkles, text: "Looks professional and modern" },
];

export function ValueProps() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    // Calculate the width of half the items (since we duplicated them)
    const scrollWidth = marquee.scrollWidth / 2;

    const ctx = gsap.context(() => {
      gsap.to(marquee, {
        x: -scrollWidth,
        duration: 30, // Adjust speed here
        ease: "none",
        repeat: -1,
        onReverseComplete: () => {
          gsap.set(marquee, { x: 0 });
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative py-12 bg-black overflow-hidden border-y border-white/5">
      {/* Gradient Fades for Premium Edge Look */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-40 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-40 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

      <div className="container-wrapper">
        <div className="flex overflow-hidden group">
          <div
            ref={marqueeRef}
            className="flex items-center gap-6 md:gap-12 whitespace-nowrap will-change-transform"
          >
            {valueProps.map((prop, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-4 px-6 py-3 rounded-full",
                  "bg-white/[0.03] border border-white/10 backdrop-blur-md",
                  "transition-all duration-300 hover:bg-white/[0.08] hover:border-cyan-500/30 group-hover:[animation-play-state:paused]",
                )}
              >
                <div className="p-2 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                  <prop.icon className="w-5 h-5 text-cyan-400" strokeWidth={1.5} />
                </div>
                <span className="text-slate-300 font-medium text-sm md:text-base tracking-tight">
                  {prop.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
    </section>
  );
}
