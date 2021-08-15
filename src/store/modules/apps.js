import axios from '../../axios'

const state = {
  data: {}
}

const mutations = {
  SET_APP_DATA(state, data) {
    state.data = data
  }
}

const actions = {
  // eslint-disable-next-line no-unused-vars
  async fetchAppsSearch({ commit }, { search }) {
    try {
      const response = await axios.post('/app/search', { search })
      commit('SET_APP_DATA', response.data.data)
    } catch (error) {
      console.log(error)
    }
  }
}

const getters = {
  getData: (state) => state.data
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
