<script setup></script>

<template>
  <div class="app">
    <header class="header-wrapper">
      <h2><router-link to="/">typing game</router-link></h2>
    </header>
    <nav class="nav-wrapper">
      <ul>
        <li><router-link to="/settings">settings</router-link></li>
        <li><router-link to="/scores">high scores</router-link></li>
      </ul>
    </nav>
    <article class="content-wrapper">
      <router-view />
    </article>

    <footer class="footer-wrapper"><p>Built with Vue</p></footer>
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
  display: flex;
  flex-direction: column;
  background-color: var();
}

.header-wrapper {
  grid-area: header;
  background-color: var();
}

.nav-wrapper {
  display: flex;
  width: 100%;
}
.nav-wrapper > ul {
  width: inherit;
  display: flex;
  justify-content: space-around;
}

.content-wrapper {
  border: 1px solid;
  height: 550px;
}

.footer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
</style>
