import store from '~/store'

export default (to, from, next) => {
    if (store.getters['auth/user'] || store.getters['auth/isLoggedIn']) {
        next({ name: 'home' })
    } else {
        next()
    }
}