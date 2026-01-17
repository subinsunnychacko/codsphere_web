import Image from "next/image";

type ValueItem = {
  title: string;
  body: string;
  src: string;
  alt: string;
  position?: "top" | "bottom";
};

const VALUES_DATA: ValueItem[] = [
  {
    title: "Client-Centered Design:",
    body: "Every feature reflects real user needs, not extraneous modules.",
    src: "/images/about-us/team-value-1.jpg",
    alt: "UX design on laptop",
    position: "bottom",
  },
  {
    title: "Transparency with Every Sprint:",
    body: "We share timelines, code samples, and clear cost breakdowns.",
    src: "/images/about-us/team-value-2.jpg",
    alt: "Handshake and planning",
    position: "top",
  },
  {
    title: "Future-Proof Architecture:",
    body: "You get extensible, modular tech that scales without overhead.",
    src: "/images/about-us/team-value-3.jpg",
    alt: "Engineer with VR headset",
    position: "bottom",
  },
  {
    title: "Continuous Support:",
    body: "From launch to optimisation—we're in your corner long term.",
    src: "/images/about-us/team-value-4.jpg",
    alt: "Customer support",
    position: "top",
  },
];

export default function ValuesGallery() {
  return (
    <section className="bg-white">
      <div className="container-wrapper py-less">
        {/* Title - Responsive and positioned separately on mobile */}
        <h2 className="text-[28px] md:text-[36px] lg:text-[40px] leading-[36px] md:leading-[46px] lg:leading-[52px] font-medium text-black font-sequel max-w-full md:max-w-[438px] mb-8 md:mb-10 lg:mb-0 lg:absolute">
          Our Values: Where Vision Meets Execution
        </h2>

        {/* Grid layout - Single column on mobile, 2 columns on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-x-[60px] lg:gap-y-0">
          {/* Left Column */}
          <div className="flex flex-col">
            {/* Empty space for title on desktop only */}
            <div className="hidden lg:block h-[52px] mb-8"></div>

            {/* First card */}
            <div className="mb-6 md:mb-8 lg:mt-[60px] lg:mb-8">
              <ValueCard {...VALUES_DATA[0]} />
            </div>
            {/* Third card */}
            <div>
              <ValueCard {...VALUES_DATA[2]} />
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* Second card */}
            <div className="mb-6 md:mb-6 lg:mb-4">
              <ValueCard {...VALUES_DATA[1]} />
            </div>
            {/* Fourth card */}
            <div>
              <ValueCard {...VALUES_DATA[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ title, body, src, alt }: ValueItem) {
  return (
    <div
      className="relative w-full h-[220px] md:h-[250px] lg:h-[284px] rounded-[18px] md:rounded-[22px] lg:rounded-[26px] overflow-hidden group cursor-pointer"
      style={{
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.15)",
      }}
    >
      {/* Background Image */}
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 521px"
        priority
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />

      {/* Content - Responsive positioning and sizing */}
      <div className="absolute bottom-0 left-0 p-4 md:p-6 lg:p-[30px] max-w-[280px] md:max-w-[290px] lg:max-w-none">
        <h3
          className="
    text-[18px] leading-[22px]
    md:text-[22px] md:leading-[26px]
    lg:text-[22px] lg:leading-[26px]
    font-medium text-white font-sequel
    mb-2 md:mb-2.5 lg:mb-2.5
  "
          style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.35)" }}
        >
          {title}
        </h3>
        <p
          className="
    text-[16px] leading-[20px]
    md:text-[20px] md:leading-[24px]
    lg:text-[20px] lg:leading-[24px]
    font-normal text-white font-sequel
  "
          style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.35)" }}
        >
          {body}
        </p>
      </div>
    </div>
  );
}
