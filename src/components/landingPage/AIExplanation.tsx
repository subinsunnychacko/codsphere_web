import { motion } from "framer-motion";
import { FileText, Brain, Rocket } from "lucide-react";

const plans = [
  {
    icon: FileText,
    name: "Starter",
    description: "Fixed answers to common questions. You write the script.",
  },
  {
    icon: Brain,
    name: "AI Standard",
    description: "Smarter responses pulled from your website content automatically.",
  },
  {
    icon: Rocket,
    name: "AI Pro",
    description: "Advanced understanding + can reference documents, policies & more.",
  },
];

export function AIExplanation() {
  return (
    <section className="min-h-screen bg-slate-950 flex items-center py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-medium text-white">
            What's the Difference Between Plans?
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                rounded-xl p-8 text-center
                bg-white/5 backdrop-blur-xl
                border border-cyan-400/20
                shadow-lg shadow-cyan-400/5
              "
            >
              <plan.icon className="mx-auto mb-5 h-10 w-10 text-cyan-400" />

              <h3 className="mb-3 text-lg font-medium text-white">{plan.name}</h3>

              <p className="text-sm leading-relaxed text-white/70">{plan.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <p className="mt-14 text-center text-sm text-white/60">
          No technical knowledge required. We set everything up for you.
        </p>
      </div>
    </section>
  );
}
