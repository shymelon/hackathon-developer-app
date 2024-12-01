/** @type {import('tailwindcss').Config} */
export default {
  content: ["node_modules/preline/dist/*.js"],
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("preline/plugin"),
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        custom: ["Inter"],
      },
    },
  },
};
