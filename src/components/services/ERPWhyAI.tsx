import Image from "next/image";

export default function ERPWhyAI() {
  return (
    <section className="cs-container grid gap-10 md:grid-cols-2">
      {/* Left image block with 34px radius (per Figma) */}
      <div className="order-2 overflow-hidden rounded-[34px] md:order-1">
        <Image
          src="/images/services/erp/core-production.jpg"
          alt=""
          width={845}
          height={458}
          className="h-[408px] w-full object-cover"
        />
      </div>

      <div className="order-1 md:order-2">
        <h2 className="heading-40 fw-415">Why Integrate AI with Your ERP System?</h2>
        <p className="body-20 mt-3 max-w-[586px]">
          AI turns ERP from static software into a proactive intelligence engine:
          <br />
          <br />
          <span className="fw-415">Enhanced Decision Making:</span> Automated trend detection,
          predictive forecasts, strategic dashboards. <br />
          <span className="fw-415">Operational Automation:</span> RPA + AI handles data entry,
          approvals, scheduling and reporting. <br />
          <span className="fw-415">Demand Forecasting & Inventory Optimisation:</span> Reduced
          overstocking and stockouts, smarter procurement planning. <br />
          <span className="fw-415">Personalised User Experience:</span> Role-based dashboards and
          AI suggestions tailored to teams and managers. <br />
          <span className="fw-415">Security & Risk Monitoring:</span> Detect anomalies, prevent
          fraud, and uphold compliance in real time.
        </p>
      </div>
    </section>
  );
}
