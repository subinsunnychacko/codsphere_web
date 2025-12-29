"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Plus, Minus } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  {
    q: "Will it sound like a robot?",
    a: "Nope. We customize tone, phrasing, and flow so it sounds like your business — not AI.",
  },
  {
    q: "What if a customer asks something it can’t answer?",
    a: "It captures the lead instantly and alerts you so you can follow up personally.",
  },
  {
    q: "How long does setup take?",
    a: "Most businesses go live within 48 hours. We handle everything end-to-end.",
  },
  {
    q: "Do I need technical knowledge?",
    a: "None. You provide business info — we do the rest.",
  },
  {
    q: "Can I upgrade later?",
    a: "Yes. You only pay the difference in setup. No penalties.",
  },
  {
    q: "Is there a contract?",
    a: "No contracts. Cancel anytime.",
  },
];

export function FAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".faq-title",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".faq-title",
            start: "top 90%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".faq-card",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".faq-grid",
            start: "top 85%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-28 bg-background overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.08),transparent_60%)]" />

      <div className="relative container mx-auto px-6 lg:px-20">
        {/* Header */}
        <div className="faq-title text-center max-w-2xl mx-auto mb-20">
          <span className="text-cyan text-xs tracking-[0.35em] uppercase font-semibold block mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-5xl font-sequel font-bold tracking-tight text-foreground">
            Questions, answered clearly.
          </h2>
        </div>

        {/* FAQ Grid */}
        <div className="faq-grid max-w-3xl mx-auto space-y-5">
          {faqs.map((item, i) => {
            const isOpen = active === i;

            return (
              <div
                key={i}
                className={cn(
                  "faq-card group relative rounded-2xl border backdrop-blur-xl transition-all duration-500",
                  isOpen
                    ? "border-cyan bg-cyan/5 shadow-[0_20px_60px_-30px_rgba(0,200,255,0.4)]"
                    : "border-border bg-card/60 hover:border-cyan/40",
                )}
              >
                {/* Accent Line */}
                <div
                  className={cn(
                    "absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-cyan transition-all duration-500",
                    isOpen ? "opacity-100" : "opacity-0",
                  )}
                />

                {/* Trigger */}
                <button
                  onClick={() => setActive(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-6 text-left"
                >
                  <span className="text-base md:text-lg font-medium text-foreground">{item.q}</span>

                  <div
                    className={cn(
                      "flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300",
                      isOpen
                        ? "bg-cyan text-background"
                        : "bg-muted text-foreground group-hover:bg-cyan/20",
                    )}
                  >
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>

                {/* Content */}
                <div
                  className={cn(
                    "grid transition-all duration-500 ease-in-out",
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
