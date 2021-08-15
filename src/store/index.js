import Vue from 'vue'
import Vuex from 'vuex'
import auth from '@/store/modules/auth'
import file from '@/store/modules/file'
import users from '@/store/modules/users'
import apps from '@/store/modules/apps'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    file,
    users,
    apps
  }
})
