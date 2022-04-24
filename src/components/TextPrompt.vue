<script>
import { PROMPT_1 as text } from "../prompts/index";
export const promptText = text;
</script>

<script setup>
import { PROMPT_1 as text } from "../prompts/index";
</script>
<template>
  <article>
    <section>
      <h3>text prompt</h3>
      <p><slot :text="text" /></p>
    </section>
  </article>
</template>
<style scoped></style>
