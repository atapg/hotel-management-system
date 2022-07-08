<template>
  <div
    class="d-flex justify-space-between row-container py-5"
    :class="!isMainPage ? 'shadow' : ''"
  >
    <div class="logo" @click="$router.push('/')">
      <Logo width="100" height="50" />
    </div>
    <nav class="center">
      <ul class="d-flex justify-space-between">
        <li><v-btn text to="/" exact>Home</v-btn></li>
        <li><v-btn text to="/rooms" exact>Rooms</v-btn></li>
        <!--<li><v-btn text to="/about-us" exact>About Us</v-btn></li>-->
        <li><v-btn outlined color="primary" to="/login" exact>Login</v-btn></li>
        <li><v-btn color="primary" to="/sign-up" exact>Sign up</v-btn></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Logo from './Logo'

export default {
  components: { Logo },
  data() {
    return {
      isMainPage: this.$route.path === '/',
    }
  },
  computed: {
    routePath() {
      return this.$route.path
    },
  },
  watch: {
    routePath() {
      this.isMainPage = this.$route.path === '/'
    },
  },
}
</script>

<style scoped lang="scss">
li {
  list-style-type: none;
  margin-left: 30px;
  //padding: 5px 15px;
}
.logo {
  cursor: pointer;
}
</style>
