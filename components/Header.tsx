"use client";

import Link from "next/link";
import { Github, Mail, ArrowUpRight, Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);
      setHideHeader(currentScrollY > lastScrollY.current && currentScrollY > 100);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0b]/80 backdrop-blur-md border-b border-[#2a2a32] py-3"
            : "bg-transparent py-5"
        } ${hideHeader ? "-translate-y-full" : "translate-y-0"}`}
      >
        <div className="mx-auto max-w-[80rem] px-6 md:px-12 flex items-center justify-between">
          <Link
            href="/"
            className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-[#fafaf8]"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#d4ff00] inline-block group-hover:scale-125 transition-transform duration-300"></span>
            NULLFOLIO<span className="text-[#d4ff00]">.</span>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-xs uppercase tracking-widest text-[#94949a] hover:text-[#fafaf8] transition-colors duration-200 font-medium after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-[#d4ff00] after:transition-width hover:after:w-full"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right CTA / Socials */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://github.com/mohdareeb0x-commits"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#111113] border border-[#2a2a32] text-[#94949a] hover:text-[#fafaf8] hover:border-[#d4ff00]/50 transition-all duration-200"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <Link
              href="/contact"
              className="btn btn-primary text-xs"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 rounded-lg bg-[#111113] border border-[#2a2a32] text-[#fafaf8]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Full-screen immersive mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0a0a0b]/98 backdrop-blur-xl flex flex-col justify-between px-6 py-24 md:hidden"
          >
            <div className="flex flex-col gap-6">
              <p className="text-[10px] uppercase tracking-widest text-[#94949a]">Navigation</p>
              {links.map((link, idx) => (
                <motion.link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.08 }}
                  className="font-display text-4xl md:text-5xl font-bold text-[#fafaf8] hover:text-[#d4ff00] transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <span className="text-xs font-mono text-[#94949a]">0{idx + 1}</span>
                </motion.link>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-6 pt-8 border-t border-[#2a2a32]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#94949a]">Direct Contact</span>
                <a
                  href="mailto:areeb.nullfolio@gmail.com"
                  className="text-xs font-mono text-[#d4ff00]"
                >
                  areeb.nullfolio@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/mohdareeb0x-commits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 text-center rounded-lg bg-[#111113] border border-[#2a2a32] text-xs uppercase tracking-wider text-[#fafaf8]"
                >
                  GitHub
                </a>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex-1 py-3 text-center rounded-lg bg-[#d4ff00] text-[#0a0a0b] font-semibold text-xs uppercase tracking-wider"
                >
                  Hire Me
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}