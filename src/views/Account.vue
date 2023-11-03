<template>
  <v-app>
    <Header />
    <v-main class="bg-grey-darken-3 h-100">
      <UserInfoPage />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import UserInfoPage from '@/components/UserComponents/UserInfoPage.vue';
</script>