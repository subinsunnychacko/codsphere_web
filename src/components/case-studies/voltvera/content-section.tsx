import {
  BoxIcon,
  ChartColumnBigIcon,
  CircleCheckIcon,
  CodeXmlIcon,
  GlobeIcon,
  RocketIcon,
  SearchIcon,
  SettingsIcon,
  ShieldCheckIcon,
  TrendingUpDownIcon,
  TvMinimalPlayIcon,
} from "lucide-react";
import Phases from "../phases";
import Testimonial from "../testimonial";

const details = [
  { title: "Industry", desc: "SaaS, Consumer Electronics, Digital Transformation" },
  { title: "Platform", desc: "Custom-built CRM + MLM Automation Engine" },
  { title: "Timeline", desc: "10 weeks (Concept → Launch)" },
];
const corePainPoints = [
  "Manual, error-prone payout handling",
  "No real-time CRM visibility or analytics",
  "Lack of GST/KYC compliance and secure banking",
  "Poor communication between admin and franchises",
  "System capped at only 500 active users",
];
const keyModules = [
  "⚙️ Real-Time BV Engine (10K+ calculations/min)",
  "🌐 Multi-Leg Network Architecture (beyond binary)",
  "💰 Automated Wallet & Instant Payouts",
  "📊 Unified CRM Dashboard & Franchise Control Center",
  "🧾 INR-Compliant APIs (KYC, GST & Bank Integration)",
  "📢 In-App Broadcast & Notifications",
];

const phases = [
  {
    icon: SearchIcon,
    phase: "PHASE 1",
    title: "Discovery & Requirements (Week 1)",
    overview:
      "Mapped all franchise workflows, compliance gaps, and payout inconsistencies to define Voltvera's automation roadmap.",
    keyFocus: "Establishing foundation for a scalable, compliant automation engine.",
    activities: [
      "Conducted stakeholder interviews across franchise networks",
      "Identified data fragmentation and payout inconsistencies",
      "Defined KPIs for payout accuracy, transparency, and scalability",
      "Created preliminary workflow diagrams and API outline",
    ],
    milestone: "Requirement Blueprint Completed",
    outcome: "Clear vision for a cloud-ready, multi-franchise automation system",
  },
  {
    icon: BoxIcon,
    phase: "PHASE 2",
    title: "Design & Architecture (Week 2)",
    overview:
      "Converted operational insights into a system blueprint that combined CRM and MLM logic.",
    keyFocus: "Building a modular architecture supporting real-time scalability.",
    activities: [
      "Designed Multi-Leg Tree Architecture for network expansion beyond binary.",
      "Created data schemas for rank logic, wallets, and commissions.",
      "Developed UX wireframes for admin dashboards and analytics panels.",
      "Integrated compliance requirements (KYC + GST modules) into architecture.",
    ],
    milestone: "System Architecture Finalized",
    outcome: "Scalable, compliant, and UX-aligned architecture ready for development",
  },
  {
    icon: CodeXmlIcon,
    phase: "PHASE 3",
    title: "Development (Weeks 3 – 9)",
    overview:
      "Built the real-time automation engine integrating CRM, payout, and analytics layers.",
    keyFocus: "Engineering a secure and high-performance automation platform.",
    activities: [
      "Developed Real-Time BV Engine (10,000+ calculations/min)",
      "Implemented Automated Wallet + Payout System for instant transactions",
      "Built Franchise Control Center with region-based commission slabs",
      "Integrated Unified CRM Dashboard with analytics and KPI tracking",
    ],
    milestone: "Admin + User Portals Deployed on Staging",
    outcome: "Fully functional automation system ready for QA and load testing",
  },
  {
    icon: CircleCheckIcon,
    phase: "PHASE 4",
    title: "Testing & Quality Assurance (Weeks 9 – 10)",
    overview: "Validated performance, accuracy, and compliance at enterprise scale.",
    keyFocus: "Ensuring data integrity and stability under live load.",
    activities: [
      "Simulated 25,000+ concurrent users to test real-time payout accuracy.",
      "Conducted end-to-end ledger audits and stress testing.",
      "Verified GST + Bank API integration for secure transactions.",
      "Refined UX + notification logic based on live data metrics.",
    ],
    milestone: "System Passed QA & Performance Benchmarks",
    outcome: "Error-free, compliant platform validated for production rollout",
  },
  {
    icon: TvMinimalPlayIcon,
    phase: "PHASE 5",
    title: "Client Demo & Iteration (Week 10 Start)",
    overview:
      "Presented the fully functional platform to Voltvera stakeholders for validation and refinements.",
    keyFocus: "Establishing stakeholder confidence through transparency and control.",
    activities: [
      "Conducted live demo showcasing real-time payout + CRM visibility",
      "Gathered franchise feedback on commission tracking + UX",
      "Refined data visualization + reporting layers based on client inputs",
    ],
    milestone: "Client Demo Approved",
    outcome: "Stakeholder-verified release candidate ready for deployment",
  },
  {
    icon: RocketIcon,
    phase: "PHASE 6",
    title: "Deployment & Handover (Week 10 End)",
    overview:
      "Launched Voltvera's digital automation ecosystem across its national franchise network.",
    keyFocus: "Smooth transition from manual operations to live automation.",
    activities: [
      "Migrated data + commission logs to production environment",
      "Conducted training sessions for regional franchise heads",
      "Delivered comprehensive documentation + support roadmap",
    ],
    milestone: "Go-Live Completed",
    outcome:
      "Scalable, self-sustaining automation network enabling real-time transparency and nationwide growth",
  },
];
const keyMetrics = [
  {
    icon: SettingsIcon,
    title: "Payout Accuracy",
    desc: "100% automated engine replacing manual errors — +99 % accuracy achieved.",
  },
  {
    icon: ChartColumnBigIcon,
    title: "Transparency",
    desc: "From Excel sheets to real-time audit dashboards → +100 % visibility across franchises.",
  },
  {
    icon: TrendingUpDownIcon,
    title: "Rank Upgrades",
    desc: "Instant automation replacing weekly manual checks → 85 % faster turnaround.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Compliance",
    desc: "Fully INR-compliant (GST + KYC) → 100 % secure, audit-ready governance.",
  },
  {
    icon: GlobeIcon,
    title: "Scalability",
    desc: "Grew from 500 users to 25 000 + concurrent → +4900 % capacity increase.",
  },
];

