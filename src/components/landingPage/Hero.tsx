import { ArrowRight, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[hsl(var(--dark-blue))]">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/hero-landing.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-20 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block text-[hsl(var(--cyan))] text-sm font-semibold uppercase tracking-[3px] mb-4">
              AI-Powered Lead Capture
            </span>

            <h1 className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-[1.05] mb-6 max-w-[620px]">
              Your AI Answers Inquiries, Qualifies Leads, and Captures Contacts Automatically
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8 max-w-[520px]">
              Stop losing leads while you're on the job. CodSphere's AI works 24/7 to engage
              visitors, qualify prospects, and route them to you ready to close.
            </p>

            <a
              href="#pricing"
              className="
                inline-flex items-center gap-3
                rounded-lg px-8 py-4 font-semibold text-white
                bg-[linear-gradient(135deg,#010B66_0%,#33FCFE_100%)]
                transition-all duration-300
                hover:shadow-lg hover:shadow-cyan-400/30
              "
            >
              <ArrowRight className="w-5 h-5" />
              Build Your Site Now
            </a>
          </motion.div>

          {/* Right chat preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="hidden lg:block"
          >
            <div className="relative animate-[float_4s_ease-in-out_infinite]">
              {/* Glow */}
              <div
                className="
    absolute -inset-10 rounded-full
    bg-[hsl(var(--cyan))]/15 blur-3xl
    animate-[pulseGlow_3s_ease-in-out_infinite]
  "
              />

              {/* Glass card */}
              <div
                className="
                relative ml-auto max-w-sm p-6
                rounded-xl border border-white/15
                bg-white/5 backdrop-blur-xl
                shadow-lg shadow-black/20
              "
              >
                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-white/10">
                  <div
                    className="
                    w-10 h-10 rounded-full
                    bg-gradient-to-br
                    from-[hsl(var(--cyan))]
                    to-[hsl(var(--dark-blue))]
                    flex items-center justify-center
                  "
                  >
                    <MessageSquare className="w-5 h-5 text-white" />
                  </div>

                  <div>
                    <p className="text-white font-medium text-sm">CodSphere Assistant</p>
                    <p className="text-white/50 text-xs">Online now</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="bg-white/10 rounded-2xl rounded-tl-none p-3">
                    <p className="text-white text-sm">
                      Hi! 👋 I'm here to help. What service are you looking for today?
                    </p>
                  </div>

                  <div className="bg-[hsl(var(--cyan))]/20 rounded-2xl rounded-tr-none p-3 ml-8">
                    <p className="text-white text-sm">
                      I need an electrician for a home rewiring project
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-2xl rounded-tl-none p-3">
                    <p className="text-white text-sm">
                      Great! I can help with that. What's your zip code so I can check availability?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
