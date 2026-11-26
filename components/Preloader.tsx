"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [showPreloader, setShowPreloader] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const hasSeenPreloader = sessionStorage.getItem("nullfolio_preloader_seen");

    if (prefersReducedMotion || hasSeenPreloader) {
      setShowPreloader(false);
      return;
    }

    setShowPreloader(true);
    sessionStorage.setItem("nullfolio_preloader_seen", "true");

    const timeout = setTimeout(() => {
      controls.start("exit");
    }, 1200);

    return () => clearTimeout(timeout);
  }, [controls]);

  if (!showPreloader) return null;

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={{
        initial: { opacity: 1, scale: 1 },
        exit: {
          opacity: 0,
          scale: 1.02,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#070709] pointer-events-none"
      style={{ willChange: "opacity, transform" }}
    >
      <div className="text-center">
        <motion.span
          className="font-heading text-2xl md:text-4xl font-bold tracking-tighter text-[#f5f5f7]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          NULLFOLIO
        </motion.span>
        <motion.span
          className="block font-mono text-xs text-[#ccff00] mt-2 tracking-widest uppercase"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          // 2026
        </motion.span>
        <motion.div
          className="w-24 h-px bg-[#22222a] mt-6 mx-auto relative overflow-hidden"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0 bg-[#ccff00]"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}