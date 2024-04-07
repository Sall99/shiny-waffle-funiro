import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },

      orange: {
        100: "var(--color-orange-100)",
        200: "var(--color-orange-200)",
        500: "var(--color-orange-500)",
      },

      white: {
        100: "var(--color-white-100)",
      },

      gray: {
        100: "var(--color-gray-100)",
        200: "var(--color-gray-200)",
        300: "var(--color-gray-300)",
        400: "var(--color-gray-400)",
        500: "var(--color-gray-500)",
      },

      black: {
        500: "var(--color-black-500)",
        800: "var(--color-black-800)",
      },
    },
    backgroundImage: {
      "home-hero-pattern": "url('/images/hero.jpg')",
    },
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        poppins: ["var(--font-poppins)"],
      },
      fontSize: {
        _34: "34px",
      },
      maxWidth: {
        _1440: "1440px",
        _1171: "1171px",
      },
      spacing: {
        _1: "1px",
        _30: "30px",
        _48: "48px",
        _50: "50px",
        _75: "75px",
        _102: "102px",
        _176: "176px",
        _208: "208px",
        _245: "245px",
        _285: "285px",
        _305: "305px",
        _419: "419px",
        _443: "443px",
        _450: "450px",
        _500: "500px",
        _543: "543px",
        _586: "586px",
        _716: "716px",
        _876: "876px",
        _1000: "1000px",
      },
    },
  },

  plugins: [],
};
export default config;
