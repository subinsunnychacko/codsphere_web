"use client";

import AnimatedNumber from "@/components/trade-demo/ui/AnimatedNumber";
import { motion } from "framer-motion";
import { CheckCircle2, Users, Target, Shield } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      {/* Hero */}
      <div className="relative py-24 bg-[#1a1c1e] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          {/* construction blueprint geometric pattern */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/ElectricianBG.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1e] via-[#1a1c1e]/25 to-[#1a1c1e]/40" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-['Nunito_Sans'] font-bold text-white mb-8">
              TRUSTED ELECTRICAL EXPERTS SINCE 2005
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              ProBuild was founded with a simple mission: to deliver safe, reliable, and
              code-compliant electrical services backed by transparent communication. For nearly two
              decades, homeowners and businesses have trusted us for electrical work done right the
              first time.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="mt-24 mb-48 mx-4 sm:mx-10 lg:mx-36 my-48 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[
          { label: "Projects Completed", value: "500+" },
          { label: "Years in Business", value: "18+" },
          { label: "Team Members", value: "45" },
          { label: "Awards Won", value: "12" },
        ].map((stat, i) => (
          <div key={i} className="text-center p-5 bg-[#1a1c1e]/90 rounded-xl">
            <div className="text-4xl md:text-5xl font-['Nunito_Sans'] font-bold text-[#d4915a] mb-2">
              <AnimatedNumber value={stat.value} />
            </div>
            <div className="text-white/70 font-medium uppercase tracking-wide text-sm">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {[
            {
              icon: Target,
              title: "Our Mission",
              text: "To provide safe, licensed, and code-compliant electrical solutions that protect people, property, and long-term reliability without shortcuts.",
            },
            {
              icon: Users,
              title: "Our Team",
              text: "Our team consists of licensed electricians and trained technicians with hands-on experience across residential, commercial, and service work from diagnostics to full system upgrades.",
            },
            {
              icon: Shield,
              title: "Our Values",
              text: "Safety, accountability, and workmanship guide every electrical job we take on. We follow local codes, prioritize clean installations, and stand behind our work long after the job is complete.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-[#d4915a]"
            >
              <div className="w-14 h-14 bg-[#1a1c1e]/5 rounded-lg flex items-center justify-center mb-6 text-[#1a1c1e]">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-['Nunito_Sans'] font-bold text-[#1a1c1e] mb-4">
                {item.title}
              </h3>
              <p className="text-gray-500">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-['Nunito_Sans'] font-bold text-[#1a1c1e] mb-6">
              HOW WE MAKE PROJECTS EASIER
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-[#1a1c1e]/70 leading-relaxed">
                We focus on clear communication, careful planning, and consistent execution so your
                project moves forward without unnecessary stress or surprises.
              </p>
              <div className="space-y-4">
                {[
                  "Clear, upfront pricing",
                  "Licensed and fully insured",
                  "Dedicated project oversight",
                  "Long-term workmanship warranty",
                  "Clean, safety-focused job sites",
                ].map((item, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle2 className="text-[#d4915a] w-6 h-6 flex-shrink-0" />
                    <span className="text-[#1a1c1e] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="relative">
            {/* Construction team meeting */}
            <img
              src="/images/trade-demo/Team.png"
              alt="Team Meeting"
              className="rounded-2xl shadow-2xl relative z-10"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-[#d4915a]/20 rounded-2xl z-0" />
          </div>
        </div>
      </div>
    </div>
  );
}
