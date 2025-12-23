import {
  BellRingIcon,
  CodeXmlIcon,
  GlobeIcon,
  PackageIcon,
  RocketIcon,
  SearchCheckIcon,
  SearchIcon,
  TestTubeIcon,
  UsersIcon,
} from "lucide-react";
import Phases from "../phases";
import Testimonial from "../testimonial";

const details = [
  { title: "Industry", desc: "SaaS, Facility Management, Digital Transformation" },
  { title: "Platform", desc: "Cloud-based mailroom management solution" },
  { title: "Timeline", desc: "20 weeks (Concept ⟶ Launch)" },
];
const phases = [
  {
    icon: SearchIcon,
    phase: "PHASE 1",
    title: "Requirement Analysis & Planning (Weeks 1-4)",
    keyFocus:
      "Understand mailroom pain points and define a digital-first blueprint for the Sortify mailroom automation platform.",
    challenges: [
      "Manual logging and check-in delays",
      "Lost/misplaced packages",
      "No visibility or audit trail for deliveries",
    ],
    solutions: [
      "Conducted stakeholder interviews with mailroom staff & recipients",
      "Designed system architecture + database schema",
      "Built API documentation for check-in/out, notifications, and audit trail",
      "Created wireframes for Admin, Staff, and Recipient dashboards",
    ],
    milestone: "Blueprint Completed",
    outcome: "Foundation for a cloud-ready, intelligent delivery system built for scalability",
  },
  {
    icon: CodeXmlIcon,
    phase: "PHASE 2",
    title: "Development (Weeks 5-14)",
    keyFocus:
      "Build the full-stack Sortify digital mailroom automation system — backend, frontend, and cloud integration.",
    details: [
      {
        label: "Backend Development (6 Weeks):",
        items: [
          "Core infrastructure setup (Node.js / Python stack)",
          "Role-based access & authentication",
          "Package management system with barcode scanning & digital proof",
          "Automated email/SMS notification engine",
          "Cloud-hosted database with real-time analytics",
        ],
      },
      {
        label: "Frontend Development (4 Weeks):",
        items: [
          "Responsive UI with delivery dashboards",
          "Real-time tracking + status visualization",
          "Admin analytics & reporting",
          "Mobile optimization for tablets and kiosks",
        ],
      },
    ],
    milestone: "Alpha Version Deployed on Staging",
    outcome: "Fully functional digital mailroom environment ready for testing",
  },
  {
    icon: TestTubeIcon,
    phase: "PHASE 3",
    title: "Testing & Quality Assurance (Weeks 15-18)",
    keyFocus:
      "Validate data accuracy, performance, and security of the Sortify automation platform.",
    challenges: [
      "Reducing error rates in tracking & logging",
      "Ensuring end-to-end data protection",
    ],
    solutions: [
      "Unit & integration testing of 30+ endpoints",
      "Load-tested for high-volume deliveries (5,000+ concurrent)",
      "99.9% accuracy verified for delivery logs",
      "User Acceptance Testing (UAT) with pilot facilities",
      "Compliance checks for privacy and chain-of-custody",
    ],
    milestone: "System Passed QA Benchmarks",
    outcome: "Secure, reliable, and scalable system with 0 lost packages",
  },
  {
    icon: RocketIcon,
    phase: "PHASE 4",
    title: "Deployment & Launch (Weeks 19-20)",
    keyFocus: "Deploy production-ready Sortify cloud mailroom system and onboard clients.",
    steps: [
      "Set up production environment on AWS cloud",
      "Migrated staging data to live system",
      "Configured analytics dashboard for admins",
      "Conducted team training sessions + video tutorials",
      "Post-launch monitoring & support (99.9% uptime)",
    ],
    milestone: "Go Live with First Batch of Facilities",
    outcome:
      "Fully operational digital mailroom serving corporate offices and residential buildings",
  },
];
const keyMetrics = [
  {
    icon: PackageIcon,
    title: "Package Processing Time",
    desc: "Manual 5–6 min ⟶ 1–2 min (70% faster)",
  },
  {
    icon: SearchCheckIcon,
    title: "Tracking Accuracy",
    desc: "Limited ⟶ 99% + real-time audit",
  },
  {
    icon: UsersIcon,
    title: "Staff Productivity",
    desc: "High manual load ⟶ 60% increase",
  },
  {
    icon: BellRingIcon,
    title: "User Experience",
    desc: "No notifications ⟶ Instant alerts & self-service",
  },
  {
    icon: GlobeIcon,
    title: "Scalability",
    desc: "Single server ⟶ Multi-tenant cloud-ready",
  },
];

export default function ContentSection() {
  return (
    <section className="container-wrapper py-more">
      <div className="space-y-4 sm:space-y-8">
        {/* Header section */}
        <div className="space-y-3">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            From manual logging chaos to a cloud-native, fully automated delivery system.
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
                Sortify is a cloud-native SaaS mailroom automation platform that digitizes package
                delivery workflows, enabling faster tracking, real-time visibility, and seamless
                communication between teams.
              </p>
            </div>
            <div>
              <h4 className="text-2xl font-semibold">Project Goal</h4>
              <p className="leading-relaxed">
                Transform manual mail operations into a digital-first delivery ecosystem, improving
                efficiency, accuracy, and scalability across facilities.
              </p>
            </div>
          </div>
        </div>
        {/* Phases section */}
        <Phases data={phases} />
        {/* Performanc and outcome section */}
        <div className="space-y-3">
          <div className="space-y-3">
            <h4 className="text-2xl font-bold">Key Performance Outcomes</h4>
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
          <div>
            <h3 className="text-2xl font-bold">Outcome Summary — Sortify's Results at a Glance</h3>
            <p className="leading-relaxed">
              Sortify evolved into a
              <strong>smarter, faster, and paperless mailroom automation system,</strong>
              redefining how organizations manage deliveries and communication. Within 20 weeks, the
              platform achieved <strong>70%</strong> faster processing, <strong>99%</strong>{" "}
              tracking accuracy, and <strong>95%</strong> satisfaction, all in a secure, cloud-ready
              architecture.
            </p>
          </div>
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
