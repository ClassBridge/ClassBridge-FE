import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config = {
  content: [
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    fontFamily: { pretendard: ["Pretendard", ...fontFamily.sans] },
    colors: {
      primary: {
        DEFAULT: "#3D66B4",
        light: "#AEC3EC",
        blur: "rgba(174, 195, 236, 0.5)",
      },
      secondary: { DEFAULT: "#E29578", light: "#FFDDD2" },
      point: { like: "#F2545B", star: "#FFC700" },
      gray: { DEFAULT: "#94A3B8", light: "#CBD5E1" },
      black: { DEFAULT: "#0F172A", blur: "rgba(15, 23, 42, 0.2)" },
      white: { DEFAULT: "#FFFFFF", blur: "rgba(255, 255, 255, 0.5)" },
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
