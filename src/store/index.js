import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import file from '@/store/modules/file'
import users from '@/store/modules/users'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    file,
    users
  }
})
