"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "@/components/ui";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <nav
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300",
          "w-[95%] max-w-6xl mx-auto",
          "rounded-full",
          "backdrop-blur-xl",
          "bg-white/5",
          "border border-white/10",
          "shadow-lg shadow-black/20",
          "safe-area-x",
          isScrolled && "shadow-xl shadow-black/30"
        )}
        style={{
          top: `calc(1rem + env(safe-area-inset-top, 0px))`,
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="px-6 md:px-8">
          <div className="flex items-center justify-between h-14 md:h-16">
            {/* Logo/Brand Name - Left */}
            <Link
              href="/"
              variant="minimal"
              className="text-xl md:text-2xl font-bold text-white"
            >
              Zcode
            </Link>

            {/* Desktop Navigation - Right */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  variant="minimal"
                  className="text-sm font-medium text-white/90 hover:text-white transition-colors duration-300 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-4 md:hidden">
              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-64 glass-dark border-l border-white/5 z-50 md:hidden"
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col h-full p-6">
                <div className="flex justify-between items-center mb-8">
                  <span className="text-xl font-bold text-white">
                    Menu
                  </span>
                  <button
                    onClick={toggleMobileMenu}
                    className="p-2 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" aria-hidden="true" />
                  </button>
                </div>

                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      variant="minimal"
                      className="text-lg font-medium py-2 hover:text-primary-400 transition-colors duration-300"
                    >
                      <span onClick={toggleMobileMenu}>{link.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

