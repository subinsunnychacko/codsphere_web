import type { Testimonial } from "@/components/testimonial-cards";
import TestimonialCards from "@/components/testimonial-cards";

const testimonials: Testimonial[] = [
  {
    id: "1",
    initials: "VV",
    name: "Vishal Vijayvargiya",
    content:
      "A Seamless E-Commerce Experience! CodSphere transformed our online store by delivering a fully optimized e-commerce platform with streamlined product management and a hassle-free checkout system. Thanks to their commitment to democratizing access to technology, even small businesses like ours can now compete with industry giants. Their team was incredibly responsive, ensuring our platform was both scalable and secure.",
    avatar: "",
  },
  {
    id: "2",
    initials: "BS",
    name: "B Bek Shrestha",
    content:
      "Smarter Inventory Management for Better Control With CodSphere's inventory management system, we've eliminated stock shortages and over-ordering. Their automation-first approach ensures that even small businesses like ours have access to enterprise-level inventory tracking and order management.",
    avatar: "",
  },
  {
    id: "3",
    initials: "SS",
    name: "Shraddha Singh",
    content:
      "CodSphere doesn't just make empty promises—they deliver real, measurable marketing results. We saw a guaranteed increase in leads, and their transparent pricing ensured we got the best value for our investment. Their mission of fairness and accessibility shines through in their marketing solutions. Digital marketing that guarantees results",
    avatar: "",
  },
  {
    id: "4",
    initials: "SP",
    name: "Shane Pinto",
    content:
      "High-Performance WordPress Sites – Just as Promised! CodSphere delivered exactly what they promised—a fast, high-performance WordPress website that allowed us to launch quickly. Unlike other developers who overcomplicate things, CodSphere prioritizes simplicity, automation, and scalability, allowing businesses of all sizes to access top-tier web solutions without being trapped in restrictive platforms.",
    avatar: "",
  },
  {
    id: "5",
    initials: "KM",
    name: "Kirti Mishra",
    content:
      "Working with CodSphere has been an absolute pleasure. They revamped our website, making it both stunning and functional. The team really took the time to understand our needs and delivered beyond our expectations. Highly recommend their web development services!",
    avatar: "",
  },
  {
    id: "6",
    initials: "RJ",
    name: "Riya Jassal",
    content:
      "Bought 20 CRM Licenses for my sales team in Markham, Ontario. Onboarding was smooth and post sales services were great as well. Highly recommended.",
    avatar: "",
  },
  {
    id: "7",
    initials: "MS",
    name: "Mayuri Sahai",
    content:
      "This agency exceeded our expectations in every way! The new website design is modern, sleek, and easy to navigate. Their SEO expertise has driven more traffic to our site than ever before. We couldn't be happier with the results. Highly recommend!",
    avatar: "",
  },
  {
    id: "8",
    initials: "RK",
    name: "Rohan Kumar",
    content:
      "Absolutely thrilled with the web design and SEO services provided! The team was professional, creative, and truly understood our needs. Our website looks fantastic and our search engine rankings have improved significantly. Highly recommend this agency!",
    avatar: "",
  },
  {
    id: "9",
    initials: "SK",
    name: "Simran Kaur",
    content:
      "Exceptional service and fantastic results! The team transformed our website into a visually appealing, easy-to-navigate site. Their SEO expertise has also significantly improved our search rankings. We couldn’t be happier. Highly recommend!",
    avatar: "",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="container-wrapper pt-12 lg:pt-16 xl:pt-20 pb-8 lg:pb-10 bg-white overflow-hidden">
      <div className="text-center max-w-5xl mx-auto pb-4 md:pb-10">
        {/* <p className="font-damion text-[30px] sm:text-[35px] text-[#828282]"></p> */}
        <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
          Trusted by 100+ teams to automate workflows and reduce reporting time by 50%
        </h2>
        <p className="mt-2 text-[18px] lg:text-[20px] font-light leading-relaxed">
          From early-stage startups to global enterprises, our clients share one thing in common — a
          vision to build smarter with CodSphere.
        </p>
      </div>
      {/* Testimonials Carousel */}
      <TestimonialCards testimonials={testimonials} />
    </section>
  );
}
