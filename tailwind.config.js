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
        tilt: 'tilt 10s infinite linear',
        circle: 'circle 40s linear',
        circle2: 'circle2 40s linear',
        circle3: 'circle3 40s linear',
        circle4: 'circle4 40s linear',
        circle5: 'circle5 40s linear',
        circle6: 'circle6 40s linear',
        circle7: 'circle7 40s linear',
        circle8: 'circle8 40s linear'
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
        circle: {
          "0%": {
            transform: "translate(0px, 560px)",
          },
          "6%": {
            transform: "translate(0px, 560px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          }
        },
        circle2: {
          "0%": {
            transform: "translate(0px, -1230px)",
          },
          "10%": {
            transform: "translate(0px, -1230px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          }
        },
        circle3: {
          "0%": {
            transform: "translate(0px, 240px)",
          },
          "14%": {
            transform: "translate(0px, 240px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          }
        },
        circle4: {
          "0%": {
            transform: "translate(0px, -720px)",
          },
          "9%": {
            transform: "translate(0px, -720px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          }
        },
        circle5: {
          "0%": {
            transform: "translate(0px, -480px)",
          },
          "5%": {
            transform: "translate(0px, -480px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          }
        },
        circle6: {
          "0%": {
            transform: "translate(0px, 980px)",
          },
          "12%": {
            transform: "translate(0px, 980px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          }
        },
        circle7: {
          "0%": {
            transform: "translate(0px, 480px)",
          },
          "7%": {
            transform: "translate(0px, 480px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          }
        },
        circle8: {
          "0%": {
            transform: "translate(0px, -120px)",
          },
          "20%": {
            transform: "translate(0px, -120px)",
          },
          "100%": {
            transform: "translate(0px, 0px)",
          }
        }
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
