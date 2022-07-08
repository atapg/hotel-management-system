<template>
  <div>
    <div class="cards-section d-flex justify-space-between">
      <Card v-for="i in 4" />
    </div>
    <div class="bg border"></div>
  </div>
</template>

<script>
import Card from './Card'
export default {
  components: { Card },
}
</script>

<style scoped lang="scss">
.cards-section {
  gap: 30px;
  position: relative;
  z-index: 1;
}

.bg {
  background-color: $grey-color;
  width: 80%;
  height: 150px;
  margin: auto;
  transform: translateY(-70%);
}
</style>
