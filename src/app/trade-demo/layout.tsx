"use client";

import { Footer } from "@/components/trade-demo/Footer";
import { Navbar } from "@/components/trade-demo/Navbar";

export default function TradeDemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
