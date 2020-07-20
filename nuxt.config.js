
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'static',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/main.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@chakra-ui/nuxt',
    '@nuxtjs/emotion'
  ],

  chakra: {

    extendTheme: {
      colors: {
        special: "#ff0",
        brand: {
          jade: {
             50: "#00b16a",
            100: "#00b16a",
            200: "#00b16a",
            300: "#00b16a",
            400: "#00b16a",
            500: "#00b16a",
            600: "#00b16a",
            700: "#00b16a",
            800: "#00b16a",
            900: "#00b16a"
          }
        }
      },
      container: ['100%', '480px', '768px', '992px'],
      breakpoints: ["30em", "48em", "62em", "80em"],
      fonts: {
        logo: 'Nova Round',
        myheading: '"Avenir Next", sans-serif',
        body: 'system-ui, sans-serif',
        mono: 'Menlo, monospace'
      }
    }  
  },

  /*
  ** Content module configuration
  ** See https://content.nuxtjs.org/configuration
  */
 content: {},
 /*
 ** Build configuration
 ** See https://nuxtjs.org/api/configuration-build/
 */
 build: {
 },   
}
