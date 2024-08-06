// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify, type ThemeDefinition } from 'vuetify'

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
}
export default defineNuxtPlugin((app) => {
    const vuetify = createVuetify({
        theme: {
            defaultTheme: 'mainTheme',
            themes: {
                mainTheme,
            },
        },
    })
    app.vueApp.use(vuetify)
})
