import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: { pretendard: "Pretendard" },
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
  },
  plugins: [],
};

export default config;
