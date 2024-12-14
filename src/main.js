// main.js
import { createApp, ref } from 'vue'
import App from './App.vue'

// Import Vuetify styles
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'

// Create Vuetify
import { createVuetify } from 'vuetify'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

// Theming configuration with a primary color of #ff914d
const customTheme = {
  dark: false,
  colors: {
    primary: '#ff914d',
    secondary: '#000000',
    background: '#FAF9F6',
    surface: '#ffffff',
    error: '#f44336',
    info: '#2196f3',
    success: '#4caf50',
    warning: '#ff9800',
  },
}

const customDarkTheme = {
  dark: true,
  colors: {
    primary: '#ff914d',
    secondary: '#1E1E1E',
    background: '#121212',
    surface: '#1E1E1E',
    error: '#f44336',
    info: '#2196f3',
    success: '#4caf50',
    warning: '#ff9800',
  },
}

const vuetify = createVuetify({
  theme: {
    defaultTheme: 'light',
    themes: {
      light: customTheme,
      dark: customDarkTheme,
    },
  },
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: { mdi }
  },
})

const app = createApp(App)
app.use(vuetify)
app.mount('#app')