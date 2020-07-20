<template>
  <section>
    <CBox :width="$chakra.theme.container" mx="auto">
      <CSimpleGrid :columns="[1, 1, 2]" spacing="4">
        <CBox>
          <CHeading as="h1" font-family="heading" size="2xl" mb="8">
            Awesome H1 headline to capture
          </CHeading>
          <CHeading size="lg" font-weight="400" color="gray.600">
            An H2 explanation of how it's so good
            and what it can do.
          </CHeading>
        </CBox>
        <CBox background-color="#63b257" height="200px">

        </CBox>
      </CSimpleGrid>
    </CBox>
  </section>
</template>

<script>
import { CBox, CHeading, CSimpleGrid } from '@chakra-ui/vue'

export default {
  components: { CBox, CHeading, CSimpleGrid }
}
</script>

<style>

</style>
