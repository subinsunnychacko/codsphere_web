import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg-landing.jpg";
import Image from "next/image";

export function FinalCTA() {
  return (
    <section id="contact" className="relative min-h-[75vh] flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image src={heroBg} alt="" className="h-full w-full object-cover" />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-[#010B66]/60" />
      </div>

      <div className="container-wrapper mx-auto w-full max-w-7xl px-6 lg:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="mb-4 text-3xl md:text-5xl font-semibold tracking-tight text-white">
            Ready to Capture Every Lead?
          </h2>

          <p className="mx-auto mb-8 max-w-xl text-lg md:text-xl text-white/80 leading-relaxed">
            Your AI assistant works around the clock. Let it handle inquiries while you focus on
            results.
          </p>

          <div className="flex justify-center">
            <a
              href="#pricing"
              className="
                inline-flex items-center gap-3
                rounded-lg px-8 py-4
                font-semibold text-white
                bg-gradient-to-r from-[#010B66] to-[#33FCFE]
                transition-all duration-300
                hover:shadow-lg hover:shadow-cyan-400/30
                hover:from-[#33FCFE] hover:to-[#010B66]
              "
            >
              <ArrowRight className="h-5 w-5" />
              Build Your Site Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
