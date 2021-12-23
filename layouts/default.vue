<template>
  <div>
    <div class="absolute w-full flex h-32">
      <div
        class="w-full flex-grow bg-gradient-to-r from-hero-100 via-hero-500 to-hero-900 h-32 top-blur opacity-60"
      ></div>
    </div>

    <div
      class="absolute w-full flex justify-center circles-container transform animate-circle"
    >
      <svg class="circles" viewBox="0 0 1800 1800">
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="852"
        />
      </svg>
    </div>
    <div
      class="absolute w-full flex justify-center circles-container transform animate-circle2"
    >
      <svg class="circles" viewBox="0 0 1800 1800">
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="756"
        />
      </svg>
    </div>
    <div
      class="absolute w-full flex justify-center circles-container transform animate-circle3"
    >
      <svg class="circles" viewBox="0 0 1800 1800">
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="660"
        />
      </svg>
    </div>
    <div
      class="absolute w-full flex justify-center circles-container transform animate-circle4"
    >
      <svg class="circles" viewBox="0 0 1800 1800">
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="568"
        />
      </svg>
    </div>
    <div
      class="absolute w-full flex justify-center circles-container transform animate-circle5"
    >
      <svg class="circles" viewBox="0 0 1800 1800">
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="472"
        />
      </svg>
    </div>
    <div
      class="absolute w-full flex justify-center circles-container transform animate-circle6"
    >
      <svg class="circles" viewBox="0 0 1800 1800">
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="378"
        />
      </svg>
    </div>
    <div
      class="absolute w-full flex justify-center circles-container transform animate-circle7"
    >
      <svg class="circles" viewBox="0 0 1800 1800">
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="280"
        />
      </svg>
    </div>
    <div
      class="absolute w-full flex justify-center circles-container transform animate-circle8"
    >
      <svg class="circles" viewBox="0 0 1800 1800">
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="188"
        />
      </svg>
    </div>

    <header
      class="relative flex justify-between max-w-6xl ml-auto mr-auto py-8 px-4"
    >
      <nuxt-link to="#">
        <span class="text-white text-xl font-bold flex items-center">
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
      <a href="#" class="text-gray-400 hover:text-gray-500">
        <span class="sr-only">Twitter</span>
        <svg
          class="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
          />
        </svg>
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

export default {
  components: { RuleboxTransparentLogo, Footer },
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
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
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
  top: -120px;
}
.circles {
  width: 900px;
  height: 900px;
}
</style>
