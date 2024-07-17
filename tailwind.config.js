/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: "Poppins",
        bodyContent: "Nunito",
      },

      colors: {
        background: "#fff",
        container: "#f5f5f5",
        primary: "#000",
        secondary: "#48246C",
        paraHelper: "#08080899"
      },
    },
  },
  plugins: [require('daisyui')],
}

