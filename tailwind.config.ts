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
        primary: "#632cbe",
        "primary-content": "#f3eefb",
        "primary-dark": "#4d2295",
        "primary-light": "#7d48d5",

        secondary: "#be2c3e",
        "secondary-content": "#fbeef0",
        "secondary-dark": "#952230",
        "secondary-light": "#d5485a",

        background: "#efeef2",
        foreground: "#fbfbfc",
        border: "#dedbe3",

        copy: "#25212b",
        "copy-light": "#635973",
        "copy-lighter": "#897e9b",

        success: "#2cbe2c",
        warning: "#bebe2c",
        error: "#be2c2c",

        "success-content": "#000000",
        "warning-content": "#000000",
        "error-content": "#fbeeee",
      },
    },
  },
  plugins: [],
};
export default config;