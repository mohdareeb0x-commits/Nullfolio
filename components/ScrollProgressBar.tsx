"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) return;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollTop / docHeight;
      setProgress(scrollProgress);
      setIsVisible(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className="fixed top-0 left-0 z-50 h-1 w-full pointer-events-none"
      style={{
        background: `linear-gradient(to right, #ccff00 ${progress * 100}%, transparent ${progress * 100}%)`,
        opacity: progress > 0.98 ? 0 : 1,
        transition: "opacity 0.3s ease-out",
      }}
      aria-hidden="true"
    />
  );
}