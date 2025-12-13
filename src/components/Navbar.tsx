"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import web_page_logo_white from "@/assets/web-page-logo-white.svg";
import web_page_logo_icon_white from "@/assets/web-page-logo-icon-white.svg";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [forceHamburger, setForceHamburger] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Check for overflow and force hamburger menu if needed
  useEffect(() => {
    const checkOverflow = () => {
      if (navRef.current) {
        const navWidth = navRef.current.offsetWidth;
        const leftSection = navRef.current.children[0];
        const rightButtons = Array.from(navRef.current.children).slice(1);

        let totalContentWidth = 0;

        // Calculate total width of all content
        if (leftSection) {
          totalContentWidth += leftSection.getBoundingClientRect().width;
        }

        rightButtons.forEach((button) => {
          if (button instanceof HTMLElement && !button.classList.contains("hidden")) {
            totalContentWidth += button.getBoundingClientRect().width;
          }
        });

        // Add padding for safety
        totalContentWidth += 40;

        // Conservative overflow detection - only trigger when absolutely necessary
        setForceHamburger(totalContentWidth > navWidth * 0.95);
      }
    };

    const handleResize = () => {
      // Single check on resize to prevent layout jumps
      setTimeout(checkOverflow, 100);
    };

    // Initial check only when component mounts
    setTimeout(checkOverflow, 200);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center py-4 bg-white/98 backdrop-blur-md shadow-md border-b border-gray-100">
      <div className="container-wrapper">
        <nav
          ref={navRef}
          className="w-full h-[48px] sm:h-[56px] lg:h-[72px] bg-black rounded-full flex items-center justify-between px-3 sm:px-5 relative"
        >
          {/* Left side - Logo */}
          <Link href="/" aria-label="CodSphere" className="flex items-stretch">
            <Image
              src={web_page_logo_white}
              alt="CodSphere logo"
              className="object-contain h-[25px] sm:h-[28px] lg:h-[32px] w-auto"
              priority
            />
          </Link>

          {/* Right side - Navigations */}
          <div className="flex items-center gap-7">
            {/* Compact Navigation Links - Show when space is limited and not forced to hamburger */}
            <div
              className={`navbar-links-compact items-center gap-5 min-w-0 flex-shrink overflow-hidden ${forceHamburger ? "hidden" : ""}`}
            >
              <Link
                href="/"
                className="text-white text-[16px] font-light hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white text-[16px] font-light hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-white text-[16px] font-light hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="text-white text-[16px] font-light hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Cases
              </Link>
              <Link
                href="/contact"
                className="text-white text-[16px] font-light hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-white text-[16px] font-light hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Insights
              </Link>
            </div>

            {/* Full Navigation Links - Show on very large screens and not forced to hamburger */}
            <div
              className={`navbar-links-full items-center gap-7 min-w-0 flex-shrink overflow-hidden ${forceHamburger ? "hidden" : ""}`}
            >
              <Link
                href="/"
                className="text-white text-[18px] font-light hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-white text-[18px] font-light hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                About us
              </Link>
              <Link
                href="/services"
                className="text-white text-[18px] font-light hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="text-white text-[18px] font-light hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className="text-white text-[18px] font-light hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="text-white text-[18px] font-light hover:text-gray-300 transition-colors whitespace-nowrap"
              >
                Insights
              </Link>
            </div>

            {/* CTA Button - Show when there's enough space and not forced to hamburger */}
            <button
              className={`bg-white text-black px-4 md:px-5 lg:px-6 xl:px-7 py-2 md:py-2.5 lg:py-3 rounded-[30px] text-[13px] md:text-[14px] lg:text-[15px] font-normal hover:bg-gray-100 transition-colors whitespace-nowrap z-40 flex-shrink-0 ${
                forceHamburger ? "hidden" : ""
              } navbar-cta-button`}
            >
              Start Your Free Trial
            </button>
          </div>

          {/* Menu Button - Show when space is limited or forced by overflow */}
          <button
            onClick={toggleMenu}
            className={`text-white hover:text-gray-300 p-2 z-50 flex-shrink-0 touch-target transition-colors ${
              forceHamburger ? "block" : ""
            } navbar-menu-button`}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile/Tablet Menu Overlay */}
          {isMenuOpen && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30"
              onClick={toggleMenu}
            ></div>
          )}

          {/* Mobile/Tablet Menu */}
          <div
            className={`fixed top-0 right-0 h-full w-full xs:w-[90%] sm:w-[80%] md:w-[70%] lg:w-[400px] max-w-[400px] bg-gray-900 border-l border-gray-700 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full hidden"
            }`}
            style={{ backgroundColor: "#111827" }}
          >
            {/* Menu Header */}
            <div
              className="flex justify-center items-center px-6 py-8 border-b border-gray-700"
              style={{ backgroundColor: "#111827" }}
            >
              <Image
                src={web_page_logo_icon_white}
                alt="CodSphere"
                width={90}
                height={32}
                className="object-contain"
              />
            </div>

            <div
              className="flex flex-col py-4 sm:py-6 px-4 sm:px-6 md:px-8"
              style={{ backgroundColor: "#111827" }}
            >
              <Link
                href="/"
                className="py-3 sm:py-4 border-b border-gray-700 transition-colors hover:bg-gray-800 rounded-none"
                onClick={toggleMenu}
                style={{ color: "#ffffff", fontSize: "16px", fontWeight: "normal" }}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="py-3 sm:py-4 border-b border-gray-700 transition-colors hover:bg-gray-800 rounded-none"
                onClick={toggleMenu}
                style={{ color: "#ffffff", fontSize: "16px", fontWeight: "normal" }}
              >
                About us
              </Link>
              <Link
                href="/services"
                className="py-3 sm:py-4 border-b border-gray-700 transition-colors hover:bg-gray-800 rounded-none"
                onClick={toggleMenu}
                style={{ color: "#ffffff", fontSize: "16px", fontWeight: "normal" }}
              >
                Services
              </Link>
              <Link
                href="/case-studies"
                className="py-3 sm:py-4 border-b border-gray-700 transition-colors hover:bg-gray-800 rounded-none"
                onClick={toggleMenu}
                style={{ color: "#ffffff", fontSize: "16px", fontWeight: "normal" }}
              >
                Case Studies
              </Link>
              <Link
                href="/contact"
                className="py-3 sm:py-4 border-b border-gray-700 transition-colors hover:bg-gray-800 rounded-none"
                onClick={toggleMenu}
                style={{ color: "#ffffff", fontSize: "16px", fontWeight: "normal" }}
              >
                Contact
              </Link>
              <Link
                href="/blog"
                className="py-3 sm:py-4 transition-colors hover:bg-gray-800 rounded-none"
                onClick={toggleMenu}
                style={{ color: "#ffffff", fontSize: "16px", fontWeight: "normal" }}
              >
                Insights
              </Link>

              {/* Mobile CTA Button in menu */}
              <div className="mt-4" style={{ backgroundColor: "#111827" }}>
                <button
                  className="px-4 sm:px-6 py-3 rounded-[24px] sm:rounded-[30px] text-[14px] sm:text-[16px] font-medium transition-colors w-full shadow-sm"
                  onClick={toggleMenu}
                  style={{ backgroundColor: "#ffffff", color: "#000000" }}
                >
                  Start Your Free Trial
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
