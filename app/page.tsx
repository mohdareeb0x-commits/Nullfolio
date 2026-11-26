import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WorkProcess from "@/components/WorkProcess";
import SkillsWall from "@/components/SkillsWall";
import Image from "next/image";
import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { ArrowUpRight, MousePointer } from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

async function getFeaturedProjects(): Promise<Project[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "projects.json");
    const data = await fs.readFile(filePath, "utf-8");
    const projects = JSON.parse(data);
    return projects.slice(0, 3);
  } catch {
    return [];
  }
}

const marqueeItems = [
  "Backend Systems",
  "API Architecture",
  "Cloud & DevOps",
  "Mobile Apps",
  "Full-Stack Engineering",
];

export default async function Page() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="container">
          {/* Hero Section */}
          <section className="relative pt-20 pb-20 md:pt-32 md:pb-32 lg:pt-40 lg:pb-40 overflow-hidden">
            {/* Subtle radial glow behind headline */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-[#d4ff00]/5 blur-[120px] pointer-events-none" aria-hidden="true" />

            <div className="relative grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
              {/* Left: Headline + Meta */}
              <div className="lg:col-span-7 lg:col-start-1 z-10">
                {/* Section tag */}
                <div className="flex items-center gap-3 mb-8 md:mb-12">
                  <span className="font-mono text-body-xs text-muted">01</span>
                  <span className="h-px w-24 bg-border-subtle" aria-hidden="true" />
                  <span className="font-mono text-body-xs text-muted">Hero</span>
                </div>

                {/* Headline with masked reveal */}
                <h1 className="font-display headline-1 text-foreground mb-8 md:mb-12">
                  <span className="reveal-up">Building</span>
                  <br />
                  <span className="reveal-up delay-1"><span className="font-accent text-accent">robust</span></span>
                  <br />
                  <span className="reveal-up delay-2">systems for</span>
                  <br />
                  <span className="reveal-up delay-3">modern agencies.</span>
                </h1>

                {/* Subtitle */}
                <p className="body-lg text-muted max-w-xl mb-10 md:mb-16 reveal-up delay-4">
                  Mohd Areeb. Independent full-stack developer focused on scalable
                  backends, API architecture, and high-performance digital experiences.
                </p>

                {/* CTA group */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 reveal-up delay-5">
                  <Link href="/projects" className="btn btn-primary">
                    View Work
                    <ArrowUpRight size={16} />
                  </Link>
                  <Link href="/contact" className="btn btn-secondary">
                    Get in Touch
                  </Link>
                </div>

                {/* Scroll cue */}
                <div className="mt-16 flex items-center gap-3 text-muted opacity-60 reveal-up delay-6" aria-hidden="true">
                  <MousePointer size={20} className="animate-bounce" />
                  <span className="font-mono text-body-xs uppercase tracking-widest">Scroll</span>
                </div>
              </div>

              {/* Right: Portrait Frame */}
              <div className="lg:col-span-5 lg:col-start-8 relative z-10 reveal-up delay-3">
                <div className="relative aspect-[3/4] max-w-xs mx-auto lg:mx-0">
                  {/* Portrait with grayscale + duotone treatment */}
                  <div className="absolute inset-0 rounded-2xl overflow-hidden bg-surface border border-border">
                    <Image
                      src="/profile.jpg"
                      alt="Mohd Areeb"
                      fill
                      priority
                      className="object-cover grayscale contrast-110 transition-all duration-700 hover:grayscale-0 hover:contrast-100"
                      sizes="(max-width: 1024px) 100vw, 320px"
                    />
                    {/* Accent overlay on hover - subtle */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  </div>

                  {/* Corner brackets - subtle */}
                  <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-accent/30 pointer-events-none" aria-hidden="true" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 border-t-2 border-r-2 border-accent/30 pointer-events-none" aria-hidden="true" />
                  <div className="absolute -bottom-2 -left-2 w-8 h-8 border-b-2 border-l-2 border-accent/30 pointer-events-none" aria-hidden="true" />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-accent/30 pointer-events-none" aria-hidden="true" />
                </div>
              </div>
            </div>
          </section>

          {/* Marquee Ticker */}
          <section className="py-12 border-y border-border-subtle overflow-hidden relative">
            <div className="relative z-10">
              <div className="marquee-track flex gap-16 whitespace-nowrap">
                {marqueeItems.map((item, i) => (
                  <span
                    key={i}
                    className="font-display text-display-4 font-bold uppercase tracking-tight whitespace-nowrap flex items-center gap-6"
                    style={{
                      color: i % 2 === 0 ? "var(--foreground)" : "transparent",
                      WebkitTextStroke: i % 2 === 0 ? "0 transparent" : "1px var(--foreground)",
                    }}
                  >
                    {item}
                    <span className="text-muted font-mono text-body-xs">•</span>
                  </span>
                ))}
              </div>
            </div>
            {/* Accent highlight line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent pointer-events-none" aria-hidden="true" />
          </section>

          <WorkProcess />

          {/* Featured Projects */}
          <section className="py-5xl relative">
            <div className="flex items-end justify-between mb-5xl">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-accent">02</span>
                <h2 className="font-display headline-3 text-foreground">
                  (Selected Work)
                </h2>
              </div>
              <Link
                href="/projects"
                className="btn btn-ghost text-sm hidden md:inline-flex"
              >
                View All Projects
                <ArrowUpRight size={14} />
              </Link>
            </div>

            {featuredProjects.length > 0 && (
              <>
                {/* Featured: First project full width */}
                <article className="mb-4xl group relative">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 relative aspect-[16/9] img-frame group">
                      {featuredProjects[0].image && (
                        <Image
                          src={featuredProjects[0].image}
                          alt={featuredProjects[0].title}
                          fill
                          priority
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 58vw"
                        />
                      )}
                      {/* Project type badge */}
                      <div className="absolute top-4 left-4">
                        <span className="font-mono text-body-xs px-3 py-1 bg-background/90 backdrop-blur-sm border border-border rounded-full text-accent">
                          Client Work
                        </span>
                      </div>
                      {/* Number */}
                      <div className="absolute bottom-4 right-4 font-display text-6xl font-bold text-foreground/5" aria-hidden="true">
                        01
                      </div>
                    </div>
                    <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-0">
                      <span className="font-mono text-body-xs text-accent">01</span>
                      <h3 className="font-display headline-4 text-foreground">
                        {featuredProjects[0].title}
                      </h3>
                      <p className="body-lg text-muted leading-relaxed">
                        {featuredProjects[0].description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {featuredProjects[0].techStack.slice(0, 4).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full border border-border bg-surface text-body-xs uppercase tracking-widest font-medium text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 pt-4 border-t border-border-subtle">
                        {featuredProjects[0].liveLink && (
                          <a
                            href={featuredProjects[0].liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost text-sm"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight size={14} />
                          </a>
                        )}
                        {featuredProjects[0].githubLink && (
                          <a
                            href={featuredProjects[0].githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost text-sm"
                          >
                            Source Code
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>

                {/* Remaining projects: two column */}
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredProjects.slice(1).map((project, index) => (
                    <article
                      key={project.id}
                      className="group card p-6 md:p-8 relative overflow-hidden"
                    >
                      <div className="relative aspect-video img-frame mb-6">
                        {project.image && (
                          <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        )}
                        <div className="absolute top-3 left-3">
                          <span className="font-mono text-body-xs px-2 py-1 bg-background/90 backdrop-blur-sm border border-border rounded-full text-muted">
                            {index === 0 ? "Client Work" : "Personal"}
                          </span>
                        </div>
                        <div className="absolute bottom-3 right-3 font-display text-4xl font-bold text-foreground/5" aria-hidden="true">
                          0{index + 2}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <span className="font-mono text-body-xs text-accent">0{index + 2}</span>
                        <h3 className="font-display text-2xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <p className="body-sm text-muted line-clamp-3 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 rounded-full border border-border bg-surface text-body-xs uppercase tracking-widest font-medium text-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center gap-3 pt-3 border-t border-border-subtle">
                          {project.liveLink && (
                            <a
                              href={project.liveLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-ghost text-xs"
                            >
                              Live Demo
                              <ArrowUpRight size={12} />
                            </a>
                          )}
                          {project.githubLink && (
                            <a
                              href={project.githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn btn-ghost text-xs"
                            >
                              Source
                            </a>
                          )}
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}
          </section>

          <SkillsWall />

          {/* CTA Footer */}
          <section className="relative py-5xl border-t border-border-subtle overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[50rem] h-[30rem] rounded-full bg-[#d4ff00]/3 blur-[100px] pointer-events-none" aria-hidden="true" />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="font-display headline-1 text-foreground mb-8 md:mb-12">
                Let's work <br />
                <span className="font-accent text-accent">together</span>.
              </h2>
              <p className="body-lg text-muted mb-12 max-w-xl mx-auto">
                I'm currently open to new projects, freelance engagements, and interesting problems.
              </p>
              <a
                href="mailto:areeb.nullfolio@gmail.com"
                className="btn btn-primary text-lg px-10 py-5 inline-block"
              >
                areeb.nullfolio@gmail.com
                <ArrowUpRight size={20} />
              </a>
              <p className="mt-8 font-mono text-body-xs text-muted max-w-xs mx-auto">
                "I reply to every email. Eventually."
              </p>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}