const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  whitelist: ['dark-mode'],
  purge: {
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      './node_modules/tailwindcss-dark-mode/prefers-dark.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: "class",
  variants: {
    backgroundColor: [
      "dark",
      "dark-hover",
      "dark-group-hover",
      "dark-even",
      "dark-odd"
    ],
    borderColor: ["dark", "dark-focus", "dark-focus-within"],
    textColor: ["dark", "dark-hover", "dark-active"]
  },
  theme: {
    darkSelector: '.dark-mode',
    linearBorderGradients: theme => ({
      colors: theme('colors'),
      background: theme('colors'),
    }),
    extend: {
      fontFamily: {
        sans: ['Untitled Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        rulebox: {
          '50': '#f9fafb',
          '100': '#edf1fb',
          '200': '#d8daf6',
          '300': '#b4b6e8',
          '400': '#928cd6',
          '500': '#7767c5',
          '600': '#604bac',
          '700': '#473886',
          '800': '#301a5b',
          '900': '#1b1736',
        },
        hero: {
          '100': '#FFB900',
          '500': '#FF469C',
          '900': '#011AFF',
        },
        violet: {
          '500': '#6B00EF'
        },
        cyan: {
          '500': '#09DCFF',
        },
        gray: colors.trueGray
      },
      animation: {
        tilt: 'tilt 10s infinite linear'
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          }
        },
      },
      backgroundImage: theme => ({})
    }
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('tailwindcss-border-gradient-radius'),
    function ({
      addBase
    }) {
      addBase([{
          '@font-face': {
            fontFamily: 'Untitled Sans',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/fonts/UntitledSans-Regular.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Untitled Sans',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/fonts/UntitledSans-RegularItalic.woff2?3.13") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Untitled Sans',
            fontWeight: '100 900',
            fontStyle: 'bold',
            fontNamedInstance: 'Bold',
            fontDisplay: 'swap',
            src: 'url("/fonts/UntitledSans-Bold.woff2?3.13") format("woff2")',
          },
        },
      ])
    },
  ],
}
