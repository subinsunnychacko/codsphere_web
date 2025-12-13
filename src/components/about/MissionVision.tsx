import Image from "next/image";
import mission_and_vision_rocket_img from "@/assets/images/about-us/mission-and-vision-rocket.jpg";

export default function MissionVision() {
  return (
    <section className="relative w-full text-white bg-dots bg-black">
      <div className="container-wrapper py-more">
        <div className="mb-7 md:mb-10">
          <h2 className="text-[28px] md:text-[40px] leading-[36px] md:leading-[52px] font-semibold">
            Our Mission & Vision
          </h2>
          <p className="mt-2 text-white/90 text-[16px] md:text-[18px] leading-5 md:leading-6 max-w-full md:max-w-[760px]">
            Manage leads, customers, and workflows with tailored CRM platforms built for your exact
            business model.
          </p>
        </div>

        {/* canvas for card + wedge (fixed height so they align perfectly) */}
        <div className="relative md:h-[460px]">
          {/* RIGHT: angled image wedge (behind card) - hidden on mobile */}
          <div className="hidden md:block absolute inset-y-0 right-0 z-0 w-[45%] min-w-[540px]">
            <div
              className="relative h-full w-full overflow-hidden"
              style={{
                // steeper beveled left edge; outer corners rounded
                clipPath: "polygon(28% 0, 100% 0, 100% 100%, 62% 100%)",
                // clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
                borderTopRightRadius: "16px",
                borderBottomRightRadius: "16px",
              }}
            >
              <Image
                src={mission_and_vision_rocket_img}
                alt="Hand holding an imaginary rocket"
                fill
                // bias focus a bit left so the rocket stays visible in the wedge
                className="object-cover object-left"
                priority
              />
            </div>
          </div>

          {/* LEFT: white card with divider + dot - full width on mobile */}
          <div className="relative md:absolute md:inset-y-0 left-0 z-10 w-full md:w-[68%] rounded-[16px] bg-white text-black shadow">
            <div className="grid h-full grid-cols-1 md:grid-cols-2">
              {/* Mission */}
              <div className="p-6 md:p-10 flex flex-col">
                <Image
                  src="/icons/streamline-target.svg"
                  alt="Mission idea icon"
                  width={64}
                  height={64}
                  className="h-12 md:h-16 w-12 md:w-16"
                />
                <h3 className="mt-4 text-[28px] md:text-[40px] leading-[36px] md:leading-[52px] font-semibold">
                  Mission
                </h3>
                <p className="mt-2 text-[14px] leading-[18px] max-w-full md:max-w-[360px]">
                  To empower businesses with custom technology that automates processes, unifies
                  data, and enhances customer relationships—delivering measurable impact.
                </p>
              </div>

              {/* Vision */}
              <div className="p-6 md:p-10 flex flex-col">
                <Image
                  src="/icons/idea-bulb.svg"
                  alt="Vision icon"
                  width={64}
                  height={64}
                  className="h-12 md:h-16 w-12 md:w-16"
                />
                <h3 className="mt-4 text-[28px] md:text-[40px] leading-[36px] md:leading-[52px] font-semibold">
                  Vision
                </h3>
                <p className="mt-2 text-[14px] leading-[18px] max-w-full md:max-w-[380px]">
                  To be recognised as Canada’s most trusted partner in CRM, ERP, and invoicing
                  development—valued for expertise, transparency, and scalable results.
                </p>
              </div>
            </div>

            {/* vertical divider + dot - hidden on mobile */}
            <div className="pointer-events-none hidden md:block absolute left-1/2 top-8 bottom-8 -translate-x-1/2">
              <span className="block h-full w-[1.5px] bg-black/90" />
              <span className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 h-[7px] w-[7px] rounded-full bg-black" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
