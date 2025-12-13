import Image from "next/image";
import digital_marketing_specialist from "@/assets/images/services/digital-marketing-specialist.jpg";

export default function TransformPresence() {
  return (
    <section className="bg-white">
      <div className="container-wrapper py-more">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-[98px] items-center">
          {/* Text Content - Left Side */}
          <div className="order-2 lg:order-1 w-full lg:max-w-[545px]">
            <h2 className="mb-3 md:mb-4 lg:mb-[15px] text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-bold">
              Transform Your Online Presence <span className="block lg:inline">with CodSphere</span>
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-light">
              At CodSphere, we help businesses grow through intelligent and impactful digital
              marketing strategies. Whether you're a startup, a scaleup, or an enterprise, our
              data-driven, AI-enhanced digital marketing customers and your website into a
              revenue-generating machine.
            </p>
          </div>

          {/* Image Container - Right Side */}
          <div className="relative order-1 lg:order-2 w-full lg:w-auto flex justify-center lg:justify-end">
            <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] w-full">
              <figure className="relative w-full lg:flex-1 h-[250px] md:h-[350px] lg:h-[408px] overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] bg-[#D9D9D9]">
                <Image
                  src={digital_marketing_specialist}
                  alt="Digital marketing professional looking at tablet device"
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
