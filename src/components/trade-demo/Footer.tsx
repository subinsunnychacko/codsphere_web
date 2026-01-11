"use client";

import Link from "next/link";
import { Hammer, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#1a1c1e] text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/trade-demo/home" className="flex items-center space-x-2">
              <div className="bg-[#d4915a] p-1.5 rounded">
                <Hammer className="h-5 w-5 text-[#1a1c1e]" />
              </div>
              <span className="font-['Nunito_Sans'] text-2xl font-bold tracking-wider">
                Pro<span className="text-[#d4915a]">Build</span>
              </span>
            </Link>
            <p className="text-white/70 leading-relaxed">
              Premium craftsmanship for residential and commercial projects. We build trust through
              quality work and transparent pricing.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white/10 p-2 rounded-full hover:bg-[#d4915a] hover:text-[#1a1c1e] transition-colors"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#d4915a] font-['Nunito_Sans'] font-bold mb-6">Navigation</h3>
            <ul className="space-y-4">
              {[
                { label: "Home", href: "/trade-demo/home" },
                { label: "Services", href: "/trade-demo/services" },
                { label: "Our Work", href: "/trade-demo/portfolio" },
                { label: "About Us", href: "/trade-demo/about" },
                { label: "Contact", href: "/trade-demo/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-[#d4915a] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-[#d4915a] font-['Nunito_Sans'] font-bold mb-6">Services</h3>
            <ul className="space-y-4">
              <li className="text-white/70">General Renovation</li>
              <li className="text-white/70">Kitchen Remodeling</li>
              <li className="text-white/70">Bathroom Updates</li>
              <li className="text-white/70">Electrical & Plumbing</li>
              <li className="text-white/70">Roofing & Siding</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[#d4915a] font-['Nunito_Sans'] font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#d4915a] shrink-0 mt-0.5" />
                <span className="text-white/70">
                  123 Builder Lane, Suite 100
                  <br />
                  Construction City, ST 12345
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#d4915a] shrink-0" />
                <span className="text-white/70">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#d4915a] shrink-0" />
                <span className="text-white/70">info@probuild.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} ProBuild Construction. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
