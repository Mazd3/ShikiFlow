<template>
  <div class="layout">
    <Header />
    <slot />
  </div>
</template>

<style scoped>
.layout {
  min-height: 100vh;
  width: 1200px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>
