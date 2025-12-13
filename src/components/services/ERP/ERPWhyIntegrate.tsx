import Image from "next/image";
import ai_powered_erp_img from "@/assets/images/services/ai-powered-erp.jpg";

export default function ERPWhyIntegrate() {
  return (
    <section className="bg-white">
      <div className="container-wrapper pt-more pb-less">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          {/* Left Image */}
          <figure className="relative w-full lg:flex-1 h-[250px] md:h-[350px] lg:h-[408px] overflow-hidden rounded-[20px] md:rounded-[28px] lg:rounded-[34px] bg-[#D9D9D9]">
            <Image
              src={ai_powered_erp_img}
              alt="AI ERP Integration symbolizing image"
              fill
              className="object-cover"
              priority
            />
          </figure>
          {/* Right Content */}
          <div className="">
            <h2 className="text-[28px] md:text-[34px] lg:text-[40px] leading-[36px] md:leading-[44px] lg:leading-[52px] font-bold mb-6 md:mb-7 lg:mb-8">
              Why Integrate AI with Your ERP System?
            </h2>
            <div className="text-[16px] md:text-[18px] lg:text-[20px] leading-[20px] md:leading-[22px] lg:leading-[24px] text-black">
              <p className="mb-4 md:mb-5 lg:mb-6">
                AI turns ERP from static software into a proactive intelligence engine:
              </p>
              <ul className="!list-disc pl-8 space-y-3">
                <li>
                  <span className="font-medium">Enhanced Decision Making:</span> Automated trend
                  detection, predictive forecasts, strategic dashboards
                </li>
                <li>
                  <span className="font-medium">Operational Automation:</span> RPA + AI handles data
                  entry, approvals, scheduling and reporting
                </li>
                <li>
                  <span className="font-medium">Demand Forecasting & Inventory Optimisation:</span>{" "}
                  Reduced overstocking and stockouts, smarter procurement planning
                </li>
                <li>
                  <span className="font-medium">Personalised User Experience:</span> Role-based
                  dashboards and AI suggestions tailored to managers and teams
                </li>
                <li>
                  <span className="font-medium">Security & Risk Monitoring:</span> Detect anomalies,
                  prevent fraud, and uphold GDPR/HIPAA compliance in real time
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
