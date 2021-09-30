import Vue from 'vue'
import Vuex from 'vuex'
import service from '@/services/axios.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    query: '',
    gifList: [],
    limit: 12,
    offset: 0,
  },
  mutations: {
    GET_GIF_LIST(state, gifList) {
      state.gifList = gifList
    },
    LOAD_MORE_GIFS(state, gifs) {
      state.gifList.push(...gifs)
    },
    SET_QUERY(state, query) {
      state.query = query
    },
    UPDATE_OFFSET(state, offset) {
      state.offset += offset
    },
  },
  actions: {
    setQuery({ commit }, query) {
      commit('SET_QUERY', query)
    },
    fetchGifList({ commit }, { keyword, limit, offset }) {
      return service.getGifs(keyword, limit, offset).then((res) => {
        commit('GET_GIF_LIST', res.data.data)
      })
    },
    loadMoreGifs({ commit }, { keyword }) {
      return service
        .getGifs(keyword, this.state.limit, this.state.offset)
        .then((res) => {
          commit('LOAD_MORE_GIFS', res.data.data)
        })
    },
    updateOffset({ commit }, offset) {
      commit('UPDATE_OFFSET', offset)
    },
  },
  modules: {},
})
