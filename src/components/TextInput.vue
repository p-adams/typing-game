<script setup></script>
<template>
  <article class="text-input-wrapper">
    <section>
      <h3>text input</h3>
      <div class="input-wrapper">
        <input />
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
