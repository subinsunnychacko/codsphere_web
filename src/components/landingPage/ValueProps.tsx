import { MessageCircle, Mail, Moon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const props = [
  { icon: MessageCircle, text: "Answers customer questions 24/7" },
  { icon: Mail, text: "Captures email & phone automatically" },
  { icon: Moon, text: "Works even when you're unavailable" },
  { icon: Sparkles, text: "Looks professional and modern" },
];

export function ValueProps() {
  return (
    <section className="py-12 bg-background border-b border-border">
      <div className="container-wrapper mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {props.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center gap-4"
            >
              <prop.icon className="w-8 h-8 text-foreground flex-shrink-0" strokeWidth={1.5} />
              <span className="text-foreground font-medium text-base">{prop.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
