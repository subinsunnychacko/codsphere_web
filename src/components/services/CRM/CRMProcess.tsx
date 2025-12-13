// components/services/CRM/CRMProcess.tsx
import Image from "next/image";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: string;
}

export default function CRMProcess() {
  const processSteps: ProcessStep[] = [
    {
      number: "01",
      title: "Requirements Gathering",
      description: "Deep dive into your process, roles, tools, and bottlenecks.",
      icon: "/icons/file-check.svg",
    },
    {
      number: "02",
      title: "Design & Prototyping",
      description: "Wireframe your CRM screens and user journeys.",
      icon: "/icons/design-and-prototyping.svg",
    },
    {
      number: "03",
      title: "Development & Integration",
      description: "Custom module coding + integration with third-party APIs.",
      icon: "/icons/development-and-integration.svg",
    },
    {
      number: "04",
      title: "Testing & QA",
      description: "Functional, usability, and performance testing.",
      icon: "/icons/file-stack-pencil.svg",
    },
    {
      number: "05",
      title: "Launch & Training",
      description: "Staff onboarding, admin setup, and real-time usage support.",
      icon: "/icons/launch-and-training.svg",
    },
    {
      number: "06",
      title: "Support & Optimization",
      description: "Monthly maintenance, analytics, and iterative improvements.",
      icon: "/icons/hand-settings.svg",
    },
  ];

  return (
    <section aria-labelledby="crm-process" className="bg-white">
      <div className="container-wrapper py-less">
        {/* Header */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Our CRM Development Process
          </h2>
        </div>

        {/* Process Timeline - Mobile: vertical list*/}
        <div className="block lg:hidden">
          {/* Mobile/Tablet Vertical Layout */}
          <div className="space-y-8 md:space-y-10">
            {processSteps.map((step, index) => (
              <div key={index} className="flex gap-4 md:gap-6">
                {/* Icon Circle */}
                <div className="flex-shrink-0 w-[80px] h-[80px] md:w-[100px] md:h-[100px] bg-black rounded-full flex items-center justify-center">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={40}
                    height={40}
                    className="filter w-[35px] h-[35px] md:w-[45px] md:h-[45px]"
                  />
                </div>

                {/* Content */}
                <div className="flex-1 pt-2 md:pt-4">
                  <p className="text-[18px] md:text-[20px] font-[415] text-black">{step.number}.</p>
                  <h3 className="text-[18px] md:text-[20px] font-[415] text-black mt-1">
                    {step.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] leading-[17px] md:leading-[18px] font-[405] text-[#616161] mt-2">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div className="hidden lg:block relative w-full container-wrapper">
          <div className="relative" style={{ minHeight: "650px" }}>
            {/* Horizontal Timeline Line */}
            <div
              className="absolute w-full bg-black"
              style={{
                height: "3px",
                top: "310px",
                left: "0",
                right: "0",
                zIndex: 1,
              }}
            />

            {/* Steps Container */}
            <div className="relative">
              {processSteps.map((step, index) => {
                const isTop = index % 2 === 0;
                const leftPosition = `${(index * 100) / 5}%`;

                return (
                  <div
                    key={index}
                    className="absolute flex flex-col items-center"
                    style={{
                      left: leftPosition,
                      transform: "translateX(-50%)",
                      width: "300px",
                    }}
                  >
                    {isTop ? (
                      // Top positioned steps
                      <>
                        {/* Icon Circle */}
                        <div className="w-[124px] h-[124px] bg-black rounded-full flex items-center justify-center relative z-10">
                          <Image
                            src={step.icon}
                            alt={step.title}
                            width={60}
                            height={60}
                            className="filter"
                          />
                        </div>

                        {/* Vertical Line */}
                        <div
                          className="bg-black"
                          style={{
                            width: "3px",
                            height: "186px",
                            marginTop: "0",
                          }}
                        />

                        {/* Timeline Dot */}
                        <div
                          className="bg-black rounded-full relative z-10"
                          style={{
                            width: "24px",
                            height: "24px",
                            marginTop: "-12px",
                          }}
                        />

                        {/* Text Content */}
                        <div
                          className="absolute"
                          style={{
                            top: "140px",
                            left: "165px",
                            width: "200px",
                          }}
                        >
                          <p className="text-[20px] font-[415] text-black">{step.number}.</p>
                          <h3 className="text-[20px] font-[415] text-black mt-1">{step.title}</h3>
                          <p className="text-[14px] leading-[17px] font-[405] text-[#616161] mt-2">
                            {step.description}
                          </p>
                        </div>
                      </>
                    ) : (
                      // Bottom positioned steps
                      <>
                        {/* Spacer */}
                        <div style={{ height: "310px" }}></div>

                        {/* Timeline Dot */}
                        <div
                          className="bg-black rounded-full relative z-10"
                          style={{
                            width: "24px",
                            height: "24px",
                            marginTop: "-12px",
                            marginBottom: "-12px",
                          }}
                        />

                        {/* Vertical Line */}
                        <div
                          className="bg-black"
                          style={{
                            width: "3px",
                            height: "186px",
                          }}
                        />

                        {/* Icon Circle */}
                        <div className="w-[124px] h-[124px] bg-black rounded-full flex items-center justify-center relative z-10">
                          <Image
                            src={step.icon}
                            alt={step.title}
                            width={60}
                            height={60}
                            className="filter"
                          />
                        </div>

                        {/* Text Content */}
                        <div
                          className="absolute"
                          style={{
                            top: "340px",
                            right: "165px",
                            width: "200px",
                            textAlign: "right",
                          }}
                        >
                          <p className="text-[20px] font-[415] text-black">{step.number}.</p>
                          <h3 className="text-[20px] font-[415] text-black mt-1">{step.title}</h3>
                          <p className="text-[14px] leading-[17px] font-[405] text-[#616161] mt-2">
                            {step.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
