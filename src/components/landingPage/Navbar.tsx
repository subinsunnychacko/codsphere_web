"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import web_page_logo_white from "@/assets/Logo_Full.svg";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "How It Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[60] w-full flex justify-center py-4 transition-all duration-500",
        isScrolled ? "bg-black/80 backdrop-blur-lg shadow-lg" : "bg-transparent",
      )}
    >
      <div className="container-wrapper">
        <nav className="w-full h-12 sm:h-14 lg:h-[72px] flex items-center justify-between px-3 sm:px-5 relative">
          {/* Logo */}
          <Link href="/home" className="z-[70]">
            <Image
              src={web_page_logo_white}
              alt="CodSphere logo"
              className="object-contain h-[25px] sm:h-7 lg:h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 text-[15px] lg:text-[18px] hover:text-white transition-colors whitespace-nowrap"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#pricing"
              className={`ml-4 px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                isScrolled
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "bg-white text-navy hover:bg-white/90"
              }`}
            >
              Get Started
            </a>
          </div>

          {/* Premium Hamburger Button */}
          <button
            className="md:hidden z-[70] p-2 text-white flex items-center justify-center"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                >
                  <X size={28} strokeWidth={1.5} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                >
                  <Menu size={28} strokeWidth={1.5} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </div>

      {/* Full Screen Premium Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[65] bg-black flex flex-col items-center justify-center md:hidden"
          >
            {/* Subtle Animated Background Texture */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/20 blur-[120px] rounded-full" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/20 blur-[120px] rounded-full" />
            </div>

            <nav className="relative z-10 flex flex-col items-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 + 0.2 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white text-4xl sm:text-5xl font-bold tracking-tighter hover:text-cyan-400 transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}

              <motion.a
                href="#pricing"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 + 0.2 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-10 py-4 bg-white text-black text-xl font-bold rounded-full shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                Get Started
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
