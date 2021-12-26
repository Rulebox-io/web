<template>
  <div
    class="relative circles-container bg-no-repeat bg-top bg-900 min-h-screen"
  >
    <div class="absolute w-full flex h-32">
      <div
        class="
          w-full
          flex-grow
          bg-gradient-to-r
          from-hero-100
          via-hero-500
          to-hero-900
          h-32
          top-blur
          opacity-60
        "
      ></div>
    </div>

    <header
      class="relative flex justify-between max-w-6xl ml-auto mr-auto py-8 px-4"
    >
      <nuxt-link to="/">
        <span
          class="text-white text-xl font-bold flex items-center select-none"
        >
          <RuleboxTransparentLogo class="w-7 h-7"></RuleboxTransparentLogo>
          Rulebox
        </span>
      </nuxt-link>
      <!-- <span class="md:flex items-center space-x-12 hidden">
        <nuxt-link to="#">
          <span class="text-white text-sm">Changelog</span>
        </nuxt-link>
        <nuxt-link to="#">
          <span class="text-white text-sm">About us</span>
        </nuxt-link>
        <nuxt-link to="#">
          <span class="text-white text-sm">We're hiring</span>
        </nuxt-link>
      </span> -->
      <a
        href="https://twitter.com/rulebox_io"
        target="_blank"
        class="text-gray-400 hover:text-gray-100"
      >
        <span class="sr-only">Twitter</span>
        <Twitter></Twitter>
      </a>
      <!-- <nuxt-link to="#">
        <button
          class="text-white py-1 px-6 border text-sm rounded-full bg-white bg-opacity-10 border-opacity-50"
        >
          Login
        </button>
      </nuxt-link> -->
    </header>
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import RuleboxTransparentLogo from '@/components/icons/RuleboxTransparentLogo.vue'
import Footer from '@/components/icons/Footer.vue'
import Twitter from '@/components/icons/Twitter.vue'

export default {
  components: { RuleboxTransparentLogo, Footer, Twitter },
  data() {
    return {}
  },
  head: {
    bodyAttrs: {},
    htmlAttrs: {
      class: 'bg-black',
    },
  },
}
</script>
<style>
html {
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

@font-face {
  font-family: UntitledSans;
  font-weight: 400;
  font-style: normal;
  font-display: swap;
  src: url('~assets/fonts/untitled-sans/UntitledSans-Regular.ttf')
      format('truetype'),
    url('~assets/fonts/untitled-sans/UntitledSans-Regular.woff2?3.13')
      format('woff2');
}

@font-face {
  font-family: UntitledSans;
  font-weight: 400;
  font-style: italic;
  font-display: swap;
  src: url('~assets/fonts/untitled-sans/UntitledSans-RegularItalic.ttf')
      format('truetype'),
    url('~assets/fonts/untitled-sans/UntitledSans-RegularItalic.woff2?3.13')
      format('woff2');
}

@font-face {
  font-family: UntitledSans;
  font-weight: bold;
  font-style: normal;
  font-display: swap;
  src: url('~assets/fonts/untitled-sans/UntitledSans-Bold.ttf')
      format('truetype'),
    url('~assets/fonts/untitled-sans/UntitledSans-Bold.woff2?3.13')
      format('woff2');
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.top-blur {
  filter: blur(100px);
}
.circles-container {
  background-image: url('/circles.svg');
}
.circles {
  width: 900px;
  height: 900px;
}
</style>
