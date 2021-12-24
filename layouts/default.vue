<template>
  <div class="relative">
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
