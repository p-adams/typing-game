<script setup>
import TextPrompt, { promptText } from "../../components/TextPrompt.vue";
import GameScreen from "../../components/GameScreen.vue";
import TextInput from "../../components/TextInput.vue";
import { ref } from "vue";
import { computed } from "@vue/reactivity";
const TIME_LIMIT = 30_000;
const _wordCount = ref(0);
const _wordsPerMinute = ref(0);
const wordMatch = ref("");

const matchText = computed(() => wordMatch.value[0]);

// track typing progress
function track(e) {
  wordMatch.value = promptText.match(e.target.value);
  if (wordMatch) {
    // increment wordCount
    // add word count to running WPM tally
  } else {
    console.log("no match");
  }
}
</script>
<template>
  <article class="home-wrapper">
    <article class="game-wrapper">
      <GameScreen />
      <!-- TODO: move into Game Screen -->
      <div>
        {{ matchText }}
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
</style>
