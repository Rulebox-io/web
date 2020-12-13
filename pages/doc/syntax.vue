<template>
  <section>
    <CBox :width="$chakra.theme.container" mx="auto">
      <CBox p="4" border="1px" borderColor="gray.400" d="inline-block">
        <CList>
          <CListItem
            v-for="link of doc.toc"
            :key="link.id"
            :ml="link.depth"
          >
            <nuxt-link :to="`#${link.id}`">{{ link.text }}</nuxt-link>
          </CListItem>
        </CList>
      </CBox>
      <nuxt-content :document="doc" />
    </Cbox>
  </section>
</template>

<script>
import { CBox, CList, CListItem } from '@chakra-ui/vue'

export default {
  components: { CBox, CList, CListItem },

  async asyncData ({ $content, params }) {
    const doc = await $content('doc/syntax').fetch()

    return { doc }
  }
}
</script>

<style>
</style>
