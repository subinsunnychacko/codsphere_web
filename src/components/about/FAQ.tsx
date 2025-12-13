"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

const data = [
  {
    q: "Do you only serve clients in Canada?",
    a: "No — we&apos;re proud to be based in Canada but work with startups and enterprises across the US, UK, and other global regions.",
  },
  {
    q: "What happens after launch?",
    a: "We continue optimisation, support, and roadmap delivery.",
  },
  {
    q: "Can CodSphere integrate with our existing tools?",
    a: "Absolutely. We integrate CRMs, ERPs, invoicing, analytics, and custom apps.",
  },
];

type ItemProps = {
  q: string;
  a: string;
  isOpen: boolean;
  onToggle: () => void;
};

/** A single accordion item with smooth height transition */
function FaqItem({ q, a, isOpen, onToggle }: ItemProps) {
  const headerRef = useRef<HTMLButtonElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [maxH, setMaxH] = useState<number>(0);

  // Recompute heights when open/closed or on resize
  useEffect(() => {
    const compute = () => {
      const headerH = headerRef.current?.offsetHeight ?? 0;
      const contentH = contentRef.current?.scrollHeight ?? 0;
      setMaxH(isOpen ? headerH + contentH : headerH);
    };
    compute();
    // recompute on window resize for responsive text wrapping
    window.addEventListener("resize", compute);
    return () => window.removeEventListener("resize", compute);
  }, [isOpen]);

  return (
    <div
      className="overflow-hidden rounded-[17px] border border-[#D7D7D7] bg-[#F5F6FA] transition-[max-height] duration-300 ease-in-out"
      style={{ maxHeight: maxH }}
    >
      <button
        ref={headerRef}
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full text-left p-6 flex items-center justify-between"
      >
        <div className="text-[20px] leading-[26px] md:text-[22px] md:leading-[26px] font-medium text-black font-sequel">
          {q}
        </div>
        <div className="h-[42px] w-[42px] rounded-full bg-[#608BF3] grid place-items-center text-white flex-shrink-0">
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          />
        </div>
      </button>

      {/* Answer area. Padding lives inside measured content so text never clips. */}
      <div ref={contentRef} className="px-6 pb-6">
        <div className="text-[16px] leading-[22px] text-black font-sequel">{a}</div>
      </div>
    </div>
  );
}

export default function Faq() {
  const [open, setOpen] = useState<number>(-1); // none open by default

  return (
    <section className="bg-white">
      <div className="container-wrapper pt-more">
        <div className="grid grid-cols-1 lg:grid-cols-5 xl:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Header */}
          <div className="flex flex-col justify-center lg:col-span-3 xl:col-auto">
            <h2 className="text-[42px] leading-[52px] md:text-[50px] md:leading-[65px] font-medium text-black font-sequel max-w-[520px]">
              FAQs: Fast Answers to Common Questions
            </h2>
            <p className="mt-6 text-[20px] leading-[26px] md:text-[20px] md:leading-[28px] text-black font-sequel font-light">
              We've helped fast-growing startups and established businesses streamline their
              operations, build stronger CRMs, and grow online.
            </p>
          </div>

          {/* Right Column - FAQ Items */}
          <div className="space-y-4 w-full lg:col-span-2 xl:col-auto">
            {data.map((item, idx) => (
              <FaqItem
                key={idx}
                q={item.q}
                a={item.a}
                isOpen={open === idx}
                onToggle={() => setOpen(open === idx ? -1 : idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
