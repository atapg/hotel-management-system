<template>
  <div class="row-container my-15">
    <v-row>
      <v-col xl="3" lg="3" md="6" sm="12" cols="12">
        <v-card class="border">
          <v-card-title> Search Room </v-card-title>
          <v-card-text>
            <v-text-field label="Search ..." outlined dense></v-text-field>
            <v-btn block color="primary" class="mt-5">Search</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="9" lg="9" md="6" sm="12" cols="12" v-if="rooms.length === 0">
        <v-alert color="orange" type="warning">
          Unfortunately there are no available rooms for you. Please try check
          again later!
        </v-alert>
      </v-col>
      <v-col xl="9" lg="9" md="6" sm="12" cols="12" v-else>
        <v-row class="mb-10">
          <v-col
            xl="4"
            lg="4"
            md="6"
            sm="12"
            cols="12"
            v-for="(item, index) in rooms"
            :key="index"
          >
            <Card
              :img="item.img"
              :name="item.name"
              :id="item.id"
              :price="item.price"
              :capacity="item.capacity"
              :facilities="item.facilities"
              :fillHeight="true"
            />
          </v-col>
        </v-row>
        <div class="text-center">
          <v-pagination v-model="page" :length="6"></v-pagination>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Card from '../../components/general/Card'
import handlers from '../../mixins/handlers'
import api from '../../api'
export default {
  components: { Card },
  mixins: [handlers],
  data() {
    return {
      rooms: [],
      page: 1,
    }
  },
  mounted() {
    //TODO get rooms here
    // this.getRooms()
  },
  methods: {
    getRooms() {
      fetch(api + '/rooms', {
        method: 'GET',
      }).then(({ data }) => {
        this.rooms = data
      })
    },
  },
}
</script>

<style scoped></style>
