<template>
  <div
    :class="[
      'relative circles-container bg-no-repeat bg-top bg-contain lg:bg-900 overflow-x-hidden min-h-screen',
      hasSignedUp ? 'converging' : '',
    ]"
  >
    <div class="absolute h-32 -inset-x-1/4 -top-8">
      <div
        class="
          w-full
          flex-grow
          bg-gradient-to-r
          from-hero-100
          via-hero-500
          to-hero-900
          h-32
          lg:h-32
          opacity-60
          blur-2xl
          lg:blur-3xl
        "
      ></div>
    </div>

    <header
      class="relative flex justify-between max-w-5xl ml-auto mr-auto py-8 px-8"
    >
      <nuxt-link to="/">
        <span
          class="text-white text-xl font-bold flex items-center select-none"
        >
          <RuleboxTransparentLogo class="w-7 h-7"></RuleboxTransparentLogo>
          Rulebox
        </span>
      </nuxt-link>
      <a
        href="https://twitter.com/rulebox_io"
        target="_blank"
        class="text-gray-400 hover:text-gray-100"
      >
        <span class="sr-only">Twitter</span>
        <Twitter></Twitter>
      </a>
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
  computed: {
    hasSignedUp() {
      return this.$store.getters['signup/hasSignedUp']
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

.circles-container {
  /*background-image: url('/circles.svg');*/
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' class='circles' viewBox='0 0 1800 1800'%3e%3ccircle class='circle' cx='900' cy='900' r='852' transform='translate(0 56)'/%3e%3ccircle class='circle' cx='900' cy='900' r='756' transform='translate(0 -123)'/%3e%3ccircle class='circle' cx='900' cy='900' r='660' transform='translate(0 240)'/%3e%3ccircle class='circle' cx='900' cy='900' r='568' transform='translate(0 -720)'/%3e%3ccircle class='circle' cx='900' cy='900' r='472' transform='translate(0 480)'/%3e%3ccircle class='circle' cx='900' cy='900' r='378' transform='translate(0 980)'/%3e%3ccircle class='circle' cx='900' cy='900' r='280' transform='translate(0 -480)'/%3e%3ccircle class='circle' cx='900' cy='900' r='188' transform='translate(0 -120)'/%3e%3cstyle%3e.circle%7bstroke:%23fff;fill:none;stroke-opacity:.2%7d%3c/style%3e%3c/svg%3e");
}
.circles-container.converging {
  /*background-image: url('/circles-converging.svg');*/
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' class='circles' viewBox='0 0 1800 1800'%3e%3ccircle class='circle' cx='900' cy='900' r='852' style='animation-name:c1'/%3e%3ccircle class='circle' cx='900' cy='900' r='756' style='animation-name:c2'/%3e%3ccircle class='circle' cx='900' cy='900' r='660' style='animation-name:c3'/%3e%3ccircle class='circle' cx='900' cy='900' r='568' style='animation-name:c4'/%3e%3ccircle class='circle' cx='900' cy='900' r='472' style='animation-name:c5'/%3e%3ccircle class='circle' cx='900' cy='900' r='378' style='animation-name:c6'/%3e%3ccircle class='circle' cx='900' cy='900' r='280' style='animation-name:c7'/%3e%3ccircle class='circle' cx='900' cy='900' r='188' style='animation-name:c8'/%3e%3cstyle%3e%40keyframes c1%7b0%25,1%25%7btransform:translate(0,56px)%7d91%25,to%7btransform:translate(0,0)%7d%7d%40keyframes c2%7b0%25,1%25%7btransform:translate(0,-123px)%7d91%25,to%7btransform:translate(0,0)%7d%7d%40keyframes c3%7b0%25,1%25%7btransform:translate(0,240px)%7d91%25,to%7btransform:translate(0,0)%7d%7d%40keyframes c4%7b0%25,1%25%7btransform:translate(0,-720px)%7d91%25,to%7btransform:translate(0,0)%7d%7d%40keyframes c5%7b0%25,1%25%7btransform:translate(0,480px)%7d91%25,to%7btransform:translate(0,0)%7d%7d%40keyframes c6%7b0%25,1%25%7btransform:translate(0,980px)%7d91%25,to%7btransform:translate(0,0)%7d%7d%40keyframes c7%7b0%25,1%25%7btransform:translate(0,-480px)%7d91%25,to%7btransform:translate(0,0)%7d%7d%40keyframes c8%7b0%25,1%25%7btransform:translate(0,-120px)%7d91%25,to%7btransform:translate(0,0)%7d%7d.circle%7bstroke:%23fff;fill:none;stroke-opacity:.2;animation-duration:2s;animation-iteration-count:1;animation-timing-function:ease-in%7d%3c/style%3e%3c/svg%3e");
}
</style>
