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
        primary_100: "#9D3E20",
        neutral_5: "#4C4C4C0D",
        neutral_25: "#4C4C4C40",
      },
      content: {
        info: 'url("../public/info.svg")',
        homePlus: 'url("../public/bleaching/home-plus.svg")',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        card: "0px 2px 6px 0px #0000001A",
      },
    },
  },
  plugins: [],
};
export default config;
