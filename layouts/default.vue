<template>
  <v-app dark>
    <Navbar />
    <Nuxt />
    <v-footer padless color="primary">
      <v-col class="text-center" cols="12">
        <p class="mb-0 white--text">
          {{ new Date().getFullYear() }} — <strong>Alimoradi</strong>
        </p>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
import Navbar from '../components/general/Navbar'
export default {
  components: { Navbar },
}
</script>

<style scoped></style>
