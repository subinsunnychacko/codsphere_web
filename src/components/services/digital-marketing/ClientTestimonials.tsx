"use client";

import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Arman Joshi",
    role: "CEO, TechStartup Inc.",
    content:
      "CodSphere's campaigns generated 3x more leads and doubled our ad conversions ROI. Their strategy worked.",
    avatar: "/images/profile-pic/arman-joshi.jpg",
  },
  {
    id: 2,
    name: "Lisa Tran",
    role: "Marketing Director, E-comm Plus",
    content:
      "We had no online presence before. In just 3 months, we were ranking on Google and converting website traffic.",
    avatar: "/images/profile-pic/lisa-tran.jpg",
  },
];

export default function ClientTestimonials() {
  return (
    <section className="bg-white">
      <div className="container-wrapper pt-more">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Client Testimonials
          </h2>
        </div>

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
                    src={testimonial.avatar}
                    alt={`${testimonial.name} giving a review about CodSphere's digital marketing services`}
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
                    {testimonial.role}
                  </p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[22px] md:leading-[24px] lg:leading-[26px] font-light text-[#515151] mt-4 lg:mt-[20px]">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
