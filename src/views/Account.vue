<template>
  <v-app>
    <Header />
    <v-main class="bg-grey-darken-3 h-100">
      <DepositAccountPage />
    </v-main>
    <Footer />
  </v-app>
</template>

<script setup>
import Footer from '@/components/Footer.vue';
import Header from '@/components/Header.vue';
import DepositAccountPage from '@/components/UserComponents/DepositAccountPage.vue';
</script>