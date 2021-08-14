import axios from '../../axios'

const state = {
  user: {}
}

const mutations = {
  SET_USER_DATA: (state, data) => {
    state.user = data
  }
}

const actions = {
  async fetchUser({ commit }) {
    try {
      const response = await axios.get('/user')
      commit('SET_USER_DATA', response.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

const getters = {
  getUser: (state) => state.user
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
