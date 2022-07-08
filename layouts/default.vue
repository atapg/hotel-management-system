<template>
  <div id="main">
    <v-app style="width: 100%">
      <div class="main-wrapper">
        <Navbar />
        <Nuxt />
        <v-footer padless color="primary">
          <v-col class="text-center" cols="12">
            <p class="mb-0 white--text">
              {{ new Date().getFullYear() }} — <strong>Alimoradi</strong>
            </p>
          </v-col>
        </v-footer>
      </div>
      <ScrollToTop />
    </v-app>
  </div>
</template>

<script>
import Navbar from '../components/general/Navbar'
import ScrollToTop from '../components/general/ScrollToTop'

export default {
  components: { Navbar, ScrollToTop },
}
</script>

<style scoped lang="scss">
#main {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  .main-wrapper {
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 100%;
  }
}
</style>
