/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "media",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        danger: "rgba(218,30,40,1.00)",
        warning: "rgba(255,131,43,1.00)",
        success: "rgba(25,184,79,1.00)",
        primary: "rgba(105, 0, 207, 1)",
        body: "rgba(249, 250, 252, 1)",
        darkBody: "#0B0A0A",
        background: "rgba(255, 255, 255, 1)",
        darkBackground: "rgba(26, 26, 26, 1)",
        textColor: "rgba(11, 10, 10, 0.7)",
        darkTextColor: "rgba(249, 250, 252, 0.7)",
        btnBg: "rgba(105, 0, 207, 0.10)",
      },
    },
  },
  plugins: [],
};
