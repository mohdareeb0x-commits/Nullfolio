import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Github, Mail, Linkedin, Phone } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mohd Areeb",
  description: "Get in touch with Mohd Areeb for full-stack development opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-32 pb-20 px-6">
        <div className="mx-auto max-w-6xl">
          <header className="max-w-2xl mb-20">
            <h1 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Get in touch
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              I&apos;m always open to discussing new projects, backend
              architectures, or opportunities to collaborate on interesting
              open-source work.
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-16">
            <section>
              <h2 className="font-heading text-xl font-bold mb-8">Contact Details</h2>
              <div className="space-y-6">
                <a
                  href="mailto:mohdareeb0x@gmail.com"
                  className="group flex items-center gap-4 text-muted hover:text-foreground transition-colors"
                >
                  <div className="p-3 bg-surface border border-border group-hover:border-accent transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold mb-1">Email</p>
                    <p className="text-base">mohdareeb0x@gmail.com</p>
                  </div>
                </a>

                <a
                  href="https://github.com/mohdareeb0x-commits"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-muted hover:text-foreground transition-colors"
                >
                  <div className="p-3 bg-surface border border-border group-hover:border-accent transition-colors">
                    <Github size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold mb-1">GitHub</p>
                    <p className="text-base">mohdareeb0x-commits</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/mohd-areeb-0530913a2"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 text-muted hover:text-foreground transition-colors"
                >
                  <div className="p-3 bg-surface border border-border group-hover:border-accent transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold mb-1">LinkedIn</p>
                    <p className="text-base">mohd-areeb-0530913a2</p>
                  </div>
                </a>

                <a
                  href="tel:+917017470667"
                  className="group flex items-center gap-4 text-muted hover:text-foreground transition-colors"
                >
                  <div className="p-3 bg-surface border border-border group-hover:border-accent transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest font-bold mb-1">Phone</p>
                    <p className="text-base">+91 7017470667</p>
                  </div>
                </a>
              </div>
            </section>

                      </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
