import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Mike R.",
    role: "Electrical Contractor",
    avatar: "MR",
    quote:
      "I used to lose 3-4 leads a week because I couldn't answer fast enough. Now my website handles the first conversation and I just show up to close.",
  },
  {
    name: "Sarah T.",
    role: "Cleaning Service",
    avatar: "ST",
    quote:
      "It's like having a receptionist who never sleeps and never asks for a raise. Game changer for my small business.",
  },
  {
    name: "Dave K.",
    role: "HVAC Technician",
    avatar: "DK",
    quote:
      "Setup was painless. Within 48 hours I had a professional site that actually brings in leads while I'm on jobs.",
  },
];

export function Testimonials() {
  return (
    <section className="min-h-screen bg-gray-100 py-24 flex items-center">
      <div className="mx-auto w-full max-w-7xl px-6 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
            Business Owners Who Got Their Time Back
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="
                rounded-2xl bg-white p-7
                shadow-lg
                transition-all duration-300
                hover:-translate-y-1 hover:shadow-xl
              "
            >
              {/* Header */}
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-900 to-sky-400">
                  <span className="text-lg font-bold text-white">{testimonial.avatar}</span>
                </div>

                <div>
                  <p className="text-xl font-medium text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>

              {/* Stars */}
              <div className="mb-5 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-blue-900 text-blue-900" />
                ))}
              </div>

              {/* Quote */}
              <p className="leading-relaxed text-gray-600">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
