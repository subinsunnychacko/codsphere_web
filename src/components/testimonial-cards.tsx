"use client";
import { Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export interface Testimonial {
  id: string;
  initials: string;
  name: string;
  content: string;
  avatar: string;
}

export default function TestimonialCards({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(true);
  const [scrollDirection, setScrollDirection] = useState<"left" | "right">("left");

  useEffect(() => {
    if (!isScrolling || !scrollContainerRef.current) return;

    const interval = setInterval(() => {
      const container = scrollContainerRef.current;
      if (!container) return;

      const { scrollLeft, scrollWidth, clientWidth } = container;
      const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 10;
      const isAtStart = scrollLeft <= 10;

      if (isAtEnd && scrollDirection === "left") {
        setScrollDirection("right");
      } else if (isAtStart && scrollDirection === "right") {
        setScrollDirection("left");
      }

      const scrollAmount = window.innerWidth >= 1280 ? 2 : 4;
      if (scrollDirection === "left") {
        container.scrollLeft += scrollAmount;
      } else {
        container.scrollLeft -= scrollAmount;
      }
    }, 30);

    return () => clearInterval(interval);
  }, [scrollDirection, isScrolling]);

  return (
    <div
      ref={scrollContainerRef}
      className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      onMouseEnter={() => setIsScrolling(false)}
      onMouseLeave={() => setIsScrolling(true)}
    >
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="shrink-0 w-[300px] lg:w-[320px] xl:w-[340px] bg-white p-5 lg:p-6 flex flex-col relative rounded-xl"
          style={{
            border: "3px solid transparent",
            backgroundImage:
              "linear-gradient(white, white), linear-gradient(to right, #33FCFE, #010B66)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          <div className="flex items-start gap-3 mb-4">
            <div className="relative w-12 h-12 bg-cyan-200/20 text-black rounded-full overflow-hidden flex justify-center items-center">
              {testimonial.avatar ? (
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name} giving a testimonial about CodSphere`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 44px, (max-width: 1024px) 50px, 54px"
                />
              ) : (
                <span>{testimonial.initials}</span>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-black text-sm">{testimonial.name}</h3>
              <div className="flex gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                ))}
              </div>
            </div>
          </div>
          <p className="text-xs text-black/80 leading-relaxed grow text-justify">
            {testimonial.content}
          </p>
          {/* <p className="text-xs text-black/60 mt-3 italic">{testimonial.role}</p> */}
        </div>
      ))}
    </div>
  );
}
