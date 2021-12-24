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
        glow: 'glow 5s infinite linear',
        circle: 'circle 60s infinite linear',
        circle2: 'circle2 60s infinite linear',
        circle3: 'circle3 60s infinite linear',
        circle4: 'circle4 60s infinite linear',
        circle5: 'circle5 60s infinite linear',
        circle6: 'circle6 60s infinite linear',
        circle7: 'circle7 60s infinite linear',
        circle8: 'circle8 60s infinite linear'
      },
      keyframes: {
        glow: {
          "0%, 100%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(1.05)",
          },
          "75%": {
            transform: "scale(0.99)",
          }
        },
        circle: {
          "0%": {
            transform: "translate(0px, 56px)",
          },
          "1%": {
            transform: "translate(0px, 56px)",
          },
          "40%": {
            transform: "translate(0px, 0px)",
          },
          "60%": {
            transform: "translate(0px, 0px)",
          },
          "91%": {
            transform: "translate(0px, 56px)",
          },
          "100%": {
            transform: "translate(0px, 56px)",
          }
        },
        circle2: {
          "0%": {
            transform: "translate(0px, -123px)",
          },
          "1%": {
            transform: "translate(0px, -123px)",
          },
          "40%": {
            transform: "translate(0px, 0px)",
          },
          "60%": {
            transform: "translate(0px, 0px)",
          },
          "91%": {
            transform: "translate(0px, -123px)",
          },
          "100%": {
            transform: "translate(0px, -123px)",
          }
        },
        circle3: {
          "0%": {
            transform: "translate(0px, 240px)",
          },
          "1%": {
            transform: "translate(0px, 240px)",
          },
          "40%": {
            transform: "translate(0px, 0px)",
          },
          "60%": {
            transform: "translate(0px, 0px)",
          },
          "91%": {
            transform: "translate(0px, 240px)",
          },
          "100%": {
            transform: "translate(0px, 240px)",
          }
        },
        circle4: {
          "0%": {
            transform: "translate(0px, -720px)",
          },
          "1%": {
            transform: "translate(0px, -720px)",
          },
          "40%": {
            transform: "translate(0px, 0px)",
          },
          "60%": {
            transform: "translate(0px, 0px)",
          },
          "91%": {
            transform: "translate(0px, -720px)",
          },
          "100%": {
            transform: "translate(0px, -720px)",
          }
        },
        circle5: {
          "0%": {
            transform: "translate(0px, 480px)",
          },
          "1%": {
            transform: "translate(0px, 480px)",
          },
          "40%": {
            transform: "translate(0px, 0px)",
          },
          "60%": {
            transform: "translate(0px, 0px)",
          },
          "91%": {
            transform: "translate(0px, 480px)",
          },
          "100%": {
            transform: "translate(0px, 480px)",
          }
        },
        circle6: {
          "0%": {
            transform: "translate(0px, 980px)",
          },
          "1%": {
            transform: "translate(0px, 980px)",
          },
          "40%": {
            transform: "translate(0px, 0px)",
          },
          "60%": {
            transform: "translate(0px, 0px)",
          },
          "91%": {
            transform: "translate(0px, 980px)",
          },
          "100%": {
            transform: "translate(0px, 980px)",
          }
        },
        circle7: {
          "0%": {
            transform: "translate(0px, -480px)",
          },
          "1%": {
            transform: "translate(0px, -480px)",
          },
          "40%": {
            transform: "translate(0px, 0px)",
          },
          "60%": {
            transform: "translate(0px, 0px)",
          },
          "91%": {
            transform: "translate(0px, -480px)",
          },
          "100%": {
            transform: "translate(0px, -480px)",
          }
        },
        circle8: {
          "0%": {
            transform: "translate(0px, -120px)",
          },
          "1%": {
            transform: "translate(0px, -120px)",
          },
          "40%": {
            transform: "translate(0px, 0px)",
          },
          "60%": {
            transform: "translate(0px, 0px)",
          },
          "91%": {
            transform: "translate(0px, -120px)",
          },
          "100%": {
            transform: "translate(0px, -120px)",
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
