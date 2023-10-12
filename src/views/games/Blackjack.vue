<template>
  <Header />
	<div class="game">
	  <TheStars />
	  <TheSidebar />
	  <TheGameArea />
	  <TheMenuButton />
	  <TheTitleScreen v-if="$store.state.isTitleShowing" />
	</div>
</template>

<script>
import TheTitleScreen from '@/components/BlackJackComponents/TheTitleScreen.vue'
import TheSidebar from '@/components/BlackJackComponents/TheSidebar.vue'
import TheStars from '@/components/BlackJackComponents/TheGameArea/TheStars.vue'
import TheGameArea from '@/components/BlackJackComponents/TheGameArea.vue'
import TheMenuButton from '@/components/BlackJackComponents/TheMenuButton.vue'
import Header from '@/components/Header.vue'
export default {
components: {
  Header,
  TheTitleScreen,
  TheSidebar,
  TheStars,
  TheGameArea,
  TheMenuButton
}
}
</script>

<style lang="scss">
.game {
  display: flex;
  flex-flow: row nowrap;
}
html, body, .game {
  height: 100%;
  overflow: hidden;
  margin: 0;
}
html {
  font-size: 16px; 
}
@media (max-height: 768px) {
  html {
    font-size: calc(5px + 0.5vh);
  }
}
body {
  background: rgb(12, 36, 48);
  font-family: 'Helvetica', 'Arial', sans-serif;
}
:focus {
  outline: 0 !important;
}
* {
  user-select: none;
}
.text-red {
  color: #E04030;
}
.text-secondary-color {
  color: rgb(12, 36, 48);
}
.text-gold {
  color: #E1AE0F;
}
.text-white {
  color: white;
}
</style>
  