"use client";

import { useLayoutEffect, useRef } from "react";
import {
  HandMetal,
  Lightbulb,
  CheckCircle,
  Target,
  MessageSquare,
  Bot,
  Zap,
  ShieldCheck,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: HandMetal,
    title: "Greets visitors instantly",
    description: "First impressions matter — yours starts with a conversation.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Lightbulb,
    title: "Answers common questions",
    description: `"What's your rate?" "Do you serve my area?" — handled.`,
    color: "text-indigo-600",
    bg: "bg-indigo-50",
  },
  {
    icon: CheckCircle,
    title: "Qualifies serious inquiries",
    description: "Know who's ready to buy before you even pick up the phone.",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
  {
    icon: Target,
    title: "Captures leads 24/7",
    description: "Email, phone, and project details — collected automatically.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
];

export function ProblemSolution() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Header text reveal
      gsap.from(".reveal-item", {
        y: 40,
        opacity: 0,
        stagger: 0.1,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: ".benefit-header",
          start: "top 80%",
        },
      });

      // 2. Floating nodes
      gsap.to(".floating-node", {
        y: "-=20",
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: { each: 0.5, from: "random" },
      });

      // 3. Benefit cards (BLUR FIX APPLIED)
      gsap.fromTo(
        ".benefit-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 1.2,
          ease: "expo.out",
          clearProps: "transform",
          scrollTrigger: {
            trigger: ".card-grid",
            start: "top 85%",
          },
        },
      );

      // 4. Mouse-follow visual
      const moveVisual = (e: MouseEvent) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 40;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 40;
        gsap.to(visualRef.current, {
          x: xPos,
          y: yPos,
          duration: 1,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", moveVisual);
      return () => window.removeEventListener("mousemove", moveVisual);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-40 bg-white overflow-hidden">
      <div className="absolute inset-0 bg-dots-for-white opacity-30 pointer-events-none" />

      <div className="container-wrapper relative z-10">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-24 lg:mb-32">
          <div className="benefit-header flex-1 text-left">
            <div className="reveal-item inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-100 bg-blue-50/50 text-[11px] font-bold tracking-[0.2em] text-blue-600 uppercase mb-8">
              <Zap className="w-3 h-3 fill-current" />
              Automated Engagement
            </div>

            <h2 className="reveal-item font-sequel text-[42px] md:text-[64px] lg:text-[76px] leading-[0.95] tracking-tighter text-slate-900 mb-8">
              Most websites <br />
              just sit there. <br />
              <span className="text-blue-600/20 italic font-light">Ours starts</span>
              <br />
              <span className="text-blue-600">the chat.</span>
            </h2>

            <p className="reveal-item text-responsive-base text-slate-500 max-w-lg font-normal leading-relaxed border-l-2 border-blue-600 pl-6">
              Stop losing leads to boring contact forms. Our AI engages visitors within seconds,
              turning cold traffic into warm inquiries while you sleep.
            </p>
          </div>

          {/* Visual */}
          {/* Visual */}
          <div
            ref={visualRef}
            className="flex-1 relative w-full h-[380px] md:h-[450px] lg:h-[500px] flex items-center justify-center"
          >
            {/* Center Bot */}
            <div className="relative w-24 h-24 md:w-32 md:h-32 bg-blue-600 rounded-3xl rotate-12 flex items-center justify-center shadow-2xl shadow-blue-400/40 z-20">
              <Bot className="w-12 h-12 md:w-16 md:h-16 text-white" />
            </div>

            {/* ✅ MOBILE: GRID (NO ABSOLUTE) */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 gap-30 place-items-center md:hidden">
              <FloatingNode icon={MessageSquare} label="How can I help?" color="text-blue-600" />
              <FloatingNode icon={Zap} label="0.1s Response" color="text-orange-500" />
              <FloatingNode icon={ShieldCheck} label="Lead Qualified" color="text-emerald-500" />
              <FloatingNode icon={Bot} label="AI Thinking..." color="text-indigo-600" />
            </div>

            {/* ✅ DESKTOP: ORBIT */}
            <div className="hidden md:block">
              <FloatingNode
                icon={MessageSquare}
                label="How can I help?"
                position="top-[10%] left-[5%]"
                color="text-blue-600"
              />
              <FloatingNode
                icon={Zap}
                label="0.1s Response"
                position="top-[20%] right-[0%]"
                color="text-orange-500"
              />
              <FloatingNode
                icon={ShieldCheck}
                label="Lead Qualified"
                position="bottom-[20%] left-[0%]"
                color="text-emerald-500"
              />
              <FloatingNode
                icon={Bot}
                label="AI Thinking..."
                position="bottom-[15%] right-[10%]"
                color="text-indigo-600"
              />
            </div>

            {/* Rings */}
            <div className="absolute w-[260px] md:w-[300px] h-[260px] md:h-[300px] border border-slate-100 rounded-full" />
            <div className="absolute w-[360px] md:w-[450px] h-[360px] md:h-[450px] border border-slate-50 rounded-full" />
          </div>
        </div>

        {/* Cards */}
        <div className="card-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="benefit-card group p-10 rounded-[40px] border border-slate-100 bg-white
              shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500
              min-h-[340px] flex flex-col justify-between
              transform-gpu will-change-transform"
            >
              <div>
                <div
                  className={cn(
                    "w-14 h-14 rounded-2xl flex items-center justify-center mb-8",
                    benefit.bg,
                  )}
                >
                  <benefit.icon className={cn("w-7 h-7", benefit.color)} />
                </div>

                <h3
                  style={{ backfaceVisibility: "hidden" }}
                  className="font-sequel text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-tight"
                >
                  {benefit.title}
                </h3>

                <p
                  style={{ backfaceVisibility: "hidden" }}
                  className="text-slate-500 text-[15px] leading-relaxed"
                >
                  {benefit.description}
                </p>
              </div>

              <div className="pt-6 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest">
                Learn More <span className="text-lg">→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer line */}
        <div className="mt-32 text-center">
          <p className="text-responsive-lg font-medium text-slate-900">
            Fewer missed calls.
            <span className="text-blue-600 italic font-damion text-5xl ml-2">
              Zero missed leads.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function FloatingNode({ icon: Icon, label, position, color, className }: any) {
  return (
    <div
      className={cn(
        `
    floating-node
    ${position ? "absolute" : "relative"}
    flex items-center gap-2
    bg-white/90 backdrop-blur-sm
    rounded-xl shadow-lg border border-slate-100
    px-3 py-1.5
    scale-90
    sm:px-3 sm:py-2 sm:scale-100
    z-30
    `,
        position,
        className,
      )}
    >
      <div className={cn("flex items-center justify-center rounded-lg bg-slate-50 w-8 h-8", color)}>
        <Icon className="w-4 h-4" />
      </div>

      <span className="hidden sm:inline-block text-xs font-bold text-slate-700 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
