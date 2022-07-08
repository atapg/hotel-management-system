<template>
  <div
    class="card-container white shadow border d-flex flex-column flex"
    :class="fillHeight && 'fill-height'"
  >
    <img :src="require(`assets/images/villa${id}.jpg`)" alt=""/>
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
        <p class="title font-weight-bold mb-0">{{ name }}</p>
      </div>
      <div class="d-flex justify-space-between mb-3">
        <div class="center">
          <p class="capacity mb-0">{{ price }}$</p>
          <v-icon color="green">mdi-cash</v-icon>
        </div>
        <div class="center">
          <p class="capacity mb-0">{{ capacity }}</p>
          <v-icon color="cyan">mdi-door</v-icon>
        </div>
      </div>
      <v-btn
        block
        elevation="0"
        outlined
        color="primary"
        @click="reservationDialog = true"
        :disabled="!$store.state.user"
      >
        <v-icon left>mdi-briefcase-check-outline</v-icon>
        Reserve
      </v-btn>
      <v-btn color="secondary" class="mt-2" outlined block @click="commentsDialog = true">
        <v-icon left>mdi-comment-outline</v-icon>
        Comments
      </v-btn>
    </div>

    <v-dialog v-model="reservationDialog" max-width="600">
      <v-card>
        <v-card-title>Reserve</v-card-title>
        <v-card-text>
          <v-text-field type="number" label="Days" outlined v-model="days"/>
          <v-btn color="primary" @click="reserveRoom">Reserve</v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="commentsDialog" max-width="600">
      <v-card>
        <v-card-title>Comments</v-card-title>
        <v-card-text>
          <div v-if="comments">
            <v-alert type="info" v-if="comments.length <= 0">
              No comments yet! Submit the first commit.
            </v-alert>
            <div v-else>
              <v-card class="mb-2" v-for="comment in comments">
                <v-card-title>{{ comment.name }}</v-card-title>
                <v-card-text>
                  {{ comment.content }}
                </v-card-text>
              </v-card>

              <v-alert type="warning" v-if="!$store.state.user">
                To submit a comment please login first.
              </v-alert>
              <div v-else>
                <v-textarea label="Comment" outlined v-model="userComment" class="mt-7" />
                <v-btn color="primary" @click="submitComment">Submit</v-btn>
              </div>
            </div>
          </div>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import handlers from "~/mixins/handlers";

export default {
  mixins: [handlers],
  props: ['id', 'name', 'facilities', 'img', 'fillHeight', 'price', 'capacity'],
  data() {
    return {
      days: 1,
      reservationDialog: false,
      comments: null,
      commentsDialog: false,
      userComment: ''
    }
  },
  mounted() {
    this.getComments(this.id)
  },
  methods: {
    reserveRoom() {
      this.$axios({
        method: 'POST',
        url: '/reserve',
        data: JSON.stringify({
          room_id: this.id,
          name: this.$store.state.user.name,
          days: this.days
        })
      }).then(() => {
        this.success('Your reservation submitted successfully!')

        this.reservationDialog = false
      })
    },
    getComments(id) {
      this.$axios({
        method: 'GET',
        url: '/rooms/' + id
      }).then(({data}) => {
        this.comments = data.comments
      })
    },
    submitComment() {
      this.$axios({
        method: 'POST',
        url: '/comments',
        data: JSON.stringify({
          name: this.$store.state.user.name,
          content: this.userComment,
          room_id: this.id
        })
      }).then(() => {
        this.success('Your comment submitted successfully.')
        this.userComment = ''
        this.getComments(this.id)
      })
    },
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
