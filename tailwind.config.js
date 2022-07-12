/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "slide-in-right": {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        "slide-out-right": {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        "slide-in-right": 'slide-in-right 500ms ease-in-out',
        "slide-out-right": 'slide-out-right 500ms ease-in-out',
      }
    },
  },
  plugins: []
};
