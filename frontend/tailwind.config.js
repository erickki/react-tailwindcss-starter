import tailwindcssAnimated from "tailwindcss-animated";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        teste: {
          1: "#0284c7",
        },
      },
    },
  },
  plugins: [tailwindcssAnimated],
};
