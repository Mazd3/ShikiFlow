<template>
  <div class="layout">
    <Header />
    <slot />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  max-width: var(--screen);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
}
</style>
