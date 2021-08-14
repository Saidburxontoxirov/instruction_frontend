<template>
  <div>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>
<script>
export default {
  name: 'Main',
  data() {
    return {
     
    }
  },
  computed: {},
  methods: {
    getUserData() {
      this.$store
        .dispatch('auth/fetchUserData')
        .then(() => {
          this.$toast.success('admin')
        })
        .catch(() => {
          this.$toast.success('user')
        })
    },
    printUserData() {
      console.log(this.getUser)
    }
  },
  created() {
    this.getUserData()
  }
}
</script>
