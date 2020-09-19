require('./bootstrap');

import Vue from 'vue'
import store from '~/store'
import router from '~/router'

import App from '~/components/App'
import Vuetify from '~/plugins/vuetify'

import '~/plugins'

import '~/components/Base'

const bus = {}
bus.install = function (Vue) {
    Vue.prototype.$bus = new Vue()
}
Vue.use(bus)

Vue.config.productionTip = false

new Vue({
    vuetify: Vuetify,
    store,
    router,
    ...App
})

