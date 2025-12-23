// app/contact/page.tsx
import type { Metadata } from "next";
import ContactHero from "@/components/contact/ContactHero";
import { ContactForm } from "@/components/contact/ContactForm";
import { formatMetaTitle } from "@/lib/format-meta-title";
// import Navbar from "@/components/Navbar";
// import Navbar2 from "@/components/Navbar2";

export const metadata: Metadata = {
  title: formatMetaTitle("Contact Us", "Get Your Custom Solution"),
  description:
    "Ready to transform your business? Contact CodSphere for custom CRM, ERP, and automation solutions. Vancouver-based, globally focused.",
  keywords:
    "contact CodSphere, CRM consultation, ERP implementation, business automation consultation, Vancouver tech company",
  alternates: {
    canonical: "https://codsphere.com/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* <Navbar2 /> */}
      <ContactHero />
      <ContactForm />
    </div>
  );
}
