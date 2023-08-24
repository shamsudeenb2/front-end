/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        doc_bg_img: "url('../public/Doctordoct_tool.png')",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",

        gradientColorStops: {
          "gradient-blue": ["#3490dc", "#3182ce"],
        },

        linearGradientColors: {
          blue: ["#667eea"],
          pink: ["#f687b3"],
        },
      },
    },
    plugins: [],
  },
};
