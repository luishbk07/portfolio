/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFCC00', // Batman yellow
          light: '#FFDF33',
          dark: '#E6B800',
        },
        secondary: {
          DEFAULT: '#121212', // Batman black
          light: '#2D2D2D',
          dark: '#000000',
        },
        accent: '#707070',
      },
    },
  },
  plugins: [],
} 