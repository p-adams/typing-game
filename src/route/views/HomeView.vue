<script setup>
import TextPrompt from "../../components/TextPrompt.vue";
import GameScreen from "../../components/GameScreen.vue";
import TextInput from "../../components/TextInput.vue";
import { ref } from "vue";

const input = ref("");
</script>
<template>
  <article class="home-wrapper">
    <article class="game-wrapper">
      <GameScreen />
      {{ input }}
      <TextInput @get-input="(e) => (input = e.target.value)" />
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
