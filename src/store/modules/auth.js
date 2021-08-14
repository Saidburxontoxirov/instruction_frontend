import axios from '../../axios'

const state = {}

const mutations = {
  SET_TOKEN: (state, access_token) => {
    localStorage.setItem('access_token', access_token)
  }
}

const getters = {}

const actions = {
  async login({ commit }, { username, password }) {
    const auth_url = process.env.VUE_APP_AUTH_URL
    try {
      const response = await axios.post(auth_url, {
        username,
        password,
        grant_type: 'password',
        client_id: 2,
        client_secret: process.env.VUE_APP_CLIENT_SECRET
      })
      commit('SET_TOKEN', response.data.access_token)
      return Promise.resolve(response)
    } catch (error) {
      return Promise.reject(error)
    }
  },
  logout() {
    localStorage.clear()
  }
}

export default {
  namespaced: true,
  actions,
  state,
  getters,
  mutations
}
