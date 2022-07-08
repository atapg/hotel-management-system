<template>
  <div class="center">
    <v-card width="400">
      <v-card-text>
        <div class="center mb-5">
          <Logo />
        </div>
        <v-text-field
          label="Phone"
          type="text"
          v-model="phone"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="Password"
          type="password"
          outlined
          dense
          v-model="password"
        ></v-text-field>
        <v-btn block color="primary" class="mb-3" @click="login">Login</v-btn>
        <v-btn block text to="/sign-up">Don't have an account? Sign up</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Logo from '../components/general/Logo'
import handlers from '../mixins/handlers'
export default {
  components: { Logo },
  mixins: [handlers],
  data() {
    return {
      phone: null,
      password: null,
    }
  },
  methods: {
    login() {
      this.$axios({
        method: 'POST',
        url: '/authenticate',
        data: {
          phone: this.phone,
          password: this.password,
        },
      })
        .then(() => {
          this.handleSuccessMessage('/panel', 'شما با موفقیت وارد شدید')
        })
        .catch((err) => {
          this.handleReqError(err)
        })
    },
  },
}
</script>

<style scoped></style>
