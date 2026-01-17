"use client";
import { Star } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";
import { useEffect, useRef } from "react";

export interface Testimonial {
  id: string;
  initials: string;
  name: string;
  content: string;
  avatar: string;
}

export default function TestimonialCards({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollWidth = container.scrollWidth - container.clientWidth;

    // Create GSAP timeline for continuous back-and-forth scrolling
    const createScrollAnimation = () => {
      tweenRef.current = gsap.to(container, {
        scrollLeft: scrollWidth,
        duration: scrollWidth / 50, // Adjust speed (higher = slower)
        ease: "none",
        onComplete: () => {
          // Scroll back to start
          tweenRef.current = gsap.to(container, {
            scrollLeft: 0,
            duration: scrollWidth / 50,
            ease: "none",
            onComplete: createScrollAnimation, // Loop
          });
        },
      });
    };

    createScrollAnimation();

    return () => {
      if (tweenRef.current) {
        tweenRef.current.kill();
      }
    };
  }, [testimonials]);

  const handleMouseEnter = () => {
    if (tweenRef.current) {
      tweenRef.current.pause();
    }
  };

  const handleMouseLeave = () => {
    if (tweenRef.current) {
      tweenRef.current.resume();
    }
  };

  return (
    <div
      ref={scrollContainerRef}
      className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
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
