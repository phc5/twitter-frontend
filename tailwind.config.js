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
        darkblue: '#2795D9',
        darkestblue: 'rgba(29, 161, 242, 0.1)',
        lightblue: '#EFF9FF',
        dark: '#657786',
        light: '#AAB8C2',
        lighter: '#E1E8ED',
        lightest: '#F5F8FA',
      },
      width: {
        896: '896px',
        fitContent: 'fit-content',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['group-hover'],
    },
  },
  plugins: [],
};
