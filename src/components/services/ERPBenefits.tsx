export default function ERPBenefits() {
    const rows = [
      ["Predictive Forecasting", "Boost uptime, reduce costs, improve inventory planning & strategy"],
      ["Automated Operational Workflows", "Free employees from routine tasks and reduce errors"],
      ["Data Security", "Real-time anomaly detection and compliance auditing"],
      ["Scalability", "AI-driven ERP scales with usage and business changes"],
      ["Unified Analytics", "Single source of operational truth—support smarter decisions"],
    ];
  
    return (
      <section className="cs-container">
        <h2 className="heading-40 fw-415 text-center">Key Business Benefits</h2>
  
        <div className="mt-6 overflow-hidden rounded-[15px] ring-1 ring-black/10">
          {/* Top black bar */}
          <div className="flex items-center justify-between rounded-t-[15px] bg-black px-6 py-4">
            <span className="label-30 fw-415 text-white">Feature</span>
            <span className="label-30 fw-415 text-white">Business Impact</span>
          </div>
  
          <div className="bg-[#ECF5F7] px-2 pb-2 pt-2">
            <div className="rounded-[13px] bg-white">
              {rows.map(([f, b], idx) => (
                <div key={f} className="grid grid-cols-1 gap-2 px-4 py-4 sm:grid-cols-2">
                  <div className="body-20 fw-415">{f}</div>
                  <div className="body-20">{b}</div>
                  {idx < rows.length - 1 && (
                    <div className="col-span-full h-px w-full bg-black/100 opacity-60" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  