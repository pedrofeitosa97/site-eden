import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        eden: {
          dark: "#0a0a0f",
          darker: "#050508",
          pink: "#f4a8c8",
          "pink-light": "#ffc8e0",
          "pink-dark": "#c76b9a",
          purple: "#9b6fd4",
          holographic: "#e8b4f8",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        hologram: "hologram 4s linear infinite",
      },
      keyframes: {
        shimmer: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        hologram: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "200% 200%" },
        },
      },
      backgroundImage: {
        "holographic-gradient":
          "linear-gradient(135deg, #f4a8c8 0%, #9b6fd4 25%, #e8b4f8 50%, #c76b9a 75%, #f4a8c8 100%)",
        "dark-gradient":
          "radial-gradient(ellipse at top, #1a0a1a 0%, #0a0a0f 50%, #050508 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
