/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    fontFamily: {
      sora: ["Sora"]
    },
    extend: {
      colors: {
        "purple-200": "#DAC7FC",
        "purple-300": "#CAACFF",
        "purple-500": "#6B49CD",
        "purple-700": "#5D0096",
        "purple-900": "#210035",
        "pink-500": "#AD26FF"
      },
      fontSize: {
        13: "13px",
        14: "14px",
        15: "15px",
        16: "16px",
        17: "17px",
        18: "18px",
        19: "19px",
        20: "20px",
        21: "21px",
        22: "22px",
        23: "23px",
        24: "24px",
        25: "25px",
        26: "26px",
        36: "36px",
        32: "32px",
        48: "48px",

      }

    },
  },
  plugins: [],
}