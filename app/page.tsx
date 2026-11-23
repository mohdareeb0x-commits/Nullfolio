import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import fs from "fs/promises";
import path from "path";
import { ArrowRight, Code2, Layers, Server, Smartphone } from "lucide-react";
import Link from "next/link";

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

const focusAreas = [
  {
    icon: Server,
    title: "Backend Systems",
    desc: "Go, Python, PostgreSQL, MongoDB — scalable APIs and data infrastructure",
  },
  {
    icon: Smartphone,
    title: "Mobile & Web",
    desc: "React Native, Expo, Next.js — cross-platform applications",
  },
  {
    icon: Layers,
    title: "Cloud & DevOps",
    desc: "Docker, CI/CD, cloud-native deployment pipelines",
  },
  {
    icon: Code2,
    title: "Open Source",
    desc: "Contributing to tooling and libraries I depend on",
  },
];

export default async function Page() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          {/* Hero Section */}
          <section className="grid md:grid-cols-[1fr_400px] gap-16 items-start mb-24">
            <div className="max-w-2xl pt-4">
              <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight mb-8">
                Mohd Areeb
              </h1>
              <p className="text-xl text-muted leading-relaxed mb-12 max-w-xl">
                An independent web developer helping digital marketing agencies
                and businesses build high-performing websites, conversion-focused
                landing pages, and custom web applications. I specialize in
                Next.js, React, TypeScript, Python, and Go, along with marketing
                integrations like Google Tag Manager, Meta Pixel, CRM
                integrations, and API automation. I also provide reliable
                white-label development support for agencies.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="/projects"
                  className="px-6 py-3 bg-accent text-white font-medium rounded-sm hover:bg-accentHover transition-colors"
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-3 border border-border text-foreground font-medium rounded-sm hover:bg-surface transition-colors"
                >
                  Contact
                </Link>
              </div>
            </div>

            <div className="relative w-full max-w-xs md:ml-auto">
              <div className="aspect-square relative overflow-hidden rounded-sm border border-border bg-surface">
                <Image
                  src="/profile.jpg"
                  alt="Mohd Areeb"
                  fill
                  priority
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  sizes="(max-width: 768px) 100vw, 400px"
                />
              </div>
            </div>
          </section>

          {/* Focus Areas */}
          <section className="mb-24 pb-16 border-b border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl w-full">
              {focusAreas.map((area) => (
                <div key={area.title} className="group p-6 bg-surface border border-border hover:border-accentHover transition-colors duration-200">
                  <div className="text-accent mb-4 group-hover:scale-110 transition-transform duration-200">
                    <area.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-2">{area.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{area.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Featured Projects Preview */}
          {featuredProjects.length > 0 && (
            <section className="mb-16">
              <div className="flex items-end justify-between mb-10">
                <div>
                  <h2 className="font-heading text-3xl font-bold tracking-tight">
                    Recent Work
                  </h2>
                  <p className="text-muted mt-1">
                    Selected projects demonstrating breadth across the stack
                  </p>
                </div>
                <Link
                  href="/projects"
                  className="text-sm font-medium text-accent hover:text-accentHover transition-colors flex items-center gap-1"
                >
                  View all <ArrowRight size={16} />
                </Link>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {featuredProjects.map((project, index) => (
                  <Link
                    key={project.id}
                    href={`/projects#${project.id}`}
                    className="group flex flex-col bg-surface border border-border hover:border-accentHover transition-colors duration-200"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div className="aspect-video relative overflow-hidden">
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                          sizes="(max-width: 1024px) 100vw, 33vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-border flex items-center justify-center text-muted text-sm">
                          No preview
                        </div>
                      )}
                    </div>
                    <div className="p-5 space-y-3">
                      <h3 className="font-heading text-xl font-semibold group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted text-sm line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.slice(0, 5).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 bg-background border border-border text-[10px] uppercase tracking-wider font-semibold text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Closing / CTA */}
          <section className="bg-surface border border-border p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="font-heading text-2xl md:text-3xl font-bold tracking-tight mb-4">
                Currently open to interesting problems
              </h2>
              <p className="text-muted leading-relaxed mb-8">
                Whether it's designing a scalable backend, crafting a polished
                mobile experience, or untangling legacy systems — I enjoy the
                craft of building things that last.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-white font-medium rounded-sm hover:bg-accentHover transition-colors text-sm"
              >
                Let's talk
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
