"use client";

import { useLayoutEffect, useRef } from "react";
import { Star, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Mike R.",
    role: "Electrical Contractor",
    avatar: "MR",
    quote:
      "I used to lose 3-4 leads a week because I couldn't answer fast enough. Now my website handles the first conversation and I just show up to close.",
    color: "from-cyan/20 to-blue-500/20",
  },
  {
    name: "Sarah T.",
    role: "Cleaning Service",
    avatar: "ST",
    quote:
      "It's like having a receptionist who never sleeps and never asks for a raise. Game changer for my small business.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    name: "Dave K.",
    role: "HVAC Technician",
    avatar: "DK",
    quote:
      "Setup was painless. Within 48 hours I had a professional site that actually brings in leads while I'm on jobs.",
    color: "from-orange-500/20 to-yellow-500/20",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Entrance
      gsap.from(".testimonial-header", {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".testimonial-header",
          start: "top 90%",
        },
      });

      // Cards Entrance - Staggered 3D Lift
      gsap.from(".testimonial-card", {
        y: 100,
        rotationX: -15,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonial-grid",
          start: "top 80%",
        },
      });

      // Floating animation for a "premium" feel
      gsap.to(".testimonial-card", {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          amount: 1,
          from: "random",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-dots opacity-[0.15] pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-blue/10 blur-[120px] rounded-full" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-cyan/10 blur-[120px] rounded-full" />

      <div className="container-wrapper relative z-10">
        <div className="testimonial-header text-center mb-20">
          <h2 className="font-sequel text-4xl md:text-6xl font-bold text-foreground tracking-tighter mb-6 leading-none">
            Real Stories. <br />
            <span className="text-muted-foreground underline decoration-brand-blue/30">
              Real Time Saved.
            </span>
          </h2>
          <p className="font-damion text-2xl text-brand-blue/80 -rotate-2">
            Trusted by the people who build our world
          </p>
        </div>

        <div className="testimonial-grid grid md:grid-cols-3 gap-8 perspective-1000">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="testimonial-card group relative flex flex-col bg-card border border-border/50 p-8 rounded-[2rem] hover:border-brand-blue/50 transition-colors duration-500 shadow-2xl shadow-black/5"
            >
              {/* Quote Icon Decoration */}
              <Quote className="absolute top-6 right-8 w-12 h-12 text-foreground/[0.03] group-hover:text-brand-blue/5 transition-colors" />

              <div className="flex items-center gap-4 mb-8">
                <div
                  className={cn(
                    "w-16 h-16 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg transform group-hover:-rotate-6 transition-transform duration-500",
                    t.color,
                  )}
                >
                  <span className="font-sequel font-bold text-xl text-foreground">{t.avatar}</span>
                </div>
                <div>
                  <h4 className="font-sequel font-bold text-lg text-foreground tracking-tight">
                    {t.name}
                  </h4>
                  <p className="font-damion text-brand-blue text-lg leading-none">{t.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, starI) => (
                  <Star
                    key={starI}
                    className="w-4 h-4 text-brand-blue fill-brand-blue group-hover:scale-110 transition-transform"
                    style={{ transitionDelay: `${starI * 50}ms` }}
                  />
                ))}
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed font-medium italic relative">
                "{t.quote}"
              </p>

              {/* Bottom Decorative Line */}
              <div className="mt-8 h-1 w-12 bg-brand-blue/20 rounded-full group-hover:w-full transition-all duration-700 ease-out" />
            </div>
          ))}
        </div>

        {/* Bottom Trust Badge */}
        <div className="mt-35 flex flex-col items-center justify-center space-y-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden"
              >
                <div className="w-full h-full bg-gradient-to-tr from-brand-blue to-cyan opacity-40" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-background bg-foreground flex items-center justify-center text-[10px] font-bold text-background z-10">
              +48
            </div>
          </div>
          <p className="font-sequel text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Join 50+ business owners automating their leads
          </p>
        </div>
      </div>
    </section>
  );
}
