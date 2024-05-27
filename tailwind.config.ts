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
        semitransparent: "rgba(174, 195, 236, 0.5)",
      },
      secondary: { DEFAULT: "#E29578", light: "#FFDDD2" },
      point: { like: "#f2545B", star: "#FFC700" },
      gray: { DEFAULT: "#94A3B8", light: "#CBD5E1", dark: "#0F172A" },
    },
  },
  plugins: [],
};

export default config;
