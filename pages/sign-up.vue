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
          label="Name"
          type="text"
          v-model="name"
          outlined
          dense
        ></v-text-field>
        <v-text-field
          label="Password"
          type="password"
          v-model="password"
          outlined
          dense
        ></v-text-field>
        <v-btn block color="primary" class="mb-3" @click="register"
          >Sign up</v-btn
        >
        <v-btn block text to="/login">Already have an account? Login</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import Logo from '../components/general/Logo'
import handlers from '../mixins/handlers'
import api from '../api'
import Cookies from "js-cookie";
export default {
  components: { Logo },
  mixins: [handlers],
  data() {
    return {
      phone: null,
      password: null,
      name: null,
    }
  },
  methods: {
    register() {
      this.$axios({
        method: 'POST',
        url: '/register',
        data: JSON.stringify({
          phone: this.phone,
          password: this.password,
          name: this.name
        })
      }).then(({data}) => {
          this.success('You have successfully signed up...')
          this.$router.push('/login')
      })
    },
  },
}
</script>

<style scoped></style>
