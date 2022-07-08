<template>
  <div class="pos-relative">
    <p class="display-1 title-z-index font-weight-bold mb-10">Popular Rooms</p>
    <div class="cards-section d-flex justify-space-between">
      <Card
        v-for="(item, index) in rooms"
        :key="index"
        :img="item.img"
        :name="item.name"
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
      rooms: [
        {
          id: 1,
          img: 'villa1.jpg',
          facilities: ['Food', 'Parking', 'Pool'],
          name: 'Master room for chilling',
        },
        {
          id: 2,
          img: 'villa1.jpg',
          facilities: ['View', 'Parking', 'Cooler', 'Food', 'Massage'],
          name: 'Ocean view Room',
        },
        {
          id: 3,
          img: 'villa1.jpg',
          facilities: ['Food'],
          name: '2kid bedroom',
        },
        {
          id: 4,
          img: 'villa1.jpg',
          facilities: ['Food', 'Parking', 'City', 'Pool'],
          name: 'City view Room',
        },
      ],
    }
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
