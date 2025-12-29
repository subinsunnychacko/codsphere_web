"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import web_page_logo_white from "@/assets/Logo_Full.svg";
import web_page_logo_icon_white from "@/assets/web-page-logo-icon-white.svg";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Navbar2() {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [forceHamburger, setForceHamburger] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const overlayRoutes = ["/home", "/success-stories"];
  const isOverlayPage = overlayRoutes.includes(pathname);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full flex justify-center py-4",
        // isScrolled &&
        (!isOverlayPage || isScrolled) && "bg-black",
      )}
    >
      <div className="container-wrapper">
        <nav
          ref={navRef}
          className="w-full h-12 sm:h-14 lg:h-[72px] rounded-full flex items-center justify-between px-3 sm:px-5 relative"
        >
          {/* Left side - Logo */}
          <Link href="/home" aria-label="CodSphere" className="flex items-stretch">
            <Image
              src={web_page_logo_white}
              alt="CodSphere logo"
              className="object-contain h-[25px] sm:h-7 lg:h-8 w-auto"
              priority
            />
          </Link>

          {/* Right side - Navigations */}
          <div>
            {/* Compact Navigation Links - Show when space is limited and not forced to hamburger */}
            <div
              className={`navbar-links-compact items-center gap-0 min-w-0 shrink overflow-hidden ${forceHamburger ? "hidden" : ""}`}
            >
              <Link
                href="/home"
                className={cn(
                  "text-white text-[16px] hover:text-gray-300 transition-colors whitespace-nowrap border-2 border-transparent rounded-full px-3 py-1",
                  pathname === "/home" && "bg-white text-black! border-white",
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  "text-white text-[16px] hover:text-gray-300 transition-colors whitespace-nowrap border-2 border-transparent rounded-full px-3 py-1",
                  pathname === "/about" && "bg-white text-black! border-white",
                )}
              >
                About
              </Link>
              <Link
                href="/services"
                className={cn(
                  "text-white text-[16px] hover:text-gray-300 transition-colors whitespace-nowrap border-2 border-transparent rounded-full px-3 py-1",
                  pathname === "/services" && "bg-white text-black! border-white",
                )}
              >
                Services
              </Link>
              <Link
                href="/success-stories"
                className={cn(
                  "text-white text-[16px] hover:text-gray-300 transition-colors whitespace-nowrap border-2 border-transparent rounded-full px-3 py-1",
                  pathname === "/success-stories" && "bg-white text-black! border-white",
                )}
              >
                Stories
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-white text-[16px] hover:text-gray-300 transition-colors whitespace-nowrap border-2 border-transparent rounded-full px-3 py-1",
                  pathname === "/contact" && "bg-white text-black! border-white",
                )}
              >
                Contact
              </Link>
              <Link
                href="/start-free-trial"
                className={cn(
                  "text-white text-[18px] hover:text-gray-300 transition-colors whitespace-nowrap border-2 border-white rounded-full px-4 py-1.5 ml-2",
                  pathname === "/start-free-trial" && "bg-white text-black!",
                )}
              >
                Start Free Trial
              </Link>
            </div>

            {/* Full Navigation Links - Show on very large screens and not forced to hamburger */}
            <div
              className={`navbar-links-full items-center gap-0 min-w-0 shrink overflow-hidden ${forceHamburger ? "hidden" : ""}`}
            >
              <Link
                href="/home"
                className={cn(
                  "text-white text-[18px] hover:text-gray-300 transition-colors whitespace-nowrap border-2 border-transparent rounded-full px-4 py-1.5",
                  pathname === "/home" && "bg-white text-black! border-white",
                )}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={cn(
                  "text-white text-[18px] hover:text-gray-300 transition-colors whitespace-nowrap border-2 border-transparent rounded-full px-4 py-1.5",
                  pathname === "/about" && "bg-white text-black! border-white",
                )}
              >
                About Us
              </Link>
              <Link
                href="/services"
                className={cn(
                  "text-white text-[18px] hover:text-gray-300 transition-colors whitespace-nowrap border-2 border-transparent rounded-full px-4 py-1.5",
                  pathname === "/services" && "bg-white text-black! border-white",
                )}
              >
                Services
              </Link>
              <Link
                href="/success-stories"
                className={cn(
                  "text-white text-[18px] hover:text-gray-300 transition-colors whitespace-nowrap border-2 border-transparent rounded-full px-4 py-1.5",
                  pathname === "/success-stories" && "bg-white text-black! border-white",
                )}
              >
                Success Stories
              </Link>
              <Link
                href="/contact"
                className={cn(
                  "text-white text-[18px] hover:text-gray-300 transition-colors whitespace-nowrap border-2 border-transparent rounded-full px-4 py-1.5",
                  pathname === "/contact" && "bg-white text-black! border-white",
                )}
              >
                Contact Us
              </Link>
              <Link
                href="/start-free-trial"
                className={cn(
                  "text-white text-[18px] hover:text-gray-300 transition-colors whitespace-nowrap border-2 border-white rounded-full px-4 py-1.5 ml-2",
                  pathname === "/start-free-trial" && "bg-white text-black!",
                )}
              >
                Start Your Free Trial
              </Link>
            </div>
          </div>

          {/* Menu Button - Show when space is limited or forced by overflow */}
          {!isMenuOpen && (
            <button
              onClick={toggleMenu}
              className={`text-white hover:text-gray-300 p-2 z-50 shrink-0 touch-target transition-colors ${
                forceHamburger ? "block" : ""
              } navbar-menu-button`}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          )}

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
              className="relative flex justify-center items-center px-6 py-8 border-b border-gray-700"
              style={{ backgroundColor: "#111827" }}
            >
              <button
                onClick={toggleMenu}
                className={`absolute top-0 right-0 text-white hover:text-gray-300 p-2 z-50 shrink-0 touch-target transition-colors ${
                  forceHamburger ? "block" : ""
                } navbar-menu-button`}
                aria-label="Toggle menu"
              >
                <X size={24} />
              </button>

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
                href="/home"
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
                About Us
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
                href="/success-stories"
                className="py-3 sm:py-4 border-b border-gray-700 transition-colors hover:bg-gray-800 rounded-none"
                onClick={toggleMenu}
                style={{ color: "#ffffff", fontSize: "16px", fontWeight: "normal" }}
              >
                Success Stories
              </Link>
              <Link
                href="/contact"
                className="py-3 sm:py-4 border-b border-gray-700 transition-colors hover:bg-gray-800 rounded-none"
                onClick={toggleMenu}
                style={{ color: "#ffffff", fontSize: "16px", fontWeight: "normal" }}
              >
                Contact Us
              </Link>

              <Link
                href="/start-free-trial"
                className="block! w-full px-4 sm:px-6 py-3 rounded-3xl sm:rounded-[30px] text-[14px] sm:text-[16px] font-medium transition-colors shadow-sm bg-white text-black! mt-6 text-center"
                onClick={toggleMenu}
              >
                Start Your Free Trial
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
