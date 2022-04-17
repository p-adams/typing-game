<script setup></script>
<template>
  <article class="keyboard-layout-wrapper">
    <section>
      <h3>keyboard layout</h3>
      <div class="keyboard-wrapper">
        <div class="keyboard-row top">
          <button>q</button>
          <button>w</button>
          <button>e</button>
          <button>r</button>
          <button>t</button>
          <button>y</button>
          <button>u</button>
          <button>i</button>
          <button>o</button>
          <button>p</button>
        </div>
        <div class="keyboard-row middle">
          <button>a</button>
          <button>s</button>
          <button>d</button>
          <button>f</button>
          <button>g</button>
          <button>h</button>
          <button>j</button>
          <button>k</button>
          <button>l</button>
        </div>
        <div class="keyboard-row bottom">
          <button>z</button>
          <button>x</button>
          <button>c</button>
          <button>v</button>
          <button>b</button>
          <button>n</button>
          <button>m</button>
        </div>
      </div>
    </section>
  </article>
</template>
<style scoped>
.keyboard-wrapper {
  display: grid;
  grid-template-areas:
    "top"
    "middle"
    "bottom";
  gap: 10px;
}

.keyboard-row {
  display: flex;
}

.keyboard-row.top {
  grid-area: top;
}
.keyboard-row.middle {
  grid-area: middle;
}
.keyboard-row.bottom {
  grid-area: bottom;
}
</style>
