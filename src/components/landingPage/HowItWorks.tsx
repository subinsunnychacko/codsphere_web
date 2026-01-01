import { motion } from "framer-motion";
import { Search, Palette, Rocket, DollarSign } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Your Plan",
    description: "Pick the features that fit your business",
  },
  {
    icon: Palette,
    title: "We Build It",
    description: "Custom design + chatbot setup in 48 hours",
  },
  {
    icon: Rocket,
    title: "Go Live",
    description: "Your website starts capturing leads",
  },
  {
    icon: DollarSign,
    title: "You Earn",
    description: "More leads, less stress, better business",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden py-20 bg-[#030617]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030617] via-[#020a3a]/30 to-[#030617]" />

      <div className="container-wrapper relative z-10 mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          {/* Section label */}
          <span
            className="
              block
              font-['Damion']
              text-[35px]
              text-[#7da2ff]
            "
          >
            How It Works
          </span>

          <h2
            className="
              mt-2
              font-poppins
              text-3xl md:text-4xl
              font-normal
              text-white
            "
          >
            Set It Up Once. Let It Work Forever.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-[50px] left-[15%] right-[15%] hidden h-1 md:block bg-white/20" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 text-center"
              >
                <span className="mb-2 block text-sm font-medium text-white/60">
                  Step {index + 1}
                </span>

                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-xl border border-white/20 bg-white/10">
                  <step.icon className="h-8 w-8 text-[#33fcfe]" />
                </div>

                <h3 className="mb-2 font-poppins text-xl font-medium text-white">{step.title}</h3>

                <p className="text-sm text-white/70">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href="#pricing"
            className="
              inline-flex items-center gap-2
              rounded-lg px-8 py-4
              font-poppins font-semibold
              text-white
              bg-gradient-to-br from-[#010B66] to-[#33FCFE]
              transition-all duration-300
              hover:shadow-lg hover:shadow-cyan-400/30
            "
          >
            Get Started in 48 Hours
          </a>
        </motion.div>
      </div>
    </section>
  );
}
