<script setup lang="ts">
const { setLocale } = useI18n()
</script>

<template>
  <header class="header">
    <div class="header__container">
      <NuxtLink to="/anime" class="header__logo">
        ShikiFlow
      </NuxtLink>

      <Search class="header__search" />

      <div class="header__locale">
        <button @click="setLocale('en')">
          en
        </button>
        <button @click="setLocale('ru')">
          ru
        </button>
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  z-index: 100;

  position: fixed;
  width: 100%;
  top: 0;
  left: 0;

  background-color: rgba(var(--background), .75); /* TODO: Add variable */
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 24px 0 rgba(8, 9, 10, .1);
  border-bottom: 1px solid var(--border);
}

.header__container {
  height: 64px;
  width: 1200px;
  margin: 0 auto;

  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.header__logo {
  color: rgb(var(--text));
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;

  &:hover {
    color: var(--accent);
  }
}

.header__search {
  grid-column: span 3;
}

.header__locale {

}
</style>
