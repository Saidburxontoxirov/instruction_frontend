import axios from '../../axios'

const state = {}

const mutations = {}

const actions = {
  // eslint-disable-next-line no-unused-vars
  requestFile({ commit }, { section_id, filename }) {
    axios
      .post('/files', { section_id: section_id, filename: filename })
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log("Xatolik sodir bo'ldi")
        console.log(error)
      })
  },
  async getFile() {
    try {
      const response = await axios.get('/files/' + 71)
      return Promise.resolve(response)
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
