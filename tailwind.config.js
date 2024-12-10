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
    screens: {
      'sm': '640px',
      'md': '768px',
      'md-lg': '894px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

