<script setup>
import TextPrompt from "../components/TextPrompt.vue";
import GameScreen from "../components/GameScreen.vue";
import KeyboardLayout from "../components/KeyboardLayout.vue";
</script>
<template>
  <article class="home-wrapper">
    <article class="game-wrapper">
      <GameScreen />
      <KeyboardLayout />
    </article>
    <aside class="text-prompt-wrapper">
      <TextPrompt />
    </aside>
  </article>
</template>
<style scoped>
.home-wrapper {
  display: grid;
  grid-template-areas:
    "prompt game"
    "prompt game";
}
.game-wrapper {
  grid-area: game;
}
.text-prompt-wrapper {
  grid-area: prompt;
}
</style>
