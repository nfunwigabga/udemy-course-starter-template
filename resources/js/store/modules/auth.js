import axios from 'axios'

// state
export const state = {
    user: null,
    isLoggedIn: false,
}

// getters
export const getters = {
    user: state => state.user,
    isLoggedIn: state => state.isLoggedIn
}

// mutations
export const mutations = {

}

// actions
export const actions = {
    async fetchUser({ commit }) {

    },

    async logout({ dispatch }) {

    },
}
