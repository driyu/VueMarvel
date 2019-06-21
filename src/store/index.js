import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
    comics: [1, 2, 3, 4, 5, 6],
}

const mutations = {
    saveCommits: (state, comics) => {
        state.comics = comics
    }
}

const { a } = { a: 'asdfasfasdf', b: 'werwerwer' }

const actions = {
    fetchAllComics: ({ commit }) => {
        return axios
            .get('http://gateway.marvel.com/v1/public/comics?ts=1&apikey=957b04deccf33deb153b6ed793bf7a20&hash=f7ef70edf9842d21306e78a86691dcda')
            .then(response => {
                debugger
                const comics = response.data.data.results
                commit('saveCommits', comics)
            })
    },
    fetchUser: ({ commit }) => {

  }
}

const getters = {
  getComics: (state) => state.comics
}

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

export default store

// http://gateway.marvel.com/v1/public/comics?ts=1&apikey=957b04deccf33deb153b6ed793bf7a20&hash=f7ef70edf9842d21306e78a86691dcda
