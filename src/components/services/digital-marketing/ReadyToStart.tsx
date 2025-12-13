// components/services/digital-marketing/ReadyToStart.tsx
"use client";

import Link from "next/link";

export default function ReadyToStart() {
  return (
    <section className="py-16 md:py-20 bg-gray-50">
      <div className="container mx-auto max-w-[1440px] px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to start? Contact us today.
          </h2>
          <p className="text-gray-600 mb-8">
            Tell about your project and ask questions — we&apos;ll get back to you.
          </p>
          
          {/* Contact Form */}
          <form className="max-w-xl mx-auto space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="cs-input"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="cs-input"
                required
              />
            </div>
            
            <input
              type="text"
              placeholder="Purpose"
              className="cs-input"
              required
            />
            
            <textarea
              placeholder="Message"
              rows={4}
              className="cs-input resize-none"
              required
            />
            
            <button
              type="submit"
              className="w-full bg-black text-white py-3 px-6 rounded-full font-semibold hover:bg-gray-800 transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
        
        {/* Bottom Links */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex justify-center items-center gap-8 text-sm">
            <Link href="/about" className="hover:text-brand-blue transition-colors">
              About Us
            </Link>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Get a solution</span>
              <span className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                →
              </span>
            </div>
            <p className="text-gray-600">
              I agree to personal data processing
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}