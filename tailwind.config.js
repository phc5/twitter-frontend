const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: [...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: '#1DA1F2',
        borderGray: 'rgb(47, 51, 54)',
        darkblue: '#2795D9',
        darkerblue: 'rgba(29, 161, 242, 0.2)',
        darkestblue: 'rgba(29, 161, 242, 0.1)',
        lightblue: '#EFF9FF',
        dark: '#657786',
        darkGray: 'rgb(32, 36, 39)',
        darkerGray: 'rgb(21, 25, 29)',
        lightGray: 'rgb(110, 118, 125)',
        light: '#AAB8C2',
        lighter: '#E1E8ED',
        lightest: '#F5F8FA',
      },
      width: {
        275: '275px',
        350: '350px',
        990: '990px',
        fitContent: 'fit-content',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
      borderWidth: ['focus', 'focus-within'],
      margin: ['focus'],
      padding: ['focus'],
    },
  },
  plugins: [],
};
