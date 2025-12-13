import CaseStudyDetailHeader from "@/components/case-studies/connectcall-services/CaseStudyDetailHeader";
import GotProjectForm from "@/components/case-studies/connectcall-services/GotProjectForm";
import TestimonialCard from "@/components/case-studies/connectcall-services/TestimonialCard";
import ContactCTA from "@/components/ContactCTA";
import { formatMetaTitle } from "@/lib/format-meta-title";
import type { Metadata } from "next";
import case_studies_banner_bg from "@/assets/images/banners/case-studies-banner-bg.jpg";

export const metadata: Metadata = {
  title: formatMetaTitle("ConnectCall Services"),
  description: "Comprehensive BPO solution with customer management system",
  alternates: {
    canonical: "https://codsphere.com/case-studies/connectcall-services",
  },
};

export default function ConnectCallServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header section */}
      <CaseStudyDetailHeader
        title="ConnectCall Services"
        backgroundImage={case_studies_banner_bg.src}
      />

      <section className="container-wrapper">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-[60px] py-8 md:py-10 lg:py-[60px]">
          {/* Left content - Responsive */}
          <div className="flex-1 w-full">
            {/* Title - Responsive typography */}
            <h2 className="text-[24px] md:text-[32px] lg:text-[40px] leading-[30px] md:leading-[40px] lg:leading-[52px] text-black mb-6 md:mb-8 lg:mb-[32px] font-bold font-sequel">
              Automating Operations for ConnectCall Services
            </h2>

            {/* Industry and Solutions tags - Responsive */}
            <div className="mb-8 md:mb-10 lg:mb-[50px] max-w-full lg:max-w-[640px]">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-[20px] pb-[15px] border-b border-black">
                <span className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-black font-semibold font-sequel">
                  Industries
                </span>
                <span className="bg-[#608BF3] text-white px-3 py-1 rounded text-[14px] md:text-[18px] lg:text-[20px] leading-[18px] md:leading-[22px] lg:leading-[24px] font-sequel">
                  BPO firm
                </span>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-[20px] mt-[15px]">
                <span className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-black font-semibold font-sequel">
                  Solutions
                </span>
                <span className="bg-[#608BF3] text-white px-3 py-1 rounded text-[14px] md:text-[18px] lg:text-[20px] leading-[18px] md:leading-[22px] lg:leading-[24px] font-sequel">
                  Customer relationship management
                </span>
              </div>
            </div>

            {/* Content sections - Responsive typography */}
            <div className="space-y-6 md:space-y-8 lg:space-y-[35px]">
              <section>
                <h3 className="text-[18px] md:text-[22px] lg:text-[25px] leading-[22px] md:leading-[26px] lg:leading-[29px] text-black mb-3 md:mb-4 lg:mb-[15px] font-bold font-sequel">
                  About the Client
                </h3>
                <p className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black font-sequel">
                  ConnectCall Services is a growing BPO firm based in Calgary, offering inbound and
                  outbound call centre support for industries like telecom, retail, and insurance.
                  With over 150 agents and multiple time zones, they faced challenges in scaling
                  operations without losing quality.
                </p>
              </section>

              <section>
                <h3 className="text-[18px] md:text-[22px] lg:text-[25px] leading-[22px] md:leading-[26px] lg:leading-[29px] text-black mb-3 md:mb-4 lg:mb-[15px] font-bold font-sequel">
                  The Challenge
                </h3>
                <ul className="space-y-2 lg:space-y-[8px]">
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>High call volumes and inconsistent call routing logic.</span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>Limited visibility into real-time call status and team performance.</span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>Manual lead updates and call logs led to frequent data errors.</span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>Client SLAs were hard to track, and escalations were increasing.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-[18px] md:text-[22px] lg:text-[25px] leading-[22px] md:leading-[26px] lg:leading-[29px] text-black mb-3 md:mb-4 lg:mb-[15px] font-bold font-sequel">
                  Our Solution
                </h3>
                <p className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black mb-3 md:mb-4 lg:mb-[15px] font-sequel">
                  CodSphere built a fully custom Call Centre Automation Suite integrated with their
                  VOIP provider and CRM. Key modules included:
                </p>
                <ul className="space-y-2 lg:space-y-[8px]">
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>
                      Smart call routing engine with skill-based assignment and fallback logic.
                    </span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>
                      Real-time dashboards showing queue volume, wait time, dropped calls, and agent
                      status.
                    </span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>Integrated auto-dialer for outbound teams, syncing leads from CRM.</span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>
                      Visual reporting tools for supervisors: daily summaries, call recordings,
                      feedback loop.
                    </span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>
                      Agent analytics: talk-time, idle-time, average handling time (AHT), and
                      resolution rate.
                    </span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-[18px] md:text-[22px] lg:text-[25px] leading-[22px] md:leading-[26px] lg:leading-[29px] text-black mb-3 md:mb-4 lg:mb-[15px] font-bold font-sequel">
                  Key Implementation Steps
                </h3>
                <ul className="space-y-2 lg:space-y-[8px]">
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>
                      Conducted process-mapping workshops with ConnectCall&apos;s operations team.
                    </span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>
                      Created wireframes and UI prototypes for agent and supervisor portals.
                    </span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>
                      Built with Node.js + WebSocket for real-time updates, PostgreSQL for secure
                      storage.
                    </span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>Deployed using Docker containers on AWS EC2 for high availability.</span>
                  </li>
                </ul>
              </section>

              <section>
                <h3 className="text-[18px] md:text-[22px] lg:text-[25px] leading-[22px] md:leading-[26px] lg:leading-[29px] text-black mb-3 md:mb-4 lg:mb-[15px] font-bold font-sequel">
                  Results & Impact
                </h3>
                <ul className="space-y-2 lg:space-y-[8px]">
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>37% increase in agent efficiency within 2 months.</span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>60% reduction in manual reporting tasks.</span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>
                      Call routing accuracy improved drastically - leading to 15% higher
                      first-contact resolution (FCR).
                    </span>
                  </li>
                  <li className="text-[14px] md:text-[20px] lg:text-[25px] leading-[20px] md:leading-[26px] lg:leading-[29px] text-black flex font-sequel">
                    <span className="mr-2">•</span>
                    <span>
                      Managers could now track live KPIs from any device, aiding quicker decisions
                      and escalations.
                    </span>
                  </li>
                </ul>
              </section>
            </div>

            {/* Testimonial Section - Responsive */}
            <div className="mt-8 md:mt-10 lg:mt-[60px]">
              <TestimonialCard
                name="Amit Goyal"
                role="Operations Head"
                company="ConnectCall Services"
                testimonial="We didn't just get a dashboard; we got clarity. CodSphere helped us see our operations like never before."
                image="/images/profile-pic/kevin-nicholson.jpg"
              />
            </div>
          </div>

          {/* Right sidebar - Got Project Form (Tablet and Desktop only) */}
          <div className="hidden md:block flex-shrink-0 w-full md:w-auto lg:w-auto">
            <GotProjectForm />
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <ContactCTA />
    </div>
  );
}
