<template>
  <div class="row-container my-15">
    <v-row>
      <v-col xl="3" lg="3" md="6" sm="12" cols="12">
        <v-card>
          <v-card-title> Search Room </v-card-title>
          <v-card-text>
            <v-text-field label="Search ..." outlined dense></v-text-field>
            <v-btn block color="primary" class="mt-5">Search</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col xl="9" lg="9" md="6" sm="12" cols="12">
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
          img: 'villa2.jpg',
          facilities: ['View', 'Parking', 'Cooler', 'Food', 'Massage'],
          name: 'Ocean view Room',
        },
        {
          id: 3,
          img: 'villa3.jpg',
          facilities: ['Food'],
          name: '2kid bedroom',
        },
        {
          id: 4,
          img: 'villa4.jpg',
          facilities: ['Food', 'Parking', 'City', 'Pool'],
          name: 'City view Room',
        },
        {
          id: 5,
          img: 'villa5.jpg',
          facilities: ['Food', 'Parking', 'Pool'],
          name: 'Master room for chilling',
        },
        {
          id: 6,
          img: 'villa6.jpg',
          facilities: ['View', 'Parking', 'Cooler', 'Food', 'Massage'],
          name: 'Ocean view Room',
        },
        {
          id: 7,
          img: 'villa7.jpg',
          facilities: ['Food'],
          name: '2kid bedroom',
        },
        {
          id: 8,
          img: 'villa8.jpg',
          facilities: ['Food', 'Parking', 'City', 'Pool'],
          name: 'City view Room',
        },
        {
          id: 9,
          img: 'villa9.jpg',
          facilities: ['Food', 'Parking', 'Pool'],
          name: 'Master room for chilling',
        },
      ],
      page: 1,
    }
  },
}
</script>

<style scoped></style>
