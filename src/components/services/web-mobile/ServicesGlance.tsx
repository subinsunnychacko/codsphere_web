// components/services/web-mobile/ServicesGlance.tsx
"use client";

const services = [
  {
    id: 1,
    title: "Custom Web Development",
    description:
      "From dynamic websites to complex web platforms, we develop secure, scalable, and SEO-optimised web solutions.",
    details: [
      "Frontend: HTML5, CSS3, React, Angular",
      "Backend: Node.js, PHP, Laravel, Python",
      "CMS: WordPress, Shopify, Webflow, Headless CMS",
    ],
    style: { backgroundColor: "#EEDFFF" },
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "We create sleek, intuitive, and high-performing mobile apps for iOS and Android — built to engage and scale.",
    details: [
      "Native (Swift, Kotlin) & Cross-Platform (Flutter, React Native)",
      "Play Store & App Store Deployment",
      "Feature-Rich Apps with Modern UI/UX",
    ],
    style: { backgroundColor: "#FFF4D5" },
  },
  {
    id: 3,
    title: "eCommerce Development",
    description:
      "Launch your online store with rich features, fast performance, and seamless checkout experiences.",
    details: [
      "Shopify, WooCommerce, Magento, BigCommerce",
      "Payment Gateway Integration",
      "Cart Optimisation & Analytics",
    ],
    style: { backgroundColor: "#FFE7D5" },
  },
  {
    id: 4,
    title: "Web App & SaaS Platforms",
    description:
      "Have a SaaS idea or need a robust internal platform? We engineer enterprise-grade web applications with full backend architecture.",
    details: [
      "Custom SaaS solutions for diverse industries",
      "Scalable web apps with secure user data management",
      "Integration with third-party APIs and services",
    ],
    style: { backgroundColor: "#CFFFEE" },
  },
  {
    id: 5,
    title: "UI/UX Design & Prototyping",
    description:
      "User experience isn't an option—it's essential. We wireframe, prototype, and design user-centric interfaces that convert.",
    details: [
      "In-depth user research and persona development",
      "Interactive wireframes and high-fidelity prototypes",
      "Mobile-first and responsive design",
    ],
    style: { backgroundColor: "#BCCFFF" },
  },
];

export default function ServicesGlance() {
  return (
    <section className="bg-white">
      <div className="container-wrapper py-more">
        {/* First Row - Title + cards - Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 mb-4 md:mb-5 lg:mb-6 items-center">
          {/* Title and Description */}
          <div className="md:col-span-2 lg:col-span-1 mb-6 md:mb-0">
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[52px] mb-4 md:mb-5 lg:mb-6 font-bold">
              Our Services at a Glance
            </h2>
            <p className="text-[14px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] font-light text-black">
              Explore Our Comprehensive Range of Digital Solutions — Tailored to Elevate Your
              Business with Cutting-Edge Technology and Design.
            </p>
          </div>

          {/* First two service cards - Show on mobile/tablet/desktop */}
          {services.slice(0, 2).map((service) => (
            <div key={service.id} className="col-span-1">
              <ServiceCard service={service} />
            </div>
          ))}
        </div>

        {/* Second Row - Remaining cards - Responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6">
          {services.slice(2, 5).map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div
      className="rounded-[16px] md:rounded-[18px] lg:rounded-[20px] hover:shadow-lg transition-shadow h-full flex flex-col p-5 md:p-6 lg:p-[30px] min-h-[240px] md:min-h-[260px] lg:min-h-[288px]"
      style={{
        ...service.style,
        boxShadow: "2px 5px 10.5px 1px rgba(0, 0, 0, 0.25)",
      }}
    >
      <h3 className="text-[18px] md:text-[22px] lg:text-[25px] leading-[22px] md:leading-[26px] lg:leading-[29px] mb-3 md:mb-3.5 lg:mb-4 font-[415] font-sequel">
        {service.title}
      </h3>
      <p className="text-[12px] md:text-[13px] lg:text-[14px] leading-[15px] md:leading-[16px] lg:leading-[17px] mb-4 md:mb-5 lg:mb-6 font-light text-black">
        {service.description}
      </p>
      <ul className="mt-auto">
        {service.details.map((detail, index) => (
          <li
            key={index}
            className="text-[12px] md:text-[13px] lg:text-[14px] leading-[15px] md:leading-[16px] lg:leading-[17px] mb-1.5 md:mb-2 font-light text-black"
          >
            • {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}
