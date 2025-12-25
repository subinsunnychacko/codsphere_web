"use client";

import { Puzzle, Settings, Monitor, Cloud } from "lucide-react";

const items = [
  {
    title: "CRM & ERP Frameworks:",
    // subtitle: "",
    text: "Odoo, HubSpot, Zoho, SuiteCRM",
    icon: Puzzle,
    iconBg: "#F1DA71",
  },
  {
    title: "Backend:",
    // subtitle: "",
    text: "Laravel, Node.js, PHP, Python",
    icon: Settings,
    iconBg: "#FBD5C0",
  },
  {
    title: "Frontend:",
    // subtitle: "",
    text: "Next JS, React, Vue.js, HTML5, Tailwind",
    icon: Monitor,
    iconBg: "#F5B9FF",
  },
  {
    title: "Cloud & Infra:",
    // subtitle: "",
    text: "AWS, Firebase, DigitalOcean",
    icon: Cloud,
    iconBg: "#B3C8FF",
  },
];

export default function BuiltWith() {
  return (
    <section className="bg-black text-white bg-dots">
      <div className="container-wrapper py-more">
        {/* headings */}
        <div className="text-center w-5/5 lg:w-4/5 xl:w-3/5 mx-auto pb-6 md:pb-12">
          <h2 className="text-[25px] sm:text-[30px] lg:text-[40px] font-semibold">
            Built With Proven Technologies
          </h2>
          <p className="mt-2 text-[20px] font-light">
            We don't chase trends — we build with reliable, future-ready tools that scale with your
            business.
          </p>
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-[#F5F5F3] border border-[#CCCCCC] rounded-[29px] p-[30px] flex flex-col h-full gap-4"
            >
              {/* Icon Circle */}
              <div
                className="w-[60px] h-[60px] rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: item.iconBg }}
              >
                <item.icon className="w-[36px] h-[36px] text-black" />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-[20px] leading-[24px] font-bold text-black font-sequel mb-1">
                  {item.title}
                </h3>
                <h4 className="text-[20px] leading-[24px] font-normal text-black font-sequel max-w-[215px]">
                  {item.text}
                </h4>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-8 gap-4">
          <button className="w-[18px] h-[1.5px] bg-white hover:opacity-70 transition-opacity" />
          <button className="w-[18px] h-[1.5px] bg-white hover:opacity-70 transition-opacity" />
        </div>
      </div>
    </section>
  );
}
