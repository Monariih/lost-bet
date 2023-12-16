<template>
  <v-app-bar class="bg-black">
    <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    <v-app-bar-title class="d-none d-sm-block">
      <router-link to="/games">
        <v-img src="https://images2.imgbox.com/1d/27/SLRjRy02_o.png" width="200px"></v-img>
      </router-link>
    </v-app-bar-title>
    <v-spacer></v-spacer>
    <span class="mx-2">
      Saldo da conta: R$ {{ user.userbalance }}
    </span>
    <span class="mx-2 d-none d-sm-block">
      {{ user.username }}
    </span>
    <v-avatar class="mx-4" color="surface-variant"></v-avatar>
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
      <v-list-item prepend-icon="mdi-star" title="Depósito" value="deposit" to="/deposit"></v-list-item>
      <v-divider></v-divider>
      <v-list-item prepend-icon="mdi-logout" class="my-2" title="Sair" value="logout" @click="logout"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup>
import { ref } from 'vue'
import router from '@/router'
import store from '@/store'

const user = ref(store.state.user)
const drawer = ref(null)

function logout() {
  store.commit('logout')
  router.push('/')
}
</script>

<script>
export default {
  data: () => ({ drawer: null }),
}
</script>