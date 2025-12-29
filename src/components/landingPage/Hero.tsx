"use client";

import { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import { Bot, ShieldCheck, Sparkles, Zap } from "lucide-react";
import gsap from "gsap";
import BgHero from "@/assets/hero-bg.jpg";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const uiCardRef = useRef<HTMLDivElement>(null);
  const typeTarget = useRef<HTMLSpanElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Typing Effect
      const words = "Revenue";
      let obj = { prop: 0 };
      tl.to(obj, {
        prop: words.length,
        duration: 0.8,
        ease: "none",
        onUpdate: () => {
          if (typeTarget.current) {
            typeTarget.current.textContent = words.substring(0, Math.ceil(obj.prop));
          }
        },
      });

      // 2. Content Entrance
      tl.fromTo(
        ".hero-content-anim",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power2.out" },
        "-=0.4",
      );

      // 3. UI Card Entrance (Separate from text for smoother mobile flow)
      tl.fromTo(
        uiCardRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "expo.out" },
        "-=0.6",
      );

      // 4. UI Card Float
      gsap.to(uiCardRef.current, {
        y: -15,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      const handleMouseMove = (e: MouseEvent) => {
        const { clientX, clientY } = e;
        const xPos = (clientX / window.innerWidth - 0.5) * 20;
        const yPos = (clientY / window.innerHeight - 0.5) * 20;

        gsap.to(bgRef.current, {
          x: xPos,
          y: yPos,
          duration: 2,
          ease: "power2.out",
        });
      };

      window.addEventListener("mousemove", handleMouseMove);
      return () => window.removeEventListener("mousemove", handleMouseMove);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] w-full flex items-center overflow-hidden bg-black pt-28 pb-16 lg:pt-20 lg:pb-10"
    >
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div ref={bgRef} className="absolute inset-[-5%] w-[110%] h-[110%]">
          <Image
            src={BgHero}
            alt="Hero Background"
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
      </div>

      <div className="container-wrapper relative z-10 w-full px-6">
        {/* Changed flex direction: col on mobile (Text first), md:row for desktop */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-10">
          {/* --- LEFT SIDE (Text Content) --- */}
          <div className="w-full md:w-6/12 lg:w-5/12 flex flex-col gap-6 text-center md:text-left items-center md:items-start">
            <div className="hero-content-anim inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] uppercase tracking-[0.2em] font-bold text-cyan-400 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Intelligence Driven
            </div>

            <h1 className="font-bold leading-[1.1] text-[36px] sm:text-[48px] md:text-[48px] lg:text-[64px] tracking-tight text-white">
              Turn Visitors Into
              <br />
              <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-indigo-400">
                <span ref={typeTarget}></span>
                <span className="inline-block w-[3px] h-[0.9em] bg-cyan-400 ml-1 animate-blink align-middle" />
              </span>
            </h1>

            <p className="hero-content-anim leading-relaxed text-slate-300 text-[16px] lg:text-[18px] max-w-lg font-light">
              Transform your digital footprint into a high-converting revenue engine with AI
              tailored to your business workflow.
            </p>

            <div className="hero-content-anim flex flex-col sm:flex-row w-full sm:w-auto gap-4 pt-4">
              <button className="group relative w-full sm:px-8 h-[56px] rounded-full bg-cyan-500 text-black font-bold text-[15px] flex items-center justify-center gap-2 hover:bg-white transition-all duration-300 overflow-hidden">
                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:animate-shimmer" />
                Deploy Agent <Sparkles className="w-4 h-4" />
              </button>

              <button className="w-full sm:px-8 h-[56px] rounded-full border border-white/20 text-white text-[15px] font-medium flex justify-center items-center hover:bg-white/10 transition-all backdrop-blur-sm">
                View Demo
              </button>
            </div>
          </div>

          {/* --- RIGHT SIDE (Chat UI) --- */}
          <div className="w-full md:w-5/12 lg:w-1/2 flex justify-center md:justify-end items-center mt-4 md:mt-0">
            <div ref={uiCardRef} className="relative w-full max-w-[420px]">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-cyan-500/15 rounded-[40px] blur-3xl" />

              <div className="relative rounded-[32px] border border-white/10 bg-black/40 p-3 backdrop-blur-2xl shadow-2xl overflow-hidden">
                <div className="rounded-[24px] bg-[#0d0d14]/90 p-6 border border-white/5">
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center border border-cyan-500/30">
                        <Bot className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div className="text-left">
                        <div className="text-sm font-bold text-white tracking-tight">
                          CodSphere AI
                        </div>
                        <div className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest">
                          Active
                        </div>
                      </div>
                    </div>
                    <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
                  </div>

                  <div className="space-y-5 mb-8 text-left">
                    <div className="p-4 rounded-2xl rounded-tl-none bg-white/[0.03] border border-white/5 text-slate-300 text-[13px] leading-relaxed">
                      I&apos;ve analyzed your traffic patterns. I can increase your lead capture by
                      40%.
                    </div>
                    <div className="flex justify-end">
                      <div className="p-4 rounded-2xl rounded-tr-none bg-cyan-600 text-black font-semibold text-[13px] shadow-lg shadow-cyan-500/20">
                        Definitely. Show me how.
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center">
                        <ShieldCheck className="w-5 h-5 text-emerald-400" />
                      </div>
                      <div className="text-left">
                        <div className="text-[10px] text-slate-500 uppercase font-bold">Status</div>
                        <div className="text-sm text-white font-medium">Qualified</div>
                      </div>
                    </div>
                    <div className="text-right font-bold text-white text-sm">$12.5k</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s step-end infinite;
        }
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
        .group-hover\:animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </section>
  );
}
