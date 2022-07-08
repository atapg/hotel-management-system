<template>
  <div class="card-container white shadow border">
    <img :src="require('assets/images/villa1.jpg')" alt="" />
    <div class="info-section px-5 py-3">
      <div class="facilities d-flex flex-wrap">
        <p class="caption font-weight-medium mb-0" style="color: red">Food</p>
        <p class="caption font-weight-medium mb-0" style="color: blue">
          Parking
        </p>
        <p class="caption font-weight-medium mb-0" style="color: purple">
          24 Service
        </p>
      </div>
      <p class="title font-weight-bold">Master room for chilling</p>
      <v-btn block elevation="0" outlined color="primary">
        <v-icon left>mdi-briefcase-check-outline</v-icon>
        Reserve
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {}
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
