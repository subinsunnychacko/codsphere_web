"use client";

import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import ViewMoreButton from "@/components/case-studies/ViewMoreButton";
import connect_call_service_station_img from "@/assets/images/case-studies/connect-call-service-station.jpg";
import edu_leap_learning_img from "@/assets/images/case-studies/edu-leap-learning.jpg";
import contracting_site_img from "@/assets/images/case-studies/contracting-site.jpg";
import pharmacist_img from "@/assets/images/case-studies/pharmacist.jpg";
import university_canada_west_img from "@/assets/images/case-studies/university-canada-west.jpg";
import invoice_sync_discussion_img from "@/assets/images/case-studies/invoice-sync-discussion.jpg";

// Case studies data
const caseStudies = [
  {
    id: 1,
    image: connect_call_service_station_img,
    imageAlt: "Image of a call center",
    title: "ConnectCall Services",
    description: "Comprehensive BPO solution with customer management system",
    tags: ["BPO", "Customer Management"],
    tagColors: ["#F7CCA1", "#B1CCA9"],
    iconBg: "#F7CCA1",
    href: "/connectcall-services",
  },
  {
    id: 2,
    image: edu_leap_learning_img,
    imageAlt: "A girl on a video call conference",
    title: "EduLeap Learning",
    description: "SEO optimization and UX/UI design for educational platform",
    tags: ["SEO optimization", "UX/UI design"],
    tagColors: ["#F7CCA1", "#B1CCA9"],
    iconBg: "#AFCDA7",
    //href: "/eduleap-learning"
  },
  {
    id: 3,
    image: contracting_site_img,
    imageAlt: "Two people planning at contruction site",
    title: "S&S West Contracting",
    description: "SEO optimization and Google Ads campaign management",
    tags: ["SEO optimization", "Google Ads"],
    tagColors: ["#F7CCA1", "#B1CCA9"],
    iconBg: "#B6B0D4",
    //href: "/ss-west-contracting"
  },
  {
    id: 4,
    image: pharmacist_img,
    imageAlt: "Pharmacist checking medicines",
    title: "Pharmacy.Cloud",
    description: "E-commerce platform with SEO optimization for pharmacy services",
    tags: ["SEO optimization", "E-Commerce"],
    tagColors: ["#F7CCA1", "#EEDFFF"],
    iconBg: "#EEDFFF",
    //href: "/pharmacy-cloud"
  },
  {
    id: 5,
    image: university_canada_west_img,
    imageAlt: "Image of University Canada West",
    title: "University Canada West",
    description: "AI-powered syllabus management tool for university",
    tags: ["AI-Powered Syllabus Tool"],
    tagColors: ["#8ED5BC"],
    iconBg: "#8ED5BC",
    //href: "/university-canada-west"
  },
  {
    id: 6,
    image: invoice_sync_discussion_img,
    imageAlt: "Person taking a presentation in front of people",
    title: "InvoiceSync",
    description: "Custom SaaS development for invoice management",
    tags: ["Custom SaaS Development"],
    tagColors: ["#FFCFCF"],
    iconBg: "#FFCFCF",
    //href: "/invoicesync"
  },
];

export default function CaseStudies() {
  const handleViewMore = () => {
    // Handle view more functionality
    console.log("Load more case studies");
  };

  return (
    <section className="bg-white">
      <div className="container-wrapper pt-more">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard key={study.id} {...study} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <ViewMoreButton onClick={handleViewMore} />
        </div>
      </div>
    </section>
  );
}
