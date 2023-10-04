<template>
  <v-app>
    <Header />
    <v-main class="bg-grey-darken-3 h-100">
      This is home page
      <v-btn to="/games/roulette">Go to roulette</v-btn>
    </v-main>
  </v-app>  
</template>

<script setup>
  import Header from '@/components/Header.vue';

  const goToRoulette = () => {
    router.push({ name: 'Roulette' });
    console.log("bhtn")
  };

</script>
