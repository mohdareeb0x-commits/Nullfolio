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

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl mb-20">
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Projects
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              A selected showcase of my work, focusing on robust backends,
              scalable architectures, and clean, functional interfaces.
            </p>
          </header>

          <div className="grid gap-16">
            {projects.length > 0 ? (
              projects.map((project, index) => (
                <section
                  key={project.id}
                  className={`flex flex-col ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 md:gap-16 items-start`}
                >
                  <div className="flex-1 w-full group overflow-hidden border border-border bg-surface">
                    {project.image ? (
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-border flex items-center justify-center">
                        <span className="text-muted text-sm">No preview available</span>
                      </div>
                    )}
                  </div>

                  <div className="flex-1 space-y-6">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold">
                      {project.title}
                    </h2>
                    <p className="text-muted leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-surface border border-border text-[10px] uppercase tracking-wider font-semibold text-muted"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-6 pt-4">
                      {project.liveLink && (
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                        >
                          <ExternalLink size={16} /> Live Demo
                        </a>
                      )}
                      {project.githubLink && (
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors"
                        >
                          <Github size={16} /> Source Code
                        </a>
                      )}
                    </div>
                  </div>
                </section>
              ))
            ) : (
              <p className="text-muted italic">No projects added yet.</p>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
