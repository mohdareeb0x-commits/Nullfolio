"use client";

import Link from "next/link";

import { Github, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-heading text-lg font-semibold tracking-tight">
          NULLFOLIO.
        </Link>

        {/* Desktop navigation */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-muted hover:text-foreground transition-colors duration-150"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social links */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="https://github.com/mohdareeb0x-commits"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors duration-150"
            aria-label="GitHub"
          >
            <Github size={18} />
          </a>
          <a
            href="mailto:mohdareeb0x@gmail.com"
            className="text-muted hover:text-foreground transition-colors duration-150"
            aria-label="Email"
          >
            <Mail size={18} />
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-muted hover:text-foreground transition-colors duration-150"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-6xl px-6 py-6 flex flex-col gap-5">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm text-muted hover:text-foreground transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-5 pt-4 border-t border-border">
              <a
                href="https://github.com/mohdareeb0x-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted hover:text-foreground transition-colors duration-150"
              >
                GitHub
              </a>
              <a
                href="mailto:mohdareeb0x@gmail.com"
                className="text-sm text-muted hover:text-foreground transition-colors duration-150"
              >
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
