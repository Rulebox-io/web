<template>
  <main>
    <div class="relative max-w-7xl ml-auto mr-auto text-center mt-24 md:mt-44">
      <h1 class="lg:text-5xl md:text-4xl text-3xl text-white font-bold my-2 leading-none">
        Rule management<br />
        for your whole team.
      </h1>
      <h2 class="lg:text-xl text-md text-gray-200 my-4">
        Create, maintain and run rulesets with a<br />
        single user-friendly interface.
      </h2>
      <div class="flex justify-around mt-12">
        <div class="relative group">
          <div
            class="absolute -inset-1 bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-500 animate-glow">
          </div>
          <div
            class="absolute -inset-0.5 bg-gradient-to-r from-purple-700 to-blue-500 rounded-lg opacity-50">
          </div>
          <div class="relative px-6 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600 opacity-75">
            <span class="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-100" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span class="text-gray-100 pr-2 lg:pr-4">
                <input class="bg-black border-none flex-grow leading-relaxed" type="text" 
                  placeholder="hello@rulebox.io">
                </input>
              </span>
            </span>
            <nuxt-link to="#">
            <span
              class="text-indigo-400 pl-2 lg:pl-4 group-hover:text-gray-100 hover:cursor-not-allowed transition duration-200">Register
              &rarr;</span>
              </nuxt-link>
          </div>
        </div>
      </div>
      <p class="text-gray-200 my-8">
        Get notified when we go live. No spam, ever.
      </p>
    </div>
  </main>
</template>

<script>
  export default {}

</script>
<style scoped>
  .border-gradient-r-purple-green-gray-900 {
    background: linear-gradient(to right, #18181b, #18181b),
      linear-gradient(to right, #6b00ef, #09dcff);
    background-clip: padding-box, border-box;
    background-origin: padding-box, border-box;
  }

</style>
