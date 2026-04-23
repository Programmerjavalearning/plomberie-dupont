"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "Services", href: "#services" },
    { label: "Réalisations", href: "#realisations" },
    { label: "Pourquoi nous", href: "#pourquoi-nous" },
    { label: "Avis clients", href: "#avis" },
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0f1a]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <span className="text-accent text-2xl">💧</span>
            <span className="font-bold text-lg text-white group-hover:text-accent transition-colors">
              Plomberie{" "}
              <span className="text-accent">Dupont</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-accent transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-accent hover:bg-accent-dark text-white text-sm font-semibold transition-all duration-200 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5"
            >
              Contact
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/70 hover:text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0a0f1a]/98 border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-white/70 hover:text-accent transition-colors py-1 text-sm font-medium"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-1 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-dark text-white text-sm font-semibold text-center transition-colors"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
