"use client";

import Link from "next/link";
import { Github, Mail, Linkedin, Phone, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-surface" role="contentinfo">
      <div className="mx-auto max-w-[80rem] px-6 md:px-12 py-5xl">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-5xl">
          {/* About */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="font-display text-lg font-bold tracking-tight text-foreground">
              Mohd Areeb
            </h3>
            <p className="body-sm text-muted leading-relaxed max-w-sm">
              Independent full-stack developer. Specializing in high-performance
              backend systems, APIs, cloud architecture, and modern web applications.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation" className="md:col-span-1">
            <p className="font-mono text-body-xs text-muted mb-4 uppercase tracking-widest">
              Navigation
            </p>
            <ul className="space-y-3">
              {["Home", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item === "Home" ? "" : item.toLowerCase()}`}
                    className="body-sm text-muted hover:text-accent transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Connect */}
          <div className="md:col-span-1">
            <p className="font-mono text-body-xs text-muted mb-4 uppercase tracking-widest">
              Connect
            </p>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/mohdareeb0x-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-elevated border border-border text-muted hover:text-accent hover:border-accent/50 transition-all"
                aria-label="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href="mailto:areeb.nullfolio@gmail.com"
                className="p-2.5 rounded-lg bg-surface-elevated border border-border text-muted hover:text-accent hover:border-accent/50 transition-all"
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-areeb-0530913a2"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg bg-surface-elevated border border-border text-muted hover:text-accent hover:border-accent/50 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="tel:+917017470667"
                className="p-2.5 rounded-lg bg-surface-elevated border border-border text-muted hover:text-accent hover:border-accent/50 transition-all"
                aria-label="Phone"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + copyright + back to top */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 pt-5xl border-t border-border-subtle pb-20 md:pb-32 lg:pb-48">
          <p className="font-mono text-body-xs text-muted">
            &copy; {new Date().getFullYear()} Mohd Areeb. Built with Next.js.
          </p>
          <p className="font-mono text-body-xs text-muted">
            Deployed on Vercel
          </p>
          <a
            href="#top"
            className="flex items-center gap-2 p-2 rounded-lg bg-surface-elevated border border-border text-muted hover:text-accent hover:border-accent/50 transition-all"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
            <span className="font-mono text-body-xs hidden sm:inline">Top</span>
          </a>
        </div>

        {/* Giant clipped wordmark at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute bottom-0 left-0 right-0 h-32 md:h-48 lg:h-64 flex items-end justify-center pointer-events-none overflow-hidden"
          aria-hidden="true"
        >
          <h2 className="font-display text-6xl md:text-9xl lg:text-[14rem] font-black tracking-tighter text-foreground/5 select-none leading-none mb-2 md:mb-4">
            NULLFOLIO
          </h2>
        </motion.div>
      </div>
    </footer>
  );
}