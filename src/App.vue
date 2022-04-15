<script setup>
import TextPrompt from "./components/TextPrompt.vue";
import GameScreen from "./components/GameScreen.vue";
import KeyboardLayout from "./components/KeyboardLayout.vue";
</script>

<template>
  <div class="app">
    <header><h2>typing game</h2></header>
    <nav>
      <ul>
        <li><a href="#">settings</a></li>
        <li><a href="#">high scores</a></li>
      </ul>
    </nav>
    <article>
      <GameScreen />
      <KeyboardLayout />
    </article>
    <aside>
      <TextPrompt />
    </aside>
  </div>
</template>

<style>
:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
