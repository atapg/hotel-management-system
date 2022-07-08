<template>
  <div class="pos-relative">
    <p class="display-1 title-z-index font-weight-bold mb-10">Popular Rooms</p>
    <div class="title-z-index" v-if="rooms.length <= 0">
      <v-alert type="info">No popular rooms :(</v-alert>
    </div>
    <div class="cards-section d-flex justify-space-between">
      <Card
        v-for="(item, index) in rooms"
        :key="index"
        :img="item.img"
        :name="item.name"
        :capacity="item.capacity"
        :price="item.price"
        :id="item.id"
        :facilities="item.facilities"
      />
    </div>
    <div class="bg border"></div>
    <div class="bg2 border"></div>
  </div>
</template>

<script>
import Card from './Card'
export default {
  components: { Card },
  data() {
    return {
      rooms: [],
    }
  },
  mounted() {
    //TODO get rooms from here 2
    // this.getRooms()
  },
  methods: {
    getRooms() {
      this.$axios({
        method: 'GET',
        url: '/rooms',
      }).then(({ data }) => {
        this.rooms = data
      })
    },
  },
}
</script>

<style scoped lang="scss">
.cards-section {
  gap: 30px;
  position: relative;
  z-index: 1;
}

.title-z-index {
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

.bg2 {
  background-color: rgba($grey-color, 0.5);
  width: 30%;
  height: 250px;
  position: absolute;
  top: 0;
  left: 40px;
}

.pos-relative {
  position: relative;
}
</style>
