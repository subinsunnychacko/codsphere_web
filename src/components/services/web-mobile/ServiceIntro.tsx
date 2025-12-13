import Image from "next/image";
import web_and_mobile_designing from "@/assets/images/services/web-and-mobile-designing.jpg";

export default function ServiceIntro() {
  return (
    <section className="bg-white">
      <div className="container-wrapper pt-more pb-less">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[98px] items-center">
          {/* Text Content - Responsive */}
          <div className="order-2 lg:order-1 w-full lg:max-w-[545px]">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[52px] mb-4 md:mb-5 lg:mb-6 font-bold">
              Best Web & Mobile App Development Services For Your Business Needs
            </h2>
            <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-sequel text-black">
              At CodSphere, we design, develop, and launch high-performance websites and mobile
              applications tailored to your business goals. Whether you're starting from scratch or
              rebuilding an outdated system — we deliver responsive, fast, and secure digital
              solutions that deliver real results.
            </p>
          </div>

          {/* Image - Responsive */}
          <div className="relative order-1 lg:order-2 w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] w-full">
              <figure className="relative w-full lg:flex-1 h-[250px] md:h-[350px] lg:h-[408px] overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] bg-[#D9D9D9]">
                <Image
                  src={web_and_mobile_designing}
                  alt="Web and Mobile App Development dashboard"
                  fill
                  className="object-cover"
                  priority
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
