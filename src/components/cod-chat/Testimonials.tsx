import type { Testimonial } from "./testimonial-cards";
import TestimonialCards from "./testimonial-cards";

const testimonials: Testimonial[] = [
  {
    id: "1",
    initials: "J",
    name: "Jason M.",
    job: "Plumber, Mississauga",
    content:
      "Before CodChat, I missed enquiries while on jobs or driving. Now customers share the issue, location, and urgency upfront, so I can respond properly when I’m free.",
    avatar: "",
  },
  {
    id: "2",
    initials: "M",
    name: "Mike R.",
    job: "Electrician, Toronto",
    content:
      "CodChat filters vague messages and collects job type, property size, and availability. That’s made quoting faster and far more accurate.",
    avatar: "",
  },
  {
    id: "3",
    initials: "S",
    name: "Sean D.",
    job: "HVAC Technician, Guelph",
    content:
      "CodChat helped during peak season. While I’m on installs, it captures service requests, system type, and location, so nothing slips through.",
    avatar: "",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="container-wrapper pt-12 lg:pt-16 xl:pt-20 pb-12 lg:pb-14 bg-white overflow-hidden">
      <div className="text-center max-w-5xl mx-auto pb-4 md:pb-10 flex flex-col items-center">
        <h2 className="text-[30px] sm:text-[30px] lg:text-[48px] font-semibold">
          What Trades Are Saying After Adding CodChat
        </h2>
        <p className="mt-2 text-[20px] lg:text-[20px] font-light leading-relaxed max-w-4xl">
          How trades are capturing enquiries once CodChat is live on their website.
        </p>
      </div>

      <TestimonialCards testimonials={testimonials} />

      <p className="text-center text-sm mt-6 text-gray-500">
        Feedback shared by a small group of CodChat customers.
      </p>
    </section>
  );
}
