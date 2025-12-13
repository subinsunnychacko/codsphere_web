// components/services/web-mobile/TechStackSection.tsx
"use client";

import Image from "next/image";

const techCategories = [
  {
    title: "Front-End",
    subtitle: "React.js, Vue.js, Next.js, HTML5, Tailwind CSS",
    tools: [
      { name: "React", logo: "/logos/web-and-mobile/react-js.png", bg: "bg-black" },
      { name: "Vue", logo: "/logos/web-and-mobile/vue-js.png", bg: "bg-white" },
      { name: "Next.js", logo: "/logos/web-and-mobile/next-js.png", bg: "bg-white" },
      { name: "HTML5", logo: "/logos/web-and-mobile/html5.png", bg: "bg-white" },
      {
        name: "Tailwind",
        logo: "/logos/web-and-mobile/tailwind-css.png",
        bg: "bg-gray",
      },
    ],
  },
  {
    title: "Back-End",
    subtitle: "Node.js, Laravel, PHP, Django, .NET Core",
    tools: [
      { name: "Node.js", logo: "/logos/web-and-mobile/node-js.png", bg: "bg-white" },
      { name: "Laravel", logo: "/logos/web-and-mobile/laravel.png", bg: "bg-white" },
      { name: "PHP", logo: "/logos/web-and-mobile/php.png", bg: "bg-indigo" },
      { name: "Django", logo: "/logos/web-and-mobile/django.png", bg: "bg-green" },
      { name: ".NET", logo: "/logos/web-and-mobile/dot-net-core.png", bg: "bg-purple" },
    ],
  },
  {
    title: "Mobile Apps",
    subtitle: "Flutter, React Native, Kotlin, Swift",
    tools: [
      {
        name: "Flutter",
        logo: "/logos/web-and-mobile/flutter.png",
        bg: "bg-white",
      },
      {
        name: "React Native",
        logo: "/logos/web-and-mobile/react-native.png",
        bg: "bg-white",
      },
      { name: "Swift", logo: "/logos/web-and-mobile/swift.png", bg: "bg-white" },
      {
        name: "Kotlin",
        logo: "/logos/web-and-mobile/kotlin.png",
        bg: "bg-white",
      },
    ],
  },
  {
    title: "Databases",
    subtitle: "MySQL, PostgreSQL, Firebase, MongoDB",
    tools: [
      { name: "MySQL", logo: "/logos/web-and-mobile/mysql.png", bg: "bg-white" },
      {
        name: "PostgreSQL",
        logo: "/logos/web-and-mobile/postgresql.png",
        bg: "bg-white",
      },
      {
        name: "MongoDB",
        logo: "/logos/web-and-mobile/mongodb.png",
        bg: "bg-white",
      },
      {
        name: "Firebase",
        logo: "/logos/web-and-mobile/firebase.png",
        bg: "bg-white",
      },
    ],
  },
  {
    title: "Hosting & DevOps",
    subtitle: "AWS, Google Cloud, DigitalOcean, Docker, GitHub Actions",
    tools: [
      { name: "AWS", logo: "/logos/web-and-mobile/aws.png", bg: "bg-white" },
      {
        name: "Google Cloud",
        logo: "/logos/web-and-mobile/google-cloud.png",
        bg: "bg-white",
      },
      { name: "Docker", logo: "/logos/web-and-mobile/docker.png", bg: "bg-white" },
      {
        name: "DigitalOcean",
        logo: "/logos/web-and-mobile/digital-ocean.png",
        bg: "bg-white",
      },
      {
        name: "GitHub",
        logo: "/logos/web-and-mobile/github-actions.png",
        bg: "bg-black",
      },
    ],
  },
  {
    title: "CMS & eCom",
    subtitle: "WordPress, Webflow, Shopify, Magento",
    tools: [
      { name: "WordPress", logo: "/logos/web-and-mobile/wordpress.png", bg: "bg-white" },
      { name: "Webflow", logo: "/logos/web-and-mobile/webflow.png", bg: "bg-white" },
      { name: "Shopify", logo: "/logos/web-and-mobile/shopify.png", bg: "bg-white" },
      { name: "Magento", logo: "/logos/web-and-mobile/magento.png", bg: "bg-white" },
    ],
  },
];

export default function TechStackSection() {
  return (
    <section className="bg-black text-white bg-dots">
      <div className="container-wrapper py-more">
        <h2 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[52px] text-center mb-8 md:mb-10 lg:mb-12 font-bold">
          Tech Stack Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7 lg:gap-8">
          {techCategories.map((category, index) => (
            <div key={index} className="relative">
              {/* Blue shadow card */}
              <div
                className="absolute bg-[#608BF3] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] rounded-[8px]"
                style={{
                  width: "calc(100% - 10px)",
                  height: "100%",
                  left: "0px",
                  top: "0px",
                }}
              />

              {/* Main white card - Responsive */}
              <div
                className="relative bg-white text-black rounded-[8px] h-full"
                style={{
                  width: "calc(100% - 10px)",
                  left: "10px",
                  top: "0px",
                }}
              >
                {/* Card content */}
                <div className="p-4 md:p-5 lg:p-6 h-full flex flex-col break-words">
                  <h3 className="text-[22px] md:text-[26px] lg:text-[30px] leading-[26px] md:leading-[30px] lg:leading-[35px] mb-1 font-medium">
                    {category.title}
                  </h3>
                  <p className="text-[14px] md:text-[16px] lg:text-[18px] leading-[17px] md:leading-[19px] lg:leading-[21px] mb-auto font-light text-black">
                    {category.subtitle}
                  </p>

                  {/* Tool icons - Responsive */}
                  {/* <div className="flex gap-1.5 md:gap-2 mt-3 md:mt-3.5 lg:mt-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div
                        key={toolIndex}
                        className={`flex items-center justify-center ${tool.bg} w-[45px] h-[38px] md:w-[50px] md:h-[42px] lg:w-[56px] lg:h-[46px] rounded-[5px] md:rounded-[6px]`}
                        style={{
                          boxShadow: "2px 3px 2.5px rgba(0, 0, 0, 0.15)",
                        }}
                        title={tool.name}
                      >
                        <Image
                          src={tool.logo}
                          alt={tool.name}
                          width={30}
                          height={30}
                          className="w-[24px] h-[24px] md:w-[27px] md:h-[27px] lg:w-[30px] lg:h-[30px] object-contain"
                        />
                      </div>
                    ))}
                  </div> */}
                  <div className="flex gap-2 justify-end flex-wrap mt-5">
                    {category.tools.map((tool, toolIndex) => (
                      <Image
                        key={toolIndex}
                        src={tool.logo}
                        alt={tool.name}
                        width={32}
                        height={32}
                        className="object-contain h-[40px] w-fit"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
