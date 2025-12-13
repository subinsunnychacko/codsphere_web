// src/components/services/ERPProcess.tsx
"use client";

import React from "react";

type Step = {
  title: string;
  desc: string;
  side: "left" | "right";
};

const steps: Step[] = [
  {
    side: "right",
    title: "Discovery & AI Opportunity Mapping",
    desc:
      "We audit workflows and data flows to identify high-impact AI and ERP use cases.",
  },
  {
    side: "left",
    title: "Module Planning & Blueprinting",
    desc:
      "Architect AI-ready ERP modules tailored to your business logic, infrastructure, and compliance needs.",
  },
  {
    side: "right",
    title: "UI/UX & AI Interface Design",
    desc: "Prototype intuitive screens and AI-driven dashboards before development.",
  },
  {
    side: "left",
    title: "Development & Integration",
    desc:
      "Build using AI tools, microservices, middleware, and APIs for ERP, CRM, and third-party systems.",
  },
  {
    side: "right",
    title: "Testing & Performance Tuning",
    desc:
      "Test for usability, latency, accuracy of AI predictions, and integration robustness.",
  },
  {
    side: "left",
    title: "Deployment & Migration",
    desc: "Seamless rollout with data integrity and minimal disruption.",
  },
  {
    side: "right",
    title: "Training & Governance",
    desc:
      "Train your teams, set AI governance protocols, and tune predictive models over time.",
  },
  {
    side: "left",
    title: "Maintenance & AI Model Updates",
    desc: "Continuous system support, AI re-training, and feature expansion.",
  },
];

/** === layout knobs (desktop) ===
 * You can 1:1 match Figma by only tweaking these arrays.
 * OFFSETS are measured from the center spine to the card's nearest edge.
 */
const CARD_WIDTH = 420;                 // tighter like the comp
const DOT = 28;                         // marker size
const STROKE = 9;                       // spine thickness
const HEIGHT = 1080;                    // drawing area height (px)

const TOPS = ["8%", "19.5%", "32%", "44%", "57.5%", "69.5%", "82.5%", "95%"];

// Micro-offsets per step (in px). Right side is intentionally a bit closer.
const LEFT_EDGE_FROM_CENTER  = [440, 440, 440, 440, 440, 438, 438, 438];
const RIGHT_EDGE_FROM_CENTER = [400, 398, 396, 396, 398, 398, 400, 402];

/* Curvier “S” spine: stronger amplitude than before (center ≈ x=60 in a 120 viewBox). */
function Spine() {
  const d = `
    M60,20
    C38,170  82,300 60,430
    C38,560  82,690 60,820
    C38,910  82,1000 60,1060
  `;
  return (
    <svg
      className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2"
      style={{ height: HEIGHT, width: 120 }}
      viewBox="0 0 120 1080"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={d}
        fill="none"
        stroke="var(--brand-blue)"
        strokeWidth={STROKE}
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function ERPProcess() {
  return (
    <section className="relative bg-white py-12 md:py-16">
      <div className="cs-container">
        <h2 className="text-center font-semibold text-[22px] md:text-[28px]">
          Our ERP + AI Development Process
        </h2>

        <div className="relative mx-auto mt-10 md:mt-12" style={{ height: HEIGHT }}>
          {/* spine */}
          <Spine />

          {/* step markers */}
          {TOPS.map((top, i) => (
            <div
              key={`dot-${i}`}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
              style={{ top }}
            >
              <div
                className="grid place-items-center rounded-full text-white text-[11px] font-semibold shadow-sm"
                style={{
                  width: DOT,
                  height: DOT,
                  background: "var(--brand-blue)",
                }}
              >
                {i + 1}
              </div>
            </div>
          ))}

          {/* cards */}
          {steps.map((s, i) => (
            <Card
              key={i}
              index={i}
              top={TOPS[i]}
              side={s.side}
              title={s.title}
              desc={s.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  index,
  top,
  side,
  title,
  desc,
}: {
  index: number;
  top: string;
  side: "left" | "right";
  title: string;
  desc: string;
}) {
  const fromCenter =
    side === "left" ? LEFT_EDGE_FROM_CENTER[index] : RIGHT_EDGE_FROM_CENTER[index];

  // translate the card so its NEAREST EDGE sits exactly `fromCenter` px from the center line
  const translate =
    side === "left"
      ? `translate(calc(-${fromCenter + CARD_WIDTH}px), -50%)`
      : `translate(${fromCenter}px, -50%)`;

  const base =
    "absolute -translate-y-1/2 bg-[#F1F5FD] rounded-[10px] border border-[#e8edfb] shadow-[0_8px_20px_rgba(27,46,120,0.12)]";
  const size = `w-[${CARD_WIDTH}px] p-4`;

  return (
    <div
      className={`${base} ${size}`}
      style={{
        top,
        left: "50%",
        transform: translate,
      }}
    >
      <h3 className="text-[13px] md:text-[14px] font-semibold leading-5 text-black">
        {title}
      </h3>
      <p className="mt-2 text-[11px] leading-[14px] text-black/75">
        {desc}
      </p>
    </div>
  );
}
