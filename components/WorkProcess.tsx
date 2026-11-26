"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const phases = [
  {
    num: "01",
    title: "PLAN",
    desc: "Understanding business goals, technical requirements, and defining the architecture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-muted" aria-hidden="true">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "BUILD",
    desc: "Iterative development with clean, scalable code, focusing on performance and security.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-muted" aria-hidden="true">
        <path d="M12 3v12" />
        <path d="M3 12h18" />
        <path d="M17 7l-5 5 5 5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "SHIP",
    desc: "Deploying robust infrastructure, rigorous testing, and seamless client handover.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-muted" aria-hidden="true">
        <path d="M6 8L12 2l6 6" />
        <path d="M12 14V22" />
        <path d="M17 14H7" />
      </svg>
    ),
  },
];

export default function WorkProcess() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Progress line fill
  const progressY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={containerRef} className="relative py-5xl border-y border-border-subtle overflow-hidden">
      {/* Progress line - fixed on left */}
      <div className="hidden lg:block absolute left-8 top-0 bottom-0 w-px bg-border-subtle" aria-hidden="true">
        <motion.div
          style={{ height: progressY }}
          className="w-full bg-accent origin-top transition-none"
          initial={false}
        />
      </div>

      {/* Progress nodes */}
      <div className="hidden lg:block absolute left-8 top-0 bottom-0 flex flex-col justify-between items-center px-2" aria-hidden="true">
        {phases.map((_, i) => (
          <motion.div
            key={i}
            style={{ y: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]) }}
            className="relative w-3 h-3 rounded-full bg-border border-2 border-background transition-all duration-300"
            initial={false}
          >
            <motion.span
              style={{
                opacity: useTransform(scrollYProgress, [(i) / 3, (i + 1) / 3], [0, 1], { clamp: true }),
                scale: useTransform(scrollYProgress, [(i) / 3, (i + 1) / 3], [0.5, 1], { clamp: true }),
              }}
              className="absolute -top-10 left-1/2 -translate-x-1/2 font-mono text-body-xs text-muted white-space-nowrap"
            >
              {phases[i].title}
            </motion.span>
          </motion.div>
        ))}
      </div>

      <div className="mx-auto max-w-[80rem] px-6 md:px-12 relative z-10 lg:pl-32">
        <div className="flex items-baseline gap-4 mb-5xl">
          <span className="font-mono text-accent">03</span>
          <h2 className="font-display headline-3 text-foreground">
            (How I work)
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {phases.map((phase, i) => (
            <motion.div
              key={phase.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-8 md:p-10 bg-surface border border-border rounded-2xl"
            >
              {/* Giant outlined numeral behind content */}
              <span
                className="absolute top-4 right-4 font-display text-7xl md:text-9xl font-bold text-foreground/5 -rotate-3 select-none pointer-events-none"
                aria-hidden="true"
              >
                {phase.num}
              </span>

              {/* Phase icon */}
              <div className="relative z-10 mb-6 w-12 h-12 rounded-xl bg-surface-elevated border border-border-subtle flex items-center justify-center group-hover:border-accent group-hover:text-accent transition-all duration-300">
                {phase.icon}
              </div>

              {/* Phase number + title */}
              <div className="relative z-10 flex items-baseline gap-4 mb-6">
                <span className="font-mono text-accent text-lg font-medium">{phase.num}</span>
                <span className="font-mono text-body-xs uppercase tracking-widest text-muted">{phase.title}</span>
              </div>

              {/* Description */}
              <p className="relative z-10 body-base text-muted leading-relaxed group-hover:text-foreground transition-colors">
                {phase.desc}
              </p>

              {/* Hover accent line */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: "60px" }}
                className="absolute bottom-6 left-8 h-px bg-accent transition-none"
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}