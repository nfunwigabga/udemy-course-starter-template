import store from '~/store'

export default async (to, from, next) => {
    if (!store.getters['auth/user'] || !store.getters['auth/isLoggedIn']) {
        try {
            await store.dispatch('auth/fetchUser')
        } catch (e) { }
    }
    next()
}