export default function ContentSection() {
  return (
    <section className="container-wrapper py-more">
      <div className="space-y-4 sm:space-y-8">
        {/* Header section */}
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Scaling Franchise Operations with Voltvera's Smart MLM Automation Platform
          </h2>
          <div className="text-base md:text-lg">
            {details.map(({ title, desc }, i) => (
              <div key={i}>
                <span className="font-medium">{title}: </span>
                <span>{desc}</span>
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <div>
              <h4 className="text-2xl font-semibold">Client Overview</h4>
              <p className="leading-relaxed">
                Voltvera India Pvt. Ltd. A fast-scaling consumer electronics brand selling LED TVs,
                water purifiers, and fans through a multi-tier franchise model.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">The Challenge</h4>
              <p className="leading-relaxed">
                Voltvera's previous MLM platform failed to scale effectively.
                <br />
                Manual operations, binary network limits, and missing compliance modules led to
                delays, errors, and loss of franchise trust.
              </p>
            </div>
            <div>
              <p className="font-medium mb-1">Core Pain Points:</p>
              <ul className="list-disc list-inside space-y-1 ml-1">
                {corePainPoints.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <p className="leading-relaxed font-medium">
              "As the network grew, the system broke — data lagged, bonuses delayed, and trust
              dropped."
            </p>
            <div>
              <h4 className="text-2xl font-semibold">The Solution</h4>
              <p className="leading-relaxed">
                CodSphere developed a Smart MLM Engine, a fully automated, cloud-based ecosystem
                combining MLM logic, CRM visibility, and real-time data automation.
                <br />
                The system delivers instant payouts, compliance readiness, and multi-branch
                scalability.
              </p>
            </div>
            <div>
              <p className="font-medium mb-1">Key Modules:</p>
              <ul className="list-inside space-y-1 ml-1">
                {keyModules.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Phases section */}
        <Phases data={phases} />
        {/* Performanc and outcome section */}
        <div className="space-y-3">
          <div className="space-y-3">
            <h4 className="text-2xl font-bold">Key Metrics & Results</h4>
            <p className="leading-relaxed">
              The CodSphere Smart MLM Engine delivered measurable performance leaps across every
              operational layer — from payout accuracy to nationwide scalability.
            </p>
            <div className="text-base md:text-lg leading-relaxed">
              {keyMetrics.map(({ icon, title, desc }, i) => {
                const Icon = icon;
                return (
                  <div key={i} className="flex flex-row gap-1.5">
                    <Icon />
                    <p>
                      <span className="font-medium">{title}: </span>
                      <span>{desc}</span>
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <p className="leading-relaxed">
            <span className="font-medium">In summary: </span>
            Voltvera's operations transitioned from reactive and manual to real-time, transparent,
            and infinitely scalable — creating a future-ready foundation for franchise growth.
          </p>
        </div>
        {/* Testimonial section */}
        <Testimonial>
          "Sortify transformed our mailroom chaos into a digital command center — faster,
          transparent, and completely automated." — Facilities Manager, Corporate Client (2025)
        </Testimonial>
      </div>
    </section>
  );
}
