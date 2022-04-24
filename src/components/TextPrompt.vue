<script setup>
const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in sapien ex. Praesent eu dui vel nunc ultrices sagittis. Cras rhoncus accumsan ante eu mattis. Aliquam fermentum convallis lorem, ac facilisis tortor lobortis a. Mauris condimentum ac purus non consectetur. Praesent lacus mi, auctor non faucibus sit amet, lacinia sit amet odio. Nulla molestie dolor egestas libero venenatis congue. Aenean consectetur lacus justo, vel consectetur est cursus nec. Pellentesque gravida at nisl sed commodo. Duis eu pharetra sapien. Vestibulum eleifend porta mollis. Fusce nulla libero, egestas ac felis id, feugiat congue ante. Pellentesque turpis purus, cursus in dui ut, condimentum. ";
</script>
<template>
  <article>
    <section>
      <h3>text prompt</h3>
      <p><slot :text="text" /></p>
    </section>
  </article>
</template>
<style></style>
