import type { Testimonial } from "./testimonial-cards";
import TestimonialCards from "./testimonial-cards";

const testimonials: Testimonial[] = [
  {
    id: "1",
    initials: "M",
    name: "Mike R",
    job: "Electrician, Toronto",
    content:
      "Most website enquiries used to be time-wasters. With this layout, the leads we get are clearer and more serious about the job.",
    avatar: "",
  },
  {
    id: "2",
    initials: "S",
    name: "Sean.C",
    job: "Electrician, Vancouver",
    content:
      "The site finally looks professional on mobile. Customers mention reviews and service details before even calling.",
    avatar: "",
  },
  {
    id: "3",
    initials: "J",
    name: "Jasper.M",
    job: "Electrician, Missisauga",
    content:
      "Everything is laid out properly services, contact, trust signals. It feels like the website actually works for us now.",
    avatar: "",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="container-wrapper pt-12 lg:pt-16 xl:pt-20 pb-12 lg:pb-14 bg-white overflow-hidden">
      <div className="text-center max-w-5xl mx-auto pb-4 md:pb-10 flex flex-col items-center">
        {/* <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]"></p> */}
        <h2 className="text-[48px] sm:text-[30px] lg:text-[48px] font-semibold">
          Built with real service businesses in mind
        </h2>
        <p className="mt-2 text-[20px] lg:text-[20px] font-light leading-relaxed max-w-4xl">
          This template reflects real trade workflows, customer behavior, and early feedback from
          electricians focused on clearer leads, stronger trust, and better mobile usability.
        </p>
      </div>
      <TestimonialCards testimonials={testimonials} />
    </section>
  );
}
