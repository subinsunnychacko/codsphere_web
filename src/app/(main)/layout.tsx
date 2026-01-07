import Navbar2 from "@/components/Navbar2";
import Script from "next/script";
import { Navbar } from "@/components/landingPage/Navbar";
import Footer from "@/components/Footer";

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen pt-20 sm:pt-[88px] lg:pt-[104px">
      <Navbar2 />
      <main>{children}</main>
      <Footer />
      {/* <Script
        src="https://site-flow-ai--spathak6.replit.app/widget.js"
        data-widget-id="9ef7ba1c-8356-4adf-af1e-d5dcf4b093e0"
        strategy="afterInteractive"
      /> */}
    </div>
  );
}
