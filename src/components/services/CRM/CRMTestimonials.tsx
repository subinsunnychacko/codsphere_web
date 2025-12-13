// components/services/CRM/CRMTestimonials.tsx
import Image from "next/image";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  imageUrl: string;
}

export default function CRMTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Lynda P.",
      role: "Operations Head",
      company: "ConnectCall Services",
      testimonial:
        "CodSphere helped us transition from spreadsheets to a robust, centralised CRM. Our sales flow is 10x smoother.",
      imageUrl: "/images/profile-pic/lynda-kimberly.jpg",
    },
    {
      id: 2,
      name: "Josh M.",
      role: "SaaS Founder",
      company: "Vancouver",
      testimonial:
        "We integrated HubSpot into our backend ERP through CodSphere's CRM expertise. Everything connects perfectly now.",
      imageUrl: "/images/profile-pic/josh-m.jpg",
    },
  ];

  return (
    <section aria-labelledby="client-testimonials" className="bg-white">
      <div className="container-wrapper pt-less">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Client Testimonials
          </h2>
        </div>

        {/* Testimonials Grid - responsive: stack on mobile */}
        <div className="flex flex-col lg:flex-row justify-center gap-6 md:gap-8 lg:gap-20">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#F7F6F5] rounded-[15px] p-6 md:p-8 lg:p-[30px_40px] w-full lg:mx-0"
            >
              <div className="flex items-start gap-4 lg:gap-[20px]">
                {/* Profile Image */}
                <div className="relative rounded-full overflow-hidden bg-[#D9D9D9] flex-shrink-0 w-[60px] h-[60px] md:w-[70px] md:h-[70px] lg:w-[80px] lg:h-[80px]">
                  <Image
                    src={testimonial.imageUrl}
                    alt={`${testimonial.name} giving a review about CodSphere's CRM development services`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Name */}
                  <p className="text-[20px] md:text-[22px] lg:text-[25px] leading-[24px] md:leading-[26px] lg:leading-[30px] font-semibold text-black">
                    {testimonial.name}
                  </p>

                  {/* Role & Company */}
                  <p className="text-[14px] md:text-[14px] lg:text-[15px] leading-[18px] md:leading-[18px] lg:leading-[20px] font-light text-[#479FD1] mt-1 lg:mt-[5px]">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[22px] md:leading-[24px] lg:leading-[26px] font-light text-[#515151] mt-4 lg:mt-[20px]">
                "{testimonial.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
