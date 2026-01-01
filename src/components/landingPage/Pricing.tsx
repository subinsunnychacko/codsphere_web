import { motion } from "framer-motion";
import { Check } from "lucide-react";
import PricingInquiryOverlay from "./PricingInquiryOverlay";
import { useState } from "react";

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
    highlighted: true,
  },
];

export function Pricing() {
  const [open, setOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<any>(null);
  return (
    <>
      <section id="pricing" className="py-20 bg-background">
        <div className="mx-auto max-w-6xl px-6 lg:px-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="font-['Damion'] text-[35px] text-muted-foreground/50">Pricing</span>

            <h2 className="mt-2 mb-4 font-heading text-3xl md:text-4xl font-normal text-foreground">
              Simple Monthly Pricing + One-Time Setup
            </h2>

            <p className="mx-auto max-w-2xl text-muted-foreground">
              No hidden fees. No surprise charges. Setup covers professional design, chatbot
              configuration, branding, testing, and launch.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative rounded-xl p-[7px]"
              >
                {/* Gradient border */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 transition-all duration-300 group-hover:opacity-100
                bg-[linear-gradient(135deg,#010B66_0%,#33FCFE_100%)]
                shadow-[0_20px_40px_rgba(1,11,102,0.4),0_10px_20px_rgba(51,252,254,0.2)]"
                />

                {/* Card */}
                <div
                  className="relative flex h-full flex-col rounded-lg border-2 border-border bg-card p-6
                transition-all duration-300 group-hover:border-transparent group-hover:bg-black"
                >
                  {plan.highlighted && (
                    <div
                      className="absolute -top-4 right-6 rounded-lg px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white
                    bg-[linear-gradient(135deg,#010B66_0%,#33FCFE_100%)]"
                    >
                      Most Popular
                    </div>
                  )}

                  <span className="text-xs font-semibold uppercase tracking-wider text-foreground group-hover:text-white">
                    {plan.name}
                  </span>

                  <div className="mt-4 mb-2">
                    <span className="font-heading text-5xl font-semibold text-foreground group-hover:text-white">
                      {plan.price}
                    </span>
                    <span className="ml-1 text-lg text-muted-foreground group-hover:text-white/70">
                      / month
                    </span>
                  </div>

                  <div
                    className="mb-4 inline-block rounded-full bg-muted px-4 py-2 text-sm text-muted-foreground
                  group-hover:bg-white/10 group-hover:text-white/80"
                  >
                    One-Time Setup: {plan.setup}
                  </div>

                  <p className="mb-6 text-sm italic text-muted-foreground group-hover:text-white/70">
                    {plan.tagline}
                  </p>

                  <ul className="mb-8 flex-grow space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check className="mt-0.5 h-5 w-5 flex-shrink-0 text-foreground group-hover:text-white" />
                        <span className="text-foreground group-hover:text-white">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => {
                      setSelectedPlan(plan);
                      setOpen(true);
                    }}
                    className="mt-auto w-full rounded-lg py-3.5 font-semibold text-white transition-all duration-300
                  bg-[linear-gradient(135deg,#010B66_0%,#33FCFE_100%)]
                  hover:shadow-lg hover:shadow-cyan/30"
                  >
                    Build Your Site Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Upgrade Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mt-12 max-w-5xl rounded-r-lg border-l-4 border-foreground bg-muted/50 p-6"
          >
            <h3 className="mb-3 font-heading text-lg font-semibold text-foreground">
              Fair, No-Penalty Upgrade Policy
            </h3>

            <div className="space-y-2 text-sm text-muted-foreground">
              <p>• You only pay the difference in setup fees when upgrading</p>
              <p>• Maximum setup fee is $299 total</p>
              <p>• Any setup fee you've already paid is fully adjusted</p>
              <p className="pt-2 font-medium text-foreground">Examples:</p>
              <p>• Starter → AI Standard: Pay $51 extra</p>
              <p>• Starter → AI Pro: Pay $100 extra</p>
              <p>• AI Standard → AI Pro: Pay $49 extra</p>
            </div>
          </motion.div>
        </div>
      </section>
      <PricingInquiryOverlay open={open} onClose={() => setOpen(false)} plan={selectedPlan} />
    </>
  );
}
