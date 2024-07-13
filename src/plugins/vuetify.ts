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
        'lucky-point-blue': '#101463',
        'ultimate-green': '#00AA44'
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
