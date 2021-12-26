<template>
  <main>
    <div class="relative max-w-7xl ml-auto mr-auto text-center mt-24 md:mt-44">
      <h1 class="font-sans lg:text-5xl md:text-4xl text-3xl text-white font-bold my-2 leading-none">
        Rule management<br />
        for your whole team.
      </h1>
      <h2 class="font-sans lg:text-xl text-md text-gray-200 my-4">
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
              <Mail></Mail>
              <span class="text-gray-100 pr-2 lg:pr-4">
                <input ref="register" class="bg-black border-none flex-grow leading-relaxed outline-none" type="text" 
                  placeholder="hello@rulebox.io">
                </input>
              </span>
            </span>
            <button
              class="text-indigo-400 pl-2 lg:pl-4 group-hover:text-gray-100 focus-within:text-gray-100 outline-none hover:cursor-not-allowed transition duration-200">Register
              &rarr;</button>
          </div>
        </div>
      </div>
      <p class="font-sans text-gray-200 my-8">
        Get notified when we go live. No spam, ever.
      </p>
    </div>
  </main>
</template>

<script>
import Mail from '@/components/icons/Mail'
export default {
  components: { Mail },
  mounted() {
    this.focusInput()
  },
  methods: {
    focusInput() {
      this.$refs.register.focus()
    },
  },
}
</script>
<style scoped>
.border-gradient-r-purple-green-gray-900 {
  background: linear-gradient(to right, #18181b, #18181b),
    linear-gradient(to right, #6b00ef, #09dcff);
  background-clip: padding-box, border-box;
  background-origin: padding-box, border-box;
}
</style>
