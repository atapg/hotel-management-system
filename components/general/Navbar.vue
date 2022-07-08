<template>
  <div class="d-flex justify-space-between row-container py-5">
    <div class="logo"><Logo /></div>
    <nav>
      <ul class="d-flex justify-space-between">
        <li><v-btn text>Home</v-btn></li>
        <li><v-btn text>Rooms</v-btn></li>
        <li><v-btn text>About Us</v-btn></li>
        <li><v-btn outlined color="primary">Login</v-btn></li>
      </ul>
    </nav>
  </div>
</template>

<script>
import Logo from '../ui/Logo'
export default {
  components: { Logo },
}
</script>

<style scoped lang="scss">
li {
  list-style-type: none;
  margin-left: 30px;
  //padding: 5px 15px;
}
</style>
