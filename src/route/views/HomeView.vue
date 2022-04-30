<script setup>
import TextPrompt, { promptText } from "../../components/TextPrompt.vue";
import GameScreen from "../../components/GameScreen.vue";
import TextInput from "../../components/TextInput.vue";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
const TIME_LIMIT = 30_000;
const _wordsPerMinute = ref(0);
const wordMatch = ref("");

const matchText = computed(() => ({
  text: wordMatch.value && wordMatch.value[0],
  wordCount: wordMatch.value && wordMatch.value[0].split(/\s+/).length,
}));
// track typing progress
function track(e) {
  wordMatch.value = promptText.match(e.target.value);
}
</script>
<template>
  <article class="home-wrapper">
    <article class="game-wrapper">
      <GameScreen />
      <!-- TODO: move into Game Screen -->
      <div class="game-progress-bar">
        <div>Text</div>
        <div>Word Count</div>
        <div>{{ matchText.text || "foo" }}</div>
        <div>{{ matchText.wordCount || "bar" }}</div>
      </div>
      <TextInput @get-input="(e) => track(e)" />
    </article>
    <aside class="text-prompt-wrapper">
      <TextPrompt v-slot="props">
        {{ props.text }}
      </TextPrompt>
    </aside>
  </article>
</template>
<style scoped>
.home-wrapper {
  display: grid;
  grid-template-columns: 300px 1fr;
  grid-template-areas:
    "prompt game"
    "prompt game";
  gap: 18px;
}
.game-wrapper {
  grid-area: game;
}
.text-prompt-wrapper {
  grid-area: prompt;
}
.game-progress-bar {
  display: grid;
  grid-template-columns: 400px 150px;
  gap: 10px;
}
</style>
