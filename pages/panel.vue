<template>
  <div style="height: 100vh" class="panel-container">
    <div class="fill-height sidebar">
      <v-card class="fill-height" width="300">
        <v-list shaped>
          <v-subheader>Admin Panel</v-subheader>
          <v-list-item-group v-model="selectedItem" color="primary">
            <v-list-item v-for="(item, i) in items" :key="i">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-item to="/">
              <v-list-item-icon>
                <v-icon> mdi-home-outline</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title>Back To Home</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </div>
    <div class="pa-5" style="width: 100%">
      <v-card v-if="selectedItem === 0">
        <v-card-text>
          <v-btn color="primary" @click="openRoomAddDialog">
            <v-icon left>mdi-plus</v-icon>
            Add room
          </v-btn>

          <v-data-table :items="rooms" :headers="roomsTableHeaders">
            <template #item.actions="{ item }">
              <v-btn color="primary" x-small fab @click="openRoomEditDialog(item.id)">
                <v-icon x-small>mdi-eye</v-icon>
              </v-btn>
              <v-btn color="red" x-small fab dark @click="deleteRoom(item.id)">
                <v-icon x-small>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
      <v-card v-if="selectedItem === 1">
        <v-card-text>
          <v-data-table :items="users" :headers="usersTableHeaders">
            <template #item.actions="{ item }">
              <v-btn color="red" x-small fab dark @click="deleteUser(item.id)">
                <v-icon x-small>mdi-delete</v-icon>
              </v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </div>

    <v-dialog v-model="roomEditDialog" max-width="1000">
      <v-card v-if="singleRoom">
        <v-card-title>Edit room</v-card-title>
        <v-card-text>
          <v-row>
            <v-col>
              <v-text-field label="Name" outlined v-model="singleRoom.name"/>
              <v-text-field type="number" label="Capacity" outlined v-model="singleRoom.capacity" min="0"/>
              <v-text-field type="number" label="Price" outlined v-model="singleRoom.price" min="0"/>
              <v-btn color="primary" @click="updateRoom">Submit</v-btn>
            </v-col>
            <v-col>
              <h2 class="mb-4">Reservations</h2>
              <v-card class="mb-3" outlined v-for="reservation in singleRoom.reservations">
                <v-card-title>{{ reservation.name }}</v-card-title>
                <v-card-text>
                  <div>
                    Days: {{ reservation.days }}
                  </div>
                  <v-btn color="red" small dark class="mt-2" @click="deleteReservation(reservation.id)">Delete</v-btn>
                </v-card-text>
              </v-card>
              <v-divider/>
              <h2 class="my-4">Comments</h2>
              <v-card class="mb-3" outlined v-for="comment in singleRoom.comments">
                <v-card-title>{{ comment.name }}</v-card-title>
                <v-card-text>
                  <div>{{ comment.content }}</div>
                  <v-btn color="red" small dark class="mt-2" @click="deleteComment(comment.id)">Delete</v-btn>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="roomAddDialog" max-width="1000">
      <v-card>
        <v-card-title>Add room</v-card-title>
        <v-card-text>
          <v-text-field label="Name" outlined v-model="roomAddForm.name"/>
          <v-text-field type="number" label="Capacity" outlined v-model="roomAddForm.capacity" min="0"/>
          <v-text-field type="number" label="Price" outlined v-model="roomAddForm.price" min="0"/>
          <v-btn color="primary" @click="createRoom">Submit</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import handlers from "~/mixins/handlers";

export default {
  mixins: [handlers],
  layout: 'panel',
  data() {
    return {
      selectedItem: 0,
      items: [
        {text: 'Rooms', icon: 'mdi-sofa-single-outline'},
        {text: 'Users', icon: 'mdi-account-group-outline'},
      ],
      rooms: [],
      roomsTableHeaders: [
        {text: 'Name', value: 'name'},
        {text: 'Capacity', value: 'capacity'},
        {text: 'Price', value: 'price'},
        {text: 'Actions', value: 'actions'},
      ],
      users: [],
      usersTableHeaders: [
        {text: 'Name', value: 'name'},
        {text: 'Phone', value: 'phone'},
        {text: 'Actions', value: 'actions'}
      ],
      singleRoom: null,
      roomEditDialog: false,
      roomAddDialog: false,
      roomAddForm: {
        name: '',
        capacity: 1,
        price: 0
      }
    }
  },
  mounted() {
    this.getRooms()
    this.getUsers()
  },
  methods: {
    getRooms() {
      this.$axios({
        method: 'GET',
        url: '/admin/rooms'
      }).then(({data}) => {
        this.rooms = data
      })
    },
    deleteRoom(id) {
      this.$axios({
        method: 'POST',
        url: '/admin/delete-room',
        data: JSON.stringify({
          id: id
        })
      }).then(() => {
        this.success('Room deleted successfully.')
        this.getRooms()
      })
    },
    updateRoom() {
      this.$axios({
        method: 'POST',
        url: '/admin/update-room',
        data: JSON.stringify({
          id: this.singleRoom.id,
          name: this.singleRoom.name,
          capacity: this.singleRoom.capacity,
          price: this.singleRoom.price
        })
      }).then(() => {
        this.success('Room edited successfully.')
        this.getRooms()
      })
    },
    createRoom() {
      this.$axios({
        method: 'POST',
        url: '/admin/rooms',
        data: JSON.stringify({
          name: this.roomAddForm.name,
          capacity: this.roomAddForm.capacity,
          price: this.roomAddForm.price,
        })
      }).then(() => {
        this.success('Room created successfully.')
        this.getRooms()
        this.roomAddDialog = false
      })
    },
    openRoomEditDialog(id) {
      this.singleRoom = null

      this.$axios({
        method: 'GET',
        url: '/admin/rooms/' + id
      }).then(({data}) => {
        this.singleRoom = data
        this.roomEditDialog = true
      })
    },
    openRoomAddDialog() {
      this.roomAddForm = {
        name: '',
        capacity: 1,
        price: 0
      }
      this.roomAddDialog = true
    },
    getUsers() {
      this.$axios({
        method: 'GET',
        url: '/admin/users'
      }).then(({data}) => {
        this.users = data
      })
    },
    deleteReservation(id) {
      this.$axios({
        method: 'POST',
        url: '/admin/delete-reservation',
        data: JSON.stringify({
          id: id
        })
      }).then(() => {
        this.success('Reservation deleted successfully.')
        this.openRoomEditDialog(this.singleRoom.id)
      })
    },
    deleteComment(id) {
      this.$axios({
        method: 'POST',
        url: '/admin/delete-comment',
        data: JSON.stringify({
          id: id
        })
      }).then(() => {
        this.success('Comment deleted successfully.')
        this.openRoomEditDialog(this.singleRoom.id)
      })
    },
    deleteUser(id) {
      this.$axios({
        method: 'POST',
        url: '/admin/delete-user',
        data: JSON.stringify({
          id: id
        })
      }).then(() => {
        this.success('User deleted successfully.')
        this.getUsers()
      })
    },
  }
}
</script>

<style scoped lang="scss">
.panel-container {
  display: flex;
  flex: 1;
  width: 100%;
}
</style>
