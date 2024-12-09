/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#edf6ff",
          100: "#dfecff",
          200: "#c5dcff",
          300: "#a2c4ff",
          400: "#7da2fc",
          500: "#4b70f5",
          600: "#4058eb",
          700: "#3346cf",
          800: "#2c3da7",
          900: "#2b3984",
          950: "#191f4d",
        },
        secondary: {
          50: "#f3faf8",
          100: "#d8efeb",
          200: "#b2ddd8",
          300: "#83c5bf",
          400: "#57a6a1",
          500: "#3f8d89",
          600: "#31706f",
          700: "#2a5b5a",
          800: "#254a49",
          900: "#233d3e",
          950: "#0f2424",
        },
        gray: {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#0c0c0c",
        },
      },
      fontFamily: {
        jakarta: ["Plus Jakarta Sans", "sans-serif"],
        parkinsans: ["ParkinSans", "sans-serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};