"use client";

import Link from "next/link";

import { Github, Mail, Linkedin, Phone } from "lucide-react";
import clsx from "clsx";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* About */}
          <div className="md:col-span-1">
            <p className="font-heading text-base font-medium tracking-tight">
              Mohd Areeb
            </p>
            <p className="mt-3 text-sm text-muted leading-relaxed max-w-xs">
              Self-taught full-stack developer. Backend-leaning with Go,
              Python, PostgreSQL, MongoDB, Docker. Now also building with
              React Native & Expo.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <h3 className="font-heading text-sm font-medium tracking-tight mb-4">
              Navigate
            </h3>
            <ul className="space-y-2">
              {["Home", "Projects", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase()}`}
                    className="text-sm text-muted hover:text-foreground transition-colors duration-150"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h3 className="font-heading text-sm font-medium tracking-tight mb-4">
              Connect
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/mohdareeb0x-commits"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors duration-150"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:areeb.nullfolio@gmail.com"
                className="text-muted hover:text-foreground transition-colors duration-150"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mohd-areeb-0530913a2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-foreground transition-colors duration-150"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="tel:+917017470667"
                className="text-muted hover:text-foreground transition-colors duration-150"
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} Mohd Areeb. Built with Next.js.
          </p>
          <p className="text-xs text-muted">
            Deployed on Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}