<script setup lang="ts">

</script>

<template>
  <div class="media-list-layout">
    <header>
      <slot name="header" />
    </header>
    <main>
      <slot name="main" />
    </main>
    <aside>
      <slot name="aside" />
    </aside>
  </div>
</template>

<style scoped>
.media-list-layout {
  margin-top: 100px;

  width: 100%;
  height: 1000px;

  display: grid;
  grid-template-columns: 4fr 1fr;
  grid-template-rows: auto 1fr;
  gap: var(--spacing-lg);
  grid-template-areas:
  "h a"
  "m a";
}

/* TODO: rm colors and heights */

.media-list-layout header {
  min-height: 60px;
  grid-area: h;
  background-color: darkseagreen;
}

.media-list-layout main {
  position: relative;
  grid-area: m;
}

.media-list-layout aside {
  grid-area: a;
  background-color: darkkhaki;
}
</style>
