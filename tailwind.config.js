/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "424px",
      lg: "1000px",
    },

    extend: {
      colors: {
        myred: "#ff0000",
      },
    },
  },
  plugins: [],
};
