<template>
  <div>
    <div class="absolute w-full flex h-32">
      <div
        class="w-full flex-grow bg-gradient-to-r from-hero-100 via-hero-500 to-hero-900 h-32 top-blur"
      ></div>
    </div>

    <div class="absolute w-full flex justify-center circles-container">
      <svg class="circles" viewBox="0 0 1800 1800">
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="250"
        />
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="375"
        />
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="500"
        />
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="625"
        />
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="750"
        />
        <circle
          stroke="white"
          fill="none"
          stroke-opacity="0.2"
          cx="900"
          cy="900"
          r="875"
        />
      </svg>
    </div>

    <header
      class="relative flex justify-between max-w-7xl ml-auto mr-auto py-8"
    >
      <span class="text-white text-xl font-bold flex items-center">
        <RuleboxTransparentLogo class="w-7 h-7"></RuleboxTransparentLogo>
        Rulebox
      </span>
      <span class="flex items-center space-x-12">
        <span class="text-white text-sm">Changelog</span>
        <span class="text-white text-sm">About us</span>
        <span class="text-white text-sm">We're hiring</span>
      </span>
      <button
        class="text-white py-1 px-6 border text-sm rounded-full bg-white bg-opacity-10 border-opacity-50"
      >
        Login
      </button>
    </header>
    <nuxt />
  </div>
</template>
<script>
import RuleboxTransparentLogo from '@/components/icons/RuleboxTransparentLogo.vue'

export default {
  components: { RuleboxTransparentLogo },
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
  top: -90px;
}
.circles {
  width: 900px;
  height: 900px;
}
</style>
