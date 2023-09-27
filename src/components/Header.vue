<template>
  <v-app-bar class="bg-black">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title>
      <router-link to="/home">
        <v-img src="@/assets/logoSemFundoDeitada.png" width="200px"></v-img>
      </router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>

  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    temporary
    class="bg-grey-darken-4 elevation-2"
  >
    <v-list density="compact" nav>
      
      <v-list-item prepend-icon="mdi-folder" title="Jogos" value="games" to="/games"></v-list-item>
      <v-list-item prepend-icon="mdi-account-multiple" title="Minha conta" value="account" to="/account"></v-list-item>
      <v-list-item prepend-icon="mdi-star" title="Saque" value="withdraw" to="/withdraw"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'

const drawer = ref(null)
</script>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>