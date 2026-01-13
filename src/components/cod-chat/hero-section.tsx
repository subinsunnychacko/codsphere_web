import { ArrowRight, MessageCircle, Send } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      className="
        relative min-h-screen w-full overflow-hidden
        -mt-20 sm:-mt-[88px] lg:-mt-[104px]
        pt-24 sm:pt-[120px] lg:pt-[140px]
        pb-10 sm:pb-14
        bg-gradient-to-br from-[#0a1628] via-[#0d2847] to-[#0a1628]
      "
    >
      {/* Background Video - Use abstract blue waves/particles */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-40"
      >
        <source src="/videos/blue-waves-bg.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0d2847]/70 to-[#0a1628]/80" />

      {/* Decorative Wave Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute w-full h-full opacity-20"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
        >
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M0,400 Q300,300 600,400 T1200,400"
            stroke="url(#waveGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,500 Q300,400 600,500 T1200,500"
            stroke="url(#waveGradient)"
            strokeWidth="1.5"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />
          <path
            d="M0,600 Q300,500 600,600 T1200,600"
            stroke="url(#waveGradient)"
            strokeWidth="1"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: "1s" }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div
        className="
          relative z-10 container-wrapper
          flex flex-col lg:flex-row
          justify-center lg:justify-between
          items-center
          gap-6 sm:gap-8 lg:gap-6
          px-4 sm:px-6 lg:px-8
        "
      >
        {/* LEFT CONTENT */}
        <div className="text-white w-full lg:w-1/2 xl:w-5/12 flex flex-col gap-3 sm:gap-4 text-center lg:text-start">
          <h1
            className="
              font-sequel font-bold leading-[1.15]
              text-[22px]
              sm:text-[28px]
              md:text-[34px]
              lg:text-[38px]
              xl:text-[44px]
            "
          >
            Your Website. Powered by AI Conversations. Built to Capture Leads.
          </h1>

          <p
            className="
              leading-relaxed text-gray-300
              text-[13px]
              sm:text-[14px]
              md:text-[15px]
              lg:text-[16px]
              max-w-xl lg:max-w-none mx-auto lg:mx-0
            "
          >
            CodChat plugs into your website to qualify visitors and capture enquiries automatically
            even while you're on the job.
          </p>

          <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3 w-full justify-center lg:justify-start mt-1">
            {/* CAPTURE LEADS BUTTON */}
            <a href="#codchat-pricing" className="block w-full sm:w-auto">
              <button
                className="
        w-full
        h-[52px]
        rounded-full
        bg-linear-to-r from-[#33FCFE] to-[#010B66]
        text-white
        text-[15px]
        p-[3px]
      "
              >
                <div
                  className="
          flex h-full items-center justify-center gap-3
          rounded-full
          px-4
          bg-linear-to-l from-[#33fbfe] to-[#010B66]
        "
                >
                  <div className="bg-linear-to-t from-[#33FCFE] to-[#010B66] rounded-full p-0.5 shrink-0">
                    <ArrowRight />
                  </div>
                  <span className="whitespace-nowrap">Capture Leads with CodeChat</span>
                </div>
              </button>
            </a>

            {/* HOW IT FITS BUTTON */}
            <Link href="/cod-chat" className="block w-full sm:w-auto">
              <button
                className="
        w-full
        h-[52px]
        rounded-full
        border-2 border-white
        text-[15px]
        flex justify-center items-center
        hover:bg-white hover:text-black
        whitespace-nowrap
        px-10
      "
              >
                How it Fits Your Website
              </button>
            </Link>
          </div>

          <p className="text-gray-400 text-[12px] sm:text-[13px]">
            A simple add-on. No rebuild required. No downtime.
          </p>
        </div>

        {/* RIGHT CONTENT - CHATBOT MOCKUP */}
        <div className="w-full lg:w-1/2 xl:w-6/12 flex justify-center lg:justify-end">
          <div
            className="
              w-full max-w-[320px] sm:max-w-[360px] lg:max-w-[380px]
              bg-gradient-to-br from-[#0d3a5c]/80 to-[#0a2a45]/80
              backdrop-blur-xl
              rounded-xl sm:rounded-2xl
              border border-cyan-500/20
              shadow-2xl shadow-cyan-500/10
              overflow-hidden
            "
          >
            {/* Chat Header */}
            <div className="bg-gradient-to-r from-[#0d4a6f] to-[#0a3d5c] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2.5 sm:gap-3">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shrink-0">
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-[13px] sm:text-[14px]">CodChat</h3>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-[10px] sm:text-[11px]">online</span>
                </div>
              </div>
            </div>

            {/* Chat Body */}
            <div className="p-3 sm:p-4 flex flex-col gap-2.5 sm:gap-3 max-h-[280px] sm:max-h-[320px] overflow-y-auto">
              {/* Bot Message */}
              <div className="flex flex-col gap-1.5 max-w-[90%]">
                <div className="bg-[#0d4a6f]/60 rounded-xl rounded-tl-sm px-3 py-2 sm:px-3.5 sm:py-2.5">
                  <p className="text-white text-[11px] sm:text-[12px] leading-relaxed">
                    "Hey! I'm CodChat 👋 I can help you build a website that captures leads
                    automatically. What are you trying to build today?"
                  </p>
                </div>
              </div>

              {/* Quick Reply Options */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 ml-1">
                <QuickReplyButton text="I'm a trades business" />
                <QuickReplyButton text="I need more leads" />
                <QuickReplyButton text="Only Chat Service" />
                <QuickReplyButton text="Talk To Our Team" />
              </div>

              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl rounded-tr-sm px-3 py-2 sm:px-3.5 sm:py-2.5 max-w-[75%]">
                  <p className="text-white text-[11px] sm:text-[12px]">I'm a tradesman</p>
                </div>
              </div>

              {/* Bot Response */}
              <div className="flex flex-col gap-1.5 max-w-[90%]">
                <div className="bg-[#0d4a6f]/60 rounded-xl rounded-tl-sm px-3 py-2 sm:px-3.5 sm:py-2.5">
                  <p className="text-white text-[11px] sm:text-[12px] leading-relaxed">
                    "Hey! I'm CodChat 👋 I can help you build a website that captures leads
                    automatically. What are you trying to build today?"
                  </p>
                </div>
              </div>

              {/* More Quick Replies */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 ml-1">
                <QuickReplyButton text="Get more local leads" active />
                <QuickReplyButton text="What's included for trades" active />
                <QuickReplyButton text="Can this work on the job?" active />
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-2.5 sm:p-3 border-t border-cyan-500/20">
              <div className="flex items-center gap-2 bg-[#0a3d5c]/50 rounded-full px-3 sm:px-4 py-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 bg-transparent text-white text-[12px] sm:text-[13px] placeholder-gray-400 outline-none min-w-0"
                  readOnly
                />
                <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center hover:opacity-80 transition-opacity shrink-0">
                  <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Quick Reply Button Component
function QuickReplyButton({ text, active = false }: { text: string; active?: boolean }) {
  return (
    <button
      className={`
        px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-full text-[9px] sm:text-[10px] font-medium
        border transition-colors whitespace-nowrap
        ${
          active
            ? "bg-gradient-to-r from-cyan-500 to-blue-500 border-transparent text-white"
            : "border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/10"
        }
      `}
    >
      {text}
    </button>
  );
}
