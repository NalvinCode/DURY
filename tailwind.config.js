/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",],
  theme: {
    extend: {
      height: {
        '110': '22rem',
      },
      width: {
        'gato': '22rem',
        '110': '22rem',
      },
      colors: {
        mainColor: '#0697DC',
        mainBlue: '#008CD6'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        zoomInOut: {
          '0%, 100%': { transform: 'scale(1) rotate(-6deg)' },
          '50%': { transform: 'scale(1.2) rotate(-6deg)' },
        },
        zoomInOutInv: {
          '0%, 100%': { transform: 'scale(1) rotate(6deg)' },
          '50%': { transform: 'scale(1.2) rotate(6deg)' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)', opacity: 0},
          '70%': { transform: 'translateX(-5%)'},
          '90%': { transform: 'translateX(5%)'},
          '100%': { transform: 'translateX(0)', opacity: 1 }, 
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100%)'},
          '70%': { transform: 'translateX(5%)'},
          '90%': { transform: 'translateX(-5%)'},
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInTop: {
          '0%': { transform: 'translateY(-100%)'},
          '70%': { transform: 'translateY(5%)'},
          '90%': { transform: 'translateY(-5%)'},
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        slideInBottom: {
          '0%': { transform: 'translateY(100%)'},
          '70%': { transform: 'translateY(-5%)'},
          '90%': { transform: 'translateY(5%)'},
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        zoomInOut: 'zoomInOut 2s ease-in-out infinite',
        zoomInOutInv: 'zoomInOutInv 2s ease-in-out infinite',
        slideInRight: 'slideInRight 0.5s ease-out forwards',
        slideInLeft: 'slideInLeft 0.5s ease-out forwards',
        slideInTop: 'slideInTop 0.5s ease-out forwards',
        slideInBottom: 'slideInBottom 0.5s ease-out forwards',
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