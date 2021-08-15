<template>
  <div>
    <v-card class="mx-auto" max-width="100vw" max-height="1000px" tile>
      <v-list-item-group>
        <v-list rounded style="background-color:  #28b463 ">
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>ID</v-list-item-title>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title>Dastur Nomi</v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <v-list-item-title>Actions</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider style="background-color: #ccc"></v-divider>
      </v-list-item-group>
      <v-list-item-group v-model="selectedItem" color="primary">
        <v-list rounded>
          <v-list-item v-for="(item, i) in getData" :key="i">
            <v-list-item-content>
              <v-list-item-title v-text="item.id"></v-list-item-title>
            </v-list-item-content>

            <v-list-item-content>
              <v-list-item-title v-text="item.title"></v-list-item-title>
            </v-list-item-content>
            <v-list-item-content>
              <div>
                <v-btn color="green" dark rounded @click="openEditDialog(item)">
                  <v-icon dark>
                    mdi-pencil
                  </v-icon>
                </v-btn>
                <v-btn dark rounded @click="openEditDialog(item)">
                  <v-icon dark right color="green">
                    mdi-toggle-switch-off
                  </v-icon>
                </v-btn>
                <v-btn
                  color="primary"
                  dark
                  rounded
                  @click="openEditDialog(item)"
                >
                  <v-icon dark right>
                    mdi-delete
                  </v-icon>
                </v-btn>
              </div>
            </v-list-item-content>
          </v-list-item>
        </v-list>
        <v-divider style="background-color: #ccc"></v-divider>
      </v-list-item-group>
    </v-card>
    <!-- <v-data-table
      :items="apps"
      :headers="headers"
      class="elevation-4"
      no-data-text="Маъумот топилмади"
      no-results-text="Маълумот топилмади"
    >
    </v-data-table> -->
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      icon1: 'mdi-account',
      selectedItem: {},
      apps: [],
      headers: [
        {
          text: 'ID',
          value: 'id'
        },
        {
          text: 'Дастур номи',
          value: 'title'
        }
      ]
    }
  },
  computed: {
    ...mapGetters('apps', ['getData'])
  },
  methods: {
    getAppsSearch() {
      const response = this.$store.dispatch('apps/fetchAppsSearch', {
        search: ''
      })
      console.log(response)
    },
    openEditDialog(item) {
      alert('salom edit')
    }
  },
  created() {
    this.getAppsSearch()
    this.apps = this.getData
  }
}
</script>
<style scoped>
table.v-table thead td {
  font-size: 20px !important;
}
</style>
