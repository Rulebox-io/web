<template>
  <main>
    <div class="relative max-w-7xl ml-auto mr-auto text-center mt-24 md:mt-32">
      <h1 class="lg:text-6xl md:text-4xl text-3xl text-white font-bold my-2 leading-none select-none">
        Rule management<br />
        for your whole team.
      </h1>
      <h2 class="lg:text-xl text-md text-gray-300 my-4 select-none">
        Create, maintain and run rulesets with a<br />
        single user-friendly interface.
      </h2>
      <form @submit.prevent="signup">
        <div class="flex justify-around mt-12">
          <div class="relative group">
            <div
              class="absolute -inset-1 bg-gradient-to-r from-purple-700 to-cyan-400 rounded-lg blur-lg opacity-75 group-hover:opacity-100 group-hover:blur-md transition duration-1000 group-hover:duration-500 animate-glow">
            </div>
            <div
              class="absolute -inset-0.5 bg-gradient-to-r from-purple-700 to-cyan-400 rounded-lg opacity-100 group-hover:opacity-50 transition duration-1000 group-hover:duration-500">
            </div>
            <div class="relative px-5 py-2.5 bg-black rounded-lg leading-none flex items-center opacity-75 text-lg">
              <span class="flex items-center space-x-2">
                <Mail></Mail>
                <span class="text-gray-100 pr-2 lg:pr-4">
                  <input ref="register" v-model="emailAddress" required class="bg-black border-none appearance-none flex-grow leading-relaxed outline-none" type="email" 
                    autocomplete="email" placeholder="hello@rulebox.io">
                  </input>
                </span>
              </span>
              <button type="submit"
                class="text-indigo-400 pl-2 lg:pl-4 group-hover:text-gray-100 focus-within:text-gray-100 outline-none hover:cursor-pointer transition duration-200 leading-loose">Register
                &rarr;</button>
            </div>
          </div>
        </div>
      </form>
      <p class="font-sans text-gray-400 my-8 text-base select-none">
        Get notified when we go live. No spam, ever.
      </p>
    </div>
  </main>
</template>

<script>
import Mail from '@/components/icons/Mail'
export default {
  components: { Mail },
  data() {
    return {
      emailAddress: null,
    }
  },
  mounted() {
    this.focusInput()
  },
  methods: {
    focusInput() {
      this.$refs.register.focus()
    },
    signup() {
      console.log(`signup with ${this.emailAddress}`)
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
