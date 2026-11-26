import fs from "fs/promises";
import path from "path";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Github, ExternalLink } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Mohd Areeb",
  description: "A collection of web applications and backend systems built by Mohd Areeb.",
};

interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  githubLink: string;
  image: string;
}

async function getProjects(): Promise<Project[]> {
  try {
    const filePath = path.join(process.cwd(), "data", "projects.json");
    const data = await fs.readFile(filePath, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

const projectTypes: Record<string, string> = {
  "1794762679365": "Personal Project",
  "1794999400510": "Personal Project",
  "1795455502752": "Personal Project",
  "1795537138575": "Personal Project",
  "1795615840221": "Personal Project",
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="container">
          <header className="py-5xl border-b border-border-subtle">
            <h1 className="font-display headline-1 text-foreground mb-4">
              Projects<span className="text-accent">.</span>
            </h1>
            <p className="body-lg text-muted max-w-2xl">
              Selected showcase of robust backends, scalable architectures, and functional interfaces.
            </p>
          </header>

          <section className="py-5xl">
            {projects.length > 0 ? (
              <>
                {/* Featured: First project full width */}
                <article className="mb-5xl group relative">
                  <div className="grid lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-7 relative aspect-[16/9] img-frame group">
                      {projects[0].image && (
                        <Image
                          src={projects[0].image}
                          alt={projects[0].title}
                          fill
                          priority
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 58vw"
                        />
                      )}
                      <div className="absolute top-4 left-4">
                        <span className="font-mono text-body-xs px-3 py-1 bg-background/90 backdrop-blur-sm border border-border rounded-full text-accent font-medium">
                          {projectTypes[projects[0].id] || "Personal Project"}
                        </span>
                      </div>
                      <div className="absolute bottom-4 right-4 font-display text-6xl font-bold text-foreground/5" aria-hidden="true">
                        01
                      </div>
                    </div>
                    <div className="lg:col-span-5 space-y-6 pt-4 lg:pt-0">
                      <span className="font-mono text-body-xs text-accent">01</span>
                      <h2 className="font-display headline-3 text-foreground">
                        {projects[0].title}
                      </h2>
                      <p className="body-lg text-muted leading-relaxed">
                        {projects[0].description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {projects[0].techStack.slice(0, 6).map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1.5 rounded-lg border border-border bg-surface text-body-xs uppercase tracking-widest font-medium text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center gap-4 pt-6 border-t border-border-subtle">
                        {projects[0].liveLink && (
                          <a
                            href={projects[0].liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost text-sm"
                          >
                            <ExternalLink size={14} />
                            <span>Live Demo</span>
                          </a>
                        )}
                        {projects[0].githubLink && (
                          <a
                            href={projects[0].githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-ghost text-sm"
                          >
                            <Github size={14} />
                            <span>Source Code</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>

                {/* Remaining projects: alternating two-column */}
                <div className="space-y-5xl">
                  {projects.slice(1).map((project, index) => {
                    const isEven = index % 2 === 0;
                    return (
                      <article
                        key={project.id}
                        className={`group relative grid lg:grid-cols-12 gap-8 items-start ${
                          isEven ? "" : "lg:[grid-template-areas:_'image_content']"
                        }`}
                      >
                        <div
                          className={`relative aspect-[16/9] img-frame group ${
                            isEven ? "lg:col-span-7 lg:col-start-1" : "lg:col-span-7 lg:col-start-6"
                          }`}
                        >
                          {project.image && (
                            <Image
                              src={project.image}
                              alt={project.title}
                              fill
                              className="object-cover"
                              sizes="(max-width: 1024px) 100vw, 58vw"
                            />
                          )}
                          <div className="absolute top-4 left-4">
                            <span className="font-mono text-body-xs px-3 py-1 bg-background/90 backdrop-blur-sm border border-border rounded-full text-accent font-medium">
                              {projectTypes[project.id] || "Personal Project"}
                            </span>
                          </div>
                          <div className="absolute bottom-4 right-4 font-display text-6xl font-bold text-foreground/5" aria-hidden="true">
                            0{index + 2}
                          </div>
                        </div>
                        <div
                          className={`space-y-6 pt-4 lg:pt-0 ${
                            isEven ? "lg:col-span-5 lg:col-start-6" : "lg:col-span-5 lg:col-start-1"
                          }`}
                        >
                          <span className="font-mono text-body-xs text-accent">0{index + 2}</span>
                          <h2 className="font-display headline-4 text-foreground">
                            {project.title}
                          </h2>
                          <p className="body-lg text-muted leading-relaxed">
                            {project.description}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.slice(0, 6).map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 rounded-lg border border-border bg-surface text-body-xs uppercase tracking-widest font-medium text-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          <div className="flex items-center gap-4 pt-6 border-t border-border-subtle">
                            {project.liveLink && (
                              <a
                                href={project.liveLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost text-sm"
                              >
                                <ExternalLink size={14} />
                                <span>Live Demo</span>
                              </a>
                            )}
                            {project.githubLink && (
                              <a
                                href={project.githubLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-ghost text-sm"
                              >
                                <Github size={14} />
                                <span>Source Code</span>
                              </a>
                            )}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </>
            ) : (
              <div className="py-5xl text-center">
                <p className="text-muted italic">No projects added yet.</p>
              </div>
            )}
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}