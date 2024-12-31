/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        darkblue: '#262733',
        vibrantorange: '#e64a3b',
        papyrus: '#eee2d4',
        grayblue: '#3b3c47',
        gray: '#a5a5aa',
      },
      spacing: {},
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        squarepeg: ['Square Peg', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
