"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    category: "Backend & Systems",
    count: 5,
    core: ["Go", "Python", "PostgreSQL", "MongoDB", "Redis"],
    secondary: [],
  },
  {
    category: "Frontend & Mobile",
    count: 5,
    core: ["Next.js", "React", "TypeScript", "Tailwind CSS", "React Native"],
    secondary: ["Expo", "Framer Motion"],
  },
  {
    category: "Infrastructure & DevOps",
    count: 4,
    core: ["Docker", "GitHub Actions", "Linux", "Nginx"],
    secondary: ["AWS", "Vercel"],
  },
  {
    category: "Tools & Workflow",
    count: 4,
    core: ["Git", "VS Code", "Figma", "Postman"],
    secondary: ["Notion", "Linear"],
  },
];

export default function SkillsWall() {
  return (
    <section className="py-5xl border-t border-border-subtle">
      <div className="mx-auto max-w-[80rem] px-6 md:px-12">
        <div className="flex items-baseline gap-4 mb-5xl">
          <span className="font-mono text-accent">04</span>
          <h2 className="font-display headline-3 text-foreground">
            (Tools & Stack)
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {skillCategories.map((cat, catIndex) => (
            <motion.article
              key={cat.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: catIndex * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="card p-6 md:p-8 group"
            >
              {/* Category header */}
              <div className="flex items-baseline justify-between mb-6">
                <div>
                  <span className="font-mono text-body-xs text-accent mb-2 block">
                    {cat.category.toUpperCase()}
                  </span>
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {cat.category}
                  </h3>
                </div>
                <span className="font-display text-3xl font-bold text-foreground/5" aria-hidden="true">
                  {cat.count}
                </span>
              </div>

              {/* Core tools - larger chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                {cat.core.map((skill, i) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + i * 0.05 }}
                    className="px-4 py-2 rounded-lg bg-surface-elevated border border-border text-sm font-medium text-foreground hover:border-accent hover:text-accent transition-all duration-200 group-hover:border-accent/50"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

              {/* Secondary tools - smaller, muted */}
              {cat.secondary.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {cat.secondary.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.1 + cat.core.length * 0.05 + i * 0.04 }}
                      className="px-3 py-1.5 rounded-full border border-border-subtle bg-surface text-body-xs uppercase tracking-wider font-medium text-muted hover:border-accent/50 hover:text-muted/80 transition-all duration-200"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              )}
            </motion.article>
          ))}
        </div>

        {/* Stack summary line */}
        <div className="mt-5xl pt-5xl border-t border-border-subtle">
          <p className="body-base text-muted text-center max-w-2xl mx-auto">
            Currently exploring: <span className="text-foreground font-medium">Rust</span>, <span className="text-foreground font-medium">WebAssembly</span>, and <span className="text-foreground font-medium">local-first architecture</span>.
          </p>
        </div>
      </div>
    </section>
  );
}