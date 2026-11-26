"use client";

import { Github, Mail, Linkedin, Phone, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

function ContactIcon({ icon, primary }: { icon: "mail" | "github" | "linkedin" | "phone"; primary?: boolean }) {
  const icons = {
    mail: <Mail size={22} />,
    github: <Github size={22} />,
    linkedin: <Linkedin size={22} />,
    phone: <Phone size={22} />,
  };
  return (
    <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
      primary
        ? "bg-accent/10 text-accent"
        : "bg-surface-elevated border border-border text-muted group-hover:text-accent group-hover:border-accent/50 transition-all"
    }`}>
      {icons[icon]}
    </div>
  );
}

export default function ContactContent() {
  const contactItems = [
    {
      icon: "mail" as const,
      label: "Email",
      value: "areeb.nullfolio@gmail.com",
      href: "mailto:areeb.nullfolio@gmail.com",
      primary: true,
    },
    {
      icon: "github" as const,
      label: "GitHub",
      value: "mohdareeb0x-commits",
      href: "https://github.com/mohdareeb0x-commits",
    },
    {
      icon: "linkedin" as const,
      label: "LinkedIn",
      value: "mohd-areeb-0530913a2",
      href: "https://www.linkedin.com/in/mohd-areeb-0530913a2",
    },
    {
      icon: "phone" as const,
      label: "Phone",
      value: "+91 7017470667",
      href: "tel:+917017470667",
    },
  ];

  return (
    <section className="py-5xl">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
        {/* Left: Contact methods */}
        <div className="space-y-6">
          <div className="flex items-baseline gap-4 mb-5xl">
            <span className="font-mono text-accent">05</span>
            <h2 className="font-display headline-3 text-foreground">
              (Get in touch)
            </h2>
          </div>

          {contactItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className={`group flex items-center gap-4 p-6 rounded-2xl border transition-all duration-300 ${
                item.primary
                  ? "bg-surface-elevated border-accent/30"
                  : "bg-surface border-border hover:border-accent/50"
              }`}
            >
              <ContactIcon icon={item.icon} primary={item.primary} />
              <div className="flex-1 min-w-0">
                <p className="font-mono text-body-xs text-muted mb-1">{item.label}</p>
                <p className={`font-medium text-foreground truncate ${
                  item.primary ? "text-lg" : "text-base"
                }`}>
                  {item.value}
                </p>
              </div>
              {!item.primary && (
                <ArrowUpRight size={18} className="text-muted group-hover:text-accent transition-colors opacity-0 group-hover:opacity-100 translate-x-1 group-hover:translate-x-0 transition-transform" />
              )}
            </motion.a>
          ))}
        </div>

        {/* Right: Hero email CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative p-8 md:p-12 lg:p-16 rounded-3xl bg-surface-elevated border border-border-subtle"
        >
          {/* Accent border accent */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />

          <div className="text-center">
            <p className="font-mono text-body-xs text-muted mb-6 uppercase tracking-widest">
              Direct line
            </p>
            <h3 className="font-display headline-4 text-foreground mb-4">
              Let's start a conversation.
            </h3>
            <p className="body-base text-muted mb-8 max-w-sm mx-auto">
              I read every message personally. No forms, no bots, no spam.
            </p>
            <a
              href="mailto:areeb.nullfolio@gmail.com"
              className="btn btn-primary text-lg px-10 py-4 inline-flex items-center gap-3 group"
            >
              areeb.nullfolio@gmail.com
              <ArrowUpRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="mt-6 font-mono text-body-xs text-muted">
              "I reply to every email. Eventually."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}