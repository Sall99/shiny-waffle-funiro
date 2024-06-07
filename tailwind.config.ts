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
        300: "var(--color-orange-300)",
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
        600: "var(--color-gray-600)",
      },

      black: {
        500: "var(--color-black-500)",
        800: "var(--color-black-800)",
      },

      green: {
        500: "var(--color-green-500)",
      },
    },
    backgroundImage: {
      "home-hero-pattern": "url('/images/Hero.jpg')",
      "hero-pattern": "url('/images/Hero-section.jpg')",
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
        _417: "417px",
        _1171: "1171px",
        _1440: "1440px",
      },
      spacing: {
        _1: "1px",
        _30: "30px",
        _48: "48px",
        _50: "50px",
        _60: "60px",
        _75: "75px",
        _85: "85px",
        _102: "102px",
        _176: "176px",
        _208: "208px",
        _245: "245px",
        _285: "285px",
        _305: "305px",
        _316: "316px",
        _390: "390px",
        _419: "419px",
        _443: "443px",
        _450: "450px",
        _500: "500px",
        _543: "543px",
        _553: "553px",
        _586: "586px",
        _600: "600px",
        _608: "608px",
        _635: "635px",
        _716: "716px",
        _876: "876px",
        _1000: "1000px",
      },
    },
  },

  plugins: [],
};
export default config;
