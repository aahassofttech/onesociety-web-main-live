import type { Config } from "tailwindcss";
const { heroui } = require("@heroui/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E3A5F",
          50: "#EBF0F7",
          100: "#C2D2E8",
          200: "#99B4D9",
          300: "#7096CA",
          400: "#4778BB",
          500: "#1E3A5F",
          600: "#183050",
          700: "#122540",
          800: "#0C1A30",
          900: "#060F20",
        },
        accent: {
          DEFAULT: "#F5A623",
          light: "#FFC156",
          dark: "#D4891A",
        },
        neutral: {
          light: "#F5F7FA",
          mid: "#E8ECF2",
          dark: "#6B7A99",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(30, 58, 95, 0.08)",
        "card-hover": "0 8px 40px rgba(30, 58, 95, 0.16)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            primary: {
              DEFAULT: "#1E3A5F",
              foreground: "#FFFFFF",
            },
            focus: "#1E3A5F",
          },
        },
      },
    }),
  ],
};
export default config;
