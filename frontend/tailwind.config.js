/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // Enable manual dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust this to match your file structure
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out forwards',
      },
      keyframes: {
        'fade-in-down': {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
