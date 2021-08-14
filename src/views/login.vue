<template>
  <div>
    <v-card
      max-width="400"
      class="mx-auto rounded-xl py-8 mt-16"
      elevation="24"
    >
      <v-card-title
        class="d-flex justify-center font-weight-bold text-lg-center"
      >
        Login
      </v-card-title>
      <v-card-text>
        <v-text-field
          outlined
          dense
          hide-details
          rounded
          label="Username"
          v-model="user.username"
          prepend-inner-icon="mdi-account-circle-outline"
        />
        <v-text-field
          outlined
          dense
          rounded
          hide-details
          class="mt-4"
          label="Password"
          :type="show ? 'text' : 'password'"
          v-model="user.password"
          prepend-inner-icon="mdi-lock"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="show = !show"
        />
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green" dark rounded class="px-8 mr-2" @click="login">
          login</v-btn
        >
      </v-card-actions>
    </v-card>

    {{ user }}
    <div>
      <v-btn @click="download">
        Fayl ichini ko'rish
      </v-btn>
    </div>
  </div>
</template>

<script>
import axios from '@/axios'

export default {
  name: 'Home',
  data() {
    return {
      user: {
        username: 'Saidburxon',
        password: ''
      },
      show: false
    }
  },
  methods: {
    download() {
      axios({
        url: 'storage/files/1628247274php7.pdf',
        method: 'GET',
        responseType: 'blob'
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]))
        const link = document.createElement('a')
        link.href = url
        link.setAttribute('download', 'image.jpg')
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
      })
    },
    async login() {
      try {
        await this.$store.dispatch('auth/login', this.user)
        this.$router.push('/main')
        this.user.username = ''
        this.user.password = ''
      } catch (error) {
        this.$toast.error("Login yoki parol noto'g'ri")
      }
    }
  }
}
</script>
