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
    ],
    safelist: ['html', 'body']
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
        sans: ['UntitledSans', ...defaultTheme.fontFamily.sans]
      },
      backgroundSize: {
        "900": "900px 900px"
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
        cyan: colors.cyan,
        gray: colors.trueGray
      },
      animation: {
        glow: 'glow 10s infinite linear',
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
          "50%": {
            transform: "scale(1.05)",
          }
        },
      }
    }
  },
  plugins: [
    require('tailwindcss-dark-mode')(),
    require('tailwindcss-border-gradient-radius'),
  ],
}
