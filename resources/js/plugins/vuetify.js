import Vue from 'vue'

import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'
Vue.use(Vuetify)

const opts = {
    icons: {
        iconfont: 'mdi',
    },
    theme: {
        dark: false,
        options: {
            customProperties: true,
        },
        themes: {
            light: {
                primary: colors.cyan.darken1,
                accent: colors.grey.darken3,
                secondary: colors.amber.darken3,
                info: colors.teal.lighten1,
                warning: colors.amber.base,
                error: colors.deepOrange.accent4,
                success: colors.green.accent3,
                tertiary: colors.pink.base,
            }
        }
    }
}

export default new Vuetify(opts)