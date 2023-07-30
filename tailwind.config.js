/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#120e16",
        // primary: "#1d3557",
        secondary: "#aaa6c3",
        // secondary: "#f1faee",
        // tertiary: "#151030",
        tertiary: "#161a1d",
        // "black-100": "#100d25",
        "black-200": "#090325",
        // "white-100": "#f3f3f3",
        "black-100": "#161a1d",
        // "black-200": "#161a1d",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      // backgroundImage: {
      //   "hero-pattern": "url('/src/assets/abstract.jpg')",
      // },
    },
  },
  plugins: [],
};

