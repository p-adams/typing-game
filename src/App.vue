<script setup>
import TextPrompt from "./components/TextPrompt.vue";
import GameScreen from "./components/GameScreen.vue";
import KeyboardLayout from "./components/KeyboardLayout.vue";
</script>

<template>
  <div class="app">
    <header class="header-wrapper">
      <h2>typing game</h2>
    </header>
    <nav class="nav-wrapper">
      <ul>
        <li><a href="#">settings</a></li>
        <li><a href="#">high scores</a></li>
      </ul>
    </nav>

    <article class="content-wrapper">
      <GameScreen />
      <KeyboardLayout />
    </article>
    <aside class="aside-wrapper">
      <TextPrompt />
    </aside>
    <footer class="footer-wrapper">Built with Vue</footer>
  </div>
</template>

<style scoped>
:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.app {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-areas:
    "header header"
    "nav nav"
    "aside content"
    "footer footer";
  background-color: var();
}

.header-wrapper {
  grid-area: header;
  background-color: var();
}

.nav-wrapper {
  display: flex;
  width: 100%;
  grid-area: nav;
}
.nav-wrapper > ul {
  width: inherit;
  display: flex;
  justify-content: space-around;
}

a {
  color: var();
}

.content-wrapper {
  grid-area: content;
}
.aside-wrapper {
  grid-area: aside;
}

.footer-wrapper {
  grid-area: footer;
}
</style>
