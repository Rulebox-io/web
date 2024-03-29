<template>
  <main>
    <div class="relative max-w-5xl ml-auto mr-auto text-center mt-20 md:mt-32">
      <h1 class="lg:text-6xl md:text-4xl text-3xl text-white font-bold my-2 leading-8 select-none">
        The SaaS solution<br />
        for business rules.
      </h1>
      <h2 class="lg:text-xl text-md text-gray-300 my-4 leading-5 select-none">
        No more hard-coded business rules.<br />
        Author, test, execute and audit with Rulebox.
      </h2>
      <form @submit.prevent="signup">
        <div class="px-8 lg:px-0 flex justify-around mt-12">
          <div class="max-w-full relative group">
            <div
              :class="[
                'absolute -inset-1 rounded-lg blur-lg opacity-75 group-hover:opacity-100 group-hover:blur-md transition duration-1000 group-hover:duration-500 animate-glow',
                hasSignedUp
                  ? 'bg-purple-700 blur-sm' 
                  : 'bg-gradient-to-r from-purple-700 to-cyan-400'
              ]"
              >
            </div>
            <div
              :class="[
                'absolute -inset-0.5 rounded-lg opacity-100 group-hover:opacity-50 transition duration-1000 group-hover:duration-500',
                hasSignedUp
                  ? ''
                  : 'bg-gradient-to-r from-purple-700 to-cyan-400'
              ]"
              >
            </div>
            <div class="relative px-4 py-2.5 bg-black rounded-lg leading-none flex items-center text-base lg:text-lg space-x-2 transition duration-200">
              <span v-if="hasSignedUp" class="font-bold text-gray-100 text-base py-3">
                Success! We will notify you as soon as we open up more spaces.
              </span>
              <Mail v-if="!hasSignedUp"></Mail>
              <input v-if="!hasSignedUp" ref="register" v-model="emailAddress" required class="min-w-0 text-gray-100 pr-2 lg:pr-4 bg-black border-none appearance-none flex-grow leading-relaxed outline-none" type="email" 
                autocomplete="email" placeholder="hello@rulebox.io">
              </input>
              <button v-if="!hasSignedUp" type="submit"
                class="whitespace-nowrap flex items-center text-indigo-400 pl-2 lg:pl-4 group-hover:text-gray-100 focus-within:text-gray-100 outline-none hover:cursor-pointer transition duration-200 leading-loose">
                <span class="hidden lg:inline lg:mr-2">Register</span>
                <span class="text-2xl">&rarr;</span>
              </button>
            </div>
          </div>
        </div>
      </form>
      <p class="font-sans text-gray-400 my-12 lg:my-8 text-sm lg:text-base select-none">
        Register for updates. Get notified when we go live.<br/>No spam, ever.
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
  computed: {
    hasSignedUp() {
      return this.$store.getters['signup/hasSignedUp']
    },
  },
  mounted() {
    this.focusInput()
  },
  methods: {
    focusInput() {
      const registerField = this.$refs.register
      if (!registerField) return

      registerField.focus()
    },
    async signup() {
      await this.$store.dispatch('signup/signup', this.emailAddress)
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
