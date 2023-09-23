/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './plays/**/*.{js,jsx,ts,tsx}', './index.html'],
  theme: {
    screens: {
      xs: { min: '310px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      sm: { min: '640px' },
      // => @media (min-width: 640px and max-width: 767px) { ... }

      md: { min: '768px' },
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      lg: { min: '1024px' },
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      xl: { min: '1280px' },
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      '2xl': { min: '1536px' }
      // => @media (min-width: 1536px) { ... }
    },
    extend: {}
  },
  plugins: [require('tailwind-scrollbar')]
};
