import { motion } from "framer-motion";
import { HandMetal, Lightbulb, CheckCircle, Target } from "lucide-react";

const benefits = [
  {
    icon: HandMetal,
    title: "Greets visitors instantly",
    description: "First impressions matter — yours starts with a conversation",
  },
  {
    icon: Lightbulb,
    title: "Answers common questions",
    description: `"What's your rate?" "Do you serve my area?" — handled.`,
  },
  {
    icon: CheckCircle,
    title: "Qualifies serious inquiries",
    description: "Know who's ready to buy before you call back",
  },
  {
    icon: Target,
    title: "Captures leads before they leave",
    description: "Email, phone, project details — collected automatically",
  },
];

export function ProblemSolution() {
  return (
    <section className="bg-slate-100 py-20">
      <div className="container-wrapper mx-auto max-w-7xl px-6 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Accent label */}
          <span className="block font-['Damion'] text-[35px] text-slate-400/60">
            Why This Works
          </span>

          {/* Heading */}
          <h2 className="mt-2 mb-6 font-['Poppins'] text-3xl md:text-4xl font-normal tracking-tight text-slate-900">
            Most Websites Sit There. Ours Starts the Conversation.
          </h2>

          {/* Body */}
          <p className="font-['Inter'] text-lg text-slate-500">
            Traditional websites wait for visitors to click around. A conversational website talks
            first.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-xl bg-white p-6 text-center shadow-lg shadow-black/5"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-900">
                <benefit.icon className="h-6 w-6 text-white" />
              </div>

              <h3 className="mb-2 font-['Poppins'] text-lg font-semibold text-slate-900">
                {benefit.title}
              </h3>

              <p className="font-['Inter'] text-slate-500">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-xl text-center font-['Inter'] text-lg font-medium text-slate-900"
        >
          This means fewer missed opportunities and less stress for you.
        </motion.p>
      </div>
    </section>
  );
}
