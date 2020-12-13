<template>
  <section>
    <CBox :width="$chakra.theme.container" mx="auto">
      <nuxt-content :document="doc" />
    </Cbox>
  </section>
</template>

<script>
import { CBox } from '@chakra-ui/vue'

export default {
  components: { CBox },

  async asyncData ({ $content, params }) {
    const doc = await $content('doc/syntax').fetch()

    return { doc }
  }
}
</script>

<style>
</style>
