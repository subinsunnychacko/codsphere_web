"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";
import PricingInquiryOverlay from "./PricingInquiryOverlay";

gsap.registerPlugin(ScrollTrigger);

const plans = [
  {
    name: "STARTER",
    price: "$99",
    setup: "$199",
    tagline: "Best for businesses that want more leads without AI",
    features: [
      "Conversational website (not static)",
      "Rule-based chatbot",
      "Lead capture (email & phone)",
      "Answers common customer questions",
      "Free Figma-based website design",
      "Trade-specific colors & layout",
      "Mobile & desktop responsive",
      "Basic analytics",
      "Cancel anytime",
    ],
    cta: "Start Starter Plan",
    highlighted: false,
  },
  {
    name: "AI STANDARD",
    price: "$149",
    setup: "$250",
    tagline: "Smart AI that understands your customers",
    features: [
      "Everything in Starter, plus:",
      "AI-powered chatbot (self-hosted)",
      "Understands customer questions naturally",
      "Answers based on your website content",
      "Smarter lead qualification",
      "Better first impression for customers",
    ],
    cta: "Choose AI Standard",
    highlighted: false,
  },
  {
    name: "AI PRO",
    price: "$199",
    setup: "$299 (Max Total)",
    tagline: "Full power AI for complex businesses",
    features: [
      "Everything in AI Standard, plus:",
      "Advanced AI reasoning",
      "Handles complex customer questions",
      "Can reference documents & policies",
      "Priority support",
      "Custom integrations available",
    ],
    cta: "Go AI Pro",
    highlighted: true,
  },
];

export function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.fromTo(
        ".pricing-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.18,
          ease: "expo.out",
          scrollTrigger: {
            trigger: ".pricing-grid",
            start: "top 80%",
          },
        },
      );

      // Hover Micro-interactions
      gsap.utils.toArray<HTMLElement>(".pricing-card").forEach((card) => {
        const tl = gsap.timeline({ paused: true });
        tl.to(card, {
          y: -10,
          scale: 1.02,
          duration: 0.4,
          ease: "power3.out",
        });
        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        id="pricing"
        className="relative py-32 bg-background overflow-hidden font-sans"
      >
        {/* Ambient background */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(0,200,255,0.08),transparent_60%)]" />

        <div className="relative container-wrapper">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-24">
            <span className="inline-block text-xs tracking-[0.3em] font-bold text-cyan uppercase mb-5 font-sequel">
              Pricing
            </span>
            <h2 className="text-4xl md:text-6xl tracking-tighter text-foreground mb-6 font-sequel font-bold">
              Premium pricing.
              <br />
              Zero surprises.
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              One-time setup. Simple monthly plans. Upgrade anytime — pay only the difference.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="pricing-grid grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={cn(
                  "pricing-card relative rounded-[32px] p-8 border backdrop-blur-xl transition-all duration-300 flex flex-col",
                  plan.highlighted
                    ? "border-cyan bg-gradient-to-b from-cyan/20 to-card shadow-[0_30px_80px_-30px_rgba(0,200,255,0.3)]"
                    : "border-border bg-card/70",
                )}
              >
                {/* Glow layer */}
                {plan.highlighted && (
                  <div className="absolute -inset-px rounded-[32px] bg-gradient-to-br from-cyan/30 via-transparent to-transparent blur-2xl opacity-40 -z-20 pointer-events-none" />
                )}

                {/* Content Wrapper */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Badge */}
                  {plan.highlighted && (
                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-cyan text-slate-950 text-[10px] tracking-widest font-black px-4 py-1.5 rounded-full whitespace-nowrap z-30 shadow-lg font-sequel">
                      MOST POPULAR
                    </div>
                  )}

                  <span className="text-xs tracking-[0.2em] font-bold text-cyan uppercase font-sequel">
                    {plan.name}
                  </span>

                  {/* Price */}
                  <div className="mt-6 mb-5 flex items-end gap-2 font-sequel">
                    <span className="text-5xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground mb-1 font-medium text-sm">/ month</span>
                  </div>

                  <div className="inline-flex rounded-full border border-border/50 bg-background/40 backdrop-blur-md px-4 py-1.5 text-[11px] font-bold text-muted-foreground mb-6 w-fit font-sequel">
                    SETUP: {plan.setup}
                  </div>

                  <p className="text-sm italic text-muted-foreground/90 mb-8 min-h-[40px] font-medium leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Features */}
                  <ul className="space-y-4 mb-10 flex-grow">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex gap-3 text-sm items-start group">
                        <Check className="w-5 h-5 text-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-foreground/80 group-hover:text-foreground transition-colors leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    onClick={() => {
                      setSelectedPlan(plan);
                      setOpen(true);
                    }}
                    className={cn(
                      "w-full py-4 rounded-full font-bold tracking-widest relative z-30 font-sequel text-xs uppercase transition-all duration-500",
                      plan.highlighted
                        ? "bg-cyan text-slate-950 shadow-[0_10px_20px_-5px_rgba(0,255,255,0.4)] hover:shadow-[0_15px_30px_-5px_rgba(0,255,255,0.6)]"
                        : "border border-foreground/20 text-foreground hover:bg-foreground hover:text-background",
                    )}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Upgrade Policy */}
          <div className="max-w-3xl mx-auto mt-24 rounded-3xl border border-cyan/20 bg-muted/20 backdrop-blur-sm p-8 sm:p-10">
            <h3 className="text-xl font-bold text-foreground mb-6 font-sequel tracking-tight">
              Fair, No-Penalty Upgrade Policy
            </h3>
            <div className="grid sm:grid-cols-2 gap-8 text-sm text-muted-foreground">
              <div className="space-y-3">
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan" /> Pay only the difference
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan" /> Capped at $299 maximum
                </p>
                <p className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan" /> Fully adjusted payments
                </p>
              </div>
              <div className="bg-background/40 p-4 rounded-xl border border-border/50">
                <p className="font-bold text-foreground mb-2 font-sequel text-xs tracking-wider uppercase">
                  Quick Math:
                </p>
                <div className="space-y-1 text-xs">
                  <p className="flex justify-between">
                    <span>Starter → AI Standard:</span>{" "}
                    <span className="text-cyan font-bold">$51</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Starter → AI Pro:</span> <span className="text-cyan font-bold">$100</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Standard → AI Pro:</span> <span className="text-cyan font-bold">$49</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <PricingInquiryOverlay open={open} onClose={() => setOpen(false)} plan={selectedPlan} />
    </>
  );
}
