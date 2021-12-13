<template>
  <main>
    <div class="max-w-7xl ml-auto mr-auto text-center mt-24">
      <h2 class="text-6xl text-white font-bold my-2">
        Rule management<br />
        for your whole team.
      </h2>
      <h2 class="text-xl text-gray-200 my-4">
        Create, maintain and run rulesets with a<br />
        single user-friendly interface.
      </h2>


      <div class="flex justify-around mt-12">
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-md blur-xl"></div>
          <div class="bg-black relative flex items-center justify-between w-96 rounded-md p-3 border-gradient-r-purple-green-gray-900 border-transparent border-solid border-2">
            <input class="bg-gray-900 border-none flex-grow" type="text" placeholder="hello@rulebox.io"></input>
            <span class="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
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