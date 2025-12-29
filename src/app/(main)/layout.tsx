import Navbar2 from "@/components/Navbar2";
import { Footer } from "@/components/landingPage/Footer";
import ContactUsPopupBtn from "@/components/ContactUsPopupBtn";
import Script from "next/script";
import { Navbar } from "@/components/landingPage/Navbar";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <ContactUsPopupBtn />
      {/* <Script
        src="https://site-flow-ai--spathak6.replit.app/widget.js"
        data-widget-id="9ef7ba1c-8356-4adf-af1e-d5dcf4b093e0"
        strategy="afterInteractive"
      /> */}
    </>
  );
}
