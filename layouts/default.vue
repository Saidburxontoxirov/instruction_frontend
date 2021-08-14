<template>
  <div>
    <template>
      <v-card>
        <v-navigation-drawer
          v-model="drawer"
          :mini-variant.sync="mini"
          permanent
          fixed
          height="100vh"
        >
          <v-list-item class="px-2">
            <v-list-item-avatar>
              <v-img
                src="https://randomuser.me/api/portraits/men/85.jpg"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-title>Toxirov Saidburxon</v-list-item-title>

            <v-btn icon @click.stop="mini = !mini">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
          </v-list-item>

          <v-divider></v-divider>

          <v-list dense>
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="item.path"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title style="font-size: 16px">{{
                  item.title
                }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-card-actions id="bottom_place">
            <v-spacer />
            <v-btn
              v-if="mini == false"
              @click="logout"
              color="dark"
              dark
              width="100px"
              >Logout</v-btn
            >
          </v-card-actions>
        </v-navigation-drawer>
      </v-card>
    </template>
    <v-main>
      <router-view></router-view>
    </v-main>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Apps', icon: 'mdi-apps', path: '/apps' },
        { title: 'Users', icon: 'mdi-account-group-outline', path: '/users' },
        { title: 'Sections', icon: 'mdi-apps-box', path: '/sections' },
        { title: 'Files', icon: 'mdi-file-document', path: 'files' },
        {
          title: 'User-Sections',
          icon: 'mdi-account-star',
          path: '/user_sections'
        }
      ],
      mini: true
    }
  },
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push('/login')
    },
    async fetchUserData() {
      
    }
  }
}
</script>
<style scoped>
#bottom_place {
  position: absolute;
  bottom: 0;
  right: 0;
}
</style>
