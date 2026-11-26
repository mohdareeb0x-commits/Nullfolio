"use client";

export const ease = {
  standard: [0.22, 1, 0.36, 1] as const,
  entrance: [0.16, 1, 0.3, 1] as const,
  exit: [0.33, 0, 0.67, 1] as const,
  spring: { type: "spring", stiffness: 400, damping: 30 } as const,
};

export const duration = {
  fast: 0.15,
  normal: 0.3,
  slow: 0.5,
  slower: 0.8,
};

export const stagger = {
  tight: 0.04,
  normal: 0.08,
  loose: 0.12,
  card: 0.15,
};

export const transition = {
  entrance: { duration: duration.slow, ease: ease.entrance },
  fast: { duration: duration.fast, ease: ease.standard },
  normal: { duration: duration.normal, ease: ease.standard },
  spring: ease.spring,
};

export const viewport = {
  once: { once: true, margin: "-100px" } as const,
  repeat: { once: false, margin: "-100px" } as const,
};

export const fromVariants = {
  fadeUp: { opacity: 0, y: 40 },
  fadeUpSmall: { opacity: 0, y: 20 },
  fadeDown: { opacity: 0, y: -40 },
  fadeIn: { opacity: 0 },
  scaleIn: { opacity: 0, scale: 0.95 },
  clipIn: { opacity: 0, y: "100%" },
};

export const toVariants = {
  visible: { opacity: 1, y: 0, scale: 1 },
};

export function generateStaggeredVariants(
  baseDelay: number = 0,
  staggerValue: number = stagger.normal
) {
  return {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerValue,
        delayChildren: baseDelay,
      },
    },
  };
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: ease.entrance },
  },
};