import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  "Clean, modern Figma-designed website",
  "Colors matched to your trade or brand",
  "Mobile-first layout",
  "No design fees",
  "No redesign charges",
];

export function DesignIncluded() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-100 to-white">
      <div className="container-wrapper mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-slate-900 mb-8">
              Professional Design, Included Free
            </h2>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center">
                    <Check className="w-4 h-4 text-slate-700" />
                  </div>
                  <span className="text-slate-700">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 text-lg font-medium text-slate-900">
              You don't pay extra to look professional — it's included.
            </p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Neutral glow */}
            <div
              className="
              absolute inset-0
              bg-gradient-to-br from-slate-200/60 to-slate-400/20
              rounded-2xl blur-3xl
            "
            />

            {/* Glass card */}
            <div
              className="
              relative rounded-2xl p-8
              bg-white/70 backdrop-blur-xl
              border border-slate-200
              shadow-xl shadow-black/10
            "
            >
              <div className="space-y-4">
                <div className="h-4 w-32 bg-slate-300/70 rounded" />
                <div className="h-8 w-full bg-slate-200 rounded" />

                <div className="grid grid-cols-3 gap-3">
                  <div className="h-24 bg-slate-200 rounded-lg" />
                  <div className="h-24 bg-slate-200 rounded-lg" />
                  <div className="h-24 bg-slate-200 rounded-lg" />
                </div>

                <div className="h-4 w-48 bg-slate-200 rounded" />
                <div className="h-4 w-40 bg-slate-200 rounded" />

                <div className="flex gap-3">
                  <div className="h-10 w-24 bg-slate-700 rounded-full" />
                  <div className="h-10 w-24 bg-slate-300 rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
