import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";
import { clsx } from "clsx";

const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: {
    default: "Mohd Areeb | Full Stack Developer",
    template: "%s | Mohd Areeb",
  },
  description: "Self-taught full-stack developer specializing in Go, Python, and modern web technologies.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://web-builds.vercel.app",
    siteName: "Mohd Areeb Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mohd Areeb Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Areeb | Full Stack Developer",
    description: "Self-taught full-stack developer specializing in Go, Python, and modern web technologies.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohd Areeb",
    url: "https://web-builds.vercel.app",
    jobTitle: "Full Stack Developer",
    knowsAbout: ["Go", "Python", "PostgreSQL", "MongoDB", "Docker", "React", "React Native"],
    sameAs: [
      "https://github.com/mohdareeb0x-commits",
      "https://linkedin.com/in/mohdareeb",
    ],
  };

  return (
    <html lang="en" className={clsx(space.variable, jakarta.variable)}>
      <body className="font-sans min-h-screen bg-background">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
