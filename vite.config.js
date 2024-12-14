// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify from 'vite-plugin-vuetify'

export default defineConfig({
  base: '/fastcode_landing_page/', // replace with your repo name
  plugins: [
    vue(),
    vuetify({ autoImport: true })
  ],
})