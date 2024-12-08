<script setup>
import { ref } from 'vue'
import FastCodeLanding from './components/FastCodeLanding.vue'

// Using Vuetify theme toggling:
const isDark = ref(false)
function toggleTheme() {
  isDark.value = !isDark.value
}
</script>

<template>
  <v-app :theme="isDark ? 'dark' : 'light'">
    <v-app-bar app density="comfortable" color="primary" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Fast Code</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="toggleTheme">
        <v-icon>{{ isDark ? 'mdi-white-balance-sunny' : 'mdi-weather-night' }}</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <FastCodeLanding />
    </v-main>

    <v-footer app padless>
      <v-col class="text-center">
        <div>© 2024 Fast Code. All Rights Reserved.</div>
      </v-col>
    </v-footer>
  </v-app>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
  font-family: 'Kanit', sans-serif;
}
</style>