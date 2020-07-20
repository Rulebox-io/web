<template>
  <CThemeProvider>
    <CReset />
    <nav>
      <CBox bg="white" :width="$chakra.theme.container" mx="auto">
        <CFlex align="center" justify="space-between" direction="row" px="1" py="4">
            <CHeading as="h2" font-family="logo" color="gray.600">rulebox</CHeading>
            <div>
              <CBox as="span" mx="1">About</CBox>
              <CBox as="span" mx="1">Developers</CBox>
              <CBox as="span" mx="1">Pricing</CBox>
            </div>
          <CButton right-icon="arrow-forward" rounded="full" variant-color="brand.jade" color="white">Sign in</CButton>
        </CFlex>
      </CBox>
    </nav>
    <Nuxt />
  </CThemeProvider>
</template>

<script>
import { CBox, CButton, CFlex, CHeading, CThemeProvider, CReset } from '@chakra-ui/vue'

export default {
  name: 'DefaultLayout',
  components: {
    CBox,
    CButton,
    CFlex,
    CHeading,
    CThemeProvider,
    CReset
  },
  mounted () {
    console.log(this.$chakra.theme.colors.blue)
  }
}
</script>

<style>
body {
}
</style>
