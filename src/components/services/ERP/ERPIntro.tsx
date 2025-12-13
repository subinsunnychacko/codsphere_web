import Image from "next/image";
import erp_system_development_with_ai_img from "@/assets/images/services/erp-system-development-with-ai.jpg";

export default function ERPIntro() {
  return (
    <section className="bg-white">
      <div className="container-wrapper py-more">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="">
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] mb-4 md:mb-5 lg:mb-6 font-bold">
              AI-Driven ERP Solutions | Custom ERP Development & Intelligent Integration
            </h2>
            <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-black font-light">
              Empower your business with AI-powered ERP systems tailored for efficiency,
              scalability, and predictive insight. At CodSphere, we offer full-cycle ERP system
              development, seamless AI & third-party integrations, and ongoing optimisation, just
              like top-tier global players, but customised for your workflows and growth. Whether
              you're building from scratch or enhancing an existing ERP, our enterprise-grade
              solutions unlock automation, analytics, and agility across finance, HR, inventory, and
              supply chain.
            </p>
          </div>

          {/* Right Image */}
          <figure className="relative w-full lg:flex-1 h-[250px] md:h-[350px] lg:h-[408px] overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] bg-[#D9D9D9]">
            <Image
              src={erp_system_development_with_ai_img}
              alt="ERP Solutions with AI symbolizing image"
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
