export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Rulebox.io',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [{
      charset: 'utf-8'
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      hid: 'description',
      name: 'description',
      content: 'The SaaS solution for business rules. Register now to be informed when we launch.'
    },
    {
      name: 'format-detection',
      content: 'telephone=no'
    },
    {
      name: "og:title", content: "Rulebox.io | The SaaS solution for business rules"
    },
    {
      name: "og:description", content: "No more hard-coded business rules. Author, test, execute and audit with Rulebox. Register now to be informed when we launch."
    },
    {
      name: "og:type", content: "website"
    },
    {
      name: "og:url", content: "https://rulebox.io"
    },
    {
      name: "og:image", content: "https://rulebox.io/rb-og-image.jpg"
    },
    {
      name: "twitter:title", content: "Rulebox.io | The SaaS solution for business rules"
    },
    {
      name: "twitter:description", content: "No more hard-coded business rules. Author, test, execute and audit with Rulebox. Register now to be informed when we launch."
    },
    {
      name: "twitter:url", content: "https://rulebox.io"
    },
    {
      name: "twitter:image", content: "https://rulebox.io/rb-og-image.jpg"
    }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  server: {
    port: "3033"
  },

  env: {
    RBX_WEB_API_URL: process.env.RULEBOX_WEB_API_URL || "http://localhost:9999/.netlify/functions"
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/tailwind.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/color-mode-module
    "@nuxtjs/color-mode",
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    'vue-plausible',
  ],

  plausible: {
    domain: 'rulebox.io', // Your site's domain, as declared by you in Plausible's settings.
    hashMode: true, // Enables tracking based on URL hash changes.
    trackLocalhost: false, // Enables tracking on localhost.
    piHost: 'https://plausible.io', // Plausible's API host to use. Change this if you are self-hosting.
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  /*
   ** Make sure there is a fallback to Nuxt when a page is not
   ** found, so we don't get Netlify's 404 page. This is because
   ** we use dynamic routes like /{tenant}/entities.
   ** https://nuxtjs.org/faq/netlify-deployment/
   */
  generate: {
    fallback: true
  },

  tailwindcss: {},

  colorMode: {
    classSuffix: ""
  },
}
