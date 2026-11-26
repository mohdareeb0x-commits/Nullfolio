import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        surface: "var(--surface-1)",
        "surface-elevated": "var(--surface-2)",
        "surface-high": "var(--surface-3)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        "border-subtle": "var(--border-subtle)",
        accent: "var(--accent)",
        "accent-hover": "var(--accent-hover)",
        "accent-dim": "var(--accent-dim)",
        "accent-muted": "var(--accent-muted)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        accent: ["var(--font-accent)"],
      },
      fontSize: {
        "display-1": ["clamp(3.5rem, 8vw, 9rem)", { lineHeight: "1.0", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-2": ["clamp(2.5rem, 5vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-3": ["clamp(1.75rem, 3.5vw, 3rem)", { lineHeight: "1.1", letterSpacing: "-0.015em", fontWeight: "600" }],
        "display-4": ["clamp(1.25rem, 2.5vw, 2rem)", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        "body-base": ["1rem", { lineHeight: "1.7" }],
        "body-sm": ["0.875rem", { lineHeight: "1.6" }],
        "body-xs": ["0.75rem", { lineHeight: "1.5", letterSpacing: "0.05em" }],
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
        "3xl": "64px",
        "4xl": "96px",
        "5xl": "128px",
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "16px",
        full: "9999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(0,0,0,0.3)",
        md: "0 4px 12px rgba(0,0,0,0.35)",
        lg: "0 12px 32px rgba(0,0,0,0.4)",
        xl: "0 24px 48px rgba(0,0,0,0.45)",
      },
      transitionDuration: {
        fast: "120ms",
        base: "200ms",
        slow: "400ms",
      },
      transitionTimingFunction: {
        standard: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        revealUp: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 200ms cubic-bezier(0.22, 1, 0.36, 1) forwards",
        revealUp: "revealUp 800ms cubic-bezier(0.16, 1, 0.3, 1) forwards",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;