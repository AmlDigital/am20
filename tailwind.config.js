/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./*.js",
  ],
  theme: {
    extend: {
      colors: {
        paper: '#eef7ff',
        ink: '#2e3d59',
        pinkAccent: '#ff66c4',
        cyanAccent: '#5ce1e6',
      }
    },
  },
  plugins: [],
}