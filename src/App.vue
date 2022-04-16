<script setup>
import TextPrompt from "./components/TextPrompt.vue";
import GameScreen from "./components/GameScreen.vue";
import KeyboardLayout from "./components/KeyboardLayout.vue";
</script>

<template>
  <div class="app">
    <header class="header-wrapper"><h2>typing game</h2></header>
    <nav class="nav-wrapper">
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
    <footer>Built with Vue</footer>
  </div>
</template>

<style>
:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app {
  border: 1px solid green;
  height: 100vh;
}
</style>
