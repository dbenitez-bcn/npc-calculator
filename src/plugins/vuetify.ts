// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { customAliases } from '~/iconsets/custom'
import { aliases } from 'vuetify/iconsets/mdi-svg'

const mainTheme: ThemeDefinition = {
    colors: {
        background: '#161616',
        primary: '#8F30F6',
        secondary: '#329FC0',
        'night-grey': '#232220',
        'night-blue': '#221BCA',
        'lucky-point-blue': '#101463',
        'ultimate-green': '#00AA44',
        'soft-thunder': "#EBC737",
        'female-pink': '#FF5CCD',
        'male-blue': '#69C9D0'
    },
    variables: {
        'border-color': '#313131',
        'border-opacity': '1'
    },
}
export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'mainTheme',
            themes: {
                mainTheme,
            },
        },
        icons: {
            aliases: {
                ...aliases,
                ...customAliases
            }
        }
    })
    app.vueApp.use(vuetify)
})
