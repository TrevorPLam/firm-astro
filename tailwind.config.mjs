/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Core dark theme colors
        dark: {
          DEFAULT: "#0A0A0A",
          900: "#000000",
          800: "#0A0A0A",
          700: "#111111",
          600: "#1A1A1A",
          500: "#222222",
        },
        // Light theme colors
        light: {
          DEFAULT: "#FFFFFF",
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#E5E5E5",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        // Electric blue accent
        electric: {
          DEFAULT: "#0055FF",
          50: "#E6F0FF",
          100: "#CCE0FF",
          200: "#99C2FF",
          300: "#66A3FF",
          400: "#3385FF",
          500: "#0055FF",
          600: "#004de6",
          700: "#0044CC",
          800: "#003399",
          900: "#002266",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "system-ui", "sans-serif"],
      },
      boxShadow: {
        // Neon glow effects
        "neon-sm": '0 0 5px theme("colors.electric.500"), 0 0 10px theme("colors.electric.500")',
        "neon-md":
          '0 0 10px theme("colors.electric.500"), 0 0 20px theme("colors.electric.500"), 0 0 30px theme("colors.electric.500")',
        "neon-lg":
          '0 0 15px theme("colors.electric.500"), 0 0 30px theme("colors.electric.500"), 0 0 45px theme("colors.electric.500"), 0 0 60px theme("colors.electric.500")',
        "neon-xl":
          '0 0 20px theme("colors.electric.500"), 0 0 40px theme("colors.electric.500"), 0 0 60px theme("colors.electric.500"), 0 0 80px theme("colors.electric.500")',
        // Glassmorphism
        glass: "0 8px 32px 0 rgba(0, 85, 255, 0.1)",
        "glass-lg": "0 25px 50px -12px rgba(0, 85, 255, 0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
      animation: {
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "slide-up": "slide-up 0.5s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
        glitch: "glitch 0.3s ease-in-out",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": {
            boxShadow:
              '0 0 10px theme("colors.electric.500"), 0 0 20px theme("colors.electric.500")',
          },
          "50%": {
            boxShadow:
              '0 0 20px theme("colors.electric.500"), 0 0 40px theme("colors.electric.500")',
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        glitch: {
          "0%": { transform: "translate(0)" },
          "20%": { transform: "translate(-2px, 2px)" },
          "40%": { transform: "translate(-2px, -2px)" },
          "60%": { transform: "translate(2px, 2px)" },
          "80%": { transform: "translate(2px, -2px)" },
          "100%": { transform: "translate(0)" },
        },
      },
    },
  },
  plugins: [],
};
