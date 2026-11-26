import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactContent from "./ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Mohd Areeb",
  description: "Get in touch with Mohd Areeb for full-stack development opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="bg-background min-h-screen">
        <div className="container">
          <header className="py-5xl border-b border-border-subtle">
            <h1 className="font-display headline-1 text-foreground mb-4">
              Contact<span className="text-accent">.</span>
            </h1>
            <p className="body-lg text-muted max-w-2xl">
              Open to discussing new projects, backend architectures, and collaborations.
            </p>
          </header>

          <ContactContent />
        </div>
      </main>
      <Footer />
    </>
  );
}