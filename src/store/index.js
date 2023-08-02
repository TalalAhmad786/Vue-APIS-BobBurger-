import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    user: {},
    users: []
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
    },
    SET_USERS (state, payload) {
      state.users = payload
    }
  },
  actions: {
    async registerUser ({ commit }) {
      const response = await axios.get(
        'https://bobsburgers-api.herokuapp.com/v2/characters'
      )
      console.log(response)
      commit('SET_USER', response.data)
      }
  },
  getters: {
    getUsers (state) {
      return state.user
    }
  }
})