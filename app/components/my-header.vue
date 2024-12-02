<script setup lang="ts">

</script>

<template>
  <header class="header">
    <NestLink to="/" class="header__logo">
      ShikiFlow
    </NestLink>
  </header>
</template>

<style scoped>
.header {
  z-index: 100;
  position: fixed;
  width: 1200px;
  height: 64px;
  top: 24px;
  left: 50%;
  transform: translateX(-50%);

  background-color: rgba(255, 255, 255, .5); /* TODO: Add variable */
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 4px 24px 0 rgba(8, 9, 10, .1);

  display: flex;
  align-items: center;
  padding: 0 24px;

  &__logo {
    font-size: 24px;
    font-weight: bold;
  }
}
</style>
