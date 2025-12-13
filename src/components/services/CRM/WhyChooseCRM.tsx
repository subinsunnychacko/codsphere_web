// components/services/CRM/WhyChooseCRM.tsx
import Image from "next/image";
import crm_process_img from "@/assets/images/services/crm-process.jpg";

export default function WhyChooseCRM() {
  return (
    <section aria-labelledby="why-choose-crm" className="bg-white relative">
      <div className="container-wrapper py-less">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-10 lg:gap-5 xl:gap-[60px] items-center">
          {/* LEFT - Text Content */}
          <div className="flex-shrink-0 w-full lg:w-1/2">
            {/* Title */}
            <h2
              id="why-choose-crm"
              className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-semibold text-black w-full mb-4 lg:mb-[15px]"
            >
              Why Choose CodSphere for CRM Development?
            </h2>

            {/* Body text - single block */}
            <div className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-[400] text-black w-full">
              <p className="font-light">
                At CodSphere, we build intelligent, modular, and scalable CRM systems that help
                businesses stay connected with customers, streamline sales operations, and automate
                critical processes. Our solutions are flexible, tailored to your workflows, and
                seamlessly integrate with third-party tools. From open-source CRM platforms to fully
                custom-built solutions, we empower organisations to move beyond generic software
                limitations. Whether you're in retail, SaaS, education, or logistics, we tailor each
                CRM to your real-world use case.
              </p>
              <h5 className="text-[20px] md:text-[22px] lg:text-[25px] font-[415] mt-4 mb-4">
                Trusted by Industry Leaders
              </h5>
              <p className="font-light">
                We've served businesses across Canada and globally, delivering CRM systems that
                improve decision-making, accelerate sales cycles, and elevate customer satisfaction.
              </p>
            </div>
          </div>

          {/* RIGHT - Image */}
          <figure className="relative w-full lg:flex-1 h-[250px] md:h-[350px] lg:h-[408px] overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] bg-[#D9D9D9]">
            <Image
              src={crm_process_img}
              alt="CRM Development process symbolizing image"
              fill
              className="object-cover"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
}
