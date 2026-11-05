import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./code.html",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "coral-vibrant": "#E0533C",
        "coral-dark": "#C23B25",
        "bougainvillea": "#D91E5B",
        "sun-gold": "#EBA928",
        "craft-burlap": "#C89D6C",
        "craft-sand": "#F9F3EA",
        "mint-fresh": "#2E8B57",
        "forest-deep": "#192F23",
        "surface-ivory": "#FDFBF7",
        "surface-alabaster": "#F8F3EC",
        "blush-soft": "#FDEAE5",
        "blush-deep": "#F8D5CE",
        "ink-primary": "#201A18",
        "ink-soft": "#574C46",
        "ink-mute": "#85766E",
        "secondary": "#E0533C",
        "rose-hover": "#C23B25",
        // Khosheh Design System
        ink: {
          DEFAULT: "#241E1C",
          soft: "#5C5450",
          mute: "#6E645D",
        },
        ivory: "#FDFBF7",
        blush: {
          DEFAULT: "#F6E9E5",
          deep: "#EFDAD4",
        },
        rose: {
          DEFAULT: "#B5485F",
          deep: "#8E3548",
        },
        coral: {
          DEFAULT: "#E0533C",
          dark: "#C23B25",
        },
        tangerine: "#F26A36",
        burlap: "#C89D6C",
        mint: "#2E8B57",
        forest: "#192F23",
        sand: "#F9F3EA",
        sage: {
          DEFAULT: "#5F7054",
          soft: "#E9EDE3",
        },
        gold: "#B8912F",
        line: "#E4DCD5",
      },
      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
