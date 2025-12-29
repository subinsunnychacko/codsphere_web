"use client";

import { useLayoutEffect, useRef } from "react";
import { Search, Palette, Rocket, DollarSign } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    icon: Search,
    title: "Choose Your Plan",
    description: "Pick the features that fit your business needs",
  },
  {
    icon: Palette,
    title: "We Build It",
    description: "Custom design and chatbot setup in 48 hours",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description: "Your website starts capturing leads instantly",
  },
  {
    icon: DollarSign,
    title: "You Earn",
    description: "More leads, less stress, better growth",
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hiw-header", {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hiw-header",
          start: "top 80%",
        },
      });

      gsap.from(".hiw-line", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".hiw-steps",
          start: "top 75%",
        },
      });

      gsap.fromTo(
        ".hiw-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".hiw-steps",
            start: "top 80%",
          },
        },
      );

      gsap.to(".hiw-icon", {
        y: -6,
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-24 lg:py-32 bg-slate-950 text-white overflow-hidden"
    >
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="hiw-header text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-400 mb-4">How It Works</p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Set it up once.
            <br />
            <span className="text-cyan-400">Let it work forever.</span>
          </h2>
        </div>

        {/* Steps */}
        <div className="hiw-steps relative">
          {/* Connecting line */}
          <div className="hiw-line hidden md:block absolute top-[44px] left-[8%] right-[8%] h-px bg-slate-700" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {steps.map((step, index) => (
              <div
                key={index}
                className="hiw-card relative z-10 text-center
                rounded-2xl border border-slate-800 bg-slate-900/60
                px-6 py-10 backdrop-blur-sm
                shadow-lg shadow-black/20
                hover:-translate-y-1 hover:shadow-xl transition-all
                transform-gpu will-change-transform"
              >
                <span className="block text-xs uppercase tracking-widest text-slate-400 mb-4">
                  Step {index + 1}
                </span>

                <div
                  className="hiw-icon w-16 h-16 mx-auto mb-6
                  rounded-xl bg-cyan-500/10
                  border border-cyan-400/30
                  flex items-center justify-center"
                >
                  <step.icon className="w-7 h-7 text-cyan-400" />
                </div>

                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>

                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center
            rounded-full px-10 py-4
            bg-cyan-500 text-slate-950
            font-semibold text-sm tracking-wide
            hover:bg-cyan-400 transition-colors"
          >
            Get Started in 48 Hours
          </a>
        </div>
      </div>
    </section>
  );
}
