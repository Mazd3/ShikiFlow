<script setup lang="ts">
const { setLocale } = useI18n()
</script>

<template>
  <header class="header">
    <NuxtLink to="/anime" class="logo">
      ShikiFlow
    </NuxtLink>
    <button @click="setLocale('en')">
      en
    </button>
    <button @click="setLocale('ru')">
      ru
    </button>
  </header>
</template>

<style scoped>
.header {
  z-index: 100;
  position: fixed;
  width: 1200px;
  height: 64px;
  top: 18px;
  left: 50%;
  transform: translateX(-50%);

  background-color: rgba(var(--background), .75); /* TODO: Add variable */
  backdrop-filter: blur(10px);
  border-radius: 12px;
  box-shadow: 0 4px 24px 0 rgba(8, 9, 10, .1);
  border: 1px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
}

.logo {
  color: rgb(var(--text));
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    color: var(--accent);
  }
}
</style>
