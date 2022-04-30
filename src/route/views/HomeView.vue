<script setup>
import TextPrompt, { promptText } from "../../components/TextPrompt.vue";
import GameScreen from "../../components/GameScreen.vue";
import TextInput from "../../components/TextInput.vue";
import { onUpdated, ref } from "vue";
import { computed } from "@vue/reactivity";
const TIME_LIMIT = 30_000;
const _wordsPerMinute = ref(0);
const wordMatch = ref("");
const matchedText = ref("");

const _promptWordCount = promptText.split(/\s+/).length;

const wordCount = computed(
  () => matchedText.value && matchedText.value.split(/\s+/).length
);

// track typing progress
function track(e) {
  wordMatch.value = e.target.value;
  const match = promptText.match(wordMatch.value);
  matchedText.value = match && match[0];
}
</script>
<template>
  <article class="home-wrapper">
    <article class="game-wrapper">
      <GameScreen />
      {{ wordMatch }}
      <!-- TODO: move into Game Screen -->
      <div class="game-progress-bar">
        <div class="header">Text</div>
        <div class="header">Word Count</div>
        <div>{{ matchedText }}</div>
        <div>{{ wordCount || 0 }}</div>
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
.game-progress-bar .header {
  border: 1px solid;
}
</style>
