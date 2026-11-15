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
        background: "#0C0D0E",
        surface: "#161719",
        surfaceHover: "#1E2023",
        foreground: "#F2F2F0",
        muted: "#9A9A96",
        border: "#272A2E",
        accent: "#D97706", // Warm copper / amber accent (< 10% visual weight)
        accentHover: "#B45309",
      },
      fontFamily: {
        heading: ["var(--font-space)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          from: { opacity: "0", transform: "translateY(4px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 200ms ease-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
