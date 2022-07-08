<template>
  <div class="card-container white shadow border d-flex flex-column">
    <img :src="require(`assets/images/${img}`)" alt="" />
    <div class="info-section px-5 py-3 d-flex flex-column flex">
      <div class="d-flex flex-column flex">
        <div class="facilities d-flex flex-wrap">
          <p
            v-for="(facility, index) in facilities"
            class="caption font-weight-medium mb-0"
            :class="getFacilityColor(index) + '--text'"
          >
            {{ facility }}
          </p>
        </div>
        <p class="title font-weight-bold">{{ name }}</p>
      </div>
      <v-btn
        :to="`/rooms/${id}`"
        width="100%"
        elevation="0"
        outlined
        color="primary"
      >
        <v-icon left>mdi-briefcase-check-outline</v-icon>
        Reserve
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id', 'name', 'facilities', 'img'],
  methods: {
    getFacilityColor(index) {
      switch (index) {
        case 0:
          return 'cyan'
        case 1:
          return 'orange'
        case 2:
          return 'green'
        case 3:
          return 'purple'
        case 4:
          return 'red'
        case 5:
          return 'blue'
        case 6:
          return 'pink'
        default:
          return 'black'
      }
    },
  },
}
</script>

<style scoped lang="scss">
.card-container {
  width: 100%;

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  .facilities {
    margin-left: -7px;
    margin-bottom: 10px;

    p {
      line-height: 25px;
      padding: 0 7px;

      &::before {
        content: '●';
        font-size: 20px;
        padding-right: 3px;
      }
    }
  }
}
</style>
