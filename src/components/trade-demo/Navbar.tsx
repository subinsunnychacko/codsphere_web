"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/trade-demo/ui/button";
import { Menu, X, Hammer } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: "/trade-demo/home", label: "Home" },
    { href: "/trade-demo/services", label: "Services" },
    { href: "/trade-demo/portfolio", label: "Portfolio" },
    { href: "/trade-demo/about", label: "About" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#1a1c1e] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/trade-demo/home" className="flex items-center space-x-2 group">
            <div className="bg-[#d4915a] p-2 rounded-md group-hover:bg-white transition-colors duration-300">
              <Hammer className="h-6 w-6 text-[#1a1c1e] group-hover:text-[#d4915a] transition-colors duration-300" />
            </div>
            <span className="font-['Nunito_Sans'] text-2xl font-bold tracking-wider">
              Pro<span className="text-[#d4915a]">Build</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#d4915a] uppercase tracking-wider ${
                  pathname === link.href
                    ? "text-[#d4915a] border-b-2 border-[#d4915a]"
                    : "text-white/80"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              asChild
              className="!bg-[#d4915a] !text-[#1a1c1e] font-bold hover:!bg-[#d4915a]/80 uppercase tracking-wide border-none"
            >
              <Link href="/trade-demo/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-[#d4915a] transition-colors p-2"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#1a1c1e] border-t border-white/10 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-3 rounded-md text-base font-medium uppercase tracking-wider ${
                    pathname === link.href
                      ? "bg-white/10 text-[#d4915a]"
                      : "text-white hover:bg-white/5 hover:text-[#d4915a]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  asChild
                  className="w-full !bg-[#d4915a] hover:!bg-[#d4915a]/80 !text-[#1a1c1e] font-bold uppercase py-6 border-none"
                >
                  <Link href="/trade-demo/contact" onClick={() => setIsOpen(false)}>
                    Get Free Quote
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
