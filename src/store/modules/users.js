import axios from '../../axios'

const state = {}

const mutations = {}

const actions = {
  // eslint-disable-next-line no-unused-vars
  async fetchUser({ commit }) {
    try {
      const response = await axios.get('/user')
      return Promise.resolve(response.data.data)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
