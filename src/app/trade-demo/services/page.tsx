"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/trade-demo/ui/button";
import { Card, CardContent } from "@/components/trade-demo/ui/card";
import { Hammer, Wrench, Zap, PaintBucket, Lightbulb, Home, HardHat } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Electrical Services",
    description:
      "From outlets and lighting to full home rewiring, we handle safe and reliable electrical solutions for houses, condos, and apartments.",
    image: "/images/trade-demo/Residential.png",
  },
  {
    icon: Zap,
    title: "Electrical Panel Upgrades",
    description:
      "Upgrade outdated electrical panels to meet modern power demands and ensure safety, efficiency, and ESA compliance.",
    image: "/images/trade-demo/Panel.png",
  },
  {
    icon: Lightbulb,
    title: "Lighting Installation & Upgrades",
    description:
      "Energy-efficient lighting installations for interiors, exteriors, parking areas, and landscape lighting—designed for safety and visibility.",
    image: "/images/trade-demo/Light.png",
  },
  {
    icon: Wrench,
    title: "Electrical Repairs & Troubleshooting",
    description:
      "Fast diagnosis and repair of tripping breakers, faulty wiring, power outages, and electrical hazards.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
  },
  {
    icon: Wrench,
    title: "EV Charger Installations",
    description:
      "Safe installation of home and commercial EV charging stations, including load calculations and permit handling, easy, safe & secure installations.",
    image: "/images/trade-demo/EV Charging Scene.png",
  },
  {
    icon: HardHat,
    title: "Commercial Service",
    description:
      "Electrical installations, upgrades, maintenance for offices, retail & commercial spaces minimizing downtime.",
    image: "/images/trade-demo/Commercial.png",
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-[#f8f9fb] pb-8">
      {/* Header */}
      <div className="relative h-[60vh] overflow-hidden bg-[#1a1c1e]">
        {/* Side image */}
        <img
          src="/images/trade-demo/technicial-in-orange.png"
          alt=""
          className="absolute right-0 top-0 h-full w-[45%] object-cover"
        />

        {/* Gradient fade INTO content */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1e]/95 via-[#1a1c1e]/90 to-transparent" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center px-4 sm:px-10 lg:px-40 max-w-3xl">
          <div>
            <h1 className="text-white text-4xl font-['Nunito_Sans'] font-bold">
              Reliable, code-compliant electrical work for homes and businesses
            </h1>
            <p className="text-white/80 mt-4">
              Whether it&apos;s a quick repair or a full electrical upgrade, our licensed
              electricians deliver safe, efficient solutions you can trust.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full bg-white hover:shadow-lg transition-all duration-300 hover:bg-[#d4915a]/60 hover:-translate-y-[5px] group">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-[#1a1c1e]/20 z-10 group-hover:bg-[#d4915a]/60 transition-colors duration-500" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute bottom-4 left-4 z-20 bg-[#d4915a] text-[#1a1c1e] p-2 rounded-lg shadow-lg">
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-['Nunito_Sans'] font-bold mb-3 group-hover:text-[#d4915a] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#1a1c1e]/70 mb-6 leading-relaxed">{service.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#173050]/20 hover:bg-[#173050] hover:text-white group-hover:border-[#1a1c1e] transition-all uppercase tracking-wide font-bold"
                  >
                    <Link href="/trade-demo/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-['Nunito_Sans'] font-bold text-[#1a1c1e] mb-4">
              Common Questions
            </h2>
            <div className="h-1 w-16 bg-[#d4915a] mx-auto" />
          </div>

          <div className="space-y-6">
            {[
              {
                q: "Do you offer free estimates?",
                a: "Yes, we provide completely free, detailed estimates for all potential projects.",
              },
              {
                q: "Are you licensed and insured?",
                a: "Absolutely. We are fully licensed, bonded, and insured for both residential and commercial work.",
              },
              {
                q: "What areas do you serve?",
                a: "We serve the entire metropolitan area and surrounding suburbs within a 50-mile radius.",
              },
              {
                q: "Do you handle permits?",
                a: "Yes, we handle all necessary permitting and inspections as part of our full-service approach.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="bg-[#173050] p-6 rounded-xl shadow-sm border border-[#173050]/20"
              >
                <h4 className="font-bold text-lg text-white mb-2">{faq.q}</h4>
                <p className="text-white/70">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
