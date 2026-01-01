import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/landingPage/ui/accordion";

const faqs = [
  {
    question: "Will it sound like a robot?",
    answer:
      "Nope. We customize the tone and responses to match your business personality. It sounds like you, not a machine.",
  },
  {
    question: "What if a customer asks something it can't answer?",
    answer:
      "It captures their info and alerts you immediately — no lead left behind. You can always follow up personally.",
  },
  {
    question: "How long does setup take?",
    answer: "Most businesses are live within 48 hours. We handle everything.",
  },
  {
    question: "Do I need to do anything technical?",
    answer: "Not a thing. We set up, configure, and launch. You just provide your business info.",
  },
  {
    question: "Can I upgrade later?",
    answer: "Absolutely. You only pay the difference in setup fees. No penalties.",
  },
  {
    question: "Is there a contract?",
    answer: "No long-term contracts. Cancel anytime. We earn your business every month.",
  },
];

export function FAQ() {
  return (
    <section className="min-h-[110vh] bg-white py-28 flex items-center">
      <div className="container-wrapper mx-auto w-full max-w-7xl px-6 lg:px-20">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-normal text-gray-900">
            Questions? We've Got Answers.
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="
                  rounded-xl
                  border border-gray-200
                  bg-white
                  px-6
                "
              >
                <AccordionTrigger
                  className="
                    py-5
                    text-left
                    text-base
                    font-medium
                    text-gray-900
                    hover:no-underline
                  "
                >
                  {faq.question}
                </AccordionTrigger>

                <AccordionContent className="pb-5 text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
