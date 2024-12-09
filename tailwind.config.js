/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  darkMode: 'selector',
  safeList:['bg-blue-400', 'translate-x-full', 'bg-pink-400', '-translate-x-2'],
  theme: {
    extend: {fontFamily:{
      main: ['Roboto', 'sans-serif'],
      secondary: ['Parkinsans', 'sans-serif']
    }},
  },
  plugins: [],
}

