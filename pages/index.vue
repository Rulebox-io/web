<template>
  <div class="container">
    <div>
      <h1 class="title">
        Rulebox.io
      </h1>
      <CButton as="nuxt-link" to="/">
        ⚡️ Oh, my Nuxt!
      </CButton>
    </div>
  </div>
</template>

<script>
import { CButton } from '@chakra-ui/vue'

export default {
  components: { CButton }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
