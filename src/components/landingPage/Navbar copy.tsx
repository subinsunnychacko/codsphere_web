import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-[66px]">
          {/* Logo */}
          <a href="#" className="flex items-center">
            <img 
              src="/codsphere-logo.png" 
              alt="CodSphere" 
              className={`h-10 w-auto transition-all ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 hover:bg-white/10 ${
                  isScrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-white"
                }`}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={isScrolled ? "text-foreground" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-foreground" : "text-white"} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-border"
          >
            <div className="container mx-auto px-6 py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-4 py-3 text-foreground hover:bg-muted rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#pricing"
                className="block px-4 py-3 bg-foreground text-background rounded-lg text-center font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Get Started
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
