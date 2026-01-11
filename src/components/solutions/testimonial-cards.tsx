import { Star } from "lucide-react";
import Image from "next/image";

export interface Testimonial {
  id: string;
  initials: string;
  name: string;
  job: string;
  content: string;
  avatar: string;
}

export default function TestimonialCards({ testimonials }: { testimonials: Testimonial[] }) {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {testimonials.map((testimonial) => (
        <div
          key={testimonial.id}
          className="
            bg-white
            p-5 lg:p-6
            flex flex-col
            rounded-xl
            max-w-[380px]
            h-[290px]
          "
          style={{
            border: "3px solid transparent",
            backgroundImage:
              "linear-gradient(white, white), linear-gradient(to right, #33FCFE, #010B66)",
            backgroundOrigin: "border-box",
            backgroundClip: "padding-box, border-box",
          }}
        >
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className="relative w-[80px] h-[80px] bg-[#A0ECED] rounded-full overflow-hidden flex items-center justify-center">
              {testimonial.avatar ? (
                <Image
                  src={testimonial.avatar}
                  alt={`${testimonial.name} testimonial`}
                  fill
                  className="object-cover"
                />
              ) : (
                <span className="text-[36px] font-normal">{testimonial.initials}</span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="font-normal text-black text-[25px]">{testimonial.name}</h3>
              <p className="text-[16px] font-normal">{testimonial.job}</p>

              <div className="flex gap-0.5 my-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-blue-600 text-blue-600" />
                ))}
              </div>
            </div>
          </div>

          {/* Content */}
          <p className="text-[18px] text-black/80 grow text-justify">{testimonial.content}</p>
        </div>
      ))}
    </div>
  );
}
