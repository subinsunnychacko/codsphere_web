import { motion } from "framer-motion";
import {
  Wrench,
  Zap,
  Droplets,
  Home,
  Sparkles,
  TreeDeciduous,
  Truck,
  Briefcase,
} from "lucide-react";

const industries = [
  { icon: Wrench, name: "Contractors" },
  { icon: Zap, name: "Electricians" },
  { icon: Droplets, name: "Plumbers" },
  { icon: Home, name: "Home Services" },
  { icon: Sparkles, name: "Cleaners" },
  { icon: TreeDeciduous, name: "Landscapers" },
  { icon: Truck, name: "Movers" },
  { icon: Briefcase, name: "Consultants" },
];

export function WhoItsFor() {
  return (
    <section className="min-h-screen bg-white flex items-center py-20">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-normal leading-tight text-gray-900">
            Built for Businesses That Can't Sit at a Desk All Day
          </h2>
        </motion.div>

        {/* Industries */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-14">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex w-28 flex-col items-center gap-3"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gray-900">
                <industry.icon className="h-7 w-7 text-white" />
              </div>

              <span className="text-center text-sm font-medium text-gray-900">{industry.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
