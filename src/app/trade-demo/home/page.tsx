"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/trade-demo/ui/button";
import { Card, CardContent } from "@/components/trade-demo/ui/card";
import { ShieldCheck, CheckCircle2, Award, Star, Wrench, Zap } from "lucide-react";

/* ---------------- DATA ---------------- */

const features = [
  {
    icon: ShieldCheck,
    title: "Licensed & Insured",
    description: "Licensed electricians with insurance coverage for peace of mind.",
  },
  {
    icon: CheckCircle2,
    title: "ESA / Code-Compliant",
    description: "Work completed to local electrical code and safety standards.",
  },
  {
    icon: Award,
    title: "Trusted Locally",
    description: "Backed by real reviews from homeowners and businesses.",
  },
];

const testimonials = [
  {
    name: "Sarah Madison",
    role: "Homeowner",
    text: "ProBuild handled a full electrical upgrade in our home, and everything was done cleanly, safely, and to code. They explained what needed to be fixed and why. No guesswork, no pressure.",
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    text: "Reliable electricians are hard to find. ProBuild showed up on time, followed safety standards, and completed our commercial electrical work without disrupting operations. Highly recommend!",
  },
  {
    name: "Emily Davis",
    role: "Real Estate Agent",
    text: "I recommend ProBuild to my clients because their electrical work is always compliant, professional, and dependable. Whether it's a quick fix or a major upgrade, they do it right. Lovely Work!",
  },
];

const topServices = [
  {
    icon: Wrench,
    title: "Electric Repairs & Troubleshooting",
    description:
      "Fast diagnosis and repair of tripping breaker, faulty wiring, power outage & electrical hazards.",
    image:
      "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
  },
  {
    icon: Zap,
    title: "Electrical Panel Upgrades",
    description:
      "Upgrade outdated electrical panels to meet modern power demands and ensure safety, efficiency, and ESA compliance.",
    image: "/images/trade-demo/Panel.png",
  },
  {
    icon: Wrench,
    title: "EV Charger Installations",
    description:
      "Safe installation of home and commercial EV charging stations, including load calculations and permit handling.",
    image: "/images/trade-demo/EV Charging Scene.png",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[700px] flex items-center bg-[#1a1c1e] overflow-hidden">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-20">
          {/* construction blueprint geometric pattern */}
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src="/videos/ElectricianBG.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1c1e] via-[#1a1c1e]/25 to-[#1a1c1e]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-block bg-[#d4915a]/10 border border-[#d4915a]/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-[#d4915a] font-bold uppercase text-sm tracking-wider">
                Expert Electrical Solutions
              </span>
            </div>
            <h1 className="text-2xl md:text-5xl font-['Nunito_Sans'] font-bold text-white mb-6 leading-tight">
              Licensed Electrical Work
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4915a] to-yellow-200">
                You Can Trust.
              </span>
            </h1>
            <p className="text-lg text-white/80 mb-8 max-w-2xl leading-relaxed">
              Licensed electricians delivering safe, reliable electrical work for homes and
              businesses with fast response times and zero guesswork.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="default"
                className="bg-[#d4915a] text-[#1a1c1e] hover:bg-[#173050]/60 hover:text-white font-bold text-lg px-8 py-4 uppercase tracking-wide"
              >
                <Link href="/trade-demo/contact">Get Free Quote</Link>
              </Button>
              <Button
                asChild
                size="default"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10 hover:text-white font-bold text-lg px-8 py-4 uppercase tracking-wide"
              >
                <Link href="/trade-demo/portfolio">Call Now</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mb-16 py-20 bg-[#173050] relative z-20 -mt-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-['Nunito_Sans'] font-bold text-white mb-3">
            Why Choose Us?
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            We don&apos;t just fix electrical issues. We help you understand them, plan them
            properly, and avoid repeat problems down the line.
          </p>
          <div className="h-1 w-16 bg-[#d4915a] mx-auto mt-5" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="h-full bg-white/10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                  <CardContent className="p-8 text-center">
                    <div className="mx-auto w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-6 text-[#1a1c1e] group-hover:bg-[#1a1c1e] group-hover:text-white transition-colors">
                      <feature.icon className="w-8 h-8 text-[#d4915a]" />
                    </div>
                    <h3 className="text-xl text-white mb-3">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Most Requested / Top Rated Services */}
      <section className="mb-16 relative z-20 -mt-10 mx-4 sm:mx-10 lg:mx-20 my-20">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-['Nunito_Sans'] font-bold text-[#1a1c1e] mb-3">
            Most Requested Electrical Services
          </h2>
          <p className="text-[#1a1c1e]/70 max-w-2xl mx-auto">
            Popular for a reason: safety upgrades, fast fixes, and installs that meet code and
            inspection standards.
          </p>
          <div className="h-1 w-16 bg-[#d4915a] mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {topServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-white h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-[#d4915a]/60 group hover:border-[#173050]/25 hover:-translate-y-[5px]">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-[#1a1c1e]/20 z-10 group-hover:bg-[#d4915a]/10 transition-colors duration-500" />
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Icon badge */}
                  <div className="absolute bottom-4 left-4 z-20 bg-[#173050] text-white p-2 rounded-lg shadow-lg">
                    <service.icon className="w-6 h-6" />
                  </div>

                  {/* Small "Most Booked" chip */}
                  <div className="absolute top-4 left-4 z-20 rounded-full bg-[#173050]/80 text-white px-3 py-1 text-xs tracking-wide uppercase border border-[#173050]/40">
                    Most Booked
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-2xl font-['Nunito_Sans'] font-bold mb-3 group-hover:text-[#1a1c1e] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#1a1c1e]/70 mb-6 leading-relaxed">{service.description}</p>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-[#1a1c1e]/20 hover:bg-[#173050] hover:text-white group-hover:border-[#173050] transition-all uppercase tracking-wide font-bold"
                  >
                    <Link href="/trade-demo/contact">Get Quote</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            className="px-8 rounded-full border-[#1a1c1e]/40 bg-[#d4915a] text-[#1a1c1e] font-bold hover:bg-[#173050] hover:text-white"
          >
            <Link href="/trade-demo/services">View All Services</Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-[#1a1c1e] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4915a]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#d4915a]/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-['Nunito_Sans'] font-bold text-white mb-4">
              Trusted Electrical Work, Backed by Real Clients
            </h2>
            <p className="text-white/60">
              Licensed, insured, and recommended by the people who count on our work every day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="flex text-[#d4915a] mb-4">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star key={starIndex} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-white/80 mb-6 leading-relaxed italic">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <div className="font-bold text-white text-lg">{t.name}</div>
                  <div className="text-[#d4915a] text-sm uppercase tracking-wider">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#173050]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-['Nunito_Sans'] font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-white/70 text-xl mb-8 max-w-2xl mx-auto">
            Contact us today for a free consultation and estimate. Let&apos;s build something great
            together.
          </p>
          <Button
            asChild
            size="default"
            className="bg-[#d4915a] text-[#1a1c1e] hover:bg-[#d4915a]/50 text-xl px-12 py-6 uppercase font-bold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
          >
            <Link href="/trade-demo/contact">Get Your Free Quote</Link>
          </Button>
        </div>
      </section>

      {/* Sticky CodChat CTA */}
    </div>
  );
}
