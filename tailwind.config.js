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
      spacing: {
        '3px': '3px',
        '619px': '619px',
        '845px': '845px',
        '985px': '985px',
      },
      borderRadius: {
        '100%': '100%',
      },
      borderWidth: {
        '250px': '250px',
      },
      backgroundImage: {
        meeting: "url('./ressources/images/bg_meeting.png')",
        arc: "url('./ressources/icons/arc.svg')",
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        squarepeg: ['Square Peg', 'sans-serif'],
      },
      fontSize: {
        '10xl': '187px',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
