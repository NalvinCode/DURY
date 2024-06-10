/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        mainColor: '#0697DC',
        mainBlue: '#008CD6'
      },
      fontFamily: {
        Araside: ['Araside', 'sans-serif'],
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',  
      'lg': '1024px',
    },
  },
  variants: {},
  plugins: [],
}